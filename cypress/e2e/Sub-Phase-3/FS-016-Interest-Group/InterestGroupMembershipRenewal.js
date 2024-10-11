
import login from '../../../fixtures/login'

import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import IGMembershipRenewal from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Renewal'
import IGMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()



const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress
// const CustomerNRIC = '475B'
// const CustomerNRICFull = 'S1139475B'


// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const InterestGMembershipRenewal = (MemberID) => {

// const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);

describe('[TS08] FS-016 Interest Group Membership Renewal', function () {


     it('[TC01] Interest Group Membership Renewal for existing active member', function () {


    //     cy.visit('/membership/customerCheckin')
    //     cy.wait(5000)
    //     cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
    //     cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
    //     cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
    //     cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
    //     cy.wait(2000)
    //     cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

    //     CustomerCreation.fillOutRegistrationInfo({
    //         name: PrincipalName,
    //         DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
    //         gender: Customerdata.CustomerCreationPrincipal.RegistrationInformation.gender,
    //     });

    //     CustomerCreation.fillOutAddressInformation({
    //         postalCode: Customerdata.CustomerCreationPrincipal.AddressInformation.postalCode,
    //         address: Customerdata.CustomerCreationPrincipal.AddressInformation.address,
    //         unitNumber: Customerdata.CustomerCreationPrincipal.AddressInformation.unitNumber,
    //         POBOx: Customerdata.CustomerCreationPrincipal.AddressInformation.POBOx,
    //         myMailbox: Customerdata.CustomerCreationPrincipal.AddressInformation.myMailbox
    //     });

    //     CustomerCreation.fillOutContactInformation({
    //         handPhone: '56585896',
    //         emailAddress: PrincipalEmail,
    //         emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
    //         homeNumber: '56585896',

    //     });


    //     CustomerCreation.save();

    //     cy.Click(elems_Landing.SAFRA_Member)
    //     cy.Click(elems_Landing.Membership_Registration)
    //     cy.wait(5000)

    //     MemRegPrincipal.verifyPersonalInformation({
    //         MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
    //         NameOnNRIC: PrincipalName,
    //         NameOnCard: PrincipalName,
    //         Nric: CustomerNRICFull,
    //         Gender: data.memberregistrationprincipal.Personal_Info.Gender,
    //         DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
    //         Age: data.memberregistrationprincipal.Personal_Info.Age,
    //         NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
    //         NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
    //         MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
    //         Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
    //         MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
    //         CardType: data.memberregistrationprincipal.Personal_Info.CardType,
    //         InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
    //     })

    //     MemRegPrincipal.SaveAndNextPrincipal()
    //     cy.wait(5000)

    //     MemTenureSelect.principalTenureSelection(PrincipalName, '10 Years')

    //     MemTenureSelect.addToCart()

    //     ShoppingCart.fillOutandApplyPayment('CASH')

    //     cy.wait(9000)

        cy.visit('/membership/customerCheckin')
        cy.wait(3000)
        cy.EnterText('//input[@id="txtMemberId"]', MemberID)
        cy.Click('//button[@form="formCustomerCheckIn"]')
        cy.wait(5000)
    

        // cy.visit('/membership/interestGroupMainSelection')
        // cy.wait(2000)

        // IGMembershipRenewal.ClickOnBox("QA Test IG Main 1")

        // IGMembershipRenewal.ClickOnBox('IG Detail Test 1')

        // IGMembershipRenewal.ClickOnBox('All Locations')

        // IGMembershipRenewal.SelectMembershipTerm()

        // IGMembershipRenewal.MembershipEffectiveDate('25-May-2023')

        // IGMembershipRenewal.AgreeWithTermCondition('CHECK')

        // IGMembershipRegistration.AddWaiver('Registration')

        // MemTenureSelect.addToCart()

        // ShoppingCart.fillOutandApplyPayment('CASH')

        // cy.wait(15000)

        // IGMembershipRenewal.VerifyItemInIGMemListingTBL(PrincipalName)

        //cy.wait(5000)
        cy.visit('/membership/interestGroupMembershipRenewal')
        cy.wait(5000)

        IGMembershipRenewal.SelectIGMembership('G1000000')

        IGMembershipRenewal.SelectRenewalTerm('8')

        IGMembershipRenewal.Submit()

        ShoppingCart.fillOutandApplyPayment('CASH')

        cy.wait(8000)

        cy.visit('/membership/interestGroupMembershipListing')

        cy.wait(3000)

        IGMembershipRenewal.ViewTransactionHistory('SAFDXO1028')

        IGMembershipRenewal.VerifyReasonCode('Renewal')

    })


})
}

export default InterestGMembershipRenewal
