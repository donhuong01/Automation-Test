class elems_MembershipSuspensionRequest { 

    static LBL_SUSPENSIONREQID = '//label[text()="Suspension Request ID"]/parent::div//label[@for="lblSuspensionRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_LAST4NRIC_ICNO = '//label[text()="Last 4 NRIC/IC No"]/parent::div//label[@for="lblNRIC"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static DATE_STARTDATE = '//input[@id="dtpStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpEndDate"]'
    static DATE_EARLYRELEASEDATE = '//input[@id="dtpEarlyReleaseDate"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static Attachments = {
        UPL_ATTACHMENTS : '//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    }

    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
}

export default elems_MembershipSuspensionRequest