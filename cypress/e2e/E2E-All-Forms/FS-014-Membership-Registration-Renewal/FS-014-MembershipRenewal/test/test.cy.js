
import login from '../../../../../fixtures/login'
import RenewalWith1Principal from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/Renewalwith1principal'
import RenewalWith1PrincipalAndDependentSpouse from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/RenewalWith1PrincipalAndDependentSpouse'
import RenewalWith1Principal1DependentSpouseAnd1Child from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/RenewalWith1principal1DependentSpouse&1Child'
import RenewalWithSingleOrWidwedOrDevorcedPrincipl1Dep from '../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/RenewalWithSingleOrWidwedOrDevorcedPrincipl&1Dep'

import {
    RenewalWith1Principle, RenewalWith1PrincipleAnd1DependentSpouse, RenewalWith1Principle1DependentSpouseAnd1Child,
    RenewalWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep
} from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDiffrtMemTyp'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



// This function will perform the Member Registration and Renewal of the Principal Member 
RenewalWith1Principle.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Membership Registration and Renewal`, () => {P


        RenewalWith1Principal(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.RenewalTenure)


    })
})


//This function will perform Membership Registration and Renewal of Principal and will add 1 dependent spouse if AddSpouse = "YES"
RenewalWith1PrincipleAnd1DependentSpouse.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Membership Registration and Renewal with 1 Dependent Spouse`, () => {


        RenewalWith1PrincipalAndDependentSpouse(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)


    })

})


//This function will perform Membership Registration and Renewal of Principal and will add 1 dependent child if AddDependent = "YES"
RenewalWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep.forEach(data => {

    describe(`E2E Auto Testing:FS-014:${data.MaritalStatus} Principal Membership Registration and Renewal with 1 Dependent Child`, () => {


        RenewalWithSingleOrWidwedOrDevorcedPrincipl1Dep(data.SFS, data.MaritalStatus, data.MemberType,
            data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent, data.DependentNRIC, data.DependentTenure)


    })
})


//This function will perform Membership Registration and Renewal of Principal and will add 1 dependent child & 1 spouse if AddDependent = "YES" & AddSpouse = "YES"
RenewalWith1Principle1DependentSpouseAnd1Child.forEach(data => {

    describe(`E2E Auto Testing:FS-014:${data.MaritalStatus} Principal Membership Registration and Renewal with 1 Dependent Child and 1 Spouse`, () => {


        RenewalWith1Principal1DependentSpouseAnd1Child(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent,
            data.DependentNRIC, data.DependentTenure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)



    })

})



