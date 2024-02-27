import PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionListing'
import PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionDetail'
import Promodata from '../../../fixtures/Data_Module/FS-042-Promotion/SetupPromotionforInterestGroup'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import IGMembershipRenewal from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Renewal'

import data from '../../../fixtures/Data_Module/FS-016-Interest-Group/InterestGroupMembershipRenewal'  ///fixtures/Data_Module/FS-016-Interest-Group/InterestGroupMembershipRenewal'
import PromotionUtilizationListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/PromotionUtilization/PromotionUtilizationListing'

//Page definition
const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const PromotionforInterestGroup = (MemberId) => {

Promodata.forEach(each => {

    const { PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer, MaxCap, ValidityStartDate,
        ValidityExpiryDate, Remark, PromotionType, StartDate, EndDate, ItemCate, Quantity,
        BenefitType, FixedDollarRate, AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID,
        ApplicableSourceChannel, Approval, BundlePromotion, IGMembership, Terms } = each

    describe('SP4-FS042_TS01 Promotion Setup and Management', function () {

        it(`[TC01] Creating New ${BasicType} Promotion for Interest Group On ${PromotionType}`, function () {

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

        })

        {
            PromotionType === 'Paid Period' && it('Apply Promotion to Interest Group', function () {

                common.Checkin(MemberId)

                cy.visit('/membership/interestGroupMembershipRenewal').wait(5000)

                IGMembershipRenewal.SelectIGMembership(IGMembership)

                IGMembershipRenewal.SelectRenewalTerm(Terms)

                IGMembershipRenewal.Submit()

                cy.wait(10000)

                if (BasicType === 'Promo Code') {

                    common.ApplyPromoCode(PromoCode)

                    // common.VerifyPromoNotification('Apply promotion successful')

                } else {

                   // cy.log('to verify if the standard promotion is applied')
                   cy.log('to verify if the standard promotion is applied')
                   cy.Click('(//div[@class="page-title"]//following-sibling::div//table//tbody//td[9]//a)[1]')
                   cy.SelectDropDownItem('//span[@id="txtStandardPromotion"]', PromotionTitle)
                   cy.Click('//button[text()="Select"]')
   

                }

                common.fillOutandApplyPayment('CASH')

                // Now Verify Promotion In Promotion Utilization Listing

                cy.visit('/club/promotionUtilizationListing').wait(3000)

                PromotionUtilizationListing.VerifyAppliedPromotion(PromotionTitle)

                cy.LogoutOfSmcms()

            })
        }

    })
})

}

export default PromotionforInterestGroup