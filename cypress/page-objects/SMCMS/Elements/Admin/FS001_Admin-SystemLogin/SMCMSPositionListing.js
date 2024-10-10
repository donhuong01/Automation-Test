class elems_SMCMSPositionListing {
    static BTN_CREATENEW = '//button[contains(text(), "Create New")]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static TXT_POSITION = '//input[@id="txtPosition"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_SMCMSPOSITIONLISTING = '//h2[text()="SMCMS Position Listing"]/ancestor::div//table'
    static BTN_CONFIRM_DELETE_YES = '//button[text()="Yes"]'
    static BTN_CONFIRM_DELETE_NO = '//button[text()="No"]'
    static BTN_CONFIRM_DELETE_CANCEL = '//span[@class="k-icon k-i-x"]'
    static DELETE_POPUP_TITLE = '//div[text()="Delete Confirmation"]'
    static DELETE_POPUP_CONTENT = '//div[@class="k-window-content k-dialog-content"]'

}
export default elems_SMCMSPositionListing