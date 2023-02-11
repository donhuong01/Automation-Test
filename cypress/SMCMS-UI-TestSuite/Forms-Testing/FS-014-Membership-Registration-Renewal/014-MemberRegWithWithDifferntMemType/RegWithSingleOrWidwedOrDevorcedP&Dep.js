/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import elems_PageHeader from '../../../../../page-objects/SMCMS/Elements/Common/PageHeader'
import MembershipTenureSelection from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/MembershipTenureSelection'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import MemberListingPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Listing/MemberListing'
import MemberRegistrationDependent from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/DependentRegistration'
// Import Pages
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import MemberRegistrationWithDifferentMemberType from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/RegistrationWithDifferentMemberType'




const RegistrationWith1PrincipalAndDependentSpouse = (SFS, MaritalStatus, MemberType, CustomerNRICFull, PrincipalTenure, Dependent, DepChildNRICFull,
    DependentChildTenure) => {

    describe('[TS07] Member Registration Principal]', function () {

        //Page definition
        const MemModuleSettings = new MembershipModuleSetting()
        const MemRegPrincipal = new MemberRegistrationPrincipal()
        const MemTenureSelect = new MembershipTenureSelection()
        const ShoppingCart = new ShoppingCartPayments()
        const MemberList = new MemberListingPage()
        const MemberRegDependent = new MemberRegistrationDependent()
        const CustomerCreation = new CustomerCreationPage()
        const MemRegWithDifferentMemType = new MemberRegistrationWithDifferentMemberType()


        const UserID = Math.floor(Math.random() * 1000000 * 7)

        const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
        const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID + "wy" + "@test.com"
        // const CustomerNRIC = '188G'
        const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);
        // const CustomerNRICFull = 'S7833188G'

        const UserIDDep = Math.floor(Math.random() * 1000)
        const DepChildName = Customerdata.CustomerCreationDependentChild.RegistrationInformation.name + UserIDDep
        const DepChildEmail = Customerdata.CustomerCreationDependentChild.ContactInformation.emailAddress + UserIDDep + "wz" + "@test.com"
        // const DepChildNRIC = '210D'
        // const DepChildNRICFull = 'S6159059E'

        const UserIDSpouse = Math.floor(Math.random() * 1000)
        const DepSouseName = Customerdata.CustomerCreationDependentSpouse.RegistrationInformation.name + 'jh' + UserIDSpouse
        const DepSouseEmail = Customerdata.CustomerCreationDependentSpouse.ContactInformation.emailAddress + UserIDSpouse + "@test.com"
        // const DepSouseNRIC = '249J'
        // const DepSouseNRICFull = 'S3830941B'


        it('[TC01] Customer Creation and Principal Registration', function () {

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
                groupDigimedia: Customerdata.CustomerCreationPrincipal.InterestAreaInformation.groupDigimedia,
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
            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && Dependent === "YES") {

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




            MemRegPrincipal.SaveAndNextPrincipal()
            cy.wait(5000)

            /////////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////

            MemTenureSelect.principalTenureSelection(MemberType, PrincipalName, PrincipalTenure)

            if (MaritalStatus !== "Single" && MaritalStatus !== "N/A" && Dependent === "YES") {

                MemTenureSelect.dependentTenureSelection(DepChildName, DependentChildTenure)
                // MemTenureSelect.selectDependent(DepChildName)

            }


            if (MemberType === "LF") {
                MemTenureSelect.Submit()
            }
            else {

                MemTenureSelect.addToCart()


                /////////////////////////////////////PAYMENTS//////////////////////////////////////////////////
                ShoppingCart.fillOutandApplyPayment('CHEQUE')
                cy.wait(2000)

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
        })
    })


}
export default RegistrationWith1PrincipalAndDependentSpouse