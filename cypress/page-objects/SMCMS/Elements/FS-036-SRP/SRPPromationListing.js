class elems_SRPPromationListing {


    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'

    static TXT_TITLE = '//input[@id="name"]'
    static DRP_PROMOTYPE = '//span[@id="drpPromoType"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_SRPPROMATIONLISTING = '//h2[text()="SRP Promotion Listing"]/parent::div/following-sibling::div//table'

}
export default elems_SRPPromationListing