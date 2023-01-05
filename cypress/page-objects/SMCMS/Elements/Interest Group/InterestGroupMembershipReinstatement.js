class elems_IGMembershipReinstatement {

    static BTN_SUBMIT = '//button[@id="submit"]'
    static BTN_ADDTOCART = '//button[@form="formIGReinstatement"]'
    static BTN_CANCEL = '//button[@id="submit"]/following-sibling::button'
    static PCK_CUSTOMERCATEGORY = '//label[@for="pckCustomerCategory"]/following-sibling::div//button'
    static LBL_REINSTATEMENTID = '//label[text()="Reinstatement ID"]/following-sibling::div'
    static LBL_SAFRAMEMBERID = '//label[@for="pckSAFRAMemberId"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static LBL_SAFRAMEMBERSHIPSTATUS = '//label[text()="SAFRA Membership Status"]/following-sibling::div'
    static LBL_SAFRAMEMBEREXPIRYDATE = '//label[text()="SAFRA Membership Expiry Date"]/following-sibling::div'
    static LBL_IGMEMBERSHIPID = '//label[text()="Interest Group Membership ID"]/following-sibling::div'
    static LBL_INTERESTGROUP = '//label[text()="Interest Group"]/following-sibling::div'
    static LBL_IGTERMSTART = '//label[text()="Interest Group Term Start"]/following-sibling::div'
    static LBL_IGTERMEND = '//label[text()="Interest Group Term End"]/following-sibling::div'
    static LBL_TERMINATIONREASON = '//label[text()="Termination Reason"]/following-sibling::div'
    static LBL_CUSTOMERCATEGORY = '//label[text()="Customer Category"]/following-sibling::div'

    static DATE_TERMDATE = '//input[@id="dtpTermStartDate"]'
    static DRP_MEMBERTERM = '//span[@id="drpMembershipTerm"]'

    static BTN_ADDWIAVER = '//button[text()="Add Waiver Off"]'
    static TBL_WIAVER = '(//button[text()="Add Waiver Off"]/parent::div/parent::div/following-sibling::div//table)[2]'
    static DRP_CHARGETYPE = '//span[@id="drpChargeType"]'
    static TXT_AMOUNT = '//input[@id="txtAmount"]'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[text()="Confirm"]'
    static BTN_CANCEL = '//button[text()="Confirm"]/following-sibling::button'
    static LBL_TOTAL = '//label[text()="Total:"]/following-sibling::div'
    static LBL_PAYMENTAMOUNT = '//label[text()="Payment Amount:"]/following-sibling::div'
    static LBL_ISPAYMENTCOLLECTED = '//label[text()="Is Payment Collected:"]/following-sibling::div'

}

export default elems_IGMembershipReinstatement
