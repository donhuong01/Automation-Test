import elems_ThirdPartyVendoreDetail from '../../Elements/FS-036-SRP/thirdPartyVendorDetail'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_Picker from '../../Elements/Common/Picker'

class ThirdPartyVendoreDetail {

    /*****************************************************
        * Method: Save
        * Description: This function Click on Save button
        *****************************************************/
    Save() {

        cy.Click(elems_ThirdPartyVendoreDetail.BTN_SAVE)
        cy.wait(4000)
        cy.VerifyElementText(elems_Picker.MSG_NOTIFICATION, "Record has been saved successfully.")

    }
    /*****************************************************
        * Method: Cancel
        * Description: This function Click on Cancel button
        *****************************************************/
    Cancel() {

        cy.Click(elems_ThirdPartyVendoreDetail.BTN_CANCEL)

    }
    /*****************************************************
        * Method: FilloutFields
        * Description: This function Fillout Fields 
        *****************************************************/
    FilloutThirdPartyVendorDetail(VendoreID, Name, MerchantID, Status, ContactNumberAddress) {

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Third Party Vendor Detail")

        cy.SelectPickerDifferentItemsWait(elems_ThirdPartyVendoreDetail.VENDORID.PCK_VENDORID, 2000,
            elems_ThirdPartyVendoreDetail.VENDORID.TXT_VENDORID, VendoreID,
            elems_ThirdPartyVendoreDetail.BTN_SEARCHFILTERS)
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_NAME, Name)
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_MERCHANTID, MerchantID)
        cy.SelectDropDownItem(elems_ThirdPartyVendoreDetail.DRP_STATUS, Status)
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_ContactNumberAddress, ContactNumberAddress)


    }
    /*****************************************************
        * Method: FilloutFields
        * Description: This function Fillout Fields 
        *****************************************************/
    UpdateThirdPartyVendorDetail(VendoreID, Name, MerchantID, Status, ContactNumberAddress) {

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Third Party Vendor Detail")

        cy.SelectPickerDifferentItemsWait(elems_ThirdPartyVendoreDetail.VENDORID.PCK_VENDORID, 2000,
            elems_ThirdPartyVendoreDetail.VENDORID.TXT_VENDORID, VendoreID,
            elems_ThirdPartyVendoreDetail.BTN_SEARCHFILTERS)
        cy.xpath(elems_ThirdPartyVendoreDetail.TXT_NAME).clear()
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_NAME, Name)
        cy.xpath(elems_ThirdPartyVendoreDetail.TXT_MERCHANTID).clear()
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_MERCHANTID, MerchantID)
        cy.SelectDropDownItem(elems_ThirdPartyVendoreDetail.DRP_STATUS, Status)
        cy.xpath(elems_ThirdPartyVendoreDetail.TXT_ContactNumberAddress).clear()
        cy.EnterText(elems_ThirdPartyVendoreDetail.TXT_ContactNumberAddress, ContactNumberAddress)


    }


}
export default new ThirdPartyVendoreDetail