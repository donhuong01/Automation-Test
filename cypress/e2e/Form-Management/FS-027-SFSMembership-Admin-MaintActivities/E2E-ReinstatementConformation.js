/*****************************************************
 * Page Function: Sample Script to Test SFS Membership Restatement Confirmation Popup Page Actions
 *
 * @author: FShahzada
 *****************************************************/
import MembershipReinstatementConfirmation from '../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/ReinstatementConfirmation'
import elems_MemberListing from '../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'
import MembershipModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'

/*****************************************************
 * Page Function: Sample Script to Test Membership Reinstatement Confirmation Page Actions
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
const ReinstatementConfirmation = (SFSActivate, MemberID) => {

describe('Membership Reinstatement Confirmation', function () {

    // Page Definitions
    const MemReinstateConfirm = new MembershipReinstatementConfirmation()
    const MemModuleSettings = new MembershipModuleSetting()

    it('Test Membership Reinstatement Confirmation Popup', function () {

        if(SFSActivate = "Yes"){

            ////Enable SFS
            cy.visit('/membership/moduleSettings')
            cy.wait(5000)
            
            MemModuleSettings.SFSActivate('CHECK')
            cy.wait(2000)
            
        }

        cy.visit('/membership/memberList')

        //Select a member from memberlisting that has Status Terminated/Resigned/Expelled/Deceased

        //Command for pagenation doesnt work
        //cy.Click("/*//span[@class='k-icon k-i-arrow-60-right']", 'NEXT')

        //Filter Out Name
        cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)
    

        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,
            'Member ID', MemberID)
        
        // Select Reinstate Option from maintenance dropdown
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Reinstate')

        // Verify Confirmation Popup
        MemReinstateConfirm.verifyConfirmationPopup({
            title : data.MemberReinstateConfirm.title,
            content : data.MemberReinstateConfirm.content
        })

        //Reinstate Member  //DO NOT REINSTATE MEMBER IN UAT 
        //MemReinstateConfirm.Yes()

        //Select Option "No" in Reinstatement PopUp
        MemReinstateConfirm.No()

        // Close Popup Window
        //MemReinstateConfirm.close()
    })
})

}
export default ReinstatementConfirmation