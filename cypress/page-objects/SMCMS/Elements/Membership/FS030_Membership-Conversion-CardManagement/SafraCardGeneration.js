class elems_SafraCardGeneration {

    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_NRIC_ICNO = '//label[text()="NRIC/IC No"]/parent::div//label[@for="lblNRIC"]'
    static LBL_NAME = '//label[text()="Name"]/parent::div//label[@for="lblName"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_SafraCardGeneration