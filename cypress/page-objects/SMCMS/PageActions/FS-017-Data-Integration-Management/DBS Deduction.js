import elems_DBSDeduction from "../../Elements/FS-017 Data Integration Management/DBS Deduction"

class DBX_Deduction {

    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_DBSDeduction.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_DBSDeduction.DetailForm.BTN_SAVE)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_DBSDeduction.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_DBSDeduction.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_DBSDeduction.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_DBSDeduction.ListingForm.TBL_DBSDEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: DBSDeductionInformation 
    * Description: 
    *****************************************************/
    DBSDeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, CardType, BatchType, SFSType) {

        cy.EnterText(elems_DBSDeduction.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD, MembershipExpiryPerd)
        cy.EnterText(elems_DBSDeduction.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterText(elems_DBSDeduction.DetailForm.TXT_DORMANTMEMBERPERIOD, DormantMemberPrd)
        cy.EnterDate(elems_DBSDeduction.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
        cy.SelectDropDownItem(elems_DBSDeduction.DetailForm.DRP_CARDTYPE, CardType)
        cy.SelectDropDownItem(elems_DBSDeduction.DetailForm.DRP_BATCHTYPE, BatchType)
        cy.SelectDropDownItem(elems_DBSDeduction.DetailForm.DRP_SFSTYPE, SFSType)

    }

}
export default new DBX_Deduction