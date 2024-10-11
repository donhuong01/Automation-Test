import elems_DocumentTemplateListing from '../../../Elements/Admin/FS004_Admin-Settings/DocumentTemplateListing.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class DocumentTemplateListing {

    /*****************************************************
     * Method: fillOutFilters
     * Description: Fills Out Filter Fields
     *
     * @param {string} templateName Template Name
     * @param {string} status Status
     *****************************************************/
     fillOutFilters({templateName, status}){

        // Enter Title
        if(templateName !== undefined){
            cy.EnterText(elems_DocumentTemplateListing.TXT_TEMPLATENAME, templateName)
        }

        // Set Publish Date
        if(status !== undefined){
            cy.SelectDropDownItem(elems_DocumentTemplateListing.DRP_STATUS, status)
        }

        // Click the Search Filters button
        cy.Click(elems_DocumentTemplateListing.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: verifyDocTemplateList
     * Description: Verfies Document Template Listing Table
     *
     * @param {string} documentTemplateList Document Template Listing Array
     *****************************************************/
     verifyDocTemplateList(documentTemplateList){

        documentTemplateList.forEach( data => {
            cy.VerifyTableEntry(
                elems_DocumentTemplateListing.TBL_DOCTEMPLATELISTING,
                'Status', data.status,
                'Template Name', data.templateName
            )
        })
    }

    /*****************************************************
     * Method: clickTemplateNameLink
     * Description: Selects a Document Template Item
     *
     * @param {string} templateNameLink Template Name item link in Table
     *****************************************************/
     clickTemplateNameLink(templateNameLink){

        // Select Document Template Table Link Item
        if(templateNameLink !== undefined){
            cy.ClickTableLinkItem(
                elems_DocumentTemplateListing.TBL_DOCTEMPLATELISTING, 
                'Template Name', templateNameLink
            )

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Document Template Detail Form')
        }
    }

    /*****************************************************
     * Method: clickDownloadLink
     * Description: Downloads a Document Template Item
     *
     * @param {string} downloadLink Template Name item's Download link in Table
     *****************************************************/
     clickDownloadLink(downloadLink){

        // Download Document Template Table Item
        if(downloadLink !== undefined){
            cy.ClickTableLinkItem(
                elems_DocumentTemplateListing.TBL_DOCTEMPLATELISTING, 
                'Template Download', 'download',
                'Template Name', downloadLink,
            )
            cy.wait(2000)
        }
    }

    /*****************************************************
     * Method: selectTemplate
     * Description: Selects Document Template Listing Item
     *
     * @param {string} templateItem Title Item
     *****************************************************/
     selectTemplate(templateItem){

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_DocumentTemplateListing.TBL_DOCTEMPLATELISTING, 
            'Template Name', templateItem
        )
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New Document Template Item
     *****************************************************/
     createNew(){
        cy.Click(elems_DocumentTemplateListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Document Template Detail Form')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete Document Template Item
     *****************************************************/
     delete(){
        cy.Click(elems_DocumentTemplateListing.BTN_DELETE)

        // Verify Confiemation Popup
        cy.ValidateElementText(elems_Alerts.LBL_POPUPCONTENT, 'Would you like to delete the records?')
        cy.Click(elems_Alerts.BTN_YES)
    }
}

export default DocumentTemplateListing