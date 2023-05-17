class IGMembershipListing {
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static TXT_INITIAL_JOIN = '//label[text()="Initial Join Date"]//following-sibling::div//input'
    static TXT_EXPIRY_DATE = '//label[text()="Expiry Date Greater Than"]//following-sibling::div//input'
}

export default IGMembershipListing