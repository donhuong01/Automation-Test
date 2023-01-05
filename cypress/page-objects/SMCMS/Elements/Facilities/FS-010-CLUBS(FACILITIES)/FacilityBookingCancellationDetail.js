class elems_FacilityBookingCancellationDetail{

    static PCK_FACILITYBOOKING = '//label[@for="facilityBooking"]//following-sibling::div//button'
    static TBL_RESOURCES = '//h3[text()="Resources"]//ancestor::div//table'
    

    static PAYMENTDETAIL = {
        CHK_CALCULATEPAYMENT : '//input[@id="calculatePayment"]',
        BTN_ADDWAIVEROFF : '//button[text()="Add Waiver Off"]',
        TBL_PAYMENTDETAIL : '//h3[text()="Payment Detail"]//following-sibling::div//table',
        CHK_GIVEREFUNDCREDIT : '//input[@id="giveRefundCredit"]',
        DRP_REFUNDCREDIT : '//span[@id="refundCreditType"]',
        DRP_AMOUNTTYPE: '//span[@id="amountType"]',
        TXTAREA_REFUNDCREDITREASON : '//textarea[@id="refundCreditReason"]'
    }
    static BTN_SAVE ='//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

}
export default elems_FacilityBookingCancellationDetail