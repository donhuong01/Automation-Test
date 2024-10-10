import elems_SMCMSShoppingCartAndPayment from '../../Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'
import elems_Landing from '../../Elements/Common/Customer_LandingPage'
import data from '../../../../fixtures/data'


class ShoppingCartPayments {
    /*****************************************************
     * Method: verify Shopping cart Items for Principal
     * Description: Verify Shopping cart items table
     * Author mfaisal
     *
     * @param {string} ShoppingCart
     * @param {string} ShoppingCart_tbl_locator
     * @param {string} lblText

     *****************************************************/
        // Table Construction is differant. cannot use the same Commands for Verifying table entry
        // Definign function for verifying table entry in the Shopping cart 
    verifyShoppingCartitems(ShoppingCart_tbl_locator,ShoppingCart,lblText){
        
        //table entries
        cy.VerifyTableEntryShoppingCart(ShoppingCart_tbl_locator,'QTY', ShoppingCart.Quantity,'DESCRIPTION',ShoppingCart.Description)
        cy.VerifyTableEntryShoppingCart(ShoppingCart_tbl_locator,'PRICE/UNIT', ShoppingCart.PRICE,'DESCRIPTION',ShoppingCart.Description)
        cy.VerifyTableEntryShoppingCart(ShoppingCart_tbl_locator,'TOTAL PRICE', ShoppingCart.PRICE,'DESCRIPTION',ShoppingCart.Description)
        //cy.ValidateElementText(lblText,ShoppingCart.Total)

    }

    /*****************************************************
     * Method: Payments
     * Description: Payments table
     *
     
     * @param {string} Payments_tbl_locator
     * @param {string} Payment payment mode 
     * 
     *****************************************************/
    VerifyPayments(Payments_tbl_locator,Payment){
        
        cy.VerifyTableEntryPayment(Payments_tbl_locator,'AMOUNT', Payment.AMOUNT,'PAYMENT MODE', Payment.PAYMENT_MODE)  

    }
    
    /*****************************************************
     * Method: Verify remaining balance
     * Description: Verify remainig balance 
     *
     * @param {string} RemainingBalance Remaining balance
     *****************************************************/
     VerifyBalance(RemainingBalance){
        cy.ValidateElementText(elems_SMCMSShoppingCartAndPayment.Payments.LBL_TOTAL,RemainingBalance)    
        }


    /*****************************************************
     * Method: Fill out Payment Mode Amount and Apply PAyments
     * Description: Fill out Payment Mode
     * @param {string} PaymentMode Payment Mode
     * @param {string} Amount Amount
     *****************************************************/
    fillOutandApplyPayments(PaymentMode,Amount){
       cy.SelectDropDownItem(elems_SMCMSShoppingCartAndPayment.Payments.DRP_PAYMENTMODE, PaymentMode) 
       cy.EnterText(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT,Amount)
       cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT)       
    }

    /*****************************************************
     * Method: Verify Member Information
     * Description: Verify member info
     * 
     *
     * @param {string} MemberID MemberID
     * @param {string} NRIC NRIC
     * @param {string} PaidTill PaidTill
     * @param {string} TotalPoints
     *****************************************************/

    VerifyMemberInfo(MemberId,NRIC,PaidTill,TotalPoints)
    {
        cy.xpath(elems_SMCMSShoppingCartAndPayment.MemberInformation.LBL_MEMBERID).contains(MemberId)
        cy.xpath(elems_SMCMSShoppingCartAndPayment.MemberInformation.LBL_NRIC).contains(NRIC)
        cy.xpath(elems_SMCMSShoppingCartAndPayment.MemberInformation.LBL_PAIDTILL).contains(PaidTill +' 00:00:00')
        cy.xpath(elems_SMCMSShoppingCartAndPayment.MemberInformation.LBL_TOTALPOINTS).contains(TotalPoints)
        cy.log("Member info completed")
        cy.wait(1000)
    }

    /*****************************************************
     * Method: View Details
     * Description: View Details
     * 
     *****************************************************/
    ViewDetails(){
        cy.Click(elems_SMCMSShoppingCartAndPayment.MemberInformation.BTN_VIEWDETAILS)
    }    

    
    /*****************************************************
     * Method: Logout user
     * Description: Logout user
     * 
     * @param {String} Expectedpg  Expectedpage
     *****************************************************/
     LogoutUser(ExpectedPg){
        cy.Click('//button[text()="Logout"]',ExpectedPg)
    }    

     
    /*****************************************************
     * Method: Verify reciept date 
     * Description: Verify reciept date
     * 
     * @param {String} date  Reciept date
     *****************************************************/

    VerifyReceiptDate(date){
        cy.ValidateElementText('//p[@class="text-end" and contains(.,"Receipt Date")]','Receipt Date: '+date)
    }

     
    /*****************************************************
     * Method: Pay Now method 
     * Description: Pay now
     * 
     * @param {String} Expectedpg  Expectedpage
     *****************************************************/

    Paynow(ExpectedPg){
        cy.Click('//button[text()="Pay Now"]',ExpectedPg)
    }
    
    /*****************************************************
     * Method: Reset Cart Method
     * Description: Reset Cart and verify table entries
     * 
     *****************************************************/

     ResetCart(){
        cy.Click('//button[text()="Reset Cart"]')
    }
}

export default ShoppingCartPayments