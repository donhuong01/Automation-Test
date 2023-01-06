import elems_MemberStatusReasonCodeDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberStatusReasonCodeDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MemberStatusReasonCodeListing from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberStatusReasonCodeListing'


class MemberStatusReasonCodeDetail{


/*****************************************************
     * Method: verify title of MemberStatusReasonCodeDetail Form
     * Description: verify Form title 
*****************************************************/

   verifyMemberStaReaCodDetailPageTitle() {
       cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Status Reason Code Detail')
   }

  /*****************************************************
     * Method: verifyMemberStatusReasonCodeDetail
     * Description: verify Address Information
     *
     * @param {string} ReasonCode Reason Code
     * @param {string} MemberStatus Member Status
     * @param {string} Comeback  Comeback
     * @param {string} Remark Remark
     *****************************************************/

   verifyMemberStatusReasonCodeDetail(ReasonCode, MemberStatus, Comeback, Remark){
    //verify Reason Code
    if(ReasonCode !== undefined){
        cy.ValidateElementText(elems_MemberStatusReasonCodeDetail.LBL_REASONCODE, ReasonCode)
     }
     if(MemberStatus !== undefined){
        cy.SelectDropDownItem(elems_MemberStatusReasonCodeDetail.DRP_MEMBERSTATUS, MemberStatus)
     }
     if(Comeback !== undefined){
        cy.SelectDropDownItem(elems_MemberStatusReasonCodeDetail.DRP_COMEBACK, Comeback)
     }
     if(Remark !== undefined){
        cy.xpath(elems_MemberStatusReasonCodeDetail.TEXTAREA_REMARK).clear()
        cy.EnterText(elems_MemberStatusReasonCodeDetail.TEXTAREA_REMARK, Remark)
     }
       // Error Handling
       if( ReasonCode === undefined 
        && MemberStatus === undefined
        && Comeback === undefined
        && Remark === undefined
    
     ){
        throw new Error("MemberStatusReasonCodeDetail.Reason Code detail Error!!./n\
                        Please provide at least one argument.")
    }

   }

     /*****************************************************
     * Method: Save
     * Description: Saving Member Status Code Detail
     *****************************************************/
      Save(){
        cy.Click(elems_MemberStatusReasonCodeDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Status Reason Code Listing')
    
      }

   /*****************************************************
     * Method: Cancel
     * Description:Cancel Member Status Code Detail
     *****************************************************/
   Cancel(){
   cy.Click(elems_MemberStatusReasonCodeDetail.BTN_CANCEL)
   cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Status Reason Code Listing')
}

  /*****************************************************
     * Method: verifyMemStatusReasonCodeList
     * Description: Verfies Member Status Reason Code Listing Table
     * @param {string} reasonCode Reason Codes Array

     *****************************************************/

 verifyMemStatusReasonCodeList(reasonCode,memberStatus,comeBack,remark){
      
   cy.VerifyTableContent(

          elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
          'Member Status', memberStatus,
          'Reason Code', reasonCode
      )

      cy.VerifyTableContent(

          elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
          'Comeback', comeBack,
          'Reason Code', reasonCode
      )

      cy.VerifyTableContent(

          elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
          'Remark', remark,
          'Reason Code', reasonCode
      )

  }


    
}
export default MemberStatusReasonCodeDetail
