import login from '../../../../../fixtures/login'

// Membership Registration
// Import Pages
import MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import CustomerCreationPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import LifeMembership from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Life Membreship/LifeMebership'
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'



//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const CustomerCreation = new CustomerCreationPage()
const MemModuleSettings = new MembershipModuleSetting()

const UserID = Math.floor(Math.random() * 100002 * 2  )

const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID+ "N" + "@test.com"
const CustomerNRIC = '492C'
const CustomerNRICFull = 'S5503492C'



beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



describe('[TS06] Life Membership Management',function(){



    it('[TC01] First Membership Creation and Principal Registration', function () {

        //Enable SFS
        cy.visit('/membership/moduleSettings')
        cy.wait(8000)
        
        MemModuleSettings.SFSActivate('CHECK')
        cy.wait(5000)
        
                
        /////////////////////////////CUSTOMER CREATION////////////////////////////////////////
            
            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
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
                handPhone: '6323016',
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
                NSStatus: 'SAF NSMan',
                NSRank: 'Officer',
                MemberType: 'OD',
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
                })

            LifeMembership.ClickLifeMembershipCheckBox()

            

            MemRegPrincipal.SaveAndNextPrincipal()
            // cy.wait(7000)
        
            ///////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////
        
        
            // Membership Tenure Selection
            MemTenureSelect.principalTenureSelection(PrincipalName,'5 Years')
            
            //Click on Submit button
            LifeMembership.Submit()

            // Approval workflow
            LifeMembership.ApprovalWorkFlow('M-MER', 'Membership Exception Approval Workflow', 'Approve', 'Testing Remark')

            LifeMembership.ShoppinCart()

            // Shopping cart and Payments
            LifeMembership.fillOutandApplyPayment('CHEQUE')
            // cy.wait(200000)

            // Verify Member Reason code
            LifeMembership.VerifyMemberReasonCode(PrincipalName, CustomerNRIC , "LF")

            //Logout
            cy.LogoutOfSmcms()
        
   
        })

  

})



