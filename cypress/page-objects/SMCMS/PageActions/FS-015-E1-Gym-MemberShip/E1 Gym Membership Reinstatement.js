import elems_E1GymMembershipReinstatement from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Reinstatement";

class E1GymMembershipReinstatement {

    /*****************************************************
     * Method: 
     * Description:
    ****************************************************/
    AddToCart() {

        cy.Click(elems_E1GymMembershipReinstatement.BTN_ADDTOCART)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: Submit
     * Description:This function will click on Submit button
    ****************************************************/
    Submit() {

        cy.Click(elems_E1GymMembershipReinstatement.BTN_SUBMIT)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: Cancel
     * Description:
    ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipReinstatement.BTN_CANCEL)

    }
    /*****************************************************
     * Method: ReinstatementInfo
     * Description:
    ****************************************************/
    ReinstatementInfo(TermStartDate) {

        cy.EnterDate(elems_E1GymMembershipReinstatement.DATE_TERMSTARTDATE, TermStartDate)
        cy.Click('//span[@title="Increase value"]')

    }



}

export default new E1GymMembershipReinstatement