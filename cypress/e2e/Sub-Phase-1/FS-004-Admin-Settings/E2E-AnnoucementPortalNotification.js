/*****************************************************
 * Page Function: E2E Script for Annoucement Portal Notification
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import AnnouncementPortalNotificationDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Announcement Portal Notification/AnnouncementPortalNotificationDetail'
import AnnouncementPortalNotificationListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Announcement Portal Notification/AnnouncementPortalNotificationListing'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

const AnnouncementPortalNotification = () => {

describe('[TS17] Announcement Portal Notification Detail', function () {

    // Page Definitions
    const AnnouncePortalNotifDtl = new AnnouncementPortalNotificationDetail()
    const AnnouncePortNotifList = new AnnouncementPortalNotificationListing()

    const title = data.AnnouncementPortalNotificationListing.Filters.title + Math.floor(Math.random() * 100000 )
    const Updatedtitle = data.AnnouncementPortalNotificationListing.Filters.title + Math.floor(Math.random() * 100000 )
    const publishDate = data.AnnouncementPortalNotificationListing.Filters.publishDate 
    const expiryDate = data.AnnouncementPortalNotificationListing.Filters.expiryDate

    it('[TC01] Fill Out Announcement Portal Notification Detail and Save', function () {

        // Navigate to form
        cy.visit('/admin/announcementPortalNotificationDetails').wait(5000)

        // Fill out form
        AnnouncePortalNotifDtl.fillOutAnnouncementPortalNotificationDetail({
            title : title,
            publishDate : data.AnnouncementPortalNotificationDetail.publishDate,
            publishTime : data.AnnouncementPortalNotificationDetail.publishTime,
            status : data.AnnouncementPortalNotificationDetail.status,
            expiryDate : data.AnnouncementPortalNotificationDetail.expiryDate,
            expiryTime : data.AnnouncementPortalNotificationDetail.expiryTime,
            remark : data.AnnouncementPortalNotificationDetail.remark,
            allow3rdParty : data.AnnouncementPortalNotificationDetail.allow3rdParty
            })

        // Fill out Content rich text field
        AnnouncePortalNotifDtl.fillOutContent({
            content : data.AnnouncementPortalNotificationDetail.ContentField.content,
            styleProperty : data.AnnouncementPortalNotificationDetail.ContentField.styleProperty,
            styleValue : data.AnnouncementPortalNotificationDetail.ContentField.styleValue
        })

        // Save Form
        AnnouncePortalNotifDtl.save()

        //Verify Success Notification Msg
        AnnouncePortalNotifDtl.VerifyNotificationMsg('Record has been saved successfully.')

        //Verify Page Title
        AnnouncePortalNotifDtl.verifyPageTitle('Announcement Portal Notification Listing')
    })


    it('[TC02] Updating and Cancelling a Announcement/Portal Notification', function () {

        // Navigate to Form
        cy.visit('/admin/announcementPortalNotificationList')
        cy.wait(5000)

        // Filter Listing
        AnnouncePortNotifList.fillOutFilters(title)

        // Verify Table
        // AnnouncePortNotifList.verifyAnnouncePortalNotifList(title)

        AnnouncePortNotifList.clickTitleLink(title)

        // Updated the form
        AnnouncePortalNotifDtl.fillOutAnnouncementPortalNotificationDetail({
            title : 'Updated Notification',
            publishDate : data.UpdateAnnouncementPortalNotificationDetail.publishDate,
            publishTime : data.UpdateAnnouncementPortalNotificationDetail.publishTime,
            status : data.UpdateAnnouncementPortalNotificationDetail.status,
            expiryDate : data.UpdateAnnouncementPortalNotificationDetail.expiryDate,
            expiryTime : data.UpdateAnnouncementPortalNotificationDetail.expiryTime,
            remark : data.UpdateAnnouncementPortalNotificationDetail.remark,
            allow3rdParty : data.UpdateAnnouncementPortalNotificationDetail.allow3rdParty
            })


        //Click cancel button
        AnnouncePortalNotifDtl.cancel()


    })

    it('[TC03] Updating and Deleting a Announcement/Portal Notification', function () {

        // Navigate to Form
        cy.visit('/admin/announcementPortalNotificationList')
        // cy.wait(5000)

        // Filter Listing
        AnnouncePortNotifList.fillOutFilters(title)

        // Verify Table
        // AnnouncePortNotifList.verifyAnnouncePortalNotifList(title)

        AnnouncePortNotifList.clickTitleLink(title)

        // Updated the form
        AnnouncePortalNotifDtl.fillOutAnnouncementPortalNotificationDetail({
            title : Updatedtitle,
            publishDate : data.UpdateAnnouncementPortalNotificationDetail.publishDate,
            publishTime : data.UpdateAnnouncementPortalNotificationDetail.publishTime,
            status : data.UpdateAnnouncementPortalNotificationDetail.status,
            expiryDate : data.UpdateAnnouncementPortalNotificationDetail.expiryDate,
            expiryTime : data.UpdateAnnouncementPortalNotificationDetail.expiryTime,
            remark : data.UpdateAnnouncementPortalNotificationDetail.remark,
            allow3rdParty : data.UpdateAnnouncementPortalNotificationDetail.allow3rdParty
            })

        // Save Form
        AnnouncePortalNotifDtl.save()

        //Verify Success Notification Msg
        AnnouncePortalNotifDtl.VerifyNotificationMsg('Record has been saved successfully.')

        //Verify Page Title
        AnnouncePortalNotifDtl.verifyPageTitle('Announcement Portal Notification Listing')

        // Filter Listing
        AnnouncePortNotifList.fillOutFilters(Updatedtitle)

        //Verify updated data in table
        AnnouncePortNotifList.VerifyTableData(Updatedtitle)

        //Select Table entry
        AnnouncePortNotifList.selectItem(Updatedtitle)

        //Table table entry
        // AnnouncePortNotifList.delete()

        //Record deleted succesffull
        // AnnouncePortalNotifDtl.VerifyNotificationMsg('Record has been deleted successfully.')


    })

})

}
export default AnnouncementPortalNotification