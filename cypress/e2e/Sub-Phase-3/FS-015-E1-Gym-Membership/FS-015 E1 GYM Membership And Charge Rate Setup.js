import InterestGroupMainListing from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainListing'
import InterestGroupMain from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainManagement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1 GYM Membership And Charge Rate Setup'

const common = new Common()

const E1GYMMembershipAndChargeRateSetup = () => {
const {

    Name,
    Code,
    MainCategory,
    IGGroupCategoryGroup,
    FabsGroup,
    ClubClassification,
    LifeStyleGroup,
    SMCClassification,
    OwnerEmail,
    LocationName,
    ApproverOption,
    ApproverEmail,
    ChargeName,
    TransactionType,
    CalculationType,
    AmmountType,
    CustomerCategoryName,
    RegItemCode,
    RenewalItemCode,
    DefermentItemCode,
    ReinstatementItemCode,
    TerminationItemCode,
    WaiverItemCode,
    ReversalItemCode,
    BussinessType

} = data



describe('[TS01] FS-015 E1 GYM Membership And Charge Rate Setup ', function () {

    it('[TC01] Creating new E1 GYM Membership And Charge Rate Setup', function () {

        cy.visit('/membership/interestGroupMainListing')

        InterestGroupMainListing.CreateNew()

        InterestGroupMain.FilloutIGMainInformation(Name, Code, MainCategory, IGGroupCategoryGroup, FabsGroup,
            ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail)

        InterestGroupMain.AddLocation(LocationName)

        InterestGroupMain.AddApproverOption(ApproverOption, ApproverEmail)

        InterestGroupMain.SaveAsDraft()

        InterestGroupMainListing.FilterValueByStatus(Name, BussinessType, 'Draft')

        InterestGroupMainListing.ClickTableLink(Name)

        InterestGroupMain.FilloutChargeTypeFields(ChargeName, TransactionType, CalculationType, AmmountType)

        InterestGroupMain.AddCustomerCategory(CustomerCategoryName)

        InterestGroupMain.FilloutProductInformation(RegItemCode, RenewalItemCode, DefermentItemCode, ReinstatementItemCode,
            TerminationItemCode, WaiverItemCode, ReversalItemCode)

        InterestGroupMain.Submit()

        common.ApprovalWorkFlow('IGM', 'Interest Group Main Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/interestGroupMainListing')

        InterestGroupMainListing.FilterValueByStatus(Name, BussinessType, 'Approved')

        InterestGroupMainListing.Delete()

    })

});

}
export default E1GYMMembershipAndChargeRateSetup