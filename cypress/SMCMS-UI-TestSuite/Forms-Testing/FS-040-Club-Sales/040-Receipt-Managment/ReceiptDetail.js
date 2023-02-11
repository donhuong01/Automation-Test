import data from '../../../../../fixtures/Data_Module/FS-040-Club-Sales/040-data'
import ReceiptDetailForm from '../../../../../page-objects/SMCMS/PageActions/FS-040-Clubs Sales/FS-040-Receipt Manegement/ReceiptDetailsForm'
import ReceiptListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-040-Clubs Sales/FS-040-Receipt Manegement/ReceiptListingForm'



const ReceiptDetail = new ReceiptDetailForm()
const ReceiptListing = new ReceiptListingForm()


const { MemberId, Type, ReceiptNo, PaymasterTransaction, ReceiptDateFrom} = data.ReceiptListing


const ReuseCommond = ()=>{
    cy.wait(2000)
    ReceiptListing.FilterByMemberId(MemberId)
    ReceiptListing.FilterByType(Type)
    ReceiptListing.FilterByReceiptNo(ReceiptNo)
    ReceiptListing.ClickFilter()
    ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
}


describe('Receipt Managment',function(){
  
    it('Click on link and verify labels', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.VerifyLabels(data.ReceiptListing)
    })


    it('Click on link and Click Close', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem(data.ReceiptDetail.Product)
        ReceiptDetail.ClickClose()
    })


    it('Click on link and Click on Adjust', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem(data.ReceiptDetail.Product)
        // ReceiptDetail.ClickAdjust()
    })


    it('Click on link and Click on Cancellation', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem(data.ReceiptDetail.Product)
        // ReceiptDetail.ClickCancellation()
    })
    
  

})
