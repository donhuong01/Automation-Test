class  elems_BatchJobServicesDetail {

    static TXT_JOBNAME = '//input[@id="txtJobName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static LBL_LASTRUNTIME = '//label[text()="Last Run Time"]/parent::div//label[@for="lblLastRunTime"]'
    static TXT_SCHEDULE = '//input[@id="txtSchedule"]'
    static LBL_LASTRUNSTATUS = '//label[text()="Last Run Status"]/parent::div//label[@for="lblLastRunStatus"]'
    static TXAREA_REMARKS = '//textarea[@id="areaRemarks"]'
    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_BatchJobServicesDetail