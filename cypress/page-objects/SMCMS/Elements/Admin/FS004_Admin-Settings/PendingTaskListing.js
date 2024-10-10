class  elems_PendingTaskListing {

    static TXT_WORKFLOWNAME = '//input[@id="txtWorkflowname"]'
    static TXT_TASKID = '//input[@id="txtTaskId"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_PENDINGTASKLISTING = '//h2[text()="Pending Task Listing"]/ancestor::div//table'
    static BTN_DELEGATE = '//button[text()="Delegate"]'
}

export default elems_PendingTaskListing