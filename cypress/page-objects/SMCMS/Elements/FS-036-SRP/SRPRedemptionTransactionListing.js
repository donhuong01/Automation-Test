class elems_SRPREDEMPTIONTRANSACTIONLISTING {


    static BTN_COLLECTGIFT = '//span[text()="Collect Gift"]'
    static BTN_DOWNLOADREDEMPTIONLETTER = '//span[text()="Download Redemption Letter"]'
    static DRP_CATEGORY = '//span[@id="drpCategory"]'
    static MEMBERID = {

        PCK_MEMBERID: '//label[@for="pckMemberId"]//following-sibling::div//button',
        TXT_MEMBERID: '//input[@name="memberId"]',
        TXT_NAME: '//input[@name="nameOnNRIC"]'

    }

    static DATE_TRANSACTIONDATEFROM = '//input[@id="dtpTransactionDateFrom"]'
    static DATE_TRANSACTIONDATETO = '//input[@id="dtpTransactionDateTo"]'
    static DRP_STATUS = '//span[@id="drpRedemptionStatus"]'

    static BTN_SEARCHFILTERS = '(//span[text()="Search Filters"])[1]'
    static TBL_SRPREDEMPTIONLIATING = '//h2[text()="SRP Redemption Transaction Listing"]/parent::div/following-sibling::div//table'
    static TBL_SRPREDEMPTIONCOLLECTION = '//h2[text()="SRP Redemption Collection Listing"]/parent::div/following-sibling::div//table'


}
export default elems_SRPREDEMPTIONTRANSACTIONLISTING