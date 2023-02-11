import login from "../../../fixtures/login"
import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import InHouseSaleAndMerchandisePurchaseTransaction from "../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction"


const common = new Common()


// const { MemberIdMerchandise, MemberIdInHouse } = data.InHouseSaleAndMerchandiseItemTransaction

const MemberIdMerchandise = ""
const MemberIdInHouse = ""

const InHouseSaleAndMerchandiseTransactionConcellation = () => {

describe('FS-039 & FS-013 In-House Sale and Merchandise Transaction Cancellation', function () {

    it('Create a Merchandise Transaction Cancellation Request', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

    })

    it('Create In-House Transaction Cancellation Request', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

    })

})

}
export default InHouseSaleAndMerchandiseTransactionConcellation