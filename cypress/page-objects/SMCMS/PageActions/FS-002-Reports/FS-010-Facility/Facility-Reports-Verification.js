import elems_FacilityReports from "../../../Elements/FS-002 Reports/FS-010-Facility/FacilityReport"



class Report_Facility {
    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Amendment Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingAmendmentListing(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.BookingAmendmentListing')
        cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Cancellation Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingCancellationListing(expectedPg, facilityType, facility, nric, startDate, endDate) {
        cy.visit('/report?reportId=ReportFacility.BookingCancellationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facilityType)
        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facility)
        // cy.EnterText(elems_FacilityReports.TXT_NRIC, nric)
        // cy.EnterDate(elems_FacilityReports.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_FacilityReports.TXT_ENDDATE, endDate)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Extension Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingExtensionListing(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.BookingExtensionListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Listing Inactive
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingListingInactive(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.BookingListingInactive')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingListing(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.BookingListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Booking Listing Summary
    * Description: This function verifies the page
   *****************************************************/
        verifyBookingListingSummary(expectedPg, facilityType, startDate, endDate) {
        cy.visit('/report?reportId=ReportFacility.BookingListingSummary')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facilityType)
        // cy.EnterDate(elems_FacilityReports.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_FacilityReports.TXT_ENDDATE, endDate)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Closure Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyClosureListing(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.ClosureListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Group Booking Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyGroupBookingListing(expectedPg, facilityType, facility, nric, startDate, endDate) {
        cy.visit('/report?reportId=ReportFacility.GroupBookingListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facilityType)
        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facility)
        // cy.EnterText(elems_FacilityReports.TXT_NRIC, nric)
        // cy.EnterDate(elems_FacilityReports.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_FacilityReports.TXT_ENDDATE, endDate)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Group Booking Ballot Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyGroupBookingBallotListing(expectedPg) {
        cy.visit('/report?reportId=ReportFacility.GroupBookingBallotListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Reservation Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyReservationListing(expectedPg, facilityType, facility, nric, startDate, endDate) {
        cy.visit('/report?reportId=ReportFacility.ReservationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facilityType)
        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facility)
        // cy.EnterText(elems_FacilityReports.TXT_NRIC, nric)
        // cy.EnterDate(elems_FacilityReports.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_FacilityReports.TXT_ENDDATE, endDate)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }

    /*****************************************************
    * Method: Checking functionallity and Verification on 
              Utilization Listing
    * Description: This function verifies the page
   *****************************************************/
        verifyUtilizationListing(expectedPg, facilityType, startDate, endDate) {
        cy.visit('/report?reportId=ReportFacility.UtilizationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_FacilityReports.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_FacilityReports.PCK_FACILITYTYPE, facilityType)
        // cy.EnterDate(elems_FacilityReports.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_FacilityReports.TXT_ENDDATE, endDate)
    
        // cy.Click(elems_FacilityReports.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_FacilityReports.BTN_EXPORT)
    }
      
}

export default Report_Facility