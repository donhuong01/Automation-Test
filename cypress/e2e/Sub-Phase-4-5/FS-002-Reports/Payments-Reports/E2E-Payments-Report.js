import Payment_Reports from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-040-Payments-Reports/Payments-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Payment-Reports-data"

const Reports_Payment = new Payment_Reports ()

const Reports_Payments = () => {

describe("Payments Verification",function(){

    it('Checking functionallity and Verification on Receipt Listing', function(){
        Reports_Payment.verifyReceiptListing
        (
            data.RECEIPT.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on IBG Deduction Listing', function(){
        Reports_Payment.verifyIBGDeduction
        (
            data.IBG_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    it('Checking functionallity and Verification on PAYM Deduction Listing', function(){
        Reports_Payment.verifyPAYMDeduction
        (
            data.PAYM_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    it('Checking functionallity and Verification on CC Deduction Listing', function(){
        Reports_Payment.verifyCCDeduction
        (
            data.CC_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    it('Checking functionallity and Verification on Failed Payment Deduction', function(){
        Reports_Payment.verifyFailedPaymasterDeduction
        (
            data.PAY_MASTER_DEDUCTION
        )
    })

    it('Checking functionallity and Verification on SFS Transaction Listing', function(){
        Reports_Payment.verifySFSTransaction
        (
            data.SFS_TRANSACTION.EXPECTEDPG,
            // data.SFS_TRANSACTION.SOURCE_CHANNEL,
            // data.SFS_TRANSACTION.TRANSAC_DATE_FROM,
            // data.SFS_TRANSACTION.TRANSAC_DATE_TO
        )
    })

})


}

export default Reports_Payments