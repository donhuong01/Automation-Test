class elems_AXSCOLLECTION {
    static ListingForm =
        {
            BTN_CREATENEW: '//button[text()="Create New"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',
            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_AXSDEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',

    }

}
export default elems_AXSCOLLECTION