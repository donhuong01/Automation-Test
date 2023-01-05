class elems_IGMembershipRenewalAdviceDetail {

    static BTN_SUBMIT = '//button[@id="submit"]'
    static BTN_CANCEL = '//button[@id="submit"]/following-sibling::button'
    static LBL_IGRENEWALADVICENO = '//label[text()="Interest Group Renewal Advice Number"]/following-sibling::div'
    static CHK_VISAPOST = '//label[text()="Via Post"]/preceding-sibling::input'
    static CHK_VIAEMAIL = '//label[text()="Via Email"]/preceding-sibling::input'
    static CHK_VIAMAILMERGE = '//label[text()="Via Mail Merge"]/preceding-sibling::input'
    static TXT_DESCRIPTION = '//textarea[@id="areaDescription"]'

    static PCK_IGMAIN = '//label[@for="pckInterestGroupMain"]/following-sibling::div//button'
    static PCK_INTERESTGROUP = '//label[@for="pckInterestGroup"]/following-sibling::div//button'
    static DRP_MEMBERSHIPSTATUS = '//span[@id="drpMembershipStatus"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DATE_EXPIRYDATEFROM = '//input[@id="dtpExpiryFrom"]'
    static DATE_EXPIRYDATETO = '//input[@id="dtpExpiryTo"]'
    static DATE_DATEOFBIRTH = '//input[@id="dtpDateOfBirth"]'
    static CHK_SEARCHMONTONLY = '//input[@id="checkSearchMonthOnly"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_DELETE = '//button[text()="Generate"]/following-sibling::button'
    static TBL_IGMEMBERSHIPRENEWAL = '//form[@id="formIGMRenewalAdviceDetail"]/parent::div//table'

    static TBL_PICKERTABLE = '//div[@class="k-window-content k-dialog-content"]//table'
    static BTN_SELECT = '//button[text()="Select"]'

}

export default elems_IGMembershipRenewalAdviceDetail
