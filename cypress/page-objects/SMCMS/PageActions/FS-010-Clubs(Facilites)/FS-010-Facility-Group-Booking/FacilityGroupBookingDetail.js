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

        cy.SelectPickerItem(elems_FacilityGroupBookingDetail.PCK_FACILITYTYPE, FacilityType)

    }

    /*****************************************************
     * Method: SelectAvailableSlot
     * Description: This function will select will select Availble slot
     * @param {string} SlotName
     *****************************************************/
     SelectAvailableSlot(SlotName) {

        // cy.Click(`(//div[text()="${SlotName}"])[1]`)
        // cy.wait(3000)
            cy.xpath('(//div[contains(text(),"Available (")])[2]').click({ force: true })
            cy.wait(2000)
    }
    /*****************************************************
     * Method: Facility
     * Description: This function will select Location Name
     * @param {string} Location
     * @param {string} Facilities
     *****************************************************/
    SelectLocationAndFacility(Location, Facilities) {

        cy.Click(elems_FacilityGroupBookingDetail.PCK_LOCATION)
        cy.TickSpecificTableItem(Location)
        //cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Location Name", Location)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.wait(3000)

        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Name", Facilities)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.wait(3000)


    }

}

export default new FacilityGroupBookingDetail