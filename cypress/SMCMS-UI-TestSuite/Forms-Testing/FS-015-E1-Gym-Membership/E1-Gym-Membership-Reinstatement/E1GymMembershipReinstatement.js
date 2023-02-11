import E1GymMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1-Gym-Membership-Listing'
import E1GymMembershipReinstatement from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1-Gym-Membership-Reinstatement'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Reinstatement'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()


describe('[TS01] FS-015 E1 GYM Membership Reinsatement', function () {


    it('[TC01] Creating E1 Gym Membership Reinstatement ', function () {

        cy.visit('/membership/e1GymMembershipList')
        cy.wait(5000)
        E1GymMembershipListing.FilterSAFRAMembershipID(data.MemberID)

        E1GymMembershipListing.Maintenace(data.Maintenace)

        E1GymMembershipReinstatement.ReinstatementInfo(data.TermStartDate)

        E1GymMembershipReinstatement.AddToCart()

        common.fillOutandApplyPayment('CASH')

        cy.visit('/membership/e1GymMembershipList')
        cy.wait(5000)

        E1GymMembershipListing.StatusMemberID(data.MemberID, 'Active')

    })

});