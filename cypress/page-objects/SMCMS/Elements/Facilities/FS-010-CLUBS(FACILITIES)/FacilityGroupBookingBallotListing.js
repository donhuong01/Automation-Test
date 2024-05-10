class elems_FacilityGroupBookingBallotListing{

    TXT_BOOKINNO = '//input[@id="txtBookingNumber"]'
    PCK_FACILITY = '//label[text()="Facility"]//following-sibling::div//button'
    TXT_FACILITY = '//input[@name="name"]'
    
    BTN_CREATENEW = '//button[text()="Create New"]'
    BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    BTN_FACILITYSEARCHFILTER = '(//button[text()="Search Filters"])[2]'

    DATE_STARTFROM = '//input[@id="dtpStartDateFrom"]'
    DATE_STARTTO = '//input[@id="dtpStartDateTo"]'
    DATE_ENDFROM = '//input[@id="dtpEndDateFrom"]'
    DATE_ENDTO = '//input[@id="dtpEndDateTo"]'

    TBL_FACILITYGROUPBOOKINGBALLOTLISTING = '//h2[text()="Facility Group Booking Ballot Listing"]//ancestor::div//table'


}

export default new elems_FacilityGroupBookingBallotListing