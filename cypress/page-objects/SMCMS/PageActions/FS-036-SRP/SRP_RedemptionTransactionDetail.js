import elems_SRPREDEMPTIONTRANSACTIONDETAIL from '../../Elements/FS-036-SRP/SRPRedemptionTransactionDetail'

class SRP_RedemptionTransactionDetail {

    /*****************************************************
        * Method: Collect
        * Description: This function Click on Collect button
        *****************************************************/
    Collect() {

        cy.Click(elems_SRPREDEMPTIONTRANSACTIONDETAIL.BTN_COLLECT)

    }
    /*****************************************************
        * Method: Cancel
        * Description: This function Click on Cancel button
        *****************************************************/
    Cancel() {

        cy.Click(elems_SRPREDEMPTIONTRANSACTIONDETAIL.BTN_CANCEL)

    }
    /*****************************************************
        * Method: VerifyCollectorInfo
        * Description: This function Verify Collector Info labels 
        *****************************************************/
    VerifyCollectorInfo(CollectorID, StaffName) {

        cy.ValidateElementText(elems_SRPREDEMPTIONTRANSACTIONDETAIL.LBL_COLLECTORID, CollectorID)
        cy.ValidateElementText(elems_SRPREDEMPTIONTRANSACTIONDETAIL.LBL_STAFFNAME, StaffName)

    }
    /*****************************************************
        * Method: EnterRemark
        * Description: This function Fillout Remark Field
        *****************************************************/
    EnterRemark(Remark) {

        cy.EnterText(elems_SRPREDEMPTIONTRANSACTIONDETAIL.TXT_REMARK, Remark)

    }

    /*****************************************************
        * Method: FilloutItemList
        * Description: This function Fillout Item List Fields
        *****************************************************/
    FilloutItemList(Quantity, Remark, ReceiptNumber) {
        cy.EnterText(elems_SRPREDEMPTIONTRANSACTIONDETAIL.TXT_QUANTITY, Quantity)
        cy.EnterText(elems_SRPREDEMPTIONTRANSACTIONDETAIL.TXT_ITEMLISTREMARK, Remark)
        cy.SelectTableItem(elems_SRPREDEMPTIONTRANSACTIONDETAIL.TBL_ITEMLIST, 'Receipt Number', ReceiptNumber)

    }

}
export default new SRP_RedemptionTransactionDetail