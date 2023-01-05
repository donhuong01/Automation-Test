class  elems_CustomerCategoryTypeListing {

    static TXT_CUSTOMERCATEGORYTYPE = '//input[@id="txtCustomerCategoryType"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_CUSTOMERCATEGORYTYPE = '//span[text()="Customer Category Type Name"]//ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static MSG_SUCCESSDELETEMSG = '//div[@class="notification__content"]'

    static DELETE_POPUP = {

        BTN_CANCEL : '//button[text()="Cancel"]',
        BTN_DELETE : '//button[text()="Delete"]',
        BTN_CLOSE : '//span[@class="k-icon k-i-x"]'

    }
}

export default elems_CustomerCategoryTypeListing