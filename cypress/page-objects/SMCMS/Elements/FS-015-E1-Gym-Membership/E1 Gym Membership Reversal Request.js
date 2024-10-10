class elems_E1GymMembershipReversalRequest {

    static BTN_SUBMIT = '//button[@form="formE1GymMembershipReversalRequest"]'
    static BTN_CANCEL = '//button[@form="formE1GymMembershipReversalRequest"]/following-sibling::button[text()="Cancel"]'
    static LBL_REVERSALREQUESTID = '//label[@for="lblReversalRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static LBL_E1GYMMEMID = '//label[@for="lble1GymMembershipID"]'
    static LBL_E1GYM = '//label[@for="lble1Gym"]'
    static LBL_E1GYMTERMSTART = '//label[@for="lble1GymTermStart"]'
    static LBL_E1GYMTERMEND = '//label[@for="lble1GymTermEnd"]'
    static LBL_STATUS = '//label[@for="lblstatus"]'
    static LBL_REASONCODE = '//label[@for="lblReasonCode"]'
    static LBL_REQUESTEDDATE = '//label[@for="lblReqeustDate"]'
    static LBL_PROCESSEDDATE = '//label[@for="lblProcessDate"]'
    static CHK_CALCULATEPAYMENT = '//input[@id="chkCalculatePayment"]'
    static CHK_REFUNDCREDIT = '//input[@id="chkGiveRefundCredit"]'
    static BTN_ADDWAIVEROFF = '//button[text()="Add Waiver Off"]'
    static TBL_ADDWAIVEROFF = '(//div[@class="k-widget k-grid"]//table)[2]'
    static DRP_CHARGETYPE = '//label[@id="drpChargeType_label"]/following-sibling::span'
    static TXT_AMOUNT = '//label[@for="txtAmount"]/following-sibling::span//input'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[@form="formAddWaiverOff"]'
}
export default elems_E1GymMembershipReversalRequest