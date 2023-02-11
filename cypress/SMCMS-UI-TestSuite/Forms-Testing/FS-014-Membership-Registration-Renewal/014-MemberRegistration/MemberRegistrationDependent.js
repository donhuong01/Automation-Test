/*****************************************************
 * Page Function: Sample Script to Test Member Registration Dependent
 *
 * @author: rsampang
 *****************************************************/

// Import Pages
import Membership_Registration_Dependent from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MembershipRegistrationDependent'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
 
const MemberRegistrationDependent = () => {

describe('[TS07] Member Registration Dependent]', () => {

        //Page definition
        const MemRegDependent = new Membership_Registration_Dependent()

        it('[TC01] Adding a dependent with Proof of data', () =>
    {
        cy.visit('https://qa-smcms.safra.sg/membership/registrationFormDependent')
        cy.wait(10000)

        //filloutPersonalInformation
        const MemberCategory = data.memregdependent.Personal_Info.MemberCategory
        const DependentType = data.memregdependent.Personal_Info.DependentType
        const NameOnNRIC = data.memregdependent.Personal_Info.NameOnNRIC
        const NameOnCard = data.memregdependent.Personal_Info.NameOnCard
        const NRIC = data.memregdependent.Personal_Info.NRIC
        const Gender = data.memregdependent.Personal_Info.Gender
        const DateofBirth = data.memregdependent.Personal_Info.DateofBirth
        const Age = data.memregdependent.Personal_Info.Age
        const PrincipalID = data.memregdependent.PrincipalID
        const PrincipalTypeCode = data.memregdependent.PrincipalTypeCode
        const MemberType = data.memregdependent.Personal_Info.MemberType
        const Nationality = data.memregdependent.Personal_Info.Nationality
        const MaritalStatus = data.memregdependent.Personal_Info.MaritalStatus
        const CardType = data.memregdependent.Personal_Info.CardType
        const InterestinDBSCard = data.memregdependent.Personal_Info.InterestinDBSCard
        const AllowtoRedeemSAFRAPoints = data.memregdependent.Personal_Info.AllowtoRedeemSAFRAPoints
        const ProfilePicture = data.memregdependent.Personal_Info.ProfilePicture
        MemRegDependent.fillsoutPersonalInformation({MemberCategory, DependentType, NameOnNRIC, NameOnCard, NRIC, Gender, DateofBirth,Age,
            PrincipalID, PrincipalTypeCode, MemberType, Nationality, MaritalStatus, CardType, InterestinDBSCard, AllowtoRedeemSAFRAPoints, ProfilePicture})

        //verifyAddressInformation
        const IndependentAddress = data.memregdependent.AddressInfo.IndependentAddress
        const PostalCode = data.memregdependent.AddressInfo. PostalCode
        const UnitNumber = data.memregdependent.AddressInfo.UnitNumber
        const PoBox = data.memregdependent.AddressInfo.PoBox
        const MyMailbox = data.memregdependent.AddressInfo.MyMailbox
        MemRegDependent.verifyAddressInformation({IndependentAddress, PostalCode, UnitNumber, PoBox, MyMailbox})
            
        // fillsoutContactInformation
            const Handphone = data.memregdependent.ContactInfo.Handphone
            const EmailAddress = data.memregdependent.ContactInfo.EmailAddress
            const HomeNumber = data.memregdependent.ContactInfo.HomeNumber
            const EmergencyContact = data.memregdependent.ContactInfo.EmergencyContact
        MemRegDependent.fillsoutContactInformation({Handphone, EmailAddress, HomeNumber, EmergencyContact})


        // filloutPreferredContactMode
            const SelectAll = data.memregdependent.ContactInfo.SelectAll
            const Email = data.memregdependent.ContactInfo.Email
            const Mail = data.memregdependent.ContactInfo.Mail
            const SMS = data.memregdependent.ContactInfo.SMS
            const VoiceCall = data.memregdependent.ContactInfo.VoiceCall
            const PushNotification = data.memregdependent.ContactInfo.PushNotification
            const  WhatsApp = data.memregdependent.ContactInfo.WhatsApp
        MemRegDependent.filloutPreferredContactMode({SelectAll, Email, Mail, SMS, VoiceCall, PushNotification, WhatsApp})

        //filloutConsentInformation
            const MarketingConsent = data.memregdependent.ContactInfo.MarketingConsent
            const ServiceNotificationConsent = data.memregdependent.ContactInfo.ServiceNotificationConsent
            const TransactionalConsent = data.memregdependent.ContactInfo.TransactionalConsent
        MemRegDependent.filloutConsentInformation({MarketingConsent, ServiceNotificationConsent, TransactionalConsent})

        // Fill-Out Documentary Proof Section
            const proofOfDocOption =  data.memregdependent.ProofDoc.proofOfDocOption2
            const proofDocUpload = data.memregdependent.ProofDoc.DocumentaryProof
        MemRegDependent.fillOutProofDocument(proofOfDocOption,proofDocUpload)


        //fillOutPreferredSafraClubs
        const safraJurong = data.memregdependent.InterestedAreaInformation.safraJurong
        const safraPunggol = data.memregdependent.InterestedAreaInformation.safraPunggol
        const safraToaPayoh = data.memregdependent.InterestedAreaInformation.safraToaPayoh
        const safraMtFaber = data.memregdependent.InterestedAreaInformation.safraMtFaber
        const safraTampines = data.memregdependent.InterestedAreaInformation.safraTampines
        const safraYishun = data.memregdependent.InterestedAreaInformation.safraYishun
        MemRegDependent.fillOutPreferredSafraClubs({safraJurong, safraPunggol, safraToaPayoh, safraMtFaber,  safraTampines, safraYishun })

        //fillOutSafraBrands
        const energyOneGym = data.memregdependent.InterestedAreaInformation.energyOneGym
        const kidzAmazeSplshIndrPlayGrnd = data.memregdependent.InterestedAreaInformation.kidzAmazeSplshIndrPlayGrnd
        const finsSwimSchool = data.memregdependent.InterestedAreaInformation.finsSwimSchool
        MemRegDependent.fillOutSafraBrands({energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool})

        //filloutIamInterestedIn
        const allEventsAndActivities= data.memregdependent.InterestedAreaInformation.allEventsAndActivities
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
        
        MemRegDependent.filloutIamInterestedIn({allEventsAndActivities,  allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities,
            lifeLongLearning, leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme, })
        //filloutSafraNewsLetter
            const ensman = data.memregdependent.Safranewsletter.ensman
        MemRegDependent.filloutSafraNewsLetter({ensman})
        

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

        MemRegDependent.fillOutInterestGrpsAndMicroClubs({safraAdventureClub, bitezFandB, safraCommSrvcsClub, safraCompSportsClub, safraDigitalMediaClub, safraEntrpnrsClub,  fuseEntrtnmnt, safraGolfingSection, safraMovieMax,  safraPhotoClub, safraRunningClub, safraShootingClub,  safraSocialBadmntnClub,  safraTechClub, safraTravelClub})
            
        
        // // MemRegDependent.Save()
        // MemRegDependent.Cancel()
        // cy.wait(6000)
                        
        })
})

}

export default MemberRegistrationDependent