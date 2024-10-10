import elems_E1GymMembershipTermination from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Termination";

class E1GymMembershipTerminantion {

    /*****************************************************
     * Method: Request
     * Description:
    ****************************************************/
    Submit() {

        cy.Click(elems_E1GymMembershipTermination.BTN_SUBMIT)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: Cancel
     * Description:
    ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipTermination.BTN_CANCEL)

    }
    /*****************************************************
     * Method: TerminationInformation
     * Description:
    ****************************************************/
    TerminationInformation(TerminatedBy, TerminationDate, TerminationReason) {

        cy.SelectDropDownItem(elems_E1GymMembershipTermination.DRP_TERMINATEDBY, TerminatedBy)
        cy.EnterDate(elems_E1GymMembershipTermination.DATE_TERMINATIONDATE, TerminationDate)
        cy.EnterText(elems_E1GymMembershipTermination.TXT_TERMINATIONREASON, TerminationReason)

    }



}

export default new E1GymMembershipTerminantion