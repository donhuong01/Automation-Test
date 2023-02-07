
import login from '../../../fixtures/login'

import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import IGMembershipTerminationRequest from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/IGMembershipTerminationRequest'
import TerminationData from '../../../fixtures/Data_Module/FS-016-Interest-Group/FS-016-Interest-Group-Management'
import InterestGroupListing from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'

import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import InterestGroupMembershipReinstatement from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReinstatement'
import CustomerCheckInPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'


const ShoppingCart = new ShoppingCartPayments()
const common = new Common
const CustomerCheck = new CustomerCheckInPage()



//data destructuring 
const { Status, TerminatedBy, TerminationDate, TerminationReason } = TerminationData.IGMembershipTermination

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const InterestGMembershipTermination = (MemID, CustomerName) => {

describe('[TS01] Interest Group Membership Termination Management', function () {


    it('Interest Group Membership Termination', function () {

        common.Checkin(MemID)

        cy.visit('/membership/interestGroupMembershipListing')
        cy.wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Terminate')

        IGMembershipTerminationRequest.TerminationInformation(TerminatedBy, TerminationDate, TerminationReason)

        IGMembershipTerminationRequest.Submit()

        cy.wait(5000)

        common.ApprovalWorkFlow('IG-TMN', 'Interest Group Membership Termination Approval Workflow', 'Approve', 'test')

        cy.wait(5000)
        cy.visit('/membership/interestGroupMembershipListing')
        cy.wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        // InterestGroupListing.VerifyStatus(Status)

        // InterestGroupListing.SlectTableLinkItem(CustomerName)

        // InterestGroupListing.Maintenance('Reinstate')

        // InterestGroupMembershipReinstatement.ReinstatementInfo(TerminationData.IGMmebershipReinstatement.TermStartDate)

        // InterestGroupMembershipReinstatement.AddToCart()

        // ShoppingCart.fillOutandApplyPayment('CASH')

        cy.LogoutOfSmcms();

    })

})

}

export default InterestGMembershipTermination