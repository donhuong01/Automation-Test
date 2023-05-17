class elems_IGMembershipRegistrationListing {
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static TXT_REGISTERDATEFROM = '//input[@id="dtRegistrationDateFrom"]'
    static TXT_REGISTERDATEFROM = '//input[@id="dtRegistrationDateTo"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static TXT_NAME = '//input[@name="name"]'
}

export default elems_IGMembershipRegistrationListing