/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Registration Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationDetail from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import BatchMembershipRegistrationListing from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import data from '../../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
// import MembersRegistrationPrincipal from '../../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegistration/MemberRegistrationPrincipal'
// import MemberRegistrationDependent from '../../../../../Forms-Testing/FS-014-Membership-Registration-Renewal/014-MemberRegistration/MemberRegistrationDependent'
import MemberRegistrationPrincipal from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import Membership_Registration_Dependent from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MembershipRegistrationDependent'
import MembershipTenureSelection from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import ShoppingCartPayments from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import NonMemberCreation from './NonMembershipCreation'
import login from '../../../../../../fixtures/login'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

// const BatchMembershipRegistration = () => {

describe('[TS13] Batch Membership Registration Details form', function () {

    //Page definition
    const MemRegPrincipal = new MemberRegistrationPrincipal()
    const MemRegDependent = new Membership_Registration_Dependent()
    const MemTenureSelection = new MembershipTenureSelection()

    const ShoppingCartPayment = new ShoppingCartPayments()

    //Existing Member
    const NRICExistingMember = '955J'
    const IDExistingMember = 'A300000695'
    const ExistingPrincipalName = 'Test_User 66254'

    //Non-Member 
    const NRICNonMember = 'S886'
    const FullNRICNonMem = 'S8862759H'
    const DateOfBirth = '31-Jan-1980'
    const NonMemberName = 'Test User 825'

    // New Member Principal
    const NRICNewMemberPrincipal = 'S7577136C'

    // New Member Dependent
    const NRICNewMemberDependent = 'S0904576G'
    const NewDependentPrincipalID = 'A300000337'
    const NewDependentPrincipalName = 'Test User 125'

    const ApplicationDate = '10-Aug-2020'


    const BatchName = 'Auto-' + Math.floor(Math.random() * 100000 * 2) + data.BatchMemRegDetail.BatchName
    const BatchType = data.BatchMemRegDetail.BatchType
    const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
    const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
    const PromationReg = data.BatchMemRegDetail.PromationReg
    const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
    const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
    const PaymentMode = data.BatchMemRegDetail.PaymentMode

    const MemberId = data.BatchMemRegDetail.InBatchRegistration.MemberID
    const NIRC = data.BatchMemRegDetail.InBatchRegistration.NIRC
    const Last4NIRC = data.BatchMemRegDetail.InBatchRegistration.Last4NRIC
    const DOB = data.BatchMemRegDetail.InBatchRegistration.DateofBirth

    it('[TC01] Creating a Batch Membership Registration with Existing Membership', function () {

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
            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg,
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
        BatchMembershipRegistrationDetail.FillOutFormForExistingMember(IDExistingMember, NRICExistingMember)

        //Click Next button
        BatchMembershipRegistrationDetail.Next()

        // Swlct Member Category
        // BatchMembershipRegistrationDetail.SelectMemberCategory('Defendent')

        //Enter Applicatioin Date
        BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

        //Click Save And Next button
        BatchMembershipRegistrationDetail.SaveAndNext()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

        //Select Pricipal Tenure
        BatchMembershipRegistrationListing.principalTenureSelection('5 Years')

        //Click Save And Next button
        BatchMembershipRegistrationDetail.SaveAndNextTenure()

        // Shopping cart and Payments
        ShoppingCartPayment.fillOutandApplyPaymentWithComplete('CHEQUE')


    })

    it('[TC02] Creating a Batch Membership Registration with Non-Member', function () {

        const BatchNameNonMem = 'Auto-Batch' + Math.floor(Math.random() * 100000 * 2)

        cy.visit('/membership/batchMembershipRegistrationList')

        //Click create new button
        BatchMembershipRegistrationListing.createNew()

        //Wait for page to load
        cy.wait(20000)

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
        cy.wait(10000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

        //Add new member to the batch
        BatchMembershipRegistrationDetail.AddMember()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

        //Add Existing Member to the batch
        BatchMembershipRegistrationDetail.FillOutFormForNonMember(NRICNonMember, DateOfBirth)

        //Click Save And Next button
        BatchMembershipRegistrationDetail.Next()

        //Select Member Category
        BatchMembershipRegistrationDetail.SelectMemberCategory('Principal')
        cy.wait(10000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Principal')

        //Enter Applicatioin Date
        BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

        const NameOnNRIC = NonMemberName
        MemRegPrincipal.verifyPersonalInformation({
            MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
            NameOnNRIC: NameOnNRIC,
            NameOnCard: NameOnNRIC,
            Nric: FullNRICNonMem,
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
            ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
        })

        MemRegPrincipal.verifyAddressInformation({
            PostalCode: data.memberregistrationprincipal.AddressInfo.PostalCode,
            UnitNumber: data.memberregistrationprincipal.AddressInfo.UnitNumber,
            POBOX: data.memberregistrationprincipal.AddressInfo.POBOX,
            MyMailbox: data.memberregistrationprincipal.AddressInfo.MyMailbox,
        })

        MemRegPrincipal.verifyContactInformation({
            Handphone: data.memberregistrationprincipal.ContactInfo.Handphone,
            // EmailAddress: data.memberregistrationprincipal.ContactInfo.EmailAddress,
            HomeNumber: data.memberregistrationprincipal.ContactInfo.HomeNumber,
            EmergencyContact: data.memberregistrationprincipal.ContactInfo.EmergencyContact,
        })
        MemRegPrincipal.verifyPreferredContactMode({
            SelectAll: data.memberregistrationprincipal.ContactInfo.SelectAll,
            Email: data.memberregistrationprincipal.ContactInfo.Email,
            Mail: data.memberregistrationprincipal.ContactInfo.Mail,
            SMS: data.memberregistrationprincipal.ContactInfo.SMS,
            VoiceCall: data.memberregistrationprincipal.ContactInfo.VoiceCall,
            PushNotification: data.memberregistrationprincipal.ContactInfo.PushNotification,
            WhatsApp: data.memberregistrationprincipal.ContactInfo.WhatsApp,
        })

        //Click Save And Next Button
        BatchMembershipRegistrationDetail.SaveAndNext()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

        //Select Pricipal Tenure
        BatchMembershipRegistrationListing.principalTenureSelection('5 Years')

        //Click Save And Next button
        BatchMembershipRegistrationDetail.SaveAndNextTenure()

        // Shopping cart and Payments
        ShoppingCartPayment.fillOutandApplyPayment('CHEQUE')

    })

    it('[TC03] Creating a Batch Membership Registration with New Member(Principal)', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        const BatchNameNewPrincipal = 'Auto-Batch' + Math.floor(Math.random() * 100000 * 2)

        cy.wait(5000)
        //Click create new button
        BatchMembershipRegistrationListing.createNew()

        //Wait for page to load
        cy.wait(10000)

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

        //Fillout form
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(
            BatchNameNewPrincipal, BatchType, RecTalkSessionID, MemRegTenure, PromationReg,
            MemRenewalTenure, PromationRenewal, PaymentMode
        )
        //Click Save button
        BatchMembershipRegistrationDetail.Save()

        //Verify Page Title
        // BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Listing')

        //Verify Batch Name is displayed in the listing
        // BatchMembershipRegistrationListing.VerifyNewlyCreatedItem(BatchName, PaymentMode)

        BatchMembershipRegistrationListing.FilterByBatchName(BatchNameNewPrincipal)

        //Click on Search Filter button
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        //click on table entry
        BatchMembershipRegistrationListing.ClickOnNewlyCreatedItem()
        cy.wait(20000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

        //Add new member to the batch
        BatchMembershipRegistrationDetail.AddMember()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

        //Add New member (Principal) to the batch
        BatchMembershipRegistrationDetail.NewMemberPrincipal()
        cy.wait(5000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Principal')

        //Fillout Member Registration form
        // MembersRegistrationPrincipal()



        BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

        MemRegPrincipal.verifyPersonalInformation({
            MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
            NameOnNRIC: BatchName,
            NameOnCard: BatchName,
            Nric: NRICNewMemberPrincipal,
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
            ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
        })


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
        MemRegPrincipal.verifyPreferredContactMode({
            SelectAll: data.memberregistrationprincipal.ContactInfo.SelectAll,
            Email: data.memberregistrationprincipal.ContactInfo.Email,
            Mail: data.memberregistrationprincipal.ContactInfo.Mail,
            SMS: data.memberregistrationprincipal.ContactInfo.SMS,
            VoiceCall: data.memberregistrationprincipal.ContactInfo.VoiceCall,
            PushNotification: data.memberregistrationprincipal.ContactInfo.PushNotification,
            WhatsApp: data.memberregistrationprincipal.ContactInfo.WhatsApp,
        })
        MemRegPrincipal.verifyConsentInformation({
            MarketingConsent: data.memberregistrationprincipal.ContactInfo.MarketingConsent,
            ServiceNotificationConsent: data.memberregistrationprincipal.ContactInfo.ServiceNotificationConsent,
            TransactionalConsent: data.memberregistrationprincipal.ContactInfo.TransactionalConsent,
        })

        MemRegPrincipal.verifyPreferredSafraClubs({
            safraJurong: data.memberregistrationprincipal.InterestedAreaInformation.safraJurong,
            safraPunggol: data.memberregistrationprincipal.InterestedAreaInformation.safraPunggol,
            safraToaPayoh: data.memberregistrationprincipal.InterestedAreaInformation.safraToaPayoh,
            safraMtFaber: data.memberregistrationprincipal.InterestedAreaInformation.safraMtFaber,
            safraTampines: data.memberregistrationprincipal.InterestedAreaInformation.safraTampines,
            safraYishun: data.memberregistrationprincipal.InterestedAreaInformation.safraYishun,
        })
        MemRegPrincipal.verifySafraBrands({
            energyOneGym: data.memberregistrationprincipal.InterestedAreaInformation.energyOneGym,
            kidzAmazeSplshIndrPlayGrnd: data.memberregistrationprincipal.InterestedAreaInformation.kidzAmazeSplshIndrPlayGrnd,
            finsSwimSchool: data.memberregistrationprincipal.InterestedAreaInformation.finsSwimSchool,
        })
        MemRegPrincipal.verifyIamInterestedIn({
            allEventsAndActivities: data.memberregistrationprincipal.InterestedAreaInformation.allEventsAndActivities,
            allPeaksAndPromos: data.memberregistrationprincipal.InterestedAreaInformation.allPeaksAndPromos,
            fitnessAndAdventure: data.memberregistrationprincipal.InterestedAreaInformation.fitnessAndAdventure,
            childEnrichmentActivities: data.memberregistrationprincipal.InterestedAreaInformation.childEnrichmentActivities,
            lifeLongLearning: data.memberregistrationprincipal.InterestedAreaInformation.lifeLongLearning,
            leisureAndEntrtnmnt: data.memberregistrationprincipal.InterestedAreaInformation.lifeLongLearning,
            foodAndBeverages: data.memberregistrationprincipal.InterestedAreaInformation.foodAndBeverages,
            shoppingAndGroceries: data.memberregistrationprincipal.InterestedAreaInformation.shoppingAndGroceries,
            travel: data.memberregistrationprincipal.InterestedAreaInformation.travel,
            motoring: data.memberregistrationprincipal.InterestedAreaInformation.motoring,
            healthAndBeauty: data.memberregistrationprincipal.InterestedAreaInformation.healthAndBeauty,
            safraPtsRewardsProgramme: data.memberregistrationprincipal.InterestedAreaInformation.safraPtsRewardsProgramme,
            ensman: data.memberregistrationprincipal.InterestedAreaInformation.ensman
        })

        MemRegPrincipal.verifyInterestGrpsAndMicroClubs({
            safraAdventureClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraAdventureClub,
            bitezFandB: data.memberregistrationprincipal.InterestGroupsMicroClubs.bitezFandB,
            safraCommSrvcsClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraCommSrvcsClub,
            safraCompSportsClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraCompSportsClub,
            safraDigitalMediaClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraDigitalMediaClub,
            safraEntrpnrsClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraEntrpnrsClub,
            fuseEntrtnmnt: data.memberregistrationprincipal.InterestGroupsMicroClubs.fuseEntrtnmnt,
            safraGolfingSection: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraGolfingSection,
            safraMovieMax: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraMovieMax,
            safraPhotoClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraPhotoClub,
            safraRunningClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraRunningClub,
            safraShootingClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraShootingClub,
            safraSocialBadmntnClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraSocialBadmntnClub,
            safraTechClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraTechClub,
            safraTravelClub: data.memberregistrationprincipal.InterestGroupsMicroClubs.safraTravelClub,

        })


        //Click Save And Next Button
        BatchMembershipRegistrationDetail.SaveAndNext()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

        //Select Pricipal Tenure
        BatchMembershipRegistrationListing.principalTenureSelection('5 Years')

        //Click Save And Next button
        BatchMembershipRegistrationDetail.SaveAndNextTenure()

        // Shopping cart and Payments
        ShoppingCartPayment.fillOutandApplyPayment('CHEQUE')


    })

    it('[TC04] Creating a Batch Membership Registration with New Member(Defendent)', function () {

        //filloutPersonalInformation
        const TestUser = 'Test User-' + Math.floor(Math.random() * 100000 * 2)
        const BatchNameNewDep = 'Batch Name' + Math.floor(Math.random() * 100000 * 2)

        const MemberCategory = data.memregdependent.Personal_Info.MemberCategory
        const DependentType = data.memregdependent.Personal_Info.DependentType
        const NameOnNRIC = data.memregdependent.Personal_Info.NameOnNRIC
        const NameOnCard = data.memregdependent.Personal_Info.NameOnCard
        const NRIC = data.memregdependent.Personal_Info.NRIC
        const Gender = data.memregdependent.Personal_Info.Gender
        const DateofBirth = data.memregdependent.Personal_Info.DateofBirth
        const Age = data.memregdependent.Personal_Info.Age
        const AppDate = "22-Nov-2022"
        const PrincipalID = data.memregdependent.PrincipalID
        const PrincipalTypeCode = data.memregdependent.PrincipalTypeCode
        const MemberType = data.memregdependent.Personal_Info.MemberType
        const Nationality = data.memregdependent.Personal_Info.Nationality
        const MaritalStatus = data.memregdependent.Personal_Info.MaritalStatus
        const CardType = data.memregdependent.Personal_Info.CardType
        const InterestinDBSCard = data.memregdependent.Personal_Info.InterestinDBSCard
        const AllowtoRedeemSAFRAPoints = data.memregdependent.Personal_Info.AllowtoRedeemSAFRAPoints
        const ProfilePicture = data.memregdependent.Personal_Info.ProfilePicture

        cy.visit('/membership/batchMembershipRegistrationList')

        //Click create new button
        BatchMembershipRegistrationListing.createNew()

        //Wait for page to load
        cy.wait(20000)

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

        //Fillout form
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(
            BatchNameNewDep, BatchType, RecTalkSessionID, MemRegTenure, PromationReg,
            MemRenewalTenure, PromationRenewal, PaymentMode
        )

        //Click Save button
        BatchMembershipRegistrationDetail.Save()

        // Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')

        //Verify Batch Name is displayed in the listing
        // BatchMembershipRegistrationListing.VerifyNewlyCreatedItem(BatchName, PaymentMode)

        //Filter by Batch Type
        // BatchMembershipRegistrationListing.FilterByBatchType(BatchType)

        //Filters by Batch Name
        BatchMembershipRegistrationListing.FilterByBatchName(BatchNameNewDep)

        //Click on Search Filter button
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        //click on table entry
        BatchMembershipRegistrationListing.ClickOnNewlyCreatedItem()
        cy.wait(15000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')

        //Add new member to the batch
        BatchMembershipRegistrationDetail.AddMember()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

        //Add New member (Defendent) to the batch
        BatchMembershipRegistrationDetail.NewMemberDependent()
        cy.wait(5000) //wait for page to load

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Dependent')

        //Fillout Member Registration Dependent form
        // MemberRegistrationDependent()


        MemRegDependent.fillsoutPersonalInformation(
            MemberCategory, DependentType, TestUser, TestUser, NRICNewMemberDependent,
            Gender, DateofBirth, Age, PrincipalID, MemberType, MemberType, Nationality,
            MaritalStatus, CardType, InterestinDBSCard, AllowtoRedeemSAFRAPoints,
            ProfilePicture)

        // Select Principal ID
        MemRegDependent.SelectPrincipalID(NewDependentPrincipalID)

        //verifyAddressInformation
        const IndependentAddress = data.memregdependent.AddressInfo.IndependentAddress
        const PostalCode = data.memregdependent.AddressInfo.PostalCode
        const UnitNumber = data.memregdependent.AddressInfo.UnitNumber
        const PoBox = data.memregdependent.AddressInfo.PoBox
        const MyMailbox = data.memregdependent.AddressInfo.MyMailbox
        MemRegDependent.verifyAddressInformation({ IndependentAddress, PostalCode, UnitNumber, PoBox, MyMailbox })

        //Enter Applicatioin Date
        BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)
        // BatchMembershipRegistrationDetail.EnterDateOfBirth(DateofBirth)

        // fillsoutContactInformation
        const Handphone = data.memregdependent.ContactInfo.Handphone
        const EmailAddress = data.memregdependent.ContactInfo.EmailAddress
        const HomeNumber = data.memregdependent.ContactInfo.HomeNumber
        const EmergencyContact = data.memregdependent.ContactInfo.EmergencyContact
        MemRegDependent.fillsoutContactInformation({ Handphone, EmailAddress, HomeNumber, EmergencyContact })


        // filloutPreferredContactMode
        const SelectAll = data.memregdependent.ContactInfo.SelectAll
        const Email = data.memregdependent.ContactInfo.Email
        const Mail = data.memregdependent.ContactInfo.Mail
        const SMS = data.memregdependent.ContactInfo.SMS
        const VoiceCall = data.memregdependent.ContactInfo.VoiceCall
        const PushNotification = data.memregdependent.ContactInfo.PushNotification
        const WhatsApp = data.memregdependent.ContactInfo.WhatsApp
        MemRegDependent.filloutPreferredContactMode({ SelectAll, Email, Mail, SMS, VoiceCall, PushNotification, WhatsApp })

        //filloutConsentInformation
        const MarketingConsent = data.memregdependent.ContactInfo.MarketingConsent
        const ServiceNotificationConsent = data.memregdependent.ContactInfo.ServiceNotificationConsent
        const TransactionalConsent = data.memregdependent.ContactInfo.TransactionalConsent
        MemRegDependent.filloutConsentInformation({ MarketingConsent, ServiceNotificationConsent, TransactionalConsent })

        // Fill-Out Documentary Proof Section
        const proofOfDocOption = data.memregdependent.ProofDoc.proofOfDocOption2
        const proofDocUpload = data.memregdependent.ProofDoc.DocumentaryProof
        MemRegDependent.fillOutProofDocument(proofOfDocOption, proofDocUpload)


        //fillOutPreferredSafraClubs
        const safraJurong = data.memregdependent.InterestedAreaInformation.safraJurong
        const safraPunggol = data.memregdependent.InterestedAreaInformation.safraPunggol
        const safraToaPayoh = data.memregdependent.InterestedAreaInformation.safraToaPayoh
        const safraMtFaber = data.memregdependent.InterestedAreaInformation.safraMtFaber
        const safraTampines = data.memregdependent.InterestedAreaInformation.safraTampines
        const safraYishun = data.memregdependent.InterestedAreaInformation.safraYishun
        MemRegDependent.fillOutPreferredSafraClubs({ safraJurong, safraPunggol, safraToaPayoh, safraMtFaber, safraTampines, safraYishun })

        //fillOutSafraBrands
        const energyOneGym = data.memregdependent.InterestedAreaInformation.energyOneGym
        const kidzAmazeSplshIndrPlayGrnd = data.memregdependent.InterestedAreaInformation.kidzAmazeSplshIndrPlayGrnd
        const finsSwimSchool = data.memregdependent.InterestedAreaInformation.finsSwimSchool
        MemRegDependent.fillOutSafraBrands({ energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool })

        //filloutIamInterestedIn
        const allEventsAndActivities = data.memregdependent.InterestedAreaInformation.allEventsAndActivities
        const allPeaksAndPromos = data.memregdependent.InterestedAreaInformation.allPeaksAndPromos
        const fitnessAndAdventure = data.memregdependent.InterestedAreaInformation.fitnessAndAdventure
        const childEnrichmentActivities = data.memregdependent.InterestedAreaInformation.childEnrichmentActivities
        const lifeLongLearning = data.memregdependent.InterestedAreaInformation.lifeLongLearning
        const leisureAndEntrtnmnt = data.memregdependent.InterestedAreaInformation.leisureAndEntrtnmnt
        const foodAndBeverages = data.memregdependent.InterestedAreaInformation.foodAndBeverages
        const shoppingAndGroceries = data.memregdependent.InterestedAreaInformation.shoppingAndGroceries
        const travel = data.memregdependent.InterestedAreaInformation.travel
        const motoring = data.memregdependent.InterestedAreaInformation.motoring
        const healthAndBeauty = data.memregdependent.InterestedAreaInformation.healthAndBeauty
        const safraPtsRewardsProgramme = data.memregdependent.InterestedAreaInformation.safraPtsRewardsProgramme

        MemRegDependent.filloutIamInterestedIn({
            allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities,
            lifeLongLearning, leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme,
        })
        //filloutSafraNewsLetter
        const ensman = data.memregdependent.Safranewsletter.ensman
        MemRegDependent.filloutSafraNewsLetter({ ensman })


        //fillOutInterestGrpsAndMicroClubs
        const safraAdventureClub = data.memregdependent.InterestGroupsMicroClubs.safraAdventureClub
        const bitezFandB = data.memregdependent.InterestGroupsMicroClubs.bitezFandB
        const safraCommSrvcsClub = data.memregdependent.InterestGroupsMicroClubs.safraCommSrvcsClub
        const safraCompSportsClub = data.memregdependent.InterestGroupsMicroClubs.safraCompSportsClub
        const safraDigitalMediaClub = data.memregdependent.InterestGroupsMicroClubs.safraDigitalMediaClub
        const safraEntrpnrsClub = data.memregdependent.InterestGroupsMicroClubs.safraEntrpnrsClub
        const fuseEntrtnmnt = data.memregdependent.InterestGroupsMicroClubs.fuseEntrtnmnt
        const safraGolfingSection = data.memregdependent.InterestGroupsMicroClubs.safraGolfingSection
        const safraMovieMax = data.memregdependent.InterestGroupsMicroClubs.safraMovieMax
        const safraPhotoClub = data.memregdependent.InterestGroupsMicroClubs.safraPhotoClub
        const safraRunningClub = data.memregdependent.InterestGroupsMicroClubs.safraRunningClub
        const safraShootingClub = data.memregdependent.InterestGroupsMicroClubs.safraShootingClub
        const safraSocialBadmntnClub = data.memregdependent.InterestGroupsMicroClubs.safraSocialBadmntnClub
        const safraTechClub = data.memregdependent.InterestGroupsMicroClubs.safraTechClub
        const safraTravelClub = data.memregdependent.InterestGroupsMicroClubs.safraTravelClub

        MemRegDependent.fillOutInterestGrpsAndMicroClubs({ safraAdventureClub, bitezFandB, safraCommSrvcsClub, safraCompSportsClub, safraDigitalMediaClub, safraEntrpnrsClub, fuseEntrtnmnt, safraGolfingSection, safraMovieMax, safraPhotoClub, safraRunningClub, safraShootingClub, safraSocialBadmntnClub, safraTechClub, safraTravelClub })


        //Click Save And Next Button
        BatchMembershipRegistrationDetail.SaveAndNext()

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

        //Select Pricipal Tenure
        BatchMembershipRegistrationListing.principalTenureSelection('5 Years')

        //Select Dependent
        MemTenureSelection.dependentTenureSelection(TestUser, '5 Years')

        MemTenureSelection.selectDependent(TestUser)

        //Click Save And Next button
        BatchMembershipRegistrationDetail.SaveAndNextTenure()

        // Shopping cart and Payments
        ShoppingCartPayment.fillOutandApplyPayment('CHEQUE')


    })

    it('[TC05] Search functionality and Deleting Batch Membership Registration', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        //Verify Page Title
        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')


        //Filter by Batch Name
        BatchMembershipRegistrationListing.FilterByBatchName(BatchName)

        //Click on Search Filter button
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        //Select table row 
        BatchMembershipRegistrationListing.SelecTableItam(BatchType, 'Open')

        //Click on Delete button
        BatchMembershipRegistrationListing.delete()

    })
})

// }

// export default BatchMembershipRegistration
