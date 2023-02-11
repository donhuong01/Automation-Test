/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Termination Confirmation Popup Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import BatchMembershipTerminationConfirmation from '../../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/BatchMembershipTerminationConfirmation'

// UPDATE WITH MEMBER LISTING PAGE ACTIONS FOR ACTUAL TESTING
import elems_MemberListing from '../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'

describe('[TS03] Batch Membership Termination Management', function () {

    // Page Definitions
    const BatchMemTermConfirm = new BatchMembershipTerminationConfirmation()

    it('[TC01] Test Batch Membership Termination Confirmation Popup', function () {

        cy.visit('/membership/memberList')
        cy.wait(3000)

        // Select Members to Terminate
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member1)
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member2)
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member3)

        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Terminate')

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
        cy.wait(3000)

        //Reinstate Member One
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member1)
        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes()

        //Reinstate Member Two
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member1)
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member2)
        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes()

        //Reinstate Member Three
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member2)
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', data.MemberListing.member3)
        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')
        // Terminate Members
        BatchMemTermConfirm.yes()
    })

})