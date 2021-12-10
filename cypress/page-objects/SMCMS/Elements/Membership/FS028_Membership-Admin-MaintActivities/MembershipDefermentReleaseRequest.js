class elems_MembershipDefermentReleaseRequest { 

    static LBL_DEFERMNTRELEASEREQID = '//label[text()="Deferment Release Request ID"]/parent::div//label[@for="lblDefermentReleaseRequestId"]'
    static LBL_DEFERMENTREQID = '//label[text()="Deferment Request ID"]/parent::div//label[@for="lblDefermentRequestId"]'
    static LBL_REQUESTEDDATE = '//label[text()="Requested Date"]/parent::div//label[@for="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]'
    static LBL_LAST4NRIC_ICNO = '//label[text()="Last 4 NRIC/IC No"]/parent::div//label[@for="lblNRIC"]'
    static LBL_MEMBERNAME = '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]'
    static LBL_STARTDATE = '//label[text()="Start Date"]/parent::div//label[@for="lblStartDate"]'
    static LBL_EARLYRELEASEENDDATE = '//label[text()="Early Release End Date"]/parent::div//label[@for="lblEarlyReleaseEndDate"]'
    static LBL_ENDDATE = '//label[text()="End date"]/parent::div//label[@for="lblEndDate"]'
    static TXT_EARLYRELEASENOOFDEFRMENTPERDS = '//input[@id="txtEarlyReleaseDefermentPeriod"]'
    static LBL_NOOFDEFERMNTPERDS = '//label[text()="No. of Deferment Periods(in month) "]/parent::div//label[@for="lblDefermentPeriod"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static Attachments = {
        UPL_ATTACHMENTS : '//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    }

    static BTN_REQUEST = '//button[text()="Request"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MembershipDefermentReleaseRequest