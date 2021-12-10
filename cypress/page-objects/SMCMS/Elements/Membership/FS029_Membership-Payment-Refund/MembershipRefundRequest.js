class elems_MembershipRefundRequest { 

    static LBL_REFUNDREQUESTID = '//label[text()="Refund Request ID"]/parent::div//label[@for="lblRefundRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_LAST4NRIC_ICNO = '//label[text()="Last 4 NRIC/IC No."]/parent::div//label[@for="lblNRIC"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static LBL_RECEIPTID = '//label[text()="Receipt ID"]/parent::div//label[@for="lblReceiptId"]'
    static LBL_REFUNDAMOUNT = '//label[text()="Refund Amount"]/parent::div//label[@for="lblRefundAmount"]'
    static PCK_SOURCECHANNEL = '//label[@for="txtSourceChannel"]/parent::div//button'
    static LBL_VOUCHERID = '//label[text()="Voucher ID"]/parent::div//label[@for="lblVoucherId"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DRP_REFUNDPAYMENTTYPE = '//span[@id="drpRefundPaymentType"]'
    static TXT_PAYEENAME = '//input[@id="txtPayeeName"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static DATE_REFUNDDATE = '//input[@id="dtpRefundDate"]'
    static DATE_MAILINGDATE = '//input[@id="dtpMailingDate"]'
    static RefundItemList = {
        TBL_REFUNDITEMLIST : '//h3[text()="Refund Item List"]/parent::div//table'
    }

    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MembershipRefundRequest