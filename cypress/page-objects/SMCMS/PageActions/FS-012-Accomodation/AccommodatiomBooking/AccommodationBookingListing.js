import elems_AccommodationBookingListing from '../../../Elements/FS-012-Accomodation/AccommodationBookingListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'

class AccommodationBookingListing {

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
   * Method:BookingNo
   * Description: This function will filter by Booking number
   * @param {string} BookingNo
    *****************************************************/
  FilterByBookingNo(BookingNo) {

    cy.EnterText(elems_AccommodationBookingListing.TXT_BOOKINGNO, BookingNo)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }
  /*****************************************************
   * Method:FilterByTransactionType
   * Description: This function will filter by Transaction Type
   * @param {string} TransactionType
    *****************************************************/
  FilterByTransactionType(TransactionType) {

    cy.SelectDropDownItem(elems_AccommodationBookingListing.DRP_TRANSACTIONTYPE, TransactionType)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:FilterByAccomodationName
   * Description: This function will filter by Accommodation Name
   * @param {string} AccommodationName
    *****************************************************/
  FilterByAccomodationName(AccommodationName) {

    cy.SelectPickerFilter(elems_AccommodationBookingListing.PCK_ACCOMMODATIONNAME,
      elems_Picker.TXT_ITEM, elems_AccommodationBookingListing.BTN_SEARCHFILTERACC, AccommodationName)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:AccommodationNo
   * Description: This function will filter by Accommodation Number
   * @param {string} AccommodationNo
   *****************************************************/
    FilterByAccommodationNo(AccommodationNo) {

      cy.EnterText(elems_AccommodationBookingListing.TXT_ACCOMMODATIONNO, AccommodationNo)
      cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:CustomerNRIC
   * Description: This function will filter by Customer NRIC
   * @param {string} CustomerNRIC
   *****************************************************/
    FilterByCustomerNRIC(CustomerNRIC) {

      cy.EnterText(elems_AccommodationBookingListing.TXT_CUSTOMERNAME, CustomerNRIC)
      cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:MemberID
   * Description: This function will filter by Member ID
   * @param {string} MemberID
   *****************************************************/
    FilterByMemberID(MemberID) {

      cy.EnterText(elems_AccommodationBookingListing.TXT_MEMBERID, MemberID)
      cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:CustomerName
   * Description: This function will filter by Member ID
   * @param {string} CustomerName
   *****************************************************/
    FilterByCustomerName(CustomerName) {

      cy.EnterText(elems_AccommodationBookingListing.TXT_CUSTOMERNAME, CustomerName)
      cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
      cy.wait(3000)
  
    }

  /*****************************************************
   * Method:FilterByCollected
   * Description: This function will Filter By Collected
   * @param {string} Collected
    *****************************************************/
  FilterByCollected(Collected) {

    cy.SelectDropDownItem(elems_AccommodationBookingListing.DRP_COLLECTED, Collected)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(3000)

  }

  /*****************************************************
   * Method:FilterByStatus
   * Description: This function will filter by Status
   * @param {string} Status
    *****************************************************/
  FilterByStatus(Status) {
    

    cy.SelectDropDownItem(elems_AccommodationBookingListing.DRP_STATUS, Status)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }

  /*****************************************************
   * Method:FilterByRecordStatus
   * Description: This function will filter by Status
   * @param {string} RecordStatus
    *****************************************************/
  FilterByStatus(RecordStatus) {
    

    cy.SelectDropDownItem(elems_AccommodationBookingListing.DRP_RECORDSTATUS, RecordStatus)
    cy.Click(elems_AccommodationBookingListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }
  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
   * @param {string} Item
    *****************************************************/
  ClickOnTableEntry(Item) {
    

    cy.ClickTableLinkItem(elems_AccommodationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, "Booking Number", Item)
   

  }

  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
   * @param {string} Item
   * @param {string} ColumnName
    *****************************************************/
  VerifyTableEntery(ColumnName, Item) {
    

    cy.VerifyTableEntry(elems_AccommodationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, ColumnName, Item)
   

  }
  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
    *****************************************************/
  ClickOnTableEntry() {
    

    cy.Click('(//h2[text()="Accommodation Booking Listing"]//ancestor::div//table//td//a)[1]')
    cy.wait(4000)
   

  }

  /*****************************************************
   * Method:SelectTableItem
   * Description: This function will select entry by accommodation name
   * @param {string} ColumnName
   * @param {string} ColumnValue
    *****************************************************/
  SelectTableItem(ColumnName, ColumnValue) {
    

    cy.SelectTableItem(elems_AccommodationBookingListing.TBL_ACCOMADATIONBOOKINGLISTING, ColumnName, ColumnValue)
   

  }

}

export default new AccommodationBookingListing