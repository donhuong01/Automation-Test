import GiftModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftModuleSetting'
import data from '../../../fixtures/Data_Module/FS-031-Gift/Gift_Data'

const GiftModuleSettings = () => {

describe('[TS02] FS-031 Gift Module Setting', function () {

    it('[TC01] To be able to test updating and then cancelling gift module setting', function () {


        cy.visit('/membership/giftModuleSetting')
        cy.wait(3000)

        GiftModuleSetting.verifyPageTitle("Gift Module Setting")

        GiftModuleSetting.FilloutGiftModuleSetting("30", "Yes", "14")

        GiftModuleSetting.AddSourceChannel("SAFRA Jurong")

        GiftModuleSetting.Cancel()


    })

    it('[TC02] To be able to test updating and then Saving gift module setting.g', function () {


        cy.visit('/membership/giftModuleSetting')
        cy.wait(3000)

        GiftModuleSetting.verifyPageTitle("Gift Module Setting")

        GiftModuleSetting.FilloutGiftModuleSetting("30", "Yes", "14")

        GiftModuleSetting.AddSourceChannel("SAFRA Jurong")

        GiftModuleSetting.Save("SAFRA Jurong")

        GiftModuleSetting.VerifyNotificationMessage("Record has been saved successfully.")


    })


})

}
export default GiftModuleSettings