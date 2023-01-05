import elems_FacilityBookingDetails from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingDetails'
import elems_FacilityBookingListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/'
import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_Picker from "../../../Elements/Common/Picker"
import elems_SMCMSShoppingCartAndPayment from '../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'

class FacilityBookingDetail {

    /*****************************************************
     * Method: Verify page title
     * Description: This function verifies the page title
     * @param {string} expectedPg
     *****************************************************/

    verifyPageTitle(expectedPg) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

    }

    /*****************************************************
     * Method: CreateNewFaciltyBooking
     * Description: This function filout facility booking detail form
     * @param {string} LocationName
     * @param {string} FacilityType
     *****************************************************/

    CreateNewFaciltyBooking(LocationName, FacilityType) {

        // Select Location
        cy.SelectPickerFilter(elems_FacilityBookingDetails.PCK_LOCATION,
            elems_FacilityBookingDetails.TXT_NAME, LocationName,
            elems_FacilityBookingDetails.BTN_SEARCHFILTER)

        // Select Facility Type
        cy.SelectPickerFilter(elems_FacilityBookingDetails.PCK_FACILITYTYPE,
            elems_FacilityBookingDetails.TXT_NAME, FacilityType,
            elems_FacilityBookingDetails.BTN_SEARCHFILTER)

    }
    /*****************************************************
     * Method: SelectFacilities
     * Description: This function Select Facilities
     * @param {string} FacilityName
     *****************************************************/

    SelectFacilities(FacilityName) {

        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Name", FacilityName)
        cy.Click(elems_Picker.BTN_SELECT)

    }
    /*****************************************************
     * Method: VerifyBookingInfo
     * Description: This function Verify Booking Information
     * @param {string} Location
     * @param {string} FacilityType
     *****************************************************/

    VerifyBookingInfo(Location, FacilityType) {

        cy.ValidateElementText(elems_FacilityBookingDetails.LBL_LOCATION, Location)
        cy.ValidateElementText(elems_FacilityBookingDetails.LBL_FACILITYTYPE, FacilityType)

    }

    /*****************************************************
     * Method: AddWaiver
     * Description: This function add waiver
     * @param {string} Type
     * @param {string} Amount
     * @param {string} Reason
     *****************************************************/

    AddWaiver(Type, Amount, Reason) {

        cy.Click(elems_FacilityBookingDetails.BTN_ADDWAIVER)
        cy.wait(2000)
        cy.SelectDropDownItem(elems_FacilityBookingDetails.DRP_CHARGETYPE, Type)
        cy.EnterText(elems_FacilityBookingDetails.TXT_AMOUNT, Amount)
        cy.EnterText(elems_FacilityBookingDetails.TXT_REASON, Reason)
        cy.Click(elems_FacilityBookingDetails.BTN_CONFIRM)
        cy.wait(2000)

    }

    /*****************************************************
     * Method: SelectSlot
     * Description: This function Select facility Slot
     * @param {string} SlotName
     *****************************************************/

    SelectSlot(SlotName) {

        cy.xpath(elems_FacilityBookingDetails.TBL_SLOT).should('have.text', SlotName).click()
        cy.wait(3000)
    }

    /*****************************************************
    * Method: CreateNew
    * Description: This function clicks on create new button
    *****************************************************/
    CreateNew() {

        // Click on create new button
        cy.Click(elems_FacilityBookingListing.BTN_CREATENEW)
        cy.wait(2000)
    }
    /*****************************************************
    * Method: Cancel
    * Description: This function clicks on Cancel button
    *****************************************************/
    Cancel() {

        cy.Click(elems_FacilityBookingDetails.BTN_CANCEL)
        cy.wait(2000)
    }
    /*****************************************************
    * Method: Save
    * Description: This function clicks on Save button
    *****************************************************/
    Save() {

        cy.Click(elems_FacilityBookingDetails.BTN_SAVE)
        cy.wait(10000)
    }


    /*****************************************************
     * Method: Fill out Payment Mode Amount and Apply PAyment
     * Description: Fill out Payment Mode
     * @param {string} PaymentMode Payment Mode
     *****************************************************/
    fillOutandApplyPayment(PaymentMode) {


        cy.SelectDropDownItem(elems_SMCMSShoppingCartAndPayment.Payments.DRP_PAYMENTMODE, PaymentMode)

        cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.LBL_REMAININGBALANCE).then($balance => {

            const blnc = $balance.text().trim()

            console.log(blnc)
            cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).clear()
            cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).type(blnc)

        })
        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT)
        cy.wait(3000)

        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_PAYNOW)
        cy.wait(5000)


    }

    /*****************************************************
    * Method: SearchWithNRIC
    * Description: This function will fiter table item with nric
    * @param {string} NRIC 
    *****************************************************/
    SearchWithNRIC(NRIC) {
        cy.EnterText(elems_FacilityBookingListing.TXT_CUSTOMERNRIC, NRIC)
        cy.wait(1000)
        cy.Click(elems_FacilityBookingListing.BTN_SEARCHFILTER)

    }

    /*****************************************************
     * Method: VerifyFacilityBooking
     * Description: This function will Verify Facility Booking
     * @param {string} MemberId 
     * @param {string} status 
     * @param {string} RecordStatus 
     *****************************************************/
    VerifyFacilityBooking(MemberId, status, RecordStatus) {
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "Member ID", MemberId)
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "Status", status)
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "Record Status", RecordStatus)

    }




}

export default new FacilityBookingDetail