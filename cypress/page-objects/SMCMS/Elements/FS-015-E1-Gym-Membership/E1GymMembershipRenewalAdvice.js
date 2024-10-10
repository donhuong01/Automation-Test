class elems_E1GymMembershipRenewalAdvise {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static TBL_MEMRENADVICELIST = '//button[text()="Delete"]/parent::div/following-sibling::div//table'

    static BTN_SAVE = '//button[@form="formE1RenewalAdviceDetail"]'
    static BTN_CANCEL = '//button[@form="formE1RenewalAdviceDetail"]/following-sibling::button[text()="Cancel"]'
    static TXT_DESCRIPTION = '//textarea[@id="txtDescription"]'
    static CHK_VIAEMAIL = '//label[text()="Via Email"]/preceding-sibling::input'
    static CHK_VIAMAILMERGE = '//label[text()="Via Mail Merge"]/preceding-sibling::input'
    static PCK_E1GYMMAINMEMBERSHIP = '//label[text()="E1 Gym Main Membership"]//following-sibling::div//button'
    static PCK_E1GYMMEMBERSHIP = '//label[text()="E1 Gym Membership"]//following-sibling::div//button'
    static DATE_EXPIRYDATEFROM = '//input[@id="dtpExpiryFrom"]'
    static DATE_EXPIRYDATETO = '//input[@id="dtpExpiryTo"]'
    static DRP_MEMBERSHIPSTATUS = '//span[@id="drpMembershipStatus"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DATE_DOBFROM = '//input[@id="dtpDateOfBirthFrom"]'
    static DATE_DOBTO = '//input[@id="dtpDateOfBirthTo"]'
    static CHK_SEARCHMONTHONLY = '//input[@id="checkSearchMonthOnly"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static TBL_MEMBERSHIPMASTERDATA = '//form[@id="masterDataForm"]/following-sibling::div//table'
}
export default elems_E1GymMembershipRenewalAdvise