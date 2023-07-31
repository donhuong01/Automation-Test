class elems_MembershipMasters {
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'

    //Documentary Proof Verified
    static DRP_DOCUMENT = '//span[@id="drpProofValidated"]'
    static VAL_STARTDATE = '//input[@id="dtStartDate"]'
    static VAL_ENDDATE = '//input[@id="dtEndDate"]'

    //VIP Appointment
    static EXPIRY_FROM = '//input[@id="dtExpiryFromDate"]'
    static EXPIRY_TO = '//input[@id="dtExpiryToDate"]'

    //Customer Marketing Profile
    static DRP_CONSENT = '//span[@id="consent"]'
    static DRP_MEMBERSHIP = '//span[@id="membership"]'
    static DRP_CONTACT_MODE = '//span[@id="contactMode"]'
    static DRP_MEMBER_STATUS = '//span[@id="memberStatus"]'
    static DRP_EMAIL = '//span[@id="allOrWithEmail"]'

}

export default elems_MembershipMasters