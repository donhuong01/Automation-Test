class elems_MembershipChargeRateListing {

    static TXT_NAME = '//input[@id="txtName"]'
    static DRP_CARDTYPE = '//span[@id="txtCardType"]'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_MEMSHIPCHARGERATELIST = '//h2[text()="Membership Charge Rate Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
}

export default elems_MembershipChargeRateListing