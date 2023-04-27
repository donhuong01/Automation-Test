import E1GymMembershipDefermentRequest from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1GymMembershipDefermentRequest'
import E1GymMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership'
import Commons from '../../../../page-objects/SMCMS/PageActions/Common/Common'

//page Definition 
const common = new Commons

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const { E1GymMembershipID, Maintenace, DefermentStartMonth, DefermentEndMonth, DefermentReason } = data.E1GymMembershipDeferment

describe('[TS01] FS-015 E1 GYM Membership Deferment', function () {

    it('[TC01] Creating E1 Gym Membership Deferment ', function () {

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.FilterE1GymMembershipID(E1GymMembershipID)

        E1GymMembershipListing.Maintenace(Maintenace)

        E1GymMembershipDefermentRequest.DefermentInformation(DefermentStartMonth, DefermentEndMonth, DefermentReason)

        E1GymMembershipDefermentRequest.Submit()

        common.ApprovalWorkFlow('E1-DEF', 'Energy One Deferment Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.VerifyItemStatus(E1GymMembershipID, 'InActive')

        E1GymMembershipListing.Maintenace('Reverse')

        E1GymMembershipListing.Submit()

        cy.wait(5000)

        common.ApprovalWorkFlow('E1-RVS', 'Energy One Reversal Approval WorkFlow', 'Approve', 'Approved')

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.VerifyItemStatus(E1GymMembershipID, 'Active')

    })

});