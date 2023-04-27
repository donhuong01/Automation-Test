import MembershipReinstatementConfirmation from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/ReinstatementConfirmation'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'

/*****************************************************
 * Page Function: Sample Script to Test Membership Reinstatement Confirmation Page Actions
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages

describe('Membership Reinstatement Confirmation', function () {

    // Page Definitions
    const MemReinstateConfirm = new MembershipReinstatementConfirmation()

    it('Test Membership Reinstatement Confirmation Popup', function () {

        cy.visit('/membership/memberList')

        //Select a member from memberlisting that has Status Terminated/Resigned/Expelled/Deceased

        //Command for pagenation doesnt work
        cy.Click("/*//span[@class='k-icon k-i-arrow-60-right']", 'NEXT')
    

        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,
            'Member ID', data.memberinfo.member)
        
        // Select Reinstate Option from maintenance dropdown
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')

        // Verify Confirmation Popup
        MemReinstateConfirm.verifyConfirmationPopup({
            title : data.MemberReinstateConfirm.title,
            content : data.MemberReinstateConfirm.content
        })

        //Reinstate Member  //DO NOT REINSTATE MEMBER IN UAT 
        //MemReinstateConfirm.yes()

        //Select Option "No" in Reinstatement PopUp
        MemReinstateConfirm.No()

        // Close Popup Window
        //MemReinstateConfirm.close()
    })
})