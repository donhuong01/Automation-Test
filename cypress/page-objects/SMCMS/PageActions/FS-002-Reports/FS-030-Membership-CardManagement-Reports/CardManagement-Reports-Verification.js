import elems_Identity_UserMatrixLising from "../../../Elements/FS-002 Reports/FS-030-Identity/IdentityUserMatrixLising"
import elems_MemberCard from "../../../Elements/FS-002 Reports/FS-030-Identity/MemberCard"

class Reports_MemberCards{
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Identity User Matrix Listing
     * Description: This function verifies the page
    *****************************************************/
   verifyIdentifyUserMatrix(expectedPg){
    cy.visit('/report?reportId=ReportIdentity.UserAccessMatrixReport')
    cy.wait(2000)
    cy.ValidateElementText(elems_Identity_UserMatrixLising.LBL_PAGE, expectedPg)

    cy.Click(elems_Identity_UserMatrixLising.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_Identity_UserMatrixLising.BTN_EXPORT)
   }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Member Card Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyMemberCard(expectedPg, fromDate, toDate){
    cy.visit('/report?reportId=ReportMemberCard.MemberCard')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    cy.EnterDate(elems_MemberCard.TXT_LASTUSEDFROMDATE, fromDate)
    cy.EnterDate(elems_MemberCard.TXT_LASTUSEDTODATE, toDate)

    cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }
}

export default Reports_MemberCards