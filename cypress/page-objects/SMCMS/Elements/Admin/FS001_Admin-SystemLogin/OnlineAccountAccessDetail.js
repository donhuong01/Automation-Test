class  elems_OnlineAccountAccessDetail {

    static LBL_MEMBERSHIPTYPE = '//label[text()="Membership Type"]/parent::div//label[@for="lblMembershipType"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
    static Functions = {
        TXT_FUNCTIONNAME = '//input[@id="txtFunctionName"]',
        TBL_FUNCTIONS = '//h3[text()="Functions"]/parent::div//table'
    }
}
export default elems_OnlineAccountAccessDetail