import FacilityTypeDetailForm from "../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Type-Detail-Form/FacilityTypeDetailForms";

const FacilityTypeAccessMode = (FacilityName, AccessMode, CustomerCategory, Hours, Days, DaysAndTime) => {

    describe('E2E - Facility Type Access Mode ', function () {


        it.only('Facility Type update for Access Mode', function () {

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

            //Clear Access Mode
            // FacilityTypeDetailForm.ClearSaveData()
            
            //Booking Section
            FacilityTypeDetailForm.UpdateBookingSection( AccessMode , CustomerCategory);

            FacilityTypeDetailForm.BookingCheckboxes();

            //Add Horizon
            FacilityTypeDetailForm.AddAccessMode(AccessMode, CustomerCategory, Hours, Days, DaysAndTime)

            // Click Submit For Approval
            FacilityTypeDetailForm.SubmitForApproval()

            //verify notification msg
            FacilityTypeDetailForm.NotificationMsg('Submit for Approval success.')
            cy.wait(5000)

           

        });


        it('Approval Workflow for Facility Type detail ', function () {

            //Must login as an admin first
            cy.visit('/admin/pendingTaskList');
            cy.wait(5000)

            FacilityTypeDetailForm.ApprovalWorkFlow("F-FLT", "Facility Type Approval Workflow", "Approve", "Testing Finance Approval")
            cy.wait(5000)

            FacilityTypeDetailForm.ApprovalWorkFlow("F-FLT", "Facility Type Approval Workflow", "Approve", "Testing Approval")

            //Must login as an admin first
            cy.visit('/facilities/facilityTypeListing');
            cy.wait(5000)

            //verify page title
            FacilityTypeDetailForm.VerifyPageTitle('Facility Type Listing')

            // verify facility
            FacilityTypeDetailForm.VerifyFacility(FacilityName, "Approved")
        })

    })

}

export default FacilityTypeAccessMode