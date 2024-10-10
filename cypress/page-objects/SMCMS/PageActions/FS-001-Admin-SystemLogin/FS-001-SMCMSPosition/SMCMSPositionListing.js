import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_SMCMSPositionListing from '../../../Elements/Admin//FS001_Admin-SystemLogin/SMCMSPositionListing'

class PositionListing {
    /*****************************************************
    * Method: verify PageTitle
    * Description: Verify SMCMS Position Listing Page Title
     *****************************************************/
    verifyPageTitle() {
        cy.wait(5000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS Position Listing')
    }

    /*****************************************************
    * Method: Create new
    * Description: Click on create new button in SMCMS Position Listing Form
    *****************************************************/

    createNew() {
        cy.contains('div.page-title h2', 'SMCMS Position Listing').should('exist').then(() => {
            cy.xpath(elems_SMCMSPositionListing.BTN_CREATENEW, { timeout: 10000 }).should('be.visible').click();
        })
        // cy.Click(elems_SMCMSPositionListing.BTN_CREATENEW, 'SMCMS Position Detail')

    }

    /*****************************************************
    * Method: Delete
    * Description: Click on delete button in SMCMS Position Listing Form
    *
    * @param {String} positionName Position Name
    * @param {String} lastDate last date

    *****************************************************/

    Delete(positionName, lastDate) {
        cy.SelectTableItem(elems_SMCMSPositionListing.TBL_SMCMSPOSITIONLISTING,
            'Position Name', positionName,
            // 'Last Updated Date',lastDate
        )

        cy.Click(elems_SMCMSPositionListing.BTN_DELETE)
    }

    /*****************************************************
    * Method: Delete
    * Description: Click on delete button in SMCMS Position Listing Form
    * @param {String} positionName Position Name
    *****************************************************/

    UpdatePosition(positionName) {
        // cy.ClickTableLink(elems_SMCMSPositionListing.TBL_SMCMSPOSITIONLISTING,
        cy.Click('//h2[text()="SMCMS Position Listing"]/ancestor::div//table//a',
            'Position Name', positionName,

        )
        cy.wait(6000)

    }

    /*****************************************************
    * Method: Verify form filter
    * Description: Verify Position Name filter
    *
    * @param {String} positionName Position Name
    * @param {String} lastDate lastDate
    *****************************************************/
    VerifySearchFilter(positionName, lastDate) {
        cy.EnterText(elems_SMCMSPositionListing.TXT_POSITION, positionName)
        cy.Click(elems_SMCMSPositionListing.BTN_SEARCHFILTERS)

        cy.VerifyTableEntry(elems_SMCMSPositionListing.TBL_SMCMSPOSITIONLISTING,
            'Position Name', positionName,
            // 'Last Updated Date',lastDate
        )
    }
    /*****************************************************
    * Method: Verify form Delete popup
    * Description: Verify form Delete confirmation popup
    *
    *****************************************************/
    DeleteConfirmationPopUp() {
        cy.ValidateElementText(elems_SMCMSPositionListing.DELETE_POPUP_TITLE, "Delete Confirmation")
        cy.ValidateElementText(elems_SMCMSPositionListing.DELETE_POPUP_CONTENT, "Are you sure you want to delete this record?")
    }

    /*****************************************************
    * Method: Verify form Delete popup
    * Description: Verify form Delete confirmation popup Yes button
    *
    *****************************************************/
    DeleteConfirmYes() {
        cy.Click(elems_SMCMSPositionListing.BTN_CONFIRM_DELETE_YES)
    }
    /*****************************************************
   * Method: Verify form Delete popup
   * Description: Verify form Delete confirmation popup No button
   *
   *****************************************************/
    DeleteConfirmNo() {
        cy.Click(elems_SMCMSPositionListing.BTN_CONFIRM_DELETE_NO)
    }
    /*****************************************************
    * Method: Verify form Delete popup
    * Description: Verify form Delete confirmation popup Cancel button
    *
    *****************************************************/
    DeleteConfirmCancel() {
        cy.Click(elems_SMCMSPositionListing.BTN_CONFIRM_DELETE_CANCEL)
    }
}
export default PositionListing