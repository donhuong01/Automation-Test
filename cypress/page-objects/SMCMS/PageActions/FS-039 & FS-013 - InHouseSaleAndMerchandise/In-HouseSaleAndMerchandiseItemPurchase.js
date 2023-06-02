import elems_MerchandiseInHouseSalePurcahse from '../../Elements/In-House_Sale-&-Merchandise/MerchandiseIn-HouseSalePurchase'

class InHouseSaleAndMerchandiseItemPurchase {

    /*****************************************************
       * Method: AddToCart
       * Description: This function click on Add To Cart button
       ***************************************************/
    AddToCart() {

        cy.Click(elems_MerchandiseInHouseSalePurcahse.BTN_ADDTOCARD)
        cy.wait(4000)

    }
    /*****************************************************
       * Method: Cancel
       * Description: This function click on Cancel button
       ***************************************************/
    Cancel() {

        cy.Click(elems_MerchandiseInHouseSalePurcahse.BTN_CANCEL)
        cy.wait(2000)

    }
    /*****************************************************
       * Method: Select Item Type
       * Description: This function Select item type radio button 
       * @param {string} type
       ***************************************************/
    SelectItemType(type) {

        if (type === 'InHouse') {
            cy.Click(elems_MerchandiseInHouseSalePurcahse.RAD_INHOUSESALEITEM)
            cy.wait(2000)
        } else {
            cy.Click(elems_MerchandiseInHouseSalePurcahse.RAD_MERCHANDISEITEM)
            cy.wait(2000)
        }
    }
    /*****************************************************
       * Method: Select Item Name
       * Description: This function Select Sale item Name
       * @param {string} Name
       ***************************************************/
    SelectItemName(Name) {

        cy.SelectPickerItem(elems_MerchandiseInHouseSalePurcahse.PCK_SALEITEMNAME, Name)
    }
    /*****************************************************
       * Method: Clear
       * Description: This function Click on Clear button
       ***************************************************/
    Clear() {

        cy.Click(elems_MerchandiseInHouseSalePurcahse.BTN_CLEAR)
    }

    /*****************************************************
       * Method: Select Transaction Type
       * Description: This function Select item type radio button 
       * @param {string} type
       ***************************************************/
    SelectTransactionType(type) {

        if (type === 'Collection') {
            cy.Click(elems_MerchandiseInHouseSalePurcahse.RAD_COLLECTION)
            cy.wait(1000)
        } else {
            cy.Click(elems_MerchandiseInHouseSalePurcahse.RAD_PURCHASETRANSACTION)
            cy.wait(1000)
        }
    }
    /*****************************************************
       * Method: Enter Quantity of Sets 
       * Description: This function Enter Quantity of Sets 
       * @param {string} Value
       ***************************************************/
    EnterQuantityOfSetsInHouse(Value) {
        cy.xpath(elems_MerchandiseInHouseSalePurcahse.TXT_QUANTITYOFSETSINHOUSE).clear()
        cy.EnterText(elems_MerchandiseInHouseSalePurcahse.TXT_QUANTITYOFSETSINHOUSE, Value)

    }
    /*****************************************************
       * Method: Enter Quantity of Sets 
       * Description: This function Enter Quantity of Sets 
       * @param {string} Value
       ***************************************************/
    EnterQuantityOfSetsMerchandise(Value) {
        cy.xpath(elems_MerchandiseInHouseSalePurcahse.TXT_QUANTITYOFSETSMERCHANDISE).clear()
        cy.EnterText(elems_MerchandiseInHouseSalePurcahse.TXT_QUANTITYOFSETSMERCHANDISE, Value)

    }

}
export default new InHouseSaleAndMerchandiseItemPurchase