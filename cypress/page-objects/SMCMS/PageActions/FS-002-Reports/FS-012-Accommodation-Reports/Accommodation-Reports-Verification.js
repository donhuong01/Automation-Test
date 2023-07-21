import elems_AccommodationChargeRateTableListingReport from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationChargeRateTableListingReport"
import elems_AccommodationListingReports from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationListing"
import elems_AccommodationOccupancyReports from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationOccupancy"
import elems_AccommodationOperatingPeriodListing from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationOperatingPeriodListing"
import elems_AccommodationReservationBookingListing from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationReservation&BookingListing"
import elems_AccommodationTypeListingReports from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommodationTypeListing"
import elems_AccommodationBookingListingReport from "../../../Elements/FS-002 Reports/FS-012-Accommodation/AccommmodationBookingListing"


class Reports_Accommodation {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accommodation Charge Rate Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyAccommodationChargeRateListing(expectedPg,transactType, calcType, amountType, accommTypeName, accommName, location) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationChargeRateTableListingReport')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationChargeRateTableListingReport.LBL_PAGE, expectedPg)

        cy.SelectDropDownItem(elems_AccommodationChargeRateTableListingReport.DRP_TRANSACTIONTYPE, transactType)
        cy.SelectDropDownItem(elems_AccommodationChargeRateTableListingReport.DRP_CALCULATIONTYPE, calcType)
        cy.SelectDropDownItem(elems_AccommodationChargeRateTableListingReport.DRP_AMOUNTTYPE, amountType)
        cy.SelectPickerItem(elems_AccommodationChargeRateTableListingReport.PCK_ACCOMODATIONTYPENAME, accommTypeName)
        cy.SelectPickerItem(elems_AccommodationChargeRateTableListingReport.PCK_ACCOMMODATIONNAME, accommName)
        cy.SelectPickerItem(elems_AccommodationChargeRateTableListingReport.PCK_LOCATION, location)

        cy.Click(elems_AccommodationChargeRateTableListingReport.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_IGMainListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyAccommodationListing(expectedPg, accommTypeName, accommName, dateOfActivation, status) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationListingReports.LBL_PAGE, expectedPg)

        
        cy.SelectPickerItem(elems_AccommodationListingReports.PCK_ACCOMODATIONTYPENAME, accommTypeName)
        cy.SelectPickerItem(elems_AccommodationListingReports.PCK_ACCOMMODATIONNAME, accommName)
        cy.EnterDate(elems_AccommodationListingReports.TXT_DATEOFACTIVATION, dateOfActivation)
        cy.SelectDropDownItem(elems_AccommodationListingReports.DRP_STATUS, status)

        cy.Click(elems_AccommodationListingReports.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationListingReports.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Occupancy Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyAccommodationOccupancyListing(expectedPg, accommTypeName, accommName, location) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationOccupancy')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationOccupancyReports.LBL_PAGE, expectedPg)

        cy.SelectPickerItem(elems_AccommodationOccupancyReports.PCK_ACCOMODATIONTYPENAME, accommTypeName)
        cy.SelectPickerItem(elems_AccommodationOccupancyReports.PCK_ACCOMMODATIONNAME, accommName)
        cy.SelectPickerItem(elems_AccommodationOccupancyReports.PCK_LOCATION, location)


        cy.Click(elems_AccommodationOccupancyReports.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationOccupancyReports.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Operating Period Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyAccommodationOperatingPeriodListing(expectedPg, typeofPeak, operatingPeriod) {
        cy.visit('/report?reportId=ReportAccommodation.OperatingPeriodListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationOperatingPeriodListing.LBL_PAGE, expectedPg)

        cy.SelectDropDownItem(elems_AccommodationOperatingPeriodListing.DRP_TYPEOFPEAK, typeofPeak)
        cy.SelectDropDownItem(elems_AccommodationOperatingPeriodListing.DRP_OPERATINGDAY, operatingPeriod)


        cy.Click(elems_AccommodationOperatingPeriodListing.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationOperatingPeriodListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Booking Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyAccommodationBookingListing(expectedPg, accommodationName) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationBookingListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationReservationBookingListing.LBL_PAGE, expectedPg)

        cy.SelectPickerItem(elems_AccommodationReservationBookingListing.PCK_ACCOMMODATIONNAME, accommodationName)

        cy.Click(elems_AccommodationReservationBookingListing.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationReservationBookingListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Reservation Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyAccommodationReservationListing(expectedPg, accommodationName) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationReservationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationReservationBookingListing.LBL_PAGE, expectedPg)

        cy.SelectPickerItem(elems_AccommodationReservationBookingListing.PCK_ACCOMMODATIONNAME, accommodationName)

        cy.Click(elems_AccommodationReservationBookingListing.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationReservationBookingListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Booking Cancellation Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyBookingCancellationListing(expectedPg) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationBookingCancellationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationReservationBookingListing.LBL_PAGE, expectedPg)

        cy.Click(elems_AccommodationReservationBookingListing.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationReservationBookingListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Closure Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyClosureListing(expectedPg) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationClosureListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationReservationBookingListing.LBL_PAGE, expectedPg)

        cy.Click(elems_AccommodationReservationBookingListing.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationReservationBookingListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Accomodation Type Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyTypeListing(expectedPg, accommodationType, lifeStyle, fabsGroup, accoStatus) {
        cy.visit('/report?reportId=ReportAccommodation.AccommodationTypeListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_AccommodationTypeListingReports.LBL_PAGE, expectedPg)

        cy.SelectPickerItem(elems_AccommodationTypeListingReports.PCK_ACCOMODATIONTYPENAME, accommodationType)
        cy.SelectPickerItem(elems_AccommodationTypeListingReports.PCK_LIFESTYLEGROUP, lifeStyle)
        cy.SelectPickerItem(elems_AccommodationTypeListingReports.PCK_FABSGROUP, fabsGroup)
        cy.SelectDropDownItem(elems_AccommodationTypeListingReports.DRP_STATUS, accoStatus)

        cy.Click(elems_AccommodationTypeListingReports.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_AccommodationTypeListingReports.BTN_EXPORT)
    }


    

}

export default Reports_Accommodation