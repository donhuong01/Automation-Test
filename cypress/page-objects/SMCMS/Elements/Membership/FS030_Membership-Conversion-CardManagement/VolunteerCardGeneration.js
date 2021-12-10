class elems_VolunteerCardGeneration {

    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_NRIC_ICNO = '//label[text()="NRIC/IC No"]/parent::div//label[@for="lblLastFourNRIC"]'
    static LBL_NAME = '//label[text()="Name"]/parent::div//label[@for="lblName"]'
    static LBL_APPOINTMENTTYPEID = '//label[text()="Appointment Type ID"]/parent::div//label[@for="lblAppointmentTypeId"]'
    static LBL_APPOINTMENTCODE = '//label[text()="Appointment Code"]/parent::div//label[@for="lblAppointmentCode"]'
    static LBL_COMMITTEECODE = '//label[text()="Committee Code"]/parent::div//label[@for="lblCommitteeCode"]'
    static LBL_EFFECTIVEDATE = '//label[text()="Effective Date"]/parent::div//label[@for="lblEffectiveDate"]'
    static LBL_EXPIRYDATE = '//label[text()="Expiry Date"]/parent::div//label[@for="lblExpiryDate"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_VolunteerCardGeneration