import Payment_Reports from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-040-Payments-Reports/Payments-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Payment-Reports-data"

const Reports_Payment = new Payment_Reports ()

const Reports_Payments = () => {

describe("Payments Access Checking",function(){

    it('Checking Access on Receipt Listing', function(){
        Reports_Payment.verifyReceiptListing
        (
            data.RECEIPT.EXPECTEDPG
        )
    })

    it('Checking Access on IBG Deduction Listing', function(){
        Reports_Payment.verifyIBGDeduction
        (
            data.IBG_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    it('Checking Access on PAYM Deduction Listing', function(){
        Reports_Payment.verifyPAYMDeduction
        (
            data.PAYM_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    it('Checking Access on CC Deduction Listing', function(){
        Reports_Payment.verifyCCDeduction
        (
            data.CC_DEDUCT.EXPECTEDPG,
            // data.IBG_DEDUCT.START_DATE,
            // data.IBG_DEDUCT.END_DATE,
        )
    })

    // it('Checking Access on Failed Payment Deduction', function(){
    //     Reports_Payment.verifyFailedPaymasterDeduction
    //     (
    //         data.PAY_MASTER_DEDUCTION
    //     )
    // })

    it('Checking Access on SFS Transaction Listing', function(){
        Reports_Payment.verifySFSTransaction
        (
            data.SFS_TRANSACTION.EXPECTEDPG,
            // data.SFS_TRANSACTION.SOURCE_CHANNEL,
            // data.SFS_TRANSACTION.TRANSAC_DATE_FROM,
            // data.SFS_TRANSACTION.TRANSAC_DATE_TO
        )
    })

    it('Checking Access on Internet Receipt Listing', function(){
        Reports_Payment.verifyInternetReceipt
        (
            data.INTERNET_RECEIPT.EXPECTEDPG,
            
        )
    })

})


}

export default Reports_Payments