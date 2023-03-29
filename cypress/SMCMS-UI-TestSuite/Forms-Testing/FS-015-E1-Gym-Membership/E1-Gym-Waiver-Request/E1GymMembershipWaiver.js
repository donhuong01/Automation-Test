import E1GymMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import E1GymMembershipWaiver from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Waiver'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Waiver'
import Commons from '../../../../page-objects/SMCMS/PageActions/Common/Common'


const common = new Commons()

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



describe('[TS01]  FS-015 E1 GYM Membership Waiver', function () {

    data.forEach(item => {

        const { MemberID, WaiverPeriod, WaiverReason, ApprovalOption } = item

        it(`[TC01] Creating E1 GYM Membership Waiver and Complete ${ApprovalOption} workflow`, function () {

            cy.visit('/membership/e1GymMembershipList').wait(4000)

            E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

            E1GymMembershipListing.Maintenace('Waive')

            E1GymMembershipWaiver.WaiverInformation(WaiverPeriod, WaiverReason)

            E1GymMembershipWaiver.Request()

            common.ApprovalWorkFlow('E1-WAV', 'Energy One Waiver Approval WorkFlow', ApprovalOption, 'test')

            if (ApprovalOption === 'Approve') {

                cy.visit('/membership/e1GymMembershipList').wait(5000)

                E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

                E1GymMembershipListing.Maintenace('Reverse')

                E1GymMembershipListing.Submit()

                common.ApprovalWorkFlow('E1-RVS', 'Energy One Reversal Approval WorkFlow', 'Approve', 'Test')
            } else {
                cy.log('waiver is rejected')
            }

        })

    });

})