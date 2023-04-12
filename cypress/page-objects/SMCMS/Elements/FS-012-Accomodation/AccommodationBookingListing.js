class elems_AccommodationBOOKINGListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_CONVERTBOOKING = '//button[text()="Convert to Booking"]'
    static BTN_CANCELRESERVARTION = '//button[text()="Cancel Reservation"]'

    static TXT_BOOKINGNO = '//input[@id="txtBookingNumber"]'
    static DRP_TRANSACTIONTYPE = '//span[@id="drpTransactionType"]'
    static PCK_ACCOMMODATIONNAME = '//label[text()="Accommodation Name"]//following-sibling::div//button'
    static TXT_ACCOMMODATION = '//input[@name="name"]'
    static TXT_ACCOMMODATIONNO = '//input[@id="txtAccommodationNo"]'
    
    static DATE_CHECKINFROM = '//input[@id="dtpStartDateFrom"]'
    static DATE_CHECKINTO = '//input[@id="dtpStartDateTo"]'
    static TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'

    static DATE_CHECKINOUTFROM = '//input[@id="dtpEndDateFrom"]'
    static DATE_CHECKINOUTTO = '//input[@id="dtpStartDateTo"]'
    static TXT_MEMBERID = '//input[@id="txtMemberId"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'

    static PCK_CUSTOMERCATEGORY = '//label[text()="Customer Category"]//following-sibling::div//button'
    static DRP_COLLECTED = '//span[@id="drpCollected"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DRP_RECORDSTATUS = '//span[@id="drpRecordStatus"]'
    
    static PCK_ACCOMODATIONTYPENAME = '//label[text()="Accommodation Type Name"]//following-sibling::div//button'

    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TBL_ACCOMADATIONBOOKINGLISTING = '//h2[text()="Accommodation Booking Listing"]//ancestor::div//table'
    
}
export default elems_AccommodationBOOKINGListing