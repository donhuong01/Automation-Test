class elems_PendingTaskDelegation {
    static LBL_TASKID = '//label[text()="Task ID"]/parent::div//label[@for="lblTaskId"]'
    static LBL_TASKNAME = '//label[text()="Task Name"]/parent::div//label[@for="lblTaskName"]'
    static LBL_WORKFLOWNAME = '//label[text()="Workflow Name"]/parent::div//label[@for="lblWorkflowName"]'
    static LBL_STARTDATE = '//label[text()="Start Date"]/parent::div//label[@for="lblStartDate"]'
    static LBL_DUEDATE = '//label[text()="Due Date"]/parent::div//label[@for="lblDueDate"]'
    static PCK_DELEGATETO = '//label[@for="pckDelegateTo"]/parent::div//button[@class="k-button"]'
    static LNK_RELATEDITEM = '//a[text()="Related Item"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_PendingTaskDelegation