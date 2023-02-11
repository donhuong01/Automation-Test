/*****************************************************
 * Page Function: Sample Script to Test Membership Charge Rate Details
 *
 * @author: mfaisal
 *****************************************************/

 //Import Pages
 import MembershipChargeRateDetail from '../../../../page-objects/SMCMS/PageActions/FS-029-Membership-Charge-Rate/MembershipChargeRateDetails'
 import MembershipChargeRateListing from '../../../../page-objects/SMCMS/PageActions/FS-029-Membership-Charge-Rate/MembershipChargeRateListing'

 import data from '../../../../fixtures/Data_Module/FS-029-Member-Charge-Rate/029-data'
 import login from '../../../../fixtures/login'
 beforeEach(() => {

   // Set local storage for QA Enviroment
//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
  
   // Set local storage for UAT Enviroment
   // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

 describe('[SP2-FS-029] Customer Category Type Management', () =>{
     //Page definition
     const MembershipChargeRate = new MembershipChargeRateDetail()
     const MemChargeRateList = new MembershipChargeRateListing()

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


    it('[TC01] Fill Out General Info section of the Membership Charge Rate Details and click Cancel', () => {
      
        cy.visit('/membership/chargeRateDetails')
         cy.wait(5000)
         MembershipChargeRate.VerifyPageTitle()
         MembershipChargeRate.filloutGeneralInfo(Name,CardType,Description,NumberofPeriod,DisplayInFrontEnd,SFSItem,Status)
         MembershipChargeRate.fillOutChargeTypeList(ChargeTypeName,TransectionType,CalculationType,AmountType)
         MembershipChargeRate.fillOutChargeRateList(CustomerCategoryName)

         // MembershipChargeRate.filterProductMasterInfo(ProductNumber,ProductName,SearchName,
         //    ItemModelGrp,ItemGrp,StorageDimGrp,
         //    TrackingDimGrp,SalesCat,ProcurementCat)  
            
         MembershipChargeRate.filterProductMasterInfoAndSelectPCode(ProductNumber,ProductName,SearchName)
         MembershipChargeRate.AddAccessMode(AccessMode)
         MembershipChargeRate.AddCustomerCategoryAccessMode(AddCatAccessmode)
         MembershipChargeRate.Cancel()
      
        })

    it('[TC02] Fill Out General Info section of the Membership Charge Rate Details and click Save button', () => {
         cy.visit('/membership/chargeRateDetails')
         cy.wait(5000)
         MembershipChargeRate.VerifyPageTitle()
         MembershipChargeRate.filloutGeneralInfo(Name,CardType,Description,NumberofPeriod,DisplayInFrontEnd,SFSItem,Status)
         MembershipChargeRate.fillOutChargeTypeList(ChargeTypeName,TransectionType,CalculationType,AmountType)
         MembershipChargeRate.fillOutChargeRateList(CustomerCategoryName)
         // MembershipChargeRate.filterProductMasterInfo(ProductNumber,ProductName,SearchName,
         //    ItemModelGrp,ItemGrp,StorageDimGrp,
         //    TrackingDimGrp,SalesCat,ProcurementCat)  
         MembershipChargeRate.filterProductMasterInfoAndSelectPCode(ProductNumber,ProductName,SearchName,ProductType)
         MembershipChargeRate.AddAccessMode(AccessMode)
         MembershipChargeRate.AddCustomerCategoryAccessMode(AddCatAccessmode)
         MembershipChargeRate.Save()
         MembershipChargeRate.VerifySuccessNotificationMSG('Record has been saved successfully.')

        })

   it('[TC03]Filter value by Name and card Type', function () {

         // Navigate to Form
         cy.visit('/membership/chargeRateList').wait(5000)

         // Verify Page title
         MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')

         //Filter by Name and CardType
         MemChargeRateList.FilterByNameAndCardType(Name, CardType)

         // Verify Charge Rate Name in the listing form
         MemChargeRateList.VerifyChargeRateInListingForm('Name', Name)

         // Verify Charge Rate card type in the listing form
         MemChargeRateList.VerifyChargeRateInListingForm('Card Type', CardType)
 
 
     })

 
 })