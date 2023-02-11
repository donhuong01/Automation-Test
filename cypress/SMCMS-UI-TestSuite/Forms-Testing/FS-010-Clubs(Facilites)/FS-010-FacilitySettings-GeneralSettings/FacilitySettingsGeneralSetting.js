/*****************************************************
 * Page Function: Sample Script to Test Facility Setting-General Settings Detail
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import FacilityGeneralSettingDetail from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-FacilitySettings-GeneralSettings/GeneralSettingsDetail'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../../fixtures/login'



beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('FS10-Facility Settings-General ', function () {

    const BReminder = data.FacilityBookingReminder
    const BookingEarn = data.BookingEarn
    const GBookingEarn = data.GroupBooking
    const ReservationEarn = data.ReservationEarn
    const NoPhotgraphToUpload = data.NumOfPhotoGraphs
    const MaximumFileSize = data.MaximumFileSize
    const FormatAllowed = data.FormatAllowed
    const TransferButton = data.TransferButton

    const CanNotAllowedMonths = data.CancellationNotAllowedMonths
    const CanNotAllowedDays = data.CancellationNotAllowedDays
    const DataBackUp = data.DataBackUp



    it('[TC01] Update General Settings Detail Form and Click Cancel', function () {

        cy.visit('/facilities/generalSettings')
        cy.wait(6000)
        FacilityGeneralSettingDetail.verifyPageTitle('Settings - General')

        FacilityGeneralSettingDetail.ReminderAndSAFRAPointSection(
            BReminder, BookingEarn, GBookingEarn, ReservationEarn
        )

        // FacilityGeneralSettingDetail.TransferAllFrom(FormatAllowed, 'Transfer To')

        FacilityGeneralSettingDetail.FillOutPhotographSection(
            NoPhotgraphToUpload, MaximumFileSize, 'jpg', 'Transfer All To')

        FacilityGeneralSettingDetail.FacilityCancellationAndAutoBackUp(
            CanNotAllowedMonths, CanNotAllowedDays, DataBackUp)

        FacilityGeneralSettingDetail.Cancel()

    })

    it('[TC02] Update General Settings Detail Form and Click Save', function () {

        cy.visit('/facilities/generalSettings')
        cy.wait(6000)
        FacilityGeneralSettingDetail.verifyPageTitle('Settings - General')

        FacilityGeneralSettingDetail.ReminderAndSAFRAPointSection(
            BReminder, BookingEarn, GBookingEarn, ReservationEarn
        )


        FacilityGeneralSettingDetail.FillOutPhotographSection(
            NoPhotgraphToUpload, MaximumFileSize, FormatAllowed, TransferButton)

        FacilityGeneralSettingDetail.FillOutPhotographSection(
            NoPhotgraphToUpload, MaximumFileSize, 'jpg', 'Transfer To')

        FacilityGeneralSettingDetail.FillOutPhotographSection(
            NoPhotgraphToUpload, MaximumFileSize, 'gif', 'Transfer All From')


        FacilityGeneralSettingDetail.FacilityCancellationAndAutoBackUp(
            CanNotAllowedMonths, CanNotAllowedDays, DataBackUp)

        FacilityGeneralSettingDetail.Save()

    })
})