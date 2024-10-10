class elems_CodeTypeDetail{

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_NAME = '//input[@id="txtName"]'
    static PCK_BELONGSUNDER = '//label[@for="pckBelongsUnder"]/parent::div//button'
    static TXT_BELONGUNDER = '//div[@class="k-form-field-wrap"]//div//input'
    
    static SelectCodeType = {
            BTN_CANCEL : '//button[@class="k-button" and contains(.,"Cancel")]',
            BTN_SELECT : '//button[@class="k-button" and contains(.,"Select")]',
            CHK_ACCESSMODETYPE: '/*//td[contains(.,"AccessModeGroup")]//preceding-sibling::td',
            TBL_CODETYPE: '//table[@role="presentation"]',
            TXT_CODETYPE: '//input[@id="txtCodeType"]',
            BTN_SEARCHFILTER: '//button[@form="formFiltersCodeType"]'
    }
    
}
export default elems_CodeTypeDetail