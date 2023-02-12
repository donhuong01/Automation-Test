/*****************************************************
 * Page Function: Run/Test Approval Workflow Detail Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import VIPAppointmentDetail from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeDetail'
import VIPAppointmentTypeListing from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeListing'
import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'


const VIPAppointmentType = () => {

describe('[TS01] VIP Appointment Type Managment', function () {


    // Page Definitions
    const VIPAppDetail = new VIPAppointmentDetail()
    const VIPAppTypeListing = new VIPAppointmentTypeListing()
    const AppointmentID = data.VIPAppointmentTypeDetail.AppointmentID
    const Description = data.VIPAppointmentTypeDetail.Description
    const Type = data.VIPAppointmentTypeDetail.Type
    const FreeMembership = data.VIPAppointmentTypeDetail.FreeMembership

    it('[TC01] Fill Out Detail Form and click Cancel', function () {

        
        cy.visit('/membership/vipAppointmentTypeListing')
  
        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.CreateNew()
        VIPAppDetail.verifyTitle('VIP Appointment Type Detail')
        VIPAppDetail.fillOutForm(AppointmentID,Description,Type,FreeMembership)
        VIPAppDetail.cancelForm()


    })

    it('[TC02] Fill Out Detail Form and Save ', function () {

        cy.visit('/membership/vipAppointmentTypeDetail')
        
        VIPAppDetail.verifyTitle('VIP Appointment Type Detail')
        VIPAppDetail.fillOutForm(AppointmentID,Description,Type,FreeMembership)
        VIPAppDetail.saveForm()
        VIPAppDetail.verifyTitle('VIP Appointment Type Listing')
        VIPAppDetail.VerifySuccessMSG('Record has been saved successfully.')

    })

    
    it('[TC03] Verify the newly created item in the listing form', () =>{
       
        cy.visit('/membership/vipAppointmentTypeListing')
            
            VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
            VIPAppTypeListing.VerifyNewlyCreatedItem(AppointmentID,Description)

        
        })
    
    it('[TC04] Delete and click Yes on Confirmation POPup VIP Appointment Type', () =>{
      
        cy.visit('/membership/vipAppointmentTypeListing')
    
        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.Delete(AppointmentID,Description)
        VIPAppTypeListing.DelConfirmYes()
        VIPAppDetail.VerifySuccessMSG('Record has been deleted successfully.')
    
        })  
        

    })

}

export default VIPAppointmentType