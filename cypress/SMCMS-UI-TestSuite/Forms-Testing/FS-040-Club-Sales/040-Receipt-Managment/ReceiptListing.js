import data from '../../../../../fixtures/Data_Module/FS-040-Club-Sales/040-data'
import ReceiptListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-040-Clubs Sales/FS-040-Receipt Manegement/ReceiptListingForm'

import login from '../../../../../fixtures/login'

const ReceiptListing = new ReceiptListingForm()


const {PageTitle, MemberId, Type, ReceiptNo, PaymasterTransaction, ReceiptDateFrom} = data.ReceiptListing


describe('Receipt Managment',function(){

  
    it('Search by Member ID , Type and Receipt No', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReceiptListing.FilterByMemberId(MemberId)
        ReceiptListing.FilterByType(Type)
        ReceiptListing.FilterByReceiptNo(ReceiptNo)
        ReceiptListing.ClickFilter()
        ReceiptListing.VerifyTableItem("Member ID", MemberId)
        ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
        ReceiptListing.VerifyPageTitle(data.ReceiptDetail.PageTitle)
    })
    
    it('Search by Member ID and Paymaster Transaction', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReceiptListing.FilterByMemberId(MemberId)
        ReceiptListing.FilterByPaymasterTransaction(PaymasterTransaction)
        cy.wait(2000)
        ReceiptListing.ClickFilter()
        ReceiptListing.VerifyTableItem("Member ID", MemberId)
        ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
        ReceiptListing.VerifyPageTitle(data.ReceiptDetail.PageTitle)
    })
    
    it('Search by Member ID and Receipt Date From', function(){

        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReceiptListing.FilterByMemberId(MemberId)
        ReceiptListing.ReceiptDateFrom(ReceiptDateFrom)
        ReceiptListing.ClickFilter()
        ReceiptListing.VerifyTableItem("Member ID", MemberId)
        ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
        ReceiptListing.VerifyPageTitle(data.ReceiptDetail.PageTitle)
    })


})
