
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class MembershipReinstatementConfirmation {

    /*****************************************************
     * Method: verifyConfirmationPopup
     * Description: Verify Membership Reinstatment Confirmation Popup Window
     *
     * 
     * @param {string} title Popup Window Title
     * @param {string} content Popup Window Content
     *****************************************************/
     verifyConfirmationPopup({title,content}){

        // Verify Window Title
        if(title !== undefined){
            cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, title)
        }

        // Verify Window Title
        if(content !== undefined){
            cy.ValidateElementText(elems_Alerts.LBL_POPUPCONTENT, content)
        }

        // Error Handling
        if( title === undefined
            && content === undefined 
        ){
            throw new Error("MembershipReinstatementConfirmation.verifyConfirmationPopup Error!!.\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: yes
     * Description: Reinstate Member
     *****************************************************/
     Yes(){
        cy.Click(elems_Alerts.BTN_YES)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: No
     * Description: Do not Reinstate Member
     *****************************************************/
     No(){
        cy.Click(elems_Alerts.BTN_NO)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: close
     * Description: Close Membership Reinstatement Confirmation Popup
     *****************************************************/
     close(){
        cy.Click(elems_Alerts.BTN_CLOSE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }
}
export default MembershipReinstatementConfirmation