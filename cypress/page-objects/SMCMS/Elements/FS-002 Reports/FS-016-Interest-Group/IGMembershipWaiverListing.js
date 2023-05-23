class elems_IGMembershipWaiveristing {
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static TXT_MEMBERSHIPTERMSTART = '//input[@id="membershipTermStartDate"]'
    static TXT_MEMBERSHIPTERMEND = '//input[@id="membershipTermEndDate"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static TXT_NAME = '//input[@name="name"]'
    static LBL_PAGETITLE = '//h2'
}

export default elems_IGMembershipWaiveristing