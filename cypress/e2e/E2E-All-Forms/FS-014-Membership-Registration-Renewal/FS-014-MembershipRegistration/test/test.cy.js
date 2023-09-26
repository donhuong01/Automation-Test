
import login from '../../../../../fixtures/login'
import RegistrationWith1Principal from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/Registrationwith1principal'
import RegistrationWith1PrincipalAndDependentSpouse from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegistrationWith1PrincipalAndDependentSpouse'
import RegistrationWith1Principal1DependentSpouseAnd1Child from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegistrationWith1principal1DepSpouse&1Child'
import MemRegWithSingleORMarriedORDivorcedORWidowed from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegWithSingleOrWidwedOrDevorcedP&Dep'
import { RegistrationWith1Principle, RegistrationWith1PrincipleAnd1DependentSpouse, RegistrationWith1Principle1DependentSpouseAnd1Child, RegistrationWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep } from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-MembershipRegisterationWithDiffrtMemType'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

// This function will Create and Register Princpal Member with different Member Types and differebt Marital Statuses
RegistrationWith1Principle.forEach(data => {
    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Member Registration with Marital Status ${data.MaritalStatus}`, () => {
        RegistrationWith1Principal(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure)

    })
})


// This function Create and Register Pricipal member and will add dependent spouse if AddSpouse = "YES"
RegistrationWith1PrincipleAnd1DependentSpouse.forEach(data => {
    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Member Registration with 1 principal & 1 Dependent Spouse`, () => {
        RegistrationWith1PrincipalAndDependentSpouse(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)

    })
})


RegistrationWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep.forEach(data => {
    describe(`E2E Auto Testing:FS-014: Member Registration with 1 ${data.MaritalStatus} principal & 1 Dependent Child`, () => {
        MemRegWithSingleORMarriedORDivorcedORWidowed(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent,
            data.DependentNRIC, data.DependentTenure)

    })
})


//This function will Create and Register a Pricipal member and will 1 dependent spouse and child if AddSpouse = "YES" & AddDependent = "YES"
RegistrationWith1Principle1DependentSpouseAnd1Child.forEach(data => {
    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Registration with 1 principal ,1 Dependent Spouse & 1 Child `, () => {
        RegistrationWith1Principal1DependentSpouseAnd1Child(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent,
            data.DependentNRIC, data.DependentTenure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)

    })
})