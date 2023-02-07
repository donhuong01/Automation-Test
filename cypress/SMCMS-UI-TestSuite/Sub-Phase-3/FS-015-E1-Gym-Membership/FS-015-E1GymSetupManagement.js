import login from '../../../fixtures/login';
import InterestGroupListing from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupListing'
import InterestGroupDetail from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupDetail'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1 Gym Setup Management'


// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const common = new Common()

const { Name, Code, IGMain, SubcategoryType, PublishingDate, EndDate, MembershipTpe, MinAge, MaxAge, IsAgeRequired, IsIGeCardApplicable, IsAllowUserView, IsAllowFloating,
    TermLength, TermLengthType, OnlineDisplay, MinRegTerm, MinRenewalTerm, MinRangeBypass, MaxRangeBypass,
    AccessMode1, CustomerCategName, location, ChargeName, TransactionType, CalculationType, AmountType, ProductName } = data

const E1GYMSetupManagement = () => {

describe('[TS01] FS-015 E1 Gym Setup Management ', function () {

    it('[TC01] Creating an E1 Gym', function () {

        cy.visit('/membership/interestGroupListing')

        InterestGroupListing.CreateNew()

        InterestGroupDetail.InterestGroupDetailInformation(Name, Code, IGMain, SubcategoryType, PublishingDate, EndDate, MembershipTpe)

        InterestGroupDetail.FilloutRegistration(MinAge, MaxAge, IsAgeRequired, IsIGeCardApplicable, IsAllowUserView, IsAllowFloating)

        InterestGroupDetail.FilloutMembershipTerm(TermLength, TermLengthType, OnlineDisplay, MinRegTerm, MinRenewalTerm, MinRangeBypass, MaxRangeBypass)

        InterestGroupDetail.FilloutAccessModeList(AccessMode1)

        InterestGroupDetail.CustomerCategoryAccessModeList(CustomerCategName)

        InterestGroupDetail.AddLocation(location)

        InterestGroupDetail.SaveAsDraft()

        InterestGroupListing.FilterWithName(Name)

        InterestGroupListing.ClickTableLink(Name)

        InterestGroupDetail.ClickChargeRateTab()

        InterestGroupDetail.FilloutCargeType(ChargeName, TransactionType, CalculationType, AmountType)

        InterestGroupDetail.ChargeRateCustomerCategory('AS')

        InterestGroupDetail.ProductMasterInformation(ProductName)

        InterestGroupDetail.SaveAsDraft()

        InterestGroupListing.FilterWithName(Name)

        InterestGroupListing.ClickTableLink(Name)

        InterestGroupDetail.Submit()

        common.ApprovalWorkFlow('IG', 'Interest Group Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/interestGroupListing')

        InterestGroupListing.FilterWithName(Name)

        InterestGroupListing.VerifyStatus('Approved')

        InterestGroupListing.SelectTableEntry(Name)

        InterestGroupListing.Delete()


    })

});

}
export default E1GYMSetupManagement