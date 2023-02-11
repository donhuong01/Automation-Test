import elems_AccommodationSettingsOperatingPeriodListing from '../../../Elements/FS-012-Accomodation/AccommodationSettingsOperatingPeriodListing'
import elems_AccommodationSettingsOperatingPeriodDetail from '../../../Elements/FS-012-Accomodation/AccommodationSettingsOperatingPeriodDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'

class AccommodationSettingsOperatingPeriodListing {

    /*****************************************************
    * Method: verify PageTitle
    * Description: Verify Accommodation Settings Operating Period Listing Form
    * @param {string} ExpectedPg 
     *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }

    /*****************************************************
     * Method: CreateNew
     * Description: Function click on "Create New" button
     *****************************************************/
    CreateNew() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodListing.BTN_CREATENEW)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: Delete
     * Description: Function click on "Delete" button
     *****************************************************/
    Delete() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodListing.BTN_DELETE)
        cy.wait(2000)
        cy.Click(elems_Alerts.BTN_YES)
        cy.wait(2000)



    }

    /*****************************************************
     * Method: FilterByAll
     * Description: This Function filter by operating period name, status and record status 
     * @param {string} OperatingPeriodName
     * @param {string} Status
     * @param {string} RecordStatus
     *****************************************************/
    FilterByAll(OperatingPeriodName, Status, RecordStatus) {

        if (OperatingPeriodName != undefined) {
            cy.EnterText(elems_AccommodationSettingsOperatingPeriodListing.TXT_OPERATINGPERIODNAME, OperatingPeriodName)
        }

        if (Status != undefined) {
            cy.SelectDropDownItem(elems_AccommodationSettingsOperatingPeriodListing.DRP_STATUS, Status)
        }

        if (RecordStatus != undefined) {
            cy.SelectDropDownItem(elems_AccommodationSettingsOperatingPeriodListing.DRP_RECORDSTATUS, RecordStatus)
        }


    }
    /*****************************************************
     * Method: FilterByOperatingPeriodName
     * Description: This Function filter by operating period name
     * @param {string} OperatingPeriodName
     *****************************************************/
    FilterByOperatingPeriodName(OperatingPeriodName) {

        if (OperatingPeriodName != undefined) {
            cy.EnterText(elems_AccommodationSettingsOperatingPeriodListing.TXT_OPERATINGPERIODNAME, OperatingPeriodName)
            cy.Click(elems_AccommodationSettingsOperatingPeriodListing.BTN_SEARCHFILTER)
        }

    }

    /*****************************************************
     * Method: ClickSearchFilter
     * Description: Function clicks on "Search Filter" button
     *****************************************************/
    ClickSearchFilter() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodListing.BTN_SEARCHFILTER)
        cy.wait(3000)

    }
    /*****************************************************
     * Method: VerifyTableEntry
     * Description: Function verifies table entry
     * @param {string} OperatingPeriodName
     *****************************************************/
    VerifyTableEntry(OperatingPeriodName) {

        cy.VerifyTableEntry(elems_AccommodationSettingsOperatingPeriodListing.TBL_SETTINGSOPERATINGPERIODLISTING,
            "Operating Period Name", OperatingPeriodName)

    }
    /*****************************************************
     * Method: VerifyItemStatus
     * Description: Function verifies table entry
     * @param {string} Status
     *****************************************************/
    VerifyItemStatus(Status) {

        cy.VerifyTableEntry(elems_AccommodationSettingsOperatingPeriodListing.TBL_SETTINGSOPERATINGPERIODLISTING,
            "Status", Status)

    }

    /*****************************************************
     * Method: ClickOnTableEntry
     * Description: Function verifies table entry
     * @param {string} OperatingPeriodName
     *****************************************************/
    ClickOnTableEntry(OperatingPeriodName) {

        cy.ClickTableLink(elems_AccommodationSettingsOperatingPeriodListing.TBL_SETTINGSOPERATINGPERIODLISTING,
            "Operating Period Name", OperatingPeriodName)

    }
    /*****************************************************
     * Method: SelectItem
     * Description: Function Select table entry
     * @param {string} OperatingPeriodName
     *****************************************************/
    SelectItem(OperatingPeriodName) {

        cy.SelectTableItem(elems_AccommodationSettingsOperatingPeriodListing.TBL_SETTINGSOPERATINGPERIODLISTING,
            "Operating Period Name", OperatingPeriodName)

    }

}

export default new AccommodationSettingsOperatingPeriodListing