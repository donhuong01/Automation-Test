class  elems_CustomerCategoryDetail{
    static LBL_CUSTOMERCATEGORYNAME = '//label[@for="lblCustomerCategoryNumber"]'
    static TXT_NAME = '//input[@id="txtName"]'
    static PCK_BELONGSUNDER = '//label[@for="pckBelongsUnder"]//following-sibling::div//button'
    static PCK_CUSTOMERCATEGORYTYPE = '//label[@for="pckCustomerCategoryType"]//following-sibling::div//button'
    static TXT_D365ID = '//input[@id="txtD365ID"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TBL_SELECTCUSTOMERCAT = '//div[@role="dialog"]//table'
}
export default elems_CustomerCategoryDetail