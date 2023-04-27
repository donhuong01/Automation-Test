
import login from '../../../../fixtures/login'
import TerminationData from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS-016-Interest-Group-Management'
import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import InterestGroupMembershipReinstatement from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReinstatement'

const common = new Common


//data destructuring 
const { TermStartDate, MemID, Status, CustomerName } = TerminationData.IGMmebershipReinstatement

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('[TS01] FS-016 Interest Group Membership Reinstatement', function () {

    it('Interest Group Membership Reinstatement', function () {

        common.Checkin(MemID)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.VerifyStatus(Status)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reinstate')

        InterestGroupMembershipReinstatement.ReinstatementInfo(TermStartDate)

        InterestGroupMembershipReinstatement.AddToCart()

        common.fillOutandApplyPayment('CASH')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.VerifyStatus('Active')

        cy.LogoutOfSmcms();

    })

})

