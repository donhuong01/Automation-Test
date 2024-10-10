class elems_FacilityBookingAmendmentDetail {

    static DRP_TYPEOFAMENDMENT = '//span[@id="pckAmendmentType"]'

    static PCK_FACILITYBOOKING = '//label[@for="pckBooking"]//following-sibling::div//button'
    static TXT_BOOKINGNUMBER = '//input[@name="bookingNumber"]'
    static TXT_CUSTOMERNAME = '//input[@name="customerName"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'

    static BTN_CLEARSELECTEDBOOKING = '//button[text()="Clear Selected Booking"]'
    static TXTAREA_REASON = '//textarea[@id="txtReason"]'

    static CHK_SHOWBOOKINGDETAIL = '//input[@id="chkShowBookingDetails"]'
    static LBL_FACILITYTYPE = '//label[@for="lblFacilityType"]'
    static LBL_MEMBERID = '//label[@for="lblMemberId"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static LBL_CUSTOMERCATEGORY = '//label[@for="lblCustomerCategory"]'
    static LBL_MAINFACILITY = '//label[@for="lblMainFacility"]'
    static LBL_STARTDATE = '//label[@for="lblStartDateTime"]'
    static LBL_ENDDATE = '//label[@for="lblEndDateTime"]'

    //Resources
    static BTN_ADDRESOURCE = '//button[text()="Add"]'
    static TBL_SELECTRESOURCE = '//form[@id="formResourceDialog"]/../following-sibling::div//table'
    static BTN_SELECT = '//form[@id="formResourceDialog"]/../../..//button[text()="Select"]'

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'



}
export default elems_FacilityBookingAmendmentDetail