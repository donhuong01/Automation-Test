/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Registration Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationDetail from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import BatchMembershipRegistrationListing from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
// Import Pages
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/MembershipTenureSelection'
import elems_MemberListing from '../../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import MemberListingPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Listing/MemberListing'
// Import Pages
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import MemberRegistrationWithDifferentMemberType from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/RegistrationWithDifferentMemberType'
import MemberRegistrationDependent from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/DependentRegistration'






const BatchMembershipRegistrationWithExistingMember = (SFS, MaritalStatus, MemberType, CustomerNRICFull, PrincipalTenure
    , Dependent, DepChildNRICFull, DependentChildTenure, Spouse, DepSouseNRICFull, DependentSpouseTenure, BatchTenure) => {

    describe('[TS01] Batch Membership Registration With Existing Member', function () {

        //Page definition
        const MemRegPrincipal = new MemberRegistrationPrincipal()
        const ShoppingCartPayment = new ShoppingCartPayments()
        const MemModuleSettings = new MembershipModuleSetting()
        const MemTenureSelect = new MembershipTenureSelection()
        const ShoppingCart = new ShoppingCartPayments()
        const MemberList = new MemberListingPage()
        const CustomerCreation = new CustomerCreationPage()
        const MemRegWithDifferentMemType = new MemberRegistrationWithDifferentMemberType()
        const MemberRegDependent = new MemberRegistrationDependent()


        // extract member id's
        var MemberId;
        var DepSpouseId;
        var DepChildId;

        const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);
        const UserID = Math.floor(Math.random() * 1000500 * 5)
        const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
        const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress //+ UserID + "ly" + "@synergyonline.com"


        const ApplicationDate = '28-Sep-2023'
        const BatchName = 'Auto-' + Math.floor(Math.random() * 100000 * 4) + data.BatchMemRegDetail.BatchName
        const BatchType = data.BatchMemRegDetail.BatchType
        const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
        const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
        const PromationReg = data.BatchMemRegDetail.PromationReg
        const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
        const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
        const PaymentMode = data.BatchMemRegDetail.PaymentMode

        const UserIDDep = Math.floor(Math.random() * 100055 * 4)
        const DepChildName = Customerdata.CustomerCreationDependentChild.RegistrationInformation.name + UserIDDep
        const DepChildEmail = Customerdata.CustomerCreationDependentChild.ContactInformation.emailAddress + UserIDDep + "l" + "@synergyonline.com"

        const UserIDSpouse = Math.floor(Math.random() * 100000 * 5)
        const DepSouseName = Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.name + 'jl' + UserIDSpouse
        const DepSouseEmail = Customerdata.CustomerCreationDependentSpouse.ContactInformation.emailAddress + UserIDSpouse + "@synergyonline.com"




        it('[TC01] Creating Membership Registration ', function () {

            ///////////////////////////////CUSTOMER CREATION////////////////////////////////////////

            if (SFS === "SFS Enable") {
                //Enable SFS
                cy.visit('/membership/moduleSettings')
                cy.wait(8000)

                MemModuleSettings.SFSActivate('CHECK')
                cy.wait(5000)
            }

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
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
                homeNumber: '61237123',

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

            ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////

            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(5000)

            MemRegWithDifferentMemType.verifyPersonalInformation({
                MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: PrincipalName,
                NameOnCard: PrincipalName,
                Nric: CustomerNRICFull,
                Gender: data.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
                Age: data.memberregistrationprincipal.Personal_Info.Age,
                // NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                // NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                // MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })

            MemRegWithDifferentMemType.SelectMemberType(MemberType)




            ///////////////////////////////DEPENDENT CHILD REGISTRATION///////////////////////////////////
            if (MaritalStatus !== "N/A" && Dependent === "YES") {

                cy.log('Child ' + DepChildName + 'Adding')
                //Add Dependent
                MemRegPrincipal.AddDependent()
                cy.wait(5000)

                MemberRegDependent.fillsoutPersonalInformation(
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberCategory,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.DependentType,
                    DepChildName, //Extra
                    DepChildName,
                    DepChildNRICFull,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.Gender,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.DateofBirth,
                    // Customerdata.CustomerCreationDependentChild.RegistrationInformation.Age,
                    // undefined, //Extra
                    // Customerdata.CustomerCreationDependentChild.RegistrationInformation.PrincipalType,
                    // Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberType,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.Nationality,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.MaritalStatus,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.CardType,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.InterestinDBSCard,
                    Customerdata.CustomerCreationDependentChild.RegistrationInformation.AllowtoRedeemSAFRAPoints,
                    // ProfilePicture: Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
                )



                MemberRegDependent.fillsoutContactInformation({
                    Handphone: Customerdata.CustomerCreationDependentChild.ContactInformation.handPhone,
                    EmailAddress: DepChildEmail,
                    HomeNumber: Customerdata.CustomerCreationDependentChild.ContactInformation.homeNumber,
                    EmergencyContact: Customerdata.CustomerCreationDependentChild.ContactInformation.emergencyContact
                })

                MemberRegDependent.filloutPreferredContactMode({
                    SelectAll: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModeSelectAll,
                    Email: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModeEmail,
                    Mail: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModeMail,
                    SMS: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModeSMS,
                    VoiceCall: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModeVoiceCall,
                    PushNotification: Customerdata.CustomerCreationDependentChild.ContactInformation.preferredContactModePushNotification
                })

                MemberRegDependent.filloutConsentInformation({
                    MarketingConsent: Customerdata.CustomerCreationDependentChild.ContactInformation.consentInformationMarketing,
                    ServiceNotificationConsent: Customerdata.CustomerCreationDependentChild.ContactInformation.consentInformationServiceNotification,
                    TransactionalConsent: Customerdata.CustomerCreationDependentChild.ContactInformation.consentInformationTransactional
                })



                MemRegPrincipal.SaveAndNext()
                cy.wait(5000)
                MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')
            }


            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && MaritalStatus !== "Divorced" && Spouse === "YES") {

                ////Add Spouse 
                cy.log('Spouse ' + DepSouseName + 'Added')
                // //////////////////////////////// DEPENDNENT SPOUSE REGISTRATION ////////////////////////////////////////////////
                MemRegPrincipal.AddDependent()
                cy.wait(5000)

                MemberRegDependent.fillsoutPersonalInformation(
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberCategory,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DependentType,
                    DepSouseName, //Extra
                    DepSouseName,
                    DepSouseNRICFull,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.gender,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DateofBirth,
                    // Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Age,
                    // PrincipalID: undefined, //Extra
                    // Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.PrincipalType, 
                    // Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberType, 
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Nationality,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MaritalStatus,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.CardType,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.InterestinDBSCard,
                    Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.AllowtoRedeemSAFRAPoints,
                    // ProfilePicture: Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
                )

                MemberRegDependent.fillsoutContactInformation({
                    Handphone: Customerdata.CustomerCreationDependentSpouse.ContactInformation.handPhone,
                    EmailAddress: DepSouseEmail, //Extra
                    HomeNumber: Customerdata.CustomerCreationDependentSpouse.ContactInformation.homeNumber,
                    EmergencyContact: Customerdata.CustomerCreationDependentSpouse.ContactInformation.emergencyContact
                })

                MemberRegDependent.filloutPreferredContactMode({
                    SelectAll: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeSelectAll,
                    Email: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeEmail,
                    Mail: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeMail,
                    SMS: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeSMS,
                    VoiceCall: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeVoiceCall,
                    PushNotification: Customerdata.CustomerCreationDependentSpouse.ContactInformation.preferredContactModePushNotification
                })

                MemberRegDependent.filloutConsentInformation({
                    MarketingConsent: Customerdata.CustomerCreationDependentSpouse.ContactInformation.consentInformationMarketing,
                    ServiceNotificationConsent: Customerdata.CustomerCreationDependentSpouse.ContactInformation.consentInformationServiceNotification,
                    TransactionalConsent: Customerdata.CustomerCreationDependentSpouse.ContactInformation.consentInformationTransactional
                })


                MemRegPrincipal.SaveAndNext()
                cy.wait(8000)
                MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')

            }

            MemRegPrincipal.SaveAndNextPrincipal()
            cy.wait(5000)

            /////////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////

            MemTenureSelect.principalTenureSelection(MemberType, PrincipalName, PrincipalTenure)

            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && Dependent === "YES") {

                MemTenureSelect.principalTenureSelection(DepChildName, DependentChildTenure)
                MemTenureSelect.selectDependent(DepChildName)

            }
            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && MaritalStatus !== "Divorced" && Spouse === "YES") {

                MemTenureSelect.principalTenureSelection(DepSouseName, DependentSpouseTenure)
                // MemTenureSelect.selectDependent(DepSouseName)

            }

            if (MemberType === "LF") {
                MemTenureSelect.Submit()
            }
            else {

                MemTenureSelect.addToCart()


                /////////////////////////////////////PAYMENTS//////////////////////////////////////////////////
                ShoppingCart.fillOutandApplyPayment('I-Banking')
                cy.wait(4000)

            }

            //Logout
            cy.LogoutOfSmcms()

            //Logout
            cy.wait(2000)

            ////////////////////////////////// VERIFICATION ////////////////////////////////////////////////

            // CANNOT VERIFY IN THE LISTING TABLE 

            cy.visit('/membership/memberList')

            cy.wait(2000)


            //MEMBER LISTING FORM FILTERS ARE NOT WORKING
            MemberList.fillOutFilters({
                name: PrincipalName
                //memberID: PrincipalID,
                //NRIC: 
            })

            cy.wait(2000)

            MemberList.VerifyMemberInListingItem(PrincipalName, 'Member')

            cy.Click(elems_MemberListing.LINK_MEMBERID)
            cy.wait(8000)
            cy.xpath(elems_MemberListing.LBL_MEMBERID).then(MemId => {
                cy.log(MemId.text())
                MemberId = MemId.text()
            })

            cy.wait(10000)

            if (MaritalStatus !== "N/A" && Dependent === "YES") {

                cy.visit('/membership/memberList')

                cy.wait(2000)


                //MEMBER LISTING FORM FILTERS ARE NOT WORKING
                MemberList.fillOutFilters({
                    name: DepChildName
                    //memberID: PrincipalID,
                    //NRIC: 
                })

                cy.wait(6000)

                cy.Click(elems_MemberListing.LINK_MEMBERID)
                cy.wait(7000)
                cy.xpath(elems_MemberListing.LBL_MEMBERID).then(MemId => {
                    cy.log(MemId.text())
                    DepChildId = MemId.text()
                })

                cy.wait(5000)

            }


            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && MaritalStatus !== "Divorced" && Spouse === "YES") {
                cy.visit('/membership/memberList')

                cy.wait(5000)


                //MEMBER LISTING FORM FILTERS ARE NOT WORKING
                MemberList.fillOutFilters({
                    name: DepSouseName
                    //memberID: PrincipalID,
                    //NRIC: 
                })

                cy.wait(2000)

                cy.Click(elems_MemberListing.LINK_MEMBERID)
                cy.wait(7000)
                cy.xpath(elems_MemberListing.LBL_MEMBERID).then(MemId => {
                    cy.log(MemId.text())
                    DepSpouseId = MemId.text()
                })

                cy.wait(5000)
            }
        })


        it('[TC02] Creating a Batch Membership Registration and Add Existing Member', function () {

            cy.visit('/membership/batchMembershipRegistrationList')

            //Wait for page to load
            cy.wait(5000)


            //Click create new button
            BatchMembershipRegistrationListing.createNew()
            //Wait for page to load
            cy.wait(10000)

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Fillout form
            BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(
                BatchName, BatchType, /*RecTalkSessionID,*/ MemRegTenure, PromationReg,
                MemRenewalTenure, PromationRenewal, PaymentMode
            )

            //Click Save button
            BatchMembershipRegistrationDetail.Save()

            //Verify Page Title
            // BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Listing')

            //Filter by Batch Name
            BatchMembershipRegistrationListing.FilterByBatchName(BatchName)

            //Click on Search Filter button
            BatchMembershipRegistrationListing.ClickSeacrhFilters()

            //Verify Batch Name is displayed in the listing
            BatchMembershipRegistrationListing.VerifyNewlyCreatedItem(BatchName, PaymentMode)

            //click on table entry
            BatchMembershipRegistrationListing.ClickOnNewlyCreatedItem()
            cy.wait(5000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

            //Add new member to the batch
            BatchMembershipRegistrationDetail.AddMember()

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

            //Add Existing Member to the batch
            BatchMembershipRegistrationDetail.FillOutFormForExistingMember(MemberId, CustomerNRIC)

            //Click Next button
            BatchMembershipRegistrationDetail.Next()
            cy.wait(5000)

            // Swlct Member Category
            // BatchMembershipRegistrationDetail.SelectMemberCategory('Defendent')

            //Enter Applicatioin Date
            BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

            //Click Save And Next button
            BatchMembershipRegistrationDetail.SaveAndNext()

            cy.wait(2000)
            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

            //Select Pricipal Tenure
            BatchMembershipRegistrationListing.principalTenureSelection(BatchTenure, PrincipalName)

            //Click Save And Next button
            BatchMembershipRegistrationDetail.SaveAndNextTenure()

            // Shopping cart and Payments
            ShoppingCartPayment.fillOutandApplyPaymentWithComplete('I-Banking')
            // verify New Member In Membership Registration and Renewal Listing
            BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(CustomerNRICFull)




            if (MaritalStatus !== "N/A" && Dependent === "YES") {


                //Add new member to the batch
                BatchMembershipRegistrationDetail.AddMember()

                //Verify Page Title
                BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

                //Add Existing Member to the batch
                BatchMembershipRegistrationDetail.FillOutFormForExistingMember(DepChildId, DepChildNRICFull)

                //Click Next button
                BatchMembershipRegistrationDetail.Next()

                // Swlct Member Category
                // BatchMembershipRegistrationDetail.SelectMemberCategory('Defendent')
                cy.wait(5000)
                //Enter Applicatioin Date
                BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

                //Click Save And Next button
                BatchMembershipRegistrationDetail.SaveAndNext()

                //Verify Page Title
                BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

                //Select Pricipal Tenure
                BatchMembershipRegistrationListing.principalTenureSelection(BatchTenure, DepChildName)

                //Click Save And Next button
                BatchMembershipRegistrationDetail.SaveAndNextTenure()

                // Shopping cart and Payments
                ShoppingCartPayment.fillOutandApplyPaymentWithComplete('I-Banking')
                // verify New Member In Membership Registration and Renewal Listing
                BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(DepChildNRICFull)



            }

            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && MaritalStatus !== "Divorced" && Spouse === "YES") {


                //Add new member to the batch
                BatchMembershipRegistrationDetail.AddMember()

                //Verify Page Title
                BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

                //Add Existing Member to the batch
                BatchMembershipRegistrationDetail.FillOutFormForExistingMember(DepSpouseId, DepSouseNRICFull)

                //Click Next button
                BatchMembershipRegistrationDetail.Next()
                cy.wait(5000)
                // Swlct Member Category
                // BatchMembershipRegistrationDetail.SelectMemberCategory('Defendent')

                //Enter Applicatioin Date
                BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

                //Click Save And Next button
                BatchMembershipRegistrationDetail.SaveAndNext()

                //Verify Page Title
                BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

                //Select Pricipal Tenure
                BatchMembershipRegistrationListing.principalTenureSelection(BatchTenure, DepSouseName)

                //Click Save And Next button
                BatchMembershipRegistrationDetail.SaveAndNextTenure()

                // Shopping cart and Payments
                ShoppingCartPayment.fillOutandApplyPaymentWithComplete('I-Banking')
                // verify New Member In Membership Registration and Renewal Listing
                BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(DepSouseNRICFull)


            }
            //click save button
            BatchMembershipRegistrationDetail.Save()

            //verify page title 
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')


        })

    })

}

export default BatchMembershipRegistrationWithExistingMember
