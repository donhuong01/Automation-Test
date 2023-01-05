
 //Import Pages
 import VolunteerAppointmentTypeListing from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Type/VolunteerAppointmentTypeListing'
 import VolunteerAppointmentTypeDetail from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Type/VolunteerAppointmentTypeDetail'
 import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-Uat-data'

 const VolunteerAppointmentType = ()=> {
 
 describe('[TS05] Volunteer Appointment Type Management', () =>{
     //Page definition
     const VolunterAppTypeDetail = new VolunteerAppointmentTypeDetail()
     const VolunterAppTypeListing = new VolunteerAppointmentTypeListing()
 
     it('[TC01] Fillout details form and check filters functionality for select source channel', () =>{
         cy.visit('/membership/volunteerAppointmentTypeDetail')
        //  cy.wait(5000)
         VolunterAppTypeDetail.filloutVolunteerAppointmentTypeDetail({
             AppointmentID : data.AppointmentID,
             AppointmentCode : data.AppointmentCode,
             CommitteeCode : data.CommitteeCode,
             Point : data.Point,
             ClubHouseStore : data.ClubHouseStore
         })
            
         VolunterAppTypeDetail.FilterAndSelectByNameGroupClubStore('SAFRA Punggol', 'Club house')
         VolunterAppTypeDetail.Cancel()
         
         
     })
     it('[TC02] Fillout details form and check save button functionality', () =>{
         cy.visit('/membership/volunteerAppointmentTypeDetail')
        //  cy.wait(5000)
         VolunterAppTypeDetail.filloutVolunteerAppointmentTypeDetail({
             AppointmentID : data.AppointmentID,
             AppointmentCode : data.AppointmentCode,
             CommitteeCode : data.CommitteeCode,
             Point : data.Point,
             ClubHouseStore : data.ClubHouseStore
         })
            
         VolunterAppTypeDetail.SelectClubStore('SAFRA Punggol', 'Club house')
         VolunterAppTypeDetail.Save()
       
     })
     
 
    it('[TC03] Verify the newly created item in the listing form', () =>{
        
        cy.visit('/membership/volunteerAppointmentTypeListing')
        
        VolunterAppTypeListing.VerifyFormTitle()
        VolunterAppTypeListing.VerifyNewlyCreatedItemInListingForm('ACC_YS_ADVSR')

        })
 

    it('[TC04] Delete new item and verify functionality of <No> in confirmation popup', () =>{
        cy.visit('/membership/volunteerAppointmentTypeListing')
        VolunterAppTypeListing.DeleteNewlyCreatedItem('ACC_YS_ADVSR', 'AB-CD')
        VolunterAppTypeListing.DelConfirmNo()
        })

    it('[TC05] Delete new item and verify functionality of <Yes> in confirmation popup', () =>{
        cy.visit('/membership/volunteerAppointmentTypeListing')
        VolunterAppTypeListing.DeleteNewlyCreatedItem('ACC_YS_ADVSR', 'AB-CD')
        VolunterAppTypeListing.DelConfirmYes()
        
    })      
})

}
 
 export default VolunteerAppointmentType