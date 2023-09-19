import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_LuckyDraw{
    /*****************************************************
       * Method: Checking functionallity and Verification on 
                  Lucky Draw Tracking Listing
        * Description: This function verifies the page
   *****************************************************/
   verifyLuckyDrawTracking(expectedPg){
       cy.visit('/report?reportId=ReportMembership.LuckyDrawTracking')
       cy.wait(2000)
       cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
   
    //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    //        cy.wait(5000)
           //cy.ValidateElementText('//div[@data-id="table1_1"]')
           //cy.Click(elems_MembershipMasters.BTN_EXPORT)
   }
   
    /*****************************************************
       * Method: Checking functionallity and Verification on 
                 Lucky Draw Winner Listing
        * Description: This function verifies the page
   *****************************************************/
   verifyLuckyDrawWinner(expectedPg){
       cy.visit('/report?reportId=ReportMembership.LuckyDrawWinner')
       cy.wait(2000)
       cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
   
    //    cy.Click(elems_MembershipMasters.BTN_GENERATE)
    //        cy.wait(5000)
           //cy.ValidateElementText('//div[@data-id="table1_1"]')
           //cy.Click(elems_MembershipMasters.BTN_EXPORT)
   }
   
   }
    
   export default Reports_LuckyDraw