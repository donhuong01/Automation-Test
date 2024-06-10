class elems_ReceiptDetail {

    static LBL_RECEIPTNO = '//label[text()="Receipt No."]/parent::div//label[@for="lblReceiptNo"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static LBL_EARNSAFRAPOINTS = '//label[text()="Earn SAFRAPoints"]/parent::div//label[@for="lblTotalAwardedPoint"]'
    static LBL_RECEIPTDATE = '//label[text()="Receipt Date"]/parent::div//label[@for="lblReceiptDate"]'
    static LBL_TELEMONEYREF = '//label[text()="Telemoney REF#"]/parent::div//label[@for="lblTelemoneyRef"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_ISPAYMASTER = '//label[text()="Is Paymaster"]/parent::div//label[@for="lblIsPaymaster"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static CHK_ISPAYMASTER = '//input[@id="lblIsPaymaster"]'
    static LBL_CNRECEIPTNUMBER = '//label[text()="CN Receipt Number"]/parent::div//label[@for="lblCNReceiptNum"]'
    
    static TBL_RECEIPTITEMS = '//h2[text()="Receipt Detail"]/ancestor::div//table'
    static TBL_RECEIPTITEMCHECKBOX = '(//h3[text()="Receipt Items"]/ancestor::div//table)//td/input[1]'
    

    static BTN_CLOSE = '//span[text()="Close"]'
    static BTN_PRINT = '//span[text()="Print"]'
    static BTN_CANCELLATION = '//span[text()="Cancellation"]'
    static BTN_REFUND = '//span[text()="Refund"]'
    static BTN_ADJUST = '//span[text()="Adjust"]'
    static BTN_RESENDERECEIPT = '//span[text()="Resend E-Receipt"]'
}

export default elems_ReceiptDetail