import CodeTypeDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Type/CodeTypeDetails'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'
import CodeTypeListingForm from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Type/CodeTypeListing'

const CodeType = ()=> {
    
describe('[TS03] Code Type Management',function(){

    it('[TC01] Verify title and Create new button functionality in Code Type Listing form', ()=> {

        //visit the web
        cy.visit('/admin/codeTypeList')
        //cy.wait(5000)
    
        //Verify page title
        CodeTypeListingForm.verifyPageTitle('Code Type Listing')
    
        //Click on create new button in code type listing form
        CodeTypeListingForm.CreateNew('Code Type Detail')
       
    })

    it('[TC02] Verify title, fill out and save Code Type Detail form ', () => {

        //visit the web
        cy.visit('/admin/codeTypeList')

        //Click on create new button in code type listing form
        CodeTypeListingForm.CreateNew('Code Type Detail')

        //Verify page title
        CodeTypeDetail.verifyPageTitle('Code Type Detail')

        //Fill out name field in code type details form
        CodeTypeDetail.FillOutNameField(data.CodeTypeDetail.Name)

        //Fill out the code type details form and click cancel button 
        // CodeTypeDetail.CancelBelongUnder(data.CodeTypeDetail.belongUnder)

        //Fill out the code type details form and select code type
        CodeTypeDetail.SearchBelongUnder(data.CodeTypeDetail.belongUnder)

        //Save the code type details form
        CodeTypeDetail.Save()

        //cy.wait(2000) 

    })

    it('[TC03] Verify deleting the newly created item in Code Type Listing', ()=> {
        //visit the web
        cy.visit('/admin/codeTypeList')
        //cy.wait(7000)

        cy.visit('/admin/codeTypeList')
        //cy.wait(5000)
        
        //Filter by code type
        CodeTypeListingForm.codeSetMasterListingFilterbyCodeType(data.CodeTypeDetail.Name)
    
        //Click on delete button and verify delete notification in code type listing form
        //CodeTypeListingForm.Delete(data.CodeTypeDetail.Name)
    
    })
})
}

export default CodeType