class elems_VipAppointmentTermRegistrationListing {

    static TXT_APPOINTMENTID = '//input[@id="txtAppointmentId"]'
    static TXT_LAST4NRIC_ICNO = '//input[@id="txtLastFourNRIC"]'
    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static TXT_SELECTNAMEPOPUP = '//input[@name="name"]'
    static TXT_MEMBERNAME = '//input[@id="txtMemberName"]'
    static DRP_TYPE = '//span[@id="drpType"]'
    static DATE_STARTDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_VIPAPPOINTMNTREGLIST = '//h2[text()="VIP Appointment Term Registration Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTNDRP_CARDS = '//button[text()="Cards"]//following-sibling::button'
}

export default elems_VipAppointmentTermRegistrationListing