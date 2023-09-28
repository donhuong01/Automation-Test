import { BatchMembershipRegistrationWithNewMemberDependent } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/FS-014-BatchMemRegAddNewMember(Dependent)'
import BatchMembershipRegistrationAddNewMemberDependent from '../../../Form-Management/FS-014-Membership-Registration-Renewal/FS-014/BatchMembershipRegistration/E2E-BatchMemRegistrationAddNewMember(Dependent)'

import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    cy.visit('/membership/customerCheckin', {timeout: 30000})
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})




// This function will add new depdendent member to the Batch
BatchMembershipRegistrationWithNewMemberDependent.forEach(data => {

    describe(`SFS Batch MemberShip Registration with New Member(Dependent) With Registration Type Of ${data.RegistationType}`, function () {

        BatchMembershipRegistrationAddNewMemberDependent(data.PrincipleNricFull, data.PrincipalMemberType, data.PrncipalMaritalStatus, data.P_Tenure, data.NricNewDependent, data.DependentTenure, data.DependentType, data.RegistationType)

    })
})


