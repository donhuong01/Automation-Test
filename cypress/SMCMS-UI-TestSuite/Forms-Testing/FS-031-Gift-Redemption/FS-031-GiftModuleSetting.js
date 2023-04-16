import GiftModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftModuleSetting'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../.././fixtures/login'



beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})



describe('[TS02] FS-031 Gift Module Setting', function () {

    it('[TC01] To be able to test updating and then cancelling gift module setting', function () {


        cy.visit('/membership/giftModuleSetting')
        cy.wait(3000)

        GiftModuleSetting.verifyPageTitle("Gift Module Setting")

        GiftModuleSetting.FilloutGiftModuleSetting("30", "Yes", "14")

        GiftModuleSetting.AddSourceChannel("SAFRA Jurong")

        GiftModuleSetting.Cancel()


    })

    it('[TC02] To be able to test updating and then cancelling gift module setting.g', function () {


        cy.visit('/membership/giftModuleSetting')
        cy.wait(3000)

        GiftModuleSetting.verifyPageTitle("Gift Module Setting")

        GiftModuleSetting.FilloutGiftModuleSetting("30", "Yes", "14")

        GiftModuleSetting.AddSourceChannel("SAFRA Jurong")

        GiftModuleSetting.Save("SAFRA Jurong")

        GiftModuleSetting.VerifyNotificationMessage("Record has been saved successfully.")


    })


})