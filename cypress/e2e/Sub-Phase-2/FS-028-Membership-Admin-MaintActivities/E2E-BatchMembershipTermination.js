/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Termination Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/

// Import Pages
import BatchMembershipTerminationConfirmation from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipTerminationConfirmation'

// UPDATE WITH MEMBER LISTING PAGE ACTIONS FOR ACTUAL TESTING
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'

const BatchMembershipTermination = (Member1, Member2, Member3) => {

describe('[TS03] Batch Membership Termination Management', function () {

    // Page Definitions
    const BatchMemTermConfirm = new BatchMembershipTerminationConfirmation()

    it('[TC01] Test Batch Membership Termination Confirmation Popup', function () {

        cy.visit('/membership/memberList')

        //Filter Out New
        cy.wait(5000)
        cy.xpath(elems_MemberListing.DRP_STATUSREASONCODE)
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUS,'Active')
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUSREASONCODE,'New')
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)

        cy.wait(3000)

        // Select Members to Terminate
        cy.TickSpecificTableItem(Member1)
        cy.TickSpecificTableItem(Member2)
        cy.TickSpecificTableItem(Member3)

        // Select Terminate Option
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Terminate')

        // Verify Confirmation Popup
        BatchMemTermConfirm.verifyConfirmationPopup({
            title : data.BatchMemberTerminateConfirm.title,
            content : data.BatchMemberTerminateConfirm.content
        })

        // Terminate Members
        BatchMemTermConfirm.yes()

        // Do Not Terminate Members
        // BatchMemTermConfirm.no()

        // // Close Popup Window
        // cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Terminate')
        // BatchMemTermConfirm.close()



    })

    it('[TC02] Reinstate All the members', function () {

        cy.visit('/membership/memberList')

        //Filter Out Member1
        cy.wait(5000)
        cy.EnterText(elems_MemberListing.TXT_MEMBERID, Member1 )
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)
        cy.SelectDropDownItem(elems_MemberListing.DRP_STATUS,'InActive')

        //Reinstate Member One
         // Select Members to Terminate
         cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', Member1)
        // Select Terminate Option
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes() 
        
       
        //Filter Out Member2
        cy.visit('/membership/memberList')

        cy.wait(3000)
        cy.EnterText(elems_MemberListing.TXT_MEMBERID, Member2)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)

        //Reinstate Member Two
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', Member2)
        // Select Terminate Option
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes()

        //Filter Out Member3
        cy.visit('/membership/memberList')

        cy.wait(3000)
        cy.EnterText(elems_MemberListing.TXT_MEMBERID, Member3)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)

        //Reinstate Member Three
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', Member3)
        // Select Terminate Option
        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes()
    })

})

}

export default BatchMembershipTermination