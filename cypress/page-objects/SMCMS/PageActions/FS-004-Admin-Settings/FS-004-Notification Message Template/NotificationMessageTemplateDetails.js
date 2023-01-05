import elems_NotificationMessageTemplateDetail from "../../../Elements/Admin/FS004_Admin-Settings/NotificationMessageTemplateDetail";
import elems_NotificationMessageTemplateListing from "../../../Elements/Admin/FS004_Admin-Settings/NotificationMessageTemplateListing";
import elems_PageHeader from "../../../Elements/Common/PageHeader";
import elems_Picker from '../../../Elements/Common/Picker'

class NotificationMessageTemplateDetail {

    ///Move this to the Sample test script
    ClickOnLink() {
        // cy.ClickTableLinkItem(elems_NotificationMessageTemplateListing.TBL_NOTIFMSGTEMPLATELISTING +'/a', "Template Code", targetNotif);
        cy.wait(3000)
        cy.Click('//h2[text() = "Notification Message Template Listing"]/ancestor::div//table//a');
    }
    
    
    /*****************************************************
    * Method: verifyPageTitle
    * Description: Verify Notification Message Template Detail Page Title 
    *****************************************************/
    verifyPageTitle()
    {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Notification Message Template Detail')
    }

    /*****************************************************
    * Method: fillOutNotifMsgTempDtl
    * Description: Fills-out Notification Message Template Detail form
    * 
    * @param {String} templateName Template Name
    * @param {String} subject Subject
    * @param {String} remarks Remark
    * @param {String} templateCode Template Code
    * @param {String} status Status
    *****************************************************/
    fillOutNotifMsgTempDtl(templateName, templateCode, remarks, subject, status) {

        // Enter Template Name
        if(templateName !== undefined){
            // cy.xpath(elems_NotificationMessageTemplateDetail.TXT_TEMPLATENAME).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXT_TEMPLATENAME, templateName);
        }
       
        // Validate Template Code
        if(templateCode !== undefined){
            // cy.xpath(elems_NotificationMessageTemplateDetail.LBL_TEMPLATECODE).clear()
            cy.EnterText(elems_NotificationMessageTemplateDetail.LBL_TEMPLATECODE, templateCode);
        }
       
        // Enter Remarks/
        if(remarks !== undefined){
            cy.xpath(elems_NotificationMessageTemplateDetail.TXTAREA_REMARK).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXTAREA_REMARK, remarks);
        }
       
        // Enter Subject
        if(subject !== undefined){
            cy.xpath(elems_NotificationMessageTemplateDetail.TXT_SUBJECT).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXT_SUBJECT, subject);
        }
        
        // Select Status
        if(status !== undefined){
            cy.SelectDropDownItem(elems_NotificationMessageTemplateDetail.DRP_STATUS, status);
        }
        
        // Error Handling
        if( templateName === undefined
            && remarks === undefined
            && subject === undefined
            && status === undefined
        ){
            throw new Error("NotificationMessageTemplateDetail.fillOutNotifMsgTempDtl Error!!.\
                            Please provide at least one argument.")
        }
    }
    

    /*****************************************************
    * Method: UpdateNotifMsgTempDtl
    * Description: Update Notification Message Template Detail form
    * 
    * @param {String} templateName Template Name
    * @param {String} subject Subject
    * @param {String} remarks Remark
    * @param {String} templateCode Template Code
    * @param {String} status Status
    *****************************************************/
    UpdateNotifMsgTempDtl(templateName, templateCode, remarks, subject, status) {

        // Enter Template Name
        if(templateName !== undefined){
            cy.xpath(elems_NotificationMessageTemplateDetail.TXT_TEMPLATENAME).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXT_TEMPLATENAME, templateName);
        }
       
        // Validate Template Code
        if(templateCode !== undefined){
            // cy.xpath(elems_NotificationMessageTemplateDetail.LBL_TEMPLATECODE).clear()
            cy.ValidateElementText(elems_NotificationMessageTemplateDetail.LBL_TEMPLATECODE, templateCode);
        }
       
        // Enter Remarks/
        if(remarks !== undefined){
            cy.xpath(elems_NotificationMessageTemplateDetail.TXTAREA_REMARK).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXTAREA_REMARK, remarks);
        }
       
        // Enter Subject
        if(subject !== undefined){
            cy.xpath(elems_NotificationMessageTemplateDetail.TXT_SUBJECT).clear();
            cy.EnterText(elems_NotificationMessageTemplateDetail.TXT_SUBJECT, subject);
        }
        
        // Select Status
        if(status !== undefined){
            cy.SelectDropDownItem(elems_NotificationMessageTemplateDetail.DRP_STATUS, status);
        }
        
        // Error Handling
        if( templateName === undefined
            && remarks === undefined
            && subject === undefined
            && status === undefined
        ){
            throw new Error("NotificationMessageTemplateDetail.fillOutNotifMsgTempDtl Error!!.\
                            Please provide at least one argument.")
        }
    }
    
    /*****************************************************
    * Method: Save
    * Description: Save Notification Message Template Detail Form
    *****************************************************/
    save() {
        cy.Click(elems_NotificationMessageTemplateDetail.BTN_SAVE);
        // cy.wait(3000)
        // cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Notification Message Template Listing");
    }

    /*****************************************************
    * Method: cancel
    * Description: Cancel Notification Message Template Detail Form
    *****************************************************/
    cancel() {

        cy.Click(elems_NotificationMessageTemplateDetail.BTN_CANCEL);
        cy.wait(3000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Notification Message Template Listing");
    }

    /*****************************************************
    * Method: createNew
    * Description: This function click on Create new button
    *****************************************************/
     createNew() {
        cy.Click(elems_NotificationMessageTemplateDetail.BTN_CREATENEW);
    
    }
 
    /*****************************************************
    * Method: VerifySuccessNotificationMsg
    * Description: This function click on Create new button
    * @param {string} Msg
    *****************************************************/
     VerifySuccessNotificationMsg(Msg)
      {
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg);
    
      }

    /*****************************************************
    * Method: updateContent 
    * Description: Verifies and Updates Content of message template in Notification Message Template Detail form
    * @param {String} content Field Content
    *****************************************************/
     updateContent(content){
        if(content !== undefined){
            cy.get('.k-iframe')        //Add this selector to the Elements
            .wait(1000)
            .then(($iframe)=>{
    
                const iframe= $iframe.contents()
                const Content = iframe.find('.k-content.ProseMirror>p:nth-child(1)')    //Add this selector to the elements
    
                cy.wrap(Content).clear()          //For Clearing the data
                cy.wrap(Content).type(content)   //Add message template from the data file     
                cy.wrap(Content).type("{ctrl}a");                   
            });
            
            /*
            // SETTINGS TO UPDATE CONTENT STYLE
            cy.StyleRichText("Font Name","Lucida Console");
            cy.StyleRichText("Font Size","7 (36pt)");
            cy.StyleRichText("Paragraph","Heading 1");
            cy.StyleRichText("Button","Align text right");
            cy.StyleRichText("Button","Strikethrough");
            */
        }

        // Error Handling
        if(content === undefined){
            throw new Error("NotificationMessageTemplateDetail.updateContent Error!!.\
                            Please provide an argument.")
        }
    }
}

export default NotificationMessageTemplateDetail;