class elems_IGMemberDetail {

    static BTN_SAVE = '//button[@form="formIGMembershipDetail"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_VIEWTRANSACTIONHISTORY = '//button[text()="View Transaction History"]'
    static LBL_TESTID = '//label[@for="lblMembershipID"]'
    static LBL_MEMBERSTATUSREASON = '//label[@for="lblMembershipStatusReason"]'
    static LBL_IGMEMBERSHIPID = '//label[@for="lblMembershipID"]'
    static LBL_IGMAIN = '//label[@for="lblInterestGroupMain"]'
    static LBL_INTERESTGROUP = '//label[@for="lblInterestGroup"]'
    static LBL_CUSTOMERID = '//label[@for="lblCustomerID"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static LBL_INITIALJOINDATE = '//label[@for="lblInitialJoinDate"]'
    static LBL_EXPIRYDATE = '//label[@for="lblExpiryDate"]'
    static LBL_MEMBERSHIPSTATUS = '//label[@for="lblMembershipStatus"]'
    static LBL_MEMBERSHIPSTATUSREASON = '//label[@for="lblMembershipStatusReason"]'

    static MembershipTags = {
        TBL_MEMBERSHIPTAGS: '//h3[text()="Membership Tags"]/following-sibling::div//table',
        BTN_ADD: '//button[text()="Add"]',
        BTN_REMOVE: '//button[text()="Remove"]',
        TXT_ATTRIBUTENAME: '//input[@id="txtAttributeName"]',
        TBL_SELECTATTRIBUTENAME: '//form[@id="formMembershipTags"]/parent::div/parent::div//table',
        BTN_SEARCHFILTERS: '//form[@id="formMembershipTags"]//button[text()="Search Filters"]',
        BTN_SELECT: '//button[text()="Select"]',
        BTN_CANCEL: '//button[text()="Select"]//following-sibling::button'
    }


}

export default elems_IGMemberDetail
