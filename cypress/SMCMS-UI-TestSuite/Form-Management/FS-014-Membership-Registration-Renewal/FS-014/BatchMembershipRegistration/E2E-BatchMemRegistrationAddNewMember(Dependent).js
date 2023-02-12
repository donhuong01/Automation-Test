/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationListing from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import BatchMembershipRegistrationDetail from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import MemberRegistrationPrincipal from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import ShoppingCartPayments from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import MemberRegistrationWithDifferentMemberType from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/RegistrationWithDifferentMemberType'
import MembershipModuleSetting from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import elems_CustomerCheckInPage from '../../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import Customerdata from '../../../../../../fixtures/Data_Module/CustomerCreationData'
import CustomerCreationPage from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import elems_MemberListing from '../../../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import MembershipTenureSelection from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mem Reg WIth Different Mem Type/MembershipTenureSelection'
import MemberListingPage from '../../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Listing/MemberListing'
import elems_Landing from '../../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'

import data from '../../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

const BatchMembershipRegistrationAddNewMemberDependent = (PrincipleNricFull, PrincipalMemberType, PrncipalMaritalStatus, P_Tenure, DepNRICFull, DepTenure, DependentType, RegistationType) => {

    const MemRegPrincipal = new MemberRegistrationPrincipal()
    const ShoppingCartPayment = new ShoppingCartPayments()
    const MemRegWithDifferentMemType = new MemberRegistrationWithDifferentMemberType()
    const MemModuleSettings = new MembershipModuleSetting()
    const CustomerCreation = new CustomerCreationPage()
    const MemTenureSelect = new MembershipTenureSelection()
    const MemberList = new MemberListingPage()
    const ShoppingCart = new ShoppingCartPayments()

    var MemberId;

    describe('[TS01] Batch Membership Registration With New Member (Dependent)', function () {


        it('[TC01] Creating a Batch Membership Registration And Add New Member (Dependent)', function () {

            const BatchName = 'Auto-Batch' + Math.floor(Math.random() * 100000 * 4)
            const BatchType = data.BatchMemRegDetail.BatchType
            const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
            const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
            const PromationReg = data.BatchMemRegDetail.PromationReg
            const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
            const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
            const PaymentMode = data.BatchMemRegDetail.PaymentMode
            const PrincipalNric = PrincipleNricFull.substr(PrincipleNricFull.length - 4);

            const DepName = Math.floor(Math.random() * 1000 * 3) + 'BatchUser' + Math.floor(Math.random() * 100000 * 3)
            const PrincipalName = Math.floor(Math.random() * 10000 * 3) + Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + Math.floor(Math.random() * 10000 * 3)
            const PrincipalEmail = PrincipalName + '@synergyonline.com'
            const ApplicationDate = '01-Jun-2023'


            //Enable SFS
            cy.visit('/membership/moduleSettings')
            cy.wait(8000)

            MemModuleSettings.SFSActivate('CHECK')
            cy.wait(5000)

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, PrincipalNric)
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

            ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////

            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(5000)

            MemRegWithDifferentMemType.verifyPersonalInformation({
                MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: PrincipalName,
                NameOnCard: PrincipalName,
                Nric: PrincipleNricFull,
                Gender: data.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
                Age: data.memberregistrationprincipal.Personal_Info.Age,
                // NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                // NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                // MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: PrncipalMaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })

            MemRegWithDifferentMemType.SelectMemberType(PrincipalMemberType)
            cy.wait(1000)

            MemRegPrincipal.SaveAndNextPrincipal()

            cy.wait(5000)


            MemTenureSelect.principalTenureSelection(PrincipalMemberType, PrincipalName, P_Tenure)

            if (PrincipalMemberType === "LF") {
                MemTenureSelect.Submit()
            }
            else {

                MemTenureSelect.addToCart()


                /////////////////////////////////////PAYMENTS//////////////////////////////////////////////////
                ShoppingCart.fillOutandApplyPayment('CHEQUE')
                cy.wait(4000)

            }

            //Logout
            cy.LogoutOfSmcms()

            //Logout
            cy.wait(2000)

            ////////////////////////////////// VERIFICATION ////////////////////////////////////////////////

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

                MemberId = MemId.text()


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


                if (RegistationType === 'BatchRegistration') {


                    BatchMembershipRegistrationDetail.AddMember()

                    //Verify Page Title
                    BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration Form - In Batch Registration')

                    cy.log(MemberId + '"""""""""""""""""""""""Eeeeeeeeeeeeeeeeeeeeee')

                    //Add Existing Member to the batch
                    BatchMembershipRegistrationDetail.FillOutFormForExistingMember(MemberId, PrincipalNric)

                    //Click Next button
                    BatchMembershipRegistrationDetail.Next()
                    cy.wait(5000)

                    //Enter Applicatioin Date
                    BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

                    //Click Save And Next button
                    BatchMembershipRegistrationDetail.SaveAndNext()

                    cy.wait(2000)
                    //Verify Page Title
                    BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

                    //Select Pricipal Tenure
                    BatchMembershipRegistrationListing.principalTenureSelection('5 Years', PrincipalName)

                    //Click Save And Next button
                    BatchMembershipRegistrationDetail.SaveAndNextTenure()

                    // Shopping cart and Payments
                    ShoppingCartPayment.fillOutandApplyPaymentWithComplete('CHEQUE')
                    // verify New Member In Membership Registration and Renewal Listing
                    BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(PrincipleNricFull)

                    //click save button
                    BatchMembershipRegistrationDetail.Save()

                    //verify page title 
                    BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')

                }
                else { cy.log(RegistationType) }

            })
            cy.visit('/membership/batchMembershipRegistrationList')

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
            BatchMembershipRegistrationDetail.ClickNewMemberDependent()

            cy.wait(5000) //wait for page to load

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Membership Registration - Dependent')

            //Enter Applicatioin Date
            BatchMembershipRegistrationDetail.DependentType(DependentType)

            //Enter Applicatioin Date
            BatchMembershipRegistrationDetail.AddApplicationDate(ApplicationDate)

            cy.log(MemberId + 'Member id    *****************************')
            BatchMembershipRegistrationDetail.PrincipalId(PrincipalName, RegistationType)

            BatchMembershipRegistrationDetail.FilloutPersonalInformation({
                MemberCategory: 'Dependent',
                NameOnNRIC: DepName,
                NameOnCard: DepName,
                Nric: DepNRICFull,
                Gender: DependentType === 'Spouse' ? 'Female' : 'Male',
                DateofBirth: DependentType === 'Spouse' ? '01-Jan-1990' : '01-Jan-2011',
                // Age: data.memberregistrationprincipal.Personal_Info.Age,
                // NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                // NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                // MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: DependentType === 'Spouse' ? 'Married' : 'Single',
                // CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
            })
            cy.TickCheckBox('//input[@id="checkIndependentAddress"]', 'CHECK')
            cy.wait(1000)

            // MemRegPrincipal.verifyAddressInformation({
            //     PostalCode: data.memberregistrationprincipal.AddressInfo.PostalCode,
            //     UnitNumber: data.memberregistrationprincipal.AddressInfo.UnitNumber,
            //     POBOX: data.memberregistrationprincipal.AddressInfo.POBOX,
            //     MyMailbox: data.memberregistrationprincipal.AddressInfo.MyMailbox,
            // })



            CustomerCreation.fillOutContactInformation({
                handPhone: Customerdata.CustomerCreationPrincipal.ContactInformation.handPhone,
                emailAddress: data.memberregistrationprincipal.ContactInfo.EmailAddress,
                emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                homeNumber: '124453',

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

            cy.wait(1000)

            //Verify Page Title
            BatchMembershipRegistrationListing.verifyPageTitle('Member Tenure Selection - In Batch Registration')

            //Select Pricipal Tenure
            BatchMembershipRegistrationListing.principalTenureSelection(P_Tenure, PrincipalName)
            if (DependentType === 'Child') {

                MemTenureSelect.dependentTenureSelection(DepName, DepTenure)
            } else {
                MemTenureSelect.dependentTenureSelection(DepName, DepTenure)
                MemTenureSelect.selectDependent(DepName)
            }

            //Click Save And Next button
            BatchMembershipRegistrationDetail.SaveAndNextTenure()

            // Shopping cart and Payments
            ShoppingCartPayment.fillOutandApplyPaymentWithComplete('CHEQUE')

            cy.wait(15000)

            // verify New Member In Membership Registration and Renewal Listing
            BatchMembershipRegistrationDetail.VerifyNewMemberPrincipal(DepNRICFull)

            //click save button
            BatchMembershipRegistrationDetail.Save()

            //verify page title 
            BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')


        })
    })

}
export default BatchMembershipRegistrationAddNewMemberDependent

