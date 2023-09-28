/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationListing from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import BatchMembershipRegistrationDetail from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import MemberRegistrationWithDifferentMemberType from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/RegistrationWithDifferentMemberType'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'

import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

const BatchMembershipRegistrationAddNewMemberPrincipal = (SFS, CustomerNRICFull, DOB, MemberType, ApplicationDate, Tenure) => {


    describe('[TS07] Batch Membership Registration With New Member (Principal) ', function () {

        const MemRegPrincipal = new MemberRegistrationPrincipal()
        const ShoppingCartPayment = new ShoppingCartPayments()
        const MemRegWithDifferentMemType = new MemberRegistrationWithDifferentMemberType()
        const MemModuleSettings = new MembershipModuleSetting()



        it('[TC01] Creating a Batch Membership Registration and Add New Member (Principal)', function () {

            const BatchName = 'Auto-Batch' + Math.floor(Math.random() * 100000 * 4) + 'b'
            const BatchType = data.BatchMemRegDetail.BatchType
            const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
            const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
            const PromationReg = data.BatchMemRegDetail.PromationReg
            const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
            const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
            const PaymentMode = data.BatchMemRegDetail.PaymentMode
            const NameOnNRIC = Math.floor(Math.random() * 1000 * 3) + 'Batch_User' + Math.floor(Math.random() * 100000 * 3)

            //Enable SFS
            if (SFS == "SFS Enable") {
                cy.visit('/membership/moduleSettings')
                cy.wait(5000)

                MemModuleSettings.SFSActivate('CHECK')
                cy.wait(5000)
            }

            cy.visit('/membership/batchMembershipRegistrationList')

            //Click create new button
            BatchMembershipRegistrationListing.createNew()

            //Wait for page to load
            cy.wait(5000)

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Fillout form
            BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(
                BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg,
                MemRenewalTenure, PromationRenewal, PaymentMode
            )
            //Click Save button
            BatchMembershipRegistrationDetail.Save()

            //Filter by Batch Name
            BatchMembershipRegistrationListing.FilterByBatchName(BatchName)

            //Click on Search Filter button
            BatchMembershipRegistrationListing.ClickSeacrhFilters()

            //click on table entry
            BatchMembershipRegistrationListing.ClickOnNewlyCreatedItem()
            cy.wait(5000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Add new member to the batch
            BatchMembershipRegistrationDetail.AddMember()
            cy.wait(5000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

            // click on new member principal button
            BatchMembershipRegistrationDetail.ClickNewMemberPrincipal()

            cy.wait(5000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Principal')

            //Enter Applicatioin Date
            BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

            BatchMembershipRegistrationDetail.FilloutPersonalInformation({
                MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: NameOnNRIC,
                NameOnCard: NameOnNRIC,
                Nric: CustomerNRICFull,
                Gender: data.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: DOB,
                Age: data.memberregistrationprincipal.Personal_Info.Age,
                // NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                // NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                // MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })

            MemRegWithDifferentMemType.SelectMemberType(MemberType)

            MemRegPrincipal.verifyAddressInformation({
                PostalCode: data.memberregistrationprincipal.AddressInfo.PostalCode,
                UnitNumber: data.memberregistrationprincipal.AddressInfo.UnitNumber,
                POBOX: data.memberregistrationprincipal.AddressInfo.POBOX,
                MyMailbox: data.memberregistrationprincipal.AddressInfo.MyMailbox,
            })

            MemRegPrincipal.verifyContactInformation({
                Handphone: data.memberregistrationprincipal.ContactInfo.Handphone,
                EmailAddress: data.memberregistrationprincipal.ContactInfo.EmailAddress,
                HomeNumber: data.memberregistrationprincipal.ContactInfo.HomeNumber,
                EmergencyContact: data.memberregistrationprincipal.ContactInfo.EmergencyContact,
            })

            //Click Save And Next Button
            BatchMembershipRegistrationDetail.SaveAndNext()

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

            cy.wait(2000)
            //Select Pricipal Tenure
            BatchMembershipRegistrationListing.principalTenureSelection(Tenure, NameOnNRIC)

            //Click Save And Next button
            BatchMembershipRegistrationDetail.SaveAndNextTenure()

            // Shopping cart and Payments
            ShoppingCartPayment.fillOutandApplyPaymentWithComplete('CHEQUE')

            // verify New Member In Membership Registration and Renewal Listing
            BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(CustomerNRICFull)

            //click save button
            BatchMembershipRegistrationDetail.Save()

            //verify page title 
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')

        })
    })

}
export default BatchMembershipRegistrationAddNewMemberPrincipal

