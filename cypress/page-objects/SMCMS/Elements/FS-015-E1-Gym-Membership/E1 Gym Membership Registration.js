class elems_E1GymMembershipRenewal {

    static BTN_SUBMIT = '//button[@id="submit"]'
    static BTN_CANCEL = '//button[@id="submit"]/following-sibling::button[text()="Cancel"]'
    static BTN_ADDTOCART = '//button[@id="addToCart"]'
    static PCK_CUSTOMERCATEGORY = '//label[@for="pckCustomerCategory"]/following-sibling::div//button'
    static PCK_PREFERREDCLUBHOUSE = '//label[text()="Preferred Clubhouse"]/following-sibling::div//button'
    static DRP_MEMBERSHIPTERM = '//span[@id="membershipTerm"]'
    static DRP_DEPENDENCYTYPE = '//span[@id="e1DependencyType"]'
    static DATE_EFFECTIVEDATE = '//input[@id="membershipEffectiveDate"]'
    static CHK_TERMCONDITION = '//input[@id="chkAgreeWithTerms"]'
    static CHK_INDEMNITYWAIVER = '//input[@id="chkAgreewithIndemnity"]'

    static BTN_ADDWAIVEROFF = '//button[text()="Add Waiver Off"]'
    static TBL_ADDWAIVEROFF = '(//div[@class="k-widget k-grid"]//table)[2]'
    static DRP_CHARGETYPE = '//label[@id="drpChargeType_label"]/following-sibling::span'
    static TXT_AMOUNT = '//label[@for="txtAmount"]/following-sibling::span//input'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[@form="formAddWaiverOff"]'
}

export default elems_E1GymMembershipRenewal