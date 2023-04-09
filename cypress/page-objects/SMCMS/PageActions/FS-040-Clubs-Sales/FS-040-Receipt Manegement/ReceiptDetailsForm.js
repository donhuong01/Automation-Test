import elems_ReceiptDetail from '../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/ReceiptDetail'
// import elems_PageHeader from '../../../Elements/Common/PageHeader'

class ReceiptDetailForm {
    
    /*****************************************************
     * Method: ClickCancellation
     * Description: This function will Click on cancellation button
     * Author mfaisal
     *****************************************************/
     ClickCancellation(){
            cy.Click(elems_ReceiptDetail.BTN_CANCELLATION)
        }
   
    /*****************************************************
     * Method: ClickAdjust
     * Description: This function will Click on Adjust button
     * Author mfaisal
     *****************************************************/
     ClickAdjust(){
            cy.Click(elems_ReceiptDetail.BTN_ADJUST)
        }
    /*****************************************************
     * Method: ClickClose
     * Description: This function will Click on Close button
     * Author mfaisal
     *****************************************************/
     ClickClose(){ 
            cy.Click(elems_ReceiptDetail.BTN_CLOSE)
        }

    /*****************************************************
     * Method: VerifyTableItem
     * Description: This function will Verify item in table
     * Author mfaisal
     * @param {string} Header
     * @param {string} Value
     *****************************************************/
     VerifyTableItem(Header,Value){
        cy.VerifyTableEntry(elems_ReceiptDetail.TBL_RECEIPTITEMS,Header,Value)
    }

    /*****************************************************
     * Method: SelectTableItem
     * Description: This function will Select item in Receipt Item table
     * Author mfaisal
     * @param {string} 
     *****************************************************/
     SelectTableItem(){
      cy.Click(elems_ReceiptDetail.TBL_RECEIPTITEMCHECKBOX)
      cy.wait(5000)
    }


    /*****************************************************
     * Method: VerifyLabel
     * Description: This function will Verify labels on the detail page
     * Author mfaisal
     * @param {string} data
     *****************************************************/
     VerifyLabels(data){
       cy.ValidateElementText(elems_ReceiptDetail.LBL_RECEIPTNO,data.ReceiptNo)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_MEMBERNAME,data.MemberName)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_EARNSAFRAPOINTS,data.EarnSAFRAPoints)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_RECEIPTDATE,data.ReceiptDateFrom)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_MEMBERID,data.MemberId)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_STATUS,data.Status)
       cy.ValidateElementText(elems_ReceiptDetail.LBL_ISPAYMASTER,data.PaymasterTransaction)
    }

    
    
}

export default ReceiptDetailForm