import { BatchMembershipRegistrationWithNonMembers, BatchMembershipRegistrationWithExistingMembers, BatchMembershipRegistrationWithNewMemberPrincipal, BatchMembershipRegistrationWithNewMemberDependent } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/FS-014-BatchMembersipRegistration'

import BatchMembershipRegistrationWithExistingMember from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemberRegistrationWithExistingMember'
import BatchMembershipRegistrationWithNonMember from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMembershipRegistrationWithNonMember'
import BatchMembershipRegistrationAddNewMemberPrincipal from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemRegistrationAddNewMember(Principal)'
import BatchMembershipRegistrationAddNewMemberDependent from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemRegistrationAddNewMember(Dependent)'

import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})




// This function will add non-member to the Batch
BatchMembershipRegistrationWithNonMembers.forEach(data => {

    describe('Batch MemberShip Registration ', function () {

        BatchMembershipRegistrationWithNonMember(data.SFS, data.NonMemberNric, data.NonMemberDob, data.MemberType, data.AplicationDate, data.Category,
            data.Tenure)

    })
})

// This function will add Existing member to the Batch
BatchMembershipRegistrationWithExistingMembers.forEach(data => {

    describe('Batch MemberShip Registration ', function () {

        BatchMembershipRegistrationWithExistingMember(data.SFS, data.MaritalStatus, data.MemberType, data.CustomerNRICFull, data.PrincipalTenure,
            data.Dependent, data.DepChildNRICFull, data.DependentChildTenure, data.Spouse, data.DepSouseNRICFull, data.DependentSpouseTenure)

    })
})

// This function will add new Principal member to the Batch
BatchMembershipRegistrationWithNewMemberPrincipal.forEach(data => {

    describe('Batch MemberShip Registration with New Member(Principal) ', function () {

        BatchMembershipRegistrationAddNewMemberPrincipal(data.NricNewPrincipal, data.DOBNewPrincipal, data.MemberType, data.AplicationDate, data.Tenure)

    })
})

// This function will add New mwmber Dependent member to the Batch
BatchMembershipRegistrationWithNewMemberDependent.forEach(data => {

    describe('Batch MemberShip Registration with New Member(Dependent) ', function () {

        BatchMembershipRegistrationAddNewMemberDependent(data.NricNewDependent, data.DOBNewDependent, data.MemberType, data.AplicationDate, data.Tenure)

    })
})
