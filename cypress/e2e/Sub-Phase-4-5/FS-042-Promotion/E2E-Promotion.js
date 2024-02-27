import PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionListing'
import PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionDetail'
import data from '../../../fixtures/Data_Module/FS-042-Promotion/data'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

// })

const common = new Common()

const Promotion = () => {

data.forEach(data => {

    const { PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer, MaxCap, ValidityStartDate,
        ValidityExpiryDate, Remark, PromotionType, StartDate, EndDate, ItemCate, Quantity,
        BenefitType, FixedDollarRate, AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID,
        ApplicableSourceChannel, Approval, BundlePromotion } = data

    describe('SP4-FS042_TS01 Promotion Setup and Management', function () {

        it(`[TC01] Creating New ${BasicType} Promotion on ${PromotionType} for ${ItemCate}.`, function () {

            cy.visit('/club/promotionListing').wait(3000)

            //Click on Create New button
            PromotionListing.CreateNew()

            PromotionDetail.FillOuPromotionDetailSection(PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer,
                MaxCap, ValidityStartDate, ValidityExpiryDate, Remark)

            PromotionDetail.SaveAsDraft()

            // PromotionListing.FilterByPromotionName(PromotionTitle)

            // PromotionListing.ClickSearchFilter()

            // PromotionListing.ClickTableLink()

            cy.wait(4000)

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

            PromotionDetail.SaveAsDraft()

            PromotionListing.FilterByPromotionName(PromotionTitle)

            PromotionListing.ClickSearchFilter()

            PromotionListing.ClickTableLink()

            PromotionDetail.Submit()

            cy.wait(8000)

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

            // if (Approval === 'Approve' || Approval === 'Query') {

            //     PromotionListing.ClickTableLink()

            //     PromotionDetail.SaveAsDraft()

            //     PromotionListing.FilterByPromotionName(PromotionTitle)

            //     PromotionListing.ClickSearchFilter()

            //     PromotionListing.SelectTableItem(PromotionTitle)

            //     PromotionListing.ClickDelete()

            // } else {

            //     cy.log('Item with status Reject can not be deleted')

            // }

        })

    })
})

}

export default Promotion