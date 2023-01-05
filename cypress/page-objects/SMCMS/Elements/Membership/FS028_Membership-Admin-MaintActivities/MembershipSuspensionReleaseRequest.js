class elems_MembershipSuspensionReleaseRequest {

    static LBL_SUSPENSNRELEASEREQID = '//label[text()="Suspension Release Request ID"]/parent::div//label[@for="lblSuspensionReleaseRequestId"]'
    static LBL_SUSPENSIONREQID = '//label[text()="Suspension Request ID"]/parent::div//label[@for="lblSuspensionRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/following-sibling::div//label'
    static LBL_LAST4NRIC_ICNO = '//label[text()="Last 4 NRIC/IC No"]/parent::div//label[@for="lblNRIC"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static LBL_STARTDATE = '//label[text()="Start Date"]/parent::div//label[@for="lblStartDate"]'
    static DATE_EARLYRELEASEDDATE = '//input[@id="dtpEarlyReleaseDate"]'
    static LBL_ENDDATE = '//label[text()="End Date"]/parent::div//label[@for="lblEndDate"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static MSG_FILEUPLOADS = '/*//span[@class="k-file-validation-message k-text-success"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static Attachments = {
        UPL_ATTACHMENTS : '//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    }

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MembershipSuspensionReleaseRequest