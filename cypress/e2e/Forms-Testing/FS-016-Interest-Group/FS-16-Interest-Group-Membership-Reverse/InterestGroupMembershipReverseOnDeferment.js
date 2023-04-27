
import login from '../../../../fixtures/login'


import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import IGMembershipDeferment from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipDeferment'
import IGDEFDATA from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Defer'
import InterestGroupMembershipReversalRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'



beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[TS01] FS-016 Interest Group Membership Reversal', function () {

    it('[TC01] Creating Interest Group Membership Reversal On Deferment transaction and Complete query workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Defer')

        IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        IGMembershipDeferment.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Approve', IGDEFDATA.DefReason)

        cy.visit('/membership/interestGroupMembershipListing').wait(5000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Query', 'Query')

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Completed', 'tast Completed')

    })

    it('[TC02] Creating Interest Group Membership Reversal On Deferment transaction and Complete Rejection workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Defer')

        IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        IGMembershipDeferment.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Approve', IGDEFDATA.DefReason)

        cy.visit('/membership/interestGroupMembershipListing').wait(5000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Reject', 'Reject')

    })

})

