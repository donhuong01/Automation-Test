import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_PromotionListing'
import SRP_PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_PromotionDetail'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../../fixtures/login'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const { Name, Description, PromoType, Quantity, ProductCategory, ModuleType,
    ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo, SourceChannel, EDCTerminal, MemberID, MemberType } = data.SRP_Promotion_Management

describe('[TS04] FS-036 SRP Promotion Management', function () {

    it.only('[TC01] Creating SRP Promotion - Birthday Month', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(Name, Description, PromoType, Quantity, ProductCategory,
            ModuleType, ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(Name, PromoType)

        SRP_PromotionListing.SelectTableItem(Name)

        SRP_PromotionListing.Delete()

    })
    it('[TC02] Creating SRP Promotion - Minimum Spending', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields('Minimum Spending SRP Promotion', 'SRP Promotion for Minimum Spending',
            'Minimum Spending', 5, 'SRP', 'Activity and Event', 'Fixed', 20, "Today's date", '31-Mar-2023')

        SRP_PromotionDetail.SourceChannel('SAFRA Jurong')

        SRP_PromotionDetail.EDCTerminal('TID00004')

        SRP_PromotionDetail.Members('A300002234')

        SRP_PromotionDetail.MemberType('')

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType('', 'Birthday Month')

        SRP_PromotionListing.SelectTableItem('')

        SRP_PromotionListing.Delete()

    })
    it('[TC03] Creating SRP Promotion - Minimum Spending Over Period of Time', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields('Minimum Spending Over Period of Time SRP Promotion', 'SRP Promotion for Minimum Spending Over Period of Time',
            'Minimum Spending Over Period of Time', 3, 'SRP', 'Acommodation', 'Percentage', 30, "Today's date", '31-Mar-2023')

        SRP_PromotionDetail.SourceChannel('SAFRA Jurong')

        SRP_PromotionDetail.EDCTerminal('TID00004')

        SRP_PromotionDetail.Members('A300002234')

        SRP_PromotionDetail.MemberType('')

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType('', 'Birthday Month')

        SRP_PromotionListing.SelectTableItem('')

        SRP_PromotionListing.Delete()

    })
    it('[TC04] Creating SRP Promotion - Period ', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields('Period SRP Promotion', 'SRP Promotion for Period',
            'Period', 6, 'SRP', 'Merchandise', 'Percentage', 'select a past date', 'select a future date')


        SRP_PromotionDetail.SourceChannel(Name)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType('', 'Birthday Month')

        SRP_PromotionListing.SelectTableItem('')

        SRP_PromotionListing.Delete()

    })
    it('[TC05] Creating SRP Promotion - Update Personal Info ', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields('Update Personal Info SRP Promotion', 'SRP Promotion for Update Personal Info',
            'Update Personal Info', 4, 'SRP', 'Course', 'Registration Admin Fee', 'select a past date', 'select a future date')


        SRP_PromotionDetail.SourceChannel(Name)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType('', 'Birthday Month')

        SRP_PromotionListing.SelectTableItem('')

        SRP_PromotionListing.Delete()

    })
    it('[TC06] Updating and Deleting SRP Promotion', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.FilterByTitlePromoType(Name, PromoType)

        SRP_PromotionListing.ClickOnTableLink(Name)

        //provide new data for updation

        SRP_PromotionDetail.FilloutGeneralFields(Name, Description, PromoType, Quantity, ProductCategory, ModuleType, ExtraPointType, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(Name)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(Name, PromoType)

        SRP_PromotionListing.SelectTableItem(Name)

        SRP_PromotionListing.Delete()

    })


})