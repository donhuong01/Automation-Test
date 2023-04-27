import login from "../../../../fixtures/login"
import BatchIGRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Batch-IG-Registration'
import Bdata from '../../../../fixtures/Data_Module/FS-016-Interest-Group/BatchIGRegistrationNewCustomerUsing(NondefaultIG)'
import IGMembershipRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import MemberRegistrationPrincipal from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import CustomerCreationPage from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const CustomerCreation = new CustomerCreationPage()
const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('FS-016 Batch Interest Group Membership Registration', function () {

    Bdata.forEach(item => {

        const { NRICLast4Digit, CustomerNRICFull, BatchName, BatchType, InterestGroupMain, InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation } = item
        const PrincipalName = 'Customer' + Math.floor(Math.random() * 10009)
        const PrincipalEmail = 'Customer' + Math.floor(Math.random() * 10009) + '@test.com'

        it('Creating a Batch Membership Registration for New Customer using Non Default IG', function () {

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, NRICLast4Digit)
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
            cy.wait(8000)

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
            cy.wait(10000)

            MemTenureSelect.principalTenureSelection(PrincipalName, '10 Years')

            MemTenureSelect.addToCart()

            common.fillOutandApplyPayment('CASH')

            cy.wait(10000)

            cy.visit('/membership/batchMembershipRegistrationList').wait(6000)

            BatchIGRegistration.CreateNew()

            BatchIGRegistration.FilloutBatchFields(BatchName, BatchType)

            BatchIGRegistration.FilloutAdditionalFields(InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation)

            BatchIGRegistration.Save()

            BatchIGRegistration.FilterWithBatchName(BatchName)

            BatchIGRegistration.VerifyBatchIGStatus("Open")

            BatchIGRegistration.ClickOnTableLink()

            BatchIGRegistration.AddIGRegistration()

            IGMembershipRegistration.ClickOnBox(InterestGroupMain)

            IGMembershipRegistration.ClickOnBox(InterestGroup)

            IGMembershipRegistration.ClickOnBox(InterestGroupLocation)

            IGMembershipRegistration.SelectMembershipTerm(IGMembershipTerm)

            IGMembershipRegistration.MembershipEffectiveDate(EffectiveDate)

            IGMembershipRegistration.AgreeWithTermCondition()

            IGMembershipRegistration.AgreewithIndemnityWaiver()

            common.AddToCart()

            common.fillOutandApplyPayment('CASH')

            BatchIGRegistration.ValidateRegistration()

            BatchIGRegistration.FilterWithBatchName(BatchName)

            BatchIGRegistration.VerifyBatchIGStatus("Validated")

            BatchIGRegistration.ClickOnTableLink()

            BatchIGRegistration.PostRegistration()

            BatchIGRegistration.VerifyBatchIGStatus("Posted")

            cy.LogoutOfSmcms()

        })

    })
})