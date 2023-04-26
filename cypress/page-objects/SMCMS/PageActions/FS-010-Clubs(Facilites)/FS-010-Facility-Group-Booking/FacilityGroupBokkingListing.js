import elems_FacilityGroupBookingBallotListing from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityGroupBookingBallotListing"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alert from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'


class FacilityGroupBookingBallotListing {

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function will verify page title
     * @param {string} text
     *****************************************************/
    VerifyPageTitle(text) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, text)

    }

    /*****************************************************
     * Method: CreateNew
     * Description: This function will Click on create new button
     *****************************************************/
    CreateNew() {

        cy.Click(elems_FacilityGroupBookingBallotListing.BTN_CREATENEW)

    }

    /*****************************************************
     * Method: FilterByBookingNo 
     * Description: This function will filter by Booking Number
     * @param {string} BookingNo
     *****************************************************/
    FilterByBookingNo(BookingNo) {

        cy.EnterText(elems_FacilityGroupBookingBallotListing.TXT_BOOKINNO, BookingNo)

    }
    /*****************************************************
     * Method: FilterByFacility
     * Description: This function will Filter By Facility
     * @param {string} Facility
     *****************************************************/
    FilterByFacility(Facility) {

        cy.Click(elems_FacilityGroupBookingBallotListing.PCK_FACILITY)
        cy.EnterText(elems_FacilityGroupBookingBallotListing.PCK_FACILITY, Facility)
        cy.Click(elems_FacilityGroupBookingBallotListing.BTN_FACILITYSEARCHFILTER)
        cy.wait(3000)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Facility", Facility)
        cy.Click(elems_Picker.BTN_SELECT)

    }

    /*****************************************************
     * Method:FilterByStartDateFrom
     * Description: This function will Filter by start date from
     * @param {string} StartFrom
     *****************************************************/
    FilterByStartDateFrom(StartFrom) {

        cy.EnterDate(elems_FacilityGroupBookingBallotListing.DATE_STARTFROM, StartFrom)

    }
    /*****************************************************
     * Method:FilterByStartDateTO
     * Description: This function will Filter by start date to
     * @param {string} StartTo
     *****************************************************/
    FilterByStartDateTO(StartTo) {

        cy.EnterDate(elems_FacilityGroupBookingBallotListing.DATE_ENDTO, StartTo)

    }
    /*****************************************************
     * Method:FilterByEndDateFrom
     * Description: This function will Filter by end date from
     * @param {string} EndFrom
     *****************************************************/
    FilterByEndDateFrom(EndFrom) {

        cy.EnterDate(elems_FacilityGroupBookingBallotListing.DATE_ENDFROM, EndFrom)

    }
    /*****************************************************
     * Method:FilterByEndDateTo
     * Description: This function will Filter by end date to
     * @param {string} EndTo
     *****************************************************/
    FilterByEndDateTo(EndTo) {

        cy.EnterDate(elems_FacilityGroupBookingBallotListing.DATE_STARTFROM, EndTo)

    }

    /*****************************************************
     * Method:ClickOnSearchFilter
     * Description: This function will click on Search Filter button
     *****************************************************/
    ClickOnSearchFilter() {

        cy.Click(elems_FacilityGroupBookingBallotListing.BTN_SEARCHFILTER)


    }
    /*****************************************************
     * Method:ClickOnTableItemLink
     * Description: This function will click On Table Item Link
     *****************************************************/
    ClickOnTableItemLink() {

        cy.Click('(//h2[text()="Facility Group Booking Ballot Listing"]//ancestor::div//table//td//a)[1]')

    }
    

}

export default new FacilityGroupBookingBallotListing