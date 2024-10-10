import elems_InHouseSaleMerchandiseItemListing from '../../Elements/In-House_Sale-&-Merchandise/Merchandise_Item_Listing'

class InHouseAndMerchandise_Item_Listing {

    /*****************************************************
       * Method: Create New
       * Description: This function click on Create new button
       ***************************************************/
    CreateNew() {

        cy.Click(elems_InHouseSaleMerchandiseItemListing.BTN_CREATENEW)
        cy.wait(4000)

    }
    /*****************************************************
       * Method: Select Item Type
       * Description: This function Select item type radio button 
       * @param {string} type
       ***************************************************/
    SelectItemType(type) {

        if (type === 'InHouse') {
            cy.Click(elems_InHouseSaleMerchandiseItemListing.RAD_INHOUSESALEITEM)
            cy.wait(2000)
        } else {
            cy.Click(elems_InHouseSaleMerchandiseItemListing.RAD_MERCHANDISEITEM)
            cy.wait(2000)
        }


    }
    /*****************************************************
       * Method: Sale Item Name
       * Description: This function Apply Filter With Sales Item Name
       * @param {string} Name
       ***************************************************/
    FilterBySaleItemName(Name) {

        cy.EnterText(elems_InHouseSaleMerchandiseItemListing.TXT_ITEMNAM, Name)
        cy.Click(elems_InHouseSaleMerchandiseItemListing.BTN_SEARCHFILTER)
        cy.wait(5000)


    }
    /*****************************************************
         * Method: Sale Item ID
         * Description: This function Enter Sale Item id
         * @param {string} id
         ***************************************************/
    SaleItemid(id) {

        cy.EnterText(elems_InHouseSaleMerchandiseItemListing.TXT_ITEMID, id)

    }
    /*****************************************************
         * Method: VerifyWorkflowStatus
         * Description: This function Verify Workflow Status
         * @param {string} Value
         ***************************************************/
    VerifyWorkflowStatus(Value) {

        cy.VerifyTableEntry(elems_InHouseSaleMerchandiseItemListing.TBL_INHOUSEMERCHANDISE, 'Workflow Status', Value)
        cy.wait(4000)

    }
    /*****************************************************
         * Method: Search Filters
         * Description: This function Click on Search Filters button
         ***************************************************/
    SearchFilters() {

        cy.Click(elems_InHouseSaleMerchandiseItemListing.BTN_SEARCHFILTER)

    }
    /*****************************************************
         * Method: Click Table Link
         * Description: This function click on Table link item
         ***************************************************/
    ClickTableLink() {
        cy.Click('//div[@class="container-fluid"]//table//tbody//td[1]//a')


    }




}
export default new InHouseAndMerchandise_Item_Listing