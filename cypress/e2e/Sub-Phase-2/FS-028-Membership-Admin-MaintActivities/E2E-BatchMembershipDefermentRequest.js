/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Deferment Request Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/

import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import BatchMembershipDefermentRequest from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipDeferement'
import MemberListing from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Member Listing/MemberListing'

const BatchMemDefermentRequest = (Name1, MemberID1, Name2, MemberID2) => {

describe('[TS01] Batch Membership Deferment Request Management',function(){

    const DefermentRequest = BatchMembershipDefermentRequest
    const MemList = new MemberListing()

    it('[TC01] Creating and cancelling a Batch Membership Deferment Request', function(){

        cy.visit('/membership/memberList')  //Visit web page for member listing 
        
        //Filter Out New
        cy.wait(5000)
        cy.xpath(elems_MemberListing.DRP_STATUSREASONCODE)
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUSREASONCODE,'New')
        cy.SelectDropDownItem(elems_MemberListing.DRP_SFSSTATUS,'Active')
       
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)

        cy.wait(3000)

        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', Name1,
            'Member ID', MemberID1
            )
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', Name2,
            'Member ID', MemberID2
            )
        
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Deferment')
       
        //Start page action 

        const StartMonth =data.Deferment.StartMonth
        const ReasonCode = data.Deferment.ReasonCode
        const Remarks = data.Deferment.Remarks
        const DefermentPeriod = data.Deferment.DefermentPeriod
        const EndDate = data.Deferment.EndDate     
            
        DefermentRequest.fillOutDefermentForm(StartMonth,DefermentPeriod,ReasonCode,Remarks)
        
        // DefermentRequest.VerifyDefermentForm(data.Deferment)

        // DefermentRequest.verifyEndDate()
        
        DefermentRequest.Cancel('Member Listing')

        DefermentRequest.verifyPageTitle()

        
    })

    it.only('[TC02] Creating a Batch Membership Deferment Request', function(){

        cy.visit('/membership/memberList')  //Visit web page for member listing 

        //cy.xpath('//span[@class="k-icon k-i-arrow-end-right"]').click()

        //Filter Out New
        cy.wait(5000)
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUSREASONCODE,'New')
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)

        cy.wait(3000)

        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', Name1,
            'Member ID', MemberID1
            )
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', Name2,
            'Member ID', MemberID2
            )
        
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Deferment')
       
        //Start page action 

        const StartMonth =data.Deferment.StartMonth
        const ReasonCode = data.Deferment.ReasonCode
        const Remarks = data.Deferment.Remarks
        const DefermentPeriod = data.Deferment.DefermentPeriod
        const EndDate = data.Deferment.EndDate     
            
        DefermentRequest.fillOutDefermentForm(StartMonth,DefermentPeriod,ReasonCode,Remarks)
        
        // DefermentRequest.VerifyDefermentForm(data.Deferment)
        // DefermentRequest.verifyEndDate()
        
        DefermentRequest.Request()

        DefermentRequest.verifyPageTitle()

        cy.visit('/admin/pendingTaskList')  //Visit web page for member listing 
        cy.wait(5000)

        DefermentRequest.ApproveBatchMembershipDeferment('Approve')

        cy.wait(3000)
        cy.visit('/membership/memberList')  //Visit web page for member listing 

        //DefermentRequest.VerifyDefermentForm(Name1,MemberID1,Name2,MemberID2)
    })


})

}

export default BatchMemDefermentRequest