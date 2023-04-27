/*****************************************************
 * Page Function: Sample Script to Test Notification Message Template Detail Form
 *
 * @author: jricohermoso and asadol
 *****************************************************/

// Import Pages
import NotificationMessageTemplateDetail from "../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Notification Message Template/NotificationMessageTemplateDetails";
import data from "../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Notification Message Template/NotificationMessageTemplateDetails";

describe('[TS21] Notification Message Template Details Update', function () {
    const NotifMsgTempDetail = new NotificationMessageTemplateDetail();

    it('[TC01] Notification Message Template Detail', function () {

            cy.visit('/admin/notificationMessageTemplateList')
            // Navigate to Detail Form
            NotifMsgTempDetail.selectTargetNotificationMessageTemplate(
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.targetNotificationMessageTemplateItem
            );

            // Fill out form
            NotifMsgTempDetail.fillOutNotifMsgTempDtl(
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateName,
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.subject,
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.remarks,
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateCode,
                data.NotifMsgTempDetailsdata.NotifMsgTempDetails.status
            );

            // Update Content
            NotifMsgTempDetail.updateContent(data.NotifMsgTempDetailsdata.NotifMsgTempDetails.content)

            // Save Form
            NotifMsgTempDetail.save();

            // Cancel Form
            //NotifMsgTempDetail.cancel()
            
        })
    });