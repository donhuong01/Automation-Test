class elems_FacilityBookingCancellationLisiting{

    static BOOKINGNUMBER = '//input[@id="txtBookingNumber"]'
    static DRP_ACCESSMODE = '//span[@id="drpAccessMode"]'
    static PCK_MAINFACILITY = '//label[@for="pckMainFacility"]//parent::div//button'
    static DRP_TRANSACTIONTYPE = '//span[@id="drpTransactionType"]'
    static DRP_STARTDATEFROM = '//input[@id="dtpStartDateFrom"]'
    static DRP_STARTDATETO= '//input[@id="dtpStartDateTo"]'
    static DRP_ENDDATEFROM = '//input[@id="dtpEndDateFrom"]'
    static DRP_ENDDATEFROM = '//input[@id="dtpEndDateTo"]'
    static TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'
    static DRP_CUSTOMERCATEGORY = '//span[@id="drpCustomerCategory"]'
    static TXT_RECEIPTNUMBER = '//input[@id="txtReceiptNumber"]'
    static DRP_BOOKINGSTATUS = '//span[@id="drpBookingStatus"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static CHK_GROUPBOOKINGRECORDSINRESULT ='//input[@id="chkIncludeGroupBookingRecordsInResult"]'
    static BTN_SEARCHFILTERS = '//button[text()"Search Filters"]'
    static TBL_FACILITYBOOKINGCANCELLATIONLISTING= '//h2[text()"Facility Booking Cancellation Listing"]//ancestor::div//table'




}
export default elems_FacilityBookingCancellationLisiting