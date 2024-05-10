/*****************************************************
 * Page Function: Sample Script to Test SMCMS Role Detail Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import SMCMSRoleDetail from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSRole/SMCMSRoleDetail'
import SMCMSRoleListing from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSRole/SMCMSRoleListing'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data.js'


const SMCMSRole = () => {

// Page Definitions
const SmcmsRoleDtl = new SMCMSRoleDetail()
const SMCMSRoleList = new SMCMSRoleListing()

describe('[TS02] SMCMS Role Management', function () {


    const RoleName = data.SMCMSRoleDetail.roleName

    it('[TC01] Adding, updating and deleting a Role Name', function () {

        // Loop for dataset

            cy.visit('/admin/smcmsRoleList')

            SMCMSRoleList.createNew()

            // Fill out Form
            SmcmsRoleDtl.fillOutSmcmsRoleDetail({
                roleName : RoleName,
                remark : data.SMCMSRoleDetail.remark})

            // // Add Item/s to Functions Listing
            SmcmsRoleDtl.addFunction(data.SMCMSRoleDetail.Functions.addFunction)

            // // Verify Functions Listing
            SmcmsRoleDtl.verifyFunctionsList(data.SMCMSRoleDetail.Functions.addFunction)

            // // Filter Functions Listing
            SmcmsRoleDtl.fillOutFunctionsFilter(data.SMCMSRoleDetail.Functions.filter)

            // // Remove Item/s in Functions Listing
            SmcmsRoleDtl.fillOutFunctionsFilter() // Remove filter

            SmcmsRoleDtl.removeFunction(data.SMCMSRoleDetail.Functions.addFunction)

            // // Add Item/s to Functions Listing
            SmcmsRoleDtl.addFunction(data.SMCMSRoleDetail.Functions.addFunction)

            // // Add Item/s to Reports Listing
            SmcmsRoleDtl.addReport(data.SMCMSRoleDetail.Reports.addReport)

            // // Verify Reports Listing
            SmcmsRoleDtl.verifyReports(data.SMCMSRoleDetail.Reports.reportsList)
            
            // // Filter Reports Listing
            // SmcmsRoleDtl.fillOutReportsFilter(data.SMCMSRoleDetail.Reports.filter)

            // // Remove Item/s in Reports Listing
            // SmcmsRoleDtl.fillOutReportsFilter() // Remove filter
            SmcmsRoleDtl.removeReport(data.SMCMSRoleDetail.Reports.removeReport)

            // Add Item/s to Reports Listing
            SmcmsRoleDtl.addReport(data.SMCMSRoleDetail.Reports.addReport)

            // Save Form
            SmcmsRoleDtl.save() // FUNCTIONALITY NOT WORKING IN QA SITE

             // Fill out filter
             SMCMSRoleList.fillOutFilters(RoleName)

             cy.wait(3000)

             // Verify Listing
             //SMCMSRoleList.verifySmcmsRoleList(RoleName)
 
             // Tick checkbox beside item
             cy.Click('//div[@class="k-widget k-grid"]//table//input[1]')
             //SMCMSRoleList.selectRoleName(RoleName)
 
             // Click Role Name Link
             SMCMSRoleList.clickRoleNameLink(RoleName)
 
             // Fill out Form
             SmcmsRoleDtl.fillOutSmcmsRoleDetail({
                 roleName : data.SMCMSRoleDetail.UpdateRoleName,
                 remark : data.SMCMSRoleDetail.UpdateRemark})
 
             // Save Form
             SmcmsRoleDtl.save() // FUNCTIONALITY NOT WORKING IN QA SITE
 
 
              // Fill out filter
              SMCMSRoleList.fillOutFilters(data.SMCMSRoleDetail.UpdateRoleName)
 
              // Verify Listing
              //SMCMSRoleList.verifySmcmsRoleList(data.SMCMSRoleDetail.UpdateRoleName)


        }) 


    it('[TC02] Updating and cancelling a Role Name', function () {
       

            cy.visit('/admin/smcmsRoleList')

            // Fill out filter
            SMCMSRoleList.fillOutFilters(data.SMCMSRoleDetail.UpdateRoleName)
            cy.wait(4000)
            // Verify Listing
           // SMCMSRoleList.verifySmcmsRoleList(data.SMCMSRoleDetail.UpdateRoleName)

            // Tick checkbox beside item
            cy.Click('//div[@class="k-widget k-grid"]//table//input[1]')
            //SMCMSRoleList.selectRoleName(data.SMCMSRoleDetail.UpdateRoleName)

            // Click Role Name Link
            SMCMSRoleList.clickRoleNameLink(data.SMCMSRoleDetail.UpdateRoleName)

            // Fill out Form
            SmcmsRoleDtl.fillOutSmcmsRoleDetail({
                roleName : data.SMCMSRoleDetail.UpdateRoleName,
                remark : data.SMCMSRoleDetail.UpdateRemark})

            // Save Form
            SmcmsRoleDtl.cancel() // FUNCTIONALITY NOT WORKING IN QA SITE



    })

    it('[TC03] Delete newly created Role Name', function () {
       

            cy.visit('/admin/smcmsRoleList')

            // Fill out filter
            SMCMSRoleList.fillOutFilters(data.SMCMSRoleDetail.UpdateRoleName)
            cy.wait(4000)
            // Verify Listing
            //SMCMSRoleList.verifySmcmsRoleList(data.SMCMSRoleDetail.UpdateRoleName)

            // Tick checkbox beside item
            cy.Click('//div[@class="k-widget k-grid"]//table//input[1]')
            //SMCMSRoleList.selectRoleName(data.SMCMSRoleDetail.UpdateRoleName)

            //Click delete button
            SMCMSRoleList.delete()

            cy.wait(5000)

            //Click Yes button
            // SMCMSRoleList.ClickYesInDeletePopUp()




    })

})

}

export default SMCMSRole