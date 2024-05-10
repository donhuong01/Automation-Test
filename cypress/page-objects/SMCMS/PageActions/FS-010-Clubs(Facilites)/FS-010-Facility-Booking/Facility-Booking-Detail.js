import elems_FacilityBookingDetails from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingDetails'
import elems_FacilityBookingListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingListing'
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

    CreateNewFaciltyBooking(FacilityType, LocationName, Facilites) {

        // Select Facility Type
        // cy.Click(elems_FacilityBookingDetails.PCK_FACILITYTYPE)
        // cy.wait(3000)
        // cy.Click(`//table//td[text()="${FacilityType}"]//preceding-sibling::td`)
        // cy.Click(elems_FacilityBookingDetails.BTN_SELECT)
        // cy.wait(4000)
        cy.SelectPickerFilter(elems_FacilityBookingDetails.PCK_FACILITYTYPE,
            elems_FacilityBookingDetails.TXT_NAME, FacilityType,
            elems_FacilityBookingDetails.BTN_SEARCHFILTER)
        cy.wait(2000)

        // Select Location
        cy.Click(elems_FacilityBookingDetails.PCK_LOCATION)
        cy.wait(3000)
        cy.Click(`//table//td[text()="${LocationName}"]//preceding-sibling::td`)
        cy.Click(elems_FacilityBookingDetails.BTN_SELECT)
        cy.wait(4000)

        // Select Facilities
        // cy.Click(elems_FacilityBookingDetails.PCK_LOCATION)
        cy.wait(3000)
        //cy.Click('//a[text()="3"]') //Please Comment when in UAT

        cy.Click(`//table//td[text()="${Facilites}"]//preceding-sibling::td`)
        cy.Click(elems_FacilityBookingDetails.BTN_SELECT)
        cy.wait(4000)

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

    VerifyBookingInfo(FacilityType, Location) {

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

      
            cy.wait(3000)
            cy.xpath('(//div[contains(text(),"Available (")])[2]').click({ force: true })
            cy.wait(2000)
            //cy.xpath('(//div[contains(text(),"Available (")])[2]').click({ force: true })
    
  

        // if (`(//div[text()="OnHold (${SlotName})"])[1]` || `(//div[text()="Booked (${SlotName})"])[1]` || undefined) {
        //     cy.Click(`(//div[text()="Available (${SlotName})"])[1]`)
        //     cy.wait(3000)
        // }

        // else if (`(//div[text()="OnHold (${SlotName})"])[2]` || `(//div[text()="Booked (${SlotName})"])[2]` || undefined) {
        //     cy.Click(`(//div[text()="Available (${SlotName})"])[1]`)
        //     cy.wait(3000)
        // }

        // else if (`(//div[text()="OnHold (${SlotName})"])[3]` || `(//div[text()="Booked (${SlotName})"])[3]` || undefined) {
        //     cy.Click(`(//div[text()="Available (${SlotName})"])[1]`)
        //     cy.wait(3000)
        // }

        // else if (`(//div[text()="OnHold (${SlotName})"])[4]` || `(//div[text()="Booked (${SlotName})"])[4]` || undefined) {
        //     cy.Click(`(//div[text()="Available (${SlotName})"])[1]`)
        //     cy.wait(3000)
        // }

        // else if (`(//div[text()="OnHold (${SlotName})"])[5]` || `(//div[text()="Booked (${SlotName})"])[5]` || undefined) {
        //     cy.Click(`(//div[text()="Available (${SlotName})"])[1]`)
        //     cy.wait(3000)
        // }
        // else {
        //     cy.log("The given time is unavailable please changed")
        // }

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
    * Method: Add to Cart
    * Description: This function clicks on Save button
    *****************************************************/
    AddtoCart() {

        cy.Click(elems_FacilityBookingDetails.BTN_ADDTOCART)
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
    * Method: SearchWithCustomerName
    * Description: This function will fiter table item with nric
    * @param {string} CustomerName
    *****************************************************/
    SearchWithCustomerName(CustomerName) {
        cy.EnterText(elems_FacilityBookingListing.TXT_CUSTOMERNAME, CustomerName)
        cy.wait(1000)
        cy.Click(elems_FacilityBookingListing.BTN_SEARCHFILTER)
    }

    /*****************************************************
     * Method: VerifyFacilityBooking
     * Description: This function will Verify Facility Booking
     * @param {string} NRIC
     * @param {string} status
     * @param {string} RecordStatus
     *****************************************************/
    VerifyFacilityBooking(/*NRIC,*/ status, RecordStatus) {
        //cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "NRIC", NRIC)
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "Status", status)
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, "Record Status", RecordStatus)

    }




}

export default new FacilityBookingDetail