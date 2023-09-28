/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import BatchMembershipRegistrationListing from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import BatchMembershipRegistrationDetail from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import MemberRegistrationWithDifferentMemberType from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/RegistrationWithDifferentMemberType'

import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

const NonMemberCreation = (CustomerNRICFull, MemberType, MemberCategory, PrnBatchTenure) => {

    describe('[TS07] Batch Membership Registration With Non Member', function () {

        //Page definition
        const CustomerCreation = new CustomerCreationPage()
        const MemModuleSettings = new MembershipModuleSetting()
        const MemRegPrincipal = new MemberRegistrationPrincipal()
        const ShoppingCartPayment = new ShoppingCartPayments()
        const MemRegWithDifferentMemType = new MemberRegistrationWithDifferentMemberType()

        const UserID = Math.floor(Math.random() * 1000)
        const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);
        const ApplicationDate = '01-Jan-2023'
        const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
        const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID + 'i' + "@synergyonline.com"
        const DOB = MemberCategory === 'Principal' ? '01-May-1970' : '01-Feb-2010'

        it('[TC01] Customer Creation Non-Member', function () {

            ///////////////////////////////CUSTOMER CREATION////////////////////////////////////////


            cy.visit('/membership/moduleSettings')
            cy.wait(5000)

            MemModuleSettings.SFSActivate('CHECK')
            cy.wait(5000)


            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                // DOB:DOB,
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
                homeNumber: '123',

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

            //Logout
            cy.LogoutOfSmcms()

        })

        it('[TC02] Creating a Batch Membership Registration with Non-Member', function () {

            const BatchNameNonMem = 'Auto-Batch' + Math.floor(Math.random() * 100000 * 3)

            const NonMemberName = 'Non-Mem testing'
            const BatchType = data.BatchMemRegDetail.BatchType
            const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
            const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
            const PromationReg = data.BatchMemRegDetail.PromationReg
            const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
            const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
            const PaymentMode = data.BatchMemRegDetail.PaymentMode

            cy.visit('/membership/batchMembershipRegistrationList')

            //Click create new button
            BatchMembershipRegistrationListing.createNew()

            //Wait for page to load
            cy.wait(7000)

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Fillout form
            BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(
                BatchNameNonMem, BatchType, RecTalkSessionID, MemRegTenure, PromationReg,
                MemRenewalTenure, PromationRenewal, PaymentMode
            )
            //Click Save button
            BatchMembershipRegistrationDetail.Save()


            //Verify Page Title
            // BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Listing')

            //Verify Batch Name is displayed in the listing
            // BatchMembershipRegistrationListing.VerifyNewlyCreatedItem(BatchName, PaymentMode)

            //Filter by Batch Name
            BatchMembershipRegistrationListing.FilterByBatchName(BatchNameNonMem)

            //Click on Search Filter button
            BatchMembershipRegistrationListing.ClickSeacrhFilters()

            //click on table entry
            BatchMembershipRegistrationListing.ClickOnNewlyCreatedItem()
            cy.wait(7000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Add new member to the batch
            BatchMembershipRegistrationDetail.AddMember()
            cy.wait(7000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

            //Add Existing Member to the batch
            BatchMembershipRegistrationDetail.FillOutFormForNonMember(CustomerNRIC, DOB)

            //Click Save And Next button
            BatchMembershipRegistrationDetail.Next()

            //Select Member Category

            BatchMembershipRegistrationDetail.SelectMemberCategory(MemberCategory)
            cy.wait(7000) //wait for page to load

            //Verify Page Title
            if (MemberCategory === 'Principal') {

                BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Principal')
            }
            else {
                BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Dependent')
            }

            //Enter Applicatioin Date
            BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

            const NameOnNRIC = NonMemberName
            MemRegPrincipal.verifyPersonalInformation({
                MemberCategory: MemberCategory,
                NameOnNRIC: NameOnNRIC,
                NameOnCard: NameOnNRIC,
                Nric: CustomerNRICFull,
                Gender: data.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
                Age: data.memberregistrationprincipal.Personal_Info.Age,
                // NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                // NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                // MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })
            MemRegWithDifferentMemType.SelectMemberType(MemberType)

            MemRegPrincipal.verifyAddressInformation({
                PostalCode: data.memberregistrationprincipal.AddressInfo.PostalCode,
                UnitNumber: data.memberregistrationprincipal.AddressInfo.UnitNumber,
                POBOX: data.memberregistrationprincipal.AddressInfo.POBOX,
                MyMailbox: data.memberregistrationprincipal.AddressInfo.MyMailbox,
            })

            // MemRegPrincipal.verifyContactInformation({
            //     Handphone: data.memberregistrationprincipal.ContactInfo.Handphone,
            //     // EmailAddress: data.memberregistrationprincipal.ContactInfo.EmailAddress,
            //     HomeNumber: data.memberregistrationprincipal.ContactInfo.HomeNumber,
            //     EmergencyContact: data.memberregistrationprincipal.ContactInfo.EmergencyContact,
            // })

            //Click Save And Next Button
            BatchMembershipRegistrationDetail.SaveAndNext()

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

            //Select Pricipal Tenure
            BatchMembershipRegistrationListing.principalTenureSelection(PrnBatchTenure, NameOnNRIC)

            //Click Save And Next button
            BatchMembershipRegistrationDetail.SaveAndNextTenure()

            // Shopping cart and Payments
            ShoppingCartPayment.fillOutandApplyPaymentWithComplete('CHEQUE')

        })
    })

}
export default NonMemberCreation

