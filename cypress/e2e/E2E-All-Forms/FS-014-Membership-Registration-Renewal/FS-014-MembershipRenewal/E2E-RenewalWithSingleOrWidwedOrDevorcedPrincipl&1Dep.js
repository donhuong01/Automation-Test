
import login from '../../../../fixtures/login'
import RenewalWithSingleOrWidwedOrDevorcedPrincipl1Dep from '../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/RenewalWithSingleOrWidwedOrDevorcedPrincipl&1Dep'
import { RenewalWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDiffrtMemTyp'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


/***************************************************************************************
 * Method: RenewalWithSingleOrWidwedOrDevorcedPrincipl1Dep
 * @author: fawadshahzada@gmail.com
 * This function will perform the following tasks 
 * Create Single/Widowed/Devorced Principal Members with different member type
 * If value of MemberType = AS/AT/OD it will create principal with AS/AT/OD member type
 * If MaritalStatus = "Single" it will create single member
 * If MaritalStatus = "Widowed" it will create Widowed member
 * If MaritalStatus = "Dervoced" it will create Dervoced member
 * If AddDependent = "YES" it will add 1 dependent child
 * If value of SFS = "SFS Enable" it will Checked the SFS Activation checkbox Module Setting Page
 ***************************************************************************************/


RenewalWithSingleOrWidwedOrDevorcedPrinciplAnd1Dep.forEach(data => {

    describe(`E2E Auto Testing:FS-014:${data.MaritalStatus} Principal Member Registration & Renewal with 1 Dependent Child`, () => {


        RenewalWithSingleOrWidwedOrDevorcedPrincipl1Dep(data.SFS, data.MaritalStatus, data.MemberType,
            data.PrincipalNRIC, data.PrincipalTEnure, data.AddDependent, data.DependentNRIC, data.DependentTenure)


    })
})

