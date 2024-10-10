class elems_AccommodationBookingCancellationDetail {

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static TXT_CANCELLATIONNUMBER = '//input[@id="txtCancellationNumber"]'

    
    static PCK_ACCOMMODATIONBOOKING = '//label[text()="Accommodation Booking"]//following-sibling::div//button'
    static TXT_BOOKINGNUMBER = '//input[@id="bookingNumber"]'
    static TXT_CUSTOMERNAME = '//input[@name="customerName"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'

    static LBL_MAINACCOMMODATION = '//label[@for="lblMainFacility"]'
    static LBL_MEMBERID = '//label[@for="lblMemberID"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'

    //Payment detail

    static CHK_CALCULATEPAYMENT = '//input[@id="chkCalculatePayment"]'

    static CHK_GIVEREFUNDCRIDT = '//input[@id="chkGiveRefundCredit"]'
    static DRP_REFUNDCRIDTTYPE = '//span[@id="drpRefundCreditType"]'
    static DRP_AMOUNTTYPE = '//span[@id="drpAmountType"]'
    static TXTAERA_REFUNDCREDIT = '//textarea[@id="txtRefundCreditReason"]'

    //Add Waiver off
    static BTN_ADDWAIVEROFF = '//button[text()="Add Waiver Off"]'
    static TXT_CHARGETYPE = '//span[@id="drpChargeType"]'
    static TXT_AMOUNT = '//input[@id="txtAmount"]'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[text()="Confirm"]'
    
    
}
export default elems_AccommodationBookingCancellationDetail