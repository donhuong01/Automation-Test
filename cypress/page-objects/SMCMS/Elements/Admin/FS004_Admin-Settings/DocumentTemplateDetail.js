class elems_DocumentTemplateDetail {
    
    static LBL_TEMPLATENAME = '//label[text()="Template Name"]/parent::div//label[@for="lblTemplateName"]'
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