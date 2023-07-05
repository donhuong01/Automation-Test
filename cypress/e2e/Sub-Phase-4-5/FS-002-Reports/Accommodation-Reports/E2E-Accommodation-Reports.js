import Reports_Accommodation from '../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-002-Accommodation-Reports/Accommodation-Reports-Verification'
import data from '../../../../fixtures/Data_Module/FS-002-Reports/Accommodation-Reports-data';

const Accommodation_Reports = new Reports_Accommodation ()

describe("E1 Accommodation Verification",function(){

    it('Checking functionallity and Verification on Accommodation Charge Rate Listing', function(){
        Accommodation_Reports.verifyAccommodationChargeRateListing
        (
            data.ACCOM_CHARGE_RATE.EXPECTEDPG,
            data.ACCOM_CHARGE_RATE.TRANSAC_TYPE,
            data.ACCOM_CHARGE_RATE.CALC_TYPE,
            data.ACCOM_CHARGE_RATE.AMOUNT_TYPE,
            data.ACCOM_CHARGE_RATE.ACCOM_TYPE_NAME,
            data.ACCOM_CHARGE_RATE.ACCOM_NAME,
            data.ACCOM_CHARGE_RATE.LOCATION
        )
    })

    it('Checking functionallity and Verification on Accomodation Listing', function(){
        Accommodation_Reports.verifyAccommodationListing
        (
           data.ACCOM_LISTING.EXPECTEDPG,
           data.ACCOM_LISTING.ACCOM_TYPE_NAME,
           data.ACCOM_LISTING.ACCOM_NAME,
           data.ACCOM_LISTING.DATE_OF_ACTIVATION,
           data.ACCOM_LISTING.STATUS
        )
    })

    it('Checking functionallity and Verification on Accomodation Occupancy Listing', function(){
        Accommodation_Reports.verifyAccommodationOccupancyListing
        (
           data.ACCOM_OCCUPANCY.EXPECTEDPG,
           data.ACCOM_OCCUPANCY.ACCOM_TYPE_NAME,
           data.ACCOM_OCCUPANCY.ACCOM_NAME,
           data.ACCOM_OCCUPANCY
        )
    })

    it('Checking functionallity and Verification on Accomodation Operating Period Listing', function(){
        Accommodation_Reports.verifyAccommodationOperatingPeriodListing
        (
           data.ACCOM_OPERATING_PERIOD.EXPECTEDPG,
           data.ACCOM_OPERATING_PERIOD.TYPE_OF_PEAK,
           data.ACCOM_OPERATING_PERIOD.OPERATING_DAY
        )
    })

    it('Checking functionallity and Verification on Accomodation Booking Listing', function(){
        Accommodation_Reports.verifyAccommodationBookingListing
        (
            data.ACCOM_BOOKING.EXPECTEDPG,
            data.ACCOM_BOOKING.ACCOM_NAME
        )
    })

    it('Checking functionallity and Verification on Accomodation Reservation Listing', function(){
        Accommodation_Reports.verifyAccommodationReservationListing
        (
            data.ACCOM_RESERVATION.EXPECTEDPG,
            data.ACCOM_RESERVATION.ACCOM_NAME
        )
    })

    it('Checking functionallity and Verification on Accomodation Booking Cancellation Listing', function(){
        Accommodation_Reports.verifyBookingCancellationListing
        (
            data.ACCOM_BOOKING_CANCELLATION.EXPECTEDPG,
        )
    })

    it('Checking functionallity and Verification on Accomodation Closure Listing', function(){
        Accommodation_Reports.verifyClosureListing
        (
            data.ACCOM_CLOSURE.EXPECTEDPG,
        )
    })

    it('Checking functionallity and Verification on Accomodation Type Listing', function(){
        Accommodation_Reports.verifyTypeListing
        (
            data.ACCOM_TYPE.EXPECTEDPG,
            data.ACCOM_TYPE.ACCOM_TYPE,
            data.ACCOM_TYPE.LIFE_STYLE,
            data.ACCOM_TYPE.FABS_GROUP,
            data.ACCOM_TYPE.STATUS

            
        )
    })



})