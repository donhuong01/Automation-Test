import elems_E1GymMembershipRenewal from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Renewal";
import elems_E1GymMembershipListing from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Listing";

class E1GymMembershipRenewal {

    /*****************************************************
     * Method: AddToCart
     * Description: This function Click on Add to Cart button
    ****************************************************/
    AddToCart() {

        cy.Click(elems_E1GymMembershipRenewal.BTN_ADDTOCART)

    }
    /*****************************************************
     * Method: Cancel
     * Description: This function Click on Cancel button
    ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipRenewal.BTN_CANCEL)

    }
    /*****************************************************
     * Method: ViewTransactionHistory
     * Description: This function Click on ViewTransactionHistory button
    ****************************************************/
    ViewTransactionHistory() {

        cy.Click(elems_E1GymMembershipListing.BTN_VIEWTRANSACTIONHISTORY)

    }
    /*****************************************************
     * Method: FilloutMembershipRenewalInfo
     * Description: This function Fillout Membership Renewal Information 
    ****************************************************/
    FilloutMembershipRenewalInfo(E1GymMembership, RenewalTerm) {
        cy.Click(elems_E1GymMembershipRenewal.DRP_E1GYMMEMBERSHIP)
        cy.wait(500)
        cy.Click(`(//*[contains(text(),'${E1GymMembership}')])[1]`)
        cy.SelectDropDownItem(elems_E1GymMembershipRenewal.DRP_RENEWALTERM, RenewalTerm)
        cy.wait(1000)
    }
    /*****************************************************
     * Method: SelectTableLink
     * Description: This function Select table item
    ****************************************************/
    SelectTableLink(PrincipalName) {

        cy.SelectTableItem(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', PrincipalName)

    }
    /*****************************************************
     * Method: VarifyReasonCode
     * Description: This function varify reason code for renewal
    ****************************************************/
    VarifyReasonCode(ReasonCode) {

        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_TRANSACTIONHISTORY, 'Reason Code', ReasonCode)

    }


}

export default new E1GymMembershipRenewal