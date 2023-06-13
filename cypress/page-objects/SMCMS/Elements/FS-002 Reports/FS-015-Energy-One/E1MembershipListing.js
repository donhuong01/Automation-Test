//Listing Address, Listing, Listing Email

class E1MembershipListingReport {
    static PCK_ENERGYONEMAIN = '//label[text()="Energy One Main"]//following-sibling::div//button'
    static PCK_ENERGYONE = '//label[text()="Energy One"]//following-sibling::div//button'
    static TXT_INITIAL_JOIN = '//label[text()="Initial Join Date"]//following-sibling::div//input'
    static TXT_EXPIRY_DATE_FROM = '//label[text()="Expiration Date From"]//following-sibling::div//input'
    static TXT_EXPIRY_DATE_TO = '//label[text()="Expiration Date To"]//following-sibling::div//input'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'
}

export default E1MembershipListingReport