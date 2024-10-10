class elems_ReceiptListing {

    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static DRP_TYPE = '//span[@id="drpType"]'
    static TXT_RECEIPTNO = '//input[@id="txtReceiptNumber"]'
    static DRP_PAYMASTERTRANSACTION = '//span[@id="drpPaymasterTransaction"]'
    static DATE_RECEIPTDATE_FROM = '//input[@id="dtpReceiptDateFrom"]'
    static DATE_RECEIPTDATE_TO = '//input[@id="dtpDateReceiptDateTo"]'
    static TXT_BATCHID = '//input[@id="txtBatchId"]'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_RECEIPTLISTING = '//h2[text()="Receipt Listing"]/ancestor::div//table'
    static BTN_REFUND = '//button[text()="Refund"]'
}

export default elems_ReceiptListing