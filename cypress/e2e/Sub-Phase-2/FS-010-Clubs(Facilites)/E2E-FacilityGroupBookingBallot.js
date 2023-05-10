/*****************************************************
 * Page Function: Sample Script to TestFacility Settings - Calendar Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import FacilityGroupBookingBallotListing from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotListing'
import FacilityGroupBookingBallotDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotDetail'
import FacilityBookingDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

beforeEach(() => {

    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const common = new Common()
const { FacilityType, Location,  FacilityName, slot, ChargeType, Amount, Reason } = data.FacilityBookingDetails

const FacilityGroupBookingBallot = (SAFRAMember1,SAFRAMember2) => {

describe('[TS-13] FS-010 Facility Group Booking Ballot', function () {

    it('[TC01] Create New Group Booking Ballot with Successful Items', function () {

        common.Checkin(SAFRAMember1)

        cy.visit('/facilities/bookingListing')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Booking Details')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

        // select slot
        FacilityBookingDetail.SelectSlot(slot)

        // add waiver
        //FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

        //Click Save
        FacilityBookingDetail.Save()

        cy.wait(10000)

        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
        FacilityGroupBookingBallotListing.CreateNew()

        FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

        FacilityGroupBookingBallotDetail.SelectFacility("Group Ballot 2023")

        cy.ValidateElementText('//td[text()="Successful"]', "Successful")

        FacilityGroupBookingBallotDetail.Save()

        common.AddToCart()



        // Stop devepment of this testscript due Error Message "No Facility Group Booking to Display" 




    })

    it.only('Test', function(){

        common.Checkin('A300000639')
        cy.wait(3000)
        cy.visit('/facilities/groupBookingBallotListing')
        cy.wait(5000)

        // FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
        // FacilityGroupBookingBallotListing.CreateNew()

        // FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

        // FacilityGroupBookingBallotDetail.SelectFacility("Group Ballot 2023")

        // cy.ValidateElementText('//td[text()="Successful"]', "Successful")

        // FacilityGroupBookingBallotDetail.Save()

        FacilityGroupBookingBallotDetail.ShoppinCart()
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

}
export default FacilityGroupBookingBallot