import Report_Facility from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-010-Facility/Facility-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Facility-Reports-data"

const Reports_Facility  = new Report_Facility ()

const Facility_Report = () => {

    describe("Facility Reports Verification",function(){

        it('Checking functionallity and Verification on Booking Amendment Listing', function(){
            Reports_Facility.verifyBookingAmendmentListing
            (
                data.BOOKING_AMENDMENT.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Booking Cancellation Listing', function(){
            Reports_Facility.verifyBookingCancellationListing
            (
                data.BOOKING_Cancellation.EXPECTEDPG,
                data.BOOKING_Cancellation.FACILITYTYPE,
                data.BOOKING_Cancellation.FACILITY,
                data.BOOKING_Cancellation.NRIC,
                data.BOOKING_Cancellation.STARTDATE,
                data.BOOKING_Cancellation.ENDDATE
            )
        })

        it('Checking functionallity and Verification on Booking Extension Listing', function(){
            Reports_Facility.verifyBookingExtensionListing
            (
                data.BOOKING_EXTENSION.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Booking Listing inactive', function(){
            Reports_Facility.verifyBookingListingInactive
            (
                data.BOOKING_INACTIVE.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Booking Listing', function(){
            Reports_Facility.verifyBookingListing
            (
                data.BOOKING_LISTING.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Booking Listing Summary', function(){
            Reports_Facility.verifyBookingListingSummary
            (
                data.BOOKING_SUMMARY.EXPECTEDPG,
                data.BOOKING_SUMMARY.FACILITYTYPE,
                data.BOOKING_SUMMARY.STARTDATE,
                data.BOOKING_SUMMARY.ENDDATE
            )
        })

        it('Checking functionallity and Verification on Closure Listing', function(){
            Reports_Facility.verifyClosureListing
            (
                data.CLOSURE_LISTING.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Group Booking Listing', function(){
            Reports_Facility.verifyGroupBookingListing
            (
                data.GROUP_BOOKING.EXPECTEDPG,
                data.GROUP_BOOKING.FACILITYTYPE,
                data.GROUP_BOOKING.FACILITY,
                data.GROUP_BOOKING.NRIC,
                data.GROUP_BOOKING.STARTDATE,
                data.GROUP_BOOKING.ENDDATE
            )
        })

        it('Checking functionallity and Verification on Group Booking Ballot Listing', function(){
            Reports_Facility.verifyGroupBookingBallotListing
            (
                data.GROUP_BOOKING_BALLOT.EXPECTEDPG
            )
        })

        it('Checking functionallity and Verification on Reservation Listing', function(){
            Reports_Facility.verifyReservationListing
            (
                data.RESERVATION_LISTING.EXPECTEDPG,
                data.RESERVATION_LISTING.FACILITYTYPE,
                data.RESERVATION_LISTING.FACILITY,
                data.RESERVATION_LISTING.NRIC,
                data.RESERVATION_LISTING.STARTDATE,
                data.RESERVATION_LISTING.ENDDATE
            )
        })

        it('Checking functionallity and Verification on Utilization Listing', function(){
            Reports_Facility.verifyUtilizationListing
            (
                data.UTILIZATION_LISTING.EXPECTEDPG,
                data.UTILIZATION_LISTING.FACILITYTYPE,
                data.UTILIZATION_LISTING.STARTDATE,
                data.UTILIZATION_LISTING.ENDDATE
            )
        })

        it('Checking functionallity and Verification on Facility Booking By Home Team', function(){
            Reports_Facility.verifyBookingbyHomeTeam
            (
                data.BOOKING_BY_HOME_TEAM.EXPECTEDPG,

            )
        })

        it('Checking functionallity and Verification on Booking Tracking', function(){
            Reports_Facility.verifyBookingTracking
            (
                data.BOOKING_TRACKING.EXPECTEDPG,

            )
        })
    })


}

export default Facility_Report