import elems_InHouseSaleMerchandiseTransactionListing from '../../Elements/In-House_Sale-&-Merchandise/MerchandiseInhousePurchaseTransactionList'
import elems_Picker from '../../Elements/Common/Picker'
class InHouseSaleAndMerchandisePurchaseTransaction {

    /*****************************************************
           * Method: ClickPurchaseNumberLink
           * Description: This function click on Table Link
           ***************************************************/
    ClickMerchandisePurchaseNumberLink() {

        cy.Click('(//h2[text()="Merchandise Purchase Transaction Listing"]/ancestor::div//table//a)[1]')
        cy.wait(4000)

    }
    /*****************************************************
           * Method: ClickPurchaseNumberLink
           * Description: This function click on Table Link
           ***************************************************/
    ClickInHousePurchaseNumberLink() {

        cy.Click('(//h2[text()="In-House Sale Purchase Transaction Listing"]/ancestor::div//table//a)[1]')
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

        // cy.SelectPickerDifferentItems(elems_InHouseSaleMerchandiseTransactionListing.PCK_MEMBERID,
        //     elems_InHouseSaleMerchandiseTransactionListing.TXT_MEMBERID, MemberID)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.PCK_MEMBERID)
        cy.wait(5000)
        cy.EnterText(elems_InHouseSaleMerchandiseTransactionListing.TXT_MEMBERID, MemberID)
        cy.wait(1000)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.BTN_SEARCHFILTERS)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Member ID", MemberID)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.BTN_SEARCHFILTERS)
        cy.wait(5000)

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