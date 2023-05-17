class IGMembershipTerminationListing {
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static DRP_TERMINATEDBY = '//span[@class="k-widget k-dropdown"]'
    static TXT_TERMINATIONDATE = '//input[@name="terminationDate"]'
}

export default IGMembershipTerminationListing