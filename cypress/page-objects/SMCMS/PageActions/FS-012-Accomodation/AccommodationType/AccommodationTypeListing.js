import elems_AccommodationTypeDetail from '../../../Elements/FS-012-Accomodation/AccommodationTypeDetail'
import elems_AccommodationTypeListing from '../../../Elements/FS-012-Accomodation/AccommodationTypeListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class AccommodationTypeListing {

    /*****************************************************
      * Method: verify PageTitle
      * Description: Verify Accommodation Type Listing Form
      * @param {string} ExpectedPg 
       *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }

    /*****************************************************
    * Method: CreateNew
    * Description: This function clicks on Create New button
     *****************************************************/
    CreateNew() {
        cy.Click(elems_AccommodationTypeListing.BTN_CREATENEW)
        cy.wait(2000)

    }

    /*****************************************************
    * Method: FilterByAll
    * Description: This function filter item by Accomodation type number, name, status and record status
    * @param {string} AccoTypeNo
    * @param {string} AccoTypeName 
    * @param {string} Status 
    * @param {string} RecordStatus 
     *****************************************************/
    FilterByAll(AccoTypeNo, AccoTypeName, Status, RecordStatus) {

        if (AccoTypeNo != undefined) {
            cy.EnterText(elems_AccommodationTypeListing.TXT_ACCOMODATIONTYPENO, AccoTypeNo)
        }
        if (AccoTypeName != undefined) {
            cy.EnterText(elems_AccommodationTypeListing.TXT_ACCOMODATIONTYPENAME, AccoTypeName)
        }
        if (Status != undefined) {
            cy.SelectDropDownItem(elems_AccommodationTypeListing.DRP_STATUS, Status)
        }
        if (RecordStatus != undefined) {
            cy.SelectDropDownItem(elems_AccommodationTypeListing.DRP_RECORDSTATUS, RecordStatus)
        }

    }
    /*****************************************************
    * Method: FilterByStatus
    * Description: This function filter item by Accomodation type status
    * @param {string} Status 
     *****************************************************/
    FilterByStatus(Status) {


        if (Status != undefined) {
            cy.SelectDropDownItem(elems_AccommodationTypeListing.DRP_STATUS, Status)
        }


    }
    /*****************************************************
    * Method: FilterByRecordStatus
    * Description: This function filter item by Accomodation type record status
  
    * @param {string} RecordStatus 
     *****************************************************/
    FilterByRecordStatus(RecordStatus) {

        if (RecordStatus != undefined) {
            cy.SelectDropDownItem(elems_AccommodationTypeListing.DRP_RECORDSTATUS, RecordStatus)
        }

    }
    /*****************************************************
    * Method: FilterByAccommodationName
    * Description: This function filter item by Accomodation type name
    * @param {string} AccoTypeName 
     *****************************************************/
    FilterByAccommodationName(AccoTypeName) {


        if (AccoTypeName != undefined) {
            cy.EnterText(elems_AccommodationTypeListing.TXT_ACCOMODATIONTYPENAME, AccoTypeName)
        }


    }
    /*****************************************************
    * Method: FilterByAccommNumber
    * Description: This function filter item by Accomodation type number
    * @param {string} AccoTypeNo
  
     *****************************************************/
    FilterByAccommNo(AccoTypeNo) {

        if (AccoTypeNo != undefined) {
            cy.EnterText(elems_AccommodationTypeListing.TXT_ACCOMODATIONTYPENO, AccoTypeNo)
        }

    }
    /*****************************************************
    * Method: SearchFilter
    * Description: This function clicks on SearchFilter button
     *****************************************************/
    SearchFilter() {
        cy.Click(elems_AccommodationTypeListing.BTN_SEARCHFILTER)
        cy.wait(4000)

    }
    /*****************************************************
    * Method: VerifyItemStatus
    * Description: This function Verify Item Status and record status
     *****************************************************/
    VerifyItemStatus(Status, RecordStatus) {

        cy.VerifyTableEntry(elems_AccommodationTypeListing.TBL_TBLACCOMADATIONTYPELISTING, 'Status', Status)
        cy.VerifyTableEntry(elems_AccommodationTypeListing.TBL_TBLACCOMADATIONTYPELISTING, 'Record Status', RecordStatus)

    }
    /*****************************************************
    * Method: ClickOnTableEntry
    * Description: This function clicks on Table Entry
     *****************************************************/
    ClickOnTableEntry() {
        cy.Click('(//div[@class="page-title"]//following-sibling::div//table//a)[1]')
        cy.wait(3000)

    }

}
export default new AccommodationTypeListing