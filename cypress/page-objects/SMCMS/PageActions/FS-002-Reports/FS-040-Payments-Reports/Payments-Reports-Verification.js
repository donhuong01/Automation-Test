import elems_Payment from "../../../Elements/FS-002 Reports/FS-040-Payment/Payment";

class Payment_Reports {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Receipt Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyReceiptListing(expectedPg){
    cy.visit('/report?reportId=ReportPayment.Receipt')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               IBG Deduction Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyIBGDeduction(expectedPg, /*startDate, endDate*/){
    cy.visit('/report?reportId=ReportPayment.IBGDeduction')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.EnterText(elems_Payment.TXT_STARTDATE, startDate)
    // cy.EnterText(elems_Payment.TXT_ENDDATE, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               PAYM Deduction Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyPAYMDeduction(expectedPg, /*startDate, endDate*/){
    cy.visit('/report?reportId=ReportPayment.PAYMDeduction')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.EnterText(elems_Payment.TXT_STARTDATE, startDate)
    // cy.EnterText(elems_Payment.TXT_ENDDATE, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               CC Deduction Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyCCDeduction(expectedPg, /*startDate, endDate*/){
    cy.visit('/report?reportId=ReportPayment.CCDeduction')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.EnterText(elems_Payment.TXT_STARTDATE, startDate)
    // cy.EnterText(elems_Payment.TXT_ENDDATE, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

     /*****************************************************
     * Method: Checking functionallity and Verification on 
               Failed Paymaster Deduction Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyFailedPaymasterDeduction(expectedPg){
    cy.visit('/report?reportId=ReportPayment.FailedPaymasterDeduction')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               SFS Transaction Listing
     * Description: This function verifies the page
    *****************************************************/
    verifySFSTransaction(expectedPg, /*sourceChannel, startDate, endDate*/){
    cy.visit('/report?reportId=ReportPayment.SFSTransaction')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)
    
    // cy.SelectPickerItem(elems_Payment.PCK_SOURCECHANNEL, sourceChannel)
    // cy.EnterText(elems_Payment.TXT_TDATEFROM, startDate)
    // cy.EnterText(elems_Payment.TXT_TDATETO, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Internet Receipt
     * Description: This function verifies the page
    *****************************************************/
    verifyInternetReceipt(expectedPg, /*sourceChannel, startDate, endDate*/){
    cy.visit('/report?reportId=ReportPayment.InternetReceipt')
    cy.wait(2000)
    cy.ValidateElementText(elems_Payment.LBL_PAGE, expectedPg)
    
    // cy.SelectPickerItem(elems_Payment.PCK_SOURCECHANNEL, sourceChannel)
    // cy.EnterText(elems_Payment.TXT_TDATEFROM, startDate)
    // cy.EnterText(elems_Payment.TXT_TDATETO, endDate)

    // cy.Click(elems_Payment.BTN_GENERATE)
    cy.wait(2000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_Payment.BTN_EXPORT)
    }

}

export default Payment_Reports