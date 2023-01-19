import elems_IGMembershipReversalRequest from '../../Elements/Interest Group/IGMembershipReversalRequest'

class InterestGroupMembershipReversalRequest {

    /*****************************************************
    * Method: Submit
    * Description: This function Click On Submit Button
    *****************************************************/

    Submit() {

        cy.Click(elems_IGMembershipReversalRequest.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: Cancel
    * Description: This function Click On Cancel Button
    *****************************************************/

    Cancel() {

        cy.Click(elems_IGMembershipReversalRequest.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: VerifyIGMemInfoLabels
    * Description: This function Labels on IG Membership Information
    *****************************************************/

    VerifyIGMemInfoLabels(IGMembershipID, InterestGroup, IGTermStart, IGTermEnd) {

        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_IGMEMBERSHIPID, IGMembershipID)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_INTERESTGROUP, InterestGroup)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_IGTERMSTART, IGTermStart)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_IGTERMEND, IGTermEnd)


    }
    /*****************************************************
    * Method: ReversalTransactionInfo
    * Description: This function Verify Labels for Reversal Transaction Information
    *****************************************************/

    ReversalTransactionInfo(Status, ReasonCode, RequestDate, ProcessedDate) {

        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_STATUS, Status)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_REASONCODE, ReasonCode)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_REQUESTDATE, RequestDate)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_PROCESSEDDATE, ProcessedDate)

    }
    /*****************************************************
    * Method: PaymentDetail
    * Description: This function Fillout Payment Detail Fields
    *****************************************************/

    PaymentDetail(CalculatePayment, GiveRefundCredit, ChargeType, Amount, Reason) {

        cy.TickCheckBox(elems_IGMembershipReversalRequest.CHK_CALCULATEPAYMENT, CalculatePayment)
        cy.TickCheckBox(elems_IGMembershipReversalRequest.CHK_REFUNDCREDIT, GiveRefundCredit)
        cy.Click(elems_IGMembershipReversalRequest.BTN_ADDWIAVER)
        cy.SelectDropDownItem(elems_IGMembershipReversalRequest.DRP_CHARGETYPE, ChargeType)
        cy.IncreaseFieldValue(elems_IGMembershipReversalRequest.TXT_AMOUNT, Amount)
        cy.EnterText(elems_IGMembershipReversalRequest.TXT_REASON, Reason)
        cy.Click(elems_IGMembershipReversalRequest.BTN_CONFIRM)


    }
    /*****************************************************
    * Method: VerifyPaymentDetailSummaryLabel
    * Description: This function verify Payment Detail Labels
    *****************************************************/

    VerifyPaymentDetailSummaryLabel(Total, TotalRegCharge, TotalRenewalCharge, TotalDeferCharge, TotalpaidforIGMem,
        BalancedAmount, RefundAmount, RefundBalanced, IsPaymentCollected) {

        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_TOTAL, Total)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_TOTALREGCHRG, TotalRegCharge)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_TOTALRENCHRG, TotalRenewalCharge)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_TOTALDEFRCHRG, TotalDeferCharge)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_TOTALPAIDIGMEM, TotalpaidforIGMem)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_BALANCEDAMOUNT, BalancedAmount)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_REFUNDAMOUNT, RefundAmount)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_REFUNDBALANCE, RefundBalanced)
        cy.ValidateElementText(elems_IGMembershipReversalRequest.LBL_ISPAYMENTCOLLECTED, IsPaymentCollected)

    }




}

export default new InterestGroupMembershipReversalRequest