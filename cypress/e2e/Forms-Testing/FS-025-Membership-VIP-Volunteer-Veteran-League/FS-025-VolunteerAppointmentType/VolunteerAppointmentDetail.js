/*****************************************************
 * Page Function: Sample Script to Test Member Registration Principal
 *
 * @author: rsampang
 *****************************************************/

//Import Pages
import VolunteerAppointmentTypeDetail from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/Fs-025-Volunteer Appointment Type/VolunteerAppointmentTypeDetail'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

describe('[TS05] Volunteer Appointment Type ', () => {
    //Page definition
    const VolunterAppTypeDetail = new VolunteerAppointmentTypeDetail()

    it('[TS01] Creating New Volunteer Appointment Type', () => {
        cy.visit('/membership/volunteerAppointmentTypeDetail')
        VolunterAppTypeDetail.filloutVolunteerAppointmentTypeDetail({
            AppointmentID: data.AppointmentID,
            // AppointmentType : data.AppointmentType, Backend issue displaying the same values
            CommitteeCode: data.CommitteeCode,
            Point: data.Point,
            ClubHouseStore: data.ClubHouseStore
        })


        // // const AppointmentID = data.AppointmentID. AppointmentID
        // const AppointmentType = data.AppointmentType. AppointmentType
        // const CommitteeCode = data.CommitteeCode. CommitteeCode
        // const Point = data.Point. Point
        // const ClubHouseStore = data.ClubHouseStore. ClubHouseStore
        // VolunterAppTypeDetail.filloutVolunteerAppointmentTypeDetail({AppointmentType, CommitteeCode, Point, ClubHouseStore})
        // // VolunterAppTypeDet.Save()
        // // VolunterAppTypeDet.Cancel()

    })





})
