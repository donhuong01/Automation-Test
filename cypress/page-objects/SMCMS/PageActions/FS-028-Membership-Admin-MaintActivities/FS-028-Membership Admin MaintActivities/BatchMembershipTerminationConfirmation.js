import elems_Alerts from '../../../Elements/Common/Alerts.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'

class BatchMembershipTerminationConfirmation {

    /*****************************************************
     * Method: verifyConfirmationPopup
     * Description: Verifies Batch Membership Termination Confirmation Popup Window
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
            throw new Error("BatchMembershipTerminationConfirmation.verifyConfirmationPopup Error!!.\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: yes
     * Description: Terminate Members
     *****************************************************/
     yes(){
        cy.Click(elems_Alerts.BTN_YES)
        cy.wait(3000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: no
     * Description: Do NOT Terminate Members
     *****************************************************/
     no(){
        cy.Click(elems_Alerts.BTN_NO)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }

    /*****************************************************
     * Method: close
     * Description: Close Batch Termination Confirmation Popup
     *****************************************************/
     close(){
        cy.Click(elems_Alerts.BTN_CLOSE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Listing')
    }
}

export default BatchMembershipTerminationConfirmation