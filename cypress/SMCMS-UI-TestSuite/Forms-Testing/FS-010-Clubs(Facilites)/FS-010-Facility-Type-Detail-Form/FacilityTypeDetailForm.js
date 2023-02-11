/*****************************************************
 * FS#: FS-028
 * Test Scenario: Task 3900: SP-2-Page Actions-FS-004- Customer Category Type Details
 *
 * @author: fshahzada
 *****************************************************/
// Import Pages
import FacilityTypeDetailForm from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Type-Detail-Form/FacilityTypeDetailForms'
import login from '../../../../../fixtures/login'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import FacilityDetailForm from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facilty-Detail-Form/FacilityDetailForm'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('Facility Type Detail Form', function () {

    const { FacilityName, CalenderName, ChargeRateName, StartDate, Location, EndDate,
        ChargeTypeName, Transaction, Calculation, Amount, CategoryName, CategoryNumber,
        ProductName, AccessMode, CustomerCategory, Status } = data.FacilityTypeDetail


    it('[TC01] FillOut Facility Type Detail form and click cancel button', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeDetail');
        cy.wait(5000)

        //FillOut Facility Type Information
        FacilityTypeDetailForm.FacilityTypeInformation(FacilityName);

        //Facility And Location Section
        FacilityTypeDetailForm.AddLocationSection('SAFRA Mt Faber');

        //Location Name
        FacilityTypeDetailForm.RemoveLocation('SAFRA Mt Faber');

        //Category Section
        FacilityTypeDetailForm.FillOutCategorySection('PARTY ROOM', 'Excess Payment', 'Business Units',
            'Food & Beverages', 'Food & Entertainment-SMC', 'By officers manually');
        //Booking Restriction
        FacilityTypeDetailForm.BookingRestrictions('check', 'check', 'check', 'check', 'E1MF SILVER LITE MEMBERSHIP Member', '2', '1');

        //Booking Section
        FacilityTypeDetailForm.BookingSection('uncheck', 'Third Party Store', 'E1MF SILVER LITE MEMBERSHIP Member', 'Fixed time slots booking', '2');

        //Add Horizon
        FacilityTypeDetailForm.AddHorizon(AccessMode, CustomerCategory)

        //Booking Timing Restriction
        FacilityTypeDetailForm.BookingTimingRestriction();

        //Reservation
        FacilityTypeDetailForm.Reservation();

        //Allow Extension
        FacilityTypeDetailForm.Extension();

        //Click Cancel button
        FacilityTypeDetailForm.Cancel();

    });


    it('[TC02] FillOut Facility Type Detail form and click save button', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeDetail');
        cy.wait(5000)

        //FillOut Facility Type Information
        FacilityTypeDetailForm.FacilityTypeInformation(FacilityName);

        //Facility And Location Section
        FacilityTypeDetailForm.AddLocationSection('SAFRA Mt Faber');

        //Category Section
        FacilityTypeDetailForm.FillOutCategorySection('PARTY ROOM', 'Excess Payment', 'Business Units',
            'Food & Beverages', 'Food & Entertainment-SMC', 'By officers manually');
        //Booking Restriction
        FacilityTypeDetailForm.BookingRestrictions('check', 'check', 'check', 'check', 'E1MF SILVER LITE MEMBERSHIP Member', '2', '1');

        //Booking Section
        FacilityTypeDetailForm.BookingSection('uncheck', 'Third Party Store', 'E1MF SILVER LITE MEMBERSHIP Member', 'Fixed time slots booking', '2');

        //Add Horizon
        FacilityTypeDetailForm.AddHorizon(AccessMode, CustomerCategory)

        //Booking Timing Restriction
        FacilityTypeDetailForm.BookingTimingRestriction();

        //Reservation
        FacilityTypeDetailForm.Reservation();

        //Allow Extension
        FacilityTypeDetailForm.Extension();

        //Submit Form For Approval
        FacilityTypeDetailForm.Save()

        //Notification Message
        FacilityTypeDetailForm.NotificationMsg('Record has been saved successfully.')

    });

    it('[TC03] Verify New Created Facility And Click on it', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeListing');
        cy.wait(5000)

        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName)
        cy.wait(2000)

        // Click on Facility table link
        FacilityTypeDetailForm.ClickTableItem(FacilityName)
        cy.wait(2000)

        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Detail')

        cy.wait(1000)

    });

    it('[TC04] Add operating Period ', function () {

        //click Operating Period Tabe
        FacilityTypeDetailForm.OperatingPeriodTab()

        //Add Calendar
        FacilityTypeDetailForm.AddCalendar(CalenderName)

        //Remove Calendar
        FacilityTypeDetailForm.RemoveCalendar(CalenderName)

        //verify Notification Msg
        FacilityTypeDetailForm.NotificationMsg('Item(s) removed.')

        //Add Calendar
        FacilityTypeDetailForm.AddCalendar(CalenderName)

        //periods of calendar
        // FacilityTypeDetailForm.PeriodsOfCalendar('JR - BBQ Sch Day')
        cy.wait(2000)

    });

    it('[TC05] Add Charge Rate ', function () {

        //click Operating Period Tabe
        FacilityTypeDetailForm.ChargeRateTabe()

        //click Add charge rate button
        FacilityTypeDetailForm.AddChargeRateButton()

        //fiilout Charge Rate Information
        FacilityTypeDetailForm.FilloutChargeRateInfo(ChargeRateName, StartDate, Location, EndDate)

        //Add charge type list
        FacilityTypeDetailForm.FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount)

        //add customer category
        FacilityTypeDetailForm.AddCustomerCategory(CategoryName, CategoryNumber)

        //save charge rate details
        FacilityTypeDetailForm.Save()

        //verify page title
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Detail')

    });

    it('[TC06] Add Product Mapping ', function () {

        //click Operating Period Tabe
        FacilityTypeDetailForm.ProductMappingTab()

        // Booking admin fee product
        FacilityTypeDetailForm.BookingAdminFeeProduct(ProductName)

        //Cancellation admin fee product
        FacilityTypeDetailForm.CancellationAdminFeeProduct(ProductName)

        //amendment admin fee product
        FacilityTypeDetailForm.AmendmentAdminFeeProduct(ProductName)

        // Extention admin fee product 
        FacilityTypeDetailForm.ExtentionAdminFeeProduct(ProductName)

        //Reservation Amin Fee Product
        FacilityTypeDetailForm.ReservationAdminFeeProduct(ProductName)

        cy.wait(2000)
    });

    it('[TC07] Submit Facility For A pproval Add Verify in Facility Listing Table', function () {

        // Click Submit For Approval
        FacilityTypeDetailForm.SubmitForApproval()

        //verify notification msg
        FacilityTypeDetailForm.NotificationMsg('Submit for Approval success.')
        cy.wait(5000)

        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName, Status)
        cy.wait(50000)


        FacilityDetailForm.ApprovalWorkFlow('F-FLT', 'Facility Type Approval Workflow', "Approve", 'Facility-Setup')
        cy.wait(30000)

        cy.visit('/facilities/facilityTypeListing');
        FacilityTypeDetailForm.VerifyFacility(FacilityName, 'Approved')
    });




});