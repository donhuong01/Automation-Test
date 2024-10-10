import elems_SINGPOSTUPDATE from "../../Elements/FS-017 Data Integration Management/SingPost Update"

class SingPostUpdate {


    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_SINGPOSTUPDATE.DetailForm.BTN_SAVE)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_SINGPOSTUPDATE.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_SINGPOSTUPDATE.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_SINGPOSTUPDATE.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_SINGPOSTUPDATE.ListingForm.TBL_SINGPPOSTUPDATELISTING, 'Batch ID', BatchID)

    }


}
export default new SingPostUpdate