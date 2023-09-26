
import login from '../../../../fixtures/login'
import RenewalWith1PrincipalAndDependentSpouse from '../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/RenewalWith1PrincipalAndDependentSpouse'
import { SFSRenewalWith1PrincipleAnd1DependentSpouse } from '../../../../fixtures/Data_Module/FS-027-Membership-SFS/027-SFS-MembershipRenewalWithDiffrtMemTyp'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

/**************************************************************************************
 * Method: RenewalWith1PrincipalAndDependentSpouse
 * @author: fawadshahzada@gmail.com
 * This function will perform the following tasks 
 * New Principal Members with different member type
 * If value of MemberType = AS/AT/OD it will create principal with AS/AT/OD member type
 * If AddSpouse = "YES" it will add 1 dependent spouse
 * If value of SFS = "SFS Enable" it will Checked the SFS Activation checkbox Module Setting Page
 *************************************************************************************/


SFSRenewalWith1PrincipleAnd1DependentSpouse.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Member Renewal with 1 principal & 1 Dependent Spouse`, () => {


        RenewalWith1PrincipalAndDependentSpouse(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)


    })

})
