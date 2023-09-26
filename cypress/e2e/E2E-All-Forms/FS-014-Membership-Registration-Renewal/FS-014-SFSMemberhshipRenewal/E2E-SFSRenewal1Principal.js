
import login from '../../../../fixtures/login'
import RenewalWith1Principal from '../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MembershipRenewalWithDifferentMemberType/Renewalwith1principal'
import { SFSRenewalWith1Principle } from '../../../../fixtures/Data_Module/FS-027-Membership-SFS/027-SFS-MembershipRenewalWithDiffrtMemTyp'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


/**************************************************************************************
 * Method: SFSRenewalWith1Principle
 * @author: fawadshahzada@gmail.com
 * This function will perform the following tasks 
 * New Principal Members with different member type e.g AS, AT, OD etc.
 * If value of MemberType = AS/AT/OD it will create principal with AS/AT/OD member type
 * If value of SFS = "SFS Enable" it will Checked the SFS Activation checkbox Module Setting Page
 **************************************************************************************/


SFSRenewalWith1Principle.forEach(data => {

    describe(`E2E Auto Testing:FS-014: ${data.MemberType} Renewal with 1 principal`, () => {


        RenewalWith1Principal(data.SFS, data.MaritalStatus, data.MemberType, data.PrincipalNRIC, data.PrincipalTEnure, data.RenewalTenure)


    })
})