class  elems_OnlineAccountAccessDetail {

    static LBL_MEMBERSHIPTYPE = '//label[text()="Membership Type"]/parent::div//label[@for="lblMembershipType"]'
    static LBL_NAME = '//label[@for="lblName"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static Functions = {
        TXT_FUNCTIONNAME : '//input[@id="txtFunctionName"]',
        TBL_FUNCTIONS : '//h3[text()="Functions"]/parent::div//table',
        BTN_ADD_FUNCTION: '//button[@class="k-button link-button"]',
        BTN_REMOVE_FUNCTION: '//button[@class="k-button danger-button"]',
        BTN_SEARCH_FILTER:'//button[@class="k-button search-button"]' 
    }

    static AddFunctionPopUp = {
        LBL_FUNCTIONAME_TEXTFIELD : '//form[@id="formFunctionDialog"]//input[@name="functionName"]',
        BTN_SEARCH : '//form[@id="formFunctionDialog"]//button[@class="k-button search-button"]',
        TBL_SELECTFUNCTION : '//div[@role="dialog"]//table',
        BTN_SELECT: '//div[@role="dialog"]//button[text()="Select"]',
        BTN_CANCEL:'//div[@role="dialog"]//button[text()="Cancel"]',
        BTN_CLOSE: '//a[@aria-label="Close"]'
    }
}
export default elems_OnlineAccountAccessDetail