class elems_ReceiptDetail {

    static LBL_RECEIPTNO = '//label[text()="Receipt No."]/parent::div//label[@for="lblReceiptNum"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static LBL_RECEIPTDATE = '//label[text()="Receipt Date"]/parent::div//label[@for="lblReceiptDate"]'
    static LBL_TELEMONEYREF = '//label[text()="Telemoney REF#"]/parent::div//label[@for="lblTelemoneyRef"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static CHK_ISPAYMASTER = '//input[@id="lblIsPaymaster"]'
    static LBL_CNRECEIPTNUMBER = '//label[text()="CN Receipt Number"]/parent::div//label[@for="lblCNReceiptNum"]'
    static ReceiptItems = {
        TBL_RECEIPTITEMS : '//h2[text()="Receipt Detail"]/ancestor::div//table'
    }

    static BTN_CLOSE = '//button[text()="Close"]'
    static BTN_PRINT = '//button[text()="Print"]'
    static BTN_CANCELLATION = '//button[text()="Cancellation"]'
    static BTN_REFUND = '//button[text()="Refund"]'
    static BTN_ADJUST = '//button[text()="Adjust"]'
    static BTN_RESENDERECEIPT = '//button[text()="Resend E-Receipt"]'
}

export default elems_ReceiptDetail