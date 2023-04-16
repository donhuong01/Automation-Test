import GiftManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftManagement'
import Data from '../../../fixtures/Data_Module/FS-031-Gift/Gift_Data'
import login from '../../../fixtures/login'




const {  
    ItemCode,
    ItemDescription,
    WareHouse,
    RedemptionType,
    PublishDateFrom,
    PublishDateTo, 
    ExpiryCollection,
    Price, 
    GiftCategory,
    File, 
    Status} = Data.GiftManagement

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})



describe('[TS01] FS-031 Gift Management', function () {

    it('[TC01] To be able to test updating and then cancelling gift management', function () {


        cy.visit('/membership/giftManagementListing')
        cy.wait(3000)

        GiftManagement.verifyPageTitle("Gift Management Listing")

        GiftManagement.FilterByItemCode(ItemCode)

        GiftManagement.FilterByItemDescription(ItemDescription)

        GiftManagement.FilterByWareHouse( WareHouse)

        GiftManagement.ClickOnSearhFilter()

        GiftManagement.VerifyTableEntry(ItemCode)

        GiftManagement.ClickTableEntry(ItemCode)

        GiftManagement.verifyPageTitle("Gift Management Detail")
        
        
        GiftManagement.FilloutGiftManagementDetailFrom(RedemptionType,
            PublishDateFrom,
            PublishDateTo, 
            ExpiryCollection,
            Price, 
            GiftCategory,
            File, 
            Status)

        GiftManagement.Cancel()





    })

    it('[TC02] To be able to test updating and then saving gift management', function () {


        cy.visit('/membership/giftManagementListing')
        cy.wait(3000)

        GiftManagement.verifyPageTitle("Gift Management Listing")

        GiftManagement.FilterByItemCode(ItemCode)

        GiftManagement.FilterByItemDescription(ItemDescription)

        GiftManagement.FilterByWareHouse(WareHouse)

        GiftManagement.ClickOnSearhFilter()

        GiftManagement.VerifyTableEntry(ItemCode)

        GiftManagement.ClickTableEntry(ItemCode)

        GiftManagement.verifyPageTitle("Gift Management Detail")
        
        
        GiftManagement.FilloutGiftManagementDetailFrom(RedemptionType,
            PublishDateFrom,
            PublishDateTo, 
            ExpiryCollection,
            Price, 
            GiftCategory,
            File, 
            Status)

        GiftManagement.Save()
        
        GiftManagement.VerifyNotificationMessage("Record has been saved successfully.")





    })




})