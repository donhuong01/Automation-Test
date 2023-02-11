import FacilityDetailForm from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facilty-Detail-Form/FacilityDetailForm'
import elems_FacilityDetailFormDetailTab from '../../../../../page-objects/SMCMS/Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityDetailForm'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../../fixtures/login'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



//Detail Tab
const { FacilityName, ActivationDate, UploadPhotos, FacilityType, Location, ResourceName, Item, TransferTo
    , ChargeName, TransactionType, CalculationType, AmountType, CustomerCategory, ProductNo } = data.FacilityDetail.DetailsTab.FacilityInfo


//Group Booking Tab
const EnableGroupBooking = data.FacilityDetail.GroupBookingTab.EnableGroupBooking
const BallotType = data.FacilityDetail.GroupBookingTab.BallotType
const BallotBefore = data.FacilityDetail.GroupBookingTab.BallotBefore
const GBIsAllowed = data.FacilityDetail.GroupBookingTab.GroupBookingIsAllowed
const GBIsConslidated = data.FacilityDetail.GroupBookingTab.GroupBookingIsConslidated
const CustomerCategoryName = data.FacilityDetail.GroupBookingTab.CustomerCategoryName
const AccessMode = data.FacilityDetail.GroupBookingTab.AccessMode

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

//charge type list
const { ChargeTypeName, Transaction, Calculation, Amount, CategoryName } = data.FacilityTypeDetail


describe('[TS05] Facility Setup Detail Form Management', function () {

    it('[TC01] Facility Setup Detail (Detail Tab)', function () {

        cy.visit('/facilities/facilityListing');
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

        FacilityDetailForm.AssociatedResources()

        FacilityDetailForm.AddResource(ResourceName, UploadPhotos, ChargeName, TransactionType, CalculationType, AmountType, CustomerCategory, ProductNo)

    })

    it('[TC02] Facility Setup Detail (Product Mapping Tab)', function () {

        FacilityDetailForm.FacilityDetailFormProductMappingTab(ProductNumber, ProductName, SearchName)

        FacilityDetailForm.Save()
        cy.wait(2000)

        // Verify Page title
        FacilityDetailForm.VerifyPageTitle('Facilities Listing')
    })

    it('[TC03] Filter newly created facility and click on it', function () {

        cy.visit('/facilities/facilityListing');
        cy.wait(2000)
        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
            'Draft', 'Inactive')

        // Click on Facility link
        FacilityDetailForm.ClickFacilityListingItem()

        cy.wait(5000)
    })
    it('[TC04] Facility Setup Detail (Group Booking Tab)', function () {

        FacilityDetailForm.FacilityGroupBooking(
            EnableGroupBooking, BallotType, BallotBefore)

        FacilityDetailForm.FacilityDetailFormGroupBookingTab(
            GBIsAllowed, GBIsConslidated, AccessMode, CustomerCategoryName
        )
    })

    it('[TC05] Facility Setup Detail (Charge Rate Tab)', function () {

        // Click Add button
        FacilityDetailForm.addChargeRate()

        FacilityDetailForm.FillOutFacilityChargeRateDetail('Sample Charge rate', '23-Nov-2022',
            'SAFRA Jurong', '23-Nov-2023')

        // add charge type list
        FacilityDetailForm.FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount)

        // Add customer category
        FacilityDetailForm.AddCustomerCategory(CategoryName)

        // Save charge rate
        FacilityDetailForm.Save()

    })


    it('[TC06] Fill out Facility Setup Detail (Additional Information Tab) and Save as Draft', function () {

        FacilityDetailForm.FacilityDetailFormAdditionalInfoTab(
            Description, SpecialRemark, ContactPersonInfo,
            ENBWaiver, IndemnityText, TermAndCondition, TermAndConditionsText
        )

    })


    // it('[TC07] Facility Setup Detail (Attachment Tab)', function () {

    //     // Upload file
    // FacilityDetailForm.FacilityDetailFormAttachmentTab(UploadPhotos)

    //     // Verify newly created file in the table
    //     FacilityDetailForm.VerifyUploadedFileInTable(UploadPhotos)

    //     //Remove newly created file from the table
    //     FacilityDetailForm.RemoveFile(UploadPhotos)

    //     // ReUpload the file
    //     FacilityDetailForm.FacilityDetailFormAttachmentTab(UploadPhotos)

    // })

    it('[TC08] Submit For Approval And Verify in the listing table', function () {

        FacilityDetailForm.SubmitForApproval()
        cy.wait(5000)

        // Verify Page title
        FacilityDetailForm.VerifyPageTitle('Facilities Listing')

        FacilityDetailForm.FiltersFacilitieListingForm(FacilityName,
            'Pending Approval')
        cy.wait(30000)

        FacilityDetailForm.ApprovalWorkFlow('F-FLY', 'Facility Approval Workflow', "Approve", 'Facility-Setup')
        cy.wait(30000)
        FacilityDetailForm.VerifyStatus(FacilityName, 'Approved')

    })

})