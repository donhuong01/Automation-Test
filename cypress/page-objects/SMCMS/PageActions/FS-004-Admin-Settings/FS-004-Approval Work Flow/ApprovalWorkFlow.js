import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MassUpdateForMemberDataDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MassUpdateForMemberDataDetail'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import elems_Picker from '../../../Elements/Common/Picker'

class ApprovalWorkFlow {


     /*****************************************************
     * Method: Verify page title
     * Description: This function verifies the page title
     * @param {string} expectedPg
     * 
     *****************************************************/
      verifyPageTitle(expectedPg){

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

     }
  
     /*****************************************************
     * Method: Verify Status
     * Description: This function file status in detail form
     * @param {string} Status
     * 
     *****************************************************/
      VerifyStatus(Status){

     
      cy.ValidateElementText(elems_MassUpdateForMemberDataDetail.LBL_STATUS, Status)

     }
  
     /*****************************************************
     * Method: UploadFile
     * Description: This function ulpload the file
     * @param {string} FileName
     *****************************************************/
      UploadFile(FileName){

        cy.UploadFile(elems_MassUpdateForMemberDataDetail.File.UPL_FILE, FileName)
        cy.wait(2000)
        
     }

     /*****************************************************
     * Method: Validate
     * Description: This function ulpload the file
     *****************************************************/
      Validate(){
        cy.Click(elems_MassUpdateForMemberDataDetail.BTN_VALIDATE)
        cy.wait(2000)

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Mass Update for Member Data Listing')
        cy.wait(4000)
     }

     /*****************************************************
     * Method: Submit
     * Description: This function ulpload the file
     *****************************************************/
      Submit(){

          cy.Click(elems_MassUpdateForMemberDataDetail.BTN_SUBMIT)
          cy.wait(3000)
     }

     /*****************************************************
     * Method: Cancel
     * Description: This function ulpload the file
     *****************************************************/
      Cancel(){

          cy.Click(elems_MassUpdateForMemberDataDetail.BTN_CANCEL)
          cy.wait(3000)
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Mass Update for Member Data Listing')
     }
     /*****************************************************
     * Method: SearchByIdAndWorkflowName
     * Description: This function filter values by Task ID and Workflow name in Workflow Pending List
     * @param {string} TaskID
     * @param {string} Workflow
     *****************************************************/
      SearchByIdAndWorkflowName(TaskID, Workflow){

          cy.EnterText(elems_MassUpdateForMemberDataDetail.TXT_TASKID, TaskID)
          // cy.EnterText(elems_MassUpdateForMemberDataDetail.TXT_WORKFLOWNAME, Workflow)
          cy.Click(elems_MassUpdateForMemberDataDetail.BTN_SEARCHFILTERS)
     }
     /*****************************************************
     * Method: ApprovalWorkFlow
     * Description: This function complete approval work flow
     * @param {string} TaskID
     * @param {string} Workflow
     * @param {string} WorkflowName
     * @param {string} ApprovalOutCome
     * @param {string} Remark
     *****************************************************/
      ApprovalWorkFlow(TaskID, Workflow, WorkflowName, ApprovalOutCome, Remark){

          // Navigate to Pending Task List
          cy.GlobalNavTo('Admin','Approval','Pending Task List')

          //Verify Page title
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Pending Task Listing')

          cy.wait(300000)
          //Refresh the Page
          cy.visit('/admin/pendingTaskList')

          //Verify Page title
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Pending Task Listing')

          // Enter Task ID
          cy.EnterText(elems_MassUpdateForMemberDataDetail.TXT_TASKID, TaskID)
          // cy.EnterText(elems_MassUpdateForMemberDataDetail.TXT_WORKFLOWNAME, Workflow)
          cy.Click(elems_MassUpdateForMemberDataDetail.BTN_SEARCHFILTERS)
          
          // Select Table item
          cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING,
               'Task ID', TaskID,
               'Task Name', Workflow)

          cy.wait(2000)

          // Verify Task ID
          cy.ValidateElementText(elems_PendingTaskDetail.LBL_TASKID, TaskID)
          // Verify Task Name
          cy.ValidateElementText(elems_PendingTaskDetail.LBL_TASKNAME, Workflow)
          //Verify Workflow Name
          cy.ValidateElementText(elems_PendingTaskDetail.LBL_WFNAME, WorkflowName)

          // Select Approval Outcome
          cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, ApprovalOutCome)
          //Enter Remark
          cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

          //Click on Save button
          cy.Click(elems_PendingTaskDetail.BTN_SAVE)
          cy.wait(1000)
          cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Record has been saved successfully.')

     }

     /*****************************************************
     * Method: SearchByIdAndWorkflowName
     * Description: This function filter values by Task ID and Workflow name in Workflow Pending List
     * @param {string} TaskID
     * @param {string} Workflow
     *****************************************************/
      ClickOnTableItem(TaskID, Workflow){

          cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING,
          'Task ID', TaskID,
          'Task Name', Workflow)
     }
}

export default ApprovalWorkFlow

