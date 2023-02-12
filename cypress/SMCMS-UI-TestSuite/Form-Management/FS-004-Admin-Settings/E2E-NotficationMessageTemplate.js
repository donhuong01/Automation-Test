import NotificationMessageTemplateDetail from "../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Notification Message Template/NotificationMessageTemplateDetails";
import NotificationMessageTemplateListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Notification Message Template/NotificationMessageTemplateListing'
import data from "../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data";

const NotificationMessageTemplate = () => {

describe('[TS21] Notification Message Template Management', function () {

    // Page Definitions
    const NotifMsgTempList = new NotificationMessageTemplateListing()
    const NotifMsgTempDetail = new NotificationMessageTemplateDetail()
    const TemplateName =  data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateName+  Math.floor(Math.random() * 1000)
    const TemplateCode =  data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateCode+  Math.floor(Math.random() * 1000)
    const UpdateTemplateName =  data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateName+  Math.floor(Math.random() * 1000)

    it('[TC01] Create New Notification Message Template Detail and save', function () {

        cy.visit('/admin/notificationMessageTemplateList')
        // Navigate to Detail Form
        // NotifMsgTempDetail.selectTargetNotificationMessageTemplate(
        //     data.NotifMsgTempDetailsdata.NotifMsgTempDetails.targetNotificationMessageTemplateItem
        // );

        NotifMsgTempDetail.createNew()

        // Fill out form
        NotifMsgTempDetail.fillOutNotifMsgTempDtl(
            TemplateName,
            TemplateCode,
            // data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateCode,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.remarks,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.subject,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.status
        );

        // // Update Content
        NotifMsgTempDetail.updateContent(data.NotifMsgTempDetailsdata.NotifMsgTempDetails.content)

        // Save Form
        NotifMsgTempDetail.save();

        //Verify Success Message (Record has been saved successfully.)
        NotifMsgTempDetail.VerifySuccessNotificationMsg('Record has been saved successfully.')
   
    })

    it('[TC02] Update Notification Message Template Detail and Click Save button', function () {

        cy.visit('/admin/notificationMessageTemplateList')

        // Filter by Template code
        NotifMsgTempList.fillOutFilters(TemplateCode)

        // Navigate to Detail Form
        NotifMsgTempDetail.ClickOnLink();

        // Fill out form
        NotifMsgTempDetail.UpdateNotifMsgTempDtl(
            // data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateName,
            UpdateTemplateName,
            '-'+TemplateCode,
            // data.NotifMsgTempDetailsdata.NotifMsgTempDetails.templateCode,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.remarks,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.subject,
            data.NotifMsgTempDetailsdata.NotifMsgTempDetails.status
        );

        // Update Content
        NotifMsgTempDetail.updateContent(data.NotifMsgTempDetailsdata.NotifMsgTempDetails.content)

        // Save Form
        NotifMsgTempDetail.save();

        //Verify Success Message (Record has been saved successfully.)
        NotifMsgTempDetail.VerifySuccessNotificationMsg('Record has been saved successfully.')

        // Cancel Form
        //NotifMsgTempDetail.cancel()
        
    })

    it('[TC03] Verify item in Notification Message Template Listing form', function () {

        // Navigate to Form
        cy.visit('/admin/notificationMessageTemplateList')

        cy.wait(3000)
        // Filter Listing
        NotifMsgTempList.fillOutFilters(TemplateCode)

        // Verify Listing Table
        // NotifMsgTempList.verifyNotifMsgTemplateList(data.NotifMsgListData.templateCodes)

        // Click Template Code Item Link
        // NotifMsgTempList.clickTemplateCodeLink(data.NotifMsgListData.templateCodeLink)

        // Navigate to Detail Form
        NotifMsgTempDetail.ClickOnLink();

        // Verify Page Title
        NotifMsgTempDetail.verifyPageTitle();
    })

    })

}

export default NotificationMessageTemplate