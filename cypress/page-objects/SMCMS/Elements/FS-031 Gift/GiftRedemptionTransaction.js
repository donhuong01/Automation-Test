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
        PCK_MEMBERID: '//label[@for="pckMemberName"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        TXT_MEMBERNAME: '//input[@name="nameOnNRIC"]',
        BTN_SEARCHFILTERMEMBER: '(//button[text()="Search Filters"])[1]',

        TXT_REDEMPTIONLETTERNUMBER: '//input[@id="txtRedemptionLetterNumber"]',
        TXT_RECEIPTNUMBER: '//input[@id="txtReceiptNumber"]',
        TXT_BATCHID: '//input[@id="txtBatchId"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        TBL_GIFTREDMPTRANSACLISTING: '//h2[text()="Gift Redemption Transaction Listing"]/ancestor::div//table',
        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
    }

    static DetailForm = {

        Status: '//label[@for="lblStatus"]'
    }
    static GiftInsertionForm = {

        BTN_SUBMIT: '//button[text()="Submit"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        PCK_MEMBERID: '//label[text()="Member ID"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
        PCK_GIFTITEM: '//label[text()="Gift Item"]/following-sibling::div//button',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        TXT_REMARK: '//textarea[@id="areaRemark"]',

    }
    static GiftExchangeForm = {

        BTN_EDIT: '//button[text()="Edit"]',
        BTN_CHANGE: '//button[text()="Change"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        PCK_ITEMNAME: '//label[text()="Item Name"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        PCK_GIFTITEM: '//label[text()="Gift Item"]/following-sibling::div//button',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        TXT_REASAON: '//textarea[@id="areaReason"]',
        TBL_ITEMLIST: '(//div[@class="k-widget k-grid"]//table//input)[1]',

    }

    static GiftRefundForm = {

        BTN_SUBMIT: '//button[text()="Submit"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="areaRemarks"]',

    }

    static GiftCanellationForm = {

        BTN_SUBMIT: '//button[text()="Submit"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="areaRemarks"]',

    }
    static GiftCollectionForm = {

        BTN_COLLECT: '//button[text()="Collect"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="remark"]',

    }
}
export default elems_GiftRedemptionTransaction