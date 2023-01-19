import elems_IGMembershipTerminationRequest from '../../Elements/Interest Group/IGMembershipTerminationRequest'
import elems_IGMemberDetail from '../../Elements/Interest Group/InterestGroupMembershipDetail'
import elems_IGMemberListing from '../../Elements/Interest Group/InterestGroupMembershipListing'

class InterestGroupMembershipTerminationRequest {

    /*****************************************************
    * Method: Submit
    * Description: This function Click On Submit Button
    *****************************************************/

    Submit() {

        cy.Click(elems_IGMembershipTerminationRequest.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: Cancel
    * Description: This function Click On Cancel Button
    *****************************************************/

    Cancel() {

        cy.Click(elems_IGMembershipTerminationRequest.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: VerifyIGMemInfoLabels
    * Description: This function Labels on IG Membership Information
    *****************************************************/

    VerifyIGMemInfoLabels(IGMembershipID, InterestGroup, IGTermStart, IGTermEnd) {

        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_IGMEMBERSHIPID, IGMembershipID)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_INTERESTGROUP, InterestGroup)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_IGTERMSTART, IGTermStart)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_IGTERMEND, IGTermEnd)


    }
    /*****************************************************
    * Method: TerminationInformation
    * Description: This function Verify Labels for Reversal Transaction Information
    *****************************************************/

    TerminationInformation(TerminatedBy, TerminationDate, TerminationReason, Status) {

        cy.SelectDropDownItem(elems_IGMembershipTerminationRequest.DRP_TERMINATEDBY, TerminatedBy)
        cy.EnterDate(elems_IGMembershipTerminationRequest.DATE_TERMINATIONDATE, TerminationDate)
        cy.EnterText(elems_IGMembershipTerminationRequest.TXT_TERMINATIONREASON, TerminationReason)
        // cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_STATUS, Status)

    }

    /*****************************************************
    * Method: CalculatePayment
    * Description: This function Tick on Calculate payment checkbox
    *****************************************************/

    CalculatePayment(CalculatePayment) {

        cy.TickCheckBox(elems_IGMembershipTerminationRequest.CHK_CALCULATEPAYMENT, CalculatePayment)

    }
    /*****************************************************
    * Method: RefundCredit
    * Description: This function Fillout Payment Detail Fields
    *****************************************************/

    RefundCredit(CreditType, AmountType, CreditReason) {

        cy.TickCheckBox(elems_IGMembershipTerminationRequest.CHK_REFUNDCREDIT, "CHECK")
        cy.SelectDropDownItem(elems_IGMembershipTerminationRequest.DRP_CREDITTYPE, CreditType)
        cy.SelectDropDownItem(elems_IGMembershipTerminationRequest.DRP_AMOUNTTYPE, AmountType)
        cy.EnterText(elems_IGMembershipTerminationRequest.TXTAREA_REFUNDCREDIT, CreditReason)


    }
    /*****************************************************
    * Method: AddWiaver
    * Description: This function Fillout Payment Detail Fields
    *****************************************************/

    AddWiaver(ChargeType, Amount, Reason) {

        cy.Click(elems_IGMembershipTerminationRequest.BTN_ADDWIAVER)
        cy.SelectDropDownItem(elems_IGMembershipTerminationRequest.DRP_CHARGETYPE, ChargeType)
        cy.IncreaseFieldValue(elems_IGMembershipTerminationRequest.TXT_AMOUNT, Amount)
        cy.EnterText(elems_IGMembershipTerminationRequest.TXT_REASON, Reason)
        cy.Click(elems_IGMembershipTerminationRequest.BTN_CONFIRM)

    }

    /*****************************************************
    * Method: MembershipStatusReason
    * Description: This function Verify Membership Status Reason 
    *****************************************************/

    MembershipStatusReason(Reason) {
        cy.Click(elems_IGMemberListing.TBL_LINKIGMEMBERLIST)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_MEMBERSTATUSREASON, Reason)

    }

    /*****************************************************
    * Method: VerifyPaymentDetailLabels
    * Description: This function verify Payment Detail Labels
    *****************************************************/

    VerifyPaymentDetailLabels(Total, TotalRegCharge, TotalRenewalCharge, TotalDeferCharge, TotalpaidforIGMem,
        BalancedAmount, RefundAmount, RefundBalanced, IsPaymentCollected) {

        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_TOTAL, Total)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_TOTALREGCHRG, TotalRegCharge)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_TOTALRENCHRG, TotalRenewalCharge)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_TOTALDEFRCHRG, TotalDeferCharge)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_TOTALPAIDIGMEM, TotalpaidforIGMem)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_BALANCEDAMOUNT, BalancedAmount)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_REFUNDAMOUNT, RefundAmount)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_REFUNDBALANCE, RefundBalanced)
        cy.ValidateElementText(elems_IGMembershipTerminationRequest.LBL_ISPAYMENTCOLLECTED, IsPaymentCollected)

    }


}

export default new InterestGroupMembershipTerminationRequest