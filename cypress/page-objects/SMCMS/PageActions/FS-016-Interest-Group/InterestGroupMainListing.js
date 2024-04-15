import elems_InterestGroupMainListing from '../../Elements/Interest Group/InterestGroupMainListing'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_Alerts from '../../Elements/Common/Alerts'
import elems_Picker from '../../Elements/Common/Picker'
import Commons from '../Common/Common'

const common = new Commons()
class InterestGroupMainListing {

    /*****************************************************
     * Method: Create New
     * Description: Click on create new button
    *****************************************************/
    CreateNew() {
        cy.Click(elems_InterestGroupMainListing.BTN_CREATENEW)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: Delete
     * Description: Click on Delete button
    *****************************************************/
    Delete() {
        cy.Click(elems_InterestGroupMainListing.BTN_DELETE)

    }

    /*****************************************************
     * Method: ClickYesInDeleteConfirmationPopUp
     * Description: Click on Yes button in delete confirmation popup
    *****************************************************/
    ClickYesInDeleteConfirmationPopUp(Msg) {

        cy.Click(elems_Alerts.BTN_YES)
        cy.wait(2000)
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)

    }

    /*****************************************************
     * Method: VerifyPageTitle
     * Description:This function verifies page title
     * @param {string} PageTitle
    *****************************************************/
         VerifyPageTitle(PageTitle) {
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, PageTitle)
            cy.wait(2000)
        }
    /*****************************************************
     * Method: FilterValueByBusinessType
     * Description: Filter Table Item by BussinessType
     * @param {string} Name
     * @param {string} BussinessType
     * @param {string} Status 
    *****************************************************/
    FilterValueByBusinessType(Name, BussinessType, Status) {

        cy.SelectDropDownItem(elems_InterestGroupMainListing.DRP_BUSINESSTYPE, BussinessType)
        cy.Click(elems_InterestGroupMainListing.BTN_SEARCHFILTER)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Business Type', BussinessType)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Status', Status)
        

    }

    /*****************************************************
     * Method: VerifyTableEntries
     * Description: This function verifies table entries status and name
    *****************************************************/
        VerifyTableEntries(Name, Status) {

        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Status', Status)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)

    }

    /*****************************************************
     * Method: FilterValueByStatus
     * Description: Filter Table Item by Status
     * @param {string} Name
     * @param {string} BussinessType
     * @param {string} Status 
    *****************************************************/
    FilterValueByStatus(Name, BussinessType, Status) {

        cy.SelectDropDownItem(elems_InterestGroupMainListing.DRP_STATUS, BussinessType)
        cy.SelectDropDownItem(elems_InterestGroupMainListing.DRP_STATUS, Status)
        cy.Click(elems_InterestGroupMainListing.BTN_SEARCHFILTER)
        common.ClickLastPage()
       cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Status', Status)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Business Type', BussinessType)



    }

    /*****************************************************
     * Method: SelectTableEntry
     * Description:  Select Table Item 
     * @param {string} Name
    *****************************************************/
    SelectTableEntry(Name) {

        cy.SelectTableItem(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)

    }

    /*****************************************************
     * Method: ClickTableItem
     * Description:  Click on Table Item 
     * @param {string} Name
     *****************************************************/
    ClickTableLink(Name) {

        cy.ClickTableLinkItem(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)
        cy.wait(2000)
    }

}
export default new InterestGroupMainListing