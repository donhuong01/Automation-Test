/*****************************************************
 * FS#: FS-028
 * Test Scenario: Task 3900: SP-2-Page Actions-FS-004- Customer Category Type Details
 *
 * @author: fshahzada
 *****************************************************/
// Import Pages
import FacilityTypeDetailForm from '../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Type-Detail-Form/FacilityTypeDetailForms'

import data from '../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'



const FacilityTypeDetailFormManagement = (CalenderName, PeriodOfCalendar, OperatnPeriodName) => {

describe('Facility Type Detail Form', function () {

    const {FacilityName , ChargeRateName  , Location, StartDate, EndDate,
     ChargeTypeName ,Transaction ,Calculation ,Amount ,CategoryName ,CategoryNumber,
     ProductName ,AccessMode ,CustomerCategory, Status, ChargeRateLocation } = data.FacilityTypeDetail

    const {Category, LifestyleGroup, FABSGroup,
         ClubClassification, SMCClassification} = data.CategorySection
  

    it('[TC01] FillOut Facility Type Detail form and click cancel button', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeDetail');
        cy.wait(5000)

        //FillOut Facility Type Information
        FacilityTypeDetailForm.FacilityTypeInformation(FacilityName);
        
        //Facility And Location Section
        FacilityTypeDetailForm.AddLocationSection(Location);

        //Location Name
        FacilityTypeDetailForm.RemoveLocation(Location);

        //Category Section
        FacilityTypeDetailForm.FillOutCategorySection(Category, LifestyleGroup, FABSGroup,
                                                      ClubClassification, SMCClassification);
        //Booking Restriction
        FacilityTypeDetailForm.BookingRestrictions('check', 'check', 'check', 'check','E1MF SILVER LITE MEMBERSHIP Member' ,'2', '1');
        
        //Booking Section
        FacilityTypeDetailForm.BookingSection('uncheck', 'Online', 'All Customer Category', 'Fixed time slots booking', '2');
        
        FacilityTypeDetailForm.BookingCheckboxes();

        //Add Horizon
        FacilityTypeDetailForm.AddHorizon( AccessMode, CustomerCategory )

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
        FacilityTypeDetailForm.AddLocationSection(Location);

        //Category Section
        FacilityTypeDetailForm.FillOutCategorySection(Category, LifestyleGroup, FABSGroup,
                                         ClubClassification, SMCClassification);
        //Booking Restriction
        // FacilityTypeDetailForm.BookingRestrictions('check', 'check', 'check', 'check','All Customer Category' ,'2', '1');
        
        //Booking Section
        FacilityTypeDetailForm.BookingSection('uncheck', 'Online', 'All Customer Category', 'Fixed time slots booking', '2');
        
        // FacilityTypeDetailForm.BookingCheckboxes();

        //Add Horizon
        // FacilityTypeDetailForm.AddHorizon( AccessMode, CustomerCategory )

        //Booking Timing Restriction
        // FacilityTypeDetailForm.BookingTimingRestriction();

        //Reservation
        // FacilityTypeDetailForm.Reservation();

        //Allow Extension
        // FacilityTypeDetailForm.Extension();
  
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

        // Click on Facility table link
        FacilityTypeDetailForm.ClickTableItem(FacilityName)
        cy.wait(10000)
        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Detail')

        cy.wait(1000)

    });

    it('[TC04] Adding Operating Period ', function () {

         //Must login as an admin first
         cy.visit('/facilities/facilityTypeListing');
         cy.wait(5000)
          
         //verify page title 
         FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')
 
         // verify facility 
         FacilityTypeDetailForm.VerifyFacility(FacilityName)
 
         // Click on Facility table link
         FacilityTypeDetailForm.ClickTableItem(FacilityName)
         cy.wait(8000)

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
        FacilityTypeDetailForm.SelectPeriodsOfCalendar(PeriodOfCalendar, OperatnPeriodName)
        cy.wait(2000)

        // FacilityTypeDetailForm.SelectOperatingPeriod('Operating--Period 2023')

        
        //Click Form For Save As Draft
        FacilityTypeDetailForm.SaveAsDraft()


    });

    it('[TC05] Adding Charge Rate ', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeListing');
        cy.wait(5000)
         
        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName)

        // Click on Facility table link
        FacilityTypeDetailForm.ClickTableItem(FacilityName)
        cy.wait(8000)

        //click Operating Period Tabe
        FacilityTypeDetailForm.ChargeRateTabe()

        //click Add charge rate button
        FacilityTypeDetailForm.AddChargeRateButton()

        //fiilout Charge Rate Information
        FacilityTypeDetailForm.FilloutChargeRateInfo(ChargeRateName, StartDate, ChargeRateLocation, EndDate)

        //Add charge type list
        FacilityTypeDetailForm.FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount)
        
        //add customer category
        FacilityTypeDetailForm.AddCustomerCategory(CategoryName, CategoryNumber)

        //save charge rate details
        FacilityTypeDetailForm.Save()

        //verify page title
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Detail')

    });

    it('[TC06] Adding Product Mapping ', function () {

        //Must login as an admin first
        cy.visit('/facilities/facilityTypeListing');
        cy.wait(5000)
         
        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName)

        // Click on Facility table link
        FacilityTypeDetailForm.ClickTableItem(FacilityName)
        cy.wait(4000)

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

        // Click Submit For Approval
        FacilityTypeDetailForm.SubmitForApproval()

        //verify notification msg
        FacilityTypeDetailForm.NotificationMsg('Submit for Approval success.')
        cy.wait(5000)
         
        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName,Status)


    });

    it('[TC06] Adding Product MappingApproval Workflow for Facility Type detail ', function () {

        //Must login as an admin first
        cy.visit('/admin/pendingTaskList');
        cy.wait(20000)

        FacilityTypeDetailForm.ApprovalWorkFlow("F-FLT","Facility Type Approval Workflow","Approve","Testing Finance Approval")
        cy.wait(15000)

        FacilityTypeDetailForm.ApprovalWorkFlow("F-FLT","Facility Type Approval Workflow","Approve","Testing Approval")
        
        //Must login as an admin first
        cy.visit('/facilities/facilityTypeListing');
        cy.wait(5000)
         
        //verify page title 
        FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

        // verify facility 
        FacilityTypeDetailForm.VerifyFacility(FacilityName,	"Approved")
    })

});

}
export default FacilityTypeDetailFormManagement