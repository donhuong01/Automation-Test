/*****************************************************
 * Page Function: Sample Script to Test SFS Membership Suspension Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/
import Defdata from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import MembershipSuspention from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/MembershipSuspention'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

import login from '../../../fixtures/login'

// Membership Registration
// Import Pages
import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
// Import Pages
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import MembershipModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'



//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()
const MemModuleSettings = new MembershipModuleSetting()

const UserID = Math.floor(Math.random() * 1000 )


const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID //'test999Z'
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress //+ UserID + "@test.com"
const CustomerNRIC = '411H'
const CustomerNRICFull = 'S8907411H'

        // membership suspention data
         const StartDate =Defdata.suspensionForm.StartDate
         const EndDate = Defdata.suspensionForm.EndDate  
         const ReasonCode = Defdata.suspensionForm.ReasonCode
         const Remarks = Defdata.suspensionForm.Remarks
         const TaskName = Defdata.suspensionForm.TaskName
         const WorkflowName = Defdata.suspensionForm.WorkflowName
         const ApprovalOutcome = Defdata.suspensionForm.ApprovalOutcome
         const EarlyReleaseDate = Defdata.suspensionForm.EarlyReleaseDate
         const RWorkflowName = Defdata.suspensionForm.RWorkflowName




beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const MembershipSuspensionReleaseRequest = () =>{

describe('[TS01] Membership Suspension Release Request Management',function(){


    it('[TC01] First Membership Creation and Principal Registration', function () {

        ///////////////////////////////CUSTOMER CREATION////////////////////////////////////////
        
            //Enable SFS
            cy.visit('/membership/moduleSettings')
            cy.wait(8000)
            
            MemModuleSettings.SFSActivate('CHECK')
            cy.wait(5000)
            
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
        
        
            CustomerCreation.save();
            cy.wait(3000)
        
        ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////
            
            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(8000)
        
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
        
            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH')
            
            // Wait for 3 minites
            cy.wait(5000) //250000
            
            //Logout
            cy.LogoutOfSmcms()
        
   
        })

    
    it('[TC02] Creating a Membership Suspension Request', function(){

        cy.visit('/membership/memberList')  //Visit web page for member listing 

        //cy.xpath('//span[@class="k-icon k-i-arrow-end-right"]').Click()
        cy.wait(3000)

        //Filter Out Name
        cy.EnterText(elems_MemberListing.TXT_NAME, PrincipalName)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)

        //Selecting Current User on the Table
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', PrincipalName,
            'NRIC (Last 4 digits)', CustomerNRIC
            )
        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Suspense')
        cy.wait(5000)

        MembershipSuspention.verifyPageTitle('Membership Suspension Request')
        
        MembershipSuspention.fillOutSuspentionForm(StartDate , EndDate , ReasonCode , Remarks)
        
        MembershipSuspention.Submit()
                                                
        MembershipSuspention.verifyPageTitle('Member Listing')

        cy.wait(250000)

        MembershipSuspention.ApprovalWorkFlow(WorkflowName)

        MembershipSuspention.FillOutPendingTaskDetail(TaskName, WorkflowName, ApprovalOutcome, Remarks)

        MembershipSuspention.Save()

        cy.wait(5000) //300000

        cy.visit('/membership/memberList')

        MembershipSuspention.VerifySuspentionForm(PrincipalName,CustomerNRIC,'Suspended')

       
        
    })
    it('[TC03] Creating a Membership Suspension Release(Early) Request', function(){
 
        cy.visit('/membership/memberList')
        cy.wait(5000)
        MembershipSuspention.VerifySuspentionForm(PrincipalName,CustomerNRIC,'Suspended')

        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', PrincipalName,
            'NRIC (Last 4 digits)', CustomerNRIC
            )

        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Release Suspend Early')

        cy.wait(5000)

        MembershipSuspention.verifyPageTitle('Membership Suspension Release Request')

        MembershipSuspention.fillOutSuspentionReleaseForm(EarlyReleaseDate , "RELEASE SUSPENSION EARLY" , Remarks)
        
        MembershipSuspention.Submit()

        MembershipSuspention.verifyPageTitle('Member Listing')

        cy.wait(5000) //250000

        MembershipSuspention.ApprovalWorkFlow(WorkflowName)

        MembershipSuspention.FillOutPendingTaskDetail(TaskName, RWorkflowName, ApprovalOutcome, Remarks)

        MembershipSuspention.Save()

        cy.wait(5000) //300000

        cy.visit('/membership/memberList')

        MembershipSuspention.VerifySuspentionForm(PrincipalName,CustomerNRIC,'New')
        
        
    })


})
}
export default MembershipSuspensionReleaseRequest;
