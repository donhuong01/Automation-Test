import AccommodationSettingsGeneral from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomSettingGeneral/AccommodationSettingGeneral'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'
import login from '../../../fixtures/login'


beforeEach(() => {

    cy.visit('/accommodation/settingsGeneralDetail').wait(2000)
})

const { NumOfPhotoUpload, MaxSize, CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay, AccoTransactionCancelAfter, AccoBookingNotificationBeforeStart } = data.AccommodationSettingGeneral

const AccommodatiomSettingGeneral = () => {

describe('FS-012 Accommodation Settings General', function () {

    it('[TS-01] Update Attached Media settings, Save, View', function () {

        AccommodationSettingsGeneral.fillOutAttachedMediaSettings(NumOfPhotoUpload, MaxSize)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('[TS-02] Update Grace Period for Booking Cancellation, Save, View', function () {

        AccommodationSettingsGeneral.fillOutGracePeriodForBookingCancellation(CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('[TS-03] Update Auto-Cancellation in Pending Payment, Save, View', function () {

        AccommodationSettingsGeneral.AutoCancellationInPendingPayment(AccoTransactionCancelAfter)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
    it('[TS-04] Update Email Reminder Setting, Save, View', function () {

        AccommodationSettingsGeneral.EmailReminderSettings(AccoBookingNotificationBeforeStart)

        AccommodationSettingsGeneral.Save()

        AccommodationSettingsGeneral.VerifyNotificationMsg('Record has been saved successfully.')

    })
})

}

export default AccommodatiomSettingGeneral