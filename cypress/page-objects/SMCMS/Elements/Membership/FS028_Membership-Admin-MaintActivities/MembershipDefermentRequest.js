class elems_MembershipDefermentRequest {
    static BTN_REQUEST = '//button[text()="Request"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_DEFERMENTREQUESTID = '//label[@for="lblDefermentRequestId"]'
    static LBL_MEMBERID = '//label[@for="lblMemberId"]'
    static DATE_STARTMONTH = '//input[@id="dtpStartMonth"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DATE_REQUESTEDDATE ='//input[@id="dtpRequestedDate"]'
    static LBL_LAST4NRICICNO = '//label[@for="lblNRIC"]'
    static TXT_NOOFDEFERMENTPERIODSINMONTH = '//input[@id="numDefermentPeriod"]'
    static TEXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_MEMBERNAME = '//label[@for="lblMemberName"]'
    static LBL_ENDDATE= '//label[@for="lblEndDate"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'
    
    static ATTACHMENTS = {
        UPL_SELECTFILES : '//div[@id="uplAttachments"]//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    }

}
export default elems_MembershipDefermentRequest