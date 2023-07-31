import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_MembershipVIPs {

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               VIP Appointment Term Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyVIPAppointmentTermListing(expectedPg, expirFrom, expiryTo){
    cy.visit('/report?reportId=ReportMembership.VIPAppointmentTerm')
    cy.wait(2000)
    cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)

    cy.EnterDate(elems_MembershipMasters.EXPIRY_FROM, expirFrom)
    cy.EnterDate(elems_MembershipMasters.EXPIRY_TO, expiryTo)

    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    cy.wait(5000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_MembershipMasters.BTN_EXPORT)
    }

}

export default Reports_MembershipVIPs