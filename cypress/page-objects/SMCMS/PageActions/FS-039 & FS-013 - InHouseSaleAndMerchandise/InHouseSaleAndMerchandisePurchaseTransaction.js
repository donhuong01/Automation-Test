import elems_InHouseSaleMerchandiseTransactionListing from '../../Elements/In-House_Sale-&-Merchandise/MerchandiseInhousePurchaseTransactionList'

class InHouseSaleAndMerchandisePurchaseTransaction {

    /*****************************************************
           * Method: ClickPurchaseNumberLink
           * Description: This function click on Table Link
           ***************************************************/
    ClickPurchaseNumberLink(PurchaseNumber) {

        cy.ClickTableLinkItem(elems_InHouseSaleMerchandiseTransactionListing.TBL_PURCHASETRANSACTIONLIST, 'In-House Sale Purchase Number', PurchaseNumber)
        cy.wait(4000)

    }
    /*****************************************************
           * Method: ClickRecieptNumber
           * Description: This function click on Table Link
           ***************************************************/
    ClickRecieptNumber(ReceiptNumber) {

        cy.ClickTableLinkItem(elems_InHouseSaleMerchandiseTransactionListing.TBL_PURCHASETRANSACTIONLIST, 'Receipt Number', ReceiptNumber)
        cy.wait(4000)

    }
    /*****************************************************
           * Method: FilterWithMemberId
           * Description: This function Select MemberId and Filter Form
           ***************************************************/
    FilterWithMemberId(MemberID) {

        cy.SelectPickerDifferentItems(elems_InHouseSaleMerchandiseTransactionListing.PCK_MEMBERID,
            elems_InHouseSaleMerchandiseTransactionListing.TXT_MEMBERID, MemberID)
        cy.wait(1000)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.BTN_SEARCHFILTERS)

    }
    /*****************************************************
           * Method: VerifyGeneralInfoLabels
           * Description: This function Validate label on InHouse sale purchase
           ***************************************************/
    VerifyGeneralInfoLabels(PurchaseNumber, MemberID, ItemName) {

        cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_PURCHASENUMBER, PurchaseNumber)
        cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_CUSTOMERMEMBERID, MemberID)
        cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_SALEITEMNAME, ItemName)

    }
    /*****************************************************
           * Method: Cancel
           * Description: This function Click on Cancel button
           ***************************************************/
    Cancel() {

        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.BTN_CANCEL)

    }

    /*****************************************************
           * Method: Select Item Type
           * Description: This function Select item type radio button 
           * @param {string} type
           ***************************************************/
    SelectItemType(type) {

        if (type === 'InHouse') {
            cy.Click(elems_InHouseSaleMerchandiseTransactionListing.RAD_INHOUSESALEITEM)
            cy.wait(2000)
        } else {
            cy.Click(elems_InHouseSaleMerchandiseTransactionListing.RAD_MERCHANDISEITEM)
            cy.wait(2000)
        }
    }

}
export default new InHouseSaleAndMerchandisePurchaseTransaction