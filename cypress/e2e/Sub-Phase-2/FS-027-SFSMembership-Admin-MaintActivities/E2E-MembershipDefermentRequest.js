/*****************************************************
 * Page Function: Sample Script to Test SFS Membership Deferment Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/
import Defdata from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import MembershipDefermentRequest from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/MembershipDeferement'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

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
import elems_PendingTaskDetail from "../../../page-objects/SMCMS/Elements/Admin/FS004_Admin-Settings/PendingTaskDetail"
import elems_PendingTaskListing from "../../../page-objects/SMCMS/Elements/Admin/FS004_Admin-Settings/PendingTaskListing"
import elems_Picker from "../../../page-objects/SMCMS/Elements/Common/Picker"


//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()

const UserID = Math.floor(Math.random() * 1000 )

const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name + UserID
const PrincipalEmail = /*Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress*/PrincipalName + UserID + "@test.com"


const MemDefermentRequest = (CustomerNRICFull) => {

describe('[TS01] Membership Deferment Request Management',function(){

    const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);

    const DefermentRequest = MembershipDefermentRequest
    const MemModuleSettings = new MembershipModuleSetting()


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
        
            // Shopping cart and Payments
            ShoppingCart.fillOutandApplyPayment('CASH') 
            
            // Wait for 3 minites
            cy.wait(10000)
            
            //Logout
            cy.LogoutOfSmcms()
        
   
        })

    // it('[TC02] Creating and cancelling a Membership Deferment Request', function(){

    //     cy.visit('/membership/memberList')  //Visit web page for member listing 

    //     cy.wait(5000)
    //     //Filter Out Name
    //     cy.EnterText(elems_MemberListing.TXT_NAME, PrincipalName)
    //     cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
    //     cy.wait(3000)

    //     //cy.xpath('//span[@class="k-icon k-i-arrow-end-right"]').Click('//span[@class="k-icon k-i-arrow-end-right"]')
    //     cy.wait(3000)

    //     cy.SelectTableItem(
    //         elems_MemberListing.TBL_MEMBERLISTING,
    //         'Name', PrincipalName,
    //         'NRIC (Last 4 digits)', CustomerNRIC
    //         )
        
    //     cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Deferment')
       
    //     //Start page action 

    //     const StartMonth =Defdata.Deferment.StartMonth
    //     const ReasonCode = Defdata.Deferment.ReasonCode
    //     const Remarks = Defdata.Deferment.Remarks
    //     const DefermentPeriod = Defdata.Deferment.DefermentPeriod
    //     const EndDate = Defdata.Deferment.EndDate     
            
    //     DefermentRequest.fillOutDefermentForm(StartMonth,DefermentPeriod,ReasonCode,Remarks)
        
    //     // DefermentRequest.VerifyDefermentForm(PrincipalName, CustomerNRIC)

    //     // DefermentRequest.verifyEndDate()
        
    //     DefermentRequest.Cancel('Member Listing')

    //     DefermentRequest.verifyPageTitle()

        
    // })

    it('[TC03] Creating a Membership Deferment Request', function(){

        cy.visit('/membership/memberList')  //Visit web page for member listing 
        cy.wait(5000)

        //Filter Out Name
        cy.EnterText(elems_MemberListing.TXT_NAME, PrincipalName)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)

        //cy.xpath('//span[@class="k-icon k-i-arrow-end-right"]').Click('//span[@class="k-icon k-i-arrow-end-right"]')
        cy.wait(3000)

        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', PrincipalName,
            'NRIC (Last 4 digits)', CustomerNRIC
            )
        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Deferment')
       
        //Start page action 

        const StartMonth =Defdata.Deferment.StartMonth
        const ReasonCode = Defdata.Deferment.ReasonCode
        const Remarks = Defdata.Deferment.Remarks
        const DefermentPeriod = Defdata.Deferment.DefermentPeriod
        const EndDate = Defdata.Deferment.EndDate  

        DefermentRequest.fillOutDefermentForm(StartMonth,DefermentPeriod,ReasonCode,Remarks)
        
        // DefermentRequest.VerifyDefermentForm(Defdata.DefermentMemberListing)

        // DefermentRequest.verifyEndDate()
        
        DefermentRequest.Request()
                                                
        // DefermentRequest.verifyPageTitle()

       
        
    })

    it('[TC04] Approving Membership Deferment Request', function(){
      //cy.wait(300000)
      cy.visit('/admin/pendingTaskList')
      cy.wait(5000)
      cy.EnterText(elems_PendingTaskListing.TXT_TASKID, 'M-DFE')
      cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, 'Membership Deferment Approval Workflow')

      //Click on Filter button
      cy.Click(elems_PendingTaskListing.BTN_SEARCH)
      cy.wait(5000)

      //Click on Table item
      cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click({ force: true })
      // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

      cy.wait(5000)
       

      // Select Approval Outcome
      cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, "Approve")
        //Enter Remark
       cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, 'Testing')

        //Click on Save button
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
        cy.wait(1000)
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Record has been saved successfully.')

    })
})

}

export default MemDefermentRequest