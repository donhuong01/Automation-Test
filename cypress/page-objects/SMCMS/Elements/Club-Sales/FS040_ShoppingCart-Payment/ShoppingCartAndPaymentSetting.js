class elems_ShoppingCartAndPaymentSetting {

    static ShoppingCartSetting = {
        TXT_SHOPPINGCARTTIMEOUT : '//input[@id="txtCartTimeout"]'
    }

    static ReceiptSetting = {
        TXT_GSTNO : '//input[@id="txtGstNum"]',
        TXT_GSTPERCENTAGE : '//input[@id="txtGstPercentage"]'
    }

    static PaymentGatewaySetting = {
        TXT_PAYMENTGATEWAYSTATUS : '//input[@id="txtPaymentStatusCheck"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_ShoppingCartAndPaymentSetting