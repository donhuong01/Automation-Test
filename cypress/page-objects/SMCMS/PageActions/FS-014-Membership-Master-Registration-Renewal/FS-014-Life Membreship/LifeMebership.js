import elems_PageHeader from '../../../Elements/Common/PageHeader'

import elems_MembershipTenureSelection from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipTenureSelection.js'
import elems_PendingTaskListing from '../../../../SMCMS/Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../../SMCMS/Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import elems_SMCMSShoppingCartAndPayment from '../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class LifeMembership {


    
     /*****************************************************
     * Method: ClickLifeMembershipCheckBox
     * Description: This function click on life membership check box
     *****************************************************/
    ClickLifeMembershipCheckBox(){

        cy.Click('//input[@id="chkLfMembership"]')
        
        
     }

     
     /*****************************************************
     * Method: Submit
     * Description: This function click on submit button
     *****************************************************/
     Submit() {
        cy.Click(elems_MembershipTenureSelection.BTN_SUBMIT)
        cy.wait(20000)
     }

    /*****************************************************
     * Method: ApprovalWorkFlow
     * Description: This function visit pending task list and approve the item
     * @param {string} TaskID
     * @param {string} WorkFlowName
     * @param {string} Approval
     * @param {string} Remark
     *****************************************************/
     ApprovalWorkFlow(TaskID, WorkFlowName, Approval, Remark) {

        cy.visit('/admin/pendingTaskList')
        cy.wait(5000)
        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkFlowName)

        //Click on Filter button
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(8000)

        //Click on Table item
        cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click()
        // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

        //Approval Outcome
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, Approval)
        
        //Remark
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

        // Click on Save button
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
        cy.wait(6000)


     }


     /*****************************************************
     * Method: ShoppinCart
     * Description: This function click on shopping cart icon
     *****************************************************/
      ShoppinCart() {
      
        cy.Click(elems_PageHeader.BTN_SHOPPINGCART)
        cy.wait(8000)
        cy.xpath(elems_PageHeader.DRP_USERLINKS).click()
        cy.wait(5000)
        cy.xpath('//ul//li').contains('A-').click()

      //   .should('contain.text', 'Standard').select('Standard')
      //   cy.xpath(elems_PageHeader.DRP_USERLINKS).then(($select)=> {

      //    const slct = $select.find('//select//option')

      //    cy.wrap(slct).should('contain.text', 'A-').click()
      //   })
      // //   .select(0)
      //   cy.xpath('//span').should('contain', 'A-').click()

      //   cy.wait(3000)
         // cy.select([0])

        cy.xpath('//label[@for="lblMemberId"]').then( $MemID => {

        const MemberID = $MemID.text().trim()
        console.log(MemberID)
      
        })
     }

   /*****************************************************
     * Method: Fill out Payment Mode Amount and Apply PAyment
     * Description: Fill out Payment Mode
     * @param {string} PaymentMode Payment Mode
     *****************************************************/
          fillOutandApplyPayment(PaymentMode){


            cy.SelectDropDownItem(elems_SMCMSShoppingCartAndPayment.Payments.DRP_PAYMENTMODE, PaymentMode) 
            
            cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.LBL_REMAININGBALANCE).then($balance =>{
                
                const blnc = $balance.text().trim() 

                console.log(blnc)
                cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).type(blnc)

            })
            cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT) 
            cy.wait(3000)

            cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_PAYNOW)
            cy.wait(3000)
            
            
         }
   /*****************************************************
     * Method: VerifyMemberReasonCode
     * Description: Filters value member by reason code and nric
     * @param {string} ReasonCode Reason Code
     * @param {string} NRIC NRIC
     * @param {string} Name Name
     *****************************************************/
          VerifyMemberReasonCode(Name, NRIC, ReasonCode){

            cy.visit('/membership/memberList')

            cy.EnterText(elems_MemberListing.TXT_NAME, Name)
            cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)

            cy.Click(elems_MemberListing.BTN_SEARCHFILTER)

            cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
               "NRIC (Last 4 digits)", NRIC, "Name", Name)

            // cy.ClickTableLinkItem(elems_MemberListing.TBL_MEMBERLISTING,
            //    "NRIC (Last 4 digits)", NRIC, "Name", Name)
            cy.Click('(//h2[text()="Member Listing"]/ancestor::div//table//a)[1]')
            cy.wait(5000)

            cy.xpath('//label[@for="lblMemberType"]').should('have.text' , ReasonCode)
            
         }
}

export default new LifeMembership

