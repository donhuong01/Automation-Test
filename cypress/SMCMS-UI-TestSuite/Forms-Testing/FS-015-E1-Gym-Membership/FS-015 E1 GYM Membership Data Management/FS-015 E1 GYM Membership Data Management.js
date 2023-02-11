import E1GymMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1-Gym-Membership-Listing'
import login from '../../../../fixtures/login';

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    cy.visit('/membership/e1GymMembershipList')

})


describe('[TS01] FS-015 E1 GYM Membership Data Management ', function () {

    it('[TC01] Filter with E1 Gym Membership ID', function () {

        E1GymMembershipListing.FilterE1GymMembershipID('G1000000017')

    })
    it('[TC02] Filter with SAFRA Membership ID', function () {

        E1GymMembershipListing.FilterSAFRAMembershipID('A300001798')

    })
    it('[TC03] Filter with Customer Name', function () {

        E1GymMembershipListing.FiterWithCustomerName('Jack Frost')

    })

});