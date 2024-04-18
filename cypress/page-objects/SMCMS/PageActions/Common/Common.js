import elems_SMCMSShoppingCartAndPayment from '../../../../page-objects/SMCMS/Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'
import elems_PendingTaskDetail from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import elems_PendingTaskListing from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_Alerts from '../../Elements/Common/Alerts'
import login from '../../../../fixtures/login'

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

            // console.log(blnc)
            // cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).type(blnc)

        })
        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT)
        cy.wait(8000)

        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_PAYNOW)
        cy.wait(5000)


    }


        /*****************************************************
     * Method: ResetCart
     * Description: Click On Reset Cart button
    *****************************************************/
        ResetCart() {

            cy.Click('//button[text()="Reset Cart"]')
            cy.wait(4000)
    
        }
        /*****************************************************
         * Method: ApplyPromoCode
         * Description: This function apply promo code
        *****************************************************/
        ApplyPromoCode(PromoCode) {
            cy.Click('//a[text()="USE PROMO CODE"]')
            cy.wait(1000)
            cy.EnterText('//input[@id="txtPromoCode"]', PromoCode)
            cy.Click('//button[text()="Apply Promotion"]')
            cy.wait(2000)
        }
        /*****************************************************
         * Method: VerifyPromoNotification
         * Description: This function Verify Promotion Notification Status
        *****************************************************/
        VerifyPromoNotification(text) {
            cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, text)
        }
    
    
        /*****************************************************
             * Method: VerifyNoRecordMsg
             * Description: This function verify that the item is not present in the table
            *****************************************************/
        VerifyNoRecordMsg() {
    
            cy.xpath('//td[text()="No records available"]').should('be.visible')
        }
        /*****************************************************
             * Method: AddToCart
             * Description: This function Click on Add To Cart button
            *****************************************************/
    /*****************************************************
       * Method: ApprovalWorkFlow
       * Description: This function visit pending task list and approve the item
       * @param {string} TaskID
       * @param {string} WorkFlowName
       * @param {string} Approval
       * @param {string} Remark
       *****************************************************/
    ApprovalWorkFlow(TaskID, WorkFlowName, Approval, Remark) {

        cy.visit('https://login-uat-smcms.safra.sg')
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
        cy.visit('/admin/pendingTaskList')
        cy.wait(5000)
        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkFlowName)

        //Click on Filter button
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(5000)

        //Click on Table item
        cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click({ force: true })
        // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

        cy.wait(5000)

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
        cy.wait(5000)

    }

    /*****************************************************
     * Method: AddToCart
     * Description: This function Click on Add To Cart button
    *****************************************************/
    AddToCart() {

        cy.Click('//button[text()="Add to Cart"]')
        cy.wait(15000)
    }

    /*****************************************************
     * Method: AddToCart
     * Description: This function Click on Add To Cart button
    *****************************************************/
    WaitFor(wait) {

        cy.visit('/membership/customerCheckin')
        cy.wait(wait)
    }

     /*****************************************************
     * Method: ClickLastPage
     * Description: This function Click on Add To Cart button
    *****************************************************/
     ClickLastPage() {

        cy.Click('//span[@class="k-icon k-i-arrow-end-right"]')
        cy.wait(2000)
    }

    
}

export default Commons