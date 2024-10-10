class elems_FacilityBookingAmendmentListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static TXT_AMENDMENTNO = '//input[@id="txtAmendmentNumber"]'
    static DRP_AMENDMENTTYPE = '//span[@id="drpAccessMode"]'
    static TXT_BOOKINGNO = '//input[@id="txtBookingNumber"]'
    static PCK_MAINFACILITY = '//label[@for="pckFacility"]//following-sibling::div//button'
    static DRP_TRANSACTIONTYPE = '//span[@id="drpTransactionType"]'
    static TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'
    static TXT_RECEIPTNUMBER = '//input[@id="txtReceiptNumber"]'
    static DRP_BOOKINGSTATUS = '//span[@id="drpBookingStatus"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static CHK_INCLUDEGB = '//input[@id="chkIncludeGroupBookingRecordsInResult"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_AMENDMENTLISTING = '//h2[text()="Facility Booking Amendment Listing"]/parent::div/following-sibling::div//table'


}
export default elems_FacilityBookingAmendmentListing