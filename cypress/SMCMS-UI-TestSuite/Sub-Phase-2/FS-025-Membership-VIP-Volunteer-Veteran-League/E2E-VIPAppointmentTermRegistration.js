/*****************************************************
 * Page Function: Run/Test End to End VIP Appointment Term Registration 
 * @author: FShahzada
 *****************************************************/

// Import Pages

import VIPAppointmentTermRegistrationDetailForm from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationDetailForm'
import VIPAppointmentTermRegistrationListingForm from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationListingForm'
import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-Uat-data.js'


const VIPAppointmentTermRegistration = () => {

    // Page Definitions
    const VIPAppTermRegDetail = new VIPAppointmentTermRegistrationDetailForm()
    const VIPAppointmentTerm = new VIPAppointmentTermRegistrationListingForm()

    const MemberID = data.VIPAppointmentTermRegDetail.MemberID
    const Name = data.VIPAppointmentTermRegDetail.Name
    const NRIC = data.VIPAppointmentTermRegDetail.NRIC
    const AppointmentID = data.VIPAppointmentTermRegDetail.AppointmentID
    const Type = data.VIPAppointmentTermRegDetail.Type
    const StartDate = data.VIPAppointmentTermRegDetail.StartDate
    const EndDate = data.VIPAppointmentTermRegDetail.EndDate

    //Updated by FShahzada on 12/12/2019
    const  UpdatedMemberID = data.VIPAppointmentTermRegDetail.UpdatedMemberID
    const  UpdatedName = data.VIPAppointmentTermRegDetail.UpdatedName
    const  UpdatedNRIC = data.VIPAppointmentTermRegDetail.UpdatedNRIC
    const  UpdatedAppointmentID = data.VIPAppointmentTermRegDetail.UpdatedAppointmentID
    const  UpdatedType = data.VIPAppointmentTermRegDetail.UpdatedType
    const  UpdatedStartDate = data.VIPAppointmentTermRegDetail.UpdatedStartDate
    const  UpdatedEndDate = data.VIPAppointmentTermRegDetail.UpdatedEndDate

    const Last4NRICNO = data.VIPAppointmentTermRegLIsting.Last4NRICNO
    const MemberName = data.VIPAppointmentTermRegLIsting.MemberName

describe('[TS02] VIP Appointment Term Registration Managment', function () {



    it('[TC01] Creating New Appoinment Term Registration', function () {

        cy.visit('/membership/vipAppointmentTermRegistrationListing')
        cy.wait(10000)

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

        //Click create new button
        VIPAppTermRegDetail.CreateNew()

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

        //Fill Out Detail Form
        VIPAppTermRegDetail.fillOutVipAppointmentTermRegDetailForm(MemberID, Name, NRIC,
             AppointmentID, Type, StartDate, EndDate)

        //Save Detail Form
        VIPAppTermRegDetail.saveForm()

        //Verify Success Message
        VIPAppTermRegDetail.VerifySuccessMSG('Record has been saved successfully.')

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')


    })

    it('[TC02]Verify Filters in VIP Appointment Term Registration Listing', function () {

        //Visit VIP Appointment Term Registration Listing
        cy.visit('/membership/vipAppointmentTermRegistrationListing');

        //Fill Out VIP Appointment Term Registration Listing
        VIPAppointmentTerm.FillOutVIPAppointmentTermRegListing(MemberID, Name, StartDate, EndDate)

    })

    it('[TC03] Updating Appoinment Term Registration', function () {

        cy.visit('/membership/vipAppointmentTermRegistrationListing')
        cy.wait(7000)

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

        
        //Filter by Appoint ID and NRIC
        VIPAppointmentTerm.FilterByAppointIDAndNRIC(AppointmentID, NRIC)

        //Click create new button
        VIPAppointmentTerm.ClickTableItem(MemberID)

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

        //Fill Out Detail Form
        VIPAppTermRegDetail.UpdateVipAppointmentTermRegDetailForm(UpdatedMemberID, UpdatedName, UpdatedNRIC,
            UpdatedAppointmentID, UpdatedType, UpdatedStartDate, UpdatedEndDate)

        // Save Detail Form
        VIPAppTermRegDetail.saveForm()

        // Verify Success Message
        VIPAppTermRegDetail.VerifySuccessMSG('Record has been saved successfully.')

        // Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')


    })

    it('[TC04] Updating and Cancelling Appointment Term Registration', function () {

        cy.visit('/membership/vipAppointmentTermRegistrationListing')
        cy.wait(7000)

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

        //Filter by Appoint ID and NRIC
        VIPAppointmentTerm.FilterByAppointIDAndNRIC(UpdatedAppointmentID, UpdatedNRIC)

        //Click create new button
        VIPAppointmentTerm.ClickTableItem(UpdatedMemberID)

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

        //Fill Out Detail Form
        VIPAppTermRegDetail.UpdateVipAppointmentTermRegDetailForm(UpdatedMemberID, UpdatedName, UpdatedNRIC,
            UpdatedAppointmentID, UpdatedType, UpdatedStartDate, UpdatedEndDate)

        //Save Detail Form
        VIPAppTermRegDetail.cancelForm()


        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')


    })


})

}

export default VIPAppointmentTermRegistration