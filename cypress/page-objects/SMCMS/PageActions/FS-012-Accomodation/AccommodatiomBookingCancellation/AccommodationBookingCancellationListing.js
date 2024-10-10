import elems_AccommodationCancellationBookingListing from '../../../Elements/FS-012-Accomodation/AccommodationBookingCancellationListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'

class AccommodationBookingCancellationListing {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }


  /*****************************************************
   * Method:ClickOn
   * Description: This function click on button when pass as parameter the button name
   * @param {string} ButtonName pass button name
    *****************************************************/
  ClickOn(ButtonName) {

    cy.Click(`//button[text()="${ButtonName}"]`)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:FilterByCancellationNo
   * Description: This function will filter by Cancellation number
   * @param {string} CancellationNo
    *****************************************************/
  FilterByCancellationNo(CancellationNo) {

    cy.EnterText(elems_AccommodationCancellationBookingListing.TXT_CANCELLATIONNUMBER, CancellationNo)
    cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }
  /*****************************************************
   * Method:FilterByReceiptNumber
   * Description: This function will filter by Receipt Number
   * @param {string} ReceiptNumber
    *****************************************************/
  FilterByReceiptNumber(ReceiptNumber) {

    cy.EnterText(elems_AccommodationCancellationBookingListing.TXT_RECEIPTNUMBER, ReceiptNumber)
    cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:FilterByMainAccomodation
   * Description: This function will filter by Accommodation Name
   * @param {string} MainAccomodation
    *****************************************************/
  FilterByMainAccomodation(MainAccomodation) {

    cy.SelectPickerFilter(elems_AccommodationCancellationBookingListing.PCK_MAINACCOMMODATION,
      elems_Picker.TXT_ITEM, elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTERACC, MainAccomodation)
    cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:CustomerNRIC
   * Description: This function will filter by Customer NRIC
   * @param {string} CustomerNRIC
   *****************************************************/
    FilterByCustomerNRIC(CustomerNRIC) {

      cy.EnterText(elems_AccommodationCancellationBookingListing.TXT_CUSTOMERNAME, CustomerNRIC)
      cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:CustomerName
   * Description: This function will filter by Member ID
   * @param {string} CustomerName
   *****************************************************/
    FilterByCustomerName(CustomerName) {

      cy.EnterText(elems_AccommodationCancellationBookingListing.TXT_CUSTOMERNAME, CustomerName)
      cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:FilterByStatus
   * Description: This function will filter by Status
   * @param {string} Status
    *****************************************************/
  FilterByStatus(Status) {
    

    cy.SelectDropDownItem(elems_AccommodationCancellationBookingListing.DRP_STATUS, Status)
    cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }

  /*****************************************************
   * Method:FilterByRecordStatus
   * Description: This function will filter by Status
   * @param {string} RecordStatus
    *****************************************************/
  FilterByStatus(RecordStatus) {
    

    cy.SelectDropDownItem(elems_AccommodationCancellationBookingListing.DRP_RECORDSTATUS, RecordStatus)
    cy.Click(elems_AccommodationCancellationBookingListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }
  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
   * @param {string} Item
    *****************************************************/
  ClickOnTableEntry(Item) {
    

    cy.ClickTableLinkItem(elems_AccommodationCancellationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, "Cancellation Number", Item)
   

  }

  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
   * @param {string} Item
   * @param {string} ColumnName
    *****************************************************/
  VerifyTableEntery(ColumnName, Item) {
    

    cy.VerifyTableEntry(elems_AccommodationCancellationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, ColumnName, Item)
   

  }
  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
    *****************************************************/
  ClickOnTableEntry() {
    

    cy.Click('(//h2[text()="Accommodation Booking Cancellation Listing"]//ancestor::div//table//td//a)[1]')
    cy.wait(4000)
   

  }

  /*****************************************************
   * Method:SelectTableItem
   * Description: This function will select entry by accommodation name
   * @param {string} ColumnName
   * @param {string} ColumnValue
    *****************************************************/
  SelectTableItem(ColumnName, ColumnValue) {
    

    cy.SelectTableItem(elems_AccommodationCancellationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, ColumnName, ColumnValue)
   

  }

}

export default new AccommodationBookingCancellationListing