import elems_AccommodationClosureDetail from '../../../Elements/FS-012-Accomodation/AccommodationClosureDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'

class AccommodationClosureDetail {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

  /*****************************************************
   * Method: verify AccommodationType
   * Description: This function will select accommodation type
   * @param {string} AccommodationType 
    *****************************************************/
  SelectAccommodationType(AccommodationType) {
    cy.SelectPickerItem(elems_AccommodationClosureDetail.PCK_ACCOMODATIONTYPE, AccommodationType)

  }
  /*****************************************************
   * Method: verify EnterReason
   * Description: This function will enter text in Reason text aera
   * @param {string} Reason 
    *****************************************************/
  EnterReason(Reason) {
    cy.EnterText(elems_AccommodationClosureDetail.TXTAERA_REASON, Reason)

  }

  /*****************************************************
   * Method: CheckedPermanentTermination
   * Description: This function will checked Permananet Termination if value pass 'Yes"
   * @param {string} Value 
   * @param {string} PermananetClosureDate
    *****************************************************/
  CheckedPermanentTermination(PermananetClosureDate) {


      cy.Click(elems_AccommodationClosureDetail.CHK_PERMANENTTERMINATION)
      cy.EnterDate(elems_AccommodationClosureDetail.DATE_PERMANENTCLOSUREDATE, PermananetClosureDate)
  


  }

  /*****************************************************
   * Method:AddAccommodation
   * Description: This function will add Accommodation
   * @param {string} Accommodation
    *****************************************************/
  AddAccommodation(Accommodation) {
    cy.Click(elems_AccommodationClosureDetail.BTN_ADD)
    cy.SelectPickerItem(elems_AccommodationClosureDetail.TXT_ACCOMMODATIONNAME, Accommodation)


  }
  /*****************************************************
   * Method: AddCloserPeriod
   * Description: This function will add Add Closer Period
   * @param {string} StartDate
   * @param {string} StartTime
   * @param {string} EndtDate
   * @param {string} EndTime
    *****************************************************/
  AddCloserPeriod(StartDate, StartTime, EndtDate, EndTime) {

    cy.Click(elems_AccommodationClosureDetail.BTN_ADDCLOSUREPERIODS)
    cy.EnterDate(elems_AccommodationClosureDetail.DATE_STARTDATE, StartDate)
    cy.EnterTime(elems_AccommodationClosureDetail.TIME_STARTTIME, StartTime)
    cy.EnterDate(elems_AccommodationClosureDetail.DATE_ENDDATE, EndtDate)
    cy.EnterTime(elems_AccommodationClosureDetail.TIME_ENDTIME, EndTime)
    cy.Click(elems_AccommodationClosureDetail.BTN_ADDCLOSUREPERIOD)


  }

  /*****************************************************
   * Method: AddCloserPeriod
   * Description: This function will add Add Closer Period
   * @param {string} RecurringType
   * @param {string} RecurEvery
   * @param {string} StartDate
   * @param {string} TimeFrom
   * @param {string} TimeTo
   * @param {string} ENDAFTE
    *****************************************************/
  AddRecurringDate(RecurringType, RecurEvery, StartDate, TimeFrom, TimeTo, EndAfter) {

    cy.Click(elems_AccommodationClosureDetail.BTN_ADDRECURRINGDATE)
    cy.SelectDropDownItem(elems_AccommodationClosureDetail.DRP_RECURRINGTYPE, RecurringType)
    cy.EnterText(elems_AccommodationClosureDetail.TXT_RECUREVERY, RecurEvery)
    cy.EnterDate(elems_AccommodationClosureDetail.DATE_RECURSTARTSATE, StartDate)
    cy.EnterTime(elems_AccommodationClosureDetail.TIME_RECURFROM, TimeFrom)
    cy.EnterTime(elems_AccommodationClosureDetail.TIME_RECURTO, TimeTo)

    if(EndAfter === 'Occurrences')
    {
      cy.Click(elems_AccommodationClosureDetail.RADIO_OCCURRENCES)
      cy.EnterText(elems_AccommodationClosureDetail.TXT_ENDAFTEROCCURRENCES, '4')

    }else{

      cy.Click(elems_AccommodationClosureDetail.RADIO_CERTAINTIME)
      cy.EnterText(elems_AccommodationClosureDetail.TXT_ENDAFTEROCCURRENCES, StartDate)

    }
    cy.Click(elems_AccommodationClosureDetail.BTN_ADDCLOSUREPERIOD)




  }

  /*****************************************************
   * Method:Remove
   * Description: This function click on Remove button
    *****************************************************/
  Remove() {
    cy.Click(elems_AccommodationClosureDetail.BTN_REMOVE)

  }

  /*****************************************************
   * Method:SubmitForApproval
   * Description: This function click on Submit For Approval button
    *****************************************************/
  SubmitForApproval() {
    cy.Click(elems_AccommodationClosureDetail.BTN_SUBMITFORAPPROVAL)
    cy.wait(4000)

  }
  /*****************************************************
   * Method:SaveAsDraft
   * Description: This function click on Save As Draft button
    *****************************************************/
  SaveAsDraft() {
    cy.Click(elems_AccommodationClosureDetail.BTN_SAVEASDRAFT)

  }
  /*****************************************************
   * Method:Cancel
   * Description: This function click on cancel button
    *****************************************************/
  Cancel() {
    cy.Click(elems_AccommodationClosureDetail.BTN_CANCEL)

  }
  /*****************************************************
   * Method:VerifyNotificationMsg
   * Description: This function Verify Notification Msg
    *****************************************************/
  VerifyNotificationMsg(Msg) {
    cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, Msg)

  }
}

export default new AccommodationClosureDetail