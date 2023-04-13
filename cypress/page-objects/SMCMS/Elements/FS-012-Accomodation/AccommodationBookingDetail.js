class elems_AccommodationBookingDetail {

    static BTN_CLOSE = '//button[text()="Create New"]'
    static PCK_LOCATION = '//label[text()="Location"]//following-sibling::div//button'

    static PCK_ACCOMMODATIONTYPE = '//label[text()="Accommodation Type"]//following-sibling::div//button'
    
    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_LOCATION = '//label[@for="lblLocation"]'
    static LBL_ACCOMMODATIONTYPE = '//label[@for="lblAccommodationType"]'

    static RADIO_BOOKING = '//label[text()="Booking"]//preceding-sibling::input'
    static RADIO_RESERVATION = '//label[text()="Reservation"]//preceding-sibling::input'

    static DATE_START = '//label[text()="Start"]//preceding-sibling::span'
    static DATE_END = '//label[text()="End"]//preceding-sibling::span'

    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'

    static LBL_MAINACCOMMODATION = '//label[@for="//label[@for="lblAccommodationName"]"]'
    static LBL_MEMBERID = '//label[@for="lblMemberID"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static LBL_CUSTOMERCATEGORY = '//label[@for="lblCustomerCategory"]'

    static BTN_ADDWAIVEROFF = '//button[text()="Add Waiver Off"]'

    static CHK_TERMANDCONDITION = '//input[@id="chkAgreeWithTermsAndConditions"]'
    static CHK_INDENTITYWAIVER = '//input[@id="chkAgreeWithIndemnity"]'


}
export default elems_AccommodationBookingDetail