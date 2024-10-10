import elems_FacilityBookingExtension from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingExtension"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alert from '../../../Elements/Common/Alerts'
import elems_SMCMSShoppingCartAndPayment from '../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'


class FacilityBookingExtension {

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

        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONLISTING.BTN_CREATENEW)
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
            elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.PCK_FACILITYBOOKING,
            elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.TXT_CUSTOMERNAME,
            CustomerName,
            elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.BTN_FILTERBOOKING,
        )
        // cy.wait(2000)
    }
    /*****************************************************
     * Method: AddWaiver
     * Description: This function add waiver 
     * @param {string} Amount
     * @param {string} Reason
     *****************************************************/
    AddWaiver(Amount, Reason) {
        cy.wait(1000)
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.BTN_ADDWAIVEROFF)
        cy.wait(1000)
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.DRP_CHARGETYPE)
        cy.wait(1000)
        cy.xpath('(//li[text()="Rate 111"])[1]').click()
        cy.EnterText(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.TXT_AMOUNT, Amount)
        cy.EnterText(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.TXT_REASON, Reason)
        cy.wait(1000)
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.BTN_CONFIRM)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: SelectSlot
     * Description: This function select available slot
     *****************************************************/
    SelectSlot() {
        cy.wait(1000)
        cy.xpath('(//div[contains(text(),"Available (")])[1]').click({ force: true })

    }
    /*****************************************************
     * Method: FixedTimeSlot
     * Description: This function select available slot
     *****************************************************/
    FixedTimeSlot() {
        cy.wait(1000)
        cy.xpath('(//div[text()="Available (09:00 am - 10:00 am)"])[1]').click()
        // cy.wait(1000)
        // cy.xpath('(//div[text()="Available (10:00 am - 11:00 am)"])[1]').click()

    }

    /*****************************************************
     * Method: Submit
     * Description: This function Click on submit button
     *****************************************************/
    Submit() {
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.BTN_SUBMIT)

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
     * Method: VerifyFacilityExtention
     * Description: This function will verify facility extention
     * @param {string} CustomerName
     * @param {string} Status
     *****************************************************/
    VerifyFacilityExtention(CustomerName, Status) {
        cy.EnterText(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONLISTING.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONLISTING.BTN_SEARCHFILTER)
        cy.wait(2000)
        cy.VerifyTableEntry(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONLISTING.TBL_EXTENTIONLISTING, 'Member Name', CustomerName)
        cy.VerifyTableEntry(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONLISTING.TBL_EXTENTIONLISTING, 'Status', Status)
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
        cy.ValidateElementText(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.LBL_CUSTOMERNAEM, CustomerName)
    }
    /*****************************************************
     * Method: Cancel
     * Description: This function Click button Cancel
     *****************************************************/
    Cancel() {
        cy.Click(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.BTN_CANCEL)
    }
    /*****************************************************
     * Method: VerifyDetailInfo
     * Description: This function Verify Detail Info
     *****************************************************/
    VerifyDetailInfo() {
        cy.xpath(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.LBL_TYPEOFINVOICING).should('exist')
        cy.xpath(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.LBL_FACILITYCHARGERATE).should('exist')
        cy.xpath(elems_FacilityBookingExtension.FACILITYBOOKINGEXTENSIONDETAIL.LBL_FACILITYTYPECHARGERATE).should('exist')
    }
    /*****************************************************
     * Method: VerifyExtentionUpdate
     * Description: This function Verify Detail Info
     * @param {string} CustomerName
     * @param {string} startDate
     * @param {string} EndDate
     *****************************************************/
    VerifyExtentionUpdate(CustomerName, startDate, EndDate) {
        cy.xpath('//input[@id="txtCustomerName"]').type(CustomerName)
        cy.xpath('//button[text()="Search Filters"]').click()
        cy.wait(2000)
        cy.VerifyTableEntry('//h2[text()="Facility Booking Listing"]/parent::div/following-sibling::div//table', 'Start Date', startDate)
        cy.VerifyTableEntry('//h2[text()="Facility Booking Listing"]/parent::div/following-sibling::div//table', 'End Date', EndDate)
    }

    /*****************************************************
     * Method: ShoppinCart
     * Description: This function click on shopping cart icon
     *****************************************************/
    ShoppinCart() {

        cy.Click(elems_PageHeader.BTN_SHOPPINGCART)
        cy.wait(5000)
        cy.xpath(elems_PageHeader.DRP_USERLINKS).click()
        cy.wait(2000)
        cy.xpath('//ul//li').contains('A-').click()

        //   .should('contain.text', 'Standard').select('Standard')
        //   cy.xpath(elems_PageHeader.DRP_USERLINKS).then(($select)=> {

        //    const slct = $select.find('//select//option')

        //    cy.wrap(slct).should('contain.text', 'A-').click()
        //   })
        // //   .select(0)
        //   cy.xpath('//span').should('contain', 'A-').click()

        //   cy.wait(3000)
        // cy.select([0])

        cy.xpath('//label[@for="lblMemberId"]').then($MemID => {

            const MemberID = $MemID.text().trim()
            console.log(MemberID)

        })
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
            cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).type(blnc)

        })
        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT)
        cy.wait(3000)

        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_PAYNOW)
        cy.wait(3000)


    }


}

export default new FacilityBookingExtension