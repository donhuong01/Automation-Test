import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import FacilityBookingListing from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Listing'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()

const FacilityBookingCancellationManagment = () => {

describe('FS-010 Facility Booking Cancellation', function () {


    it('[TC01] Creating a Facility Booking Cancellation without Refund/Credit', function () {

        common.Checkin(MemberID)

        cy.visit('/facilities/bookingListing')

        FacilityBookingListing.FilterWithBookingNo('F-BOK-20221122-000193')

        FacilityBookingListing.SelectItem('F-BOK-20221122-000193')

        FacilityBookingListing.ClickMaintenanceDrp('Cancel')

        FacilityBookingListing.Submit()

        common.ApprovalWorkFlow('F-CAN', 'Facility Cancellation Approval Workflow', 'Approve', 'Approved')

        cy.visit('/facilities/bookingListing')

        FacilityBookingListing.FilterWithBookingNo('F-BOK-20221122-000193')

        FacilityBookingListing.VerifyStatus('Cancelled')

    })

})

}

export default FacilityBookingCancellationManagment