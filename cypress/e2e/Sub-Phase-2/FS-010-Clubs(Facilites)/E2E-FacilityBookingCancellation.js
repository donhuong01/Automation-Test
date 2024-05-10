import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import FacilityBookingListing from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Listing'
import FacilityBookingExtension from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking-Extension/FacilityBookingExtension'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()

const FacilityBookingCancellationManagment = () => {

describe('FS-010 Facility Booking Cancellation', function () {


    it('[TC01] Creating a Facility Booking Cancellation without Refund/Credit', function () {

        common.Checkin('A300019774')

        cy.visit('/facilities/bookingCancellationListing')

        // Verify page title
        FacilityBookingExtension.VerifyPageTitle('Facility Booking Cancellation Listing')

        // click create New button
        FacilityBookingExtension.CreateNew()

        // Verify page title
        FacilityBookingExtension.VerifyPageTitle('Facility Booking Cancellation Details')

        FacilityBookingExtension.SelectFacilityBookingCancel('TestUser 747')

        // FacilityBookingListing.ClickMaintenanceDrp('Cancel')

        FacilityBookingExtension.Submit2()

        common.ApprovalWorkFlow('F-CAN', 'Facility Cancellation Approval Workflow', 'Approve', 'Approved')

        cy.visit('/facilities/bookingCancellationListing')

        FacilityBookingListing.FilterWithCustomerName('TestUser 747')

        FacilityBookingListing.VerifyStatus('Cancelled')

    })

})

}

export default FacilityBookingCancellationManagment