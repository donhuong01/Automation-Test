/*****************************************************
 * Page Function: Run/Test Announcement Portal Notification Detail Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import AnnouncementPortalNotificationDetail from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Announcement Portal Notification/AnnouncementPortalNotificationDetail'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'
import login from '../../../../fixtures/login'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('[TS17] Announcement Portal Notification Detail', function () {

    // Page Definitions
    const AnnouncePortalNotifDtl = new AnnouncementPortalNotificationDetail()

    it('[TC01] Fill Out Announcement Portal Notification Detail and Cancel Form', function () {

        // Navigate to form
        cy.visit('/admin/announcementPortalNotificationDetails').wait(5000)

        // Fill out form
        AnnouncePortalNotifDtl.fillOutAnnouncementPortalNotificationDetail({
            title: data.AnnouncementPortalNotificationDetail.title,
            publishDate: data.AnnouncementPortalNotificationDetail.publishDate,
            publishTime: data.AnnouncementPortalNotificationDetail.publishTime,
            status: data.AnnouncementPortalNotificationDetail.status,
            expiryDate: data.AnnouncementPortalNotificationDetail.expiryDate,
            expiryTime: data.AnnouncementPortalNotificationDetail.expiryTime,
            remark: data.AnnouncementPortalNotificationDetail.remark,
            allow3rdParty: data.AnnouncementPortalNotificationDetail.allow3rdParty
        })

        // Fill out Content rich text field
        AnnouncePortalNotifDtl.fillOutContent({
            content: data.AnnouncementPortalNotificationDetail.ContentField.content,
            styleProperty: data.AnnouncementPortalNotificationDetail.ContentField.styleProperty,
            styleValue: data.AnnouncementPortalNotificationDetail.ContentField.styleValue
        })

        // Cancel Form
        AnnouncePortalNotifDtl.cancel()
    })

    it('[TC02] Fill Out Announcement Portal Notification Detail and Save', function () {

        // Navigate to form
        cy.visit('/admin/announcementPortalNotificationDetails').wait(5000)

        // Fill out form
        AnnouncePortalNotifDtl.fillOutAnnouncementPortalNotificationDetail({
            title: data.AnnouncementPortalNotificationDetail.title,
            publishDate: data.AnnouncementPortalNotificationDetail.publishDate,
            publishTime: data.AnnouncementPortalNotificationDetail.publishTime,
            status: data.AnnouncementPortalNotificationDetail.status,
            expiryDate: data.AnnouncementPortalNotificationDetail.expiryDate,
            expiryTime: data.AnnouncementPortalNotificationDetail.expiryTime,
            remark: data.AnnouncementPortalNotificationDetail.remark,
            allow3rdParty: data.AnnouncementPortalNotificationDetail.allow3rdParty
        })

        // Fill out Content rich text field
        AnnouncePortalNotifDtl.fillOutContent({
            content: data.AnnouncementPortalNotificationDetail.ContentField.content,
            styleProperty: data.AnnouncementPortalNotificationDetail.ContentField.styleProperty,
            styleValue: data.AnnouncementPortalNotificationDetail.ContentField.styleValue
        })

        // Save Form
        AnnouncePortalNotifDtl.save()

        //Verify Success Notification Msg
        AnnouncePortalNotifDtl.VerifyNotificationMsg('Record has been saved successfully.')

        //Verify Page Title
        AnnouncePortalNotifDtl.verifyPageTitle('Announcement Portal Notification Listing')
    })


})