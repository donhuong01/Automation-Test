import login from '../../../../fixtures/login'
import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import WaiverData from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Waiver'
import IGMembershipWaiver from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipWaiver'
import InterestGroupMembershipReversalRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})
const { CustomerName1, CustomerName2, WaiverTerm, WaiverReason, ReasonCode } = WaiverData.BatchIGWaiver

describe('[TS11] FS-016 Batch Interest Group Membership Waiver', function () {

    it('Creating a Batch Interest Group Membership Waiver and Complete Approval Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.FiterWithCustomerName(CustomerName2)

        InterestGroupListing.SlectTableLinkItem(CustomerName2)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Approve', 'test')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.ViewTransactionHistory()

        InterestGroupListing.VerifyReasonCode(ReasonCode)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName2)

        InterestGroupListing.SlectTableLinkItem(CustomerName2)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

    })
    it('Creating Batch Interest Group Membership Waiver and Complete Query Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.FiterWithCustomerName(CustomerName2)

        InterestGroupListing.SlectTableLinkItem(CustomerName2)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Query', 'test')

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Complete', 'test')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.ViewTransactionHistory()

        InterestGroupListing.VerifyReasonCode(ReasonCode)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName2)

        InterestGroupListing.SlectTableLinkItem(CustomerName2)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        InterestGroupListing.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')

    })

    it('Creating Batch Interest Group Membership Waiver and Complete Rejection Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName1)

        InterestGroupListing.SlectTableLinkItem(CustomerName1)

        InterestGroupListing.FiterWithCustomerName(CustomerName2)

        InterestGroupListing.SlectTableLinkItem(CustomerName2)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        InterestGroupListing.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Reject', 'test')

    })

})

