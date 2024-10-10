class elems_BatchMembershipWaiverRequest { 

    static LBL_WAIVERREQUESTID = '//label[text()="Waiver Request ID"]/parent::div//label[@for="lblWaiverRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static DATE_STARTDATE = '//input[@id="dtpStartDate"]'
    static NUM_WAIVERPERIODS = '//input[@id="numWaiverPeriod"]'
    static LBL_ENDDATE = '//label[text()="End Date"]/parent::div//label[@for="lblEndDate"]'
    static DRP_REASONCODE = '//span[@id="drpReasonCode"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static MemberListing = {
        TBL_MEMBERLISTING : '//h3[@class="card-title"]//following-sibling::div'
    }

    static BTN_REQUEST = '//button[text()="Request"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_BatchMembershipWaiverRequest