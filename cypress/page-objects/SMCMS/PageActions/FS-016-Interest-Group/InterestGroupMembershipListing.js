import elems_IGMembershipTransactionHistory from '../../Elements/Interest Group/IGMembershipTransactionHistory'
import elems_IGMembershipListing from '../../Elements/Interest Group/InterestGroupMembershipListing'
import elems_IGMemberDetail from '../../Elements/Interest Group/InterestGroupMembershipDetail'
import elems_IGMemberListing from '../../Elements/Interest Group/InterestGroupMembershipListing'
import elems_PendingTaskListing from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import elems_IGMembershipDefermentRequest from '../../Elements/Interest Group/InterestGroupMembershipDefRequest'

class InterestGroupListing {

    /*****************************************************
     * Method: ViewTransactionHistory
     * Description: Click on View Transaction History
    *****************************************************/
    ViewTransactionHistory() {

        cy.Click(elems_IGMembershipListing.BTN_VIEWTRANSACTIONHISTORY)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: Cancel
     * Description: Click on Cancel Button
    *****************************************************/
    Cancel() {

        cy.Click(elems_IGMembershipTransactionHistory.BTN_CANCEL)
        cy.wait(2000)

    }


    /*****************************************************
     * Method: Maintenance
     * Description: Click on Mainenance button
    *****************************************************/
    Maintenance(Maintenance) {

        cy.SelectDropDownItem(elems_IGMembershipListing.DRP_MAINTENANCE, Maintenance)
        cy.wait(3000)

    }



    /*****************************************************
     * Method: FiterWithStatus
     * Description:  Filter Table with status
     * @param {string} Status
     *****************************************************/
    FiterWithStatus(Status) {

        cy.SelectDropDownItem(elems_IGMembershipListing.DRP_STATUS, Status)
        cy.Click(elems_IGMembershipListing.BTN_SEARCHFILTERS)


    }
    /*****************************************************
     * Method: TickTableCheckBox
     * Description: 
     *****************************************************/
    TickTableCheckBox() {

        cy.TickCheckBox('(//div[@class="k-widget k-grid"]//table//tbody//input)[1]', 'CHECK')

    }
    /*****************************************************
     * Method: VerifyConvertionStatus
     * Description: 
     *****************************************************/
    VerifyConvertionStatus(Remark) {

        cy.VerifyTableEntry(elems_IGMembershipTransactionHistory.TBL_IGMEMBERSHIPTRANSACTIONHISTORY, 'Remark', Remark)

    }
    /*****************************************************
     * Method: FiterWithCustomerName
     * Description: 
     *****************************************************/
    FiterWithCustomerName(CustomerName) {

        cy.xpath(elems_IGMembershipListing.TXT_CUSTOMERNAME).clear()
        cy.EnterText(elems_IGMembershipListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_IGMembershipListing.BTN_SEARCHFILTER)


    }

    /*****************************************************
     * Method: SlectTableLinkItem
     * Description: 
     *****************************************************/
    SlectTableLinkItem(CustomerName) {

        cy.SelectTableItem(elems_IGMembershipListing.TBL_IGGROUPMEMBERLIST, 'Customer Name', CustomerName)


    }

    /*****************************************************
       * Method: MembershipStatusReason
       * Description: This function Verify Membership Status Reason 
       *****************************************************/

    MembershipStatusReason(Reason) {
        cy.Click(elems_IGMemberListing.TBL_LINKIGMEMBERLIST)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_MEMBERSTATUSREASON, Reason)

    }

    /*****************************************************
       * Method: ClickTableItem
       * Description: 
       *****************************************************/

    ClickTableItem(Reason) {
        cy.Click('(//table//a)[1]')
        cy.ValidateElementText('//label[@for="lblMembershipStatusReason"]', Reason)

    }
    /*****************************************************
       * Method: ClickIGID
       * Description: This Function Click on Interest Group Id
       *****************************************************/
    ClickIGID() {
        cy.Click('(//table//a)[1]')
        cy.wait(2000)

    }
    /*****************************************************
       * Method: VerifyIGMembershipId
       * Description: This Function verify IG Id
       *****************************************************/
    VerifyIGMembershipId(IGMembershipID) {
        cy.ValidateElementText(elems_IGMemberDetail.LBL_IGMEMBERSHIPID, IGMembershipID)

    }
    /*****************************************************
       * Method: VerifyInterestGroupLbl
       * Description: This Function verify IG Labels
       *****************************************************/
    VerifyInterestGroupLbl(IGMian, InterestGroup) {
        cy.ValidateElementText(elems_IGMemberDetail.LBL_IGMAIN, IGMian)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_INTERESTGROUP, InterestGroup)

    }
    /*****************************************************
       * Method: VerifyCustomerLabels
       * Description: This Function verify Customer Labels
       *****************************************************/
    VerifyCustomerLabels(CustomerID, CustomerName) {
        cy.ValidateElementText(elems_IGMemberDetail.LBL_CUSTOMERID, CustomerID)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_CUSTOMERNAME, CustomerName)

    }
    /*****************************************************
       * Method: VerifMembershipLabels
       * Description: This Function verify Membership Labels
       *****************************************************/
    VerifMembershipLabels(InitialJoinDate, ExpiryDate, MembershipStatus, MembershipStatusReason) {
        cy.ValidateElementText(elems_IGMemberDetail.LBL_INITIALJOINDATE, InitialJoinDate)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_EXPIRYDATE, ExpiryDate)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_MEMBERSHIPSTATUS, MembershipStatus)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_MEMBERSHIPSTATUSREASON, MembershipStatusReason)

    }
    /*****************************************************
        * Method: VerifyStatus
        * Description: This function Verify Status of the item in IG Listing Table
       *****************************************************/
    VerifyStatus(Status) {

        cy.VerifyTableEntry(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'Status', Status)

    }
    /*****************************************************
        * Method: VerifyReasonCode
        * Description: This function Verify Reason code
       *****************************************************/
    VerifyReasonCode(ReasonCode) {

        cy.ValidateElementText('(//table//tbody//td)[10]', ReasonCode)

    }
    /*****************************************************
        * Method: CheckFilterFunctionality
        * Description: This function Check Filter Functionality of IG Membership Listing Form
        * @param {string} IGMian
        * @param {string} IG
        * @param {string} IGMembershipID
        * @param {string} SAFRAMembershipID
        * @param {string} Status
        * @param {string} CustomerName
        * @param {string} ExpiryDateFrom
        * @param {string} ExpiryDateTo
       *****************************************************/
    CheckFilterFunctionality(IGMian, IG, IGMembershipID, SAFRAMembershipID, Status, CustomerName) {

        // cy.SelectPickerWithoutFields(elems_IGMemberListing.PCK_IGMAIN, IGMian)
        // cy.SelectPickerWithoutFields(elems_IGMemberListing.PCK_INTERESTGROUP, IG)
        cy.EnterText(elems_IGMemberListing.TXT_IGMEMBERSHIPID, IGMembershipID)
        cy.EnterText(elems_IGMemberListing.TXT_SAFRAMEMBERSHIPID, SAFRAMembershipID)
        cy.SelectDropDownItem(elems_IGMemberListing.DRP_STATUS, Status)
        cy.EnterText(elems_IGMemberListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_IGMemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)
        cy.VerifyTableEntry(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'Interest Group Membership ID', IGMembershipID)
        cy.VerifyTableEntry(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'SAFRA Membership ID', SAFRAMembershipID)


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
        cy.wait(6000)

        //Click on Table item
        cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click({ force: true })
        // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

        //Approval Outcome
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, Approval)

        //Remark
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

        // Click on Save button
        cy.Click(elems_IGMembershipDefermentRequest.BTN_SUBMIT)
        cy.wait(2000)


    }
}
export default new InterestGroupListing