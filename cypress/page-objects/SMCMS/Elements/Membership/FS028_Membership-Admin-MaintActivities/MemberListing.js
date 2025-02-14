class elems_MemberListing {

    static TXT_NAME = '//input[@id="txtName"]'
    static PCK_MEMBERID = '//label[@for="txtMemberId"]/parent::div//button'
    static TXT_NRIC = '//input[@id="txtNRIC"]'
    static DRP_MEMBERCATEGORY = '//span[@id="drpMemberCategory"]'
    static DRP_DEPENDENTTYPE = '//span[@id="drpDependent"]'
    static TXT_PRINCIPALMEMBERID = '//input[@id="txtPrincipal"]'
    static PCK_MEMBERTYPE = '//label[@for="pckMemberType"]/parent::div//button'
    static DRP_CARDTYPE = '//span[@id="drpCardType"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DRP_SFSSTATUS = '//span[@id="drpSFSStatus"]'
    static DRP_STATUSREASONCODE = '//span[@id="drpStatusReasonCode"]'
    static DRP_MEMBER_NONMEMBER = '//span[@id="drpMemberNonMember"]'
    static DRP_SUBCLUBTYPE = '//span[@id="drpSubClub"]'
    static DATE_EXPIRYDATE_FROM = '//input[@id="dtpExpiryDateFrom"]'
    static DATE_EXPIRYDATE_TO = '//input[@id="dtpExpiryDateTo"]'
    static BTNDRP_MEMBERSHIP = '//button[text()="Membership"]/parent::div//button[@class="k-button k-button-icon"]'
    static BTNDRP_MAINTENANCE = '//button[text()="Maintenance"]/parent::div//button[@class="k-button k-button-icon"]'
    static BTNDRP_PAYMENT = '//button[text()="Payment"]/parent::div//button[@class="k-button k-button-icon"]'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_MEMBERLISTING = '//h2[text()="Member Listing"]/ancestor::div//table'
} 

export default elems_MemberListing