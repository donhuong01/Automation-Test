class elems_CCDeduction {
    static ListingForm =
        {
            BTN_CREATENEW: '//button[text()="Create New"]',
            BTN_CANCEL: '//button[text()="Cancel"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',
            TXT_BATCHREGISTRATIONID: '//input[@id="txtBatchRegistrationId"]',
            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_CCDEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',
        PCK_BATCHREGISTRATIONID: '//label[text()="Batch Registration ID"]/following-sibling::div//button'
    }

}
export default elems_CCDeduction