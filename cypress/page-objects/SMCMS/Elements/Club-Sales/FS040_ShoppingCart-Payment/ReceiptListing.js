class elems_ReceiptListing {

    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static DRP_TYPE = '//span[@id="drpType"]'
    static TXT_MEMBERID= '//input[@name="memberId"]'
    static TXT_RECEIPTNO = '//input[@id="txtReceiptNumber"]'
    static DRP_PAYMASTERTRANSACTION = '//span[@id="drpIsPaymaster"]'
    static DATE_RECEIPTDATE_FROM = '//input[@id="dtpReceiptDateFrom"]'
    static DATE_RECEIPTDATE_TO = '//input[@id="dtpDateReceiptDateTo"]'
    static TXT_BATCHID = '//input[@id="txtBatchId"]'
    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static BTN_SEARCHFILTERSSELECTMEMID = '(//input[@name="memberId"]/parent::div/parent::div/parent::div/parent::div//button)[1]'
    static TBL_RECEIPTLISTING = '//h2[text()="Receipt Listing Form"]/ancestor::div//table'
    // static TBL_RECEIPTLISTING = '//h2[text()="Receipt Listing"]/ancestor::div//table'
    static BTN_REFUND = '//span[text()="Refund"]'
    static BTN_SELECT = '//span[text()="Select"]'

}

export default elems_ReceiptListing