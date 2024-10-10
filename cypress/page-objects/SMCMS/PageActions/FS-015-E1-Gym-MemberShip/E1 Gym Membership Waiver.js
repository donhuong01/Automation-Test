import elems_E1GymMembershipWaiver from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Waiver";

class E1GymMembershipWaiver {

    /*****************************************************
     * Method: Request
     * Description:
    ****************************************************/
    Request() {

        cy.Click(elems_E1GymMembershipWaiver.BTN_REQUEST)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: Cancel
     * Description:
    ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipWaiver.BTN_CANCEL)

    }
    /*****************************************************
     * Method: WaiverInformation
     * Description:
    ****************************************************/
    WaiverInformation(WaiverPeriod, WaiverReason) {

        cy.EnterText(elems_E1GymMembershipWaiver.TXT_WAIVERPERIODS, WaiverPeriod)
        cy.EnterText(elems_E1GymMembershipWaiver.TXT_WAIVEREASON, WaiverReason)

    }



}

export default new E1GymMembershipWaiver