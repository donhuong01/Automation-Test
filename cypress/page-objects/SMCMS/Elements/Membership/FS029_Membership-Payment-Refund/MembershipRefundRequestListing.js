class elems_MembershipRefundRequestListing {

    static TXT_REFUNDREQID = '//input[@id="txtRefundRequestId"]'
    static PCK_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static DATE_REQUESTEDDATE_FROM = '//input[@id="dtpRequestedDateFrom"]'
    static DATE_REQUESTEDDATE_TO = '//input[@id="dtpRequestedDateTo"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_MEMSHIPREFUNDREQLIST = '//h2[text()="Membership Refund Request Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_APPROVE = '//button[text()="Approve"]'
    static BTN_REJECT = '//button[text()="Reject"]'
}

export default elems_MembershipRefundRequestListing