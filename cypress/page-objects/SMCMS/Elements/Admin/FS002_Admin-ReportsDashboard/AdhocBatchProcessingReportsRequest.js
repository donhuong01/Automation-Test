class elems_AdhocBatchProcessingReportsRequest {
    static DRP_REPORTNAME = '//span[@id="txtReportName"]'
    static DATE_REQUESTDATE = '//input[@id="txtRequestDate"]'
    static TXT_FILTERFIELDNAME1 = '//input[@id="txtFilterField"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_AdhocBatchProcessingReportsRequest