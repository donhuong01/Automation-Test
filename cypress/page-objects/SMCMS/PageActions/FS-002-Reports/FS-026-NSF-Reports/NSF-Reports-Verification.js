import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_NSF{
    /*****************************************************
       * Method: Checking functionallity and Verification on 
                  NSF Reconciliation Listing
        * Description: This function verifies the page
   *****************************************************/
   verifyNSFReconciliation(expectedPg){
       cy.visit('/report?reportId=ReportNSF.NSFReconciliation')
       cy.wait(2000)
       cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
   
    //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    //        cy.wait(5000)
           //cy.ValidateElementText('//div[@data-id="table1_1"]')
           //cy.Click(elems_MembershipMasters.BTN_EXPORT)
   }

    /*****************************************************
       * Method: Checking functionallity and Verification on 
                 NSF Summary Listing
        * Description: This function verifies the page
   *****************************************************/
   verifyNSFSummary(expectedPg){
       cy.visit('/report?reportId=ReportNSF.NSFSummary')
       cy.wait(2000)
       cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
   
    //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    //        cy.wait(5000)
           //cy.ValidateElementText('//div[@data-id="table1_1"]')
           //cy.Click(elems_MembershipMasters.BTN_EXPORT)
   }

   /*****************************************************
       * Method: Checking functionallity and Verification on 
                 Failed Paymaster Deduction Listing
        * Description: This function verifies the page
   *****************************************************/
         verifyFailedPaymasterDeduction(expectedPg){
         cy.visit('/report?reportId=ReportMembership.FailedPaymasterDeduction')
         cy.wait(2000)
         cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
      
      //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
      //        cy.wait(5000)
               //cy.ValidateElementText('//div[@data-id="table1_1"]')
               //cy.Click(elems_MembershipMasters.BTN_EXPORT)
      }
   
   }
    
   export default Reports_NSF