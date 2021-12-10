class elems_UserActionsListing {

    static PCK_MEMBER = '//label[@for="pckMemberName"]/parent::div//button[@class="k-button"]'
    static DRP_AUDITLOGCATEGORY = '//span[@id="drpAuditLogCategory"]'
    static DRP_AUDITLOGSOURCE = '//span[@id="drpAuditLogSource"]'
    static DRP_ACTIONTYPE = '//span[@id="drpActionType"]'
    static DATE_FROM = '//input[@id="dtpFrom"]'
    static DATE_TO = '//input[@id="dtpTo"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_USERACTIONSLISTING = '//h2[text()="User Actions Listing"]/ancestor::div//table'
    static BTN_EXPORT = '//button[text()="Export"]'
}

export default elems_UserActionsListing