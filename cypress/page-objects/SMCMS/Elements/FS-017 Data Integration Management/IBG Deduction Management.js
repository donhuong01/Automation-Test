class elems_IBGDeduction {
    static ListingForm =
        {
            BTN_CREATENEW: '//button[text()="Create New"]',
            BTN_CANCEL: '//button[text()="Cancel"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',
            DRP_BATCHTYPE: '//span[@id="drpBatchType"]',
            DRP_SFSTYPE: '//span[@id="drpSFSType"]',
            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_IBGDEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        BTN_GENERATEIBGOUTFILE: '//button[text()="Generate IBG Out File"]',
        TXT_MEMBERSHIPEXPIRYPERIOD: '//input[@id="numMembershipExpiryPeriod"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        TXT_DORMANTMEMBERPERIOD: '//input[@id="numDormantMemberPeriod"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',
        DRP_BATCHTYPE: '//span[@id="drpBatchType"]',
        DRP_SFSTYPE: '//span[@id="drpSFSType"]'

    }

}
export default elems_IBGDeduction