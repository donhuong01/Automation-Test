/*****************************************************
 * Page Function: Sample Script to Test SFS Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import MemberRegistrationPrincipal from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import MembershipTenureSelection from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
// import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-040-Clubs Sales/ShoppingCartandPayment'
// import ShoppingCartPayments from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment'
import MemberListingPage from '../../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Member Listing/MemberListing'
import MemberRegistrationDependent from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MembershipRegistrationDependent'
import CustomerCreationPage from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import MembershipModuleSetting from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import Customerdata from '../../../../fixtures/Data_Module/CustomerCreationData'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import elems_Landing from '../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import elems_PageHeader from '../../../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_CustomerCheckInPage from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import Commons from '../../../../page-objects/SMCMS/PageActions/Common/Common'

const SFSMemberRegistion = (CustomerNRICFull, DepChildNRICFull, DepSouseNRICFull) => {



    describe('[TS07] SFS Member Registration]', function () {



        //Page definition
        const MemModuleSettings = new MembershipModuleSetting()
        const MemRegPrincipal = new MemberRegistrationPrincipal()
        const MemTenureSelect = new MembershipTenureSelection()
        // const ShoppingCart = new ShoppingCartPayments()
        const MemberList = new MemberListingPage()
        const MemberRegDependent = new MemberRegistrationDependent()
        const CustomerCreation = new CustomerCreationPage()
        const Common = new Commons()


        //Random IDs generation for Principal and Dependents
        const UserID = Math.floor(Math.random() * 100000)

        const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID // "TestReceipt49"//
        const PrincipalEmail = PrincipalName + "@test.com" //Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress //"safraonlineuser009@gmail.com"//


        //For Principal Creation
        // const PrincipalName = data.CustomerCreationPrincipal.RegistrationInformation.name+UserID
        // //const PrincipalName = 'Etest2'+UserID//'SFS User ' + UserID //
        // const PrincipalEmail = PrincipalName.replace(/^\s+|\s+$/gm)+"@test.com"//data.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID + "@test.com" //'safraonlineuser014@gmail.com'//
        // const CustomerNRIC = '691J'           //To be changed Each time

        // const CustomerNRICFull = 'S0419691J'  //To be changed Each time
        const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);

        //For Dependent Child
        const UserIDDep = Math.floor(Math.random() * 10000)
        const DepChildName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserIDDep
        // const DepChildName = 'EtestC2'+UserID//'SFS User - C' + UserIDDep //
        const DepChildEmail = DepChildName.replace(/^\s+|\s+$/gm) + "@test.com"//data.CustomerCreationDependentChild.ContactInformation.emailAddress + UserIDDep + "@test.com" //'safraonlineuser014-C@gmail.com'//
        // const DepChildNRIC = '167D'            //To be changed Each time
        // const DepChildNRICFull = 'S7296807G'   //To be changed Each time

        //For Dependent Spouse
        const UserIDSpouse = Math.floor(Math.random() * 10000)
        const DepSouseName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserIDSpouse
        // const DepSouseName = 'EtestS2' + UserIDSpouse+UserID //'TestuserQA98 - S'//
        const DepSouseEmail = DepSouseName.replace(/^\s+|\s+$/gm) + "@test.com" //'safraonlineuser014-S@gmail.com'//
        // const DepSouseNRIC = '319Z'             //To be changed Each time
        // const DepSouseNRICFull = 'S3170144I'    //To be changed Each time


        it('[TC01] Customer Creation and SFS Principal Registration with Child and Spouse', function () {

            //Enable SFS
            // cy.visit('/membership/moduleSettings')
            // cy.wait(5000)

            // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')

            // MemModuleSettings.SFSActivate('CHECK')
            // cy.wait(5000)

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDateCheckin(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, data.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                // DOB: data.CustomerCreationPrincipal.RegistrationInformation.DOB,
                gender: data.CustomerCreationPrincipal.RegistrationInformation.gender,
                /* profilePicture: "DP.png" */
            });

            CustomerCreation.fillOutAddressInformation({
                postalCode: data.CustomerCreationPrincipal.AddressInformation.postalCode,
                address: data.CustomerCreationPrincipal.AddressInformation.address,
                unitNumber: data.CustomerCreationPrincipal.AddressInformation.unitNumber,
                POBOx: data.CustomerCreationPrincipal.AddressInformation.POBOx,
                myMailbox: data.CustomerCreationPrincipal.AddressInformation.myMailbox
            });

            CustomerCreation.fillOutContactInformation({
                handPhone: data.CustomerCreationPrincipal.ContactInformation.handPhone,
                emailAddress: PrincipalEmail,
                emergencyContact: data.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                // homeNumber: data.CustomerCreationPrincipal.ContactInformation.homeNumber,

                // Preferred Contact Mode
                preferredContactModeSelectAll: data.CustomerCreationPrincipal.ContactInformation.preferredContactModeSelectAll,
                // preferredContactModeEmail: data.CustomerCreationPrincipal.ContactInformation.preferredContactModeEmail,
                // preferredContactModeMail: data.CustomerCreationPrincipal.ContactInformation.preferredContactModeMail,
                // preferredContactModeSMS: data.CustomerCreationPrincipal.ContactInformation.preferredContactModeSMS,
                // preferredContactModeVoiceCall: data.CustomerCreationPrincipal.ContactInformation.preferredContactModeVoiceCall,
                // preferredContactModePushNotification: data.CustomerCreationPrincipal.ContactInformation.preferredContactModePushNotification,

                // //Consent Information
                // consentInformationMarketing: data.CustomerCreationPrincipal.ContactInformation.consentInformationMarketing,
                // consentInformationServiceNotification: data.CustomerCreationPrincipal.ContactInformation.consentInformationServiceNotification,
                // consentInformationTransactional: data.CustomerCreationPrincipal.ContactInformation.consentInformationTransactional,
            });

            // CustomerCreation.fillOutInterestAreaInformation({

            //     //Preferred SAFRA clubs
            //     clubFaber: data.CustomerCreationPrincipal.InterestAreaInformation.clubFaber,
            //     clubPayoh: data.CustomerCreationPrincipal.InterestAreaInformation.clubPayoh,
            //     clubTampines: data.CustomerCreationPrincipal.InterestAreaInformation.clubTampines,
            //     clubYishun: data.CustomerCreationPrincipal.InterestAreaInformation.clubYishun,
            //     clubJurong: data.CustomerCreationPrincipal.InterestAreaInformation.clubJurong,
            //     clubPunggol: data.CustomerCreationPrincipal.InterestAreaInformation.clubPunggol,

            //     //SAFRA Brands
            //     brandEnergyOneGym: data.CustomerCreationPrincipal.InterestAreaInformation.brandEnergyOneGym,
            //     brandKidzAmaza: data.CustomerCreationPrincipal.InterestAreaInformation.brandKidzAmaza,
            //     brandFINS: data.CustomerCreationPrincipal.InterestAreaInformation.brandFINS,

            //     //I am interested in
            //     interestedAllEvents: data.CustomerCreationPrincipal.InterestAreaInformation.interestedAllEvents,
            //     interestedAllPeaks: data.CustomerCreationPrincipal.InterestAreaInformation.interestedAllPeaks,
            //     interestedFitness: data.CustomerCreationPrincipal.InterestAreaInformation.interestedFitness,
            //     interestedChild: data.CustomerCreationPrincipal.InterestAreaInformation.interestedChild,
            //     interestedLifelong: data.CustomerCreationPrincipal.InterestAreaInformation.interestedLifelong,
            //     interestedLeisure: data.CustomerCreationPrincipal.InterestAreaInformation.interestedLeisure,
            //     interestedFood: data.CustomerCreationPrincipal.InterestAreaInformation.interestedFood,
            //     interestedShopping: data.CustomerCreationPrincipal.InterestAreaInformation.interestedShopping,
            //     interestedTravel: data.CustomerCreationPrincipal.InterestAreaInformation.interestedTravel,
            //     interestedMotoring: data.CustomerCreationPrincipal.InterestAreaInformation.interestedMotoring,
            //     interestedHealth: data.CustomerCreationPrincipal.InterestAreaInformation.interestedHealth,
            //     interestedSAFRAPOINTS: data.CustomerCreationPrincipal.InterestAreaInformation.interestedSAFRAPOINTS,

            //     //SAFRA Newsletter
            //     SAFRANewsletter: data.CustomerCreationPrincipal.InterestAreaInformation.SAFRANewsletter,

            //     //Interest Groups & Micro Clubs
            //     groupAdventure: data.CustomerCreationPrincipal.InterestAreaInformation.groupAdventure,
            //     groupBitez: data.CustomerCreationPrincipal.InterestAreaInformation.groupBitez,
            //     groupCommService: data.CustomerCreationPrincipal.InterestAreaInformation.groupCommService,
            //     groupCompetitive: data.CustomerCreationPrincipal.InterestAreaInformation.groupCompetitive,
            //     groupDigimedia:data.CustomerCreationPrincipal.InterestAreaInformation.groupDigimedia,
            //     groupEntrep: data.CustomerCreationPrincipal.InterestAreaInformation.groupEntrep,
            //     groupFuse: data.CustomerCreationPrincipal.InterestAreaInformation.groupFuse,
            //     groupGolf: data.CustomerCreationPrincipal.InterestAreaInformation.groupGolf,
            //     groupMovie: data.CustomerCreationPrincipal.InterestAreaInformation.groupMovie,
            //     groupPhotograph: data.CustomerCreationPrincipal.InterestAreaInformation.groupPhotograph,
            //     groupRunning: data.CustomerCreationPrincipal.InterestAreaInformation.groupRunning,
            //     groupShooting: data.CustomerCreationPrincipal.InterestAreaInformation.groupShooting,
            //     groupSocialBadminton: data.CustomerCreationPrincipal.InterestAreaInformation.groupSocialBadminton,
            //     groupTech: data.CustomerCreationPrincipal.InterestAreaInformation.groupTech,
            //     groupTravel: data.CustomerCreationPrincipal.InterestAreaInformation.groupTravel
            // });

            //To Create a customer
            CustomerCreation.save();

            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(12000)

            //Registration
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
                ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })

            //Adding Dependent Child
            MemRegPrincipal.AddDependent()


            MemberRegDependent.fillsoutPersonalInformationDep(
                data.CustomerCreationDependentChild.RegistrationInformation.MemberCategory,
                data.CustomerCreationDependentChild.RegistrationInformation.DependentType,
                DepChildName, //Extra
                DepChildName,
                DepChildNRICFull,
                data.CustomerCreationDependentChild.RegistrationInformation.Gender,
                data.CustomerCreationDependentChild.RegistrationInformation.DateofBirth,
                data.CustomerCreationDependentChild.RegistrationInformation.Age,
                undefined, //Extra
                data.CustomerCreationDependentChild.RegistrationInformation.PrincipalType,
                data.CustomerCreationDependentChild.RegistrationInformation.MemberType,
                data.CustomerCreationDependentChild.RegistrationInformation.Nationality,
                data.CustomerCreationDependentChild.RegistrationInformation.MaritalStatus,
                data.CustomerCreationDependentChild.RegistrationInformation.CardType,
                data.CustomerCreationDependentChild.RegistrationInformation.InterestinDBSCard,
                data.CustomerCreationDependentChild.RegistrationInformation.AllowtoRedeemSAFRAPoints,
                data.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
            )

            MemberRegDependent.fillsoutContactInformation({
                Handphone: data.CustomerCreationDependentChild.ContactInformation.handPhone,
                EmailAddress: DepChildEmail,
                // HomeNumber:data.CustomerCreationDependentChild.ContactInformation.homeNumber,
                // EmergencyContact:data.CustomerCreationDependentChild.ContactInformation.emergencyContact
            })

            MemberRegDependent.filloutPreferredContactMode({
                SelectAll: data.CustomerCreationDependentChild.ContactInformation.preferredContactModeSelectAll,
                // Email: data.CustomerCreationDependentChild.ContactInformation.preferredContactModeEmail,
                // Mail: data.CustomerCreationDependentChild.ContactInformation.preferredContactModeMail,
                // SMS: data.CustomerCreationDependentChild.ContactInformation.preferredContactModeSMS,
                // VoiceCall: data.CustomerCreationDependentChild.ContactInformation.preferredContactModeVoiceCall,
                // PushNotification: data.CustomerCreationDependentChild.ContactInformation.preferredContactModePushNotification
            })

            // MemberRegDependent.filloutConsentInformation({
            //     MarketingConsent: data.CustomerCreationDependentChild.ContactInformation.consentInformationMarketing,
            //     ServiceNotificationConsent: data.CustomerCreationDependentChild.ContactInformation.consentInformationServiceNotification,
            //     TransactionalConsent: data.CustomerCreationDependentChild.ContactInformation.consentInformationTransactional
            // })

            // MemberRegDependent.fillOutPreferredSafraClubs({
            //     safraJurong:data.CustomerCreationDependentChild.InterestAreaInformation.clubJurong,
            //     safraPunggol:data.CustomerCreationDependentChild.InterestAreaInformation.clubPunggol,
            //     // safraToaPayoh:data.CustomerCreationDependentChild.InterestAreaInformation.clubPayoh,
            //     safraMtFaber:data.CustomerCreationDependentChild.InterestAreaInformation.clubFaber,
            //     safraTampines:data.CustomerCreationDependentChild.InterestAreaInformation.clubTampines,
            //     safraYishun:data.CustomerCreationDependentChild.InterestAreaInformation.clubYishun
            // })
            // MemberRegDependent.fillOutSafraBrands({
            //     energyOneGym: data.CustomerCreationDependentChild.InterestAreaInformation.brandEnergyOneGym,
            //     kidzAmazeSplshIndrPlayGrnd:data.CustomerCreationDependentChild.InterestAreaInformation.brandKidzAmaza,
            //     finsSwimSchool:data.CustomerCreationDependentChild.InterestAreaInformation.brandFINS
            // })

            // MemberRegDependent.fillOutInterestGrpsAndMicroClubs({
            //     safraAdventureClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupAdventure,
            //     bitezFandB:data.CustomerCreationDependentChild.InterestAreaInformation.groupBitez,
            //     safraCommSrvcsClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupCommService,
            //     safraCompSportsClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupCompetitive,
            //     safraDigitalMediaClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupDigimedia,
            //     safraEntrpnrsClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupEntrep,
            //     fuseEntrtnmnt:data.CustomerCreationDependentChild.InterestAreaInformation.groupFuse,
            //     safraGolfingSection:data.CustomerCreationDependentChild.InterestAreaInformation.groupGolf,
            //     safraMovieMax:data.CustomerCreationDependentChild.InterestAreaInformation.groupMovie,
            //     safraPhotoClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupPhotograph,
            //     safraRunningClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupRunning,
            //     safraShootingClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupShooting,
            //     safraSocialBadmntnClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupSocialBadminton,
            //     safraTechClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupTech,
            //     safraTravelClub:data.CustomerCreationDependentChild.InterestAreaInformation.groupTravel
            // })

            MemRegPrincipal.SaveAndNext()
            cy.wait(7000)

            //Adding Dependent spouse
            MemRegPrincipal.AddDependent()
            cy.wait(3000)

            //Adding Spouse
            MemberRegDependent.fillsoutPersonalInformationDep(
                data.CustomerCreationDependentSpouse.RegistrationInformation.MemberCategory,
                data.CustomerCreationDependentSpouse.RegistrationInformation.DependentType,
                DepSouseName, //Extra
                DepSouseName,
                DepSouseNRICFull,
                data.CustomerCreationDependentSpouse.RegistrationInformation.gender,
                data.CustomerCreationDependentSpouse.RegistrationInformation.DateofBirth,
                data.CustomerCreationDependentSpouse.RegistrationInformation.Age,
                undefined, //Extra
                data.CustomerCreationDependentSpouse.RegistrationInformation.PrincipalType,
                data.CustomerCreationDependentSpouse.RegistrationInformation.MemberType,
                data.CustomerCreationDependentSpouse.RegistrationInformation.Nationality,
                data.CustomerCreationDependentSpouse.RegistrationInformation.MaritalStatus,
                data.CustomerCreationDependentSpouse.RegistrationInformation.CardType,
                data.CustomerCreationDependentSpouse.RegistrationInformation.InterestinDBSCard,
                data.CustomerCreationDependentSpouse.RegistrationInformation.AllowtoRedeemSAFRAPoints,
                data.CustomerCreationDependentChild.RegistrationInformation.ProfilePicture
            )

            MemberRegDependent.fillsoutContactInformation({
                Handphone: data.CustomerCreationDependentSpouse.ContactInformation.handPhone,
                EmailAddress: DepSouseEmail, //Extra
                HomeNumber: data.CustomerCreationDependentSpouse.ContactInformation.homeNumber,
                EmergencyContact: data.CustomerCreationDependentSpouse.ContactInformation.emergencyContact
            })

            MemberRegDependent.filloutPreferredContactMode({
                SelectAll: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeSelectAll,
                Email: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeEmail,
                Mail: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeMail,
                SMS: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeSMS,
                VoiceCall: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModeVoiceCall,
                PushNotification: data.CustomerCreationDependentSpouse.ContactInformation.preferredContactModePushNotification
            })

            MemberRegDependent.filloutConsentInformation({
                MarketingConsent: data.CustomerCreationDependentSpouse.ContactInformation.consentInformationMarketing,
                ServiceNotificationConsent: data.CustomerCreationDependentSpouse.ContactInformation.consentInformationServiceNotification,
                TransactionalConsent: data.CustomerCreationDependentSpouse.ContactInformation.consentInformationTransactional
            })

            // MemberRegDependent.fillOutPreferredSafraClubs({
            //     safraJurong:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubJurong,
            //     safraPunggol:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubPunggol,
            //     safraToaPayoh:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubPayoh,
            //     safraMtFaber:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubFaber,
            //     safraTampines:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubTampines,
            //     safraYishun:data.CustomerCreationDependentSpouse.InterestAreaInformation.clubYishun
            // })
            // MemberRegDependent.fillOutSafraBrands({
            //     energyOneGym: data.CustomerCreationDependentSpouse.InterestAreaInformation.brandEnergyOneGym,
            //     kidzAmazeSplshIndrPlayGrnd:data.CustomerCreationDependentSpouse.InterestAreaInformation.brandKidzAmaza,
            //     finsSwimSchool:data.CustomerCreationDependentSpouse.InterestAreaInformation.brandFINS
            // })

            // MemberRegDependent.fillOutInterestGrpsAndMicroClubs({
            //     safraAdventureClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupAdventure,
            //     bitezFandB:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupBitez,
            //     safraCommSrvcsClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupCommService,
            //     safraCompSportsClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupCompetitive,
            //     safraDigitalMediaClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupDigimedia,
            //     safraEntrpnrsClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupEntrep,
            //     fuseEntrtnmnt:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupFuse,
            //     safraGolfingSection:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupGolf,
            //     safraMovieMax:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupMovie,
            //     safraPhotoClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupPhotograph,
            //     safraRunningClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupRunning,
            //     safraShootingClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupShooting,
            //     safraSocialBadmntnClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupSocialBadminton,
            //     safraTechClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupTech,
            //     safraTravelClub:data.CustomerCreationDependentSpouse.InterestAreaInformation.groupTravel
            // })


            MemRegPrincipal.SaveAndNext()
            cy.wait(7000)
            MemRegPrincipal.SaveAndNext()
            cy.wait(3000)
            MemTenureSelect.principalTenureSelection(PrincipalName, '5 Years')
            MemTenureSelect.dependentTenureSelection(DepChildName, '5 Years')
            MemTenureSelect.dependentTenureSelection(DepSouseName, '5 Years')

            // MemTenureSelect.selectDependent(DepChildName)
            // MemTenureSelect.selectDependent(DepSouseName)

            MemTenureSelect.addToCart()

            // Shopping cart and Payments
            Common.fillOutandApplyPayment('CASH')

            //Logout
            // cy.LogoutOfSmcms()
            // cy.wait(2000)

            // VERIFY IN THE LISTING TABLE

            cy.visit('/membership/memberList')

            cy.wait(5000)


            //MEMBER LISTING FORM FILTERS ARE NOT WORKING
            MemberList.fillOutFilters(PrincipalName, CustomerNRIC, 'New')

            cy.wait(2000)

        })

    })
}

export default SFSMemberRegistion
