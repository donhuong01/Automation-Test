/*****************************************************
 * Page Function: Sample Script to TestFacility Settings - Calendar Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import FacilityGroupBookingBallotListing from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotListing'
import FacilityGroupBookingBallotDetail from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotDetail'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../fixtures/login'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

beforeEach(() => {

    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const common = new Common()

describe('[TS-13] FS-010 Facility Group Booking Ballot', function () {

    it('[TC01] Create New Group Booking Ballot with Successful Items', function () {


        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
        FacilityGroupBookingBallotListing.CreateNew()

        FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

        FacilityGroupBookingBallotDetail.SelectFacility("Facility Setup F")

        // Stop devepment of this testscript due Error Message "No Facility Group Booking to Display" 


    })
    it('[TC02] Create New Group Booking Ballot with Unsuccessful Items', function () {


        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
        FacilityGroupBookingBallotListing.CreateNew()

        FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

        FacilityGroupBookingBallotDetail.SelectFacility("Facility Setup F")

        // Stop devepment of this testscript due Error Message "No Facility Group Booking to Display" 


    })

    it('[TC03] Create New Group Booking Ballot and Cancel', function () {


        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
        FacilityGroupBookingBallotListing.CreateNew()

        FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

        FacilityGroupBookingBallotDetail.SelectFacility("Facility Setup F")

        // Stop devepment of this testscript due Error Message "No Facility Group Booking to Display" 


    })

   
})

