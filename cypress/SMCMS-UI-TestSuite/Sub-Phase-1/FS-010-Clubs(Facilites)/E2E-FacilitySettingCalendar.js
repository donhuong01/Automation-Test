import FacilitySettingsCalendarListingForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'
import FacilitySettingsCalendarDetailForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'


const FacilitySettingsCalendar = ()=> {

describe('[TS01] Facility Settings Calendar', function () {

    const CalendarName = data.CalendarName + Math.floor(Math.random() * 1000 )
    const Status = data.Status
    const StatusPendingApproval = data.StatusPendingApproval
    const RecordStatus = data.RecordStatus
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

        FacilitySettingsCalendarListingForm.CreateNew()
        FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName)
        // FacilitySettingsCalendarDetailForm.StartDate('18-05-2022')
        // FacilitySettingsCalendarDetailForm.EndDate('10-01-2003')
        FacilitySettingsCalendarDetailForm.SaveAsDraft()
        cy.wait(3000)
        FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, "Draft", RecordStatus)
        FacilitySettingsCalendarDetailForm.VerifyTableEntry(CalendarName, 'Draft')
    })

    // it('[TC02] Verify newly created item in the list and delete', function () {

    //     cy.visit('/facilities/facilitiesSettingsCalendarListing')
    //     FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, Status, RecordStatus)
    //     FacilitySettingsCalendarListingForm.DeleteItem(CalendarName,Status)
    //     FacilitySettingsCalendarListingForm.DeleteItemYes()

    // })


    it('[TC02] Facility Settings - Calendar Detail Form Holiday Dates Tab', function () {


        cy.visit('/facilities/calendarListing')

        FacilitySettingsCalendarListingForm.VerifyFormTitle()

        FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, "Draft", RecordStatus)

        FacilitySettingsCalendarListingForm.ClickOnTableItem(CalendarName, RecordStatus)
        // FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName)

        // FacilitySettingsCalendarDetailForm.StartDate('02-08-1996')
        
        // FacilitySettingsCalendarDetailForm.EndDate('10-11-2003')
        
        FacilitySettingsCalendarDetailForm.AddHolidayDates(HolidayName1, '10-11-2003')
        
        //FacilitySettingsCalendarDetailForm.AddHolidayFromSettingToCurrentYear(HolidayName1)
        
        FacilitySettingsCalendarDetailForm.CopySelectedHoildayToCurrentYear(HolidayName1)
        
        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Holiday(s) to Current Year.')
        
        FacilitySettingsCalendarDetailForm.CopySelectedHolidaysToNextYear(HolidayName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Holiday(s) to Next Year.')

        FacilitySettingsCalendarDetailForm.DeleteSelectedDates(HolidayName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed.')

        FacilitySettingsCalendarDetailForm.ClickPeriodsTab()

        FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName1, '02-08-1996', '10-11-2003')

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToCurrentYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Current Year.')

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToNextYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Next Year.')

        FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed.')

        FacilitySettingsCalendarDetailForm.ClickPeriodsTab()

        FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName1, '02-08-1996', '10-11-2003')

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToCurrentYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Current Year.')

        FacilitySettingsCalendarDetailForm.CopySelectedPeriodToNextYear(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Next Year.')

        FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

        FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed.')


        FacilitySettingsCalendarDetailForm.SubmitForApproval()
        cy.wait(2000)
    
    })

    // it.skip('[TC04] Facility Settings - Calendar Detail Form Period Tab', function () {


    //     cy.visit('/facilities/facilitiesSettingsCalendarDetail')

    //     FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName)

    //     FacilitySettingsCalendarDetailForm.StartDate('02-08-1996')
        
    //     FacilitySettingsCalendarDetailForm.EndDate('10-11-2003')

    //     FacilitySettingsCalendarDetailForm.ClickPeriodsTab()

    //     FacilitySettingsCalendarDetailForm.AddPeriods(PeriodName1, '02-08-1996', '10-11-2003')

    //     FacilitySettingsCalendarDetailForm.CopySelectedPeriodToCurrentYear(PeriodName1)

    //     FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Current Year')

    //     FacilitySettingsCalendarDetailForm.CopySelectedPeriodToNextYear(PeriodName1)

    //     FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Copied Selected Period(s) to Next Year')

    //     FacilitySettingsCalendarDetailForm.DeleteSelectedPeriod(PeriodName1)

    //     FacilitySettingsCalendarDetailForm.VerifyNotificationMessage('Item(s) removed')

    //     // FacilitySettingsCalendarDetailForm.SaveAsDraft()
    
    // })

    it('[TC03] Verify newly created item in the list and delete', function () {

        cy.visit('/facilities/calendarListing')
        FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, StatusPendingApproval, RecordStatus)
        FacilitySettingsCalendarListingForm.DeleteItem(CalendarName,StatusPendingApproval)
        FacilitySettingsCalendarListingForm.DeleteItemYes()

    })
})

}

export default FacilitySettingsCalendar