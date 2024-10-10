class elems_FacilitySettingCalendarSetting {

    static HolidaysTab = {

        TAB_HOLIDAYS : '//button[text()="Holidays"]',
        BTN_ADDHOLIDAY : '//button[text()="Add Holiday"]',
        TBL_HOLIDAYS: '//h3[text()="Holidays"]//following-sibling::div//table//tbody',
        BTN_DELETEICON: '//h3[text()="Holidays"]//following-sibling::div//tr[1]//td[1]'

    }
    static PeriodsTab = {

        BTN_PERIODS : '//button[text()="Periods"]',
        BTN_ADDPERIOD : '//button[text()="Add Period"]',
        TBL_PERIODS: '//h3[text()="Periods"]//following-sibling::div',
        BTN_DELETEICON: '//h3[text()="Periods"]//following-sibling::div//tr[1]//td[1]'

    }
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'




}
export default elems_FacilitySettingCalendarSetting