import login from "../../../fixtures/login"
import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import InHouseAndMerchandise_Item_Listing from '../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSale&Merchandise_Item_Listing'
import InHouseSaleAndMerchandiseItemChargeSetup from '../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/In-House Sales and Merchandise Item Charge Setup'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common()


const { MerchandiseItemName, InhouseItemName, LocationName, LifeStyle, FabsGroup, ClubClassification,
    SMCClassification, ChargeName, TransactionType, CalculationType, AmountType, CategoryName, ProductNumber, ProductNumber2, Remarks, EarnSAFRAPoints } = data.InHouseSaleAndMerchandiseItemChargeSetup

const InHouseSaleAndMerchandiseItemManagement = () => {


describe('FS-039 & FS-013 In-House Sales and Merchandise Item Management', function () {

    it('Creating and Updating an In-House Sale Item , Save as Draft , Complete Approval', function () {

        cy.visit('/sales/inhouseSaleAndMerchandiseItemListing').wait(4000)

        InHouseAndMerchandise_Item_Listing.SelectItemType('InHouse')

        InHouseAndMerchandise_Item_Listing.CreateNew()

        InHouseSaleAndMerchandiseItemChargeSetup.GeneralInformation('InHouse', InhouseItemName, LocationName, LifeStyle, FabsGroup, ClubClassification, SMCClassification)

        InHouseSaleAndMerchandiseItemChargeSetup.ChargeRate(ChargeName, TransactionType, CalculationType, AmountType)

        InHouseSaleAndMerchandiseItemChargeSetup.CustomerCategory(CategoryName)

        InHouseSaleAndMerchandiseItemChargeSetup.ProductMasterInformation(ProductNumber, Remarks, EarnSAFRAPoints)

        InHouseSaleAndMerchandiseItemChargeSetup.SaveAsDraft()

        InHouseAndMerchandise_Item_Listing.FilterBySaleItemName(InhouseItemName)

        InHouseAndMerchandise_Item_Listing.VerifyWorkflowStatus('Draft')

        InHouseAndMerchandise_Item_Listing.ClickTableLink()

        InHouseSaleAndMerchandiseItemChargeSetup.SubmitForApproval()

        common.ApprovalWorkFlow('INS', 'Inhouse Sale Item Approval Workflow', 'Approve', 'test')

        cy.wait(8000)

        common.ApprovalWorkFlow('INS', 'Inhouse Sale Item Approval Workflow', 'Approve', 'test')

        cy.visit('/sales/inhouseSaleAndMerchandiseItemListing').wait(3000)

        InHouseAndMerchandise_Item_Listing.FilterBySaleItemName(InhouseItemName)
        cy.wait(5000)

        InHouseAndMerchandise_Item_Listing.VerifyWorkflowStatus('Approved')

    })

    it('Creating and Updating Merchandise Item , Save as Draft , Complete Approval', function () {

        cy.visit('/sales/inhouseSaleAndMerchandiseItemListing').wait(4000)

        InHouseAndMerchandise_Item_Listing.SelectItemType('Merchandise')

        InHouseAndMerchandise_Item_Listing.CreateNew()

        InHouseSaleAndMerchandiseItemChargeSetup.GeneralInformation('Merchandise', MerchandiseItemName, LocationName, LifeStyle, FabsGroup, ClubClassification, SMCClassification)

        InHouseSaleAndMerchandiseItemChargeSetup.ChargeRate(ChargeName, TransactionType, CalculationType, AmountType)

        InHouseSaleAndMerchandiseItemChargeSetup.CustomerCategory(CategoryName)

        InHouseSaleAndMerchandiseItemChargeSetup.ProductMasterInformation(ProductNumber2, Remarks, EarnSAFRAPoints)

        InHouseSaleAndMerchandiseItemChargeSetup.SaveAsDraft()

        InHouseAndMerchandise_Item_Listing.SelectItemType('Merchandise')

        InHouseAndMerchandise_Item_Listing.FilterBySaleItemName(MerchandiseItemName)

        InHouseAndMerchandise_Item_Listing.VerifyWorkflowStatus('Draft')

        InHouseAndMerchandise_Item_Listing.ClickTableLink()

        InHouseSaleAndMerchandiseItemChargeSetup.SubmitForApproval()

        common.ApprovalWorkFlow('MCD-', 'Merchandise Item Approval Workflow', 'Approve', 'test')

        cy.wait(8000)

        common.ApprovalWorkFlow('MCD-', 'Merchandise Item Approval Workflow', 'Approve', 'test')

        cy.visit('/sales/inhouseSaleAndMerchandiseItemListing').wait(3000)

        InHouseAndMerchandise_Item_Listing.SelectItemType('Merchandise')

        InHouseAndMerchandise_Item_Listing.FilterBySaleItemName(MerchandiseItemName)

        InHouseAndMerchandise_Item_Listing.VerifyWorkflowStatus('Approved')

    })

})

}
export default InHouseSaleAndMerchandiseItemManagement