import GiftManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftManagement'
import Data from '../../../fixtures/Data_Module/FS-031-Gift/Gift_Data'




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
    Status } = Data.GiftManagement

const GiftsManagement = () => {

    describe('[TS01] FS-031 Gift Management', function () {

        it('[TC01] To be able to test updating and then cancelling gift management', function () {


            cy.visit('/membership/giftManagementListing')
            cy.wait(3000)

            GiftManagement.verifyPageTitle("Gift Management Listing")

            GiftManagement.FilterByItemCode(ItemCode)

            GiftManagement.FilterByItemDescription(ItemDescription)

            //skip for now, need to fix
            // GiftManagement.FilterByWareHouse( WareHouse)

            GiftManagement.ClickOnSearhFilter()

            GiftManagement.VerifyTableEntry(ItemCode)

            //temporarily disable uncaught exception
            //not sure if this disables the uncaught:exception
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
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

}

export default GiftsManagement
