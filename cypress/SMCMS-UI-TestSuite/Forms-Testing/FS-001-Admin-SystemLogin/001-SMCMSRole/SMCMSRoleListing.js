/*****************************************************
 * Page Function: Sample Script to Test SMCMS Role Listing Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import SMCMSRoleListing from '../../../../page-objects/SMCMS/PageActions/Admin/FS001_Admin-SystemLogin/SMCMSRoleListing.js'
import data from '../../../../fixtures/data.js'
import data from '../../../../'

describe('[TS04] SMCMS Role Listing', function () {

    // Page Definitions
    const SmcmsRoleList = new SMCMSRoleListing()

    it('[TC01] Test SMCMS Role Listing ', function () {
        
        // Go through every listed test data collection from data.js starting from Filter to RoleNameLink
        data.forEach( data => {

            // Navigate to Form
            cy.visit('https://qa-smcms.safra.sg/admin/smcmsRoleList')
            cy.wait(3000)

            // Fill out filter
            SmcmsRoleList.fillOutFilters(data.SmcmsRoleListing.Filter.role)

            // Verify Listing
            SmcmsRoleList.verifySmcmsRoleList(data.SmcmsRoleListing.roleNames)

            // Tick checkbox beside item
            SmcmsRoleList.selectRoleName(data.SmcmsRoleListing.roleNameItem)

            // TICK ITEM CHECKBOX FOR DELETE BUTTON TO BE ENABLED
            // SmcmsRoleList.delete()

            // Click Role Name Link
            SmcmsRoleList.clickRoleNameLink(data.SmcmsRoleListing.roleNameLink)
        })

        // SmcmsRoleList.createNew()
    })

    it('[TC02] Search Invalid data in the list ', function () {
        
        // Go through every listed test data collection from data.js starting from Filter to RoleNameLink
        data.forEach( data => {

            // Navigate to SMCMS Role Form
            cy.visit('https://qa-smcms.safra.sg/admin/smcmsRoleList')
            cy.wait(3000)

            // Fill out filter
            SmcmsRoleList.fillOutFilters('Test data')

            // Verify Listing
            // SmcmsRoleList.verifySmcmsRoleList(data.SmcmsRoleListing.roleNames)

            // // Tick checkbox beside item
            SmcmsRoleList.selectRoleName('Test data')

            // TICK ITEM CHECKBOX FOR DELETE BUTTON TO BE ENABLED
            SmcmsRoleList.delete()

            //Click Yes button
            SmcmsRoleList.ClickYesInDeletePopUp()

            // Click Role Name Link
           // SmcmsRoleList.clickRoleNameLink(data.SmcmsRoleListing.roleNameLink)
        })

    
    })

    it('[TC03] Search role name in the list and delete the role ', function () {
        
        // Go through every listed test data collection from data.js starting from Filter to RoleNameLink
        data.forEach( data => {

            // Navigate to SMCMS Role Form
            cy.visit('https://qa-smcms.safra.sg/admin/smcmsRoleList')
            cy.wait(3000)

            // Fill out filter
            SmcmsRoleList.fillOutFilters('Sample Role')

            // Verify Listing
            // SmcmsRoleList.verifySmcmsRoleList(data.SmcmsRoleListing.roleNames)

            // // Tick checkbox beside item
            SmcmsRoleList.selectRoleName('Sample Role')

            // TICK ITEM CHECKBOX FOR DELETE BUTTON TO BE ENABLED
            SmcmsRoleList.delete()

            //Click Yes button
            SmcmsRoleList.ClickYesInDeletePopUp()

            // Click Role Name Link
           // SmcmsRoleList.clickRoleNameLink(data.SmcmsRoleListing.roleNameLink)
        })

    
    })
})