class elems_MembershipAdjustmentRequest {
    static BTN_REQUEST = '//button[text()="Request"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_ADJUSTMENTREQUESTID = '//label[@for="adjustment-request-id"]'
    static DATE_REQUESTDATE = '//input[@id="request-datefield"]'
    static LBL_MEMBERID = '//label[@for="member-id"]'
    static LBL_RECEIPTID = '//label[@for="receipt-id"]'
    static LBL_LAST4NRICICNO = '//label[@for="nric-id"]'
    static LBL_AMOUNT = '//label[@for="amount-id"]'
    static LBL_MEMBERNAME = '//label[@for="member-name"]'
    static PCK_SOURCECHANNEL = '//label[@for="membername"]/parent::div//button'
    static DRP_REASONCODE = '//span[@id="reasoncode-dropdown"]'
    static TEXTAREA_REMARK = '//textarea[@id="remark-textarea"]'
    static LBL_STATUS = '//label[@for="status-label"]'

    static TABLE_ITEMLIST = {
         TBL_ITEMLIST: '//h2[text()="Membership Adjustment Request Form"]/ancestor::div//table'
    }

}
export default  elems_MembershipAdjustmentRequest