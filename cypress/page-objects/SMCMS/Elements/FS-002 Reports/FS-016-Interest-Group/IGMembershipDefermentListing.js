class elems_IGMembershipDefermentListing {
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static TXT_REGISTRATIONDATEFROM = '//input[@id="dtRegistrationDateFrom"]'
    static TXT_REGISTRATIONDATETO = '//input[@id="dtRegistrationDateTo"]'
    static LBL_PAGETITLE = '//h2'
}

export default elems_IGMembershipDefermentListing