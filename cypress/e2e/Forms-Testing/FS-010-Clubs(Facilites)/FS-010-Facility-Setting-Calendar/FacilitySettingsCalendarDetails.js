/*****************************************************
 * Page Function: Sample Script to TestFacility Settings - Calendar Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import FacilitySettingsCalendarDetailForm from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import FacilitySettingsCalendarListingForm from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../fixtures/login'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

beforeEach(() => {

    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const common = new Common()

describe('[TS02] Facility Settings - Calendar Detail Form', function () {

    const CalendarName = data.CalendarName
    const CalendarName2 = "Test Draft"
    const Status = "Draft"
    const StartDate = data.StartDate
    const EndDate = data.EndDate
    const HolidayName1 = data.HolidayDates.HolidayName1
    const HolidayName2 = data.HolidayDates.HolidayName2
    const HolidayDate1 = data.HolidayDates.HoildayDate1
    const HolidayDate2 = data.HolidayDates.HoildayDate2

    const PeriodName1 = data.Period.PeriodName1
    const PeriodStartDate1 = data.Period.PeriodStartDate1
    const PeriodEndDate1 = data.Period.PeriodEndDate1
    const PeriodName2 = data.Period.PeriodName2
    const PeriodStartDate2 = data.Period.PeriodStartDate2
    const PeriodEndDate2 = data.Period.PeriodEndDate2
    const PeriodDescription = data.Period.Description

    it('[TC01]Facility Settings - FillOut Calendar Detail Form and Save as Draft', function () {


        cy.visit('/facilities/calendarDetail')
        cy.wait(2000)

        FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName2, StartDate, EndDate)

        FacilitySettingsCalendarDetailForm.SaveAsDraft()

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Save as Draft success.')

        FacilitySettingsCalendarDetailForm.VerifyTableEntry(CalendarName2, Status)

        cy.wait(2000)


    })

    it('[TC02] Facility Settings - FillOut Calendar Detail Form Period Tab', function () {


        cy.visit('/facilities/calendarDetail')

        FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName, StartDate, EndDate)

        FacilitySettingsCalendarDetailForm.ClickPeriodsTab()

        FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName1, PeriodStartDate1, PeriodEndDate1)

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToCurrentYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Current Year.')

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToNextYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Next Year.')

        FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed.')

        // FacilitySettingsCalendarDetailForm.SaveAsDraft()

    })

    it('[TC03] Facility Settings - FillOut Calendar Detail Form Holiday Dates Tab and submit for approval', function () {


        cy.visit('/facilities/calendarListing')

        FacilitySettingsCalendarListingForm.CreateNew()

        FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName, StartDate, EndDate)

        FacilitySettingsCalendarDetailForm.AddHolidayDates(HolidayName1, HolidayDate1)

        // FacilitySettingsCalendarDetailForm.AddHolidayFromSettingToCurrentYear(HolidayName1)

        FacilitySettingsCalendarDetailForm.CopySelectedHoildayToCurrentYear(HolidayName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Holiday(s) to Current Year.')

        FacilitySettingsCalendarDetailForm.CopySelectedHolidaysToNextYear(HolidayName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Holiday(s) to Next Year.')

        FacilitySettingsCalendarDetailForm.DeleteSelectedDates(HolidayName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed.')

        FacilitySettingsCalendarDetailForm.SubmitForApproval()
        cy.wait(5000)

        common.ApprovalWorkFlow('F-CAL', 'Facility Calendar Approval Workflow', 'Approve', 'approved')

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Record has been saved successfully.')

    })
})

