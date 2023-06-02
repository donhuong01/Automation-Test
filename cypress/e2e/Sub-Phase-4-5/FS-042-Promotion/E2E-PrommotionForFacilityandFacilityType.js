import PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionListing'
import PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionDetail'
import Promodata from '../../../fixtures/Data_Module/FS-042-Promotion/SetupPromotionfonFacility'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import FacilityBookingDetail from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Booking/Facility-Booking-Detail'
import PromotionUtilizationListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/PromotionUtilization/PromotionUtilizationListing'

//Page definition
const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


const PrommotionForFacilityandFacilityType = (MemberId) => {

Promodata.forEach(each => {

    const { PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer, MaxCap, ValidityStartDate,
        ValidityExpiryDate, Remark, PromotionType, StartDate, EndDate, ItemCate, Quantity,
        BenefitType, FixedDollarRate, AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID,
        ApplicableSourceChannel, Approval, BundlePromotion, location, FacilityType, FacilitySetup, BookingSlot } = each

    describe('SP4-FS042_TS01 Promotion Setup and Management', function () {

        it(`[TC01] Creating New ${BasicType} Promotion for ${ItemCate} On ${PromotionType}`, function () {

            cy.visit('/club/promotionListing').wait(3000)

            //Click on Create New button
            PromotionListing.CreateNew()

            PromotionDetail.FillOuPromotionDetailSection(PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer,
                MaxCap, ValidityStartDate, ValidityExpiryDate, Remark)

            PromotionDetail.SaveAsDraft()

            // PromotionListing.FilterByPromotionName(PromotionTitle)

            // PromotionListing.ClickSearchFilter()

            // PromotionListing.ClickTableLink()

            //Promotion Type Tab
            PromotionDetail.ClickOnTab('Promotion Type') //pass the text of the related button 

            PromotionDetail.PromotionTypeTab(PromotionType, StartDate, EndDate)

            // PromotionDetail.SaveAsDraft()

            // PromotionListing.FilterByPromotionName(PromotionTitle)

            // PromotionListing.ClickSearchFilter()

            // PromotionListing.ClickTableLink()

            //Benifit Item Tab
            PromotionDetail.ClickOnTab('Benefit Item')

            PromotionDetail.BenefitItemTab(ItemCate, Quantity, BenefitType, FixedDollarRate, BundlePromotion)

            // PromotionDetail.SaveAsDraft()

            // PromotionListing.FilterByPromotionName(PromotionTitle)

            // PromotionListing.ClickSearchFilter()

            // PromotionListing.ClickTableLink()

            //Promotion Criteria
            PromotionDetail.ClickOnTab('Promotion Criteria')

            PromotionDetail.PromotionCriteria(AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID, ApplicableSourceChannel)

            PromotionDetail.Submit()

            cy.wait(10000)

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

        it('Apply Promotion to Facility', function () {

            common.Checkin(MemberId)

            //visit facility booking listing
            cy.visit('/facilities/bookingListing').wait(5000)

            // Click Create New button 
            FacilityBookingDetail.CreateNew()

            //Filout Facility Booking detail form
            FacilityBookingDetail.CreateNewFaciltyBooking(FacilityType, location)

            //select facility name
            FacilityBookingDetail.SelectFacilities(FacilitySetup)

            // select slot
            FacilityBookingDetail.SelectSlot(BookingSlot)

            cy.wait(5000)
            //Click Save
            FacilityBookingDetail.Save()

            if (BasicType === 'Promo Code') {

                common.ApplyPromoCode(PromoCode)
                cy.wait(2000)
                common.VerifyPromoNotification('Apply promotion successful')

            } else {

                cy.log('to verify if the standard promotion is applied')

            }

            common.fillOutandApplyPayment('CASH')

            // Now Verify Promotion In Promotion Utilization Listing

            cy.visit('/club/promotionUtilizationListing').wait(3000)

            PromotionUtilizationListing.VerifyAppliedPromotion(PromotionTitle)

            cy.LogoutOfSmcms()

        })

    })
})

}

export default PrommotionForFacilityandFacilityType