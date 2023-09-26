import { BatchMembershipRegistrationWithNonMembers } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/FS-014-BatchMemRegWithNonMember'

import BatchMembershipRegistrationWithNonMember from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMembershipRegistrationWithNonMember'

import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



//This function will Register non-member in the Batch

BatchMembershipRegistrationWithNonMembers.forEach(data => {

    describe(` Batch MemberShip Registration with Non Member with ${data.MemberType} Member Type`, function () {

        BatchMembershipRegistrationWithNonMember(data.NonMemberNric, data.MemberType, data.MemberCategory,
            data.PrnBatchTenure)

    })
})




