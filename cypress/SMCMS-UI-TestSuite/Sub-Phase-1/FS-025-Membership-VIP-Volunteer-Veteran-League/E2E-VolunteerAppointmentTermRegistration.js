/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: rsampang
 *****************************************************/

 //Import Pages
 import VolunteerAppointmentTermRegistrationDetail from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Term Registration/VolunteerAppointmentTermRegistrationDetail'
 import AppointmentTermRegistrationListingForm from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Term Registration/VolunteerAppointmentTermRegistrationListing'
 import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-Uat-data'
 
 const VolunteerAppointmentTermRegistration = () => {

 
 const AppointmentTerm = new AppointmentTermRegistrationListingForm()

 const AppointmentID = data.VolAppointmentTermRegistration.AppointmentID
 const Last4NRICNO = data.VolAppointmentTermRegistration.Last4NRICNO
 const MemberID = data.VolAppointmentTermRegistration.MemberID
 const MemberName = data.VolAppointmentTermRegistration.MemberName
 const Status = data.VolAppointmentTermRegistration.Type
 const StartDate = data.VolAppointmentTermRegistration.StartDate
 const EndDate = data.VolAppointmentTermRegistration.EndDate
 const AppointmentTypeID = data.VolAppointmentTermRegistration.AppointmentTypeID

 
 describe('[TS05] Volunteer Appointment Term Registration Management ', () =>{

     //Page definition
     const VolunterAppTermDetail = new VolunteerAppointmentTermRegistrationDetail()
 
     it('[TC01] Fillout Volunteer Appointment Registration Detail form and Verify functionality of Cancel button', () =>{

         cy.visit('/membership/volunteerAppointmentTermRegistrationDetail')
         cy.wait(3000)
        
         VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Detail')
        
         VolunterAppTermDetail.FillOutVolAppointmentTermRegDetailForm(
            MemberID, MemberName, AppointmentTypeID, StartDate, EndDate)

        VolunterAppTermDetail.cancel()

     })

     it('[TC02] Fillout Volunteer Appointment Registration Detail form and Verify functionality of Save button', () =>{

         cy.visit('/membership/volunteerAppointmentTermRegistrationDetail')

         VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Detail')

         VolunterAppTermDetail.FillOutVolAppointmentTermRegDetailForm(
            MemberID, MemberName, AppointmentTypeID,  StartDate, EndDate)

        VolunterAppTermDetail.save()

        VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Listing')

     })
 
     it('[TC03] Verify newly created item in the listing form', function () {

        //Visit VIP Appointment Term Registration Listing
        cy.visit('/membership/volunteerAppointmentTermRegistrationListing');

        //Fill Out Appointment Term Registration Listing
        AppointmentTerm.FillOutAppointmentTermRegListing( MemberID, MemberName, StartDate, EndDate)

        // AppointmentTerm.verifyFilterEntryInTable()
    
    });

 
 
     
 })

}

export default VolunteerAppointmentTermRegistration