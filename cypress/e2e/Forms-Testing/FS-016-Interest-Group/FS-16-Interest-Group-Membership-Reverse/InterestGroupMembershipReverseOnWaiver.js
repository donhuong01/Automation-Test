
import login from '../../../../fixtures/login'

import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Waiver'
import InterestGroupMembershipReversalRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

import IGMembershipWaiver from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipWaiver'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


const common = new Common()


const { CustomerName, WaiverTerm, WaiverReason } = data.InterestGroupWaiver

describe('[TS01] FS-016 Interest Group Membership Reversal', function () {

    it('[TC01] Creating Interest Group Membership Reversal On Waiver transaction and Complete query workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        common.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Approve', 'test')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Query', 'Query')

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Complete', 'Tast Completed')

    })

    it('[TC02] Creating Interest Group Membership Reversal On Waiver transaction and Complete Rejection workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Waive')

        IGMembershipWaiver.WaiverInfo(WaiverTerm, WaiverReason)

        IGMembershipWaiver.Request()

        common.ApprovalWorkFlow('IG-WAV', 'Interest Group Batch Waiver Approval Workflow', 'Approve', 'test')

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Reject', 'Reject')

    })

})

