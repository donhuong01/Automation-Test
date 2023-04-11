class elems_AccommodationClosureDetail {

    static BTN_SUBMITFORAPPROVAL= '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT= '//button[text()="Save as Draft"]'
    static BTN_CANCEL= '//button[text()="Cancel"]'
    
    static PCK_ACCOMODATIONTYPE = '//label[@for="pckAccommodationType"]//following-sibling::div//button'
    static TXT_ACCOMMODATIONNAME = '//input[@id="txtAccommodationName"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'

    static TXTAERA_REASON = '//textarea[@id="txtareaReason"]'
    static CHK_PERMANENTTERMINATE = '//input[@id="chkPermanentTerminate"]'
    static DATE_PERMANENTCLOSURE = '//input[@id="dtpPermamnentClosureDate"]'
    
}
export default elems_AccommodationClosureDetail