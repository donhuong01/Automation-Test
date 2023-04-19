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
    cy.Click(elems_AccommodationBookingCancellationDetail.BTN_SUBMIT)
    cy.wait(10000)

  }
  /*****************************************************
   * Method:Cancel
   * Description: This function click on cancel button
    *****************************************************/
  Cancel() {
    cy.Click(elems_AccommodationBookingCancellationDetail.BTN_CANCEL)

  }

  /*****************************************************
   * Method:SelectAccommodationBooking
   * Description: This function will will byy Customer Name and will accommodation booking
   * @param {string} CustomerName
    *****************************************************/
  SelectAccommodationBooking(CustomerName) {

    cy.Click(elems_AccommodationBookingCancellationDetail.PCK_ACCOMMODATIONBOOKING)
    cy.wait(3000)
    cy.EnterText(elems_AccommodationBookingCancellationDetail.TXT_CUSTOMERNAME, CustomerName)
    cy.Click(elems_AccommodationBookingCancellationDetail.BTN_SEARCHFILTERS)
    cy.wait(3000)
    cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Customer Name", CustomerName)
    cy.Click(elems_Picker.BTN_SELECT)
    cy.wait(2000)
    
  }

  /*****************************************************
   * Method:Cancel
   * Description: This function click on Transaction Type radio button
   * @param {string} RefundCredit
   * @param {string} RefundCreditType
   * @param {string} Amount
    *****************************************************/
  GiveRefundCredit(RefundCredit, RefundCreditType, Amount) {

    if(RefundCredit === "Yes" && RefundCreditType === "Credit")
    {
      cy.Click(elems_AccommodationBookingCancellationDetail.CHK_GIVEREFUNDCRIDT)
      cy.SelectDropDownItem(elems_AccommodationBookingCancellationDetail.DRP_REFUNDCRIDTTYPE, RefundCreditType)
      cy.SelectDropDownItem(elems_AccommodationBookingCancellationDetail.DRP_AMOUNTTYPE, Amount)
    }
    if(RefundCredit === "Yes" && RefundCreditType === "Refund")
    {
      cy.Click(elems_AccommodationBookingCancellationDetail.CHK_GIVEREFUNDCRIDT)
      cy.SelectDropDownItem(elems_AccommodationBookingCancellationDetail.DRP_REFUNDCRIDTTYPE, RefundCreditType)
      cy.SelectDropDownItem(elems_AccommodationBookingCancellationDetail.DRP_AMOUNTTYPE, Amount)
    }

    cy.EnterText(elems_AccommodationBookingCancellationDetail.TXTAERA_REFUNDCREDIT, "Testing Refund/Credit")

  }



  /*****************************************************
   * Method:VerifyNotificationMsg
   * Description: This function Verify Notification Msg
    *****************************************************/
  VerifyNotificationMsg(Msg) {
    cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, Msg)

  }

  /*****************************************************
   * Method:VerifyInfoInAccBookingCancellationDetail
   * Description: This function will Verify informatoin in accommodation booking cancellation detail
   * @param {string} CustomerName
   * @param {string} MainAccommodation
    *****************************************************/
  VerifyInfoInAccBookingCancellationDetail(CustomerName, MainAccommodation) {

    cy.ValidateElementText(elems_AccommodationBookingCancellationDetail.LBL_CUSTOMERNAME, CustomerName)
    cy.ValidateElementText(elems_AccommodationBookingCancellationDetail.LBL_MAINACCOMMODATION, MainAccommodation)

  }

  /*****************************************************
   * Method:VerifyMemberIDAndMainAccommodation
   * Description: This function will Verify Member and Main Accommodation
   * @param {string} MemberID
   * @param {string} MainAccommodation
    *****************************************************/
  VerifyMemberIDAndMainAccommodation(MemberID, MainAccommodation) {

    cy.ValidateElementText(elems_AccommodationBookingCancellationDetail.LBL_MEMBERID, MemberID)
    cy.ValidateElementText(elems_AccommodationBookingCancellationDetail.LBL_MAINACCOMMODATION, MainAccommodation)

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
   * Method:SelectCreditRefundItemDetail
   * Description: This function will Select CrediRefund Item Detail
    *****************************************************/
  SelectCreditRefundItemDetail() {

    cy.Click('(//h2[text()="Accommodation Booking Cancellation Details"]//ancestor::div//table//td/input)[1]')

  }

  /*****************************************************
   * Method:AddWaiverOff
   * Description: This function will add Add Waiver Off
   * @param {string} ChargeType
   * @param {string} Amount
   * @param {string} Reason
    *****************************************************/
  AddWaiverOff(ChargeType, Amount, Reason) {

    cy.Click(elems_AccommodationBookingCancellationDetail.BTN_ADDWAIVEROFF, MemberID)
    cy.SelectDropDownItem(elems_AccommodationBookingCancellationDetail.TXT_CHARGETYPE, ChargeType)
    cy.EnterText(elems_AccommodationBookingCancellationDetail.TXT_AMOUNT, Amount)
    cy.EnterText(elems_AccommodationBookingCancellationDetail.TXT_REASON, Reason)

  }

}

export default new AccommodationBookingCancelletionDetail