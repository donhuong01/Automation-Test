/*****************************************************
 * Page Function: Sample Script to Test Facility-Setting-CalendarSetting  Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Page
import FacilitySettingCalendarSetting from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar-Settings/Facility-Setting-Calendar-Setting'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'

//Page Definitions

const FacilitySettingsCalendarSetting = ()=> {
    const FacilitySettingCalendarSet = new FacilitySettingCalendarSetting
    const RowRefHoliday = 1
    const ColRefMonth = 2
    const valuemonth = 'August'

    const RowRefPeriodTab = 1

    describe('[TS02] Facility Setting Calendar Setting', function () {
        
        it('[TC01] Add Holiday and click cancel button', function () {
            cy.visit('/facilities/calendarSettings')
             cy.wait(5000)
            FacilitySettingCalendarSet.VerifyFormTitle() 
            FacilitySettingCalendarSet.AddHoliday(RowRefHoliday,ColRefMonth,valuemonth)
            FacilitySettingCalendarSet.TickCheckBox(RowRefHoliday, '3', 'check')
            FacilitySettingCalendarSet.SelectDropdownInAddHoliday(RowRefHoliday, '4', 'March')
            FacilitySettingCalendarSet.SelectDropdownInAddHoliday(RowRefHoliday, '5', '7')
            FacilitySettingCalendarSet.Cancel()

        })

        it('[TC02] Add Holiday and click save button', function () {

            cy.visit('/facilities/calendarSettings')
            // cy.wait(5000)
            FacilitySettingCalendarSet.VerifyFormTitle() 
            FacilitySettingCalendarSet.AddHoliday(RowRefHoliday,ColRefMonth,valuemonth)
            FacilitySettingCalendarSet.TickCheckBox(RowRefHoliday, '3', 'check')
            FacilitySettingCalendarSet.SelectDropdownInAddHoliday(RowRefHoliday, '4', 'March')
            FacilitySettingCalendarSet.SelectDropdownInAddHoliday(RowRefHoliday, '5', '7')
            FacilitySettingCalendarSet.Save()

        })

        it('[TC03] Add Period and click cancel button', function () {
            cy.visit('/facilities/calendarSettings')
            // cy.wait(5000)
            FacilitySettingCalendarSet.EnterTextInPeriodsTab(RowRefPeriodTab, '2', 'Test Period')
            FacilitySettingCalendarSet.AddPeriod(RowRefPeriodTab, '3', 'check')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '4', 'June')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '5', '12')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '6', 'April')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '7', '2')
            FacilitySettingCalendarSet.Cancel() 

        })

        it('[TC04] Add Period and click Save button', function () {
            cy.visit('/facilities/calendarSettings')
            // cy.wait(5000)
            FacilitySettingCalendarSet.EnterTextInPeriodsTab(RowRefPeriodTab, '2', 'Test Period')
            FacilitySettingCalendarSet.AddPeriod(RowRefPeriodTab, '3', 'check')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '4', 'March')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '5', '12')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '6', 'July')
            FacilitySettingCalendarSet.SelectDropdownInPeriods(RowRefPeriodTab, '7', '2')
            FacilitySettingCalendarSet.Save() //- needs to update the custom command

        })

    
    }) 
}
export default FacilitySettingsCalendarSetting
    
