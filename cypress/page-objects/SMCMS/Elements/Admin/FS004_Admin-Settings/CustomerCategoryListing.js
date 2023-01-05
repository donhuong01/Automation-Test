class  elems_CustomerCategoryListing {

    static TXT_CUSTOMERCATEGORYNAME = '//input[@id="txtCustomerCategoryName"]'
    static TXT_CUSTOMERCATEGORYNUMBER = '//input[@id="txtCustomerCategoryNumber"]'
    static TXT_CUSTOMERCATEGORYTYPE = '//input[@id="txtCustomerCategoryType"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static TBL_CUSTOMERCATEGORYLISTING = '//table[@role="presentation"]'
    static MSG_SUCCESSDELETEMSG = '//div[@class="notification__content"]'
}

export default elems_CustomerCategoryListing