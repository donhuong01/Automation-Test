import DocumentTemplateListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Document Template/DocumentTemplateListing.js'
import DocumentTemplateDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Document Template/DocumentTemplateDetail.js'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data.js'

const DocumentTemplate = ()=> {

    describe('[TS18] Document Template Management', function(){

        // Page Definitions
        const DocTempList = new DocumentTemplateListing()
        const DocTempDtl = new DocumentTemplateDetail()

        it('[TC01] Create New Document Template Item', ()=> {

            // Navigate to Listing Form
            cy.visit('/admin/documentTemplateList')
            cy.wait(3000)
        
            // Click Create New button
            DocTempList.createNew()

            // Fill out Detail form
            DocTempDtl.filloutDocumentTemplateDetail({
                TemplateName : data.DocumentTemplateDetail.TemplateName,
                TemplateCode : data.DocumentTemplateDetail.TemplateCode,
                Status : data.DocumentTemplateDetail.Status,
                TemplateDocument : data.DocumentTemplateDetail.TemplateDocument,
                Remark : data.DocumentTemplateDetail.Remark
            })
            cy.wait(3000)

            // Save form
            DocTempDtl.save()
        })

        it('[TC02] Verify Document Template Listing Search Filters', ()=> {

            // Navigate to Listing Form
            cy.visit('/admin/documentTemplateList')
            cy.wait(5000)
        
            // Fill out filters
            DocTempList.fillOutFilters({
                templateName : data.DocumentTemplateListing.Filters.templateName,
                status : data.DocumentTemplateListing.Filters.status
            })

            // Verify listing
            DocTempList.verifyDocTemplateList(data.DocumentTemplateListing.documentTemplateList)
        })

        it('[TC03] Update Document Template Item', ()=> {

            // Navigate to Listing Form
            cy.visit('/admin/documentTemplateList')
            cy.wait(3000)
        
            // Fill out filters
            DocTempList.fillOutFilters({
                templateName : data.DocumentTemplateListing.Filters.templateName,
                status : data.DocumentTemplateListing.Filters.status
            })

            // Click Item
            DocTempList.clickTemplateNameLink(data.DocumentTemplateListing.templateNameLink)
            
            // Update Detail form
            DocTempDtl.updateDocumentTemplateDetail({
                TemplateName : data.UpdatedDocumentTemplateDetail.TemplateName,
                TemplateCode : data.UpdatedDocumentTemplateDetail.TemplateCode,
                Status : data.UpdatedDocumentTemplateDetail.Status,
                TemplateDocument : data.UpdatedDocumentTemplateDetail.TemplateDocument,
                Remark : data.UpdatedDocumentTemplateDetail.Remark
            })

            // Save form
            DocTempDtl.save()
        })

        it('[TC04] Download Document Template Item', ()=> {

            // Navigate to Listing Form
            cy.visit('/admin/documentTemplateList')
            cy.wait(3000)
        
            // Click Download Link of Template Item
            DocTempList.clickDownloadLink(data.DocumentTemplateListing.downloadLink)
        })

        it('[TC05] Delete Document Template Item', ()=> {

            // Navigate to Listing Form
            cy.visit('/admin/documentTemplateList')
            cy.wait(3000)

            // Fill out the filters
            DocTempList.fillOutFilters(data.DocumentTemplateListing.templateItem, "Active")
        
            // Tick Item checkbox
            DocTempList.selectTemplate(data.DocumentTemplateListing.templateItem)

            // Click Delete button
            //DocTempList.delete()
        })
    })
}

export default DocumentTemplate