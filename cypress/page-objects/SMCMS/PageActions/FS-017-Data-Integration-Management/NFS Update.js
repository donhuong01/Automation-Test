import elems_NFSUpdate from "../../Elements/FS-017 Data Integration Management/NSF Update"

class NFS_Update {

    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_NFSUpdate.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_NFSUpdate.DetailForm.BTN_SAVE)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_NFSUpdate.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_NFSUpdate.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_NFSUpdate.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_NFSUpdate.ListingForm.TBL_NFSUPDATELISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: VerifyNewItem 
    * Description: 
    *****************************************************/
    VerifyNewItem(BatchName) {

        cy.VerifyTableItem(elems_NFSUpdate.ListingForm.TBL_NFSUPDATELISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
   * Method: SelectTableItem 
   * Description: 
   *****************************************************/
    SelectItem(BatchName) {

        cy.SelectTableItem(elems_NFSUpdate.ListingForm.TBL_NFSUPDATELISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
   * Method:  ImportNewInFile
   * Description: 
   *****************************************************/
    ImportNewInFile(FileName) {

        cy.UploadFile(elems_NFSUpdate.DetailForm.BTN_IMPORTNEWINFILE, FileName)
        cy.wait(2000)

    }

    /*****************************************************
    * Method: NFSUpdateInformation 
    * Description: 
    *****************************************************/
    NFSUpdateInformation(BatchName, DocumentDate) {

        cy.EnterText(elems_NFSUpdate.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterDate(elems_NFSUpdate.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
    }

}
export default new NFS_Update