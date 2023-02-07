import elems_ReceiptListing from "../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/ReceiptListing"
import elems_PageHeader from '../../../Elements/Common/PageHeader'


class ReceiptListingForm {
    
    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function will Verify Page Title
     * Author mfaisal
     * @param {string} Title
     *****************************************************/
    VerifyPageTitle(Title){
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,Title)
        }
   
    /*****************************************************
     * Method: ClickFilter
     * Description: This function will click on filter button
     * Author mfaisal
     *****************************************************/
    ClickFilter(){
            cy.Click(elems_ReceiptListing.BTN_SEARCHFILTERS)     
            cy.wait(4000)
        }

    /*****************************************************
     * Method: Search By MermberId
     * Description: This function will search item by member id
     * Author mfaisal
     * @param {string} MemberId
     *****************************************************/
    FilterByMemberId(MemberId){
        cy.SelectPickerFilter(elems_ReceiptListing.PCK_MEMBERID, 
            elems_ReceiptListing.TXT_MEMBERID, MemberId,
            elems_ReceiptListing.BTN_SEARCHFILTERSSELECTMEMID)
        }

    /*****************************************************
     * Method: VerifyTableItem
     * Description: This function will Verify item in table
     * Author mfaisal
     * @param {string} Header
     * @param {string} Value
     *****************************************************/
    VerifyTableItem(Header,Value){
        cy.VerifyTableEntry(elems_ReceiptListing.TBL_RECEIPTLISTING,Header,Value)
    }

    /*****************************************************
     * Method: ClickTableItem
     * Description: This function will Click on item in table
     * Author mfaisal
     * @param {string} Header
     * @param {string} Value
     *****************************************************/
    ClickTableItem(Header,Value){
      cy.wait(2000)
      cy.ClickTableLinkItem(elems_ReceiptListing.TBL_RECEIPTLISTING,Header,Value)
    }

    /*****************************************************
     * Method: Search By Type
     * Description: This function will search item by Type
     * Author mfaisal
     * @param {string} Type
     *****************************************************/
    FilterByType(Type){
          cy.SelectDropDownItem(elems_ReceiptListing.DRP_TYPE,Type)
        }

    /*****************************************************
     * Method: Search By ReceiptNo
     * Description: This function will search item by Receipt No
     * Author mfaisal
     * @param {string} ReceiptNo
     *****************************************************/
    FilterByReceiptNo(ReceiptNo){ 
        cy.EnterText(elems_ReceiptListing.TXT_RECEIPTNO,ReceiptNo)
        }
    
    /*****************************************************
     * Method: Search By Paymaster Transaction
     * Description: This function will search item by Paymaster Transaction
     * Author mfaisal
     * @param {string} PaymasterTransaction
     *****************************************************/
    FilterByPaymasterTransaction(PaymasterTransaction){   
        cy.SelectDropDownItem(elems_ReceiptListing.DRP_PAYMASTERTRANSACTION,PaymasterTransaction)
        }

    /*****************************************************
     * Method: Search By ReceiptDate(From)
     * Description: This function will search item by Receipt Date (From)
     * Author mfaisal
     * @param {string} ReceiptDateFrom
     *****************************************************/
    ReceiptDateFrom(ReceiptDateFrom){   
        cy.EnterDate(elems_ReceiptListing.DATE_RECEIPTDATE_FROM,ReceiptDateFrom)
        }

    /*****************************************************
     * Method: Search By ReceiptDate(To)
     * Description: This function will search item by ReceiptDate(To)
     * Author mfaisal
     * @param {string} ReceiptDateTo
     *****************************************************/
    ReceiptDateTo(ReceiptDateTo){   
        cy.SelectDropDownItem(elems_ReceiptListing.DATE_RECEIPTDATE_TO,ReceiptDateTo)
        }

    /*****************************************************
     * Method: Search By BatchId
     * Description: This function will search item by BatchId
     * Author mfaisal
     * @param {string} BatchId
     *****************************************************/
    BatchId(BatchId){   
        cy.EnterText(elems_ReceiptListing.TXT_BATCHID,BatchId)
        }
    
}

export default ReceiptListingForm