class elems_DocumentTemplateDetail {
    
    static TXT_TEMPLATENAME = '//input[@id="lblTemplateName"]'
    static LBL_TEMPLATECODE = '//label[text()="Template Code"]/parent::div//label[@for="lblTemplateCode"]'
    static TXT_TEMPLATECODE = '//input[@id="lblTemplateCode"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TemplateDocument = {
        UPL_TEMPLATEDOCUMENT : '//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    } 
    
    static TXTAREA_REMARK = '//textarea[@id="remark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_DocumentTemplateDetail