import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import FacilitySettingsCalendarListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'
import login from '../../../../../fixtures/login'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('[TS02] Facility Settings Calendar Listing', function () {

    const CalendarName = data.CalendarName
    const Status = data.Status
    const RecordStatus = data.RecordStatus


    it('[TC01] Verify the filter functionality and create new button', function () {

        cy.visit('/facilities/calendarListing')

        FacilitySettingsCalendarListingForm.VerifyFormTitle()
        FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, Status, RecordStatus)
        FacilitySettingsCalendarListingForm.CreateNew()
    })

    it('[TC02] Delete the newly created item from the list ', function () {

        cy.visit('/facilities/calendarListing')
        FacilitySettingsCalendarListingForm.FillOutSettingCalendarForm(CalendarName, Status, RecordStatus)
        FacilitySettingsCalendarListingForm.DeleteItem(CalendarName, Status)
        FacilitySettingsCalendarListingForm.DeleteItemYes()

    })
})
