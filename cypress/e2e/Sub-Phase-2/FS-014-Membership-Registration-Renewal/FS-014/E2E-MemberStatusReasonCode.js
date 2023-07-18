/*****************************************************
 * Page Function: Sample Script to Test MemberStatusCodeReasonDetail form
 *
 * @author: rsampang
 *****************************************************/

// Import Pages
import MemberStatusReasonCodeDetail from "../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Status Reason Code/MemberStatusReasonCodeDetail"
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-Uat-data'
import elems_MemberStatusReasonCodeListing from "../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberStatusReasonCodeListing"
import login from '../../../../fixtures/login'

const MemberStatusReasonCode = () => { 

describe('[SP1-FS014_TS07] Member Status Reason Code Detail', function (){

    // beforeEach(() => {

    //     // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client) 
    //      // Set local storage for UAT Enviroment
    // // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    
    // });
    //page definition
    const Memstatreasoncodedetail = new MemberStatusReasonCodeDetail()
    const ReasonCode = data.memstatcodedetail.ReasonCode
    const MemberStatus = data.memstatcodedetail.MemberStatus
    const Comeback = data.memstatcodedetail.Comeback
    const ComebackList = data.memstatcodedetail.ComebackList
    const Remark = data.memstatcodedetail.Remark

    const UpdatedReasonCode = data.memstatcodedetailUpated.ReasonCode
    const UpdatedMemberStatus = data.memstatcodedetailUpated.MemberStatus
    const UpdatedComeback = data.memstatcodedetailUpated.Comeback
    const UpdatedComebackList = data.memstatcodedetailUpated.ComebackList
    const UpdatedRemark = data.memstatcodedetailUpated.Remark


    it('[TC01] Update data in member status reason code detail and click Cancel button', function () {
       cy.visit('/membership/memberStatusReasonCodeList')
       cy.wait(5000) 
 

        cy.ClickTableLinkItem(
            elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
            'Reason Code', //Column name in the website
            data.memstatcodedetail.ReasonCode, //provide the value you want to select in the column
            'Member Status', // col ref in the website
            data.memstatcodedetail.MemberStatus
        )

            //Reads the page title
        Memstatreasoncodedetail.verifyMemberStaReaCodDetailPageTitle()
        
        Memstatreasoncodedetail.verifyMemberStatusReasonCodeDetail(ReasonCode, MemberStatus, Comeback, Remark)
    
        Memstatreasoncodedetail.Cancel()
        cy.wait(5000)

        //Verify table entry
        //Memstatreasoncodedetail.verifyMemStatusReasonCodeList(ReasonCode, MemberStatus, ComebackList, Remark)
       
    })

    it('[TC02] Update data in member status reason code detail and click Save button', function () {
       cy.visit('/membership/memberStatusReasonCodeList')
       cy.wait(5000) 
 

        cy.ClickTableLinkItem(
            elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
            'Reason Code', //Column name in the website
            data.memstatcodedetail.ReasonCode, //provide the1 value you want to select in the column
            'Member Status', // col ref in the website
            data.memstatcodedetail.MemberStatus
        )

        //Reads the page title
       Memstatreasoncodedetail.verifyMemberStaReaCodDetailPageTitle()
    
       Memstatreasoncodedetail.verifyMemberStatusReasonCodeDetail(UpdatedReasonCode, UpdatedMemberStatus, UpdatedComeback, UpdatedRemark)

        Memstatreasoncodedetail.Save()
        cy.wait(2000)

        //Verify table entry
        Memstatreasoncodedetail.verifyMemStatusReasonCodeList(UpdatedReasonCode, UpdatedMemberStatus, UpdatedComebackList, UpdatedRemark)
       
    })

    it('[TC03] Reset data in member status code detail and click Save button', function () {
       cy.visit('/membership/memberStatusReasonCodeList')
       cy.wait(2000) 
 

       cy.ClickTableLinkItem(
        elems_MemberStatusReasonCodeListing.TBL_MEMBERSTATUSREASONCODELISTING,
        'Reason Code', //Column name in the website
        data.memstatcodedetailUpated.ReasonCode, //provide the value you want to select in the column
        'Member Status', // col ref in the website
        data.memstatcodedetailUpated.MemberStatus
        )

        //Reads the page title
        Memstatreasoncodedetail.verifyMemberStaReaCodDetailPageTitle()
        
        Memstatreasoncodedetail.verifyMemberStatusReasonCodeDetail(ReasonCode, MemberStatus, Comeback, Remark)

        Memstatreasoncodedetail.Save()
        cy.wait(2000)

        //Verify table entry
        Memstatreasoncodedetail.verifyMemStatusReasonCodeList(ReasonCode, MemberStatus, ComebackList, Remark)
       
    })

})

}

export default MemberStatusReasonCode