class elems_BatchRegistrationPayment { 

    static SaleItems = {
        TBL_SALEITEMS: '//div[text()="Sale Items"]/parent::div//table',
        LBL_TOTAL : '//label[text()="Total:"]/parent::div//label[@for="lblTotal"]'
    }

    static Promotions = {
        TBL_PROMOTIONS : '//div[text()="Promotions"]/parent::div//table',
        TXT_PROMOCODE : '//input[@id="txtPromoCode"]',
        DRP_PROMOTION : '//span[@id="drpPromotion"]',
        BTN_APPLYPROMOTION : '//button[text()="Apply Promotion"]'
    }

    static Payment = {
        TBL_PAYMENT : '//div[text()=" Payment "]/parent::div//table',
        LBL_REMAININGBALANCE : '//label[text()="Remaining Balance:"]/parent::div//label[@for="lblRemainingBalance"]',
        DRP_PAYMENTMODE : '//span[@id="drpPaymentMode"]',
        DATE_CHEQUEDATE : '//input[@id="dtpChequeDate"]',
        TXT_CHEQUENO : '//input[@id="textChequeNo"]',
        TXT_NAMEOFBANK : '//input[@id="textNameOfBank"]',
        DRP_VOUCHERNO : '//span[@id="drpVoucher"]',
        TXT_VOUCHERNUMBER : '//input[@id="drpVoucherNumber"]',
        DATE_EXPIRYDATE : '//input[@id="dtpExpiryDate"]',
        TXT_AMOUNT : '//input[@id="txtAmount"]',
        BTN_APPLYPAYMENT : '//button[text()="Apply Payment"]'
    }

    static MemberInformation = {
        LBL_MEMBERINFORMATION : '//legend[text()="Member Information"]/ancestor::div//h4/b',
        LBL_PRINCIPALID : '//label[text()="Principal ID:"]/parent::div//label[@for="lblPrincipalId"]',
        LBL_MEMBERID : '//label[text()="Member ID:"]/parent::div//label[@for="lblMemberId"]',
        LBL_NRIC : '//label[text()="NRIC:"]/parent::div//label[@for="lblNric"]',
        LBL_PAIDTIL : '//label[text()="Paid Till:"]/parent::div//label[@for="lblPaidTil"]',
        LBL_TOTALPOINTS : '//label[text()="Total Points:"]/parent::div//label[@for="lblTotalPts"]'
    }

    static BTN_COMPLETE = '//button[text()="Complete"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_BatchRegistrationPayment