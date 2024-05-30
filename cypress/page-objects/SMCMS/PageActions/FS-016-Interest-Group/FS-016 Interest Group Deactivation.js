import elems_IGDeactivation from "../../Elements/Interest Group/FS-016 Interest Group Deactivation"
import elems_IGListing from '../../Elements/Interest Group/InterestGroupListing'

class IGDeactivation {
    /*****************************************************
         * Method: Submit
         * Description: This function Click on submit button
        *****************************************************/
    Submit() {

        cy.Click(elems_IGDeactivation.BTN_SUBMIT)
        cy.wait(10000)
    }

    /*****************************************************
         * Method: Cancel
         * Description: This function Click on Cancel button
        *****************************************************/
    Cancel() {

        cy.Click(elems_IGDeactivation.BTN_CANCEL)
    }
    /*****************************************************
         * Method: FilloutDeactivationInfo
         * Description: This function Fillout Deactivation Information 
        *****************************************************/
    FilloutDeactivationInfo(DeactivationDate, DeactivationReason) {
        cy.wait(3000)
        cy.EnterDateCheckin(elems_IGDeactivation.DATE_DEACTIVATIONDATE, DeactivationDate)
        cy.EnterText(elems_IGDeactivation.TXT_REASON, DeactivationReason)
    }
}

export default new IGDeactivation