import FacilityBookingDetail from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import CustomerCheckInPage from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'


const { Location, FacilityType, FacilityName, slot, ChargeType, Amount, Reason } = data.FacilityBookingDetails

const checkin = new CustomerCheckInPage()

const type = 'MEMBERID'
const value1 = 'A300000619'
const value2 = '01-Jan-1980'
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

    it('[TC01] Creating and verifying Facility Booking', function () {

        cy.visit('/membership/customerLandingPage')
        // Go to website

        //check in customer
        checkin.checkIn({ type, value1, value2, expectedPage })

        //visit facility booking listing
        cy.visit('/facilities/bookingListing')

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Details')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(Location, FacilityType)

        //select facility name
        FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        FacilityBookingDetail.VerifyBookingInfo(Location, FacilityType)

        // select slot
        FacilityBookingDetail.SelectSlot(slot)

        // add waiver
        FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

        //Click Save
        FacilityBookingDetail.Save()

        //add payment
        FacilityBookingDetail.fillOutandApplyPayment('CHEQUE')

        // verify page title booking list
        FacilityBookingDetail.verifyPageTitle('Customer Landing')

        //wait for 2 minut
        cy.wait(250000)

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