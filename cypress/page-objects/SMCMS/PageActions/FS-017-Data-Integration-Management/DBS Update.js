import elems_DBSUPDATE from "../../Elements/FS-017 Data Integration Management/DBS Update"

class DBS_Update {

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status, BatchName) {

        cy.EnterText(elems_DBSUPDATE.ListingForm.TXT_BATCHID, BatchID)
        cy.EnterText(elems_DBSUPDATE.ListingForm.TXT_BATCHNAME, BatchName)
        cy.SelectDropDownItem(elems_DBSUPDATE.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_DBSUPDATE.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_DBSUPDATE.ListingForm.TBL_DBSUPDATELISTING, 'Batch ID', BatchID)

    }


}
export default new DBS_Update