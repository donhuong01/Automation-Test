import login from '../../../fixtures/login'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'

import AccommodationTypeListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationType/AccommodationTypeListing'
import AccommodationTypeDetail from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationType/AccommodationTypeDetail'

const common = new Common()

const { AccTypeName, LifeStyleGroup, FABSGroup, ClubClassification, SMCClassification, AccessMode, CustomerCateName, CustomerCateg,
    EnableHorizone, NewBookingStartDate, ButWithinMonth, ButWithinDays, CustomerAllowdMonth, CustomerAllowdDays, EnableSlotNo, MaxNoOFAccommodation,
    AllowReservation, SendNotification, PermitTemplateCode, AuthorisationPermit, CalendarName,OperatingPeriodName, ChargeRateName, StartDate, location, EndDate,
    TransactionType, CalculationType, AmountType, BookingAdminFeeProduct, ReservationAdminFeeProduct, CancellationAdminFeeProduct } = data.AccommodationType

const AccommodationTypeManagement = ()=> {

describe('FS-012 Accommodation Type Management', function () {

    it('[TS-01] Creating new accommodation type, fill out all the tabs, submit item, complete approval workflow', function () {

        cy.visit('/accommodation/settingsAccommodationTypeListing').wait(8000)

        AccommodationTypeListing.CreateNew()

        AccommodationTypeDetail.AccoTypeInfo(AccTypeName)

        AccommodationTypeDetail.FillOutCategoryInfo(LifeStyleGroup, FABSGroup, ClubClassification, SMCClassification)

        AccommodationTypeDetail.ClickEditAccessModes()

        AccommodationTypeDetail.ClickAddAccessMode(AccessMode)

        AccommodationTypeDetail.ClickEditCustomerCategory()

        AccommodationTypeDetail.ClickAddCustomerCateg(CustomerCateName)

        AccommodationTypeDetail.FilloutHorizon(AccessMode, CustomerCateg, EnableHorizone, NewBookingStartDate,
            ButWithinMonth, ButWithinDays, CustomerAllowdMonth, CustomerAllowdDays)

        AccommodationTypeDetail.FillOutSlotConfiguration(EnableSlotNo, MaxNoOFAccommodation, AllowReservation, SendNotification)

        AccommodationTypeDetail.FillOutSlotDocuments(PermitTemplateCode, AuthorisationPermit)

        AccommodationTypeDetail.Save()

        AccommodationTypeListing.FilterByAccommodationName(AccTypeName)

        AccommodationTypeListing.SearchFilter()

        AccommodationTypeListing.ClickOnTableEntry()

        //Operating Period Tab
        AccommodationTypeDetail.ClickOnOperatinPeriodTab()

        AccommodationTypeDetail.AddCalendar(CalendarName)

        AccommodationTypeDetail.AddPeriodOfCalendar(OperatingPeriodName)

        AccommodationTypeDetail.SaveAsDraft()

        //Charge Rate Tab

        AccommodationTypeListing.FilterByAccommodationName(AccTypeName)

        AccommodationTypeListing.SearchFilter()

        AccommodationTypeListing.ClickOnTableEntry()

        AccommodationTypeDetail.ChargeRateTab()

        AccommodationTypeDetail.AddChargeRate()

        AccommodationTypeDetail.FilloutChargeRateInformation(ChargeRateName, /*StartDate,*/ location, /*EndDate*/)

        AccommodationTypeDetail.ChargeTypeList(ChargeRateName, TransactionType, CalculationType, AmountType)

        AccommodationTypeDetail.AddCustomerCategory(CustomerCateg)

        AccommodationTypeDetail.Save()

        AccommodationTypeDetail.SaveAsDraft()

        //Product Mapping

        AccommodationTypeListing.FilterByAccommodationName(AccTypeName)

        AccommodationTypeListing.SearchFilter()

        AccommodationTypeListing.ClickOnTableEntry()

        AccommodationTypeDetail.ClickProductMappingTab()

        AccommodationTypeDetail.ProductMappingTab(BookingAdminFeeProduct, ReservationAdminFeeProduct, CancellationAdminFeeProduct)

        //Approval Workflow
        AccommodationTypeDetail.SubmitForApproval()

        common.ApprovalWorkFlow('A-AMT', 'Accommodation Type Approval Workflow', 'Approve', 'Testing Finance Approval Accommodation Type Approval Workflow')
        cy.wait(5000)

        
        common.ApprovalWorkFlow('A-AMT', 'Accommodation Type Approval Workflow', 'Approve', 'Testing Approval workflow for Accommodation Type Approval Workflow')

        cy.visit('/accommodation/settingsAccommodationTypeListing').wait(2000)

        AccommodationTypeListing.FilterByAccommodationName(AccTypeName)

        AccommodationTypeListing.FilterByStatus('Approved')

        AccommodationTypeListing.SearchFilter()

        AccommodationTypeListing.VerifyItemStatus('Approved', 'Active')

    })
})

}

export default AccommodationTypeManagement