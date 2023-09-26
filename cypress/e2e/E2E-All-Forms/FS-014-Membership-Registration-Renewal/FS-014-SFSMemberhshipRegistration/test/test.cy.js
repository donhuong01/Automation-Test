
import login from '../../../../../fixtures/login'
import RegistrationWith1Principal from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/Registrationwith1principal'
import RegistrationWith1PrincipalAndDependentSpouse from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegistrationWith1PrincipalAndDependentSpouse'
import RegistrationWith1Principal1DependentSpouseAnd1Child from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegistrationWith1principal1DepSpouse&1Child'
import MemRegWithSingleORMarriedORDivorcedORWidowed from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegWithSingleOrWidwedOrDevorcedP&Dep'

import { SFSRegistrationWith1Principle, SFSRegistrationWith1PrincipleAnd1DependentSpouse, SFSRegistrationWith1Principle1DependentSpouseAnd1Child, SFSRegistrationWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep } from '../../../../../fixtures/Data_Module/FS-027-Membership-SFS/027-SFS-MembershipRegisterationWithDiffrtMemType'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})




//This function will Create and Register Single/Widowed/Married/Dervorced Principal member
SFSRegistrationWith1Principle.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Registration with 1 principal`, () => {


        RegistrationWith1Principal(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure)



    })
})

//This function will Create and Register Single/Widowed/Married/Dervorced Principal member and will add dependent spouse if AddSpouse = "YES"
SFSRegistrationWith1PrincipleAnd1DependentSpouse.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Member Registration with 1 Dependent Spouse`, () => {


        RegistrationWith1PrincipalAndDependentSpouse(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)



    })
})

//This function will Create and Register Single/Widowed/Married/Dervorced Principal member and will add dependent Child if AddDependent = "YES"
SFSRegistrationWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep.forEach(data => {

    describe(`E2E Auto Testing:FS-014: Member Registration with 1 ${data.MaritalStatus} principal & 1 Dependent Child`, () => {


        MemRegWithSingleORMarriedORDivorcedORWidowed(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent,
            data.DependentNRIC, data.DependentTenure)



    })
})


//This function will Create and Register Single/Widowed/Married/Dervorced Principal member and will add dependent spouse & Child if AddSpouse = "YES" & AddDependent = "YES"
SFSRegistrationWith1Principle1DependentSpouseAnd1Child.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Registration with 1 Dependent Spouse & 1 Child `, () => {


        RegistrationWith1Principal1DependentSpouseAnd1Child(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent,
            data.DependentNRIC, data.DependentTenure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)



    })

})

