/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Deceased Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/

// Import Pages
import MembershipDeceasedConfirmation from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/MembershipDeceasedConfirmation'
import MemberListing from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Member Listing/MemberListing'
import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

const MembershipDeceased = (MemberID) => {

describe('[TS03] Membership Deceased Confirmation Popup', function () {

    // Page Definitions
    const MemDeceaseConfirm = new MembershipDeceasedConfirmation()
    const MemList = new MemberListing()

    it('[TC01] Updating a deceased member status and cancelling', function () {

        // Navigate to Member Listing
        cy.visit('/membership/memberList')
        cy.wait(10000)

        // Filter Member Listing for Active Members
        MemList.FilterByMemberID(MemberID)

        // Select Active Member item and Decease
        MemList.selectMaintenanceDRP({
            memberId : MemberID,
            maintenanceOperation : data.MembershipDeceased.MemberListing.maintenanceOperation,
            confirmationCheckbox : data.MembershipDeceased.MemberListing.confirmationCheckbox // PROVIDE VALUE TO TICK TERMINATE CHECKBOX
        })

        // Verify Confirmation Popup
        MemDeceaseConfirm.verifyConfirmationPopup({
            title : data.MembershipDeceased.title,
            content : data.MembershipDeceased.content
        })

        // Do Not Decease Member
        MemDeceaseConfirm.No()
    })

    it('[TC02] Updating a deceased member status', function () {

        // Navigate to Member Listing
        cy.visit('/membership/memberList')
        cy.wait(10000)

        // Filter Member Listing for Active Members
        MemList.FilterByMemberID(MemberID)

        // Select Active Member item and Decease
        MemList.selectMaintenanceDRP({
            memberId : MemberID,
            maintenanceOperation : data.MembershipDeceased.MemberListing.maintenanceOperation
        })

        // Verify Confirmation Popup
        MemDeceaseConfirm.verifyConfirmationPopup({
            title : data.MembershipDeceased.title,
            content : data.MembershipDeceased.content
        })

        // Decease Member
        MemDeceaseConfirm.Yes()

        // REINSTATE ITEM FOR TC02
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE, 'Reinstate')
        MemDeceaseConfirm.Yes()
    })

    it('[TC03] Updating a deceased member status and terminating dependent member', function () {

        // Navigate to Member Listing
        cy.visit('/membership/memberList')
        cy.wait(10000)

        // Filter Member Listing for Active Members
        MemList.FilterByMemberID(MemberID)

        // Select Active Member item and Decease
        MemList.selectMaintenanceDRP({
            memberId : MemberID,
            maintenanceOperation : data.MembershipDeceased.MemberListing.maintenanceOperation,
            confirmationCheckbox : data.MembershipDeceased.MemberListing.confirmationCheckbox // PROVIDE VALUE TO TICK TERMINATE CHECKBOX
        })

        // Verify Confirmation Popup
        MemDeceaseConfirm.verifyConfirmationPopup({
            title : data.MembershipDeceased.title,
            content : data.MembershipDeceased.content
        })

        // Decease Member
        MemDeceaseConfirm.Yes()
        cy.wait(3000)

        // REINSTATE ITEM FOR TC03
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE, 'Reinstate')
        MemDeceaseConfirm.Yes()
    })


})

}

export default MembershipDeceased