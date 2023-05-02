class elems_PromotionListing {
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static BTN_DELETEPOPUPYES = '//button[text()="Yes"]'
    static BTN_DELETEPOPUPNO = '//button[text()="No"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_TERMINATE = '//button[text()="Terminate"]'
    static BTN_VIEWUTILIZATIONTRANSACTION = '//button[text()="View utilization Transaction"]'
    static TXT_PROMOTIONNAME = '//input[@id="txtPromotionName"]'
    static DRP_BASICTYPE = '//span[@id="drpBasicType"]'
    static TXT_PROMOCODE = '//input[@id="txtPromoCode"]'
    static DRP_PROMOTIONTYPE = '//span[@id="drpPromotionType"]'
    static DATE_VALIDITYTESTART = '//input[@id="dtpValidityStartDate"]'
    static DATE_VALIDITYEXPIRY = '//input[@id="dtpValidityExpiryDate"]'
    static TXT_MINIMUMAGE = '//input[@id="txtMinAge"]'
    static TXT_MAXIMUMAGE = '//input[@id="txtMaxAge"]'
    static PCK_APPLICABLECUSTOMERCATEGORY = '//label[@for="pckApplicableCustomerCategories"]//following-sibling::div//button'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DRP_WORKFLOW = '//span[@id="drpWorkflowStatus"]'
    static TBL_PROMOTIONLISTING = '//h2[text()="Promotion Listing"]/parent::div/following-sibling::div//table'

}
export default elems_PromotionListing