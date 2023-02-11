import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import BatchMembershipDefermentRequest from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipDeferement'

describe('[TS01] Batch Membership Deferment Request Management', function () {

    const DefermentRequest = BatchMembershipDefermentRequest

    it('[TC01] Batch Membership Deferment Form', function () {

        cy.visit('/membership/memberList')  //Visit web page for member listing 
        cy.wait(2000)
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUSREASONCODE, 'Deferred')
        cy.wait(1000)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)

        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,

            'Member ID', data.Deferment.MemberId1
        )
        cy.wait(2000)
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,

            'Member ID', data.Deferment.MemberId2
        )

        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE, 'Deferment')

        //Start page action 

        const StartMonth = data.Deferment.StartMonth
        const ReasonCode = data.Deferment.ReasonCode
        const Remarks = data.Deferment.Remarks
        const DefermentPeriod = data.Deferment.DefermentPeriod
        const EndDate = data.Deferment.EndDate

        DefermentRequest.fillOutDefermentForm(StartMonth, DefermentPeriod, ReasonCode, Remarks)

        DefermentRequest.VerifyDefermentForm(data.MemberListing)

        // DefermentRequest.verifyEndDate()

        DefermentRequest.Cancel('Member Listing')

        DefermentRequest.verifyPageTitle()

        //Deferment.Request()

    })


})