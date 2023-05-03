/*****************************************************
 * Page Function: Sample Script to TestFacility Settings - Calendar Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import FacilityGroupBookingDetail from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking/FacilityGroupBookingDetail'
import FacilityGroupBookingListing from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking/FacilityGroupBookingListing'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../fixtures/login'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

beforeEach(() => {

    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const common = new Common()

const SAFRAMember = 'A300000160'
const SAFRARelatedMemberships = ''
const GeustOfSAFAR = ''

describe('[TS-07] FS-010 Facility Group Booking', function () {

    it.only('[TC01] Creating Facility Group Booking - SAFRA Members', function () {

        common.Checkin(SAFRAMember)

        cy.visit('/facilities/groupBookingList')

        FacilityGroupBookingListing.VerifyPageTitle("Facility Group Booking Listing Form")

        FacilityGroupBookingListing.CreateNew()

        FacilityGroupBookingDetail.VerifyPageTitle("Facility Group Booking Detail")

        FacilityGroupBookingDetail.SelectFacilityType("Type 2023")

        FacilityGroupBookingDetail.SelectLocationAndFacility("Jurong", "Auto-Test 5066")

        FacilityGroupBookingDetail.SelectAvailableSlot("Available (09:00 am - 10:00 am)")

        FacilityGroupBookingDetail.Save()

        cy.LogoutOfSmcms()


    })
    it('[TC02] Creating Facility Group Booking - SAFRA-related Memberships', function () {


        common.Checkin(SAFRARelatedMemberships)
        
        cy.visit('/facilities/groupBookingList')

        FacilityGroupBookingListing.VerifyPageTitle("Facility Group Booking Listing Form")

        FacilityGroupBookingListing.CreateNew()

        FacilityGroupBookingDetail.VerifyPageTitle("Facility Group Booking Detail")

        FacilityGroupBookingDetail.SelectFacilityType("Type 2023")

        FacilityGroupBookingDetail.SelectLocationAndFacility("Jurong", "Auto-Test 5066")

        FacilityGroupBookingDetail.SelectAvailableSlot("Available (10:00 am - 11:00 am)")

        FacilityGroupBookingDetail.Save()

        cy.LogoutOfSmcms()

    })

    it('[TC03] Creating Facility Group Booking - Guests of SAFRA', function () {


        common.Checkin(GeustOfSAFAR)

        cy.visit('/facilities/groupBookingList')

        FacilityGroupBookingListing.VerifyPageTitle("Facility Group Booking Listing Form")

        FacilityGroupBookingListing.CreateNew()

        FacilityGroupBookingDetail.VerifyPageTitle("Facility Group Booking Detail")

        FacilityGroupBookingDetail.SelectFacilityType("Type 2023")

        FacilityGroupBookingDetail.SelectLocationAndFacility("Jurong", "Auto-Test 5066")

        FacilityGroupBookingDetail.SelectAvailableSlot("Available (11:00 am - 12:00 pm)")

        FacilityGroupBookingDetail.Save()

        cy.LogoutOfSmcms()

    })

   
})

