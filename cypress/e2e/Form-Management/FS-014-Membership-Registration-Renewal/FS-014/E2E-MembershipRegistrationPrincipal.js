/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import elems_PageHeader from '../../../../../page-objects/SMCMS/Elements/Common/PageHeader'
import MembershipTenureSelection from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import MemberListingPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Listing/MemberListing'
import MemberRegistrationDependent from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MembershipRegistrationDependent'
// Import Pages
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../fixtures/Data_Module/CustomerCreationData'
//import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'

const MembershipRegistration = ()=> {

describe('[TS07] Member Registration Principal', function (){
//Page definition
const MemModuleSettings = new MembershipModuleSetting()
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const MemberList = new MemberListingPage()
const MemberRegDependent = new MemberRegistrationDependent()
const CustomerCreation = new CustomerCreationPage()

const UserID = Math.floor(Math.random() * 1000 )

const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID + "@synergyonline.com"
const CustomerNRIC = '631J'
const CustomerNRICFull = 'S8779631J'

const UserIDDep = Math.floor(Math.random() * 1000 )
const DepChildName = Customerdata.CustomerCreationDependentChild.RegistrationInformation.name + UserIDDep
const DepChildEmail = Customerdata.CustomerCreationDependentChild.ContactInformation.emailAddress + UserIDDep + "@synergyonline.com"
const DepChildNRIC = ''
const DepChildNRICFull = 'S7816924I'

const UserIDSpouse = Math.floor(Math.random() * 1000 )
const DepSouseName = Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.name + UserIDSpouse
const DepSouseEmail = Customerdata.CustomerCreationDependentSpouse.ContactInformation.emailAddress + UserIDSpouse + "@synergyonline.com"
const DepSouseNRIC = '576F'
const DepSouseNRICFull = 'S4492210Z'


it('[TC01] Customer Creation and Principal Registration', function () {

///////////////////////////////CUSTOMER CREATION////////////////////////////////////////

    //Enable SFS
    // cy.visit('/membership/moduleSettings')
    // cy.wait(8000)
    
    // MemModuleSettings.SFSActivate('CHECK')
    // cy.wait(5000)
    
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
        gender:Customerdata.CustomerCreationPrincipal.RegistrationInformation.gender,
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

    CustomerCreation.fillOutInterestAreaInformation({

        //Preferred SAFRA clubs
        clubFaber: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubFaber,
        clubPayoh: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubPayoh,
        clubTampines: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubTampines,
        clubYishun: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubYishun,
        clubJurong: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubJurong,
        clubPunggol: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.clubPunggol,

        //SAFRA Brands
        brandEnergyOneGym: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.brandEnergyOneGym,
        brandKidzAmaza: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.brandKidzAmaza,
        brandFINS: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.brandFINS,

        //I am interested in
        interestedAllEvents: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedAllEvents,
        interestedAllPeaks: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedAllPeaks,
        interestedFitness: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedFitness,
        interestedChild: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedChild,
        interestedLifelong: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedLifelong,
        interestedLeisure: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedLeisure,
        interestedFood: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedFood,
        interestedShopping: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedShopping,
        interestedTravel: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedTravel,
        interestedMotoring: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedMotoring,
        interestedHealth: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedHealth,
        interestedSAFRAPOINTS: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.interestedSAFRAPOINTS,

        //SAFRA Newsletter
        SAFRANewsletter: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.SAFRANewsletter,

        //Interest Groups & Micro Clubs
        groupAdventure: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupAdventure,
        groupBitez: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupBitez,
        groupCommService: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupCommService,
        groupCompetitive: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupCompetitive,
        groupDigimedia:Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupDigimedia,
        groupEntrep: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupEntrep,
        groupFuse: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupFuse,
        groupGolf: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupGolf,
        groupMovie: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupMovie,
        groupPhotograph: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupPhotograph,
        groupRunning: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupRunning,
        groupShooting: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupShooting,
        groupSocialBadminton: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupSocialBadminton,
        groupTech: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupTech,
        groupTravel: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupTravel
    });

    CustomerCreation.save();

///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////
    
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
        // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
        })
    

///////////////////////////////DEPENDENT CHILD REGISTRATION///////////////////////////////////
    
    //Add Dependent
    MemRegPrincipal.AddDependent()
    cy.wait(5000)

    // MemberRegDependent.fillsoutPersonalInformation({
    //     MemberCategory: Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberCategory, 
    //     DependentType: Customerdata.CustomerCreationDependentChild.RegistrationInformation.DependentType, 
    //     NameOnNRIC: DepChildName, //Extra
    //     NameOnCard: DepChildName, 
    //     NRIC: DepChildNRICFull, 
    //     Gender: Customerdata.CustomerCreationDependentChild.RegistrationInformation.Gender, 
    //     DateofBirth: Customerdata.CustomerCreationDependentChild.RegistrationInformation.DateofBirth,
    //     Age: Customerdata.CustomerCreationDependentChild.RegistrationInformation.Age,
    //     PrincipalID: undefined, //Extra
    //     PrincipalTypeCode: Customerdata.CustomerCreationDependentChild.RegistrationInformation.PrincipalType, 
    //     MemberType: Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberType, 
    //     Nationality: Customerdata.CustomerCreationDependentChild.RegistrationInformation.Nationality,
    //     MaritalStatus: Customerdata.CustomerCreationDependentChild.RegistrationInformation.MaritalStatus,
    //     CardType: Customerdata.CustomerCreationDependentChild.RegistrationInformation.CardType,
    //     InterestinDBSCard: Customerdata.CustomerCreationDependentChild.RegistrationInformation.InterestinDBSCard,
    //     AllowtoRedeemSAFRAPoints: Customerdata.CustomerCreationDependentChild.RegistrationInformation.AllowtoRedeemSAFRAPoints,
    //     // ProfilePicture: Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
    // }) 

    MemberRegDependent.fillsoutPersonalInformation(
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberCategory, 
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.DependentType, 
        DepChildName, //Extra
        DepChildName, 
        DepChildNRICFull, 
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.Gender, 
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.DateofBirth,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.Age,
        undefined, //Extra
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.PrincipalType, 
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.MemberType, 
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.Nationality,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.MaritalStatus,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.CardType,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.InterestinDBSCard,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.AllowtoRedeemSAFRAPoints,
        Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
    ) 
    
    MemberRegDependent.fillsoutContactInformation({
        Handphone:Customerdata.CustomerCreationDependentChild.ContactInformation.handPhone, 
        EmailAddress:DepChildEmail, 
        HomeNumber:Customerdata.CustomerCreationDependentChild.ContactInformation.homeNumber, 
        EmergencyContact:Customerdata.CustomerCreationDependentChild.ContactInformation.emergencyContact
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

    MemberRegDependent.fillOutPreferredSafraClubs({
        safraJurong:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubJurong, 
        safraPunggol:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubPunggol, 
        safraToaPayoh:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubPayoh, 
        safraMtFaber:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubFaber, 
        safraTampines:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubTampines, 
        safraYishun:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.clubYishun
    })
    MemberRegDependent.fillOutSafraBrands({
        energyOneGym: Customerdata.CustomerCreationDependentChild.InterestAreaInformation.brandEnergyOneGym, 
        kidzAmazeSplshIndrPlayGrnd:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.brandKidzAmaza, 
        finsSwimSchool:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.brandFINS
    })

    MemberRegDependent.fillOutInterestGrpsAndMicroClubs({
        safraAdventureClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupAdventure, 
        bitezFandB:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupBitez, 
        safraCommSrvcsClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupCommService, 
        safraCompSportsClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupCompetitive, 
        safraDigitalMediaClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupDigimedia,
        safraEntrpnrsClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupEntrep, 
        fuseEntrtnmnt:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupFuse, 
        safraGolfingSection:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupGolf, 
        safraMovieMax:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupMovie, 
        safraPhotoClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupPhotograph, 
        safraRunningClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupRunning, 
        safraShootingClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupShooting,
        safraSocialBadmntnClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupSocialBadminton, 
        safraTechClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupTech, 
        safraTravelClub:Customerdata.CustomerCreationDependentChild.InterestAreaInformation.groupTravel
    })    

    MemRegPrincipal.SaveAndNext()
    cy.wait(10000)
    MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')
        
    //Add Spouse 
//////////////////////////////// DEPENDNENT SPOUSE REGISTRATION ////////////////////////////////////////////////
    MemRegPrincipal.AddDependent()
        cy.wait(5000)

        // MemberRegDependent.fillsoutPersonalInformation({
        //     MemberCategory: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberCategory, 
        //     DependentType: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DependentType, 
        //     NameOnNRIC: DepSouseName, //Extra
        //     NameOnCard: DepSouseName, 
        //     NRIC: DepSouseNRICFull, 
        //     Gender: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.gender, 
        //     DateofBirth: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DateofBirth,
        //     Age: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Age,
        //     PrincipalID: undefined, //Extra
        //     PrincipalTypeCode: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.PrincipalType, 
        //     MemberType: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberType, 
        //     Nationality: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Nationality,
        //     MaritalStatus: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MaritalStatus,
        //     CardType: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.CardType,
        //     InterestinDBSCard: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.InterestinDBSCard,
        //     AllowtoRedeemSAFRAPoints: Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.AllowtoRedeemSAFRAPoints,
        //     // ProfilePicture: Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
        // }) 
        MemberRegDependent.fillsoutPersonalInformation(
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberCategory, 
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DependentType, 
            DepSouseName, //Extra
            DepSouseName, 
            DepSouseNRICFull, 
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.gender, 
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.DateofBirth,
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Age,
            undefined, //Extra
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.PrincipalType, 
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MemberType, 
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.Nationality,
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.MaritalStatus,
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.CardType,
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.InterestinDBSCard,
            Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.AllowtoRedeemSAFRAPoints,
            Customerdata.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
        ) 
        
        MemberRegDependent.fillsoutContactInformation({
            Handphone:Customerdata.CustomerCreationDependentSpouse.ContactInformation.handPhone, 
            EmailAddress:DepSouseEmail, //Extra
            HomeNumber:Customerdata.CustomerCreationDependentSpouse.ContactInformation.homeNumber, 
            EmergencyContact:Customerdata.CustomerCreationDependentSpouse.ContactInformation.emergencyContact
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

        MemberRegDependent.fillOutPreferredSafraClubs({
            safraJurong:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubJurong, 
            safraPunggol:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubPunggol, 
            safraToaPayoh:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubPayoh, 
            safraMtFaber:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubFaber, 
            safraTampines:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubTampines, 
            safraYishun:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.clubYishun
        })
        MemberRegDependent.fillOutSafraBrands({
            energyOneGym: Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.brandEnergyOneGym, 
            kidzAmazeSplshIndrPlayGrnd:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.brandKidzAmaza, 
            finsSwimSchool:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.brandFINS
        })
        
        MemberRegDependent.fillOutInterestGrpsAndMicroClubs({
            safraAdventureClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupAdventure, 
            bitezFandB:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupBitez, 
            safraCommSrvcsClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupCommService, 
            safraCompSportsClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupCompetitive, 
            safraDigitalMediaClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupDigimedia,
            safraEntrpnrsClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupEntrep, 
            fuseEntrtnmnt:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupFuse, 
            safraGolfingSection:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupGolf, 
            safraMovieMax:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupMovie, 
            safraPhotoClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupPhotograph, 
            safraRunningClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupRunning, 
            safraShootingClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupShooting,
            safraSocialBadmntnClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupSocialBadminton, 
            safraTechClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupTech, 
            safraTravelClub:Customerdata.CustomerCreationDependentSpouse.InterestAreaInformation.groupTravel
        })

    MemRegPrincipal.SaveAndNext()
    cy.wait(10000)
    MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')
    
    MemRegPrincipal.SaveAndNextPrincipal()
    cy.wait(5000)

    ///////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////


    MemTenureSelect.principalTenureSelection(PrincipalName,'10 Years')
    MemTenureSelect.dependentTenureSelection(DepChildName, '10 Years')
    MemTenureSelect.dependentTenureSelection(DepSouseName, '10 Years')

    // Defendent
    MemTenureSelect.selectDependent(DepChildName)
    MemTenureSelect.selectDependent(DepSouseName)


    MemTenureSelect.addToCart()
    cy.wait(5000)    
    const Mode = data.PrincipalPayment.PAYMENT_MODE
    const Amount = data.PrincipalPayment.AMOUNT

    ///////////////////////////////////PAYMENTS//////////////////////////////////////////////////
    ShoppingCart.fillOutandApplyPayments(Mode,Amount)
    cy.wait(2000)
    ShoppingCart.Paynow()
    cy.wait(5000)
    
    //Logout
    cy.LogoutOfSmcms()

    // //Logout
    // cy.wait(2000)

    ////////////////////////////////// VERIFICATION ////////////////////////////////////////////////
    
    // CANNOT VERIFY IN THE LISTING TABLE 

    // cy.visit('/membership/memberList')

    // cy.wait(2000)


    // MEMBER LISTING FORM FILTERS ARE NOT WORKING
    // MemberList.fillOutFilters({ 
    //     name:PrincipalName
    //     //memberID: PrincipalID,
    //     //NRIC: 
    // }) 

    // cy.wait(2000)

    // MemberList.VerifyListingItem(PrincipalName,'New')    
})
})

}
export default MembershipRegistration

