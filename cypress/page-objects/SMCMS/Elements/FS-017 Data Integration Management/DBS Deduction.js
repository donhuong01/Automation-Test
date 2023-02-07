class elems_DBSDeduction {
    static ListingForm =
        {
            BTN_CREATENEW: '//button[text()="Create New"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',
            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_DBSDEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_MEMBERSHIPEXPIRYPERIOD: '//input[@id="numMembershipExpiryPeriod"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        TXT_DORMANTMEMBERPERIOD: '//input[@id="numDormantMemberPeriod"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',
        DRP_BATCHTYPE: '//span[@id="drpBatchType"]',
        DRP_CARDTYPE: '//span[@id="drpCardType"]',
        DRP_SFSTYPE: '//span[@id="drpSFSType"]'

    }

}
export default elems_DBSDeduction