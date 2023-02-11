
import login from '../../../../../fixtures/login'

import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import E1GymMembershipRegistration from '../../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import Data from '../../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1GymMembershipRegistrationNonMember'


//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()


const { DOB, NRICLast4Digit, NRICFull, CustomerName, Gender, E1GymMemMainSelection, E1GymMembershipSelection, LocationSelection, EffectiveDate, DependencyType } = Data


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('FS-015 E1 GYM Membership Registration', function () {


    it('E1 GYM Member Registration for Non-Existing SAFRA member', function () {

        cy.visit('/membership/customerCheckin')
        cy.wait(5000)
        cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
        cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, DOB)
        cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, NRICLast4Digit)
        cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
        cy.wait(2000)
        cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

        CustomerCreation.fillOutRegistrationInfo({
            name: CustomerName,
            DOB: DOB,
            gender: Gender,
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
            emailAddress: "test" + Math.floor(Math.random() * 1000) + "@test.com",
            emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
            homeNumber: Customerdata.CustomerCreationPrincipal.ContactInformation.homeNumber,

        });


        CustomerCreation.save();

        ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////

        cy.Click(elems_Landing.SAFRA_Member)
        cy.Click(elems_Landing.Membership_Registration)
        cy.wait(5000)

        MemRegPrincipal.verifyPersonalInformation({
            MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
            NameOnNRIC: CustomerName,
            NameOnCard: CustomerName,
            Nric: NRICFull,
            Gender: Gender,
            DateofBirth: DOB,
            Age: data.memberregistrationprincipal.Personal_Info.Age,
            NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
            NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
            MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
            Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
            MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
            CardType: data.memberregistrationprincipal.Personal_Info.CardType,
            InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
        })


        MemRegPrincipal.SaveAndNextPrincipal()
        cy.wait(5000)

        MemTenureSelect.principalTenureSelection(CustomerName, '10 Years')

        MemTenureSelect.addToCart()

        cy.wait(5000)

        cy.visit('/membership/e1GymMembershipMainSelection')
        cy.wait(4000)

        E1GymMembershipRegistration.ClickOnBox(E1GymMemMainSelection)

        E1GymMembershipRegistration.ClickOnBox(E1GymMembershipSelection)

        E1GymMembershipRegistration.ClickOnBox(LocationSelection)

        E1GymMembershipRegistration.SelectDepandencyType(DependencyType)

        E1GymMembershipRegistration.MembershipInfo(EffectiveDate)

        // E1GymMembershipRegistration.OtherInfoCheckboxes()

        MemTenureSelect.addToCart()

        ShoppingCart.fillOutandApplyPayment('CHEQUE')

        cy.wait(50000)

        E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

        //Logout
        cy.LogoutOfSmcms()

    })
})