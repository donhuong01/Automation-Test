import elems_IGMembershipListing from "../../Elements/Interest Group/InterestGroupMembershipListing"
import elems_IGMembershipDeferment from "../../Elements/Interest Group/InterestGroupMembershipDefRequest"
import elems_PendingTaskListing from "../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing"
import elems_PendingTaskDetail from "../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail"
import elems_IGMembershipTransactionHistory from "../../Elements/Interest Group/IGMembershipTransactionHistory"
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
    }
}

export default new IGMembershipWaiver