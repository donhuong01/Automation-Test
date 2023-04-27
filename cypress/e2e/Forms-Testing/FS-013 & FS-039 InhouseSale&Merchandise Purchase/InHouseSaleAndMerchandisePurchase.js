import InHouseSaleAndMerchandiseItemPurchase from '../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/In-HouseSaleAndMerchandiseItemPurchase'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import InHouseSaleAndMerchandisePurchaseTransaction from '../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction'

const common = new Common()

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const { MemberIdMerchandise, MemberIdInHouse, ItemNameMerchandise, ItemNameInHouse, QuantitySetMerchandise, QuantitySetInhouse } = data.InHouseSaleAndMerchandisePurchase

describe('FS-039 & FS-013 In-House Sale and Merchandise Purchase', function () {

    it('Creating a Merchandise Purchase and View Merchandise Purchase', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail').wait(4000)

        InHouseSaleAndMerchandiseItemPurchase.SelectItemType('Merchandise')

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.Clear()

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.SelectTransactionType('Purchase')

        InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsMerchandise(QuantitySetMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.AddToCart()

        common.fillOutandApplyPayment('CASH')

        cy.wait(5000)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(3000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {
            const PurchaseNumber = txt.text()

            InHouseSaleAndMerchandisePurchaseTransaction.ClickPurchaseNumberLink(PurchaseNumber)

            InHouseSaleAndMerchandisePurchaseTransaction.VerifyGeneralInfoLabels(PurchaseNumber, MemberIdMerchandise, ItemNameMerchandise)

            InHouseSaleAndMerchandisePurchaseTransaction.Cancel()
        })
        cy.LogoutOfSmcms()

    })

    it('Creating an In-House Purchase and View In-House Sale Purchases', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail').wait(4000)

        InHouseSaleAndMerchandiseItemPurchase.SelectItemType('In-House')

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameInHouse)

        InHouseSaleAndMerchandiseItemPurchase.Clear()

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameInHouse)

        InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsMerchandise(QuantitySetInhouse)

        InHouseSaleAndMerchandiseItemPurchase.AddToCart()

        common.fillOutandApplyPayment('CASH')

        cy.wait(5000)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(3000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('In-House')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {
            const PurchaseNumber = txt.text()

            InHouseSaleAndMerchandisePurchaseTransaction.ClickPurchaseNumberLink(PurchaseNumber)

            InHouseSaleAndMerchandisePurchaseTransaction.VerifyGeneralInfoLabels(PurchaseNumber, MemberIdInHouse, ItemNameInHouse)

            InHouseSaleAndMerchandisePurchaseTransaction.Cancel()
        })

        cy.LogoutOfSmcms()

    })
    it('Creating and Cancelling a Merchandise Purchase ', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail').wait(4000)

        InHouseSaleAndMerchandiseItemPurchase.SelectItemType('Merchandise')

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.Clear()

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsMerchandise(QuantitySetMerchandise)

        InHouseSaleAndMerchandiseItemPurchase.Cancel()

        cy.LogoutOfSmcms()

    })

    it('Creating and Cancelling an In-House Purchase', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail').wait(4000)

        InHouseSaleAndMerchandiseItemPurchase.SelectItemType('In-House')

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameInHouse)

        InHouseSaleAndMerchandiseItemPurchase.Clear()

        InHouseSaleAndMerchandiseItemPurchase.SelectItemName(ItemNameInHouse)

        InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsMerchandise(QuantitySetInhouse)

        InHouseSaleAndMerchandiseItemPurchase.Cancel()

        cy.LogoutOfSmcms()

    })



})