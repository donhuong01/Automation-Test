class elems_FacilityBookingListing{

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'
    static TXT_BOOKINGNUMBER = '//input[@id="txtBookingNumber"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TBL_FACILTYBOOKINGLIST = '//h2[text()="Facility Booking Listing"]/parent::div/following-sibling::div//table'
    static BTN_CONVERTTOBOOKING = '//button[text()="Convert to Booking"]'
    static PCK_MAINFACILITY = '//label[text()="Main Facility"]//following-sibling::div//button'
    static DRP_MAINTENANCE ='//button[@aria-label="menu toggling button"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static PCK_FACILITYBOOKING = '//label[@for="facilityBooking"]//following-sibling::div//button'
    static TXT_CUSTOMERNAME = '//input[@name="customerName"]'


}
export default elems_FacilityBookingListing