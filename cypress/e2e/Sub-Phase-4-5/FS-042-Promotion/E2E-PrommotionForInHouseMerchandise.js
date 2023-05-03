import PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionListing'
import PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionDetail'
import Promodata from '../../../fixtures/Data_Module/FS-042-Promotion/SetupPromotionforInHouseMerchandise'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import PromotionUtilizationListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/PromotionUtilization/PromotionUtilizationListing'
import InHouseSaleAndMerchandiseItemPurchase from '../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/In-HouseSaleAndMerchandiseItemPurchase'

//Page definition
const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const PromotionforInHouseMerchandise = (MemberId) => {

Promodata.forEach(each => {

    const { PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer, MaxCap, ValidityStartDate,
        ValidityExpiryDate, Remark, PromotionType, StartDate, EndDate, ItemCate, Quantity,
        BenefitType, FixedDollarRate, AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID,
        ApplicableSourceChannel, Approval, BundlePromotion } = each

    describe('SP4-FS042_TS01 Promotion Setup and Management', function () {

        it.skip(`[TC01] Creating New ${BasicType} Promotion for ${ItemCate} On ${PromotionType}`, function () {

            cy.visit('/club/promotionListing').wait(3000)

            //Click on Create New button
            PromotionListing.CreateNew()

            PromotionDetail.FillOuPromotionDetailSection(PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer,
                MaxCap, ValidityStartDate, ValidityExpiryDate, Remark)

            PromotionDetail.SaveAsDraft()

            PromotionListing.FilterByPromotionName(PromotionTitle)

            PromotionListing.ClickSearchFilter()

            PromotionListing.ClickTableLink()

            //Promotion Type Tab
            PromotionDetail.ClickOnTab('Promotion Type') //pass the text of the related button 

            PromotionDetail.PromotionTypeTab(PromotionType, StartDate, EndDate)

            PromotionDetail.SaveAsDraft()

            PromotionListing.FilterByPromotionName(PromotionTitle)

            PromotionListing.ClickSearchFilter()

            PromotionListing.ClickTableLink()

            //Benifit Item Tab
            PromotionDetail.ClickOnTab('Benefit Item')

            PromotionDetail.BenefitItemTab(ItemCate, Quantity, BenefitType, FixedDollarRate, BundlePromotion)

            PromotionDetail.SaveAsDraft()

            PromotionListing.FilterByPromotionName(PromotionTitle)

            PromotionListing.ClickSearchFilter()

            PromotionListing.ClickTableLink()

            //Promotion Criteria
            PromotionDetail.ClickOnTab('Promotion Criteria')

            PromotionDetail.PromotionCriteria(AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID, ApplicableSourceChannel)

            PromotionDetail.Submit()

            common.ApprovalWorkFlow('PMO', 'Promotion Approval Workflow', Approval, 'test')

            cy.visit('/club/promotionListing').wait(8000)

            PromotionListing.FilterByPromotionName(PromotionTitle)

            PromotionListing.ClickSearchFilter()

            if (Approval === 'Approve') {
                PromotionListing.VerifyStatusWorkflowStatus('Active', 'Approved')
            } else if (Approval === 'Reject') {
                PromotionListing.VerifyStatusWorkflowStatus('Inactive', 'Rejected')
            } else {
                PromotionListing.VerifyStatusWorkflowStatus('Inactive', 'Query')
            }

        })

        {
            PromotionType === 'Paid Period' && it(`Apply ${BenefitType} to ${ItemCate}`, function () {

                common.Checkin(MemberId)

                cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail').wait(6000)

                if (ItemCate === 'Merchandise') {

                    InHouseSaleAndMerchandiseItemPurchase.SelectItemType('Merchandise')

                    InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsMerchandise(1)

                } else {

                    InHouseSaleAndMerchandiseItemPurchase.SelectItemType('InHouse')

                    InHouseSaleAndMerchandiseItemPurchase.EnterQuantityOfSetsInHouse(1)
                }

                InHouseSaleAndMerchandiseItemPurchase.SelectItemName('Picnic Set')

                InHouseSaleAndMerchandiseItemPurchase.AddToCart()

                cy.wait(25000)

                if (BasicType === 'Promo Code') {

                    common.ApplyPromoCode(PromoCode)

                    common.VerifyPromoNotification('Apply promotion successful')

                } else {

                    cy.xpath('//h3[text()="Shopping Cart Items"]/following-sibling::div//table//a').should('be.visible')
                    cy.log('Standard Promotion is Applied.')

                }

                common.fillOutandApplyPayment('CASH')

                // Now Veriry Promotion In Promotion Utilization Listing

                cy.visit('/club/promotionUtilizationListing').wait(3000)

                PromotionUtilizationListing.VerifyAppliedPromotion(PromotionTitle)

                cy.LogoutOfSmcms()

            })
        }

    })
})

}

export default PromotionforInHouseMerchandise