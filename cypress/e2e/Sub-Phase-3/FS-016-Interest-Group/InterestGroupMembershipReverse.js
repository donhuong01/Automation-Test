import IGMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'
import InterestGroupListing from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import IGMembershipDeferment from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipDeferment'
import IGDEFDATA from '../../../fixtures/Data_Module/FS-016-Interest-Group/FS016-Interest-Group-Membership-Defer'
import InterestGroupMembershipReversalRequest from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipReversalRequest'



// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const InterestGMembershipReverse = (CustomerName) => {

describe('[TS01] FS-016 Interest Group Membership Reversal', function () {



    it('[TC02] Creating Interest Group Membership Reversal', function () {


        // cy.visit('/membership/interestGroupMembershipListing')
        // cy.wait(2000)

        // InterestGroupListing.FiterWithCustomerName(CustomerName)

        // InterestGroupListing.SlectTableLinkItem(CustomerName)

        // InterestGroupListing.Maintenance('Defer')

        // IGMembershipDeferment.DefermentInfo(IGDEFDATA.DefStartMonth, IGDEFDATA.DefEndMonth, IGDEFDATA.DefReason)

        // IGMembershipDeferment.Submit()

        // cy.wait(5000)

        // IGMembershipDeferment.ApprovalWorkFlow('IG-DEF', 'Interest Group Membership Deferment Approval Workflow', 'Approve', IGDEFDATA.DefReason)

        // cy.wait(5000)

        // IGMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

        // IGMembershipRegistration.ViewTransactionHistory(CustomerName)
        // cy.wait(2000)

        // IGMembershipDeferment.VerifyDefermentStatus(IGDEFDATA.DefReason)

        // InterestGroupListing.Cancel()

        cy.visit('/membership/interestGroupMembershipListing')
        cy.wait(2000)

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.Maintenance('Reverse')
        cy.wait(2000)

        InterestGroupMembershipReversalRequest.Submit()

        cy.wait(5000)

        IGMembershipDeferment.ApprovalWorkFlow('IG-RVS', 'Interest Group Membership Reversal Approval Workflow', 'Approve', 'Approved')
        cy.wait(5000)

        cy.visit('/membership/interestGroupMembershipListing')

        InterestGroupListing.FiterWithCustomerName(CustomerName)

        InterestGroupListing.VerifyStatus(IGDEFDATA.Status)

    })

})

}
export default InterestGMembershipReverse