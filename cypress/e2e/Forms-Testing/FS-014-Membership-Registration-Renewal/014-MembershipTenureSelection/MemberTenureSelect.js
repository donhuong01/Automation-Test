/*****************************************************
 * Page Function: Sample Script to Test Membership Tenure Selection Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import MembershipTenureSelection from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-MembershipTenureSelection/MembershipTenureSelection'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

// !! To import Page Actions file for Membership Registration Principal form once merged with main file !!
import elems_CustomerCheckInPage from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage.js'
import elems_MemberRegistrationPrincipal from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberRegistrationPrincipal.js'
import elems_PageHeader from '../../../../page-objects/SMCMS/Elements/Common/PageHeader.js'
import login from '../../../../fixtures/login'

beforeEach(() => {

//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
})
describe('[SP1-FS014] Membership Tenure Selection Form', function () {

    // Page Definitions
    const MemTenureSelect = new MembershipTenureSelection()

    it('[SP1-FS014] Edit Membership Tenure Selection Form ', function () {

        // Navigate from Membership Registration - Principal Form 
        // !! Update navigation script once merged with main file !!
        cy.visit('/membership/customerCheckin')
        cy.wait(5000)  
        cy.EnterText(elems_CustomerCheckInPage.TXT_MEMBERID, data.checkIn.memberId)
        cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
        cy.wait(5000)
        cy.visit('/membership/registrationFormPrincipal')
        cy.wait(10000)
        cy.Click(elems_MemberRegistrationPrincipal.BTN_SAVEANDNEXT)
        cy.wait(5000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, data.memberRegistrationPrincipal.expectedPage)

        // Verify Principal List
        MemTenureSelect.verifyPrincipalList(data.membershipTenureSelection.principal)
        
        // Set Tenure Selection
        MemTenureSelect.principalTenureSelection(data.membershipTenureSelection.principal.tenureSelection)
        
        // Verify Dependent List
        MemTenureSelect.verifyDependentList(data.membershipTenureSelection.dependent)

        // Set Tenure Selection
        MemTenureSelect.dependentTenureSelection(data.membershipTenureSelection.dependent.tenureSelection)
        
        // Save Changes
        //MemTenureSelect.addToCart()

        // Cancel Changes
        MemTenureSelect.cancel(data.membershipTenureSelection.expectedPage)
    })
})