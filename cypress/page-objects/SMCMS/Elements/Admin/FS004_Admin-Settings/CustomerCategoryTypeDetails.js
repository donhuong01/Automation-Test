class  elems_CustomerCategoryTypeDetails {

    static TXT_NAME = '//input[@id="txtName1"]'
    static PCK_BELONGSUNDER = '//input//following-sibling::button'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    // static MSG_SUCCESSDELETEMSG = '//div[@class="notification__content"]' = for future reference
    static TBL_SELECT_CUSTOMER_CAT_TYPE = '//table[@role="presentation"]'
    static selectCustomerCategoryType = {

         BTN_SAVE : '//button[text()="Save"]',
         BTN_CANCEL : '//button[text()="Cancel"]'
    }
}

export default elems_CustomerCategoryTypeDetails
