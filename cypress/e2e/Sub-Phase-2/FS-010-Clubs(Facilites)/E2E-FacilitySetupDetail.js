import FacilityDetailForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facilty-Detail-Form/FacilityDetailForm'
import elems_FacilityDetailFormDetailTab from '../../../page-objects/SMCMS/Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityDetailForm'
import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'


  const FacilitySetupDetail = (FacilityType) => { 

  //Detail Tab
  const FacilityName = data.FacilityDetail.DetailsTab.FacilityInfo.FacilityName
  const ActivationDate = data.FacilityDetail.DetailsTab.FacilityInfo.ActivationDate
  const UploadFileName = data.FacilityDetail.DetailsTab.FacilityInfo.UploadPhotos
//   const FacilityType = data.FacilityDetail.DetailsTab.FacilityInfo.FacilityType
  const Location = data.FacilityDetail.DetailsTab.FacilityInfo.Location
  const ResourceName = data.FacilityDetail.DetailsTab.FacilityInfo.ResourceName
  const Item = 'jpeg'
  const TransferTo = 'Transfer To'

  //Group Booking Tab
  const EnableGroupBooking =  data.FacilityDetail.GroupBookingTab.EnableGroupBooking
  const BallotType =  data.FacilityDetail.GroupBookingTab.BallotType
  const BallotBefore =  data.FacilityDetail.GroupBookingTab.BallotBefore
  const GBIsAllowed =  data.FacilityDetail.GroupBookingTab.GroupBookingIsAllowed
  const GBIsConslidated =  data.FacilityDetail.GroupBookingTab.GroupBookingIsConslidated
  const CustomerCategoryName =  data.FacilityDetail.GroupBookingTab.CustomerCategoryName
  const AccessMode =  data.FacilityDetail.GroupBookingTab.AccessMode

  //Product Mapping
  const ProductNumber = data.FacilityDetail.ProductMappingTab.ProductNumber
  const ProductName = data.FacilityDetail.ProductMappingTab.ProductName
  const SearchName = data.FacilityDetail.ProductMappingTab.SearchName

  //Additioanal Information tab
  const Description = data.FacilityDetail.AdditionalInfoTab.Description
  const SpecialRemark = data.FacilityDetail.AdditionalInfoTab.SpecialRemark
  const ContactPersonInfo = data.FacilityDetail.AdditionalInfoTab.ContactPersonInfo
  const ENBWaiver = data.FacilityDetail.AdditionalInfoTab.EnableIndemnityWaiver
  const IndemnityText = data.FacilityDetail.AdditionalInfoTab.IndemnityText
  const TermAndCondition = data.FacilityDetail.AdditionalInfoTab.EnableTermAndCondition
  const TermAndConditionsText = data.FacilityDetail.AdditionalInfoTab.TermAndConditionsText

  //Attachment Tab
  const UploadFile = data.FacilityDetail.AttachmentTab.UploadFile

  //Approval Outcome
  const ApprovalOutcome = 'Approve'
  const Remarks = 'Testing'

  //charge type list
  const {ChargeTypeName, Transaction, Calculation, Amount , CategoryName }=data.FacilityTypeDetail


describe('[TS05] Facility Setup Detail Form Management', function () {

    it('[TC01] Facility Setup Detail (Detail Tab)', function () { 

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)

        FacilityDetailForm.CreatNew()

        cy.wait(2000)

        FacilityDetailForm.FacilityDetailFormDetailTab(
            FacilityName, 
            ActivationDate, FacilityType, Location)

        // Click on Facility link
        // FacilityDetailForm.ClickFacilityListingItem()

        FacilityDetailForm.BoxItemSelection(Item, TransferTo)
        
        // FacilityDetailForm.UploadFile(UploadFileName, 'Thumbnail')
       
        // FacilityDetailForm.AssociatedResources()

        // FacilityDetailForm.AddExistingResource(ResourceName)


        FacilityDetailForm.FacilityDetailFormProductMappingTabBookingfeeAndReservationFee(ProductName, 'Facility Product_with Tax')

        FacilityDetailForm.Save()

        cy.wait(3000)

        // Verify Page title
        FacilityDetailForm.VerifyPageTitle('Facilities Listing')
    })

    it('[TC02] Filter newly created facility and click on it', function () {

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Draft')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()
    
        cy.wait(5000)
    })
    it('[TC03] Facility Setup Detail (Group Booking Tab)', function () {

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Draft')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()
    
        cy.wait(5000)

        FacilityDetailForm.FacilityGroupBooking(
            EnableGroupBooking, BallotType, BallotBefore)

        FacilityDetailForm.FacilityDetailFormGroupBookingTab(
            GBIsAllowed, GBIsConslidated, AccessMode, CustomerCategoryName
        )
        FacilityDetailForm.SaveAsDraft()
        cy.wait(3000)
    })

    it('[TC04] Facility Setup Detail (Charge Rate Tab)', function () {

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Draft')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()
    
        cy.wait(5000)

        // Click Add button
        FacilityDetailForm.addChargeRate()

        FacilityDetailForm.FillOutFacilityChargeRateDetail('Sample Charge rate', '22-Jun-2023',
         /*'SAFRA Jurong',*/ '01-Dec-2024')

        // add charge type list
        FacilityDetailForm.FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount)

        // Add customer category
        FacilityDetailForm.AddCustomerCategory(CategoryName)

        // Save charge rate
        FacilityDetailForm.Save()
        cy.wait(4000)

        //Save As Draft
        FacilityDetailForm.SaveAsDraft()
        cy.wait(3000)

    })
    

    it('[TC05] Fill out Facility Setup Detail (Additional Information Tab) and Save as Draft', function () {

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Draft')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()
    
        cy.wait(5000)

        FacilityDetailForm.FacilityDetailFormAdditionalInfoTab(
            Description, SpecialRemark, ContactPersonInfo,
            ENBWaiver, IndemnityText, TermAndCondition, TermAndConditionsText
            )

         //Save As Draft
        FacilityDetailForm.SaveAsDraft()
        cy.wait(3000)
    })


    it('[TC06] Facility Setup Detail (Attachment Tab)', function () {

        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Draft')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()
    
        cy.wait(5000)

        // Upload file
        FacilityDetailForm.FacilityDetailFormAttachmentTab(UploadFile)

        // Verify newly created file in the table
        FacilityDetailForm.VerifyUploadedFileInTable(UploadFile)

        //Remove newly created file from the table
        FacilityDetailForm.RemoveFile(UploadFile)

        // ReUpload the file
        FacilityDetailForm.FacilityDetailFormAttachmentTab(UploadFile)


        FacilityDetailForm.SubmitForApproval()
        cy.wait(5000)
                
        // Verify Page title
        FacilityDetailForm.VerifyPageTitle('Facilities Listing')

        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
            'Pending Approval')


        
    })
    
    it('[TC07] Facility Setup Approval workflow', function () {

        cy.visit('/admin/pendingTaskList',{timeout: 30000});
        cy.wait(8000)
        FacilityDetailForm.FacilityApprovalWorkFlow("F-FLY","Facility Approval Workflow",ApprovalOutcome,Remarks)
        cy.wait(3000)
        cy.visit('/facilities/facilityListing',{timeout: 30000});
        cy.wait(5000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
        'Approved')
    })
})

}

export default FacilitySetupDetail