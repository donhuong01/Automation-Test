/*****************************************************
 * Page Function: Sample Script to Test Announcement Portal Notification Listing Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import AnnouncementPortalNotificationListing from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Announcement Portal Notification/AnnouncementPortalNotificationListing'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'
import login from '../../../../../fixtures/login'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('[TS17] Announcement Portal Notification Listing Form', function () {

    const title = data.AnnouncementPortalNotificationListing.Filters.title
    const publishDate = data.AnnouncementPortalNotificationListing.Filters.publishDate
    const expiryDate = data.AnnouncementPortalNotificationListing.Filters.expiryDate

    // Page Definitions
    const AnnouncePortNotifList = new AnnouncementPortalNotificationListing()

    it('[TC01] Filter and Verify Announcement Portal Notification Listing', function () {

        // Navigate to Form
        cy.visit('/admin/announcementPortalNotificationList')

        // Filter Listing
        AnnouncePortNotifList.fillOutFilters(title, publishDate, expiryDate)

        // Verify Table
        AnnouncePortNotifList.verifyAnnouncePortalNotifList(data.AnnouncementPortalNotificationListing.announcePortalNotifList)

        // Click Create New button
        AnnouncePortNotifList.createNew()
    })

    it('[TC02] Access Announcement Portal Notification Item', function () {

        // Navigate to Form
        cy.visit('/admin/announcementPortalNotificationList')

        // Click item link
        AnnouncePortNotifList.clickTitleLink(data.AnnouncementPortalNotificationListing.titleLink)
    })

    it('[TC03] Delete Announcement Portal Notification Item', function () {

        // Navigate to Form
        cy.visit('/admin/announcementPortalNotificationList')

        // Select item checkbox
        //AnnouncePortNotifList.selectItem(data.AnnouncementPortalNotificationListing.titleItem)

        // Delete item - MUST SELECT ITEM TO ENABLE DELETE BUTTON
        //AnnouncePortNotifList.delete()
    })
})