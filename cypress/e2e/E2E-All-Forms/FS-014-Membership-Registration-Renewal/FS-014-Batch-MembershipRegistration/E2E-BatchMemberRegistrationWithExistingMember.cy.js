import { SFSBatchMembershipRegistrationWithExistingMembers, NonSFSBatchMembershipRegistrationWithExistingMembers } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/FS-014-BatchMemRegWithExistingMember'

import BatchMembershipRegistrationWithExistingMember from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemberRegistrationWithExistingMember'

import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    //Select Channel
    cy.visit('/membership/customerCheckin')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})


// This function will add SFS Active and Existing member to the Batch
SFSBatchMembershipRegistrationWithExistingMembers.forEach(data => {

    describe(`SFS Batch MemberShip Registration With Existing Member With ${data.MemberType} Member Type`, function () {

        BatchMembershipRegistrationWithExistingMember(data.SFS, data.MaritalStatus, data.MemberType, data.CustomerNRICFull, data.PrincipalTenure,
            data.Dependent, data.DepChildNRICFull, data.DependentChildTenure, data.Spouse, data.DepSouseNRICFull, data.DependentSpouseTenure, data.BatchTenure)

    })
})

// // This function will add SFS Inactive Existing member to the Batch
// NonSFSBatchMembershipRegistrationWithExistingMembers.forEach(data => {

//     describe(`Non SFS Batch MemberShip Registration With Existing Member With ${data.MemberType} Member Type`, function () {

//         BatchMembershipRegistrationWithExistingMember(data.SFS, data.MaritalStatus, data.MemberType, data.CustomerNRICFull, data.PrincipalTenure,
//             data.Dependent, data.DepChildNRICFull, data.DependentChildTenure, data.Spouse, data.DepSouseNRICFull, data.DependentSpouseTenure , data.BatchTenure)

//     })
// })

