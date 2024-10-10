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

    static CHK_PERMANENTTERMINATION = '//input[@id="chkPermanentTerminate"]'
    static TXTAERA_REASON = '//textarea[@id="txtareaReason"]'
    static DATE_PERMANENTCLOSUREDATE = '//input[@id="dtpPermamnentClosureDate"]'

    static BTN_ADDCLOSUREPERIODS = '//h3[text()="Closure Periods"]//following-sibling::button[text()="Add"]'
    static DATE_STARTDATE = '//input[@id="dtpClosurePeriodStartDate"]'
    static DATE_ENDDATE = '//input[@id="dtpClosurePeriodEndDate"]'
    static TIME_STARTTIME = '//input[@id="dtpClosurePeriodStartTime"]'
    static TIME_ENDTIME = '//input[@id="dtpClosurePeriodEndTime"]'
    static BTN_ADDCLOSUREPERIOD = '//button[text()="Cancel"]//preceding-sibling::button[text()="Add"]'

    static BTN_CANCELCLOSUREPERIOD = '//button[text()="Add"]//following-sibling::button[text()="Cancel"]'

    static BTN_ADDRECURRINGDATE = '//h3[text()="Closure Periods"]//following-sibling::button[text()="Add Recurring Date"]'
    static DRP_RECURRINGTYPE = '//span[@id="drpRecurringType"]'
    static BTN_ADDRECURRINGTYPE = '//button[text()="Cancel"]//preceding-sibling::button[text()="Add"]'
    static TXT_RECUREVERY = '//input[@id="txtRecurEvery"]'
    static DATE_RECURSTARTSATE = '//input[@id="startDate"]'
    static TIME_RECURFROM = '//input[@id="pckStartTimeFrom"]'
    static TIME_RECURTO = '//input[@id="pckEndTimeTo"]'
    static RADIO_OCCURRENCES = '//label[text()="Occurrences"]//preceding-sibling::input'
    static TXT_ENDAFTEROCCURRENCES = '//input[@id="txtEndAfterOccurences"]'
    static RADIO_CERTAINTIME = '//label[text()="Certain  Time"]//preceding-sibling::input'
    static DATE_ENDAFTERCERTAIN = '//input[@id="dtpEndAfterCertainTime"]'

    static TBL_CLOSUREPERIODS = '//h3[text()="Closure Periods"]//following-sibling::div//table'


    static TXT_ACCOMODATION = '//input[@id="txtAccommodation"]'
    static TXT_ACCOMMODATIONNAME = '//input[@id="txtAccommodationName"]'    
    
}
export default elems_AccommodationClosureDetail