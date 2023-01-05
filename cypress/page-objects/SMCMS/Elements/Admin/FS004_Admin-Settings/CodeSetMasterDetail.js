class elems_CodeSetMasterDetail{

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_NAME = '//input[@id = "txtCodeSet"]'
    static TXT_ABBREVIATIONCODE = '//input[@id = "txtAbbreviationCode"]'
    static PCK_BELONGSUNDER = '//label[@for="pckBelongsUnder"]/parent::div//button'
    static SelectCodePOPUP = {
        BTN_CANCEL : '//button[@class="k-button" and contains(.,"Cancel")]',
        BTN_SELECT : '//button[@class="k-button" and contains(.,"Select")]',
        CHK_ACCESSMODETYPE: '/*//td[contains(.,"AccessModeGroup")]//preceding-sibling::td',
        TBL_CODETYPE: '//table[@role="presentation"]'
}
    static PCK_CODETYPE = '//label[@for="pckCodeType"]/parent::div//button'
    static DATE_EFFECTIVESTARTDATE = '//input[@id = "dtpEffectiveStartDate"]'
    static DATE_EFFECTIVEENDDATE = '//input[@id = "dtpEeffectiveEndDate"]'


   
}
export default elems_CodeSetMasterDetail