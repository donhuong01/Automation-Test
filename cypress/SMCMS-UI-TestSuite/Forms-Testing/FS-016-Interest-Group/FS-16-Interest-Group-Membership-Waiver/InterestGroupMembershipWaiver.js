import login from '../../../../../fixtures/login'
import InterestGroupListing from '../../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import WaiverData from '../../../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Waiver'
import IGMembershipWaiver from '../../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipWaiver'
import InterestGroupMembershipReversalRequest from '../../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const { CustomerName, WaiverTerm, WaiverReason, ReasonCode } = WaiverData.InterestGroupWaiver


describe('[TS11] FS-016 Interest Group Membership Waiver', function () {

    it('Creating Interest Group Membership Waiver and Complete Approval Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Approve', 'test')

        cy.wait(5000)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.ViewTransactionHistory()

        InterestGroupListing.VerifyReasonCode(ReasonCode)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

    })
    it('Creating Interest Group Membership Waiver and Complete Query Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Query', 'test')

        cy.wait(5000)

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Complete', 'Action Completed')

        cy.wait(5000)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.ViewTransactionHistory()

        InterestGroupListing.VerifyReasonCode(ReasonCode)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

    })
    it('Creating Interest Group Membership Waiver and Complete Rejection Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(WaiverData.CustomerName)

        InterestGroupListing.SlectTableLinkItem(WaiverData.CustomerName)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverData.WaiverTerm, WaiverData.WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Approve', WaiverData.WaiverReason)

    })

})

