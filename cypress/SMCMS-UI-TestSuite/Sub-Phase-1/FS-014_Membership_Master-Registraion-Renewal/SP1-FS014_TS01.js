/*****************************************************
 * FS#: FS-014
 * Test Scenario: [SP1-FS014_TS01] Customer Check In and Check out
 *
 * @author: hstone
 *****************************************************/
// Import Pages
import CustomerCheckInPage from '../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage.js'
import MemberInformation from '../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/MemberInformation.js'
import AzureAccess from '../../../page-objects/SMCMS/PageActions/Common/AzureAccess.js'

 describe('[SP1-FS014_TS01] Customer Check In and Check out', function () {
    
    // Page Definitions
    const Azure = new AzureAccess()
    const CustomerCheckIn = new CustomerCheckInPage()
    const MemberInfo = new MemberInformation()

    it('[SP1-FS014_TS01_TC01-TC06] Customer Check-In and Update & Continue Functionality', function () {
        cy.GetTestDataSet('[SP1-FS014_TS01_TC01-TC06] Customer Check-In and Update & Continue Functionality').then( data_set => { 
            // Test Data Set Loop
            data_set.forEach( data => {
                // Login to Azure
                // Azure.login(data)
            
                // User Check In
                cy.visit('https://qa-smcms-fe.azurewebsites.net/customercheckinpage')  // TO BE DELETED
                CustomerCheckIn.checkIn({
                    type: data.checkin.type, 
                    value1: data.checkin.value1, 
                    value2: data.checkin.value2,
                    expectedPage: "Customer Check-In Page"
                })

                cy.visit('https://qa-smcms-fe.azurewebsites.net/memberinformation')  // TO BE DELETED
                // Verify Member Information Section
                MemberInfo.verifyMemberInfoSection({
                    nameOnNric: data.memberInfoSection.nameOnNric, 
                    dateOfBirth: data.memberInfoSection.dateOfBirth, 
                    gender: data.memberInfoSection.gender, 
                    membershipCardType: data.memberInfoSection.membershipCardType, 
                    nric: data.memberInfoSection.nric, 
                    principalId: data.memberInfoSection.principalId, 
                    membershipId: data.memberInfoSection.membershipId, 
                    nationality: data.memberInfoSection.nationality,
                    membershipType: data.memberInfoSection.membershipType, 
                    membershipExpiryDate: data.memberInfoSection.membershipExpiryDate, 
                    lastMembershipTxn: data.memberInfoSection.lastMembershipTxn, 
                    ns50ManualOptIn: data.memberInfoSection.ns50ManualOptIn
                })

                MemberInfo.verifyInterestGrpTab({
                    interestGroups: data.interestGroups
                })

                MemberInfo.verifyEnergyOneGymMembershipTab({
                    energyOneGymMemberships: data.energyOneGymMemberships
                })
                MemberInfo.verifyFamilyInformationTab({
                    familyInformation: data.familyInformation
                })

                // Fill-Out Member Information Details
                MemberInfo.fillOutAddressInfo({
                    postalCode: data.addressInfo.postalCode,
                    unitNumber: data.addressInfo.unitNumber,
                    poBox:  data.addressInfo.poBox,
                    myMailBox: data.addressInfo.myMailBox
                })

                MemberInfo.fillOutContactInfo({
                    handPhone: data.contactInfo.handPhone,
                    emailAddress: data.contactInfo.emailAddress,
                    homeNumber: data.contactInfo.homeNumber,
                    emergencyContact: data.contactInfo.emergencyContact
                })

                MemberInfo.fillOutPreferredContactMode({
                    selectAll: data.preferredContactMode.all,
                    email: data.preferredContactMode.email,
                    mail: data.preferredContactMode.mail, 
                    sms: data.preferredContactMode.sms, 
                    voiceCall: data.preferredContactMode.voiceCall, 
                    pushNotif: data.preferredContactMode.pushNotif, 
                    whatsApp: data.preferredContactMode.whatsApp
                })

                MemberInfo.fillOutConsentInformation({
                    marketingConsent: data.consentInfo.marketingConsent, 
                    serviceNotifConsent: data.consentInfo.serviceNotifConsent, 
                    transactionalConsent: data.consentInfo.transactionalConsent
                })

                MemberInfo.fillOutPreferredSafraClubs({
                    safraJurong: data.preferredSafraClubs.safraJurong, 
                    safraPunggol: data.preferredSafraClubs.safraPunggol, 
                    safraToaPayoh: data.preferredSafraClubs.safraToaPayoh, 
                    safraMtFaber: data.preferredSafraClubs.safraMtFaber, 
                    safraTampines: data.preferredSafraClubs.safraTampines, 
                    safraYishun: data.preferredSafraClubs.safraYishun
                })

                MemberInfo.fillOutSafraBrands({
                    energyOne: data.safraBrands.energyOneGym, 
                    kidzAmazeSplshIndrPlayGrnd: data.safraBrands.kidzAmazeSplshIndrPlyGrnd, 
                    finsSwimSchool: data.safraBrands.finsSwimSchool
                })

                MemberInfo.fillOutIamInterestedIn({
                    allEventsAndActivities: data.iAmInterestedIn.allEventsAndAct, 
                    allPeaksAndPromos: data.iAmInterestedIn.allPeaksAndPromos, 
                    fitnessAndAdventure: data.iAmInterestedIn.fitnessAndAdventure, 
                    childEnrichmentActivities: data.iAmInterestedIn.childEnrchmntActivities, 
                    lifeLongLearning: data.iAmInterestedIn.lifeLongLearning, 
                    leisureAndEntrtnmnt: data.iAmInterestedIn.leisureAndEntrtnmnt, 
                    foodAndBeverages: data.iAmInterestedIn.foodAndBeverages, 
                    shoppingAndGroceries: data.iAmInterestedIn.shoppingAndGroceries, 
                    travel: data.iAmInterestedIn.travel, 
                    motoring: data.iAmInterestedIn.motoring, 
                    healthAndBeauty: data.iAmInterestedIn.healthAndBeauty, 
                    safraPtsRewardsProgramme: data.iAmInterestedIn.safraPtsRewardsProg
                })

                MemberInfo.fillOutSafraNewsLetter({
                    ensman: data.safraNewsLetter.ensman
                })

                MemberInfo.fillOutInterestGrpsAndMicroClubs({
                    safraAdventureClub: data.interestGrpsAndMicroClubs.safraAdventureClub, 
                    bitezFandB: data.interestGrpsAndMicroClubs.bitezFandB, 
                    safraCommSrvcsClub: data.interestGrpsAndMicroClubs.safraCommSrvcsClub, 
                    safraCompSportsClub: data.interestGrpsAndMicroClubs.safraCompSportsClub, 
                    safraDigitalMediaClub: data.interestGrpsAndMicroClubs.safraDigitalMediaClub, 
                    safraEntrpnrsClub: data.interestGrpsAndMicroClubs.safraEntrprnrsClub, 
                    fuseEntrtnmnt: data.interestGrpsAndMicroClubs.fuseEntrtnmnt, 
                    safraGolfingSection: data.interestGrpsAndMicroClubs.safraGolfingSection, 
                    safraMovieMax: data.interestGrpsAndMicroClubs.safraMovieMax, 
                    safraPhotoClub: data.interestGrpsAndMicroClubs.safraPhotoClub, 
                    safraRunningClub: data.interestGrpsAndMicroClubs.safraRunningClub, 
                    safraShootingClub: data.interestGrpsAndMicroClubs.safraShootingClub, 
                    safraSocialBadmntnClub: data.interestGrpsAndMicroClubs.safraSocialBdmntonClub, 
                    safraTechClub: data.interestGrpsAndMicroClubs.safraTechClub, 
                    safraTravelClub: data.interestGrpsAndMicroClubs.safraTravelClub
                })
                
                MemberInfo.fillOutComments({
                    comments: data.comments
                })

                MemberInfo.updateAndContinue()
            })
        })
    })

    it.skip('[SP1-FS014_TS01_TC07-TC12] Customer Check-In and Continue Functionality', function () {
        cy.GetTestDataSet('[SP1-FS014_TS01_TC07-TC12] Customer Check-In and Continue Functionality').then( data_set => { 
            // Test Data Set Loop
            data_set.forEach( data => {
                // Login to Azure
                Azure.login(data)
                // User Check In
                cy.visit('https://qa1-smcms-fe.azurewebsites.net/membership/customerCheckin')  // TO BE DELETED
                CustomerCheckIn.checkIn(data.checkin.type, data.checkin.value1, data.checkin.value2)
                MemberInfo.cancel('Customer Check-In Page')
                CustomerCheckIn.checkIn(data.checkin.type, data.checkin.value1, data.checkin.value2)

                MemberInfo.continue()
            })
        })
    })
})