class elems_AccommodationClosureListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static PCK_ACCOMODATIONTYPENAME = '//label[@for="txtName"]//following-sibling::div//button'
    static TXT_ACCOMMODATION = '//input[@id="txtAccommodation"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TBL_TBLACCOMADATIONCLOSURELISTING = '//h2[text()="Accommodation Closure Listing"]//ancestor::div//table'
    
}
export default elems_AccommodationClosureListing