import SRPRedemptionCatalogueListing from '../../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionCatalogueListing'
import SRPRedemptionCatalogueDetail from '../../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionCatalogueDetails'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const { ItemCode, ItemDescription, Status, Category, PublishStartDate, PublishEndDate,
    ExpiryCollection, Featured, Img, location, RedemptionAmount, RedemptionPoint } = data.SRP_Redemption_Catalogue_Management

describe('[TS05] FS-036 SRP Redemption Catalogue Management', function () {

    it('[TC01] Update and Save SRP Redemption Catalogue', function () {

        cy.visit('/membership/srp/redemptionCatalogueListing')


        SRPRedemptionCatalogueListing.ImportFromProduct()

        SRPRedemptionCatalogueListing.FilterListingForm(ItemCode, ItemDescription, Status)

        SRPRedemptionCatalogueListing.ClickOnTableLink(ItemCode)

        SRPRedemptionCatalogueDetail.FilloutGeneralFields(Category, PublishStartDate, PublishEndDate,
            ExpiryCollection, Featured, Img, "Active")

        SRPRedemptionCatalogueDetail.DifferentSourceRedemption(location, RedemptionAmount, RedemptionPoint)

        SRPRedemptionCatalogueDetail.Save()

        SRPRedemptionCatalogueDetail.VerifyPageTitle('SRP Redemption Catalogue Listing')

    })


})