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

const MemberID = 'A300000279'

const  Location = 'SAFRA Jurong'
const  AccommodatioType = 'Accomm Type Test'
const  AccommodatioName = 'Accomm 2023'

describe('[TS07] FS-012 Accommodation Reservation', function () {

    it('[TS-01] Creating an Accommodation Reservation', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingListing').wait(4000)

        AccommodationBookingListing.verifyPageTitle("Accommodation Booking Listing")

        AccommodationBookingListing.ClickOn("Create New")

        AccommodationBookingListing.verifyPageTitle("Accommodation Booking Detail")

        AccommodationBookingDetail.FillOutAccommmodationDetail(Location, AccommodatioType, AccommodatioName)

        AccommodationBookingDetail.SelectTransactionType("Reservation")
        
        AccommodationBookingDetail.SelectAvailableSlot("Available")

        AccommodationBookingDetail.TermsAndCondition("Yes")

        AccommodationBookingDetail.IdemnityWaiver("Yes")
        
        AccommodationBookingDetail.Submit()

        common.fillOutandApplyPayment("CASH")

        cy.visit('/accommodation/bookingListing').wait(4000)

        AccommodationBookingListing.FilterByMemberID(MemberID)

        AccommodationBookingListing.FilterByTransactionType("Reservation")

        AccommodationBookingListing.VerifyTableEntery("Member ID", MemberID)

        AccommodationBookingListing.VerifyTableEntery("Transaction Type", "Reservation")

        AccommodationBookingListing.ClickOnTableEntry()

        AccommodationBookingListing.verifyPageTitle("Accommodation Booking Detail")

        AccommodationBookingDetail.VerifyInAccommodationDetailPage(MemberID, Location, AccommodatioType, AccommodatioName)

        AccommodationBookingListing.ClickOn("Download Permit Letter")

        AccommodationBookingListing.ClickOn("Download Authorization Permit Letter")

        cy.LogoutOfSmcms()


    
    })


})