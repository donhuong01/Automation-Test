class elems_GiftRedemption {
    
    static BTN_COLLECTGIFT = '//button[text()="Collect Gift"]'
    static BTN_CANCELGIFT = '//button[text()="Cancel Gift"]'
    static BTN_INSERTGIFT = '//button[text()="Insert Gift"]'
    static BTN_CHANGEGIFT = '//button[text()="Change Gift"]'
    static BTN_REFUNDGIFT = '//button[text()="Refund Gift"]'
    static BTN_GENERATELETTER = '//button[text()="Generate Letter"]'
    static BTN_SENDLETTER = '//button[text()="Send Letter"]'
    static BTN_PRINT = '//button[text()="Print"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static PCK_MEMBER = '//label[@for="memberName"]/parent::div//button'
    static TXT_REDEMPTIONLETTERNO = '//input[@id="redemptionnumber"]'
    static TXT_RECEIPTNO = '//input[@id="receiptnumber"]'
    static DRP_STATUS = '//span[@id="status"]'
    static TXT_BATCHID = '//input[@id="batchid"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_GIFTREDTRANSLISTING = '//h2[text()="Gift Redemption Transaction Listing"]/ancestor::div//table'
 
}
export default elems_GiftRedemption