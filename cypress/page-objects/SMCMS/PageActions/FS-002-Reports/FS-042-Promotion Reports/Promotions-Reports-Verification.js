import elems_Payment from "../../../Elements/FS-002 Reports/FS-040-Payment/Payment";

class Promotion_Reports {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Bundle Promotion
     * Description: This function verifies the page
    *****************************************************/
    verifyBundlePromotion(expectedPg){
    cy.visit('/report?reportId=ReportSale.BundlePromotion')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.Click(elems_Payment.BTN_GENERATE)
    // cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Bundle Promotion Detail
     * Description: This function verifies the page
    *****************************************************/
    verifyBundlePromotionDetail(expectedPg, /*startDate, endDate*/){
    cy.visit('/report?reportId=ReportSale.BundlePromotionDetail')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.EnterText(elems_Payment.TXT_STARTDATE, startDate)
    // cy.EnterText(elems_Payment.TXT_ENDDATE, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

  

}

export default Promotion_Reports