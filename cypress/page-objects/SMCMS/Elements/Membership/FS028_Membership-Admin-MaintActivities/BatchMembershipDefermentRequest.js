class elems_BatchMembershipDefermentRequest { 

    static LBL_BATCHDEFERMNTREQID = '//label[text()="Batch Deferment Request ID"]/parent::div//label[@for="lblDefermentRequestId"]'
    static DATE_REQUESTEDDATE = '//input[@id="dtpRequestedDate"]'
    static DATE_STARTMONTH = '//input[@id="dtpStartDate"]'
    static NUM_NOOFDEFERMNTPERDS = '//input[@id="numDefermentPeriod"]'
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

export default elems_BatchMembershipDefermentRequest