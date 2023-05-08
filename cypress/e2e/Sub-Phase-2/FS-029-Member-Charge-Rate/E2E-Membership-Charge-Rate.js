//Import Pages
import MembershipChargeRateDetail from '../../../page-objects/SMCMS/PageActions/FS-029-Membership-Charge-Rate/MembershipChargeRateDetails.js'
import data from '../../../fixtures/Data_Module/FS-029-Member-Charge-Rate/029-data.js'
import MembershipChargeRateListing from '../../../page-objects/SMCMS/PageActions/FS-029-Membership-Charge-Rate/MembershipChargeRateListing'

const MembershipChargeRate = () => {


describe('FS-029] Membership Charge Rate Management', () =>{
    
    // Page Definitions
    const MembershipChargeRate = new MembershipChargeRateDetail()
    const MemChargeRateList = new MembershipChargeRateListing()

    const name = data.MembershipChargeRateListing.filters.name
    const cardType = data.MembershipChargeRateListing.filters.cardType
    
    const Name = data.MembershipChargeRateDetail.Name
    const CardType = data.MembershipChargeRateDetail.CardType
    const Description = data.MembershipChargeRateDetail.Description
    const NumberofPeriod = data.MembershipChargeRateDetail.NumberofPeriod
    const DisplayInFrontEnd = data.MembershipChargeRateDetail.DisplayInFrontEnd
    const SFSItem = data.MembershipChargeRateDetail.SFSItem
    const Status = data.MembershipChargeRateDetail.Status
    const ChargeTypeName = data.MembershipChargeRateDetail.ChargeTypeName
    const TransectionType = data.MembershipChargeRateDetail.TransectionType
    const CalculationType = data.MembershipChargeRateDetail.CalculationType
    const AmountType = data.MembershipChargeRateDetail.AmountType
    const CustomerCategoryName = data.MembershipChargeRateDetail.CustomerCategoryName
    const ProductNumber = data.MembershipChargeRateDetail.ProductNumber
    const ProductName = data.MembershipChargeRateDetail.ProductName
    const SearchName = data.MembershipChargeRateDetail.SearchName
    const ProductType = data.MembershipChargeRateDetail.ProductType
    const ItemModelGrp = data.MembershipChargeRateDetail.ItemModelGrp
    const ItemGrp = data.MembershipChargeRateDetail.ItemGrp
    const StorageDimGrp = data.MembershipChargeRateDetail.StorageDimGrp
    const TrackingDimGrp = data.MembershipChargeRateDetail.TrackingDimGrp
    const SalesCat = data.MembershipChargeRateDetail.SalesCat
    const ProcurementCat = data.MembershipChargeRateDetail.ProcurementCat
    const AccessMode = data.MembershipChargeRateDetail.AccessMode
    const AddCatAccessmode = data.MembershipChargeRateDetail.AddCatAccessmode




    it('[TC01] Fill Out General Info section of the Membership Charge Rate Details and click Save button', () => {
        cy.visit('/membership/chargeRateDetails')
        cy.wait(5000)
        MembershipChargeRate.VerifyPageTitle()
        MembershipChargeRate.filloutGeneralInfo(Name,CardType,Description,NumberofPeriod,DisplayInFrontEnd,SFSItem,Status)
        MembershipChargeRate.fillOutChargeTypeList(ChargeTypeName,TransectionType,CalculationType,AmountType)
        MembershipChargeRate.fillOutChargeRateList(CustomerCategoryName)
        MembershipChargeRate.filterProductMasterInfoAndSelectPCode(ProductNumber,ProductName,SearchName,ProductType)
        MembershipChargeRate.AddAccessMode(AccessMode)
        MembershipChargeRate.AddCustomerCategoryAccessMode(AddCatAccessmode)
        MembershipChargeRate.Save()
        MembershipChargeRate.VerifySuccessNotificationMSG('Record has been saved successfully.')

       })

    it('[TC02]Filter value by Name and card Type', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(7000)

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')

        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType(Name,CardType)

        // Verify Charge Rate Name in the listing form
        MemChargeRateList.VerifyChargeRateInListingForm('Name', Name)

        // Verify Charge Rate card type in the listing form
        MemChargeRateList.VerifyChargeRateInListingForm('Card Type', CardType)


    })
    it('[TC03] Verify Membership Charge Rate Listing Filters', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(7000)

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')

        //Filter by Name and CardType
        // Filter Listing
        MemChargeRateList.filterChargeRateList({
            name : Name,
            cardType : CardType
        })

        // Verify Listing
        MemChargeRateList.verifyMemChargeRateList(Name, Description)
    })

    it.only('[TC04] Access Charge Rate Item', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(7000)


        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType('Testing1455', CardType)

        // Click Name Link
        MemChargeRateList.clickNameLink('Testing1455')
        
        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Details')

        // Click Cancel button
        MemChargeRateList.Cancel()

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')
        

        // Create New Item
        MemChargeRateList.createNew()

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Details')
    })

    it('[TC05] Verify Membership Charge Rate Listing Form Table Entries and delete entry', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(7000)

        
        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType(Name, CardType)

        // Verify Listing
        // MemChargeRateList.verifyMemChargeRateList(data.MembershipChargeRateListing.memChargeRateList)

        // Select Charge Rate Item
        MemChargeRateList.selectChargeRate(Name)

        // ITEM MUST BE SELECTED BEFORE DELETE BUTTON IS ENABLED
        // Delete Item 
        MemChargeRateList.delete()

        //Click on yes
        MemChargeRateList.deletePopupYes()
    })


})
    
    }
    
    export default MembershipChargeRate