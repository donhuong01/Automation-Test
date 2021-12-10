class elems_BatchMembershipRegistrationListing {

    static BatchInformation = {
        LBL_BATCHID : '//label[@for="lblBatchId"]',
        TXT_BATCHNAME : '//input[@id="txtBatchName"]',
        DRP_BATCHTYPE : '//span[@id="txtBatchType"]',
        TXT_RECTALKSESSIONID : '//input[@id="txtRecTalk"]',
        DRP_MEMSHIPREGTENURE : '//span[@id="drpRegistrationTenure"]',
        TXT_PROMOTIONREGISTRATION : '//input[@id="pckPromoRegistration"]',
        DRP_MEMSHIPRENEWALTENURE : '//span[@id="drp-renewal-tenure"]',
        TXT_PROMOTION_RENEWAL : '//input[@id="txt-promo-tenure"]',
        DRP_PAYMENTMODE : '//span[@id="drp-payment-mode"]',
        LBL_STATUS : '//label[@for="lbl-status"]'
    }

    static MembershipRegistrationAndRenewalListing = {
        BTN_ADDMEMBER : '//button[text()="Add Member"]',
        TBL_MEMSHIPREGANDRENEWALLIST : '//legend[text()=" Membership Registration and Renewal Listing  "]/ancestor::div//table'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_VALIDATEREGISTRATION = '//button[text()="Validate Registration"]'
    static BTN_POSTREGISTRATION = '//button[text()="Post Registration"]'
}

export default elems_BatchMembershipRegistrationListing