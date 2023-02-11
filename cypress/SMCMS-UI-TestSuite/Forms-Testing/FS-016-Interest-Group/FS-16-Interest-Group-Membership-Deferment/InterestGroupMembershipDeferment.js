
import login from '../../../../fixtures/login'

import IGMembershipRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipRegistarion'
import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import IGMembershipDeferment from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipDeferment'
import IGDEFDATA from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Defer'
import InterestGroupMembershipReversalRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[TS12] FS-016 Interest Group Membership Deferment', function () {


    it('Creating Interest Group Membership Deferment, Complete Approval Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Defer')

        IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        IGMembershipDeferment.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Approve', IGDEFDATA.DefReason)

        cy.wait(8000)

        IGMembershipRegistration.VerifyItemInIGMemListingTBL(IGDEFDATA.CustomerName)

        IGMembershipRegistration.ViewTransactionHistory(IGDEFDATA.CustomerName)

        IGMembershipDeferment.VerifyDefermentStatus(IGDEFDATA.DefReason)

        InterestGroupListing.Cancel()

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')
        cy.wait(5000)

        cy.visit('/membership/interestGroupMembershipListing').wait(3000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.VerifyStatus('Active')

    })

    it('Creating Interest Group Membership Deferment, Complete Query Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Defer')

        IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        IGMembershipDeferment.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Query', 'test')

        cy.wait(5000)

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Complete', 'test')

        cy.wait(5000)

        IGMembershipRegistration.VerifyItemInIGMemListingTBL(IGDEFDATA.CustomerName)

        IGMembershipRegistration.ViewTransactionHistory(IGDEFDATA.CustomerName)

        IGMembershipDeferment.VerifyDefermentStatus(IGDEFDATA.DefReason)

        InterestGroupListing.Cancel()

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Reverse')

        InterestGroupMembershipReversalRequest.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')
        cy.wait(5000)

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.VerifyStatus('Active')

    })

    it('Creating Interest Group Membership Deferment, Complete Rejection Workflow', function () {

        cy.visit('/membership/interestGroupMembershipListing').wait(2000)

        InterestGroupListing.FiterWithCustomerName(IGDEFDATA.CustomerName)

        InterestGroupListing.SlectTableLinkItem(IGDEFDATA.CustomerName)

        InterestGroupListing.Maintenance('Defer')

        IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        IGMembershipDeferment.Submit()

        IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Reject', 'test')

    })

})

