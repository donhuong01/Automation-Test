import elems_EDCTerminalListing from '../../Elements/FS-036-SRP/EDCTerminalListing'
import elems_alerts from '../../Elements/Common/Alerts'
import elems_Picker from '../../Elements/Common/Picker'
class EDCTerminalListing {

    /*****************************************************
     * Method: CreateNew 
     * Description: This function Click On Create New Button
     *****************************************************/
    CreateNew() {

        cy.Click(elems_EDCTerminalListing.BTN_CREATENEW)

    }
    /*****************************************************
     * Method: Delete 
     * Description: This function Click On Delete Button
     *****************************************************/
    Delete() {

        cy.Click(elems_EDCTerminalListing.BTN_DELETE)
        cy.Click(elems_alerts.BTN_YES)
        //cy.VerifyElementText(elems_Picker.MSG_NOTIFICATION, "Record has been deleted successfully.")

    }
    /*****************************************************
     * Method: SelectItem 
     * Description: This function Select Table Item 
     *****************************************************/
    SelectItem(TerminalID) {

        cy.SelectTableItem(elems_EDCTerminalListing.TBL_EDCTERMINALLSITING, 'Name', TerminalID)

    }
    /*****************************************************
     * Method: Click On Terminal ID Link 
     * Description: This function Click On Terminal ID Link
     *****************************************************/
    ClickOnTerminalIDLink(TerminalID) {

        cy.ClickTableLinkItem(elems_EDCTerminalListing.TBL_EDCTERMINALLSITING, 'Terminal ID', TerminalID)

    }
    /*****************************************************
     * Method: Filters 
     * Description: 
     *****************************************************/
    Filters(TerminalID, Name, StoreName) {

        cy.EnterText(elems_EDCTerminalListing.TXT_TERMINALID, TerminalID)
        cy.EnterText(elems_EDCTerminalListing.TXT_NAME, Name)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalListing.STORE.PCK_STORE, 2000,
            elems_EDCTerminalListing.STORE.TXT_NAME, StoreName,
            elems_EDCTerminalListing.STORE.BTN_SEARCHFILTERS)
        cy.Click(elems_EDCTerminalListing.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: Filters 
     * Description: 
     *****************************************************/
    FiltersByNameAndStore(Name, StoreName) {

        cy.EnterText(elems_EDCTerminalListing.TXT_NAME, Name)
        cy.wait(3000)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalListing.STORE.PCK_STORE, 2000,
            elems_EDCTerminalListing.STORE.TXT_NAME, StoreName,
            elems_EDCTerminalListing.STORE.BTN_SEARCHFILTERS)
        cy.Click(elems_EDCTerminalListing.BTN_SEARCHFILTERS)

    }
}
export default new EDCTerminalListing