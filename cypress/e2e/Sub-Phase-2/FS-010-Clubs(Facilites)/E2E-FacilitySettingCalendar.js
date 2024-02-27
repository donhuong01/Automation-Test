import FacilitySettingsCalendarListingForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'
import FacilitySettingsCalendarDetailForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'


const FacilitySettingsCalendar = () => {

    describe('[TS01] Facility Settings Calendar', function () {

        const CalendarName = data.CalendarName + Math.floor(Math.random() * 1000)
        const DraftStatus = data.Status
        const Approved = data.Approved
        const StatusPendingApproval = data.StatusPendingApproval
        const RecordStatus = data.RecordStatus
        const RecordStatusActive = "Active"
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


        it('[TC01] Fill out detail form and and create new item', function () {

            cy.visit('/facilities/calendarListing')
            cy.wait(8000)

            FacilitySettingsCalendarListingForm.CreateNew()
            FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName)
            FacilitySettingsCalendarDetailForm.AddHolidayDates(HolidayName1, HolidayDate1)
            FacilitySettingsCalendarDetailForm.SaveAsDraft()
            cy.wait(3000)
            FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, DraftStatus, RecordStatus)
            FacilitySettingsCalendarDetailForm.VerifyTableEntry(CalendarName, DraftStatus)

        })


        it('[TC02] Facility Settings - Calendar Detail Form Holiday Dates Tab', function () {


            cy.visit('/facilities/calendarListing')
            cy.wait(5000)

            FacilitySettingsCalendarListingForm.VerifyFormTitle()

            FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, DraftStatus, RecordStatus)

            FacilitySettingsCalendarListingForm.ClickOnTableItem(CalendarName, RecordStatus)


            FacilitySettingsCalendarDetailForm.AddHolidayDates(HolidayName1, HolidayDate1)

            FacilitySettingsCalendarDetailForm.AddHolidayDates(HolidayName2, HolidayDate2)

            FacilitySettingsCalendarDetailForm.ClickPeriodsTab()

            FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName1, PeriodStartDate1, PeriodEndDate1)

            FacilitySettingsCalendarDetailForm.CopySelectedPeriodToCurrentYear(PeriodName1)

            FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Current Year.')

            //clear notification
            cy.xpath('//div[@class="notification__message" and text()="Copied Selected Period(s) to Current Year."]', { timeout: 10000 }).click()

            FacilitySettingsCalendarDetailForm.CopySelectedPeriodToNextYear(PeriodName1)

            FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Next Year.')

            //clear notification
            cy.xpath('//div[@class="notification__message" and text()="Copied Selected Period(s) to Next Year."]', { timeout: 10000 }).click()

            FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

            FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed successfully.')

            //clear notification
            cy.xpath('//div[@class="notification__message" and text()="Item(s) removed successfully."]', { timeout: 10000 }).click()
            FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

            FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed successfully.')
            //clear notification
            cy.xpath('//div[@class="notification__message" and text()="Item(s) removed successfully."]', { timeout: 10000 }).click()

            // FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName2, PeriodStartDate2, PeriodEndDate2)


            FacilitySettingsCalendarDetailForm.SubmitForApproval()
            cy.wait(7000)
            FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, StatusPendingApproval, RecordStatus)


        })

        it('[TC03] Facility Calendar Approval Workflow', function () {

            cy.visit('/admin/pendingTaskList')
            cy.wait(5000)

            FacilitySettingsCalendarDetailForm.FacilityCalendarWorkFlow("F-CAL", "Facility Calendar Approval Workflow", "Approve", "Testing")
            cy.wait(5000)

        })

        it('[TC04] Verify newly created item in the list and delete', function () {

            cy.visit('/facilities/calendarListing')
            cy.wait(5000)
            FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, Approved, RecordStatusActive)
            FacilitySettingsCalendarListingForm.DeleteItem(CalendarName, Approved)
            FacilitySettingsCalendarListingForm.DeleteItemYes()

        })
    })

}

export default FacilitySettingsCalendar