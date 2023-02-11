import login from "../../../../fixtures/login"
import data from '../../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import InHouseSaleAndMerchandisePurchaseTransaction from "../../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction"


const common = new Common()


const { MemberIdMerchandise, MemberIdInHouse } = data.InHouseSaleAndMerchandiseItemTransaction

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })


describe('FS-039 & FS-013 In-House Sale and Merchandise Transaction Adjustment', function () {

    it('Create a Merchandise Transaction Adjustment Request', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

    })

    it('Create In-House Transaction Adjustment Request', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

    })

})