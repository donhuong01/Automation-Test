import AccommodationBookingCancellationListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBookingCancellation/AccommodationBookingCancellationListing'
import AccommodationBookingCancelletionDetail from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomBookingCancellation/AccommodationBookingCancellationDetail'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import login from '../../../fixtures/login'

const common = new Commons


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})
//A300002662

const MemberID = 'A300000390'

const  Location = 'SAFRA Jurong'
const  AccommodatioType = 'Accomm Type Test'
const  AccommodatioName = 'Accomm 2023'
const  CustomerName = "Renew Mem 2"
const  AddWaiver = "Yes"
const  WithRefundCredit = "Yes"

describe('[TS010] FS-012 Accommodation Booking Cancellation', function () {

    it('[TS-01] Creating a Accommodation Booking Cancellation without Refund/Credit', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking(CustomerName)
        
        AccommodationBookingCancelletionDetail.VerifyInfoInAccBookingCancellationDetail(CustomerName, AccommodatioName)

        if(WithRefundCredit === "No")
        {
       
            AccommodationBookingCancelletionDetail.GiveRefundCredit("Yes","Refund","Partial Amount")
            AccommodationBookingCancelletionDetail.SelectCreditRefundItemDetail()
        }

        if (AddWaiver === "No")
        {

           AccommodationBookingCancelletionDetail.AddWaiverOff("Yes","Refund","Partial Amount")
        }

        

        AccommodationBookingCancellationListing.ClickOn("Submit")

    
    })
    it('[TS-02] Creating an Accommodation Booking Cancellation to Refund - Partial Amount', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking(CustomerName)
        
        AccommodationBookingCancelletionDetail.VerifyInfoInAccBookingCancellationDetail(CustomerName, AccommodatioName)

        if(WithRefundCredit === "No")
        {
       
            AccommodationBookingCancelletionDetail.GiveRefundCredit("Yes","Refund","Partial Amount")
            AccommodationBookingCancelletionDetail.EnterRefundReason()
            AccommodationBookingCancelletionDetail.EnterRefundReason("Partial Refund")
            AccommodationBookingCancelletionDetail.SelectCreditRefundItemDetail()
        }

        if (AddWaiver === "Yes")
        { 

           AccommodationBookingCancelletionDetail.AddWaiverOff("Yes","Refund","Partial Amount")
        }

        

        AccommodationBookingCancellationListing.ClickOn("Submit")

    
    })

    it('[TS-03] Creating an Accommodation Booking Cancellation to Refund - Full Amount', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking(CustomerName)
        
        AccommodationBookingCancelletionDetail.VerifyInfoInAccBookingCancellationDetail(CustomerName, AccommodatioName)

        if(WithRefundCredit === "No")
        {
       
            AccommodationBookingCancelletionDetail.GiveRefundCredit("Yes","Refund","Full Amount")
            AccommodationBookingCancelletionDetail.EnterRefundReason()
            AccommodationBookingCancelletionDetail.EnterRefundReason("Refund in Full")
            AccommodationBookingCancelletionDetail.SelectCreditRefundItemDetail()
        }

        if (AddWaiver === "Yes")
        {

         AccommodationBookingCancelletionDetail.AddWaiverOff("Yes","Refund","Full Amount")
        
        }


        AccommodationBookingCancellationListing.ClickOn("Submit")

    
    })

    it('[TS-04] Creating an Accommodation Booking Cancellation to Credit - Partial Amount', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking(CustomerName)
        
        AccommodationBookingCancelletionDetail.VerifyInfoInAccBookingCancellationDetail(CustomerName, AccommodatioName)

        if(WithRefundCredit === "No")
        {
       
            AccommodationBookingCancelletionDetail.GiveRefundCredit("Yes","Credit","Partail Amount")
            AccommodationBookingCancelletionDetail.EnterRefundReason()
            AccommodationBookingCancelletionDetail.EnterRefundReason("Partail Credit")
            AccommodationBookingCancelletionDetail.SelectCreditRefundItemDetail()

        }

        if (AddWaiver === "Yes")
        {

           AccommodationBookingCancelletionDetail.AddWaiverOff("Yes","Credit","Partial Amount")

        }


        AccommodationBookingCancellationListing.ClickOn("Submit")

    
    })

    it('[TS-05] Creating an Accommodation Booking Cancellation to Credit - Full Amount', function () {


        common.Checkin(MemberID)

        cy.visit('/accommodation/bookingCancellationListing').wait(5000)

        AccommodationBookingCancellationListing.verifyPageTitle("Accommodation Booking Cancellation Listing")

        AccommodationBookingCancellationListing.ClickOn("Create New")

        AccommodationBookingCancelletionDetail.SelectAccommodationBooking(CustomerName)
        
        AccommodationBookingCancelletionDetail.VerifyInfoInAccBookingCancellationDetail(CustomerName, AccommodatioName)

        if(WithRefundCredit === "No")
        {
       
            AccommodationBookingCancelletionDetail.GiveRefundCredit("Yes","Credit","Full Amount")
            AccommodationBookingCancelletionDetail.EnterRefundReason()
            AccommodationBookingCancelletionDetail.EnterRefundReason("Full Credit")
            AccommodationBookingCancelletionDetail.SelectCreditRefundItemDetail()

        }

        if (AddWaiver === "Yes")
        {

           AccommodationBookingCancelletionDetail.AddWaiverOff("Yes","Credit","Full Amount")

        }


        AccommodationBookingCancellationListing.ClickOn("Submit")

    
    })


})