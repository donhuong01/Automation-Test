
class elems_AccommodationTypeListingReports{
    static PCK_ACCOMODATIONTYPENAME = '//label[text()="Accommodation Type Name"]//following-sibling::div//button'
    static PCK_LIFESTYLEGROUP = '//label[text()="Life Style Group"]//following-sibling::div//button'
    static PCK_FABSGROUP = '//label[text()="FABS Group"]//following-sibling::div//button'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TXT_ACCOMMODATIONTYPE = '//input[@name="name"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TXT_CODESETNAME = '//input[@id="txtCodeName"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'

}

export default elems_AccommodationTypeListingReports