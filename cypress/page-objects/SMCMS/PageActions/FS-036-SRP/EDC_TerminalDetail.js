import elems_EDCTerminalDetail from '../../Elements/FS-036-SRP/EDCTerminalDetail'

class EDCTerminalDetail {

    /*****************************************************
     * Method: Save 
     * Description: This function Click On Save Button
     *****************************************************/
    Save() {

        cy.Click(elems_EDCTerminalDetail.BTN_SAVE)
        cy.wait(3000)

    }
    /*****************************************************
     * Method: Cancel 
     * Description: This function Click On Cancel Button
     *****************************************************/
    Cancel() {

        cy.Click(elems_EDCTerminalDetail.BTN_CANCEL)

    }
    /*****************************************************
     * Method: VerifyLabel 
     * Description: 
     *****************************************************/
    VerifyLabel(TerminalID, ThirdPartyVendoreName, MerchantID) {

        cy.ValidateElementText(elems_EDCTerminalDetail.LBL_TERMINALID, TerminalID)
        cy.ValidateElementText(elems_EDCTerminalDetail.LBL_THIRDPARTYVENDORNAME, ThirdPartyVendoreName)
        cy.ValidateElementText(elems_EDCTerminalDetail.LBL_MERCHANTID, MerchantID)

    }
    /*****************************************************
     * Method: FilloutFields
     * Description: This function Click On Terminal ID Link
     *****************************************************/
    FilloutFields(Name, Placement, SourceChannel, ThirdPartyVendoreID,
        ItemGSTGroup, FabsGroup, ClubClassification, SMCClassification) {

        cy.EnterText(elems_EDCTerminalDetail.TXT_NAME, Name)
        cy.EnterText(elems_EDCTerminalDetail.TXT_PLACEMENT, Placement)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.SOURCECHANNEL.PCK_SOURCECHANNEL, 2000,
            elems_EDCTerminalDetail.SOURCECHANNEL.TXT_NAME, SourceChannel,
            elems_EDCTerminalDetail.SOURCECHANNEL.BTN_SEARCHFILTERS)
            cy.wait(5000)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.THIRDPARTYVENDORID.PCK_THIRDPARTYVENDORID, 2000,
            elems_EDCTerminalDetail.THIRDPARTYVENDORID.TXT_VENDORID, ThirdPartyVendoreID,
            elems_EDCTerminalDetail.SOURCECHANNEL.BTN_SEARCHFILTERS)
            cy.wait(5000)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.ITEMGSTGROUP.PCK_ITEMGSTGROUP, 2000,
            elems_EDCTerminalDetail.ITEMGSTGROUP.TXT_TAXITEMGROUPCODE, ItemGSTGroup,
            elems_EDCTerminalDetail.ITEMGSTGROUP.BTN_SEARCHFILTERS)
        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.FABSGROUP.PCK_FABSGROUP, 2000,
            elems_EDCTerminalDetail.FABSGROUP.TXT_CODESETNAME, FabsGroup,
            elems_EDCTerminalDetail.FABSGROUP.BTN_SEARCHFILTERS)
            cy.wait(5000)

        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.CLUBCLASSIFICATION.PCK_CLUBCLASSIFICATION, 2000,
            elems_EDCTerminalDetail.CLUBCLASSIFICATION.TXT_CODESETNAME, ClubClassification,
            elems_EDCTerminalDetail.CLUBCLASSIFICATION.BTN_SEARCHFILTERS)
            cy.wait(5000)

        cy.SelectPickerDifferentItemsWait(elems_EDCTerminalDetail.SMCCLASSIFICATION.PCK_SMCCLASSIFICATION, 2000,
            elems_EDCTerminalDetail.SMCCLASSIFICATION.TXT_CODESETNAME, SMCClassification,
            elems_EDCTerminalDetail.SMCCLASSIFICATION.BTN_SEARCHFILTERS)
            cy.wait(5000)

    }
}
export default new EDCTerminalDetail