class elems_MemberTransactionMerging {

    static SourceMemberNonMember = {
        LBL_MEMBERID : '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]',
        LBL_LAST4NRIC_ICNO : '//label[text()="Last 4 NRIC/IC No."]/parent::div//label[@for="lblNRIC"]',
        LBL_NAME : '//label[text()="Name"]/parent::div//label[@for="lblName"]'
    }

    static DestinationMemberNonMember = {
        PCK_MEMBERID : '//label[@for="pckMemberId"]/parent::div//button',
        LBL_LAST4NRIC_ICNO : '//label[text()="Last 4 NRIC/IC No."]/parent::div//label[@for="lblNRIC2"]',
        LBL_NAME : '//label[text()="Name"]/parent::div//label[@for="lblName2"]'
    }

    static MergingInformation = {
        DRP_REASONID : '//span[@id="drpReasonId"]',
        TXTAREA_REMARK : '//textarea[@id="areaRemark"]'
    }

    static BTN_MERGE = '//button[text()="Merge"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MemberTransactionMerging