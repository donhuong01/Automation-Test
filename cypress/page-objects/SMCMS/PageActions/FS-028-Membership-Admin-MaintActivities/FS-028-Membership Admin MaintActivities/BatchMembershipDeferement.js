import elems_BatchMembershipDefermentRequest from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/BatchMembershipDefermentRequest'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class BatchMembershipDefermentRequest{

/*****************************************************
         * Method: Fill Out Waiver Request Form
         * Description:Fill Out Member Request Form
         *
         * @param {string} StartMonth
         * @param {string} DefermentPeriod
         * @param {string} ReasonCode
         * @param {string} Remarks
*****************************************************/
    
        fillOutDefermentForm(StartMonth,DefermentPeriod,ReasonCode,Remarks)
        {
            if(StartMonth !== undefined && DefermentPeriod !== undefined && ReasonCode !== undefined && Remarks !== undefined)
            {
            
                cy.EnterDate(elems_BatchMembershipDefermentRequest.DATE_STARTMONTH,StartMonth)
                cy.EnterText(elems_BatchMembershipDefermentRequest.NUM_NOOFDEFERMNTPERDS,DefermentPeriod)
                cy.SelectDropDownItem(elems_BatchMembershipDefermentRequest.DRP_REASONCODE,ReasonCode)
                cy.EnterText(elems_BatchMembershipDefermentRequest.TXTAREA_REMARK,Remarks) 

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
         * 
         *
         * @param {string} MemberListing
    
    *****************************************************/
    VerifyDefermentForm(Name1,MemberId1,Name2,MemberId2)
        {
            
            cy.VerifyTableEntryDeferment(
                elems_BatchMembershipDefermentRequest.MemberListing.TBL_MEMBERLISTING,
                'Member Name', Name1,
                'Member ID', MemberId1
                )
            cy.VerifyTableEntryDeferment(
                elems_BatchMembershipDefermentRequest.MemberListing.TBL_MEMBERLISTING,
                'Member Name', Name2,
                'Member ID', MemberId2
                )   
    
        }
    /*****************************************************
        * Method: Cancel Waiver Request form
        * Description: Cancel Waiver Request form
        * @param {string} Expectedpg
    *****************************************************/
    
    
    Cancel(ExpectedPg)
    {
        cy.Click(elems_BatchMembershipDefermentRequest.BTN_CANCEL,ExpectedPg)
    }
    /*****************************************************
        * Method: Request Waiver Request form
        * Description: Cancel Waiver Request form
    *****************************************************/
    Request()
    {
        cy.Click(elems_BatchMembershipDefermentRequest.BTN_REQUEST)
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
    
    cy.ValidateElementText(elems_BatchMembershipDefermentRequest.LBL_ENDDATE, EndDate)
    

   }
   verifyPageTitle()

    {

    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')

    }
    ApproveBatchMembershipDeferment(ApproveOutCome){

        cy.EnterText('//input[@id="txtTaskId"]', 'M-BDF')
        cy.EnterText('//input[@id="txtWorkflowname"]', 'Batch Membership Deferment Approval Workflow')
        cy.Click('//button[text()="Search Filters"]')
        cy.wait(7000)
        cy.Click('(//table//a)[1]')
        cy.wait(3000)
        cy.SelectDropDownItem('//span[@id="drpApprovalOutcome"]', ApproveOutCome)
        cy.Click("//button[text()='Submit']")



    }


}

export default new BatchMembershipDefermentRequest

