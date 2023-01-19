
import login from '../../../fixtures/login'

import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import E1GymMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import E1GymMembershipRenewal from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Renewal'

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()
const MemModuleSettings = new MembershipModuleSetting()


const UserID = Math.floor(Math.random() * 100000 * 100)

const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID + "@test.com"
const CustomerNRIC = '961I'
const CustomerNRICFull = 'S6765961I'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[TS01] E1 Gym Membership Renewal Management', function () {


    it('[TC01] Membership Creation and Principal Registration, E1 Gym Membership Renewal', function () {

        cy.visit('/membership/moduleSettings')
        cy.wait(5000)

        MemModuleSettings.SFSActivate('CHECK')
        cy.wait(5000)

        cy.visit('/membership/customerCheckin')
        cy.wait(5000)
        cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
        cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
        cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
        cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
        cy.wait(2000)
        cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

        CustomerCreation.fillOutRegistrationInfo({
            name: PrincipalName,
            DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
            gender: Customerdata.CustomerCreationPrincipal.RegistrationInformation.gender,
        });

        CustomerCreation.fillOutAddressInformation({
            postalCode: Customerdata.CustomerCreationPrincipal.AddressInformation.postalCode,
            address: Customerdata.CustomerCreationPrincipal.AddressInformation.address,
            unitNumber: Customerdata.CustomerCreationPrincipal.AddressInformation.unitNumber,
            POBOx: Customerdata.CustomerCreationPrincipal.AddressInformation.POBOx,
            myMailbox: Customerdata.CustomerCreationPrincipal.AddressInformation.myMailbox
        });

        CustomerCreation.fillOutContactInformation({
            handPhone: '56585896',
            emailAddress: PrincipalEmail,
            emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
            homeNumber: '56585896',

        });

        CustomerCreation.save();

        cy.Click(elems_Landing.SAFRA_Member)
        cy.Click(elems_Landing.Membership_Registration)
        cy.wait(5000)

        MemRegPrincipal.verifyPersonalInformation({
            MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
            NameOnNRIC: PrincipalName,
            NameOnCard: PrincipalName,
            Nric: CustomerNRICFull,
            Gender: data.memberregistrationprincipal.Personal_Info.Gender,
            DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
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

        MemTenureSelect.principalTenureSelection(PrincipalName, '10 Years')

        // Click on add to cart
        MemTenureSelect.addToCart()

        // Shopping cart and Payments
        ShoppingCart.fillOutandApplyPayment('CHEQUE')

        cy.wait(20000)

        cy.visit('/membership/e1GymMembershipMainSelection')
        cy.wait(4000)

        E1GymMembershipRegistration.ClickOnBox("Energy One Gym ")

        E1GymMembershipRegistration.ClickOnBox('E1 Gym Silver')

        E1GymMembershipRegistration.ClickOnBox('All Locations')

        E1GymMembershipRegistration.RegistrationInfo('10-Nov-2022')

        // E1GymMembershipRegistration.OtherInfoCheckboxes('CHECK', 'CHECK')

        E1GymMembershipRegistration.AddWiaver('Registration', 50, 'Waive')

        MemTenureSelect.addToCart()
        cy.wait(3000)
        // Shopping cart and Payments
        ShoppingCart.fillOutandApplyPayment('CHEQUE')

        cy.wait(50000)

        E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(PrincipalName)

        cy.visit('/membership/e1GymMembershipRenewal')
        cy.wait(3000)

        E1GymMembershipRenewal.FilloutMembershipRenewalInfo("G10000000", '3 Months')

        E1GymMembershipRegistration.AddWiaver('Renewal', 30, 'Waive')
        cy.wait(15000)
        MemTenureSelect.addToCart()

        // Shopping cart and Payments
        ShoppingCart.fillOutandApplyPayment('CHEQUE')

        cy.wait(50000)

        E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(PrincipalName)

        E1GymMembershipRenewal.SelectTableLink(PrincipalName)

        E1GymMembershipRenewal.ViewTransactionHistory()

        E1GymMembershipRenewal.VarifyReasonCode('Renew')

        //Logout
        cy.LogoutOfSmcms()

    })


})

