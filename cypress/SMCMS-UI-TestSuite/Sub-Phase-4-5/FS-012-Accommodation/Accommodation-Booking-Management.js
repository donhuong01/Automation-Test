import AccommodationBookingListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBooking/AccommodationBookingListing'
import AccommodationBookingDetail from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBooking/AccommodationBookingDetail'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import login from '../../../fixtures/login'

const common = new Commons


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})
//A300002662
const { NumOfPhotoUpload, MaxSize, CancellationIsNotAllowedInMonth, CancellationIsNotAllowedInDay, AccoTransactionCancelAfter, AccoBookingNotificationBeforeStart } = data.AccommodationSettingGeneral

describe('FS-012 Accommodation Booking', function () {

    it('[TS-01] Creating a Accommodation Booking with SAFRA Members', function () {


        common.Checkin("A300002739")

        cy.visit('/accommodation/bookingListing').wait(4000)

        AccommodationBookingListing.verifyPageTitle("Accommodation Booking Listing")

        AccommodationBookingListing.ClickOn("Create New")

        AccommodationBookingListing.verifyPageTitle("Accommodation Booking Detail")

        AccommodationBookingDetail.FillOutAccommmodationDetail("SAFRA Jurong", "Close Recurring Item", "SAFRA Accom")
        
        AccommodationBookingDetail.SelectAvailableSlot("Available")
        
        // AccommodationBookingDetail.TermsAndCondition("Yes")

        // AccommodationBookingDetail.IdemnityWaiver("Yes")
        
        AccommodationBookingDetail.Submit()

        AccommodationBookingListing.FilterByMemberID("A300002739")

        AccommodationBookingListing.VerifyTableEntery("Member ID", "A300002739")


    
    })


})