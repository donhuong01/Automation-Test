
import login from '../../../../fixtures/login'

import IGMembershipTerminationRequest from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/IGMembershipTerminationRequest'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/InterestGroupMembershiptTermination'
import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

data.forEach(item => {

    const { CustomerName, TerminatedBy, TerminationDate, TerminationReason, MemID } = item

    describe('[TS01] Interest Group Membership Termination Management', function () {

        it('Request IG Membership Termination and Add to Cart', function () {

            common.Checkin(MemID)

            cy.visit('/membership/interestGroupMembershipListing').wait(2000)

            InterestGroupListing.FiterWithCustomerName(CustomerName)

            InterestGroupListing.SlectTableLinkItem(CustomerName)

            InterestGroupListing.Maintenance('Terminate')

            IGMembershipTerminationRequest.TerminationInformation(TerminatedBy, TerminationDate, TerminationReason)

            IGMembershipTerminationRequest.Submit()

            common.ApprovalWorkFlow('IG-TMN', 'Interest Group Membership Termination Approval Workflow', 'Approve', 'test')

            cy.visit('/membership/interestGroupMembershipListing').wait(2000)

            InterestGroupListing.FiterWithCustomerName(CustomerName)

            cy.LogoutOfSmcms();

        })

    })

})