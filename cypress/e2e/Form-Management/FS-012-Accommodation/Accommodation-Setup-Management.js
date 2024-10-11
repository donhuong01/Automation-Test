import login from "../../../fixtures/login"
import AccommodationSetupDetail from "../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSetup/AccommodationSetupDetail"
import AccommodationSetupListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSetup/AccommodationSetupListing'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from "../../../fixtures/Data_Module/FS-012-Accommodation/data"

const common = new Common()



const { AccommodationName,
    ActivationDate,
    AccommodationType,
    MaximumOccupancy,
    ProductName,
    ChargeRateName,
    StartDate,
    location,
    EndDate,
    ChargeName,
    TransactionType,
    CalculationType,
    AmountType,
    CustomerCategory,
    Description,
    SpecialRemark,
    ContactPersonInfo,
    IndemnityText,
    TermConditionText } = data.AccommodationSetup

const AccommodationSetupManagement = () =>{

describe('FS-012 Accommodation Setup Management', function () {

    it('[TS-01] Creating and Updating a Accommodation', function () {

        cy.visit('/accommodation/accommodationListing').wait(4000)

        AccommodationSetupListing.CreateNew()

        // details tab
        AccommodationSetupDetail.AccommodationInformation(AccommodationName, ActivationDate, AccommodationType, MaximumOccupancy)

        AccommodationSetupDetail.OperatingPeriod()


        // Product Mapping Tab
        AccommodationSetupDetail.ClickProductMapping()

        AccommodationSetupDetail.BookingFeeProduct(ProductName)

        AccommodationSetupDetail.ReservationFeeProduct(ProductName)


        AccommodationSetupDetail.Save()

        AccommodationSetupListing.FilterWithAccommodationName(AccommodationName)

        AccommodationSetupListing.VerifyItemStatus('Draft', 'Inactive')

        AccommodationSetupListing.ClickAccommodationNoLink()


        // Charge Rate tab
        AccommodationSetupDetail.ClickChargeRateTab()

        AccommodationSetupDetail.ClickAddButton()

        AccommodationSetupDetail.ChargeRateInformation(ChargeRateName, /*StartDate,*/ location, /*EndDate*/)

        AccommodationSetupDetail.ChargeTypeList(ChargeName, TransactionType, CalculationType, AmountType)

        AccommodationSetupDetail.CustomerCategory(CustomerCategory)

        AccommodationSetupDetail.Save()

        AccommodationSetupDetail.SaveAsDraft()

        AccommodationSetupListing.FilterWithAccommodationName(AccommodationName)

        AccommodationSetupListing.VerifyItemStatus('Draft', 'Inactive')

        AccommodationSetupListing.ClickAccommodationNoLink()


        //ADDITIONAL INFORMATION TAB
        // AccommodationSetupDetail.ClickAdditionalInformationTab()

        // AccommodationSetupDetail.FilloutOtherInformation(Description, SpecialRemark, ContactPersonInfo, IndemnityText, TermConditionText)


        // Approval 
        AccommodationSetupDetail.SubmitForApproval()

        common.ApprovalWorkFlow('A-ACM', 'Accommodation Approval Workflow', 'Approve', 'Test Accommodation Approval Workflow')

        cy.visit('/accommodation/accommodationListing').wait(4000)

        AccommodationSetupListing.FilterWithAccommodationName(AccommodationName)

        AccommodationSetupListing.VerifyItemStatus('Approved', 'Active')

    })

})

}

export default AccommodationSetupManagement