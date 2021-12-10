class elems_CodeSetMasterDetail{

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_NAME = '//input[@id = "txtName"]'
    static TXT_ABBREVIATIONCODE = '//input[@id = "txtAbbreviationCode"]'
    static PCK_BELONGSUNDER = '//label[@for="drpBelongsUnder"]/parent::div//button'
    static PCK_CODETYPE = '//label[@for="pckCodeType"]/parent::div//button'
    static DATE_EFFECTIVESTARTDATE = '//input[@id = "dtpEffectiveStartDate"]'
    static DATE_EFFECTIVEENDDATE = '//input[@id = "dtpEeffectiveEndDate"]'
   
}
export default elems_CodeSetMasterDetail