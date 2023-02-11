import E1GymMembershipConversion from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1GymMembershipConversion'
import E1GymMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Conversion'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



describe('[TS01] FS-015 E1 GYM Membership Conversion', function () {


    it('[TC01] Converting Dependent E1 GYM Membership to Main E1 GYM Membership ', function () {

        cy.visit('/membership/e1GymMembershipList')

        E1GymMembershipListing.FilterSAFRAMembershipID(data.MemberID)

        E1GymMembershipListing.Maintenace(data.Maintenace)

        E1GymMembershipConversion.ConversionInformation(data.ConversionReason)

        E1GymMembershipConversion.Convert()

        E1GymMembershipListing.FilterSAFRAMembershipID(data.MemberID)

        E1GymMembershipListing.ViewTransactionHistory()

        E1GymMembershipListing.VerifyTransactionTableItem(data.ConversionReason, data.ReasonCode)

    })

});