import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_PromotionListing'
import SRP_PromotionDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_PromotionDetail'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'



const { Name, Description, PromoType, Quantity, ProductCategory, ModuleType,
    ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo, SourceChannel, EDCTerminal, MemberID, MemberType } = data.SRP_Promotion_Management

    
    const MinimuSpendingName = 'Minimum spending ' + Math.floor(Math.random() * 100000 )
    const MinimuSpending = 'Minimum spending' 
    
    const MinimumSpendingOverPeriodOfTime = 'Minimum spending over period of time'
    const MinimumSpendingOverPeriodOfTimeName = 'Minimum Spending Over Period of Time ' + Math.floor(Math.random() * 100000 )
    
    const Period = 'Period'
    const PeriodName = 'Period '+ Math.floor(Math.random() * 100000 )

    const UpdatePersonalInfo = 'Update Personal Info'
    const UpdatePersonalInfoName = 'Update Personal Info ' + Math.floor(Math.random() * 100000 )
    
    const SRPPromotionManagement = () => {

describe('[TS04] FS-036 SRP Promotion Management', function () {

    it('[TC01] Creating SRP Promotion - Birthday Month', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(Name, Description, PromoType, Quantity, ProductCategory,
            ModuleType, 'Percentage', ExtraPercentage, ValidFrom, ValidTo)

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

        SRP_PromotionDetail.FilloutGeneralFields(MinimuSpendingName, Description, MinimuSpending, Quantity, ProductCategory,
            ModuleType, ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(MinimuSpendingName, MinimuSpending)

        SRP_PromotionListing.SelectTableItem(MinimuSpendingName)

        SRP_PromotionListing.Delete()

    })
    it('[TC03] Creating SRP Promotion - Minimum Spending Over Period of Time', function () {


        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(MinimumSpendingOverPeriodOfTimeName, Description, MinimumSpendingOverPeriodOfTime, Quantity, ProductCategory,
            ModuleType, ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(MinimumSpendingOverPeriodOfTimeName, MinimumSpendingOverPeriodOfTime)

        SRP_PromotionListing.SelectTableItem(MinimumSpendingOverPeriodOfTimeName)

        SRP_PromotionListing.Delete()

    })
    it('[TC04] Creating SRP Promotion - Period ', function () {

        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(PeriodName, Description, Period, Quantity, ProductCategory,
            ModuleType, ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(PeriodName, Period)

        SRP_PromotionListing.SelectTableItem(PeriodName)

        SRP_PromotionListing.Delete()

    })
    it('[TC05] Creating SRP Promotion - Update Personal Info ', function () {


        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(UpdatePersonalInfoName, Description, UpdatePersonalInfo, Quantity, ProductCategory,
            ModuleType, ExtraPointsType, ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(UpdatePersonalInfoName, UpdatePersonalInfo)

        SRP_PromotionListing.SelectTableItem(UpdatePersonalInfoName)

        SRP_PromotionListing.Delete()

    })
    it.skip('[TC06] Updating and Deleting SRP Promotion', function () {

        
        cy.visit('/membership/srp/promotionListing')
        cy.wait(1000)

        SRP_PromotionListing.CreateNew()

        SRP_PromotionDetail.FilloutGeneralFields(UpdatePersonalInfoName, Description, UpdatePersonalInfo, Quantity, ProductCategory,
            ModuleType, 'Percentage', ExtraPercentage, ValidFrom, ValidTo)

        SRP_PromotionDetail.SourceChannel(SourceChannel)

        SRP_PromotionDetail.EDCTerminal(EDCTerminal)

        SRP_PromotionDetail.Members(MemberID)

        SRP_PromotionDetail.MemberType(MemberType)

        SRP_PromotionDetail.Save()

        SRP_PromotionListing.FilterByTitlePromoType(UpdatePersonalInfoName, UpdatePersonalInfo)

        SRP_PromotionListing.ClickOnTableLink(UpdatePersonalInfoName)

        //provide new data for updation

        SRP_PromotionDetail.FilloutGeneralFields(Name, Description, PromoType, Quantity, ProductCategory, ModuleType, 'Percentage', ValidFrom, ValidTo)

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

}

export default SRPPromotionManagement