import AccommodationBookingCancellationListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBookingCancellation/AccommodationBookingCancellationListing'
import AccommodationBookingCancelletionDetail from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBookingCancellation/AccommodationBookingCancellationDetail'
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

const MemberID = 'A300000279'

const  Location = 'SAFRA Jurong'
const  AccommodatioType = 'Accomm Type Test'
const  AccommodatioName = 'Accomm 2023'

describe('[TS010] FS-012 Accommodation Booking Cancellation', function () {

    it('[TS-01] Creating a Accommodation Booking Cancellation without Refund/Credit', function () {


        // common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking("TestUser07252022")




    
    })


})