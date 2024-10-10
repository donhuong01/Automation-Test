import elems_SAFDXODEDUCTION from "../../Elements/FS-017 Data Integration Management/SAF DXO Deduction"

class SAF_DXO_Deduction {

    /*****************************************************
    * Method: Cancel 
    * Description: This function Click On Cancel Button
    *****************************************************/
    Cancel() {

        cy.Click(elems_SAFDXODEDUCTION.ListingForm.BTN_CANCEL)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_SAFDXODEDUCTION.DetailForm.BTN_SAVE)

    }
    /*****************************************************
    * Method: CreateNewOutFile 
    * Description: This function Click On Create New Out File Button
    *****************************************************/
    CreateNewOutFile() {

        cy.Click(elems_SAFDXODEDUCTION.ListingForm.BTN_CREATENEWOUTFILE)

    }
    /*****************************************************
    * Method: CreateNewInFile 
    * Description: This function Click On Create New In File Button
    *****************************************************/
    CreateNewInFile() {

        cy.Click(elems_SAFDXODEDUCTION.ListingForm.BTN_CREATENEWOUTFILE)
        cy.wait(2000)

    }
    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_SAFDXODEDUCTION.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_SAFDXODEDUCTION.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_SAFDXODEDUCTION.ListingForm.BTN_SEARCHFILTER)

    }
    /*****************************************************
    * Method: SelectTableItem 
    * Description: 
    *****************************************************/
    SelectItem(BatchName) {

        cy.SelectTableItem(elems_SAFDXODEDUCTION.ListingForm.TBL_SAFDXODEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: VerifyNewItem 
    * Description: 
    *****************************************************/
    VerifyNewItem(BatchName) {

        cy.VerifyTableEntry(elems_SAFDXODEDUCTION.ListingForm.TBL_SAFDXODEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_SAFDXODEDUCTION.ListingForm.TBL_SAFDXODEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: SAFDXODeductionInformation 
    * Description: 
    *****************************************************/
    SAFDXODeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, SAFDXOType) {

        cy.xpath(elems_SAFDXODEDUCTION.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD).clear()
        cy.EnterText(elems_SAFDXODEDUCTION.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD, MembershipExpiryPerd)
        cy.EnterText(elems_SAFDXODEDUCTION.DetailForm.TXT_BATCHNAME, BatchName)
        cy.xpath(elems_SAFDXODEDUCTION.DetailForm.TXT_DORMANTMEMBERPERIOD).clear()
        cy.EnterText(elems_SAFDXODEDUCTION.DetailForm.TXT_DORMANTMEMBERPERIOD, DormantMemberPrd)
        cy.EnterDate(elems_SAFDXODEDUCTION.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
        cy.SelectDropDownItem(elems_SAFDXODEDUCTION.DetailForm.DRP_SAFDXOTYPE, SAFDXOType)

    }
    /*****************************************************
    * Method: SAFDXOInFile 
    * Description: 
    *****************************************************/
    SAFDXOInFile(BatchName, DocumentDate, SAFDXOType) {

        cy.EnterText(elems_SAFDXODEDUCTION.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterDate(elems_SAFDXODEDUCTION.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
        cy.SelectDropDownItem(elems_SAFDXODEDUCTION.DetailForm.DRP_SAFDXOTYPE, SAFDXOType)

    }

}
export default new SAF_DXO_Deduction