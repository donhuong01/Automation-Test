
import login from '../../../../fixtures/login'
import RegistrationWith1Principal from '../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegWithWithDifferntMemType/Registrationwith1principal'
import { RegistrationWith1Principle } from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-MembershipRegisterationWithDiffrtMemType'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


/***************************************************************************************
 * Method: RegistrationWith1Principal
 * @author: fawadshahzada@gmail.com
 * This function will perform the following tasks 
 * Create Single/Widowed/Devorced Principal Members with different member type
 * If value of MemberType = AS/AT/OD it will create principal with AS/AT/OD member type
 * If MaritalStatus = "Single" it will create single member
 * If MaritalStatus = "Widowed" it will create Widowed member
 * If MaritalStatus = "Dervoced" it will create Dervoced member
 * If value of SFS = "SFS Enable" it will Checked the SFS Activation checkbox Module Setting Page
 ***************************************************************************************/

RegistrationWith1Principle.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Principal Membership Registration with Marital Status ${data.MaritalStatus}`, () => {


        RegistrationWith1Principal(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure)



    })
})


