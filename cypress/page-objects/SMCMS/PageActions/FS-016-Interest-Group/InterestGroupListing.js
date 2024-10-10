import elems_InterestGroupListing from '../../Elements/Interest Group/InterestGroupListing'


class InterestGroupListing {

    /*****************************************************
     * Method: Create New
     * Description: Click on create new button
    *****************************************************/
    CreateNew() {
        cy.Click(elems_InterestGroupListing.BTN_CREATENEW)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: Delete
     * Description: Click on Delete button
    *****************************************************/
    Delete() {
        cy.Click(elems_InterestGroupListing.BTN_DELETE)

    }

    /*****************************************************
     * Method: Deactivation
     * Description: Click on Deactivation button
    *****************************************************/
    Deactivate() {
        cy.Click(elems_InterestGroupListing.BTN_DEACTIVATE)

    }
    /*****************************************************
     * Method: Maintenance
     * Description: Click on Mainenance button
    *****************************************************/
    Maintenance() {

        cy.SelectDropDownItem(elems_InterestGroupListing.DR)

    }

    /*****************************************************
     * Method: FilterAndVarifyTableItem
     * Description: Filter Table Item with Name,BussinessType,InterestGroupMain and Status
     * @param {string} Name
     * @param {string} BussinessType
     * @param {string} Status 
    *****************************************************/
    FilterAndVarifyTableItem(Name, BussinessType, Status) {

        cy.EnterText(elems_InterestGroupListing.TXT_NAME, Name)
        cy.SelectDropDownItem(elems_InterestGroupListing.DRP_BUSINESSTYPE, BussinessType)
        cy.Click(elems_InterestGroupListing.PCK_INTERESTGROUPMAIN)
        cy.wait(1000)
        cy.SelectTableItem(elems_InterestGroupListing.TBL_SELECTIGMAIN, 'Name', Name)
        cy.Click(elems_InterestGroupListing.BTN_SELECT)
        cy.SelectDropDownItem(elems_InterestGroupListing.DRP_STATUS, Status)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', Name)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Status', Status)

    }

    /*****************************************************
     * Method: FilterValueByBusinessType
     * Description: Filter Table Item by BussinessType
     * @param {string} Name
     * @param {string} BussinessType
     * @param {string} Status 
    *****************************************************/
    FilterValueByBusinessType(Name, BussinessType, Status) {

        cy.SelectDropDownItem(elems_InterestGroupListing.DRP_BUSINESSTYPE, BussinessType)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Business Type', BussinessType)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', Name)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Status', Status)


    }

    /*****************************************************
     * Method: FilterValueByStatus
     * Description: Filter Table Item by Status
     * @param {string} Name
     * @param {string} BussinessType
     * @param {string} Status 
    *****************************************************/
    FilterValueByStatus(Name, BussinessType, Status) {

        cy.SelectDropDownItem(elems_InterestGroupListing.DRP_STATUS, Status)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', Name)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Status', Status)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Business Type', BussinessType)

    }

    /*****************************************************
     * Method: SelectTableEntry
     * Description:  Select Table Item 
     * @param {string} Name
    *****************************************************/
    SelectTableEntry(Name) {

        cy.SelectTableItem(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', Name)

    }

    /*****************************************************
     * Method: ClickTableItem
     * Description:  Click on Table Item 
     * @param {string} Name
     *****************************************************/
    ClickTableLink(Name) {

        cy.ClickTableLinkItem(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', Name)
        cy.wait(2000)
    }
    /*****************************************************
     * Method: FiterWithStatus
     * Description:  Filter Table with status
     * @param {string} Status
     *****************************************************/
    FiterWithStatus(Status) {

        cy.SelectDropDownItem(elems_InterestGroupListing.DRP_STATUS, Status)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)

    }
    /*****************************************************
     * Method: FilterWithName
     * Description:  Filter Table with Name
     * @param {string} Name
     *****************************************************/
    FilterWithName(Name) {

        cy.EnterText(elems_InterestGroupListing.TXT_NAME, Name)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)

    }
    /*****************************************************
     * Method: TickTableCheckBox
     * Description: 
     *****************************************************/
    TickTableCheckBox() {

        cy.TickCheckBox('(//div[@class="k-widget k-grid"]//table//tbody//input)[1]', 'CHECK')

    }
    /*****************************************************
     * Method: VerifyStatus
     * Description: This function verify Status in IG Tabel
     * @param {string} Status
     *****************************************************/
    VerifyStatus(Status) {

        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Status', Status)

    }


}
export default new InterestGroupListing