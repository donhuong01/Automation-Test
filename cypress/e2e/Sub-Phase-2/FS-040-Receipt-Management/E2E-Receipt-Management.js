import ReceiptListingForm from '../../../page-objects/SMCMS/PageActions/FS-040-Clubs-Sales/FS-040-Receipt Manegement/ReceiptListingForm'
import ReceiptDetailForm from '../../../page-objects/SMCMS/PageActions/FS-040-Clubs-Sales/FS-040-Receipt Manegement/ReceiptDetailsForm'
import data from '../../../fixtures/Data_Module/FS-040-Club-Sales/040-data'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'


const ReceiptListing = new ReceiptListingForm()
const ReceiptDetail = new ReceiptDetailForm()
const common = new Commons()

const {PageTitle, MemberId, Type, ReceiptNo, PaymasterTransaction, ReceiptDateFrom} = data.ReceiptListing


const ReuseCommond = () => { 
    cy.wait(2000)
    ReceiptListing.FilterByMemberId(MemberId)
    ReceiptListing.FilterByType(Type)
    ReceiptListing.FilterByReceiptNo(ReceiptNo)
    ReceiptListing.ClickFilter()
    ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
}


const ReceiptManagement = () => {

describe('[TS03] Receipt Managment',function(){

  
    it('[TC01] Search by Member ID , Type and Receipt No', function(){

        common.Checkin(MemberId)
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
    
    it('[TC02] Search by Member ID and Paymaster Transaction', function(){

        common.Checkin(MemberId)
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
    
    it('[TC03] Search by Member ID and Receipt Date From', function(){

        common.Checkin(MemberId)
        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReceiptListing.FilterByMemberId(MemberId)
        ReceiptListing.ReceiptDateFrom(ReceiptDateFrom)
        ReceiptListing.ClickFilter()
        ReceiptListing.VerifyTableItem("Member ID", MemberId)
        ReceiptListing.ClickTableItem("Receipt No.", ReceiptNo)
        ReceiptListing.VerifyPageTitle(data.ReceiptDetail.PageTitle)
    })


    it('[TC04] Filter item in Receipt form and verify the item information', function(){

        common.Checkin(MemberId)
        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.VerifyLabels(data.ReceiptListing)
    })


    it('[TC05] Click on item in Receipt listing form and verify its information, and Close button', function(){

        common.Checkin(MemberId)
        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem()
        ReceiptDetail.ClickClose()
    })


    it('[TC06] Click on item in Receipt listing form, verify information in detail form and Click on Adjust button', function(){

        common.Checkin(MemberId)
        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem()
        ReceiptDetail.ClickAdjust()
    })


    it('[TC07] Click on item in Receipt listing form, verify information in detail form and Click on Cancellation button', function(){

        common.Checkin(MemberId)
        cy.visit('/payment/receiptListing')
        cy.wait(2000)
        ReuseCommond()
        ReceiptDetail.SelectTableItem()
        ReceiptDetail.ClickCancellation()
    })


})

}

export default ReceiptManagement