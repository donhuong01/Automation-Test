class elems_IGMembershipDefermentRequest {

    static BTN_FAPAPERPLANESUBMIT = '//button[@form="formIGMDefermentRequest"]'
    static BTN_VIEWDEFRHISTORY = '//button[text()="View Deferment History"]'
    static DATE_REQUESTEDDATE = '//label[@id="dtpDefermentRequestedDate_label"]/following-sibling::div//span'
    static DATE_DEFSTARTMONTH = '//input[@id="dtpDefermentStartMonth"]'
    static DATE_DEFENDMONTH = '//input[@id="dtpDefermentEndMonth"]'
    static TXT_DEFERMENTREASON = '//textarea[@id="areaDefermentReason"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'
    static CHK_CALCULATDETAIL = '//input[@id="checkCalcualtePayment"]'
    static BTN_ADDWIAVER = '//button[text()="Add Waiver Off"]'
    static TBL_WIAVER = '(//button[text()="Add Waiver Off"]/parent::div/parent::div/following-sibling::div//table)[2]'
    static DRP_CHARGETYPE = '//span[@id="drpChargeType"]'
    static TXT_AMOUNT = '//input[@id="txtAmount"]'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[text()="Confirm"]'
    static BTN_CANCEL = '//button[text()="Confirm"]/following-sibling::button'
    static BTN_SUBMIT = '//button[text()="Submit"]'

}

export default elems_IGMembershipDefermentRequest
