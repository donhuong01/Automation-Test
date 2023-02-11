/*****************************************************
 * Page Function: Sample Script to Test Facility Settings Operating Period Listing Form Page Actions
 *
 * @author: rsampang
 *****************************************************/

// Import Pages
import FacilitySettingsOperatingPeriodListing from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Settings-Operating-Period/FacilitySettingsOperatingPeriodListing'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../../fixtures/login'

//Page Definition
const FacilitySettingsOperatingPeriodList = new FacilitySettingsOperatingPeriodListing



beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[FS10] Facility Settings Operating Period Listing', function () {
    const OperatingPeriodName = data.OperatingPeriodDetail.operatingPeriodName
    const Status = data.OperatingPeriodDetail.Status
    const RecordStatus = data.OperatingPeriodDetail.RecordStatus
    const DelOperatingPeriodName = data.DelOperatingPeriodName
    // const DelStatus = data.DelStatus

    it('[TC01] FilloutFilters and Click the table link', function () {

        // Visit Facility Settings Operating Period Listing
        cy.visit('/facilities/operatingPeriodListing')

        // Verify Page Title
        FacilitySettingsOperatingPeriodList.VerifyPageTitle()

        // FillOut Filters
        FacilitySettingsOperatingPeriodList.FilloutFilters(OperatingPeriodName, Status, RecordStatus)

        // Verify Table LInk
        FacilitySettingsOperatingPeriodList.VerifyTableLink(OperatingPeriodName, Status)
    })

    it('[TC02] Check the functionality of Create New button', function () {

        // Visit Facility Settings Operating Period Listing
        cy.visit('/facilities/operatingPeriodListing')

        // Click on Create New button
        FacilitySettingsOperatingPeriodList.CreateNew()
    })

    it('[TC03] Check the functionality of Cancelling Delete confirmation', function () {

        // Visit Facility Settings Operating Period Listing
        cy.visit('/facilities/operatingPeriodListing')

        // Click Delete Cancel
        FacilitySettingsOperatingPeriodList.CancelDeleteItem(OperatingPeriodName, Status)
    })

    it('[TC04] Check the Delete functionality', function () {

        // Visit Facility Settings Operating Period Listing
        cy.visit('/facilities/operatingPeriodListing')

        // Click delete Yes
        FacilitySettingsOperatingPeriodList.DeleteItem(OperatingPeriodName, Status)
    })

})
