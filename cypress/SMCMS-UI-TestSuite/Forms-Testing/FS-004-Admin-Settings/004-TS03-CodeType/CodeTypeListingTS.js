
import CodeTypeListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Type/CodeTypeListing'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS03] Page Action Code Type Listing form',function(){

it('[TC01] Verify title and Create new button functionality in Code Type Listing form', ()=> {

    //visit the web
    cy.visit('/admin/codeTypeList')

    //Verify page title
    CodeTypeListingForm.verifyPageTitle('Code Type Listing')

    //Click on create new button in code type listing form
    CodeTypeListingForm.CreateNew('Code Type Detail')
   
})

it('[TC02] Verify the functionality of Delete button in Code Type Listing', ()=> {
    //visit the web
    cy.visit('/admin/codeTypeList')

    //Filter by code type
    CodeTypeListingForm.codeSetMasterListingFilterbyCodeType(data.CodeTypeListing.codeType)

    //Click on delete button and verify delete notification in code type listing form
    CodeTypeListingForm.Delete(data.CodeTypeListing.codeType)

})

})