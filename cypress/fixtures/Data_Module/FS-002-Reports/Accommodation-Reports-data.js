/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {
  
    table: '//div[@data-id="table1_1"]',

    //Accommodation Charge Rate Listing
    ACCOM_CHARGE_RATE:{
        EXPECTEDPG: "Report Viewer - ReportAccommodation.AccommodationChargeRateTableListingReport", 
        TRANSAC_TYPE: 'Booking',
        CALC_TYPE: 'Per Booking',
        AMOUNT_TYPE: 'Fixed Value',
        ACCOM_TYPE_NAME: 'Villa Type 1',
        ACCOM_NAME: 'Close Villa Permanently',
        LOCATION: 'SAFRA Jurong'
    },

    //Accomodation Listing
    ACCOM_LISTING: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.AccommodationListing',
        ACCOM_TYPE_NAME: 'Accommodation Test 1',
        ACCOM_NAME: 'Accommodation Test 1',
        DATE_OF_ACTIVATION: '14-Mar-2023',
        STATUS: 'Approved'
    },

    //Accomodation Occupancy Listing
    ACCOM_OCCUPANCY: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.AccommodationOccupancy',
        ACCOM_TYPE_NAME: 'Accommodation Test 1',
        ACCOM_NAME: 'Accommodation Test 1',
        LOCATION: 'SAFRA Jurong'
    },

    //Accomodation Operating Period Listing
    ACCOM_OPERATING_PERIOD: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.OperatingPeriodListing',
        TYPE_OF_PEAK: '',
        OPERATING_DAY: ''
    },

    //Accomodation Booking Listing
    ACCOM_BOOKING: {
        EXPECTEDPG:'Report Viewer - ReportAccommodation.AccommodationBookingListing',
        ACCOM_NAME: 'Demo - Accmo 2023'
    },

    //Accomodation Reservation Listing
    ACCOM_RESERVATION: {
        EXPECTEDPG:'Report Viewer - ReportAccommodation.AccommodationReservationListing',
        ACCOM_NAME: 'Demo - Accmo 2023'
    },

    //Accomodation Booking Cancellation Listing
    ACCOM_BOOKING_CANCELLATION: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.AccommodationBookingCancellationListing'
    },

    //Accomodation Closure Listing
    ACCOM_CLOSURE: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.AccommodationClosureListing'
    },

    //Accommodation Type Listing
    ACCOM_TYPE: {
        EXPECTEDPG: 'Report Viewer - ReportAccommodation.AccommodationTypeListing',
        ACCOM_TYPE: 'Accomo2023',
        LIFE_STYLE: 'Enrichment',
        FABS_GROUP: 'Activities',
        STATUS: 'Approved'
    }
}

export default data