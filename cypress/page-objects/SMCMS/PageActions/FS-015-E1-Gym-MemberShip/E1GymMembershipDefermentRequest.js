import elems_E1GymMembershipDefermentRequest from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Deferment Request"

class E1GymMembershipDefermentRequest {

    /*****************************************************
         * Method: Submit
         * Description: This function Click on Submit button
        ****************************************************/
    Submit() {

        cy.Click(elems_E1GymMembershipDefermentRequest.BTN_SUBMIT)
        cy.wait(4000)

    }
    /*****************************************************
         * Method: Cancel
         * Description: This function Click on Cancel button
        ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipDefermentRequest.BTN_CANCEL)

    }
    /*****************************************************
         * Method: AddToCartandSubmit
         * Description: This function Click on Add To Cart and Submit button
        ****************************************************/
    AddToCartandSubmit() {

        cy.Click(elems_E1GymMembershipDefermentRequest.BTN_ADDTOCARTANDSUBMIT)

    }
    /*****************************************************
         * Method: ViewDefermentHistory
         * Description: This function Click on ViewDefermentHistory button
        ****************************************************/
    ViewDefermentHistory() {

        cy.Click(elems_E1GymMembershipDefermentRequest.BTN_VIEWDEFERMENTHISTORY)

    }
    /*****************************************************
         * Method: DefermentInformation
         * Description: This function Fillout Deferment Information
        ****************************************************/
    DefermentInformation(DefermentStartMonth, DefermentEndMonth, DefermentReason) {

        cy.EnterDate(elems_E1GymMembershipDefermentRequest.DATE_DEFERSTARTMONTH, DefermentStartMonth)
        cy.EnterDate(elems_E1GymMembershipDefermentRequest.DATE_DEFERENDMONT, DefermentEndMonth)
        cy.EnterText(elems_E1GymMembershipDefermentRequest.TXT_DEFERMENTREASON, DefermentReason)

    }
    /*****************************************************
         * Method: PaymentDetails
         * Description: This function Fillout Payment Details
        ****************************************************/
    PaymentDetails(CalculatePayment) {

        cy.TickCheckBox(elems_E1GymMembershipDefermentRequest.CHK_CALCULATEPAYMENT, CalculatePayment)
        cy.wait(1000)

    }
    /*****************************************************
         * Method: VerifyPaymentDetails
         * Description: This function Fillout Payment Details
        ****************************************************/
    VerifyPaymentDetails(Total, PaymentAmount, IsPaymentCollected) {

        cy.ValidateElementText(elems_E1GymMembershipDefermentRequest.LBL_TOTAL, Total)
        cy.ValidateElementText(elems_E1GymMembershipDefermentRequest.LBL_PYAMENTAMOUNT, PaymentAmount)
        cy.ValidateElementText(elems_E1GymMembershipDefermentRequest.LBL_ISPAYMENTCOLLECTED, IsPaymentCollected)

    }



}
export default new E1GymMembershipDefermentRequest