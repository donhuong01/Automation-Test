import elems_MembershipSuspensionRequest from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MembershipSuspensionRequest'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'

class MembershipSuspention{

/*****************************************************
         * Method: fillOutSuspentionForm
         * Description:This function fill Out Suspention Form
         * @param {string} StartDate
         * @param {string} EndDate
         * @param {string} ReasonCode
         * @param {string} Remarks
*****************************************************/
    
        fillOutSuspentionForm( StartDate , EndDate , ReasonCode , Remarks)
        {
            if(StartDate !== undefined && EndDate !== undefined && ReasonCode !== undefined && Remarks !== undefined)
            {
            
                cy.EnterDate(elems_MembershipSuspensionRequest.DATE_STARTDATE,StartDate)
                cy.EnterDate(elems_MembershipSuspensionRequest.DATE_ENDDATE,EndDate)
                cy.SelectDropDownItem(elems_MembershipSuspensionRequest.DRP_REASONCODE,ReasonCode)
                cy.EnterText(elems_MembershipSuspensionRequest.TXTAREA_REMARK,Remarks) 

            }
            else 
            {
                throw new Error("MembershipTenureSelection.principalTenureSelection Error!!./n\
                                Please provide one argument.")
            }
        }
            /*****************************************************
             * Method: fill Out Suspention Release Form
             * Description:This function fill Out Suspention Release Form
             * @param {string} EarlyReleaseDate
             * @param {string} ReasonCode
             * @param {string} Remarks
            *****************************************************/
    
    fillOutSuspentionReleaseForm(EarlyReleaseDate , ReasonCode , Remarks)
        {
            if(EarlyReleaseDate !== undefined && ReasonCode !== undefined && Remarks !== undefined)
            {
            
                cy.EnterDateSuspension(elems_MembershipSuspensionRequest.DATE_EARLYRELEASEDATE,EarlyReleaseDate)
                cy.xpath(elems_MembershipSuspensionRequest.DRP_REASONCODE)
                cy.SelectDropDownItem(elems_MembershipSuspensionRequest.DRP_REASONCODE,ReasonCode)
                cy.EnterText(elems_MembershipSuspensionRequest.TXTAREA_REMARK,Remarks) 

            }
            else 
            {
                throw new Error("MembershipTenureSelection.principalTenureSelection Error!!./n\
                                Please provide one argument.")
            }
        }
    
    /*****************************************************
         * Method: Verify Waiver Request form
         * Description: Verify Waiver Request form
         * @param {string} MemberName
         * @param {string} NRIC
         * @param {string} ReasonCode
    *****************************************************/
    
    VerifySuspentionForm(MemberName, NRIC , ReasonCode)
        {
            cy.EnterText(elems_MemberListing.TXT_NAME,MemberName)
            cy.EnterText(elems_MemberListing.TXT_NRIC,NRIC)
            cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
            cy.wait(2000)
            
          
            cy.VerifyTableEntry(
                elems_MemberListing.TBL_MEMBERLISTING,
                'Reason Code', ReasonCode
                )
        }
    /*****************************************************
        * Method: Cancel Waiver Request form
        * Description: Cancel Waiver Request form
        * @param {string} Expectedpg
    *****************************************************/
    
    
    Cancel(ExpectedPg)
    {
        cy.Click(elems_MembershipSuspensionRequest.BTN_CANCEL,ExpectedPg)
    }
    /*****************************************************
        * Method: Submit
        * Description: Click Submit Button
    *****************************************************/
    Submit()
    {
        cy.Click(elems_MembershipSuspensionRequest.BTN_SUBMIT)
    }

    /*****************************************************
        * Method: Request Waiver Request form
        * Description: Cancel Waiver Request form
        * @param {string} EndDate
        
    *****************************************************/
   verifyEndDate()
   {
    
    //Get current date of the sytem
    var date = new Date();
    //Get curent full year(2022)
    var year = date.getFullYear();
    //Always select first date of the future month
    var day = '01';

    //Declear array of months
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    //Get the current month of the system
    const getMonth = months[date.getMonth()+3];

    //Reformat the date
    const EndDate = day+"-"+getMonth+"-"+year
    
    cy.ValidateElementText(elems_MembershipSuspensionRequest.LBL_ENDDATE, EndDate)
    

   }
   /*****************************************************
        * Method: verifyPageTitle
        * Description: This function verify Page Title
        * @param {string} Text  
    *****************************************************/
   verifyPageTitle(Text)
    {

    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, Text)

    }
    /*****************************************************
        * Method: VerifyNotificationMsg
        * Description:This function Verify Notification Msg
        * @param {string} EndDate
        
    *****************************************************/
    VerifyNotificationMsg(Msg)
    {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, Msg)
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
 cy.Click(elems_PendingTaskListing.BTN_SEARCH)
 cy.wait(2000)

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


 }
 Save()
    {
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
    }


}

export default new MembershipSuspention

