import SMCMSUserListing from '../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSUser/SMCMSUserListing'
import data from '../../../../fixtures/Data_Module/FS-001-Admin-System-login/001-data'

describe('[TS01] SMCNS User Listing Form', () =>{
    //page definition
    const SMCMSUserList = new SMCMSUserListing()

    it('[TC01] Search filter functionality', ()=>{
        cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')
        const LoginEmail = data.clickLoginEmail.LoginEmail
        const Position = data.clickLoginEmail.Position
        const Status = data.clickLoginEmail.Status
        SMCMSUserList.FilloutFilters({LoginEmail,Position,Status})
        SMCMSUserList.SearchFiters()
        SMCMSUserList.loginEmailLink(data.clickLoginEmail)
    })
    it('[TC02] Disable Email functionality', ()=>{
        cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')
        SMCMSUserList.DisabledEmail(data.disabledemail) 
        cy.wait(3000) 
    })
    it('[TC03] Enable Email functionality', ()=>{
        cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')
        SMCMSUserList.EnabledEmail(data.enabledemail)
        cy.wait(3000) 
    })
})