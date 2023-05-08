import FacilityBookingAmendment from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking-Amendment/FacilityBookingAmendment'
import CustomerCheckInPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'



const checkin = new CustomerCheckInPage()

const FacilityBookingAmendmentManagment = () => {

    describe('Facility Booking Extention Management', function () {

        const type = 'MEMBERID'
        const value1 = 'A300002763'
        const value2 = '867F'
        const expectedPage = 'Member Information'
        const CustomerName = 'Jayson Teng';
        const BookingNum = 'F-BOK-20230424-000589'
        const AmendmentType = 'Replacement Slot';
        const Reason = 'Amend Slot 2022'
        const check = 'check'
        const slot = "Available (10:00 am - 11:00 am)"
        const ResourceName = 'Resource C'



        it('[TC01] Createing New Booking Amendment - Replacement Slot', function () {

            // checkin customer first
            cy.visit('/membership/customerCheckin')
            cy.wait(5000)

            checkin.checkIn({ type, value1, value2, expectedPage })
            cy.wait(2000)

            cy.visit('/facilities/bookingAmendmentListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Listing')

            // click create New button
            FacilityBookingAmendment.CreateNew()

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Detail')

            // select type of amendment
            FacilityBookingAmendment.SelectTypeOfAmendment(AmendmentType)

            //select facility booking number
            FacilityBookingAmendment.SelectFacilityBooking(BookingNum)
            cy.wait(2000)

            // Fillout Amendment information Form
            FacilityBookingAmendment.FilloutAmendmentInfo(Reason, check)

            //select available slot 
            FacilityBookingAmendment.SelectSlot()

            //click submit button
            FacilityBookingAmendment.Submit()

            // FacilityBookingAmendment.ShoppinCart()

            // FacilityBookingAmendment.fillOutandApplyPayment('CASH')

            // cy.visit('/facilities/bookingAmendmentListing')
            // cy.wait(3000)

            FacilityBookingAmendment.VerifyFacilityAmendment(CustomerName, 'Confirmed')

            cy.LogoutOfSmcms()

            cy.wait(5000)

        })



        it('[TC02] Createing New Booking Amendment - Associated Resource', function () {

            // checkin customer first
            cy.visit('/membership/customerCheckin')
            cy.wait(5000)

            checkin.checkIn({ type, value1, value2, expectedPage })
            cy.wait(2000)

            cy.visit('/facilities/bookingAmendmentListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Listing')

            // click create New button
            FacilityBookingAmendment.CreateNew()

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Detail')

            // select type of amendment
            FacilityBookingAmendment.SelectTypeOfAmendment("Associated Resource")

            //select facility booking number
            FacilityBookingAmendment.SelectFacilityBooking(BookingNum)
            cy.wait(2000)

            // Fillout Amendment information Form
            FacilityBookingAmendment.FilloutAmendmentInfo("Amend Resource 2022", check)

            //select available slot 
            FacilityBookingAmendment.AddResource(ResourceName)

            //click submit button
            FacilityBookingAmendment.Submit()

            // FacilityBookingAmendment.ShoppinCart()

            // FacilityBookingAmendment.fillOutandApplyPayment('CASH')

            // cy.visit('/facilities/bookingAmendmentListing')
            cy.wait(3000)

            FacilityBookingAmendment.VerifyFacilityAmendment(CustomerName, 'Confirmed')

            cy.LogoutOfSmcms()

            cy.wait(5000)


        })

        it('[TC03] Createing New Booking Amendment - Replacement Slot for Expired Booking', function () {

            cy.visit('/facilities/bookingAmendmentListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Listing')

            // click create New button
            FacilityBookingAmendment.CreateNew()

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Detail')

            // select type of amendment
            FacilityBookingAmendment.SelectTypeOfAmendment('Replacement Slot')

            //select facility booking
            FacilityBookingAmendment.SelectFacilityBooking(CustomerName)
            cy.wait(2000)

            // Fillout Amendment information Form
            FacilityBookingAmendment.FilloutAmendmentInfo("Select Expired Slot 2022", check)

            //select available slot 
            FacilityBookingAmendment.SelectSlot()

            //click submit button
            FacilityBookingAmendment.Submit()

            // //shopping Cart
            // FacilityBookingAmendment.ShoppinCart()

            // //filout apply payment
            // FacilityBookingAmendment.fillOutandApplyPayment("CASH")

            // cy.visit('/facilities/bookingAmendmentListing')

            FacilityBookingAmendment.VerifyFacilityAmendment(CustomerName, 'Confirmed')


        })

        it('[TC04] Create New Booking Amendment Cancel', function () {

            cy.visit('/facilities/bookingAmendmentListing')
            cy.wait(3000)

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Listing')

            // click create New button
            FacilityBookingAmendment.CreateNew()

            // Verify page title
            FacilityBookingAmendment.VerifyPageTitle('Facility Booking Amendment Detail')

            // select type of amendment
            FacilityBookingAmendment.SelectTypeOfAmendment("Replacement Slot")

            //select facility booking number
            FacilityBookingAmendment.SelectFacilityBooking(BookingNum)
            cy.wait(2000)

            // Fillout Amendment information Form
            FacilityBookingAmendment.FilloutAmendmentInfo("Amend Slot 2022", check)

            //select available slot 
            FacilityBookingAmendment.SelectSlot()

            //click Cancel
            FacilityBookingAmendment.Cancel()


        })


    })
}
export default FacilityBookingAmendmentManagment;