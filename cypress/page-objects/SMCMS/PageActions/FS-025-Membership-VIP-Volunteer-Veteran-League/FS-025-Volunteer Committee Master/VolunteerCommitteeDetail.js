import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_VolunteerCommitteeDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerCommitteeDetail'
import elems_VolunteerCommitteeListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerCommitteeListing'

class VolunteerCommitteDetail{


    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} ExpectedPg

    *****************************************************/

     verifyPageTitle(ExpectedPg)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }

    /************************************************** 
         * Method: Fill the form 
         * Description: This function fills the detail form 
         * @param {string} committeeCode
         * @param {string} committeeDescription

    *****************************************************/


    fillOutForm(committeeCode,committeeDescription)
    {
        cy.xpath(elems_VolunteerCommitteeDetail.TXT_COMMITTEECODE).clear()
        cy.EnterText(elems_VolunteerCommitteeDetail.TXT_COMMITTEECODE,committeeCode)
        cy.xpath(elems_VolunteerCommitteeDetail.TXT_COMMITTEEDESCRIPTION).clear()
        cy.EnterText(elems_VolunteerCommitteeDetail.TXT_COMMITTEEDESCRIPTION,committeeDescription)
    }

     /************************************************** 
         * Method: VerifyNewlyCreatedItemInListing
         * Description: This function verify Newly created item in the listin form 
         * @param {string} TargetColumn
         * @param {string} ExpectedValue

    *****************************************************/

     VerifyNewlyCreatedItemInListing(TargetColumn, ExpectedValue){
          
          cy.VerifyTableEntry(elems_VolunteerCommitteeListing.TBL_VOLUNTEERCOMMITTEELISTING,
               TargetColumn, ExpectedValue)
     }
     /************************************************** 
         * Method: save the form 
         * Description: This function saves the detail form 

    *****************************************************/

     save()
     {
        cy.Click(elems_VolunteerCommitteeDetail.BTN_SAVE,'Volunteer Committee Listing')
        cy.wait(3000)

     }

     cancel()
     {
        cy.Click(elems_VolunteerCommitteeDetail.BTN_CANCEL,'Volunteer Committee Listing')
     }


}   
export default new VolunteerCommitteDetail
