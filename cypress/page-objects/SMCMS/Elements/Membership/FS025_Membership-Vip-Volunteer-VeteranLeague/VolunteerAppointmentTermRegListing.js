class elems_VolunteerAppointmentTermRegistrationListing {
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_CARDS = '//button[text()="Cards"]/following-sibling::button'
    static TXT_APPOINMENTTYPE = '//input[@id="txtApointmentType"]'
    static TXT_LASTFOURNRIC = '//input[@id="txtLastFourNRIC"]'
    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static TXT_MEMBERNAME = '//input[@id="txtMemberName"]'
    static TXT_MEMBERNAMESELECTID = '//input[@name="memberId"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DATE_STARDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static BTN_SEARCHFILTERSSELECTID = '//div[text()="Select Member ID"]//parent::div//following-sibling::div//button[text()="Search Filters"]'
    static TBL_VOLUNTEERAPTMNTTERMREGLISTING = '//h2[text()="Volunteer Appointment Term Registration Listing"]//ancestor::div//table'

}

export default elems_VolunteerAppointmentTermRegistrationListing