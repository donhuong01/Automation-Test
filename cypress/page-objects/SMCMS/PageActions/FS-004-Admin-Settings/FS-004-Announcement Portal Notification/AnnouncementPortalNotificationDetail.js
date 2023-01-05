import elems_AnnouncementPortalNotificationDetail from '../../../Elements/Admin/FS004_Admin-Settings/AnnouncementPortalNotificationDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker'

class AnnouncementPortalNotificationDetail {

        /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} expectedPg

    *****************************************************/

         verifyPageTitle(expectedPg)

         {
     
           cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)
     
         }

    /*****************************************************
     * Method: fillOutAnnouncementPortalNotificationDetail
     * Description: Fills-out Announcement Portal Notification Detail Form
     *
     * @param {string} title Title
     * @param {int} publishDate Publish Date
     * @param {string} status Status
     * @param {int} expiryDate Expiry Date
     * @param {string} remark Remark
     * @param {string} allow3rdParty Allow 3rd Party
     *****************************************************/
     fillOutAnnouncementPortalNotificationDetail({title, publishDate,publishTime, status, expiryDate,expiryTime, remark, allow3rdParty}){
        
        // Enter Title
        if(title !== undefined){
            cy.xpath(elems_AnnouncementPortalNotificationDetail.TXT_TITLE).clear()
            cy.EnterText(elems_AnnouncementPortalNotificationDetail.TXT_TITLE, title)
        }

        // Set Publish Date
        if(publishDate !== undefined){
            cy.EnterDateTime(elems_AnnouncementPortalNotificationDetail.DATE_PUBLISHDATE, publishDate,publishTime)
        }

        // Select Status
        if(status !== undefined){
            cy.SelectDropDownItem(elems_AnnouncementPortalNotificationDetail.DRP_STATUS, status)
        }

        // Set Expiry Date
        if(expiryDate !== undefined){
            cy.EnterDateTime(elems_AnnouncementPortalNotificationDetail.DATE_EXPIRYDATE, expiryDate, expiryTime)
        }

        // Enter Remark
        if(remark !== undefined){
            cy.xpath(elems_AnnouncementPortalNotificationDetail.TXTAREA_REMARK).clear()
            cy.EnterText(elems_AnnouncementPortalNotificationDetail.TXTAREA_REMARK, remark)
        }

        // Set Allow 3rd Party Checkbox
        if(allow3rdParty !== undefined){
            cy.TickCheckBox(elems_AnnouncementPortalNotificationDetail.CHK_ALLOW3RDPARTY, allow3rdParty)
        }

        // Error Handling
        if( title === undefined
            && publishDate === undefined
            && status === undefined
            && expiryDate === undefined
            && remark === undefined
            && allow3rdParty === undefined
        ){
                throw new Error("AnnouncementPortalNotificationDetail.fillOutAnnouncementPortalNotificationDetail Error!!.\
                                Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: fillOutContent
     * Description: Fills-out Announcement Portal Notification Detail Form - Content Section
     *
     * @param {string} content Content
     * @param {string} stylePropery Toolbar Item
     * @param {string} styleValue Toolbar Value
     *****************************************************/
     fillOutContent({content, styleProperty, styleValue}){

        // Input Marketing Consent
        if(content !== undefined){
            
            // Edit text format
            if(styleProperty !== undefined && styleValue !== undefined){

                // For Toolbar Buttons
                if(styleProperty.toUpperCase() !== 'BUTTON'){
                    cy.StyleRichText(elems_AnnouncementPortalNotificationDetail.RICHTXT_CONTENT,styleProperty, styleValue)
                }
                
                // For Dropdown Text Formatting
                else if(styleProperty.toUpperCase() === 'BUTTON'){
                    cy.StyleRichTextButtons(elems_AnnouncementPortalNotificationDetail.RICHTXT_CONTENT, styleProperty, styleValue)
                }
            }
            
            // Enter Marketing Consent
            cy.xpath(elems_AnnouncementPortalNotificationDetail.RICHTXT_CONTENT+'//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div/p').type(content)
        }

        // Error Handling
        if( content === undefined
        ){
                throw new Error("AnnouncementPortalNotificationDetail.fillOutContent Error!!.\
                                Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: save
     * Description: Save Announcement Portal Notification Detail Form
     *****************************************************/
     save(){
        cy.Click(elems_AnnouncementPortalNotificationDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Announcement Portal Notification Details')
        cy.wait(4000)
    }

    /*****************************************************
     * Method: cancel
     * Description: Cancel Announcement Portal Notification Detail Form
     *****************************************************/
     cancel(){
        cy.Click(elems_AnnouncementPortalNotificationDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Announcement Portal Notification Listing')
    }

    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
     VerifyNotificationMsg(Msg){

        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
        cy.wait(2000)
    }
}

export default AnnouncementPortalNotificationDetail