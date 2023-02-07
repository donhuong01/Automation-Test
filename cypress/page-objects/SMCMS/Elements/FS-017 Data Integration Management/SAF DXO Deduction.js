class elems_SAFDXODEDUCTION {
    static ListingForm =
        {
            BTN_CREATENEWOUTFILE: '//button[text()="Create New Out File"]',
            BTN_CREATENEWINFILE: '//button[text()="Create New In File"]',
            BTN_CANCEL: '//button[text()="Cancel"]',
            TXT_BATCHID: '//input[@id="txtBatchNumber"]',

            DRP_STATUS: '//span[@id="drpStatus"]',
            BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
            TBL_SAFDXODEDUCTIONLISTING: '//div[@class="k-widget k-grid"]//table',
        }
    static DetailForm = {
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_MEMBERSHIPEXPIRYPERIOD: '//input[@id="numMembershipExpiryPeriod"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        TXT_DORMANTMEMBERPERIOD: '//input[@id="numDormantMemberPeriod"]',
        DATE_DOCUMENTDATE: '//input[@id="dtpDocumentDate"]',
        DRP_SAFDXOTYPE: '//span[@id="dtpSafdxoType"]',

    }

}
export default elems_SAFDXODEDUCTION