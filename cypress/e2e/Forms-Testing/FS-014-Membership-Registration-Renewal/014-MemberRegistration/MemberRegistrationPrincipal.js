/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: rsampang
 *****************************************************/

// Import Pages
import MemberRegistrationPrincipal from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

const MembersRegistrationPrincipal = () => {

describe('[TS07] Member Registration Principal]', function (){
//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()


it('[TC01] Adding a Principal with Proof of data', function () {
    cy.visit('/membership/registrationFormPrincipal')
    cy.wait(10000)


MemRegPrincipal.verifyPersonalInformation({
    MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
    NameOnNRIC: data.memberregistrationprincipal.Personal_Info.NameOnNRIC,
    NameOnCard: data.memberregistrationprincipal.Personal_Info.NameOnCard,
    Nric: data.memberregistrationprincipal.Personal_Info.Nric,
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

// MemRegPrincipal.Cancel()
//MemRegPrincipal.AddDependent()

    })
})

}

export default MembersRegistrationPrincipal