class  elems_SMCMSRoleDetail {

    static TXT_ROLENAME = '//input[@id="lblRoleName"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()=" Save"]'
    static BTN_CANCEL = '//button[text()=" Cancel"]'

    static Functions = {
        TXT_FUNCTIONNAME : '//input[@id="txtFunctionName"]',
        BTN_SEARCHFILTERS : '//h3[text()="Functions"]/parent::div//button[text()="Search Filters"]',
        TBL_FUNCTIONS : '//h3[text()="Functions"]/parent::div//table'
    }

    static Reports = {
        TXT_REPORTNAME : '//input[@id="txtReportName"]',
        BTN_SEARCHFILTERS : '//h3[text()="Reports"]/parent::div//button[text()="Search Filters"]',
        TBL_REPORTS : '//h3[text()="Reports"]/parent::div//table[@class="k-grid-table" and @role="presentation"]'
    }

}

export default elems_SMCMSRoleDetail