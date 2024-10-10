class elems_SMCMSShoppingCartAndPayment {

    LNK_ALLTRANSCTIONRECORDEDUNDER = '//p[text()="All transaction will be recorded under"]/parent::div//a[text()="Change"]'
    LBL_RECEIPTDATE = '//p[text()="Receipt Date:"]//b'
    

    static ShoppingCartItems = {
        TBL_SHOPPINGCARTITEMS : '//h3[text()="Shopping Cart Items"]/parent::div//table',
        LBL_TOTAL : '//label[text()="Total"]/parent::div//label[@for="lblTotal"]'
    }

    static Promotions = {
        TBL_PROMOTIONS : '//h3[text()="Promotions"]/parent::div//table',
        LNK_USEPROMOCODE : '//a[text()="USE PROMO CODE"]',
        TXT_PROMOCODE : '//input[@id="txtPromoCode"]',
        BTN_APPLYPROMOTION : '//button[text()="Apply Promotion"]'
    }

    static Payments = {
        TBL_PROMOTIONS : '//h3[text()="Payments"]/parent::div//table',
        LBL_TOTAL : '//label[text()="Remaining Balance:"]/parent::div//label[@for="lblRemainingBalance"]',
        DRP_PAYMENTMODE : '//span[@id="drpPaymentMode"]',
        TXT_AMOUNT : '//input[@id="txtAmount"]',
        BTN_APPLYPAYMENT : '//button[text()="Apply Payment"]',
        LBL_REMAININGBALANCE : '//span[text()="Remaining Balance: "]//b',
        BTN_PAYNOW : '//button[text()="Pay Now"]',
        BTN_COMPLETE : '//button[text()="Complete"]'
    }

    static MemberInformation = {
        LBL_NAME : '//h4//b',
        LBL_PRINCIPALID : '//label[text()="Principal ID:"]/parent::div//label[@for="lblPrincipalId"]',
        LBL_MEMBERID : '//label[text()="Member ID:"]/parent::div//label[@for="lblMemberId"]',
        LBL_NRIC : '//label[text()="NRIC:"]/parent::div//label[@for="lblNRIC"]',
        LBL_PAIDTILL : '//label[text()="Paid Till:"]/parent::div//label[@for="lblPaidTil"]',
        LBL_TOTALPOINTS : '//label[text()="Total Points:"]/parent::div//label[@for="lblTotalPts"]',
        BTN_VIEWDETAILS : '//button[text()="View Details"]',
        BTN_LOGOUT : '//button[text()="Logout"]'
    }

    static ReceiptInformation = {
        TXTAREA_REMARK : '//textarea[@id="areaRemark"]',
        CHK_ERECEIPT : '//input[@id="txtEReceipt"]',
        TXT_ERECEIPTEMAILADDRESS : '//input[@id="txtEReceiptEmail"]'
    }

    BTN_PAYNOW = '//button[text()="Pay Now"]'
    BTN_PAYANDPRINT = '//button[text()="Pay & Print"]'
    BTN_RESETCART = '//button[text()="Reset Cart"]'
}

export default elems_SMCMSShoppingCartAndPayment