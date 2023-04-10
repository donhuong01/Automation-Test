import elems_FacilitySettingsOperatingPeriodListing from '../../../Elements/Facilities//FS-010-CLUBS(FACILITIES)/FacilitySettingsOperatingPeriodListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
class FacilitySettingsOperatingPeriodListing {


    /*****************************************************
     * Method: Form Title Verification
     * Description: This function Verifies the Form Title
     *
     *****************************************************/
    VerifyPageTitle() {
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Settings - Operating Period Listing")

    }
    /*****************************************************
     * Method: FilloutFilters
     * Description: This function is to filter Operating Period listing
     * @param {string} OperatingPeriodName
     * @param {string} Status
     * @param {string} RecordStatus
     *****************************************************/

    FilloutFilters(OperatingPeriodName, Status, RecordStatus) {
        if (OperatingPeriodName !== undefined) {
            cy.xpath(elems_FacilitySettingsOperatingPeriodListing.TXT_OPERATINGPERIODNAME).clear()
            cy.EnterText(elems_FacilitySettingsOperatingPeriodListing.TXT_OPERATINGPERIODNAME, OperatingPeriodName)
        }

        if (Status !== undefined) {
            cy.SelectDropDownItem(elems_FacilitySettingsOperatingPeriodListing.DRP_STATUS, Status)
        }
        if (RecordStatus !== undefined) {
            cy.SelectDropDownItem(elems_FacilitySettingsOperatingPeriodListing.DRP_RECORDSTATUS, RecordStatus)
        }
        // Error Handling
        if (OperatingPeriodName === undefined
            && Status === undefined
            && RecordStatus === undefined


        ) {
            throw new Error("FacilitySettingsOperatingPeriodListing.Fillout Error!!./n\
                                Please provide at least one argument.")
        }
        cy.Click(elems_FacilitySettingsOperatingPeriodListing.BTN_SEARCHFILTERS)
        cy.wait(3000)
    }
    VerifyTableLink(OperatingPeriodName, Status) {
        cy.Click('(//h2[text()="Settings - Operating Period Listing"]//ancestor::div//table//a)[1]')
        cy.wait(5000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Settings - Operating Period Details")

    }

    ClickTableLink() {

        cy.Click('(//h2[text()="Settings - Operating Period Listing"]//ancestor::div//table//a)[1]')

    }

    DeleteItem(DelOperatingPeriodName, DelStatus) {
        cy.SelectTableItem(elems_FacilitySettingsOperatingPeriodListing.
            TBL_SETTINGSOPERATINGPERIODLISTING,
            'Operating Period Name', DelOperatingPeriodName, 'Status', DelStatus)
        cy.Click(elems_FacilitySettingsOperatingPeriodListing.BTN_DELETE)
        cy.Click(elems_Alerts.BTN_YES)
    }
    CancelDeleteItem(DelOperatingPeriodName, DelStatus) {

        cy.SelectTableItem(elems_FacilitySettingsOperatingPeriodListing.
            TBL_SETTINGSOPERATINGPERIODLISTING,
            'Operating Period Name', DelOperatingPeriodName, 'Status', DelStatus)
        cy.Click(elems_FacilitySettingsOperatingPeriodListing.BTN_DELETE)
        cy.Click(elems_Alerts.BTN_NO)
    }

    CreateNew() {
        cy.Click(elems_FacilitySettingsOperatingPeriodListing.BTN_CREATENEW)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Details')
    }
    ClickOn(ButtonName) {

        cy.Click(`//button[text()="${ButtonName}"]`)
        
    }

    /*****************************************************
     * Method: ClickDelete
     * Description: This function Click on Delete Button
     *****************************************************/
    ClickDelete() {
        cy.Click(elems_FacilitySettingsOperatingPeriodListing.BTN_DELETE)
    }

    /*****************************************************
     * Method: Delete Confirmation button functionality     
     * Description: This function Verifies the delete confirmation "Yes" button functionality 
     *****************************************************/
    DeleteItemYes() {
        cy.Click(elems_Alerts.BTN_YES)

    }

    /*****************************************************
    * Method: Delete Confirmation button functionality     
    * Description: This function Verifies the delete confirmation "Yes" button functionality 
    *****************************************************/
    DeleteItemNo() {
        cy.Click(elems_Alerts.BTN_NO)

    }
    VerifyDeleteNotification() {
        cy.ValidateElementText(elems_Alerts.DELETE_NOTIFICATION, 'Record has been deleted successfully.')
    }
}

export default FacilitySettingsOperatingPeriodListing