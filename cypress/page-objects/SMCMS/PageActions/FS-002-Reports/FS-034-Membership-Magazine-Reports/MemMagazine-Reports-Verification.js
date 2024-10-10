import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_CustomerMarketing {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Customer Marketing Profile Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyCustomerMarketingProfile(expectedPg, consent, membership, contactMode, memberStatus, email){
    cy.visit('/report?reportId=ReportMembership.CustomerMarketingProfile')
    cy.wait(2000)
    cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)

    // cy.SelectDropDownItem(elems_MembershipMasters.DRP_CONSENT, consent)
    // cy.SelectDropDownItem(elems_MembershipMasters.DRP_MEMBERSHIP, membership)
    // cy.SelectDropDownItem(elems_MembershipMasters.DRP_CONTACT_MODE, contactMode)
    // cy.SelectDropDownItem(elems_MembershipMasters.DRP_MEMBER_STATUS, memberStatus)
    // cy.SelectDropDownItem(elems_MembershipMasters.DRP_EMAIL, email)
    
    // cy.Click(elems_MembershipMasters.BTN_GENERATE)
    // cy.wait(5000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_MembershipMasters.BTN_EXPORT)
    }

}


export default Reports_CustomerMarketing