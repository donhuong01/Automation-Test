import SRPRedemptionCatalogueListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionCatalogueListing'
import SRPRedemptionCatalogueDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionCatalogueDetails'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'

beforeEach(() => {
cy.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Buffer is not defined')) {
        console.log('Caught buffer error');
        return false; // This will prevent the test from failing
    }
    // If it's not a buffer error, let the test fail
    return true;
});

})

const { ItemCode, ItemDescription, Status, Category, PublishStartDate, PublishEndDate,
    ExpiryCollection, Featured, Img, location, RedemptionAmount, RedemptionPoint } = data.SRP_Redemption_Catalogue_Management

    const 
    SRPRedemptionCatalogueManagement = () =>{

describe('[TS05] FS-036 SRP Redemption Catalogue Management', function () {

    it('[TC01] Update and Save SRP Redemption Catalogue', function () {

        cy.visit('/membership/srp/redemptionCatalogueListing')


        SRPRedemptionCatalogueListing.ImportFromProduct()

        SRPRedemptionCatalogueListing.FilterListingForm(ItemCode, ItemDescription, Status)

        SRPRedemptionCatalogueListing.ClickOnTableLink(ItemCode)

        SRPRedemptionCatalogueDetail.FilloutGeneralFields(Category, PublishStartDate, PublishEndDate,
            ExpiryCollection, Featured, Img, "Active")

        SRPRedemptionCatalogueDetail.DifferentSourceRedemption(location, RedemptionAmount, RedemptionPoint)

        // SRPRedemptionCatalogueDetail.importPicture()

        SRPRedemptionCatalogueDetail.Save()

        SRPRedemptionCatalogueDetail.VerifyPageTitle('SRP Redemption Catalogue Listing')

    })


})

}

export default SRPRedemptionCatalogueManagement

