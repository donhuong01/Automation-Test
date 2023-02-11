/*****************************************************
 * Page Function: Sample Script to Test Facility-Setting-CalendarSetting  Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Page
import FacilitySettingCalendarSetting from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar-Settings/Facility-Setting-Calendar-Setting'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../fixtures/login'
//Page Definitions
const FacilitySettingCalendarSet = new FacilitySettingCalendarSetting
const RowrefMonth = 1
const ColRefMonth = 2
const valuemonth = 'August'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[TS01] Facility Setting Calendar Setting', function () {

    it('[TC01] Add Holiday and click cancel button', function () {
        cy.visit('/facilities/calendarSettings')
        cy.wait(5000)
        FacilitySettingCalendarSet.VerifyFormTitle()
        FacilitySettingCalendarSet.AddHoliday(RowrefMonth, ColRefMonth, valuemonth)
        FacilitySettingCalendarSet.TickCheckBox('1', '3', 'check')
        FacilitySettingCalendarSet.SelectDropdownInAddHoliday('1', '4', 'March')
        FacilitySettingCalendarSet.SelectDropdownInAddHoliday('1', '5', '7')
        FacilitySettingCalendarSet.Cancel()

    })

    it('[TC02] Add Holiday and save button', function () {

        cy.visit('/facilities/calendarSettings')
        cy.wait(5000)
        FacilitySettingCalendarSet.VerifyFormTitle()
        FacilitySettingCalendarSet.AddHoliday(RowrefMonth, ColRefMonth, valuemonth)
        FacilitySettingCalendarSet.TickCheckBox('1', '3', 'check')
        FacilitySettingCalendarSet.SelectDropdownInAddHoliday('1', '4', 'August')
        FacilitySettingCalendarSet.SelectDropdownInAddHoliday('1', '5', '7')
        FacilitySettingCalendarSet.Save()

    })

    it('[TC03] Add Period and click cancel button', function () {
        cy.visit('/facilities/calendarSettings')
        cy.wait(5000)
        FacilitySettingCalendarSet.EnterTextInPeriodsTab('1', '2', 'Test Period')
        FacilitySettingCalendarSet.AddPeriod('1', '3', 'check')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '4', 'June')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '5', '12')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '6', 'April')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '7', '2')
        FacilitySettingCalendarSet.Cancel()

    })

    it('[TC04] Add Period and click Save button', function () {
        cy.visit('/facilities/calendarSettings')
        cy.wait(5000)
        FacilitySettingCalendarSet.EnterTextInPeriodsTab('1', '2', 'Test Period')
        FacilitySettingCalendarSet.AddPeriod('1', '3', 'check')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '4', 'January')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '5', '2')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '6', 'December')
        FacilitySettingCalendarSet.SelectDropdownInPeriods('1', '7', '15')
        FacilitySettingCalendarSet.Save() //- needs to update the custom command

    })


})


