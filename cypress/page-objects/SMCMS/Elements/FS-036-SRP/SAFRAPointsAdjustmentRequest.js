class elems_SRPPointsAdjustmentRequest {


    static BTN_REQUEST = '//span[text()="Request"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static LBL_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[@for="lblMemberID"]'
    static LBL_LAST4NRIC = '//label[@for="lblLast4NRICNo"]'
    static LBL_NAME = '//label[@for="lblName"]'
    static PCK_SOURCECHANNEL = '//label[@for="pckSourceChannelID"]//following-sibling::div//button'
    static PCK_VENDORID = '//label[@for="pckVendorID"]//following-sibling::div//button'
    static TXT_NAME = '(//input[@name="name"])[1]'
    static TXT_VENDORID = '(//input[@name="vendorId"])[1]'
    static PCK_EDCTERMINALID = '//label[@for="pckEDCTerminalID"]//following-sibling::div//button'
    static TXT_TERMINALID = '(//input[@name="terminalID"])[1]'
    static DRP_TYPE = '//span[@id="drpType"]'
    static TXT_REMARKS = '//textarea[@id="areaRemark"]'
    static TXT_AMONUT = '//input[@id="numAmount"]'
    static LBL_POINTS = '//label[@for="lblPoints"]'
    static LBL_CONVERTEDAMOUNT = ''
    static CHK_PROMOTION = '//input[@id="checkApplyPromotion"]'
    static CHK_TRANSACTIONDATE = '//input[@id="dtpTransactionDate"]'
    static BTN_SEARCHFILTER = '(//span[text()="Search Filters"])'

}
export default elems_SRPPointsAdjustmentRequest