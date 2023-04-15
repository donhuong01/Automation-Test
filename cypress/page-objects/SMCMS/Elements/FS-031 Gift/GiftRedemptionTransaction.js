class elems_GiftRedemptionTransaction {

    static ListingForm = {
        BTN_COLLECTGIFT: '//button[text()="Collect Gift"]',
        BTN_CANCELGIFT: '//button[text()="Cancel Gift"]',
        BTN_INSERTGIFT: '//button[text()="Insert Gift"]',
        BTN_CHANGEGIFT: '//button[text()="Change Gift"]',
        BTN_REFUNDGIFT: '//button[text()="Refund Gift"]',
        BTN_BULKGIFTREDEMPTIONUPLOAD: '//button[text()="Bulk Gift Redemption Upload"]',
        BTN_GENERATELETTER: '//button[text()="Generate Letter"]',
        BTN_SENDLETTER: '//button[text()="Send Letter"]',
        BTN_PRINT: '//button[text()="Print"]',
        BTN_EXPORT: '//button[text()="Export"]',
        PCK_MEMBER: '//label[@for="pckMemberName"]/following-sibling::div//button',
        TXT_REDEMPTIONLETTERNUMBER: '//input[@id="txtRedemptionLetterNumber"]',
        TXT_RECEIPTNUMBER: '//input[@id="txtReceiptNumber"]',
        TXT_BATCHID: '//input[@id="txtBatchId"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        TBL_GIFTREDMPTRANSACLISTING: '//div[@class="k-widget k-grid"]//table',
        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
    }

    static GiftInsertionForm = {

        BTN_SUBMIT: '//button[text()="Submit"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        PCK_MEMBERID: '//label[text()="Member ID"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        PCK_GIFTITEM: '//label[text()="Gift Item"]/following-sibling::div//button',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        TXT_REMARK: '//textarea[@id="areaRemark"]',

    }
}
export default elems_GiftRedemptionTransaction