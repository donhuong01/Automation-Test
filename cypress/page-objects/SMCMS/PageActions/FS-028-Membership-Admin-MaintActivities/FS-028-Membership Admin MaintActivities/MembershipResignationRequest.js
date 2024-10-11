import elems_MembershipResignationRequest from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MembershipResignationRequest'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'

class MembershipResignationRequest{

    /*****************************************************
     * Method: VerifyMemberStatusAndSelectMember
     * Description: This function click on table entry
     * @param {string} Name
     * @param {string} NRIC
     * @param {string} ReasonCode
    *****************************************************/

            VerifyMemberStatusAndSelectMember(Name, NRIC, ReasonCode)
            {
                cy.visit('/membership/memberList')
                cy.EnterText(elems_MemberListing.TXT_NAME, Name)
                cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
                cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
                cy.wait(3000)
       
                cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
                'Reason Code', ReasonCode)
                cy.wait(2000)

                cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, "Name", Name)
            
            }
    /*****************************************************
     * Method: VerifyMemberStatus
     * Description: This function click on table entry
     * @param {string} Name
     * @param {string} NRIC
     * @param {string} ReasonCode
    *****************************************************/

     VerifyMemberStatus(Name, NRIC, ReasonCode)
            {
                cy.visit('/membership/memberList')
                cy.wait(5000)
                cy.EnterText(elems_MemberListing.TXT_NAME, Name)
                cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
                cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
                cy.wait(3000)
       
                cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING, "Reason Code", ReasonCode)
                cy.wait(2000)

                // cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING, "Name", Name)
            
            }

        /*****************************************************
         * Method: Fill Out Membership Resignation Request Form
         * Description:Fill Out Member Request Form
         * @param {string} NRIC
         * @param {string} MemberName
         * @param {string} ResignType
         * @param {string} ResignCode
         * @param {string} Remark
         * @param {string} Status
         *****************************************************/
    
        fillOutDefermentForm(NRIC, MemberName, ResignType, ResignCode, Remark, Status)
        {

            cy.ValidateElementText(elems_MembershipResignationRequest.LBL_LAST4NRICICNO, NRIC)
            cy.ValidateElementText(elems_MembershipResignationRequest.LBL_MEMBERNAME, MemberName)
            cy.SelectDropDownItem(elems_MembershipResignationRequest.DRP_RESIGNTYPE, ResignType)
            cy.SelectDropDownItem(elems_MembershipResignationRequest.DRP_REASONCODE, ResignCode)
            cy.EnterText(elems_MembershipResignationRequest.TEXTAREA_REMARK, Remark)
            cy.ValidateElementText(elems_MembershipResignationRequest.LBL_STATUS, Status)
            
        }
    
    /*****************************************************
        * Method: Cancel Resignation Request form
        * Description: Cancel Resignation Request form
        * @param {string} Expectedpg
    *****************************************************/
    
    
    Cancel(ExpectedPg)
    {
        cy.Click(elems_MembershipResignationRequest.BTN_CANCEL,ExpectedPg)
    }
    /*****************************************************
        * Method: Save Resignation Request form
        * Description: Save Resignation Request form
    *****************************************************/
    
    
    Save()
    {
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
    }
    /*****************************************************
        * Method: Request Resignation Request form
        * Description: Cancel Waiver Request form
    *****************************************************/
    Request()
    {
        cy.Click(elems_MembershipResignationRequest.BTN_REQUEST)
        // cy.wait(250000)
    }

    /*****************************************************
        * Method: Verify page title
        * Description: This function verifies page title
        * @param {string} title
    *****************************************************/

   verifyPageTitle(title)

    {

    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, title)

    }
    /*****************************************************
        * Method: ApprovalWorkFlow
        * Description: This function filter and select value by workflow name 
        * @param {string} WorkflowName
    *****************************************************/

   ApprovalWorkFlow(WorkflowName)

    {

    cy.visit('/admin/pendingTaskList')
    cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkflowName)
    cy.wait(5000)
    cy.Click(elems_PendingTaskListing.BTN_SEARCH)
   

    cy.Click('(//h2[text()="Pending Task Listing"]/ancestor::div//table//a)[1]')
    cy.wait(4000)
    }

    /*****************************************************
        * Method: ApprovalWorkFlow
        * Description: This function filter and select value by workflow name 
        * @param {string} WorkflowName
        * @param {string} 
    *****************************************************/

   FillOutPendingTaskDetail(TaskName, WorkflowName, ApprovalOutcome, Remark)

    {

    cy.ValidateElementText(elems_PendingTaskDetail.LBL_TASKNAME, TaskName)
    cy.ValidateElementText(elems_PendingTaskDetail.LBL_WFNAME, WorkflowName)
    cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, ApprovalOutcome)
    cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

    // cy.wait(2000)

    // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, 'Workflow Name', WorkflowName)

    }


}

export default MembershipResignationRequest

