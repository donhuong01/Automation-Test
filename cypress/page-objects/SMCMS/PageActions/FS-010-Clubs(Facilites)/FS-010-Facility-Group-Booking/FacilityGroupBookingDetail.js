import elems_FacilityGroupBookingDetail from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityGroupBookingDetail"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alert from '../../../Elements/Common/Alerts'
import elems_Picker from "../../../Elements/Common/Picker"


class FacilityGroupBookingDetail {

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

        cy.Click(elems_FacilityGroupBookingDetail.BTN_SAVE)

    }
    /*****************************************************
     * Method: Cancel
     * Description: This function will click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_FacilityGroupBookingDetail.BTN_CANCEL)

    }


    /*****************************************************
     * Method: SelectFacilityType
     * Description: This function will select facility type
     * @param {string} FacilityType
     *****************************************************/
    SelectFacilityType(FacilityType) {

        cy.SelectPickerItem(elems_FacilityGroupBookingDetail.PCK_FACILITYTYPE, "", FacilityType)

    }

    /*****************************************************
     * Method: Facility
     * Description: This function will select Location Name
     * @param {string} Location
     * @param {string} Facilities
     *****************************************************/
    SelectLocation(Location, Facilities) {

        cy.Click(elems_FacilityGroupBookingDetail.PCK_LOCATION)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Location Name", Location)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.wait(3000)

        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Booking Setup", Facilities)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.wait(3000)


    }

}

export default new FacilityGroupBookingDetail