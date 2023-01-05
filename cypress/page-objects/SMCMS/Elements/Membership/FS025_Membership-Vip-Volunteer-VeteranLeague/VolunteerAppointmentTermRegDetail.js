class elems_VolunteerAppointmentTermRegistrationDetail {

    static PCK_MEMBERID = '//label[@for="pckMemberId"]//following-sibling::div//button'
    static SELECTMEMBERID = {
        TXT_MEMBERID: '//input[@name="memberId"]',
        TXT_NAME : '//input[@name="nameOnNRIC"]'
    }
    static TXT_LAST4NRIC_ICNO = '//input[@id="txtNRIC"]'
    static LBL_LAST4NRIC_ICNO = '//label[@for="lblNric"]'
    static TXT_MEMBERNAME = '//input[@id="txtMemberName"]'
    static LBL_MEMBERNAME = '//label[@for="lblMemberName"]'
    static DRP_APPOINTMENTTYPEID = '//span[@id="drpAppointmentTypeId"]'
    static DATE_STARTDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'


    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_VolunteerAppointmentTermRegistrationDetail