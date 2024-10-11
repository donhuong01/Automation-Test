/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {
  
    table: '//div[@data-id="table1_1"]',

    //Booking Amendment Listing
    BOOKING_AMENDMENT: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingAmendmentListing'
    },

    //Booking Cancellation Listing
    BOOKING_Cancellation: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingCancellationListing',
        FACILITYTYPE: '',
        FACILITY: '',
        NRIC: '',
        STARTDATE: '',
        ENDDATE: '',
    },

    //Booking Extension Listing
    BOOKING_EXTENSION: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingExtensionListing'
    },

    //Booking Listing Inactive
    BOOKING_INACTIVE: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingListingInactive'
    },

    //Booking Listing
    BOOKING_LISTING: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingListing'
    },

    //Booking Listing Summary
    BOOKING_SUMMARY: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.BookingListingSummary',
        FACILITYTYPE: '',
        STARTDATE: '',
        ENDDATE: '',
    },

    //Closure Listing
    CLOSURE_LISTING: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.ClosureListing'
    },

    //Group Booking Listing
    GROUP_BOOKING: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.GroupBookingListing',
        FACILITYTYPE: '',
        FACILITY: '',
        NRIC: '',
        STARTDATE: '',
        ENDDATE: '',
    },

    //Group Booking Ballot Listing
    GROUP_BOOKING_BALLOT: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.GroupBookingBallotListing'
    },

    //Reservation Listing
    RESERVATION_LISTING: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.ReservationListing',
        FACILITYTYPE: '',
        FACILITY: '',
        NRIC: '',
        STARTDATE: '',
        ENDDATE: '',
    },

    //Facility Utilization Listing
    UTILIZATION_LISTING: {
        EXPECTEDPG: 'Report Viewer - ReportFacility.UtilizationListing',
        FACILITYTYPE: '',
        STARTDATE: '',
        ENDDATE: '',
    },




}   

export default data