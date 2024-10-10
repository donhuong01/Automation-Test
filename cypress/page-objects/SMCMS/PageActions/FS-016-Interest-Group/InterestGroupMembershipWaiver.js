
import elems_IGMembershipRenewalAdviceDetail from '../../Elements/Interest Group/Batch Interest Group Membership Waiver Request'


class IGMembershipWaiver {

    /*****************************************************
    * Method: WaiverInfo
    * Description: Fillout Waiver Period and Waiver Reason
    *****************************************************/
    WaiverInfo(WaiverPeriod, WaiverReason) {

        cy.EnterText(elems_IGMembershipRenewalAdviceDetail.TXT_WAIVERPERIOD, WaiverPeriod)
        cy.EnterText(elems_IGMembershipRenewalAdviceDetail.TXT_WAIVERREASON, WaiverReason)
    }
    /*****************************************************
    * Method: Request
    * Description: Click on Request button
    *****************************************************/
    Request() {

        cy.Click(elems_IGMembershipRenewalAdviceDetail.BTN_REQUEST)
        cy.wait(5000)
    }
}

export default new IGMembershipWaiver