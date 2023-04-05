class elems_E1GymMembershipRenewal {

    static BTN_ADDTOCART = '//button[@form="formE1GMMembershipRenewalForm"]'
    static BTN_CANCEL = '//button[@form="formE1GMMembershipRenewalForm"]/following-sibling::button[text()="Cancel"]'
    static DRP_E1GYMMEMBERSHIP = '//span[@id="drpE1GymMembership"]'
    static TXT_RENEWALTERM = '//input[@id="drpRenewalTerm"]'
    static TBL_PAYMENTINFORMATION = '(//h3[text()="Payment Information"]/following-sibling::div//table)[2]'
    static LBL_TOTAL = '//label[text()="Total:"]/following-sibling::div'
    static LBL_PAYMENTAMOUNT = '//label[text()="Payment Amount:"]/following-sibling::div'
    static LBL_ISPAYMENTCOLLECT = '//label[text()="Is Payment Collected:"]/following-sibling::div'
}

export default elems_E1GymMembershipRenewal