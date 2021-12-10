class elems_BatchMembershipRefundRequest {

    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static PCK_SOURCECHANNEL = '//label[@for="pckSourceChannel"]/parent::div//button'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DRP_REFUNDPAYMENTTYPE = '//span[@id="drpRefundPaymentType"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static ReceiptList = {
        TBL_RECEIPTLIST : '//h3[text()="Receipt List"]/parent::div//table'
    }

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_BatchMembershipRefundRequest