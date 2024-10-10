// E1 Member Listing Mobile Report, E1 Member Registration Mobile

class elems_E1MembershipListingRegistrationMobileReport {
    static PCK_ENERGYONEMAIN = '//label[text()="Energy One Main"]//following-sibling::div//button'
    static PCK_ENERGYONE = '//label[text()="Energy One"]//following-sibling::div//button'
    static TXT_REGISTRATIONDATEFROM = '//input[@id="dtEnergyOneDateFrom"]'
    static TXT_REGISTRATIONDATETO = '//input[@id="dtEnergyOneDateTo"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'
}

export default elems_E1MembershipListingRegistrationMobileReport