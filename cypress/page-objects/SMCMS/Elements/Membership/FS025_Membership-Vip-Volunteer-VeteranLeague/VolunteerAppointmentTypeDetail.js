class elems_VolunteerAppointmentTypeDetail {

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_APPOINTMENTID = '//input[@id="txtAppointmentId"]'
    static DRP_APPOINTMENTCODE = '//span[@id="drpAppointmentType"]'
    static DRP_COMMITTEECODE = '//span[@id="drpCommitteeCode"]'
    static TXT_POINT = '//input[@id="txtPoint"]'
    static PCK_CLUBHOUSE = '//label[@for="pckClubHouseStore"]//following-sibling::div//div//button[@type="button"]'

    static SELECTSOURCECHANNEL = {

        TXT_NAME: '//input[@name="name"]',
        TXT_GROUP: '//input[@name="group"]',
        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',

    }
}

export default elems_VolunteerAppointmentTypeDetail