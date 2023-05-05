import elems_FacilityBookingAmendmentDetail from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingAmendmentDetail"
import elems_FacilityBookingAmendmentListing from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingAmendmentListing"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alert from '../../../Elements/Common/Alerts'
import elems_SMCMSShoppingCartAndPayment from '../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'


class FacilityBookingAmendment {

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
     * Description: This function click on create new button
     *****************************************************/
    CreateNew() {

        cy.Click(elems_FacilityBookingAmendmentListing.BTN_CREATENEW)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: SelectTypeOfAmendment
     * Description: This function value from Type of Admendment dropdown
     * @param {string} AmendmentType
     *****************************************************/
    SelectTypeOfAmendment(AmendmentType) {

        cy.SelectDropDownItem(elems_FacilityBookingAmendmentDetail.DRP_TYPEOFAMENDMENT, AmendmentType)
        cy.wait(3000)
    }


    /*****************************************************
     * Method: SelectFacilityBooking
     * Description: This function Select Facility Booking
     * @param {string} CustomerName
     *****************************************************/
    SelectFacilityBooking(CustomerName) {
        cy.wait(1000)
        cy.SelectPickerFilter(
            elems_FacilityBookingAmendmentDetail.PCK_FACILITYBOOKING,
            elems_FacilityBookingAmendmentDetail.TXT_BOOKINGNUMBER,
            CustomerName,
            elems_FacilityBookingAmendmentDetail.BTN_SEARCHFILTER,
        )


    }

    /*****************************************************
     * Method: FilloutAmendmentInfo
     * Description: This function fill out amendement information form
     * @param {string} Reason
     * @param {string} check
     *****************************************************/
    FilloutAmendmentInfo(Reason, check) {

        cy.EnterText(elems_FacilityBookingAmendmentDetail.TXTAREA_REASON, Reason)
        cy.wait(1000)
        cy.TickCheckBox(elems_FacilityBookingAmendmentDetail.CHK_SHOWBOOKINGDETAIL, check)
    }

    /*****************************************************
     * Method: ClearSelectedBooking
     * Description: This function Click Clear Selected Booking
     *****************************************************/
    ClearSelectedBooking() {
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_CLEARSELECTEDBOOKING)

    }
    /*****************************************************
     * Method: Submit
     * Description: This function Click on submit button
     *****************************************************/
    Submit() {
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_SUBMIT)

    }

    /*****************************************************
     * Method: AddWaiver
     * Description: This function add waiver 
     * @param {string} Amount
     * @param {string} Reason
     *****************************************************/
    // AddWaiver(Amount, Reason) {
    //     cy.wait(1000)
    //     cy.Click(elems_FacilityBookingAmendmentDetail.BTN_ADDWAIVEROFF)
    //     cy.wait(1000)
    //     cy.Click(elems_FacilityBookingAmendmentDetail.DRP_CHARGETYPE)
    //     cy.wait(1000)
    //     cy.xpath('(//li[text()="Rate 111"])[1]').click()
    //     cy.EnterText(elems_FacilityBookingAmendmentDetail.TXT_AMOUNT, Amount)
    //     cy.EnterText(elems_FacilityBookingAmendmentDetail.TXT_REASON, Reason)
    //     cy.wait(1000)
    //     cy.Click(elems_FacilityBookingAmendmentDetail.BTN_CONFIRM)
    //     cy.wait(2000)
    // }

    /*****************************************************
     * Method: SelectSlot
     * Description: This function select available slot
     * @param {string} slot
     *****************************************************/
    SelectSlot() {
        cy.wait(3000)
        // cy.xpath('(//div[text()="Available (10:00 am - 11:00 am)"])[1]').click()
        // cy.xpath(`(//div[text()="${slot}"])[1]`).click()
        // cy.xpath('(//div[@class="k-event-template k-event-template"])[1]').should('have.at', 'Available (').click()
        // cy.xpath('//div[@class="k-event-template k-event-template"]')
        cy.xpath('(//div[contains(text(),"Available (")])[1]').click({ force: true })
        cy.wait(2000)
        cy.xpath('(//div[contains(text(),"Available (")])[1]').click({ force: true })

    }


    /*****************************************************
     * Method: VerifyNotification
     * Description: This function will verify notification msg
     * @param {string} msg
     *****************************************************/
    VerifyNotification(msg) {
        cy.ValidateElementText(elems_Alert.NOTIFICATION_MESSAGE, msg)
    }
    /*****************************************************
     * Method: AddResource
     * Description: This function will verify notification msg
     * @param {string} ResourceName
     *****************************************************/
    AddResource(ResourceName) {
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_ADDRESOURCE)
        cy.wait(3000)
        cy.SelectTableItem(elems_FacilityBookingAmendmentDetail.TBL_SELECTRESOURCE, 'Resource', ResourceName)
        cy.wait(1000)
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_SELECT)

    }

    /*****************************************************
     * Method: VerifyFacilityExtention
     * Description: This function will verify facility extention
     * @param {string} CustomerName
     * @param {string} Status
     *****************************************************/
    VerifyFacilityAmendment(CustomerName, Status) {
        cy.EnterText(elems_FacilityBookingAmendmentDetail.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_SEARCHFILTER)
        cy.wait(2000)
        cy.VerifyTableEntry(elems_FacilityBookingAmendmentListing.TBL_AMENDMENTLISTING, 'Member Name', CustomerName)
        cy.VerifyTableEntry(elems_FacilityBookingAmendmentListing.TBL_AMENDMENTLISTING, 'Status', Status)
    }

    /*****************************************************
     * Method: VerifyFacilityExtentionDetail
     * Description: This function will verify notification msg
     * @param {string} CustomerName
     * @param {string} Status
     *****************************************************/
    VerifyFacilityExtentionDetail(CustomerName) {

        cy.xpath('(//h2[text()="Facility Booking Extension Listing"]/parent::div/following-sibling::div//table//a)[1]').click()
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityBookingAmendmentDetail.LBL_CUSTOMERNAME, CustomerName)
    }

    /*****************************************************
     * Method: Cancel
     * Description: This function Click button Cancel
     *****************************************************/
    Cancel() {
        cy.Click(elems_FacilityBookingAmendmentDetail.BTN_CANCEL)
    }

    /*****************************************************
     * Method: VerifyDetailInfo
     * Description: This function Verify Detail Info
     *****************************************************/
    VerifyDetailInfo() {
        cy.xpath(elems_FacilityBookingAmendmentDetail.LBL_TYPEOFINVOICING).should('be.visible')
        cy.xpath(elems_FacilityBookingAmendmentDetail.LBL_FACILITYCHARGERATE).should('be.visible')
        cy.xpath(elems_FacilityBookingAmendmentDetail.LBL_FACILITYTYPECHARGERATE).should('be.visible')
    }


    /*****************************************************
     * Method: VerifyExtentionUpdate
     * Description: This function Verify Detail Info
     * @param {string} CustomerName
     * @param {string} startDate
     * @param {string} EndDate
     *****************************************************/
    VerifyAmendmentUpdate(CustomerName, startDate, EndDate) {
        cy.xpath(elems_FacilityBookingAmendmentListing.TXT_CUSTOMERNAME).type(CustomerName)
        cy.xpath(elems_FacilityBookingAmendmentListing.BTN_SEARCHFILTERS).click()
        cy.wait(2000)
        cy.VerifyTableEntry(elems_FacilityBookingAmendmentListing.TBL_AMENDMENTLISTING, 'Start Date', startDate)
        cy.VerifyTableEntry(elems_FacilityBookingAmendmentListing.TBL_AMENDMENTLISTING, 'End Date', EndDate)
    }                       //h2[text()="Facility Booking Amendment Listing"]/parent::div/following-sibling::div//table

    /*****************************************************
     * Method: ShoppinCart
     * Description: This function click on shopping cart icon
     *****************************************************/
    ShoppinCart() {

        cy.Click(elems_PageHeader.BTN_SHOPPINGCART)
        cy.wait(5000)
        // cy.xpath(elems_PageHeader.DRP_USERLINKS).click()
        // cy.wait(2000)
        // cy.xpath('//ul//li').contains('A-').click()

        //   .should('contain.text', 'Standard').select('Standard')
        //   cy.xpath(elems_PageHeader.DRP_USERLINKS).then(($select)=> {

        //    const slct = $select.find('//select//option')

        //    cy.wrap(slct).should('contain.text', 'A-').click()
        //   })
        // //   .select(0)
        //   cy.xpath('//span').should('contain', 'A-').click()

        //   cy.wait(3000)
        // cy.select([0])

        // cy.xpath('//label[@for="lblMemberId"]').then($MemID => {

        //     const MemberID = $MemID.text().trim()
        //     console.log(MemberID)

        // })
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
        cy.wait(3000)


    }


}

export default new FacilityBookingAmendment