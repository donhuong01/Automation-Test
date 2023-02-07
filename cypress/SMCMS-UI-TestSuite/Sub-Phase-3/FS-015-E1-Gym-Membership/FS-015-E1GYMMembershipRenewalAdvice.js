import E1GYMMembershipRenewalAdvice from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1-Gym-Membership-Renewal-Advice'
import login from '../../../fixtures/login';
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1 Gym Renewal Adwice '

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const {

    Description,
    MainMembership,
    E1GymMembership,
    ExpiryDateFrom,
    ExpiryDateTo,
    MembershipStatus,
    ReasonCode,
    DOBFrom,
    DOBTo
} = data

const E1GYMMembershipRenewalAdvise = () => {

describe('[TS01]  FS-015 E1 GYM Membership Renewal Advice ', function () {

    it('[TC01] Creating E1 GYM Membership Renewal Advice Via Email', function () {

        cy.visit('/membership/e1GymMembershipRenewalAdviceList')

        E1GYMMembershipRenewalAdvice.CreateNew()

        E1GYMMembershipRenewalAdvice.RenewalAdviceInfo(Description)

        E1GYMMembershipRenewalAdvice.MembershipMasterData(MainMembership, E1GymMembership, ExpiryDateFrom, ExpiryDateTo, MembershipStatus, ReasonCode, DOBFrom, DOBTo)

        E1GYMMembershipRenewalAdvice.Generate()

        E1GYMMembershipRenewalAdvice.Save()

        E1GYMMembershipRenewalAdvice.SelectItem(Description)

        E1GYMMembershipRenewalAdvice.Delete()


    })

});

}

export default E1GYMMembershipRenewalAdvise