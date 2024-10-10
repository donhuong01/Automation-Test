import elems_AccommodationSettingsGeneral from '../../../Elements/FS-012-Accomodation/AccommodationSettingsGeneral'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'

class AccommodationSettingsGeneral {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

  /*****************************************************
   * Method:fillOutSAFRAPoints
   * Description: This function fillout SAFRAPoints section
   * @param {string} AccoBookingEarn
   * @param {string} AccoReservationEarn 
    *****************************************************/
  fillOutSAFRAPoints(AccoBookingEarn, AccoReservationEarn) {
    cy.TickCheckBox(elems_AccommodationSettingsGeneral.CHK_ACCBOOKINGEARNSAFRAPOINTS, AccoBookingEarn)
    cy.TickCheckBox(elems_AccommodationSettingsGeneral.CHK_ACCORESERVATIONEARNSAFRAPOINTS, AccoReservationEarn)

  }
  /*****************************************************
   * Method:fillOutAttachedMediaSettings
   * Description: This function fillout Attached Media Settings section
   * @param {string} NumOfPhotoUpload
   * @param {string} MaxSize 
    *****************************************************/
  fillOutAttachedMediaSettings(NumOfPhotoUpload, MaxSize) {
    cy.xpath(elems_AccommodationSettingsGeneral.TXT_NUMBEROFPHOTOGRAPHSTOUPLOAD).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_NUMBEROFPHOTOGRAPHSTOUPLOAD, NumOfPhotoUpload)
    cy.xpath(elems_AccommodationSettingsGeneral.TXT_MAXFILESIZE).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_MAXFILESIZE, MaxSize)

  }
  /*****************************************************
   * Method:fillOutGracePeriodForBookingCancellation
   * Description: This function fillout Grace Period For Booking Cancellation section
   * @param {string} CancellationIsNotAllowedInMonth
   * @param {string} CancellationIsNotAllowedInDay 
    *****************************************************/
  fillOutGracePeriodForBookingCancellation(CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay) {

    cy.xpath(elems_AccommodationSettingsGeneral.TXT_CANCELLATIONISNOTALLOWDINMONTH).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_CANCELLATIONISNOTALLOWDINMONTH, CancellationIsNotAllowedInMonth)
    cy.xpath(elems_AccommodationSettingsGeneral.TXT_CANCELLATIONISNOTALLOWDINDAY).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_CANCELLATIONISNOTALLOWDINDAY, CancellationIsNotAllowedInDay)

  }
  /*****************************************************
   * Method:AutoCancellationInPendingPayment
   * Description: This function fillout Auto Cancellation In Pending Payment section
   * @param {string} AccoTransactionCancelAfter
    *****************************************************/
  AutoCancellationInPendingPayment(AccoTransactionCancelAfter) {

    cy.xpath(elems_AccommodationSettingsGeneral.TXT_ACCOTRANSACTIONISGOINGTOBECANCELLED).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_ACCOTRANSACTIONISGOINGTOBECANCELLED, AccoTransactionCancelAfter)

  }
  /*****************************************************
   * Method:EmailReminderSettings
   * Description: This function fillout Email Reminder Settings section
   * @param {string} AccoBookingNotificationBeforeStart
    *****************************************************/
  EmailReminderSettings(AccoBookingNotificationBeforeStart) {

    cy.xpath(elems_AccommodationSettingsGeneral.TXT_ACCOBOOKINGNOTIFICATIONBEFORESTARTDATE).clear()
    cy.EnterText(elems_AccommodationSettingsGeneral.TXT_ACCOBOOKINGNOTIFICATIONBEFORESTARTDATE, AccoBookingNotificationBeforeStart)

  }
  /*****************************************************
   * Method:Save
   * Description: This function click on save button
    *****************************************************/
  Save() {
    cy.Click(elems_AccommodationSettingsGeneral.BTN_SAVE)

  }
  /*****************************************************
   * Method:Cancel
   * Description: This function click on cancel button
    *****************************************************/
  Cancel() {
    cy.Click(elems_AccommodationSettingsGeneral.BTN_CANCEL)

  }
  /*****************************************************
   * Method:VerifyNotificationMsg
   * Description: This function Verify Notification Msg
    *****************************************************/
  VerifyNotificationMsg(Msg) {
    cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, Msg)

  }
}

export default new AccommodationSettingsGeneral