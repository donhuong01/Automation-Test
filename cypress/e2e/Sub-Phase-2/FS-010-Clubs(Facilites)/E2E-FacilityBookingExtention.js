import FacilityBookingExtention from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking-Extension/FacilityBookingExtension'
import CustomerCheckInPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'



const checkin = new CustomerCheckInPage()


const FacilityBookingExtentionManagment = () => {

    describe('Facility Booking Extention Management', function () {

        const type = 'MEMBERID'
        const value1 = 'A300000674'
        const value2 = '022D'
        const expectedPage = 'Member Information'
        const CustomerName = 'Test 022D';
        const Amount = '10';
        const Reason = 'Testing'
        const Status = 'Confirmed'



        it('[TC01] Createing New Free Time Booking Extention', function () {

            // checkin customer first
            cy.visit('/membership/customerCheckin')
            cy.wait(5000)

            checkin.checkIn({ type, value1, value2, expectedPage })
            cy.wait(2000)

            cy.visit('/facilities/bookingExtensionListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingExtention.VerifyPageTitle('Facility Booking Extension Listing')

            // click create New button
            FacilityBookingExtention.CreateNew()

            // Verify page title
            FacilityBookingExtention.VerifyPageTitle('Facility Booking Extension Detail')

            //select facility booking 
            FacilityBookingExtention.SelectFacilityBooking(CustomerName)

            //select slot
            FacilityBookingExtention.SelectSlot()

            //verify labels info
            FacilityBookingExtention.VerifyDetailInfo()

            //add waiver
            FacilityBookingExtention.AddWaiver(Amount, Reason)

            //click submit button
            FacilityBookingExtention.Submit()

            cy.wait(2000)

            //apply payment
            FacilityBookingExtention.fillOutandApplyPayment('CASH')

            cy.wait(10000)

            cy.visit('/facilities/bookingExtensionListing')
            cy.wait(5000)

            //verify new facity in facility extention listing
            FacilityBookingExtention.VerifyFacilityExtention(CustomerName, Status)

            cy.LogoutOfSmcms();


        })

        it('[TC02] Createing New Fixed Time Booking Extention', function () {

            // checkin customer first
            cy.visit('/membership/customerCheckin')
            cy.wait(5000)

            checkin.checkIn({ type, value1, value2, expectedPage })
            cy.wait(2000)

            cy.visit('/facilities/bookingExtensionListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingExtention.VerifyPageTitle('Facility Booking Extension Listing')

            // click create New button
            FacilityBookingExtention.CreateNew()

            // Verify page title
            FacilityBookingExtention.VerifyPageTitle('Facility Booking Extension Detail')

            //select facility booking 
            FacilityBookingExtention.SelectFacilityBooking(CustomerName)

            //select slot
            FacilityBookingExtention.FixedTimeSlot()

            //verify labels info
            FacilityBookingExtention.VerifyDetailInfo()

            //add waiver
            FacilityBookingExtention.AddWaiver(Amount, Reason)

            //click submit button
            FacilityBookingExtention.Submit()

            cy.wait(2000)

            //apply payment
            FacilityBookingExtention.fillOutandApplyPayment('CASH')

            cy.visit('/facilities/bookingExtensionListing')
            cy.wait(3000)

            //verify new facity in facility extention listing
            FacilityBookingExtention.VerifyFacilityExtention(CustomerName, Status)

            cy.LogoutOfSmcms();

        })


    })
}
export default FacilityBookingExtentionManagment;