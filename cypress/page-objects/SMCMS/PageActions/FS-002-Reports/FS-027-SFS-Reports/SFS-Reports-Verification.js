import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_SFS{
    /*****************************************************
       * Method: Checking functionallity and Verification on 
                  Transaction by Principal Listing
        * Description: This function verifies the page
   *****************************************************/
   verifyTransactionByPrinicpal(expectedPg){
       cy.visit('/report?reportId=ReportMembership.TransactionByPrincipal')
       cy.wait(2000)
       cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
   
    //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    //        cy.wait(5000)
           //cy.ValidateElementText('//div[@data-id="table1_1"]')
           //cy.Click(elems_MembershipMasters.BTN_EXPORT)
   }
   
   }
    
   export default Reports_SFS