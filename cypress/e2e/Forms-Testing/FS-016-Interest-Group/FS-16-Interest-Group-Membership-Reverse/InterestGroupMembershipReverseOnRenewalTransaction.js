
import login from '../../../../fixtures/login'

import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import InterestGroupMembershipReversalRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'
import InterestGroupMembershipRenewal from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Renewal'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


const common = new Common()

const MemberId = 'A30001142'
const CustomerName = 'Juan Dela'

describe('[TS01] FS-016 Interest Group Membership Reversal', function () {

    it('[TC01] Creating Interest Group Membership Reversal On Renewal transaction and Complete query workflow', function () {

        common.Checkin(MemberId)

        cy.visit('/membership/interestGroupMembershipRenewal').wait(5000)

        InterestGroupMembershipRenewal.SelectIGMembership('G1000000037')

        InterestGroupMembershipRenewal.SelectMembershipTerm(18)

        InterestGroupMembershipRenewal.AddToCard()

        common.fillOutandApplyPayment('CASH')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Query', 'Query')

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Completed', 'tast Completed')

        cy.LogoutOfSmcms()
    })

    it('[TC02] Creating Interest Group Membership Reversal On Renewal transaction and Complete Rejection workflow', function () {

        common.Checkin(MemberId)

        cy.visit('/membership/interestGroupMembershipRenewal').wait(5000)

        InterestGroupMembershipRenewal.SelectIGMembership('G1000000037')

        InterestGroupMembershipRenewal.SelectMembershipTerm(18)

        InterestGroupMembershipRenewal.AddToCard()

        common.fillOutandApplyPayment('CASH')

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        common.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Reject', 'Reject')

        cy.LogoutOfSmcms()
    })

})

