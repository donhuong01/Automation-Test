class elems_SRPPromationListing {


    static BTN_CREATENEW = '//span[text()="Create New"]'
    static BTN_DELETE = '//span[text()="Delete"]'

    static TXT_TITLE = '//input[@id="name"]'
    static DRP_PROMOTYPE = '//span[@id="drpPromoType"]'
    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static TBL_SRPPROMATIONLISTING = '//h2[text()="SRP Promotion Listing"]/parent::div/following-sibling::div//table'

}
export default elems_SRPPromationListing