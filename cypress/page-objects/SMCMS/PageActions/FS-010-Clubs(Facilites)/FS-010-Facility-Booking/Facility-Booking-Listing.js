import elems_FacilityBookingListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingListing'
import elems_FacilityBookingCancellationDetail from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityBookingCancellationDetail'
class FacilityBookingListing {

    /*****************************************************
         * Method: FilterWithBookingNo
         * Description: 
         ****************************************************/
    FilterWithBookingNo(BookingNo) {
        cy.EnterText(elems_FacilityBookingListing.TXT_BOOKINGNUMBER, BookingNo)
        cy.Click(elems_FacilityBookingListing.BTN_SEARCHFILTER)
    }


    /*****************************************************
         * Method: SelectItem
         * Description: 
         ****************************************************/
    SelectItem(BookingNo) {
        cy.SelectTableItem(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, 'Booking Number', BookingNo)
    }


    /*****************************************************
         * Method: ClickMaintenanceDrp
         * Description: 
         ****************************************************/
    ClickMaintenanceDrp(MaintenanceDrp) {
        cy.SelectDropDownItem(elems_FacilityBookingListing.DRP_MAINTENANCE, MaintenanceDrp)
    }
    /*****************************************************
         * Method: FilloutRefundForm
         * Description: 
         ****************************************************/
    FilloutRefundForm(RefundType, AmountType, Reason) {
        cy.TickCheckBox(elems_FacilityBookingCancellationDetail.PAYMENTDETAIL.CHK_GIVEREFUNDCREDIT, 'CHECK')
        cy.SelectDropDownItem(elems_FacilityBookingCancellationDetail.PAYMENTDETAIL.DRP_REFUNDCREDIT, RefundType)
        cy.SelectDropDownItem(elems_FacilityBookingCancellationDetail.PAYMENTDETAIL.DRP_AMOUNTTYPE, AmountType)
        cy.EnterText(elems_FacilityBookingCancellationDetail.PAYMENTDETAIL.TXTAREA_REFUNDCREDITREASON, Reason)
    }
    /*****************************************************
         * Method: Submit
         * Description: 
         ****************************************************/
    Submit() {
        cy.Click('//button[text()="Submit"]')
    }
    /*****************************************************
         * Method: CreateNew
         * Description: 
         ****************************************************/
    CreateNew() {
        cy.Click('//button[text()="Create New"]')
    }
    /*****************************************************
         * Method: ConvertToBooking
         * Description: This function Click on Convert to Booking button
         ****************************************************/
    ConvertToBooking() {
        cy.Click(elems_FacilityBookingListing.BTN_CONVERTTOBOOKING)
    }
    /*****************************************************
         * Method: VerifyStatus
         * Description: 
         ****************************************************/
    VerifyStatus(Status) {
        cy.VerifyTableEntry(elems_FacilityBookingListing.TBL_FACILTYBOOKINGLIST, 'Status', Status)
    }
    /*****************************************************
         * Method: FilterWithCustomerName
         * Description: 
         ****************************************************/
    FilterWithCustomerName(CustomerName) {
        cy.EnterText(elems_FacilityBookingListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_FacilityBookingListing.BTN_SEARCHFILTER)
        cy.wait(2000)
    }
    /*****************************************************
         * Method: FilterNewCreatedFacility
         * Description: 
         ****************************************************/
    FilterNewCreatedFacility(FacilitySetup, CustomerName, Status) {

        cy.Click(elems_FacilityBookingListing.PCK_MAINFACILITY)
        cy.wait(3000)
        cy.EnterText('//input[@name="name"]', FacilitySetup)
        cy.Click('//div[@class="k-window-content k-dialog-content"]//button')
        cy.wait(2000)
        cy.SelectTableItem('//div[@class="k-window-content k-dialog-content"]//table', 'Facility', FacilitySetup)
        cy.Click('//div[@class="k-widget k-window k-dialog"]//button[text()="Select"]')
        cy.wait(2000)
        cy.EnterText(elems_FacilityBookingListing.TXT_CUSTOMERNAME, CustomerName)
        cy.SelectDropDownItem(elems_FacilityBookingListing.DRP_STATUS, Status)
        cy.Click(elems_FacilityBookingListing.BTN_SEARCHFILTER)
        cy.wait(2000)
    }

}

export default new FacilityBookingListing