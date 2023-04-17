import login from '../../../fixtures/login'
import AccommodationSettingsGeneral from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomSettingGeneral/AccommodationSettingGeneral'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    cy.visit('/accommodation/settingsGeneralDetail').wait(2000)
})

const { NumOfPhotoUpload, MaxSize, CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay, AccoTransactionCancelAfter, AccoBookingNotificationBeforeStart } = data.AccommodationSettingGeneral

describe('FS-012 Accommodation Settings General', function () {

    it('Update Attached Media settings, Save, View', function () {

        AccommodationSettingsGeneral.fillOutAttachedMediaSettings(NumOfPhotoUpload, MaxSize)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('Update Grace Period for Booking Cancellation, Save, View', function () {

        AccommodationSettingsGeneral.fillOutGracePeriodForBookingCancellation(CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('Update Auto-Cancellation in Pending Payment, Save, View', function () {

        AccommodationSettingsGeneral.AutoCancellationInPendingPayment(AccoTransactionCancelAfter)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('Update Email Reminder Setting, Save, View', function () {

        AccommodationSettingsGeneral.EmailReminderSettings(AccoBookingNotificationBeforeStart)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
})