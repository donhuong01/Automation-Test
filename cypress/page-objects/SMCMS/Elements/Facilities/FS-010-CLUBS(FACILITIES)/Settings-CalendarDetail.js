class elems_SettingsCalendarDetail{

    static TXT_CALENDARNAME = '//input[@id="txtCalendarName"]'
    static DATE_STARTDATE = '//input[@id="txtCalendarStartDate"]'
    static DATE_ENDDATE = '//input[@id="txtCalendarEndDate"]'
    static MSG_NOTIFICATION = '//div[@class="notification__message"]'

    static HolidayDatesTAB = {
        TAB_HOLIDAYDATES : '//button[text()="Holiday Dates"]',
        BTN_DELETE: '//h3[text()="Holiday Dates"]//parent::div//button[text()="Delete"]',
        BTN_ADDHOLIDAY: '//button[text()="Add Holiday"]',
        BTN_ADDHOLIDAYFROMSETTINGSTOCURRENTYEAR :'//button[text()="Add Holiday from Settings to Current Year"]',
        BTN_COPYSELECTEDHOLIDAYSTOCURRENTYEAR: '//button[text()="Copy Selected Holidays to Current Year"]',
        BTN_ADDHOLIDAYFROMSETTINGSTONEXTYEAR :'//button[text()="Add Holidays from Settings to Next Year"]',
        BTN_COPYSELECTEDHOLIDAYSTONEXTYEAR: '//button[text()="Copy Selected Holidays to Next Year"]',
        TXT_DESCRIPTION : '//input[@id="txtHolidayDescription"]',
        BTN_SEARCHFILTERS: '//h3[text()="Holiday Dates"]//parent::div//button[text()="Search Filters"]',
        TBL_HOLIDAYDATES: '//h3[text()="Holiday Dates"]//following-sibling::div//table'
    }
    static NewHolidayPopUp = {
        BTN_ADD: '//button[text()="Add"]',
        BTN_ADDANDNEW: '//button[text()="Add and New"]',
        BTN_Cancel: '//div[text()="New Holiday"]//following::div//button[text()="Cancel"]',
        TXT_NAME: '//input[@id="txtHoliday"]',
        DATE_DATE: '//input[@id="txtDate"]',
        TBL_HOLIDAYSETTINGLIST: '//form[@id="formFacilityCalendarHolidaysDialog"]//parent::div//following-sibling::div//table'

    }

    static PeriodsTAB = {
        TAB_Periods : '//button[text()="Periods"]',
        BTN_DELETE: '//h3[text()="Periods"]//parent::div//button[text()="Delete"]',
        BTN_ADDPERIOD: '//button[text()="Add Period"]',
        BTN_ADDPERIODFROMSETTINGSTOCURRENTYEAR :'//button[text()="Add Period from Settings to Current Year"]',
        BTN_COPYSELECTEDPERIODTOCURRENTYEAR: '//button[text()="Copy Selected Period to Current Year"]',
        BTN_ADDPERIODFROMSETTINGSTONEXTYEAR :'//button[text()="Add Period from Settings to Next Year"]',
        BTN_COPYSELECTEDPERIODTONEXTYEAR: '//button[text()="Copy Selected Period to Next Year"]',
        TXT_DESCRIPTION : '//input[@id="txtPeriodDescription"]',
        BTN_SEARCHFILTERS: '//h3[text()="Periods"]//parent::div//button[text()="Search Filters"]',
        TBL_PERIODS: '//h3[text()="Periods"]//following-sibling::div//table'

   
    }
    static PeriodPopUp={
        BTN_ADD: '//button[text()="Add"]',
        BTN_ADDANDNEW: '//button[text()="Add and New"]',
        BTN_Cancel: '//div[text()="New Period"]//following::div//button[text()="Cancel"]',
        TXT_NAME: '//input[@id="txtPeriod"]',
        DATE_STARTDATE: '//input[@id="txtStartDate"]',
        DATE_ENDDATE: '//input[@id="txtEndDate"]'

    }
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

}
export default elems_SettingsCalendarDetail