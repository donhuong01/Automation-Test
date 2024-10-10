class elems_AccommodationClosureListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'

    static PCK_ACCOMODATIONTYPENAME = '//label[text()="Accommodation Type Name"]//following-sibling::div//button'
    static TXT_ACCOMODATIONTYPE = '//input[@name="name"]'
    static TXT_ACCOMODATION = '//input[@id="txtAccommodation"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TBL_ACCOMADATIONCLOSURELISTING = '//h2[text()="Accommodation Closure Listing"]//ancestor::div//table'
    
}
export default elems_AccommodationClosureListing