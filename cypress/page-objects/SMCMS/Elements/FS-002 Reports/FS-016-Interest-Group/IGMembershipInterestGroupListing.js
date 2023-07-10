class elems_IGMembershipInterestGroupListing {
    // static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static PCK_CUSTOM_CATEGORY = '//label[text()="Customer Category"]//following-sibling::div//button'
    static DRP_BUSINESS_TYPE = '//span[@id="businessType"]'
    static DRP_STATUS = '//span[@id="status"]'
    static TXT_PUBLISHINGDATE = '//input[@id="publishingDate"]'
    static TXT_ENDDATE = '//input[@id="endDate"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static TXT_NAME = '//input[@name="name"]'
    static LBL_PAGETITLE = '//h2'
}

export default elems_IGMembershipInterestGroupListing