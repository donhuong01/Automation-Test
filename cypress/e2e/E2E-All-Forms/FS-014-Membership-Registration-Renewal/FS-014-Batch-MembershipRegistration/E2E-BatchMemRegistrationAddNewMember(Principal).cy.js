import { NonSFSBatchMembershipRegistrationWithNewMemberPrincipal, SFSBatchMembershipRegistrationWithNewMemberPrincipal } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/FS-014-BatchMemRegAddNewMember(Principal)'

import BatchMembershipRegistrationAddNewMemberPrincipal from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemRegistrationAddNewMember(Principal)'

import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

// This function will add and Register new principal member in the Batch 
SFSBatchMembershipRegistrationWithNewMemberPrincipal.forEach(data => {

    describe(`SFS Batch MemberShip Registration with New Member(Principal) With ${data.MemberType} Member Type`, function () {

        BatchMembershipRegistrationAddNewMemberPrincipal(data.SFS, data.NricNewPrincipal, data.DOBNewPrincipal, data.MemberType, data.MaritalStatus, data.AplicationDate, data.Tenure)

    })
})

// This function will add a non-member to the batch 
NonSFSBatchMembershipRegistrationWithNewMemberPrincipal.forEach(data => {

    describe(`Non SFS Batch MemberShip Registration with New Member(Principal) With ${data.MemberType} Member Type`, function () {

        BatchMembershipRegistrationAddNewMemberPrincipal(data.SFS, data.NricNewPrincipal, data.DOBNewPrincipal, data.MemberType, data.MaritalStatus, data.AplicationDate, data.Tenure)

    })
})
