/*****************************************************
 * Page Function: Test Script to test Group Booking Ballot
 *
 * @author: RDacpano
 *****************************************************/

// Import Pages
import FacilityGroupBookingBallotListing from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotListing'
import FacilityGroupBookingBallotDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotDetail'
import FacilityBookingDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'

beforeEach(() => {

    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const common = new Common()
const ShoppingCart = new ShoppingCartPayments()
const { FacilityType, Location,  FacilityName, slot, slot2,  ChargeType, Amount, Reason } = data.FacilityGroupBookingDetails

const FacilityGroupBookingBallot = (SAFRAMember1,SAFRAMember2) => {

describe('[TS-13] FS-010 Facility Group Booking Ballot', function () {

    it('[TC03] Create New Group Booking Ballot and Cancel', function () {


        common.Checkin(SAFRAMember2)

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')
        
        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        cy.wait(4000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

        // select slot
        FacilityBookingDetail.SelectSlot(slot)

        // add waiver
        //FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

        //Click Save
        FacilityBookingDetail.Cancel()


    })

    it('[TC01] Create New Group Booking Ballot with Successful Items', function () {

        common.Checkin(SAFRAMember1)

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        cy.wait(4000)


        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

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

        //cy.ValidateElementText('//td[text()="Successful"]', "Successful")

        FacilityGroupBookingBallotDetail.Save()

        cy.wait(3000)

        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotDetail.ShoppinCart()

        ShoppingCart.fillOutandApplyPayment('CASH')

        cy.wait(5000)

        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")

        cy.wait(3000)

        cy.visit('/facilities/groupBookingList')

        cy.wait(3000)

        FacilityGroupBookingBallotListing.FilterByFacility(FacilityName)

        FacilityGroupBookingBallotListing.VerifyTableConfirmed()

        //Logout
        // cy.LogoutOfSmcms()
        // cy.wait(3000)

    })


    it('[TC02] Create New Group Booking Ballot with Unsuccessful Items', function () {

        /******************** 
           1st Member Login
        ********************/

        common.Checkin(SAFRAMember1)

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        cy.wait(4000)


        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

        // select slot
        FacilityBookingDetail.SelectSlot(slot2)

        // add waiver
        //FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

        //Click Save
        FacilityBookingDetail.Save()

        cy.wait(3000)

        //Logout
        cy.LogoutOfSmcms()
        cy.wait(5000)


        /******************** 
           2nd Member Login
        ********************/

        common.Checkin(SAFRAMember2)
        cy.wait(3000)

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        cy.wait(4000)


        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

        // select slot
        FacilityBookingDetail.SelectSlot(slot2)

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

        cy.wait(5000)

        // cy.ValidateElementText('//td[text()="Unsuccessful"]', "Unsuccessful")

        // cy.Click('//button[text()="Set as Successful"]')

         FacilityGroupBookingBallotDetail.Save()

        cy.wait(3000)

         FacilityGroupBookingBallotDetail.ShoppinCart()

         ShoppingCart.fillOutandApplyPayment('CASH')

         cy.wait(5000)

         cy.visit('/facilities/groupBookingBallotListing')

         FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")

         cy.wait(3000)

        cy.visit('/facilities/groupBookingList')

        cy.wait(3000)

        FacilityGroupBookingBallotListing.FilterByFacility(FacilityName)

        FacilityGroupBookingBallotListing.VerifyTableConfirmed()

        cy.wait(3000)

        FacilityGroupBookingBallotListing.VerifyTableUnsuccessful()

        //Logout
        // cy.wait(3000)
        // cy.LogoutOfSmcms()
        // cy.wait(3000)

    })


    
    it('[TC01] Create New Group Booking Ballot with Successful Items', function () {

        common.Checkin(SAFRAMember1)

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)

        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

        // // Verify Page Title 
        // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

        // Click Create New button 
        FacilityBookingDetail.CreateNew()

        cy.wait(4000)


        // Verify Page Title 
        FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

        //Filout Facility Booking detail form
        FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

        //select facility name
        // FacilityBookingDetail.SelectFacilities(FacilityName)

        //verify booking info
        //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

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

        //cy.ValidateElementText('//td[text()="Successful"]', "Successful")

        FacilityGroupBookingBallotDetail.Save()

        cy.wait(3000)

        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotDetail.ShoppinCart()

        ShoppingCart.fillOutandApplyPayment('CASH')

        cy.wait(5000)

        cy.visit('/facilities/groupBookingBallotListing')

        FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")

        cy.wait(3000)

        cy.visit('/facilities/groupBookingList')

        cy.wait(3000)

        FacilityGroupBookingBallotListing.FilterByFacility(FacilityName)

        FacilityGroupBookingBallotListing.VerifyTableConfirmed()

        //Logout
        // cy.LogoutOfSmcms()
        // cy.wait(3000)

    })


    // it('[ST] Create New Group Automatic Booking Ballot with Unsuccessful and Successful Items', function () {

    //     /******************** 
    //        1st Member Login
    //     ********************/

    //     common.Checkin(SAFRAMember1)

    //     cy.visit('/facilities/groupBookingList')
    //     cy.wait(5000)

    //     // Verify Page Title 
    //     FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

    //     // // Verify Page Title 
    //     // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

    //     // Click Create New button 
    //     FacilityBookingDetail.CreateNew()

    //     cy.wait(4000)


    //     // Verify Page Title 
    //     FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

    //     //Filout Facility Booking detail form
    //     FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

    //     //select facility name
    //     // FacilityBookingDetail.SelectFacilities(FacilityName)

    //     //verify booking info
    //     //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

    //     // select slot
    //     FacilityBookingDetail.SelectSlot(slot2)

    //     // add waiver
    //     //FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

    //     //Click Save
    //     FacilityBookingDetail.Save()

    //     cy.wait(3000)

    //     //Logout
    //     cy.LogoutOfSmcms()
    //     cy.wait(5000)


    //     /******************** 
    //        2nd Member Login
    //     ********************/

    //     common.Checkin(SAFRAMember2)
    //     cy.wait(3000)

    //     cy.visit('/facilities/groupBookingList')
    //     cy.wait(5000)

    //     // Verify Page Title 
    //     FacilityBookingDetail.verifyPageTitle('Facility Group Booking Listing Form')

    //     // // Verify Page Title 
    //     // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

    //     // Click Create New button 
    //     FacilityBookingDetail.CreateNew()

    //     cy.wait(4000)


    //     // Verify Page Title 
    //     FacilityBookingDetail.verifyPageTitle('Facility Group Booking Detail')

    //     //Filout Facility Booking detail form
    //     FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, Location, FacilityName)

    //     //select facility name
    //     // FacilityBookingDetail.SelectFacilities(FacilityName)

    //     //verify booking info
    //     //FacilityBookingDetail.VerifyBookingInfo(FacilityType, Location)

    //     // select slot
    //     FacilityBookingDetail.SelectSlot(slot2)

    //     // add waiver
    //     //FacilityBookingDetail.AddWaiver(ChargeType, Amount, Reason)

    //     //Click Save
    //     FacilityBookingDetail.Save()


    //     cy.wait(10000)

    //     cy.visit('/facilities/groupBookingBallotListing')

    //     FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")
        
    //     FacilityGroupBookingBallotListing.CreateNew()

    //     FacilityGroupBookingBallotDetail.VerifyPageTitle("Facility Group Booking Ballot Details")

    //     FacilityGroupBookingBallotDetail.SelectFacility("Group Ballot 2023")

    //     cy.wait(5000)

    //     // cy.ValidateElementText('//td[text()="Unsuccessful"]', "Unsuccessful")

    //     // cy.Click('//button[text()="Set as Successful"]')

    //      FacilityGroupBookingBallotDetail.Save()

    //     cy.wait(3000)

    //     cy.ValidateElementText('//td[text()="Successful"]', "Successful")

    //     cy.ValidateElementText('//td[text()="Unsuccessful"]', "Unsuccessful")

    //     //  FacilityGroupBookingBallotDetail.ShoppinCart()

    //     //  ShoppingCart.fillOutandApplyPayment('CASH')

    //     //  cy.wait(5000)

    //     //  cy.visit('/facilities/groupBookingBallotListing')

    //     //  FacilityGroupBookingBallotListing.VerifyPageTitle("Facility Group Booking Ballot Listing")

    //     //  cy.wait(3000)

    //     cy.visit('/facilities/groupBookingList')

    //     cy.wait(3000)

    //     FacilityGroupBookingBallotListing.FilterByFacility(FacilityName)

    //     FacilityGroupBookingBallotListing.VerifyTableConfirmed()

    //     cy.wait(3000)

    //     FacilityGroupBookingBallotListing.VerifyTableUnsuccessful()

    //     //Logout
    //     // cy.wait(3000)
    //     // cy.LogoutOfSmcms()
    //     // cy.wait(3000)

    // })


    

   
})

}
export default FacilityGroupBookingBallot