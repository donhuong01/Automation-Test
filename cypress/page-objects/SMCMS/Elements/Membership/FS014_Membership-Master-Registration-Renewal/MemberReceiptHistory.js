class elems_MemberReceiptHistory {
    
    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static TXT_CLUBHOUSE = '//input[@id="txtNameOnNric"]'
    static TXT_RECEIPTNO = '//input[@id="receiptnNmber"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_MEMBERRECEIPTHISTORY = '//h2[text()="Member Receipt History"]/ancestor::div//table'
    
}
export default elems_MemberReceiptHistory