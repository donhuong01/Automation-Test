class elems_AccommodationClosureDetail {

    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static PCK_ACCOMODATIONTYPE = '//label[text()="Accommodation Type"]//following-sibling::div//button'
    static TXT_ACCOMODATIONTYPE = '//input[@name="name"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'


    static BTN_ADD = '//h3[text()="Accommodations"]//following-sibling::button[text()="Add"]'
    static TXT_ACCOMODATIONTYPE = '//input[@id="txtAccommodationName"]'
    static BTN_REMOVE = '//h3[text()="Accommodations"]//following-sibling::button[text()="Remove"]'
    static TBL_ACCOMADATIONS = '//h3[text()="Accommodations"]//following-sibling::div//table'

    static TXTAERA_REASON = '//textarea[@id="txtareaReason"]'

    static BTN_ADDCLOSUREPERIODS = '//h3[text()="Closure Periods"]//following-sibling::button[text()="Add"]'
    static DATE_STARTDATE = '//input[@id="dtpClosurePeriodStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpClosurePeriodEndDate"]'
    static TIME_STARTTIME = '//input[@id="dtpClosurePeriodStartTime"]'
    static TIME_ENDTIME = '//input[@id="dtpClosurePeriodEndTime"]'
    static BTN_ADDCLOSUREPERIOD = '//button[text()="Cancel"]//preceding-sibling::button[text()="Add"]'
    static BTN_CANCELCLOSUREPERIOD = '//button[text()="Add"]//following-sibling::button[text()="Cancel"]'

    static BTN_ADDRECURRINGDATE = '//h3[text()="Closure Periods"]//following-sibling::button[text()="Add Recurring Date"]'
    
    static TBL_CLOSUREPERIODS = '//h3[text()="Closure Periods"]//following-sibling::div//table'


    static TXT_ACCOMODATION = '//input[@id="txtAccommodation"]'
    
    
}
export default elems_AccommodationClosureDetail