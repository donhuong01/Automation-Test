import BatchMembershipWaiverRequest from "../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipWaiverRequest"
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'

describe('Sample test for the page actions',function(){

    const Waiver = BatchMembershipWaiverRequest

    it('Batch Membership Waiver Form', function(){

        cy.visit('/membership/memberList')  //Visit web page for member listing 

        cy.wait(3000)
        
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', data.Waiver.Name1,
            'Member ID', data.Waiver.MemberId1
            )
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', data.Waiver.Name2,
            'Member ID', data.Waiver.MemberId2
            )
        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Waiver')
        

        const StartMonth = data.Waiver.StartMonth
        const ReasonCode = data.Waiver.ReasonCode
        const Remarks = data.Waiver.Remarks
        const WaiverPeriod = data.Waiver.WaiverPeriod
        const EndDate = data.Waiver.EndDate    
            
        Waiver.fillOutWaiverForm(StartMonth,WaiverPeriod,ReasonCode,Remarks)
        
        Waiver.VerifyWaiverForm(data.MemberListing)

        // Waiver.Cancel('Member Listing')

        //Waiver.Request()
        
    })



})