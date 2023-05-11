import PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionListing'
import PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/Promotion/PromotionDetail'
import Promodata from '../../../fixtures/Data_Module/FS-042-Promotion/SetupPromotionforMembership'
import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import PromotionUtilizationListing from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/PromotionUtilization/PromotionUtilizationListing'


//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()

const PromotionforMembership = (NRICFull) => {

Promodata.forEach(each => {

    const { PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer, MaxCap, ValidityStartDate,
        ValidityExpiryDate, Remark, PromotionType, StartDate, EndDate, ItemCate, Quantity,
        BenefitType, FixedDollarRate, AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID,
        ApplicableSourceChannel, Approval, BundlePromotion,  NRICLast4Digit } = each


    describe('SP4-FS042_TS01 Promotion Setup and Management', function () {

        it(`[TC01] Creating New PromoCode for Membership On ${PromotionType}`, function () {

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
            PromotionType === 'Paid Period' && it('Apply Promotion to Membership Registration', function () {

                const Gender = 'Male'
                const CustomerName = 'Customer-' + Math.floor(Math.random() * 124453)
                const DOB = '12-Jan-1970'

                cy.visit('/membership/customerCheckin').wait(5000)
                cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
                cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, DOB)
                cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, NRICLast4Digit)
                cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
                cy.wait(2000)
                cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

                cy.wait(10000)

                CustomerCreation.fillOutRegistrationInfo({
                    name: CustomerName,
                    DOB: DOB,
                    gender: Gender,
                });

                CustomerCreation.fillOutAddressInformation({
                    postalCode: Customerdata.CustomerCreationPrincipal.AddressInformation.postalCode,
                    address: Customerdata.CustomerCreationPrincipal.AddressInformation.address,
                    unitNumber: Customerdata.CustomerCreationPrincipal.AddressInformation.unitNumber,
                    POBOx: Customerdata.CustomerCreationPrincipal.AddressInformation.POBOx,
                    myMailbox: Customerdata.CustomerCreationPrincipal.AddressInformation.myMailbox
                });

                CustomerCreation.fillOutContactInformation({
                    handPhone: Customerdata.CustomerCreationPrincipal.ContactInformation.handPhone,
                    emailAddress: "test" + Math.floor(Math.random() * 1000) + "@test.com",
                    emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                    homeNumber: Customerdata.CustomerCreationPrincipal.ContactInformation.homeNumber,

                });

                CustomerCreation.save();

                cy.wait(10000)

                cy.Click(elems_Landing.SAFRA_Member)
                cy.Click(elems_Landing.Membership_Registration)
                cy.wait(5000)

                MemRegPrincipal.verifyPersonalInformation({
                    MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                    NameOnNRIC: CustomerName,
                    NameOnCard: CustomerName,
                    Nric: NRICFull,
                    Gender: Gender,
                    DateofBirth: DOB,
                    Age: data.memberregistrationprincipal.Personal_Info.Age,
                    NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                    NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                    MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                    Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                    MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                    CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                    InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
                })

                MemRegPrincipal.SaveAndNextPrincipal()
                cy.wait(5000)

                MemTenureSelect.principalTenureSelection(CustomerName, '10 Years')

                MemTenureSelect.addToCart()
                cy.wait(10000)

                if (BasicType === 'Promo Code') {

                    common.ApplyPromoCode(PromoCode)

                    common.VerifyPromoNotification('Apply promotion successful')

                } else {

                    cy.log('Standard Promotion')

                }

                ShoppingCart.fillOutandApplyPayment('CASH')

                // Now Veriry Promotion In Promotion Utilization Listing

                cy.visit('/club/promotionUtilizationListing').wait(5000)

                PromotionUtilizationListing.VerifyAppliedPromotion(PromotionTitle)

                cy.LogoutOfSmcms()

            })
        }

    })
})

}

export default PromotionforMembership