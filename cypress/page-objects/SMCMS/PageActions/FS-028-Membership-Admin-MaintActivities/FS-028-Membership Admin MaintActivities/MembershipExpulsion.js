import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'



class MembershipExpulsion{

    /*****************************************************
     * Method: VerifyMemberStatusAndSelectMember
     * Description: This function click on table entry
     * @param {string} Name
     * @param {string} NRIC
     * @param {string} ReasonCode
    *****************************************************/

            VerifyMemberStatusAndSelectMember(Name, NRIC, ReasonCode)
            {
                cy.visit('/membership/memberList')
                cy.EnterText(elems_MemberListing.TXT_NAME, Name)
                cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
                cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
                cy.wait(3000)
       
                cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
                'Reason Code', ReasonCode)
                cy.wait(2000)

                cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, "Name", Name)
            
            }

             /*****************************************************
     * Method: VerifyMemberStatus
     * Description: This function click on table entry
     * @param {string} Name
     * @param {string} NRIC
     * @param {string} ReasonCode
    *****************************************************/

     VerifyMemberStatus(Name, NRIC, ReasonCode)
     {
         cy.visit('/membership/memberList')
         cy.wait(5000)
         cy.EnterText(elems_MemberListing.TXT_NAME, Name)
         cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
         cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
         cy.wait(3000)

         cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
         'Reason Code', ReasonCode)
         cy.wait(2000)

         // cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, "Name", Name)
     
     }
    
       
    /*****************************************************
        * Method: SelectOperation
        * Description: Cancel Resignation Request form
        * @param {string} Operation
    *****************************************************/
     SelectOperation(Operation)
     {
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,Operation)
        cy.wait(1000)
        cy.Click(elems_Alerts.BTN_YES)
        cy.wait(3000)
     }



}

export default new MembershipExpulsion;

