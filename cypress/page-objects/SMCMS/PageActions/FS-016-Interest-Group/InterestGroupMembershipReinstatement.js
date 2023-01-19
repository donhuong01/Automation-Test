import elems_IGMembershipReinstatement from '../../Elements/Interest Group/InterestGroupMembershipReinstatement'

class InterestGroupMembershipReinstatement {

    /*****************************************************
    * Method: Submit
    * Description: This function Click On Submit Button
    *****************************************************/

    Submit() {

        cy.Click(elems_IGMembershipReinstatement.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: AddToCart
    * Description: This function Click On AddToCart Button
    *****************************************************/

    AddToCart() {

        cy.Click(elems_IGMembershipReinstatement.BTN_ADDTOCART)

    }
    /*****************************************************
    * Method: Cancel
    * Description: This function Click On Cancel Button
    *****************************************************/

    Cancel() {

        cy.Click(elems_IGMembershipReinstatement.BTN_SUBMIT)

    }
    /*****************************************************
    * Method: VerifyIGMemInfoLabels
    * Description: This function Labels on IG Membership Information
    *****************************************************/

    VerifyIGMemInfoLabels(IGMembershipID, InterestGroup, IGTermStart, IGTermEnd, TerminationReason) {

        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_IGMEMBERSHIPID, IGMembershipID)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_INTERESTGROUP, InterestGroup)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_IGTERMSTART, IGTermStart)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_IGTERMEND, IGTermEnd)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_TERMINATIONREASON, TerminationReason)


    }
    /*****************************************************
    * Method: ReinstatementInfo
    * Description: This function Fillout Reinstatement Information Fields
    *****************************************************/

    ReinstatementInfo(TermStartDate) {

        cy.EnterDate(elems_IGMembershipReinstatement.DATE_TERMDATE, TermStartDate)
        cy.Click('//span[@title="Increase value"]')

    }
    /*****************************************************
    * Method: PaymentDetailSummary
    * Description: This function Fillout Payment Detail and Summary Fields
    *****************************************************/

    PaymentDetailSummary(ChargeType, Amount, Reason) {

        cy.Click(elems_IGMembershipReinstatement.BTN_ADDWIAVER)
        cy.SelectDropDownItem(elems_IGMembershipReinstatement.DRP_CHARGETYPE, ChargeType)
        cy.IncreaseFieldValue(elems_IGMembershipReinstatement.TXT_AMOUNT, Amount)
        cy.EnterText(elems_IGMembershipReinstatement.TXT_REASON, Reason)
        cy.Click(elems_IGMembershipReinstatement.BTN_CONFIRM)

    }
    /*****************************************************
    * Method: VerifyPaymentDetailSummaryLabel
    * Description: This function verify Payment Detail and Summary Labels
    *****************************************************/

    VerifyPaymentDetailSummaryLabel(Total, PaymentAmount, IsPaymentCollected) {

        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_TOTAL, Total)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_PAYMENTAMOUNT, PaymentAmount)
        cy.ValidateElementText(elems_IGMembershipReinstatement.LBL_ISPAYMENTCOLLECTED, IsPaymentCollected)

    }




}

export default new InterestGroupMembershipReinstatement