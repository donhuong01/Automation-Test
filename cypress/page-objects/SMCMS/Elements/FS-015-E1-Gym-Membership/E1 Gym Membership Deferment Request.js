class elems_E1GymMembershipDefermentRequest {

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_VIEWDEFERMENTHISTORY = '//button[text()="View Deferment History"]'
    static BTN_CANCEL = '//button[text()="View Deferment History"]/following-sibling::button[text()="Cancel"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpDefermentRequestedDate"]'
    static BTN_ADDTOCARTANDSUBMIT = '//button[@form="formE1GMDefermentRequest"]'
    static LBL_DEFERMENTREQID = '//label[@for="lblDefermentRequestID"]'

    static DATE_DEFERSTARTMONTH = '//input[@id="dtpDefermentStartMonth"]'
    static DATE_DEFERENDMONT = '//input[@id="dtpDefermentEndMonth"]'
    static TXT_DEFERMENTREASON = '//textarea[@id="areaDefermentReason"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'
    static CHK_CALCULATEPAYMENT = '//input[@id="checkCalcualtePayment"]'
    static LBL_TOTAL = '//label[text()="Total"]/following-sibling::div'
    static LBL_PYAMENTAMOUNT = '//label[text()="Payment Amount"]/following-sibling::div'
    static LBL_ISPAYMENTCOLLECTED = '//label[@for="chkIsPaymentCollected"]'

}
export default elems_E1GymMembershipDefermentRequest