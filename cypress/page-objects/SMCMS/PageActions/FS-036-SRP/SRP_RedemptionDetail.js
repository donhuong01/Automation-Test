import elems_SRPREDEMPTIONDETAIL from '../../Elements/FS-036-SRP/SRPRedemptionDetail'
import elems_SMCMSShoppingCartAndPayment from '../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'

class SRP_RedemptionDetail {

    /*****************************************************
     * Method: AddToCart
     * Description: This function Click On Add To Cart button
     *****************************************************/
    AddToCart() {

        cy.Click(elems_SRPREDEMPTIONDETAIL.BTN_ADDTOCART)
      

    }
    /*****************************************************
     * Method: Cancel
     * Description: This function Click On Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_SRPREDEMPTIONDETAIL.BTN_CANCEL)

    }
    /*****************************************************
     * Method: Enter Quantity
     * Description: This function Enter Quantity
     *****************************************************/
    EnterQuantity(Quantity) {

        cy.EnterText(elems_SRPREDEMPTIONDETAIL.TXT_QUANTITY, Quantity)

    }
    /*****************************************************
     * Method: Enter Redemption Date
     * Description: This function Enter Redemption Date
     *****************************************************/
    EnterRedemptionDate(RedemptionDate) {

        cy.EnterDate(elems_SRPREDEMPTIONDETAIL.DATE_REDEMPTIONDATE, RedemptionDate)

    }
    /*****************************************************
     * Method: VerifyLabels
     * Description: This function Verify SRP Redemption Detail Labels
     *****************************************************/
    VerifyLabels(MemberID, MemberName, SAFRAMemberPoint, SourceLocation, RedemptionItemTitle,
        RedemptionItemDescription, RedemptionPoint, RedemptionAmount, RedemptionSourceLocation) {

        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_MEMBERID, MemberID)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_MEMBERNAME, MemberName)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_SAFRAMEMBERPOINT, SAFRAMemberPoint)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_SOURCELOCATION, SourceLocation)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONITEMTITLE, RedemptionItemTitle)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONITEMDESCRIPTION, RedemptionItemDescription)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONPOINT, RedemptionPoint)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONAMOUNT, RedemptionAmount)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONSOURCELOCATION, RedemptionSourceLocation)

    }

    /*****************************************************
     * Method: VerifySRPRedemptionDetails
     * Description: This function Verify SRP Redemption Detail Labels
     *****************************************************/
    VerifySRPRedemptionDetails(MemberID, RedemptionItemTitle,RedemptionItemDescription, RedemptionSourceLocation) {

        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_MEMBERID, MemberID)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONITEMTITLE, RedemptionItemTitle)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONITEMDESCRIPTION, RedemptionItemDescription)
        cy.ValidateElementText(elems_SRPREDEMPTIONDETAIL.LBL_REDEMPTIONSOURCELOCATION, RedemptionSourceLocation)

    }
}
export default new SRP_RedemptionDetail