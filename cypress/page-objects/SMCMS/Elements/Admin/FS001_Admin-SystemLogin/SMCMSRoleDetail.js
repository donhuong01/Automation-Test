class  elems_SMCMSRoleDetail {

    static TXT_ROLENAME = '//input[@id="lblRoleName"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_SEARCHFILTER = '//div[@role="dialog"]//button[text()="Search Filters"]'

    static Functions = {
        TXT_FUNCTIONNAME : '//input[@id="txtFunctionName"]',
        BTN_SEARCH : '//h3[text()="Functions"]/parent::div//button[text()="Search Filters"]',
        BTN_ADDFUNCTION : '//h3[text()="Functions"]/parent::div//button[text()="Add Function"]',
        BTN_REMOVEFUNCTION : '//h3[text()="Functions"]/parent::div//button[text()="Remove Function"]',
        TBL_FUNCTIONS : '//h3[text()="Functions"]/parent::div//table'
    }

    static Reports = {
        TXT_REPORTNAME : '//input[@id="txtReportName"]',
        BTN_SEARCH : '//h3[text()="Reports"]/parent::div//button[text()="Search Filters"]',
        BTN_ADDREPORT : '//h3[text()="Reports"]/parent::div//button[text()="Add Report"]',
        BTN_REMOVEREPORT : '//h3[text()="Reports"]/parent::div//button[text()="Remove Report"]',
        TBL_REPORTS : '//h3[text()="Reports"]/parent::div//table'
    }

}

export default elems_SMCMSRoleDetail