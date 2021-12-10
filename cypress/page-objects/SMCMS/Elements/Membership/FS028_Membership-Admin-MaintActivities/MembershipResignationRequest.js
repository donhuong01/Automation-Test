class elems_MembershipResignationRequest{
    static BTN_REQUEST = '//button[text()="Request"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_RESIGNATIONREQUESTID = '//label[@for="lblResignationRequestId"]'
    static DATE_REQUESTDATE ='//input[@id="dtpRequestedDate"]'
    static LBL_MEMBERID = '//label[@for="lblMemberId"]'
    static LBL_LAST4NRICICNO = '//label[@for="lblNRIC"]'
    static LBL_MEMBERNAME = '//label[@for="lblMemberName"]'
    static DRP_RESIGNTYPE = '//span[@id="drpResignType"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpFutureResignDate"]'
    static TEXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'

}
export default elems_MembershipResignationRequest