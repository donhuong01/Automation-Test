class elems_NotificationMessageTemplateDetail {
    static TXT_TEMPLATENAME = '//input[@id="txtTemplateName"]'
    static LBL_TEMPLATECODE = '//label[text()="Template Code"]/parent::div//label[@for="lblTemplateCode"]'
    static TXTAREA_REMARK = '//textarea[@id="remarks"]'
    static TXT_SUBJECT = '//input[@id="txtSubject"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static RICHTXT_CONTENT = 'iframe'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]' 
    static BTN_CREATENEW = '//button[text()="Create New"]' 
}
export default elems_NotificationMessageTemplateDetail