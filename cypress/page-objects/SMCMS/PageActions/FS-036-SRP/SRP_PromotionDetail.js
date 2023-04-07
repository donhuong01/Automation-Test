import elems_SRPPromationDetails from '../../Elements/FS-036-SRP/SRPPromationDetails'

class SRP_PromotionDetail {

    /*****************************************************
     * Method: Save 
     * Description: This function click on save button
     *****************************************************/
    Save() {

        cy.Click(elems_SRPPromationDetails.BTN_SAVE)

    }
    /*****************************************************
     * Method: Cancel 
     * Description: This function click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_SRPPromationDetails.BTN_CANCEL)

    }
    /*****************************************************
     * Method: FilloutGeneralFields 
     * Description: This function Fill out General Fields
     * @param {string} Name
     * @param {string} Description
     * @param {string} PromoType
     * @param {number} Quantity
     * @param {string} ProductCategory
     * @param {string} ModuleType
     * @param {number} ExtraPointType
     * @param {Date} ValidFrom
     * @param {Date} ValidTo
     *****************************************************/
    FilloutGeneralFields(Name, Description, PromoType, Quantity, ProductCategory, ModuleType, ExtraPointType, ExtraPercentage, ValidFromDate, ValidToDate) {

        cy.EnterText(elems_SRPPromationDetails.TXT_NAME, Name)
        cy.EnterText(elems_SRPPromationDetails.TXT_DESCRIPTION, Description)
        cy.SelectDropDownItem(elems_SRPPromationDetails.DRP_PROMOTYPE, PromoType)
        cy.EnterText(elems_SRPPromationDetails.TXT_QUANTITY, Quantity)
        cy.SelectDropDownItem(elems_SRPPromationDetails.DRP_PRODUCTCATEGORY, ProductCategory)
        cy.SelectDropDownItem(elems_SRPPromationDetails.DRP_MODULETYPE, ModuleType)
        cy.SelectDropDownItem(elems_SRPPromationDetails.DRP_EXTRAPOINTSTYPE, ExtraPointType)
        cy.EnterText(elems_SRPPromationDetails.TXT_EXTRAPERCENTAGE, ExtraPercentage)
        cy.EnterDateTime(elems_SRPPromationDetails.DATE_VALIDFROM, ValidFromDate, '03:30:30')
        cy.EnterDateTime(elems_SRPPromationDetails.DATE_VALIDTO, ValidToDate, '03:30:30')
    }
    /*****************************************************
     * Method: SourceChannel 
     * Description: This function Fill out Source Channel
     * @param {String} Name
     *****************************************************/
    SourceChannel(Name) {

        cy.SelectPickerDifferentItemsWait(elems_SRPPromationDetails.SOURCECHANNEL.BTN_ADD, 5000,
            elems_SRPPromationDetails.SOURCECHANNEL.TXT_NAME, Name,
            elems_SRPPromationDetails.SOURCECHANNEL.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: EDCTerminal 
     * Description: This function Fill out EDC Terminal
     * @param {string} TerminalId
     *****************************************************/
    EDCTerminal(TerminalId) {

        cy.SelectPickerDifferentItemsWait(elems_SRPPromationDetails.EDCTERMINAL.BTN_ADD, 3000,
            elems_SRPPromationDetails.EDCTERMINAL.TXT_TERMINALID, TerminalId,
            elems_SRPPromationDetails.EDCTERMINAL.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: Members 
     * Description: This function Fill out Member Field
     * @param {string} MemberID
     *****************************************************/
    Members(MemberID) {

        cy.SelectPickerDifferentItemsWait(elems_SRPPromationDetails.Members.BTN_ADD, 3000,
            elems_SRPPromationDetails.Members.TXT_MEMBERID, MemberID,
            elems_SRPPromationDetails.Members.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: MemberType 
     * Description: This function Fill out Member Type Field
     * @param {string} MemberTypeName
     *****************************************************/
    MemberType(MemberTypeName) {

        cy.SelectPickerDifferentItemsWait(elems_SRPPromationDetails.MEMBERTYPES.BTN_ADD, 8000,
            elems_SRPPromationDetails.MEMBERTYPES.TXT_MEMBERTYPENAME, MemberTypeName,
            elems_SRPPromationDetails.MEMBERTYPES.BTN_SEARCHFILTERS)

    }
}
export default new SRP_PromotionDetail