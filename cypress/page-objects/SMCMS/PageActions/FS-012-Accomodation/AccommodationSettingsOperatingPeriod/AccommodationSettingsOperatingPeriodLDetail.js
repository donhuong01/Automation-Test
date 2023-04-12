import elems_AccommodationSettingsOperatingPeriodListing from '../../../Elements/FS-012-Accomodation/AccommodationSettingsOperatingPeriodListing'
import elems_AccommodationSettingsOperatingPeriodDetail from '../../../Elements/FS-012-Accomodation/AccommodationSettingsOperatingPeriodDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class AccommodationSettingsOperatingPeriodDetail {

    /*****************************************************
    * Method: verify PageTitle
    * Description: Verify Accommodation Settings Operating Period Detail Form
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

    }
    /*****************************************************
     * Method: SaveAsDraft
     * Description: Function click on "SaveAsDraft" button
     *****************************************************/
    SaveAsDraft() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodDetail.BTN_SAVEASDRAFT)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: SubmitForApproval
     * Description: Function click on "SubmitForApproval" button
     *****************************************************/
    SubmitForApproval() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodDetail.BTN_SUBMITFORAPPROVAL)

    }
    /*****************************************************
     * Method: Cancel
     * Description: Function click on "Cancel" button
     *****************************************************/
    Cancel() {

        cy.Click(elems_AccommodationSettingsOperatingPeriodDetail.BTN_CANCEL)

    }
    /*****************************************************
     * Method: EnterOperatingPeriodName
     * Description: This function Enter Operating Period Name
     *****************************************************/
    EnterOperatingPeriodName(Name) {

        cy.EnterText(elems_AccommodationSettingsOperatingPeriodDetail.TXT_OPERATINGPERIODNAME, Name)
        //div[@class="page-title"]//following-sibling::div//table[@class="k-grid-table"]//td[text()="Monday"]//following-sibling::td[2]

    }
    /*****************************************************
     * Method: EnterTypeOfPeakPeriod
     * Description: This function Select Type Of Peak Period
     *****************************************************/
    EnterTypeOfPeakPeriod(Day, PeakPeriod) {

        cy.SelectDropDownItem(`//table//td[text()="${Day}"]/following-sibling::td//span[@class="k-widget k-dropdown"]`, PeakPeriod)
        cy.wait(1000)

    }



}

export default new AccommodationSettingsOperatingPeriodDetail