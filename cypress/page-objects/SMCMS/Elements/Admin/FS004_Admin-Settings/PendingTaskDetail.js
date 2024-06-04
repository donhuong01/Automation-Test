class  elems_PendingTaskDetail {

    static LBL_TASKID = '//label[text()="Task ID"]/parent::div//label[@for="lblTaskId"]'
    static LBL_TASKNAME = '//label[text()="Task Name"]/parent::div//label[@for="lblTaskName"]'
    static LBL_WFNAME = '//label[text()="Workflow Name"]/parent::div//label[@for="lblWorkflowName"]'
    static LBL_STARTDATE = '//label[text()="Start Date"]/parent::div//label[@for="lblStartDate"]'
    static LBL_DUEDATE = '//label[text()="Due Date"]/parent::div//label[@for="lblDueDate"]'
    static LNK_RELATEDITEM = '//a[text()="Related Item"]'
    static DRP_APPROVALOUTCOME = '//span[@id="drpApprovalOutcome"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//span[text()="Save"]'
    static BTN_SUBMIT = '//span[text()="Submit"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
}

export default elems_PendingTaskDetail 