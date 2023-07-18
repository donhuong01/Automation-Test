/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Waiver Request Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/
import BatchMembershipWaiverRequest from "../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipWaiverRequest"
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import dataWaiver from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import login from '../../../fixtures/login'
import Commons from "../../../page-objects/SMCMS/PageActions/Common/Common"

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



//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()
const commons = new Commons()

const UserID = Math.floor(Math.random() * 1000 )
const UserID2 = Math.floor(Math.random() * 1000 )
const WiverName = "Waiver "

const PrincipalName = WiverName + UserID
const PrincipalEmail = /*Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID*/ PrincipalName + "@test.com"


const PrincipalName2 = WiverName+ UserID2
const PrincipalEmail2 = /*Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress + UserID2 */ PrincipalName2 + "@test.com"


const Waiver = BatchMembershipWaiverRequest

beforeEach(()=>{
    cy.log(login.authenticated_user)
    cy.SaveUserInfoInLocalStorage(login.authenticated_user,login.active_location,login.safra_client)
    cy.log("Local Storage Populated")

})

const BatchMembershipWaiver = (CustomerNRICFull, CustomerNRICFull2) => {

    const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);
    const CustomerNRIC2 = CustomerNRICFull2.substr(CustomerNRICFull2.length - 4);

describe('Batch Membership Waiver Request management',function(){
   
    it('[TC01] First Membership Creation and Principal Registration', function () {

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
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)
        
            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                //DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
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
            cy.wait(10000)
        
        ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////
            
            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(15000)
        
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
            cy.wait(10000)
        
            ///////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////
        
        
            // Membership Tenure Selection
            MemTenureSelect.principalTenureSelection(PrincipalName,'10 Years')
            cy.wait(5000)
            
            // Click on add to cart
            MemTenureSelect.addToCart()
            cy.wait(5000)
        
            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH')
            
            // Wait for 3 minites
            // cy.wait(20000) 
            
            //Logout
            cy.LogoutOfSmcms()
            cy.wait(3000)
   
        }) 
    it('[TC02] Second Membership Creation and Principal Registration', function () {

        ///////////////////////////////CUSTOMER CREATION////////////////////////////////////////

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC2)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)
        
            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName2,
                //DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
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
                emailAddress: PrincipalEmail2,
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
            cy.wait(10000)
        
        ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////
            
            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(12000)
        
            MemRegPrincipal.verifyPersonalInformation({
                MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: PrincipalName2,
                NameOnCard: PrincipalName2,
                Nric: CustomerNRICFull2,
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
            cy.wait(15000)
        
            ///////////////////////////////////TENURE SELECTION////////////////////////////////////////////////////////////
        
        
            // Membership Tenure Selection
            MemTenureSelect.principalTenureSelection(PrincipalName2,'10 Years')
            cy.wait(5000)
            
            // Click on add to cart
            MemTenureSelect.addToCart()
            cy.wait(5000)
        
            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH')
            
            // Wait for 3 minites
            // cy.wait(20000)
            
            //Logout
            cy.LogoutOfSmcms()
            cy.wait(3000)
   
        })
    

    it('[TC03] Batch Membership Waiver Form', function(){

        const StartMonth = dataWaiver.Waiver.StartMonth
        const ReasonCode = dataWaiver.Waiver.ReasonCode
        const Remarks = dataWaiver.Waiver.Remarks
        const WaiverPeriod = dataWaiver.Waiver.WaiverPeriod
        const EndDate = dataWaiver.Waiver.EndDate   

        cy.intercept('POST', 'https://api.qa-smcms.safra.sg/v2/adminapi/membership/batch-membership-waiver-requests').as('ID')
        
        cy.visit('/membership/memberList?pageNumber=1&pageSize=20')  //Visit web page for member listing 

        Waiver.FilterbyName(WiverName)
        cy.wait(5000)
        // Waiver.ClickOnRightEndArrowInMemListing()

        Waiver.VerifyMemberInListing(PrincipalName)
        Waiver.VerifyMemberInListing(PrincipalName2)
        
        Waiver.SelectTableLinkItem(PrincipalName)
        Waiver.SelectTableLinkItem(PrincipalName2)

        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Waiver') 
            
        Waiver.fillOutWaiverForm(StartMonth,WaiverPeriod,ReasonCode,Remarks)

        Waiver.VerifyWaiverForm(PrincipalName, CustomerNRIC, PrincipalName2 ,CustomerNRIC2)

        Waiver.Request()

        // cy.wait('@ID')
        // cy.get('@ID').then(xhr => {

        // const Id = xhr.response.body.value

         //cy.wait(300000)
         //cy.visit(`/admin/pendingTaskDetails?id=${Id}`).as('MemID')
        

        // Select Approval Outcome
        //cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, "Approve")
        //   //Enter Remark
         //cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, 'Testing')

        //   //Click on Save button
        //   cy.Click(elems_PendingTaskDetail.BTN_SAVE)
        //   cy.wait(1000)
        //   cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Record has been saved successfully.')
        // })

        commons.ApprovalWorkFlow('M-WAV','Batch Membership Waiver Approval Workflow','Approve', 'Test Batch membership')
        cy.visit('/membership/memberList?pageNumber=1&pageSize=20')
    })



})

}

export default BatchMembershipWaiver