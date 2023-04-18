class elems_AccommodationBookingCancellationDetail {

    static BTN_CREATENEW = '//button[text()="Create New"]'

    static TXT_CANCELLATIONNUMBER = '//input[@id="txtCancellationNumber"]'
    
    static PCK_MAINACCOMMODATION = '//label[text()="Main Accommodation"]//following-sibling::div//button'
    static TXT_ACCOMMODATION = '//input[@name="name"]'
    static BTN_SEARCHFILTERACC = '(//button[text()="Search Filters"])[1]'
    
    static DATE_CHECKINFROM = '//input[@id="dtpStartDateFrom"]'
    static DATE_CHECKINTO = '//input[@id="dtpStartDateTo"]'

    static DATE_CHECKINOUTFROM = '//input[@id="dtpEndDateFrom"]'
    static DATE_CHECKINOUTTO = '//input[@id="dtpStartDateTo"]'

    static TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'

    static PCK_CUSTOMERCATEGORY = '//label[text()="Customer Category"]//following-sibling::div//button'
    static TXT_CUSTOMERCATEGORYNAME = '//input[@id="txtCustomerCategoryName"]'
    static TXT_CUSTOMERCATEGORYNUMBER = '//input[@id="txtCustomerCategoryNumber"]'
    
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DRP_RECORDSTATUS = '//span[@id="drpRecordStatus"]'
    
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TBL_ACCOMADATIONBOOKINGLISTING = '//h2[text()="Accommodation Booking Cancellation Listing"]//ancestor::div//table'
    
}
export default elems_AccommodationBookingCancellationDetail