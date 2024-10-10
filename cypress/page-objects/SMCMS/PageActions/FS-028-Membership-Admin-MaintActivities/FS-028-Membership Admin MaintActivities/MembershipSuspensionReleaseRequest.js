import elems_MembershipSuspensionReleaseRequest from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MembershipSuspensionReleaseRequest'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class MembershipSuspensionReleaseRequest{

/*****************************************************
     * Method: Fill Out Suspension Release Request Form
     * Description:Fill Out Member Suspension Release Request Form
     *
     * @param {string} earlyReleaseDate
     * @param {string} ReasonCode
     * @param {string} Remarks

*****************************************************/

 fillOutSuspensionForm(earlyReleaseDate,Remarks)
    {
        if(earlyReleaseDate !== undefined)
           { 
                cy.EnterDate(elems_MembershipSuspensionReleaseRequest.DATE_EARLYRELEASEDDATE, earlyReleaseDate)  
           }
        if(Remarks !== undefined)
           {
                cy.EnterText(elems_MembershipSuspensionReleaseRequest.TXTAREA_REMARK,Remarks)   
           }  
        if(earlyReleaseDate === undefined && Remarks === undefined)
            {   
                throw new Error("MembershipDeceasedConfirmation.verifyConfirmationPopup Error!!.\
                                Please provide at least one argument.")
            }
        cy.SelectDropDownItem(elems_MembershipSuspensionReleaseRequest.DRP_REASONCODE,'RELEASE SUSPENSION EARLY')

    }

/*****************************************************
     * Method: Verify Suspension Release Request form
     * Description: Verify Suspension Release Request form
     * 
     *
     * @param {string} suspensionRequestId
     * @param {string} MemberId
     * @param {string} NRIC
     * @param {string} MemberName
     * @param {string} StartDate
     * @param {string} EndDate

*****************************************************/
VerifySuspensionReleaseRForm(suspensionRequestId,MemberId,NRIC,MemberName,StartDate,EndDate)
    {
      if( suspensionRequestId !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_SUSPENSIONREQID, suspensionRequestId)
      }
      if( MemberId !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_MEMBERID, MemberId)
      }
      if( NRIC !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_LAST4NRIC_ICNO, NRIC)
      }
      if( MemberName !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_MEMBERNAME, MemberName)
      }
      if( StartDate !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_STARTDATE, StartDate)
      }
      if( EndDate !== undefined)
      {
          cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.LBL_ENDDATE, EndDate)
      }
      if(suspensionRequestId ===undefined && MemberId === undefined && NRIC === undefined && MemberName  === undefined && StartDate  === undefined && EndDate  === undefined )
      {
        throw new Error("Membership Deceased Confirmation.verify form data Error!!.\
                         No data is found in the form to verify.")
      }

    }
/*****************************************************
    * Method: Upload file
    * Description: Attach file in suspension release form
*****************************************************/

uplaodFile()
{

    cy.UploadFile(elems_MembershipSuspensionReleaseRequest.Attachments.UPL_ATTACHMENTS, 'simple.pdf')

}
/*****************************************************
    * Method: Verify file upload Msg
    * Description: Verify if file successfully uploaded in suspension release form
*****************************************************/

verifyFileUploadSuccessMsg()
{

    cy.ValidateElementText(elems_MembershipSuspensionReleaseRequest.MSG_FILEUPLOADS, 'File(s) successfully uploaded.')

}

/*****************************************************
    * Method: Verify page header
    * Description: This function is verifies page title 
*****************************************************/

verifyPageTitle()
{
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Suspension Release Request')
}

/*****************************************************
    * Method: Cancel
    * Description: Click on the cancel button in Membership Suspension Release Request Form
*****************************************************/

Cancel()
{
    cy.Click(elems_MembershipSuspensionReleaseRequest.BTN_CANCEL, 'Member Listing')
}

/*****************************************************
    * Method: Request 
    * Description: Click on Request button in Membership Suspension Release Request Form
*****************************************************/

Request()
{
    cy.Click(elems_MembershipSuspensionReleaseRequest.BTN_REQUEST, 'Member Listing')
}

}
export default new MembershipSuspensionReleaseRequest