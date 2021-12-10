class elems_OutOfOfficeSetting {
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_STAFFNAME = '//label[@for="lblStaffName"]'
    static DATE_STARTDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'
    static CHK_WORKFLOWSPECIFICCOVERINGSTAFF = '//input[@id="checkWorkflowSpecificCoveringStaff"]'
    static BTN_COVERINGSTAFF = '//label[@for="pckCoveringStaff"]/parent::div//button'
    static DRP_WORKFLOW = '//span[@id="drpWorkflow"]'
    static BTN_ADDCOVERINGSTAFF = '//button[text()="Add Covering Staff"]'
    static TBL_OUTOFOFFICESETTING = '//h2[text()="Out Of Office Setting"]/ancestor::div//table'
    
}
export default elems_OutOfOfficeSetting