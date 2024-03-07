import FacilityBookingDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
// import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import Customerdata from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import { nricGenerator } from '../../../support/nricGenerator'

const { FacilityType, Location, FacilityName, slot, ChargeType, Amount, Reason } = data.FacilityBookingDetails

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()

const UserID = Math.floor(Math.random() * 1000)

const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
const PrincipalEmail = (/*Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress +*/ UserID + PrincipalName + "@test.com").replace(/\s/g, '');



const Status = 'Confirmed'
const RecordStatus = 'Confirmed'

const FacilityBookingManagement = () => {

    const CustomerNRICFull = nricGenerator('S', 43)
    const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4)

    describe('[TS06] Facility Booking Form Management', function () {

        it('[TC01] Creating and verifying Facility Booking', function () {

            //#region customer Creation

            //Enable SFS
            // cy.visit('/membership/moduleSettings')
            // cy.wait(8000)

            // MemModuleSettings.SFSActivate('CHECK')
            // cy.wait(5000)

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDateCheckin(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                //DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
                gender: Customerdata.CustomerCreationPrincipal.RegistrationInformation.gender,
                /* profilePicture: "DP.png" */
            });

            CustomerCreation.fillOutAddressInformation({
                postalCode: Customerdata.CustomerCreationPrincipal.AddressInformation.postalCode,
                address: Customerdata.CustomerCreationPrincipal.AddressInformation.address,
                unitNumber: Customerdata.CustomerCreationPrincipal.AddressInformation.unitNumber,
                POBOx: Customerdata.CustomerCreationPrincipal.AddressInformation.POBOx,
                myMailbox: Customerdata.CustomerCreationPrincipal.AddressInformation.myMailbox
            });

            CustomerCreation.fillOutContactInformation({
                handPhone: Customerdata.CustomerCreationPrincipal.ContactInformation.handPhone,
                emailAddress: PrincipalEmail,
                emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                homeNumber: Customerdata.CustomerCreationPrincipal.ContactInformation.homeNumber,

                // Preferred Contact Mode
                preferredContactModeSelectAll: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModeSelectAll,
                preferredContactModeEmail: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModeEmail,
                preferredContactModeMail: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModeMail,
                preferredContactModeSMS: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModeSMS,
                preferredContactModeVoiceCall: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModeVoiceCall,
                preferredContactModePushNotification: Customerdata.CustomerCreationPrincipal.ContactInformation.preferredContactModePushNotification,

                //Consent Information
                consentInformationMarketing: Customerdata.CustomerCreationPrincipal.ContactInformation.consentInformationMarketing,
                consentInformationServiceNotification: Customerdata.CustomerCreationPrincipal.ContactInformation.consentInformationServiceNotification,
                consentInformationTransactional: Customerdata.CustomerCreationPrincipal.ContactInformation.consentInformationTransactional,
            });


            CustomerCreation.save();
            cy.wait(8000)
            //#endregion

            //#region Principal Registration

            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(9000)

            MemRegPrincipal.verifyPersonalInformation({
                MemberCategory: Customerdata.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: PrincipalName,
                NameOnCard: PrincipalName,
                Nric: CustomerNRICFull,
                Gender: Customerdata.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: Customerdata.memberregistrationprincipal.Personal_Info.DateofBirth,
                Age: Customerdata.memberregistrationprincipal.Personal_Info.Age,
                NSStatus: Customerdata.memberregistrationprincipal.Personal_Info.NSStatus,
                NSRank: Customerdata.memberregistrationprincipal.Personal_Info.NSRank,
                MemberType: Customerdata.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: Customerdata.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: Customerdata.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: Customerdata.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: Customerdata.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: Customerdata.memberregistrationprincipal.Personal_Info.ProfilePicture
            })



            // MemRegPrincipal.SaveAndNext()
            // cy.wait(10000)
            // MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')

            MemRegPrincipal.SaveAndNextPrincipal()
            cy.wait(8000)
            //#endregion

            //#region Tenure Selection

            MemTenureSelect.principalTenureSelection(PrincipalName, '10 Years')
            cy.wait(8000)

            // Click on add to cart
            MemTenureSelect.addToCart()
            cy.wait(8000)

            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH')

            // Wait for 3 minites
            cy.wait(15000)
            //#endregion

            // })


            //  it ('[TC02] Creating and verifying Facility Booking', function () { //Please update after fixing bug on newly registered user that can't booked

            // cy.visit('/membership/customerCheckin')
            //      cy.wait(5000)
            //     cy.Click(elems_CustomerCheckInPage.RBTN_MEMBERID)
            //     cy.EnterText(elems_CustomerCheckInPage.TXT_MEMBERID, 'A300000078') //Change Member ID for now
            //     cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            //     cy.wait(7000)
            //#endregion

            //visit facility booking listing
            cy.visit('/facilities/bookingListing', { timeout: 30000 })

            // Verify Page Title
            FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

            // // Verify Page Title
            // FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

            // Click Create New button
            FacilityBookingDetail.CreateNew()

            cy.wait(4000)

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

            //add payment
            FacilityBookingDetail.fillOutandApplyPayment('CASH')

            // verify page title booking list
            FacilityBookingDetail.verifyPageTitle('Customer Landing')

            //wait for 2 minute
            cy.wait(30000)

            // visit facility booking listing
            cy.visit('/facilities/bookingListing', { timeout: 50000 })

            // Verify Page Title
            FacilityBookingDetail.verifyPageTitle('Facility Booking Listing')

            //Filter with nric
            //FacilityBookingDetail.SearchWithNRIC(CustomerNRIC)

            //Filter with nric
            FacilityBookingDetail.SearchWithCustomerName(CustomerNRICFull) //Change Customer Name based on Member ID


            // //verify facility booking
            FacilityBookingDetail.VerifyFacilityBooking(/*CustomerNRIC,*/ Status, RecordStatus)

            // //LogOut From SMCMS
            cy.LogoutOfSmcms()

        })



    })

}
export default FacilityBookingManagement