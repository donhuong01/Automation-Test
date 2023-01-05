import elems_DocumentTemplateDetail from '../../../Elements/Admin/FS004_Admin-Settings/DocumentTemplateDetail.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
  
class DocumentTemplateDetail{

    /*****************************************************
     * Method: filloutDocumentTemplateDetail
     * Description: Fills-out Document Template Detail Form
     * 
     * @param {string} TemplateName Template Name
     * @param {string} TemplateCode TemplateCode
     * @param {string} Status Status
     * @param {string} TemplateDocument Template Document
     * @param {string} Remark  Remark
     *****************************************************/
     filloutDocumentTemplateDetail({TemplateName, TemplateCode, Status, TemplateDocument, Remark}){

        // Enter Template Name
        if(TemplateName !== undefined) {
            cy.xpath(elems_DocumentTemplateDetail.TXT_TEMPLATENAME).clear()
            cy.EnterText(elems_DocumentTemplateDetail.TXT_TEMPLATENAME, TemplateName)
        }

        // Enter Template Code
        if(TemplateCode !== undefined) {
            cy.xpath(elems_DocumentTemplateDetail.TXT_TEMPLATECODE).clear()
            cy.EnterText(elems_DocumentTemplateDetail.TXT_TEMPLATECODE, TemplateCode)
        }

        // Select Status
        if(Status !== undefined){
            cy.SelectDropDownItem(elems_DocumentTemplateDetail.DRP_STATUS, Status)
        }

        // Upload Template Document
        if(TemplateDocument !== undefined){
            cy.UploadFile(elems_DocumentTemplateDetail.TemplateDocument.UPL_TEMPLATEDOCUMENT, TemplateDocument)
        }

        // Enter Remark
        if(Remark !== undefined){
            cy.xpath(elems_DocumentTemplateDetail.TXTAREA_REMARK).clear()
            cy.EnterText(elems_DocumentTemplateDetail.TXTAREA_REMARK, Remark)
        }

        // Error Handling
        if(TemplateName === undefined 
        && TemplateCode === undefined
        && Status === undefined
        && TemplateDocument === undefined
        && Remark === undefined   
        ){
            throw new Error("DocumentTemplateDetail.filloutDocumentTemplateDetail  Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: updateDocumentTemplateDetail
     * Description: Updates Document Template Detail Form
     * 
     * @param {string} TemplateName Template Name
     * @param {string} TemplateCode TemplateCode
     * @param {string} Status Status
     * @param {string} TemplateDocument Template Document
     * @param {string} Remark  Remark
     *****************************************************/
     updateDocumentTemplateDetail({TemplateName, TemplateCode, Status, TemplateDocument, Remark}){

        // Enter Template Name
        if(TemplateName !== undefined) {
            cy.xpath(elems_DocumentTemplateDetail.TXT_TEMPLATENAME).clear()
            cy.EnterText(elems_DocumentTemplateDetail.TXT_TEMPLATENAME, TemplateName)
        }

        // Verify Template Code
        if(TemplateCode !== undefined) {
            cy.ValidateElementText(elems_DocumentTemplateDetail.LBL_TEMPLATECODE, TemplateCode)
        }

        // Select Status
        if(Status !== undefined){
            cy.SelectDropDownItem(elems_DocumentTemplateDetail.DRP_STATUS, Status)
        }

        // Upload Template Document
        if(TemplateDocument !== undefined){
            cy.UploadFile(elems_DocumentTemplateDetail.TemplateDocument.UPL_TEMPLATEDOCUMENT, TemplateDocument)
        }

        // Enter Remark
        if(Remark !== undefined){
            cy.xpath(elems_DocumentTemplateDetail.TXTAREA_REMARK).clear()
            cy.EnterText(elems_DocumentTemplateDetail.TXTAREA_REMARK, Remark)
        }

        // Error Handling
        if(TemplateName === undefined 
        && TemplateCode === undefined
        && Status === undefined
        && TemplateDocument === undefined
        && Remark === undefined   
        ){
            throw new Error("DocumentTemplateDetail.updateDocumentTemplateDetail  Error!!./n\
                            Please provide at least one argument.")
        }
    }


    /*****************************************************
     * Method: Save
     * Description: Save Form
     * *****************************************************/
     save(){
        cy.Click(elems_DocumentTemplateDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Document Template Listing')
    }

    /*****************************************************
     * Method: Cancel
     * Description: Cancel Form
     * *****************************************************/
     cancel() {
        cy.Click(elems_DocumentTemplateDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Document Template Listing')
    }

}
export default DocumentTemplateDetail