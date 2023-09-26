
import login from '../../../../fixtures/login'
import RegistrationWith1PrincipalAndDependentSpouse from '../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/RegistrationWith1PrincipalAndDependentSpouse'
import { RegistrationWith1PrincipleAnd1DependentSpouse } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-MembershipRegisterationWithDiffrtMemType'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


/***************************************************************************************
 * Method: RegistrationWith1PrincipalAndDependentSpouse
 * @author: fawadshahzada@gmail.com
 * This function will perform the following tasks 
 * Create Single/Widowed/Devorced Principal Members with different member type
 * If value of MemberType = AS/AT/OD it will create principal with AS/AT/OD member type
 * If MaritalStatus = "Single" it will create single member
 * If MaritalStatus = "Widowed" it will create Widowed member
 * If MaritalStatus = "Dervoced" it will create Dervoced member
 * If AddSpouse = "YES" it will add 1 dependent Spouse
 * If value of SFS = "SFS Enable" it will Checked the SFS Activation checkbox Module Setting Page
 ***************************************************************************************/


RegistrationWith1PrincipleAnd1DependentSpouse.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Member Registration with 1 Dependent Spouse`, () => {


        RegistrationWith1PrincipalAndDependentSpouse(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.AddSpouse, data.SpouseNRIC, data.SpouseTenure)



    })
})

