import elems_AXSCOLLECTION from "../../Elements/FS-017 Data Integration Management/AXS Collection"

class AXS_Collection {

    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_AXSCOLLECTION.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_AXSCOLLECTION.DetailForm.BTN_SAVE)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_AXSCOLLECTION.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_AXSCOLLECTION.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_AXSCOLLECTION.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_AXSCOLLECTION.ListingForm.TBL_AXSDEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: AXSDeductionInformation 
    * Description: 
    *****************************************************/
    AXSDeductionInformation(BatchName, DocumentDate) {

        cy.EnterText(elems_AXSCOLLECTION.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterDate(elems_AXSCOLLECTION.DetailForm.DATE_DOCUMENTDATE, DocumentDate)

    }

}
export default new AXS_Collection