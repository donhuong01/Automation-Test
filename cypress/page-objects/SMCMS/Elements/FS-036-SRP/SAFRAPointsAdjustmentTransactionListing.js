class elems_SRPPointsTransaction {


    static PCK_MEMBERID = '//label[@for="pckMemberID"]//following-sibling::div//button'
    static TXT_MEMBERID = '//input[@name="memberId"]'
    static BTN_SEARCHFILTER = '(//button[text()="Search Filters"])[1]'
    static TXT_NAME = '//input[@id="txtName"]'
    static PCK_SOURCECHANNEL = '//label[@for="pckSourceChannelId"]//following-sibling::div//button'
    static DRP_TRANSACTIONTYPE = '//span[@id="drpTransactionType"]'
    static DATE_ISSUEDATEFROM = '//input[@id="dtpIssueDateFrom"]'
    static DATE_ISSUEDATETO = '//input[@id="dtpIssueDateTo"]'
    static DATE_EXPIRATIONDATEFROM = '//input[@id="dtpExprationDateFrom"]'
    static DATE_EXPIRATIONDATETO = '//input[@id="dtpExprationDateTo"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_MEMBERSAFRAPOINTSTRANSACTION = '//h2[text()="Member SAFRA Points Transaction Listing Form"]/parent::div/following-sibling::div//table'


}
export default elems_SRPPointsTransaction