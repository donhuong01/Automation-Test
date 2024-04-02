/*****************************************************
 * Page Function: Sample Script to Test SFS Membership Expulsion and Reinstatement Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/
// Membership Registration
// Import Pages
import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipExpulsion from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/MembershipExpulsion'
import MembershipModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()
const MemModuleSettings = new MembershipModuleSetting()


const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name 
const PrincipalEmail = /*Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress*/ PrincipalName + "@test.com"



const MembershipExpulsionAndReinstatment = (CustomerNRICFull) => {
    
describe('[TS01] Membership Expulsion Confirmation PopUp and Reinstatement Management',function(){

    const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);
    
    it('[TC01] First Membership Creation and Principal Registration', function () {

        ///////////////////////////////CUSTOMER CREATION////////////////////////////////////////
       

            ////Enable SFS
            cy.visit('/membership/moduleSettings')
            cy.wait(5000)
            
            MemModuleSettings.SFSActivate('CHECK')
            cy.wait(2000)
            

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDateCheckin(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)
        
            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                // DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
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
                handPhone: '8638 4892', //+ Math.floor(Math.random() * 1000),
                emailAddress: PrincipalEmail,
                // emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                // homeNumber: '56582' + Math.floor(Math.random() * 1000),
        
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
                NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                // ProfilePicture: data.memberregistrationprincipal.Personal_Info.ProfilePicture
                })
            

        
            // MemRegPrincipal.SaveAndNext()
            // cy.wait(10000)
            // MemRegPrincipal.VerifyPageTitle('Membership Registration - Principal')
            
            MemRegPrincipal.SaveAndNextPrincipal()
            cy.wait(5000)
        
            ///////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////
        
        
            // Membership Tenure Selection
            MemTenureSelect.principalTenureSelection(PrincipalName,'10 Years')
            
            // Click on add to cart
            MemTenureSelect.addToCart()
            cy.wait(5000)
        
            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH')
            
            // Wait for 3 minites
            cy.wait(5000)
            
            //Logout
            // cy.LogoutOfSmcms()
        
   
        })

   
        it('[TC02] Verify Membership Expulsion Confirmation PopUp and Reinstatement', function(){

            cy.visit('/membership/memberList')  //Visit web page for member listing 
            cy.wait(7000)
            //Verify and select item
            MembershipExpulsion.VerifyMemberStatusAndSelectMember(PrincipalName, CustomerNRIC, 'New')
    
            // Select Expelled from Maintenance dropdown
            MembershipExpulsion.SelectOperation('Expulsion')
           
            //select item
            MembershipExpulsion.VerifyMemberStatusAndSelectMember(PrincipalName, CustomerNRIC, 'Expelled')

            // Select Reinstate from Maintenance dropdown
            MembershipExpulsion.SelectOperation('Reinstate')

            // Verify Reinstate in tabel
            MembershipExpulsion.VerifyMemberStatus(PrincipalName, CustomerNRIC, 'New')
        })

})
}
export default MembershipExpulsionAndReinstatment;
