import elems_IGMembershipListing from "../../Elements/Interest Group/InterestGroupMembershipListing"
import elems_IGMembershipDeferment from "../../Elements/Interest Group/InterestGroupMembershipDefRequest"
import elems_PendingTaskListing from "../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing"
import elems_PendingTaskDetail from "../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail"
import elems_IGMembershipTransactionHistory from "../../Elements/Interest Group/IGMembershipTransactionHistory"



class IGMembershipDeferment {

    /*****************************************************
     * Method: DefermentInfo
     * Description: This function Fillout Deferment Info 
     *****************************************************/
    DefermentInfo(DefStartMonth, DefEndMonth, DefReason) {

        cy.EnterDate(elems_IGMembershipDeferment.DATE_DEFSTARTMONTH, DefStartMonth)
        cy.wait(2000)
        cy.EnterDate(elems_IGMembershipDeferment.DATE_DEFENDMONTH, DefEndMonth)
        cy.wait(2000)
        cy.EnterText(elems_IGMembershipDeferment.TXT_DEFERMENTREASON, DefReason)

    }
    /*****************************************************
     * Method: Submit
     * Description: This function Fillout Deferment Info 
     *****************************************************/
    Submit() {

        cy.Click(elems_IGMembershipDeferment.BTN_SUBMIT)
        cy.wait(10000)

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
        cy.Click(elems_IGMembershipDeferment.BTN_SUBMIT)
        cy.wait(4000)


    }

    /*****************************************************
    * Method: VerifyDefermentStatus
    * Description: 
    *****************************************************/
    VerifyDefermentStatus(ReasonCode) {

        cy.ValidateElementText('(//table//tbody//td)[10]', ReasonCode)

    }
}

export default new IGMembershipDeferment