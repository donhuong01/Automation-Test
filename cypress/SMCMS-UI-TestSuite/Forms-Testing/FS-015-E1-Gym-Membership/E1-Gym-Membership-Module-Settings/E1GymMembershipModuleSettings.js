import E1GymMembershipModuleSetting from "../../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Module Setting"
import data from '../../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1 Gym Membership Module Setting'

import login from '../../../../../fixtures/login'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const { GracePeriod, TerminateMemAfterExpiration, MinMembDeferPeriod, MinMemRejoinPeriod, WaiverProductItem } = data


describe('[TS01] FS-015 E1 GYM Membership Module Settings', function () {


    it('[TC01] Updating Energy one Module Setting for Membership', function () {

        cy.visit('/membership/e1GymMembershipModuleSetting')

        E1GymMembershipModuleSetting.FilloutMembershipSection(GracePeriod, TerminateMemAfterExpiration, MinMembDeferPeriod, MinMemRejoinPeriod, WaiverProductItem)

        E1GymMembershipModuleSetting.Save()

    })
    it('[TC02] Updating Energy one Module Setting for SafraPoints', function () {

        cy.visit('/membership/e1GymMembershipModuleSetting')

        E1GymMembershipModuleSetting.FilloutTransactionSection()

        E1GymMembershipModuleSetting.Save()

    })


})