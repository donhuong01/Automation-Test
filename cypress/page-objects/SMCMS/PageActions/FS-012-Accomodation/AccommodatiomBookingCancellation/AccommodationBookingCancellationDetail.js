import elems_AccommodationBookingCancellationDetail from '../../../Elements/FS-012-Accomodation/AccommodationBookingCancellationDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'

class AccommodationBookingCancelletionDetail {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

  /*****************************************************
   * Method:Submit
   * Description: This function click on Submit button
    *****************************************************/
  Submit() {
    cy.Click(elems_AccommodationBookingDetail.BTN_SUBMIT)
    cy.wait(10000)

  }
  /*****************************************************
   * Method:Cancel
   * Description: This function click on cancel button
    *****************************************************/
  Cancel() {
    cy.Click(elems_AccommodationBookingDetail.BTN_CANCEL)

  }

  /*****************************************************
   * Method:FillOutAccommmodationDetail
   * Description: This function will Fill Out Accommmodation Detail form
   * @param {string} Location
   * @param {string} AccommodationType
   * @param {string} AccommodationName
    *****************************************************/
  FillOutAccommmodationDetail(Location, AccommodationType, AccommodationName) {

    cy.SelectPickerItem(elems_AccommodationBookingDetail.PCK_LOCATION, Location)
    cy.SelectPickerItem(elems_AccommodationBookingDetail.PCK_ACCOMMODATIONTYPE, AccommodationType)
    cy.wait(2000)
    cy.EnterText(elems_AccommodationBookingDetail.TXT_ACCOMMODATIONTNAME, AccommodationName)
    cy.Click(elems_AccommodationBookingDetail.BTN_SEARCHFILTER)
    cy.wait(5000)
    cy.Click(elems_Picker.BTN_SELECT)
    cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Accommodation Name", AccommodationName)
    cy.Click(elems_Picker.BTN_SELECT)

    cy.wait(5000)

  }

  /*****************************************************
   * Method:Cancel
   * Description: This function click on Transaction Type radio button
   * @param {string} TransactionType
    *****************************************************/
  SelectTransactionType(TransactionType) {

    if(TransactionType === "Booking")
    {
      cy.Click(elems_AccommodationBookingDetail.RADIO_BOOKING)
    }
    if(TransactionType === "Reservation")
    {
      cy.Click(elems_AccommodationBookingDetail.RADIO_RESERVATION)
    }

    cy.Click(elems_AccommodationBookingDetail.BTN_SEARCHFILTER)
    cy.wait(5000)

  }

  /*****************************************************
   * Method:FilterAccommodationByStartDateAndEndDate
   * Description: This function Verify Notification Msg
   * @param {string} StartDate
   * @param {string} EndDate
    *****************************************************/
  FilterAccommodationByStartDateAndEndDate(StartDate, EndDate) {

    cy.SelectDate(elems_AccommodationBookingDetail.DATE_START, StartDate)
    cy.SelectDate(elems_AccommodationBookingDetail.DATE_END, EndDate)
    cy.wait(2000)
    cy.Click(elems_AccommodationBookingDetail.BTN_SEARCHFILTER)
    cy.wait(5000)

  }

  /*****************************************************
   * Method:VerifyNotificationMsg
   * Description: This function Verify Notification Msg
    *****************************************************/
  VerifyNotificationMsg(Msg) {
    cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, Msg)

  }

  /*****************************************************
   * Method:VerifyLocationAndAccommodationType
   * Description: This function will Verify Location and Accommodation Type
   * @param {string} Location
   * @param {string} AccommodationType
    *****************************************************/
  VerifyLocationAndAccommodationType(Location, Accommodation) {

    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_LOCATION, Location)
    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_ACCOMMODATIONTYPE, Accommodation)

  }

  /*****************************************************
   * Method:VerifyMemberIDAndMainAccommodation
   * Description: This function will Verify Member and Main Accommodation
   * @param {string} MemberID
   * @param {string} MainAccommodation
    *****************************************************/
  VerifyMemberIDAndMainAccommodation(MemberID, MainAccommodation) {

    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_MEMBERID, MemberID)
    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_MAINACCOMMODATION, MainAccommodation)

  }

  /*****************************************************
   * Method:VerifyInAccommodationDetailPage
   * Description: This function will Verify Info In Accommodation Detail Page
   * @param {string} MemberID
   * @param {string} Location
   * @param {string} AccommodationType
   * @param {string} MainAccommodation
    *****************************************************/
  VerifyInAccommodationDetailPage(MemberID, Location, AccommodationType, MainAccommodation) {

    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_MEMBERID, MemberID)
    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_LOCATION, Location)
    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_ACCOMMODATIONTYPE, AccommodationType)
    cy.ValidateElementText(elems_AccommodationBookingDetail.LBL_MAINACCOMMODATION, MainAccommodation)

  }

  /*****************************************************
   * Method:SelectAvailableSlot
   * Description: This function will Select available Slot
   * @param {string} Slot
    *****************************************************/
  SelectAvailableSlot(Slot) {

    cy.Click(`(//div[text()="${Slot}"])[1]`)
    cy.wait(5000)

  }

  /*****************************************************
   * Method:TermAndCondition
   * Description: This function will checked Terms And Condition if user pass Yes as param
   * @param {string} Value
    *****************************************************/
  TermsAndCondition(Value) {

    if(Value === "Yes")
    {
      cy.Click(elems_AccommodationBookingDetail.CHK_TERMANDCONDITION, Value)

    }
    

  }

  /*****************************************************
   * Method:IdemnityWaiver
   * Description: This function will checked Idemnity Waiver if user pass Yes as param
   * @param {string} Value
    *****************************************************/
  IdemnityWaiver(Value) {

    if(Value === "Yes")
    {

      cy.Click(elems_AccommodationBookingDetail.CHK_INDENTITYWAIVER, Value)
    }
    

  }

  /*****************************************************
   * Method:AddWaiverOff
   * Description: This function will add Add Waiver Off
   * @param {string} ChargeType
   * @param {string} Amount
   * @param {string} Reason
    *****************************************************/
  AddWaiverOff(ChargeType, Amount, Reason) {

    cy.Click(elems_AccommodationBookingDetail.BTN_ADDWAIVEROFF, MemberID)
    cy.SelectDropDownItem(elems_AccommodationBookingDetail.TXT_CHARGETYPE, ChargeType)
    cy.EnterText(elems_AccommodationBookingDetail.TXT_AMOUNT, Amount)
    cy.EnterText(elems_AccommodationBookingDetail.TXT_REASON, Reason)

  }

}

export default new AccommodationBookingCancelletionDetail