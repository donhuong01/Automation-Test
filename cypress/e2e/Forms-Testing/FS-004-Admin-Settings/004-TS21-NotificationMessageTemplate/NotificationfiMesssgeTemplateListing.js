/*****************************************************
 * Page Function: Sample Script to Test Notification Message Template Listing Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import NotificationMessageTemplateListing from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Notification Message Template/NotificationMessageTemplateListing'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS21] Notification Message Template Listing', function () {

    // Page Definitions
    const NotifMsgTempList = new NotificationMessageTemplateListing()

    it('[TC01] Test Notification Message Template Listing ', function () {

        // Visit Notification Message Template Listing Form
        cy.visit('/admin/notificationMessageTemplateList')

        cy.wait(3000)
        // Filter Listing
        NotifMsgTempList.fillOutFilters(data.NotifMsgListData.Filters.templateCode)

        // Verify Listing Table
        NotifMsgTempList.verifyNotifMsgTemplateList(data.NotifMsgListData.templateCodes)

        // Click Template Code Item Link
        NotifMsgTempList.clickTemplateCodeLink(data.NotifMsgListData.templateCodeLink)
    })
})