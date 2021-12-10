class elems_SMCMSUserListing  {

    static BTN_ENABLE = '//button[text()="Enable"]'
    static BTN_DISABLE = '//button[text()="Disable"]'
    static TXT_LOGINEMAIL = '//input[@id="txtLoginEmail"]'
    static DRP_POSITION = '//span[@id="drpPosition"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_SMCMSUSERLISTING = '//h2[text()="SMCMS User Listing"]/ancestor::div//table'

}
export default elems_SMCMSUserListing