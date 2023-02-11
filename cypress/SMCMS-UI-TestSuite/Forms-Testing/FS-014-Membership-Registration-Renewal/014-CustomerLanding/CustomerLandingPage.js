import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

import CustomerLandingPage from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer Landing Page/CustomerLandingPage'
import elems_MemberInformation from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberInformation'
import elems_CustomerCheckInPage from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import elems_Landing from '../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import login from '../../../../fixtures/login'

const CustomerLanding = data.pageTitle.CustomerLanding
const BackBTN = data.customerLandingPageContent.Back
const MembershipWaiver = data.customerLandingPageContent.MembershipWaiver
const MembershipReg = data.customerLandingPageContent.MembershipRegistration
const TransactionHistory = data.customerLandingPageContent.TransactionHistory
const MembershipDeferment = data.customerLandingPageContent.MembershipDeferment
const MembershipRenewal = data.customerLandingPageContent.MembershipRenewal
const MemberId = data.memberinfo.MemberId
const BatchMembershipWaiverRequest = data.pageTitle.BatchMembershipWaiverRequest
const MembershipRegistrationPrincipal = data.pageTitle.MembershipRegistrationPrincipal
const MembershipTransactionHistory = data.pageTitle.MembershipTransactionHistory
const MembershipDefermentRequest = data.pageTitle.MembershipDefermentRequest
const PageTitleMembershipRenewal = data.pageTitle.MembershipRenewal

beforeEach(() => {



    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    //Go to website customer check in page
    cy.visit('/membership/customerCheckin')

    //Populate Member ID field
    cy.EnterText(elems_CustomerCheckInPage.TXT_MEMBERID, MemberId)

    //Checkin
    cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)

    //Click on continew button
    cy.Click(elems_MemberInformation.BTN_CONTINUE, 'Customer Landing')

    //Verify page title
    CustomerLandingPage.verifyPageTitle(CustomerLanding)

    //Click on Safra member
    cy.Click(elems_Landing.SAFRA_Member)

    //Verify Page title
    CustomerLandingPage.verifyPageTitle(CustomerLanding)

})
describe('Sample test for the page actions', function () {


    it('Verify customer landing page title and Content', () => {

        //Verify page title
        CustomerLandingPage.verifyPageTitle(CustomerLanding)

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        //Click on Membership Waiver
        CustomerLandingPage.clickOnMembershipWaiver()

    })

    it("Click on Membership waiver and verify page title", () => {

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        CustomerLandingPage.clickOnMembershipWaiver()

        //Verify page title
        CustomerLandingPage.verifyPageTitle(BatchMembershipWaiverRequest)

    })

    it("Click on Membership Registration and verify page title", () => {

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        //Click on Memebership Registration
        CustomerLandingPage.clickOnMembershipRegistration()

        //Verify page title
        CustomerLandingPage.verifyPageTitle(MembershipRegistrationPrincipal)

    })

    it("Click on Transaction History and verify page title", () => {

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        //Click on Transaction History
        CustomerLandingPage.clickOnTransactionHistory()

        //Verify page title
        CustomerLandingPage.verifyPageTitle(MembershipTransactionHistory)

    })
    it("Click on Membership Deferment and verify page title", () => {

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        //Click on Membershio Deferment
        CustomerLandingPage.clickOnMembershipDeferment()

        //Verify page title
        CustomerLandingPage.verifyPageTitle(MembershipDefermentRequest)

    })
    it("Click on Membership Renewal and verify page title", () => {

        //Verify customer landing page content
        CustomerLandingPage.verifyLandingPageContent(BackBTN, MembershipWaiver, MembershipReg, TransactionHistory, MembershipDeferment, MembershipRenewal)

        //Click on Membership Renewal
        CustomerLandingPage.clickOnMemebershipRenewal()

        //Verify page title
        CustomerLandingPage.verifyPageTitle(PageTitleMembershipRenewal)

    })


})