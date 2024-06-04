class elems_MembershipChargeRateListing {

    static TXT_NAME = '//input[@id="txtName"]'
    static DRP_CARDTYPE = '//span[@id="txtCardType"]'
    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static TBL_MEMSHIPCHARGERATELIST = '//h2[text()="Membership Charge Rate Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//span[text()="Create New"]'
    static BTN_DELETE = '//span[text()="Delete"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
}

export default elems_MembershipChargeRateListing