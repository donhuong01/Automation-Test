import login from "../../../fixtures/login"
import AccommodationClosureDetail from "../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureDetail"
import AccommodationClosureListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureListing'
import AccommodationSetupDetail from "../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSetup/AccommodationSetupDetail"
import AccommodationSetupListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSetup/AccommodationSetupListing'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from "../../../fixtures/Data_Module/FS-012-Accommodation/data"

const common = new Common()


const { AccommodationName,
    ActivationDate,
    MaximumOccupancy,
    ProductName,
    ChargeRateName,
    location,
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


const { AccommodationType, Reason, PermanentTermination, StartDate, StartTime, EndDate, EndTime,
        AddRecurringDate,RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter } = data.AccommodationClosure

const AccommodationClosureManagement = () => {

describe('FS-012 Accommodation Closure Management', function () {

    it('Creating and Cancelling a Accommodation Closure', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }


        
        AccommodationClosureDetail.Cancel()


    })

    it('Creating and Save as Draft a Accommodation Closure', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }


        
        AccommodationClosureDetail.SaveAsDraft()


    })
    it('Creating and Submit for Approval a Accommodation Closure', function () {

        // Creating Accomodation for Closing

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



        // Closure for creted accommodation

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }

        AccommodationClosureDetail.AddAccommodation(AccommodationName)
        
        AccommodationClosureDetail.SubmitForApproval()

        common.ApprovalWorkFlow("A-CLO", "Accommodation Closure Approval Workflow", "Approve", "Testing Accommodation Closure Approval Workflow")


    })

})

}

export default AccommodationClosureManagement