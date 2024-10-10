class  elems_SMCMSUserDetail {

    static LBL_LOGINEMAIL = '//label[text()="Login Email"]/parent::div//label[@for="lblLoginEmail"]'
    static LBL_LASTLOGINDATE = '//label[text()="Last Login Date"]/parent::div//label[@for="lblLastLoginDate"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static LBL_CREATEDBY = '//label[text()="Created By"]/parent::div//label[@for="txtCreatedBy"]'
    static LBL_MODIFIEDBY = '//label[text()="Modified By"]/parent::div//label[@for="txtModifiedBy"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_ADDPOSITION = '//button[text()="Add Position"]'
    static BTN_REMOVEPOSITION = '//button[text()="Remove Position"]'
    static TBL_POSITION = '//colgroup[@role="presentation"]//following-sibling::tbody'
    static TXT_POSITION = '//input[@id="txtPositionName"]' 
    static BTN_SEARCH =  '//button[@form="frmPositionSection"]'
}

export default elems_SMCMSUserDetail