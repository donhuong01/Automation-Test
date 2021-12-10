class  elems_ApprovalWorkflowDetail {

    static LBL_WORKFLOWNAME = '//label[text()="Workflow Name"]/parent::div//label[@for="lblWorkflowName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_ADDAPPROVALLEVEL = '//button[text()="Add Approval Level"]'

    static ApprovalLevel1 = {
        DRP_ASSIGNMENTTYPE = '//span[@id="drpAssignmentType"]',
        NUM_TASKDURATION = '//input[@id="txtTaskDuration"]',
        TXT_REQUESTERS = '//input[@id="txtRequesters"]',
        TXT_APPROVERS = '//input[@id="txtApprovers"]',
        BTN_ADDAPPROVER = '//button[text()="Add Approver"]',
        TBL_APPROVALLEVEL1 = '//u[text()="Approval Level 1"]/ancestor::div//table',
        TXTAREA_REMARKS = '//textarea[@id="remark"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_ApprovalWorkflowDetail