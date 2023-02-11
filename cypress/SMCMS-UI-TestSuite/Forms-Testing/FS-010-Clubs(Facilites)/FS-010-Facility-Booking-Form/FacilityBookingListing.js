import FacilityBookingDetail from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import CustomerCheckInPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'
import login from '../../../../../fixtures/login'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'


const { Location, FacilityType, FacilityName, slot, ChargeType, Amount, Reason } = data.FacilityBookingDetail

const checkin = new CustomerCheckInPage()

const type = 'MEMBERID'
const value1 = 'A300000654'
const value2 = '31-Dec-1991'
const NRIC = '154D'
const Status = 'Confirmed'
const RecordStatus = 'Confirmed'
const expectedPage = 'Member Information'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)


})

describe('[TS06] Facility Booking Form Management', function () {

    it('[TC01] Verifying Facility Booking listing form', function () {

        cy.visit('/membership/customerLandingPage')
        // Go to website

        //check in customer
        checkin.checkIn({ type, value1, value2, expectedPage })

        // visit facility booking listing
        cy.visit('/facilities/bookingListing')

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        //Filter with nric 
        FacilityBookingDetail.SearchWithNRIC(NRIC)

        //verify facility booking
        FacilityBookingDetail.VerifyFacilityBooking(value1, Status, RecordStatus)

        //LogOut From SMCMS
        cy.LogoutOfSmcms()

    })


})