import elems_SMCMSShoppingCartAndPayment from '../../../../page-objects/SMCMS/Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'
import elems_PendingTaskDetail from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import elems_PendingTaskListing from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'

class Commons {

    /*****************************************************
     * Method: Fill out Payment Mode Amount and Apply PAyment
     * Description: Fill out Payment Mode
     * @param {string} PaymentMode Payment Mode
     *****************************************************/
    fillOutandApplyPayment(PaymentMode) {


        cy.SelectDropDownItem(elems_SMCMSShoppingCartAndPayment.Payments.DRP_PAYMENTMODE, PaymentMode)

        cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.LBL_REMAININGBALANCE).then($balance => {

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
       * Method: ApprovalWorkFlow
       * Description: This function visit pending task list and approve the item
       * @param {string} TaskID
       * @param {string} WorkFlowName
       * @param {string} Approval
       * @param {string} Remark
       *****************************************************/
    ApprovalWorkFlow(TaskID, WorkFlowName, Approval, Remark) {

        cy.visit('/admin/pendingTaskList')

        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkFlowName)

        //Click on Filter button
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(2000)

        //Click on Table item
        cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click({ force: true })
        // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

        //Approval Outcome
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, Approval)

        //Remark
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

        // Click on Save button
        cy.Click('//button[@form="formPendingTaskDetail"]')
        cy.wait(2000)


    }

    /*****************************************************
     * Method: Checkin
     * Description: check in with Member id
    *****************************************************/
    Checkin(MemberID) {
        cy.visit('/membership/customerCheckin')
        cy.wait(3000)
        cy.EnterText('//input[@id="txtMemberId"]', MemberID)
        cy.Click('//button[@form="formCustomerCheckIn"]')
        cy.wait(4000)

    }

}

export default Commons