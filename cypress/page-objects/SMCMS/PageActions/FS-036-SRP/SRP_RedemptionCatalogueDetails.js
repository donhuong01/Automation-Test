import elems_SRPREDEMPTIONCATALOGUEDETAIL from '../../Elements/FS-036-SRP/SRPRedemptionCatalogueDetails'

class SRPRedemptionCatalogueDetail {

    /*****************************************************
     * Method: VerifyLabels 
     * Description: This function Verify item code and item Description labels
     * @param {string} ItemCode
     * @param {string} ItemDescription
     *****************************************************/
    VerifyLabels(ItemCode, ItemDescription) {

        cy.EnterText(elems_SRPREDEMPTIONCATALOGUEDETAIL.LBL_ITEMCODE, ItemCode)
        cy.EnterText(elems_SRPREDEMPTIONCATALOGUEDETAIL.LBL_ITEMDESCRIPTION, ItemDescription)

    }
    /*****************************************************
     * Method: Save 
     * Description: This function click on Save button
     *****************************************************/
    Save() {

        cy.Click(elems_SRPREDEMPTIONCATALOGUEDETAIL.BTN_SAVE)

    }
    /*****************************************************
     * Method: VerifyPageTitle 
     * Description: This function Verify Page Title 
     *****************************************************/
    VerifyPageTitle(title) {

        cy.ValidateElementText('//div[@class="page-title"]//h2', title)

    }
    /*****************************************************
     * Method: FilloutGeneralFields 
     * Description: 
     * @param {string} Category
     * @param {string} PublishStartDate
     * @param {string} PublishEndDate
     * @param {string} ExpiryCollection
     * @param {string} Featured
     * @param {string} Image
     * @param {string} Status
     *****************************************************/
    FilloutGeneralFields(Category, PublishStartDate, PublishEndDate, ExpiryCollection, Featured, Image, Status) {

        cy.SelectDropDownItem(elems_SRPREDEMPTIONCATALOGUEDETAIL.DRP_CATEGORY, Category)
        cy.EnterDate(elems_SRPREDEMPTIONCATALOGUEDETAIL.DATE_PUBLISHSTARTDATE, PublishStartDate)
        cy.EnterDate(elems_SRPREDEMPTIONCATALOGUEDETAIL.DATE_PUBLISHENDDATE, PublishEndDate)
        cy.EnterText(elems_SRPREDEMPTIONCATALOGUEDETAIL.TXT_EXPIRYCOLLECTION, ExpiryCollection)
        cy.TickCheckBox(elems_SRPREDEMPTIONCATALOGUEDETAIL.CHK_FEATURED, Featured)
        cy.wait(1000)
        // cy.UploadFile(elems_SRPREDEMPTIONCATALOGUEDETAIL.BTN_IMAGE, Image)
        cy.SelectDropDownItem(elems_SRPREDEMPTIONCATALOGUEDETAIL.DRP_STATUS, Status)

    }
    /*****************************************************
     * Method: DifferentSourceRedemption 
     * Description: 
     * @param {string} Name
     *****************************************************/
    DifferentSourceRedemption(Name, RedemptionAmount, RedemptionPoint) {

        cy.SelectPickerDifferentItemsWait(elems_SRPREDEMPTIONCATALOGUEDETAIL.BTN_ADDSOURCELOCATION, 2000,
            elems_SRPREDEMPTIONCATALOGUEDETAIL.TXT_SOURCECHANNELNAME, Name,
            elems_SRPREDEMPTIONCATALOGUEDETAIL.BTN_SOURCECHANNELSEARCHFILTERS)
        cy.wait(2000)

        cy.EnterText(elems_SRPREDEMPTIONCATALOGUEDETAIL.TXT_REDEMPTIONAMOUNT, RedemptionAmount)
        cy.EnterText(elems_SRPREDEMPTIONCATALOGUEDETAIL.TXT_REDEMPTIONPOINT, RedemptionPoint)

    }
    /*****************************************************
     * Method: RemoveSourceLocation 
     * Description: 
     *****************************************************/
    RemoveSourceLocation() {

        cy.Click(elems_SRPREDEMPTIONCATALOGUEDETAIL.BTN_REMOVESOURCELOCATION)

    }
    /*****************************************************
     * Method: SelectDeffrentSourceRedemptionTBLItem 
     * Description: 
     * @param {string} SourceLocation
     *****************************************************/
    SelectDeffrentSourceRedemptionTBLItem(SourceLocation) {

        cy.SelectTableItem(elems_SRPREDEMPTIONCATALOGUEDETAIL.TBL_DIFFERENTSOURCEREDEMPTION, 'Source Location', SourceLocation)

    }
}
export default new SRPRedemptionCatalogueDetail