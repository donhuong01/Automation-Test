class elems_VolunteerAppointmentTermRegistrationListing {
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_CARDS = '//button[text()="Cards"]/following-sibling::button'
    static TXT_APPOINMENTTYPE = '//input[@id="txtApointmentType"]'
    static TXT_LASTFOURNRIC = '//input[@id="txtLastFourNRIC"]'
    static PCK_MEMBERID = '//label[@for="txtMemberId"]/parent::div//button'
    static TXT_MEMBERNAME = '//input[@id="txtMemberName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DATE_STARDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_VOLUNTEERAPTMNTTERMREGLISTING = '//h2[text()="Volunteer Appointment Term Registration Listing"]//ancestor::div//table'

}

export default elems_VolunteerAppointmentTermRegistrationListing