import elems_NotificationMessageTemplateListing from '../../../Elements/Admin/FS004_Admin-Settings/NotificationMessageTemplateListing.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'

class NotificationMessageTemplateListing {

    /*****************************************************
     * Method: fillOutFilters
     * Description: Fills Out Filter Fields
     *
     * @param {string} templateCode Template Code 
     *****************************************************/
    fillOutFilters(templateCode) {

        // Enter Reason Code
        if (templateCode !== undefined) {
            cy.xpath(elems_NotificationMessageTemplateListing.TXT_TEMPLATECODE).clear()
            cy.EnterText(elems_NotificationMessageTemplateListing.TXT_TEMPLATECODE, templateCode)
        }
        // Click the Search Filters button
        cy.Click(elems_NotificationMessageTemplateListing.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: verifyNotifMsgTemplateList
     * Description: Verfies Notification Message Template Listing Table
     *
     * @param {string} templateCodes Template Codes Array
     *****************************************************/
    verifyNotifMsgTemplateList(templateCodes) {
        templateCodes.forEach(data => {
            cy.VerifyTableEntry(
                elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING,
                'Template Name', data.templateName,
                'Template Code', data.templateCode
            )

            // cy.VerifyTableEntry(
            //     elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING,
            //     'Subject', data.subject,
            //     'Template Code', data.templateCode
            // )

            // cy.VerifyTableEntry(
            //     elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING,
            //     'Content', data.content,
            //     'Template Code', data.templateCode
            // )

            // cy.VerifyTableEntry(
            //     elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING,
            //     'Status', data.status,
            //     'Template Code', data.templateCode
            // )
        })
    }

    /*****************************************************
     * Method: clickTemplateCodeLink
     * Description: Clicks Notification Message Template Listing Item Link
     *
     * @param {string} templateCodeLink Template Code Item Link
     *****************************************************/
    clickTemplateCodeLink(templateCodeLink) {

        // Ticks Checkbox beside item
        cy.ClickTableLink(
            elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING,
            'Template Code', templateCodeLink
        )

        // Verify Page Redirection
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Notification Message Template Detail')
    }

}

export default NotificationMessageTemplateListing