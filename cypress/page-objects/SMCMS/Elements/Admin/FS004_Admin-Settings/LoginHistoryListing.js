class elems_LoginHistoryListing {

    static TXT_LOGINNAME = '//input[@id="txtLoginName"]'
    static DRP_SOURCE = '//span[@id="drpSource"]'
    static DATE_DATEFROM = '//input[@id="dteFrom"]'
    static DATE_DATETO = '//input[@id="dteTo"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_LOGINHISTORYLISTING = '//h2[text()="Login History Listing"]/ancestor::div//table'
    static BTN_EXPORT = '//button[text()="Export"]'
}

export default elems_LoginHistoryListing