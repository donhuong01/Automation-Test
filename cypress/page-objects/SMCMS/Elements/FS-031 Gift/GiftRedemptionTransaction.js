class elems_GiftRedemptionTransaction {

    static ListingForm = {
        BTN_COLLECTGIFT: '//span[text()="Collect Gift"]',
        BTN_CANCELGIFT: '//span[text()="Cancel Gift"]',
        BTN_INSERTGIFT: '//span[text()="Insert Gift"]',
        BTN_CHANGEGIFT: '//span[text()="Change Gift"]',
        BTN_REFUNDGIFT: '//span[text()="Refund Gift"]',
        BTN_BULKGIFTREDEMPTIONUPLOAD: '//span[text()="Bulk Gift Redemption Upload"]',
        BTN_GENERATELETTER: '//span[text()="Generate Letter"]',
        BTN_SENDLETTER: '//span[text()="Send Letter"]',
        BTN_PRINT: '//span[text()="Print"]',
        BTN_EXPORT: '//span[text()="Export"]',
        PCK_MEMBERID: '//label[@for="pckMemberName"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        TXT_MEMBERNAME: '//input[@name="nameOnNRIC"]',
        BTN_SEARCHFILTERMEMBER: '(//span[text()="Search Filters"])[2]',
        //BTN_SEARCHFILTERMEMBER: '(//span[text()="Search Filters"])[2]',

        TXT_REDEMPTIONLETTERNUMBER: '//input[@id="txtRedemptionLetterNumber"]',
        TXT_RECEIPTNUMBER: '//input[@id="txtReceiptNumber"]',
        TXT_BATCHID: '//input[@id="txtBatchId"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        TBL_GIFTREDMPTRANSACLISTING: '//h2[text()="Gift Redemption Transaction Listing"]/ancestor::div//table',
        BTN_SEARCHFILTER: '//span[text()="Search Filters"]',
    }

    static DetailForm = {

        Status: '//label[@for="lblStatus"]'
    }
    static GiftInsertionForm = {

        BTN_SUBMIT: '//span[text()="Submit"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        PCK_MEMBERID: '//label[text()="Member ID"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@id="pckMemberID"]   ',
        BTN_SEARCHFILTER: '//span[text()="Search Filters"]',
        PCK_GIFTITEM: '//label[text()="Gift Item"]/following-sibling::div//button',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        TXT_REMARK: '//textarea[@id="areaRemark"]',

    }
    static GiftExchangeForm = {

        BTN_EDIT: '//span[text()="Edit"]',
        BTN_CHANGE: '//span[text()="Change"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        PCK_ITEMNAME: '//label[text()="Item Name"]/following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        PCK_GIFTITEM: '//label[text()="Gift Item"]/following-sibling::div//button',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        TXT_REASAON: '//textarea[@id="areaReason"]',
        TBL_ITEMLIST: '(//div[@class="k-grid k-grid-md"]//table//input)[1]',

    }

    static GiftRefundForm = {

        BTN_SUBMIT: '//span[text()="Submit"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="areaRemarks"]',

    }

    static GiftCanellationForm = {

        BTN_SUBMIT: '//span[text()="Submit"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="areaRemarks"]',

    }
    static GiftCollectionForm = {

        BTN_COLLECT: '//span[text()="Collect"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        TXT_REMARK: '//textarea[@id="remark"]',

    }
}
export default elems_GiftRedemptionTransaction