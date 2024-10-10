class elems_ICTDEDUCTION {
    static ListingForm =
        {
            BTN_CREATENEW: '//button[text()="Create New"]',
            BTN_CANCEL: '//button[text()="Cancel"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',

            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_ICTDEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_MEMBERSHIPEXPIRYPERIOD: '//input[@id="numMembershipExpiryPeriod"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        TXT_DORMANTMEMBERPERIOD: '//input[@id="numDormantMemberPeriod"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',

    }

}
export default elems_ICTDEDUCTION