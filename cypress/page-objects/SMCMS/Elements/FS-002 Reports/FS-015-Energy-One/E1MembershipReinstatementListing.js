class elems_E1MembershipReinstatementListingReport {

    static PCK_ENERGYONEMAIN = '//label[text()="Energy One Main"]//following-sibling::div//button'
    static PCK_ENERGYONE = '//label[text()="Energy One"]//following-sibling::div//button'
    static TXT_REINSTATEMENTFROMMONTH = '//input[@id="dtDefermentDateFrom"]'
    static TXT_REINSTATEMENTTOMONTH = '//input[@id="dtDefermentDateTo"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'
}   

export default elems_E1MembershipReinstatementListingReport