import elems_Alerts from '../../../Elements/Common/Alerts.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'


class MembershipDeceasedConfirmation {

    /*****************************************************
     * Method: verifyConfirmationPopup
     * Description: Verify Membership Deceased Confirmation Popup Window
     *
     * 
     * @param {string} title Popup Window Title
     * @param {string} content Popup Window Content
     *****************************************************/
     verifyConfirmationPopup({title, content}){

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
            throw new Error("MembershipDeceasedConfirmation.verifyConfirmationPopup Error!!.\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: yes
     * Description: Decease Member
     *****************************************************/
     Yes(){
        cy.Click(elems_Alerts.BTN_YES)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: No
     * Description: Do not Decease Member
     *****************************************************/
     No(){
        cy.Click(elems_Alerts.BTN_NO)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: close
     * Description: Close Membership Deceased Confirmation Popup
     *****************************************************/
     close(){
        cy.Click(elems_Alerts.BTN_CLOSE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }
}
export default MembershipDeceasedConfirmation