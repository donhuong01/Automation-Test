class elems_E1GymMembershipConversion {

    static BTN_CONVERT = '//button[text()="Convert"]'
    static BTN_CANCEL = '//button[text()="Convert"]/following-sibling::button[text()="Cancel"]'
    static DATE_CONVERSIONDATE = '//input[@id="dtpConversionDate"]'
    static LBL_CONVERSIONID = '//label[@for="conversionID"]'
    static LBL_SAFRAMEMBERID = '//label[@for="pckSAFRAMemberId"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static LBL_SAFRAMEMBERSTATUS = '//label[@for="lblSAFRAMembershipStatus"]'
    static LBL_SAFRAMEMEXPIRYDATE = '//label[@for="lblSAFRAMembershipExpiryDate"]'
    static LBL_E1GYMMEMID = '//label[@for="lblE1GymMembershipID"]'
    static LBL_E1GYMMEMBERSHIP = '//label[@for="lble1Gym"]'
    static LBL_E1GYMTERMSTART = '//label[@for="lblE1GymTermStart"]'
    static LBL_E1GYMTERMEND = '//label[@for="lblE1GymTermEnd"]'
    static DRP_MEMBERCATEGORY = '//span[@id="pckMemberCategory"]'
    static TXT_CONVERSIONREASON = '//textarea[@id="txtConversionReason"]'

}

export default elems_E1GymMembershipConversion