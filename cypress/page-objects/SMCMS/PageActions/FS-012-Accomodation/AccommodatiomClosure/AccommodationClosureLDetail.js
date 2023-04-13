import elems_AccommodationClosureDetail from '../../../Elements/FS-012-Accomodation/AccommodationClosureDetail'
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
   * Method: verify AccommodationType
   * Description: This function will select accommodation type
   * @param {string} AccommodationType 
    *****************************************************/
  SelectAccommodationType(AccommodationType) {
    cy.SelectPickerItem(elems_AccommodationClosureDetail.AccommodationType, AccommodationType)

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
  CheckedPermanentTermination(Value, PermananetClosureDate) {

    if(Value === "Yes")
    {
      CY.Click(elems_AccommodationClosureDetail.CHK_PERMANENTTERMINATION)
      cy.EnterDate(elems_AccommodationClosureDetail.DATE_PERMANENTCLOSUREDATE, PermananetClosureDate)
    }

  }

  /*****************************************************
   * Method:AddAccommodation
   * Description: This function will add Accommodation
   * @param {string} Accommodation
    *****************************************************/
  AddAccommodation(Accommodation) {
    cy.Click(elems_AccommodationClosureDetail.BTN_ADD)
    cy.SelectPickerItem(elems_AccommodationClosureDetail.BTN_ADDe, Accommodation)


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

export default new AccommodationSettingsGeneral