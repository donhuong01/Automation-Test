import elems_FacilityGroupBookingBallotDetails from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityGroupBookingBallotDetails"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alert from '../../../Elements/Common/Alerts'
import elems_Picker from "../../../Elements/Common/Picker"


class FacilityGroupBookingBallotDetail {

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function will verify page title
     * @param {string} title
     *****************************************************/
    VerifyPageTitle(title) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, title)

    }
    /*****************************************************
     * Method: Save
     * Description: This function will Click on Save button
     *****************************************************/
    Save() {

        cy.Click(elems_FacilityGroupBookingBallotDetails.BTN_SAVE)

    }
    /*****************************************************
     * Method: Cancel
     * Description: This function will click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_FacilityGroupBookingBallotDetails.BTN_CANCEL)

    }
    /*****************************************************
     * Method: Clear
     * Description: This function will click on Clear button
     *****************************************************/
    Clear() {

        cy.Click(elems_FacilityGroupBookingBallotDetails.BTN_CLEAR)

    }

    /*****************************************************
     * Method: SelectFacility
     * Description: This function will select facility
     * @param {string} Facility
     *****************************************************/
    SelectFacility(Facility) {

        cy.SelectPickerItem(elems_FacilityGroupBookingBallotDetails.PCK_FACILITY, "Facility", Facility)

    }

}

export default new FacilityGroupBookingBallotDetail