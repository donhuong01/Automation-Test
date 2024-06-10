class elems_Picker {

    static TXT_ITEM = '//div[@role="dialog"]//label/parent::div//input'
    static BTN_SEARCH = '//span[text()="Search Filters"]'
    static BTN_SEARCHFILTERS = '//form[@id="formUserDialog"]//button[@class="k-button search-button"]'
    static TBL_PICKERITEMS = '//div[@role="dialog"]//table'
    static BTN_SELECT = '//div[@role="dialog"]//button[text()="Select"]'
    static BTN_CANCEL = '//div[@role="dialog"]//span[text()="Cancel"]'
    static TXT_LOGINEMAIL = '//input[@id="txtLoginName"]'
    static TXT_NAME = '//input[@name="userPicker_fullName"]'
    static BTN_FILTERS = '//div[text()="Select Location"]/parent::*/following-sibling::div[@class="k-window-content k-dialog-content"]//button'
    static MSG_NOTIFICATION = '//div[@class="rnc__notification-message"]'
}

export default elems_Picker