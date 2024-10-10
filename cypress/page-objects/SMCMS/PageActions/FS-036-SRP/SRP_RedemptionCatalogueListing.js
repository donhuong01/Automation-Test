import elems_SRPREDEMPTIONCATALOGUELISTING from '../../Elements/FS-036-SRP/SRPRedemptionCatalogueListing'


class SRPRedemptionCatalogueListing {

    /*****************************************************
     * Method: FilterListingForm 
     * Description: This function Filter form by Item Code,Item Description and Status
     * @param {string} ItemCode
     * @param {string} ItemDescription
     * @param {string} Status
     *****************************************************/
    FilterListingForm(ItemCode, ItemDescription, Status) {

        cy.EnterText(elems_SRPREDEMPTIONCATALOGUELISTING.TXT_ITEMCODE, ItemCode)
        cy.EnterText(elems_SRPREDEMPTIONCATALOGUELISTING.TXT_ITEMDESCRIPTION, ItemDescription)
        cy.SelectDropDownItem(elems_SRPREDEMPTIONCATALOGUELISTING.DRP_STATUS, Status)
        cy.Click(elems_SRPREDEMPTIONCATALOGUELISTING.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: ImportFromProduct 
     * Description: This function click on Import From Product button
     *****************************************************/
    ImportFromProduct() {

        cy.Click(elems_SRPREDEMPTIONCATALOGUELISTING.BTN_IMPORTFROMPRODUCT)

    }
    /*****************************************************
     * Method: ClickOnTableLink 
     * Description: This function click on Table Link Item\
     * @param {string} ItemCode
     *****************************************************/
    ClickOnTableLink(ItemCode) {

        cy.ClickTableLinkItem(elems_SRPREDEMPTIONCATALOGUELISTING.TBL_SRPREDEMPTIONCATALOGUELIATING, 'Item Code', ItemCode)
        cy.wait(5000)
    }

    /*****************************************************
     * Method: ClickOnTableLink 
     * Description: This function click on Table Link Item\
     * @param {string} ItemCode
     *****************************************************/
    FillOutRedemptionCatalogue(ItemCode) {

        cy.ClickTableLinkItem(elems_SRPREDEMPTIONCATALOGUELISTING.TBL_SRPREDEMPTIONCATALOGUELIATING, 'Item Code', ItemCode)
        cy.wait(5000)
    }
}
export default new SRPRedemptionCatalogueListing