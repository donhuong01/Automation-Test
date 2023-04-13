import elems_AccommodationClosureListing from '../../../Elements/FS-012-Accomodation/AccommodationClosureListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'

class AccommodationClosureListing {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }


  /*****************************************************
   * Method:CreateNew
   * Description: This function click on Create New button
    *****************************************************/
  CreateNew() {
    cy.Click(elems_AccommodationClosureListing.BTN_CREATENEW)

  }
  /*****************************************************
   * Method:SearchFilter
   * Description: This function click on Serach Filter button
    *****************************************************/
  SearchFilter() {
    cy.Click(elems_AccommodationClosureListing.BTN_SEARCHFILTER)

  }
  /*****************************************************
   * Method:FilterAccommodationTypeName
   * Description: This function will filter by Accommodation Name
   * @param {string} AccommodationTypeName
    *****************************************************/
  FilterByAccommodationTypeName(AccommodationTypeName) {
    cy.Click(elems_AccommodationClosureListing.PCK_ACCOMODATIONTYPENAME)
    cy.wait(3000)
    cy.EnterText(elems_AccommodationClosureListing.TXT_ACCOMODATIONTYPE, AccommodationTypeName)
    cy.Click('(//button[text()="Search Filters"])[1]')
    cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Accommodation Type', AccommodationTypeName)
    cy.Click(elems_Picker.BTN_SELECT)


  }
  /*****************************************************
   * Method:FilterByAccommodation
   * Description: This function will filter by Accommodation
   * @param {string} Accommodation
    *****************************************************/
  FilterByAccommodation(Accommodation) {
    

    cy.EnterText(elems_AccommodationClosureListing.TXT_ACCOMODATION, Accommodation)
    cy.Click(elems_AccommodationClosureListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }

  /*****************************************************
   * Method:FilterByStatus
   * Description: This function will filter by Status
   * @param {string} Status
    *****************************************************/
  FilterByStatus(Status) {
    

    cy.SelectDropDownItem(elems_AccommodationClosureListing.DRP_STATUS, Status)
    cy.Click(elems_AccommodationClosureListing.BTN_SEARCHFILTER)
    cy.wait(2000)

  }
  /*****************************************************
   * Method:ClickOnTableEntry
   * Description: This function will click on entry in Accommodation Closure listing
   * @param {string} Item
    *****************************************************/
  ClickOnTableEntry(Item) {
    

    cy.ClickTableLinkItem(elems_AccommodationClosureListing.TBL_ACCOMADATIONCLOSURELISTING, "Accommodation Type Name", Item)
   

  }

}

export default new AccommodationClosureListing