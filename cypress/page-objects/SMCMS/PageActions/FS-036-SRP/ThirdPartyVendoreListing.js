import elems_ThirdPartyVendoreListing from '../../Elements/FS-036-SRP/thirdPartyVendorListing'
import elems_Alerts from '../../Elements/Common/Alerts'

class ThirdPartyVendoreListing {

    /*****************************************************
        * Method: CreateNew
        * Description: This function Click on Create New button
        *****************************************************/
    CreateNew() {

        cy.Click(elems_ThirdPartyVendoreListing.BTN_CREATENEW)
        cy.wait(5000)

    }
    /*****************************************************
        * Method: Delete
        * Description: This function Click on Delete button
        *****************************************************/
    Delete() {

        cy.Click(elems_ThirdPartyVendoreListing.BTN_DELETE)

    }
    /*****************************************************
        * Method: Delete
        * Description: This function Click on Delete button
        *****************************************************/
    DeletePopupYes() {

        cy.Click(elems_Alerts.BTN_YES)

    }
    /*****************************************************
        * Method: Filters
        * Description: This function Filters listing table by Vendor ID,Name and Status
        *****************************************************/
    Filters(VendoreID, Name, Status) {

        cy.SelectPickerDifferentItemsWait(elems_ThirdPartyVendoreListing.VENDORID.PCK_VENDORID, 2000,
            elems_ThirdPartyVendoreListing.VENDORID.TXT_VENDORID, VendoreID,
            elems_ThirdPartyVendoreListing.BTN_SEARCHFILTERS)

        cy.EnterText(elems_ThirdPartyVendoreListing.TXT_NAME, Name)
        cy.SelectDropDownItem(elems_ThirdPartyVendoreListing.DRP_STATUS, Status)
        cy.Click(elems_ThirdPartyVendoreListing.BTN_SEARCHFILTERS)
        cy.wait(8000)

    }
    /*****************************************************
        * Method: SelectItem
        * Description: This function Select Table Item 
        *****************************************************/
    SelectItem(VendoreID) {

        // cy.SelectTableItem(elems_ThirdPartyVendoreListing.TBL_THIRDOARTYVENDORLSITING, 'Vendore ID', VendoreID)
        cy.Click(`//a[text()="${VendoreID}"]//parent::td//preceding-sibling::td`)

    }
    /*****************************************************
        * Method: ClickVendoreIDLink
        * Description: This function CLick on Vendore ID Link
        *****************************************************/
    ClickVendoreIDLink(VendoreID) {

        cy.ClickTableLinkItem(elems_ThirdPartyVendoreListing.TBL_THIRDOARTYVENDORLSITING, 'Vendor ID', VendoreID)

    }

}
export default new ThirdPartyVendoreListing