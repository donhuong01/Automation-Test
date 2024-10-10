import elems_SMCMSRoleListing from '../../../../SMCMS/Elements/Admin/FS001_Admin-SystemLogin/SMCMSRoleListing'
import elems_PageHeader from '../../../../../page-objects/SMCMS/Elements/Common/PageHeader'

class SMCMSRoleListing {

    /*****************************************************
     * Method: fillOutFilters
     * Description: Fills Out Filter Fields
     *
     * @param {string} role Role
     *****************************************************/
     fillOutFilters(role){

        // Enter Role
        if(role !== undefined){
            cy.EnterText(elems_SMCMSRoleListing.TXT_ROLE, role)

            // Click the Search Filters button
            cy.Click(elems_SMCMSRoleListing.BTN_SEARCH)
        }

        // Error Handling
        if(role === undefined){
            throw new Error("SMCMSRoleListing.fillOutFilters Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: verifySmcmsRoleList
     * Description: Verfies SMCMS Role Listing Table
     *
     * @param {string} roleNames Role Names Array
     *****************************************************/
     verifySmcmsRoleList(roleNames){
      
            cy.VerifyTableEntry(
                elems_SMCMSRoleListing.TBL_ROLENAME,
                // 'Last Updated Date', data.lastUpdatedDate,
                'Role Name', roleNames
            )
    
    }

    /*****************************************************
     * Method: selectRoleName
     * Description: Selects SMCMS Role Listing Item
     *
     * @param {string} roleNameItem Role Name Item
     *****************************************************/
     selectRoleName(roleNameItem){

        // Ticks Checkbox beside item
        if(roleNameItem !== undefined){
            cy.SelectTableItem(
                elems_SMCMSRoleListing.TBL_ROLENAME,
                'Role Name', roleNameItem
            )
        }

        // Error Handling
        if(roleNameItem === undefined){
            throw new Error("SMCMSRoleListing.selectRoleName Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: clickRoleNameLink
     * Description: Clicks SMCMS Role Listing Item Link
     *
     * @param {string} roleNameLink SMCMS Role Item Link
     *****************************************************/
     clickRoleNameLink(roleNameLink){

        // Click item link
        if(roleNameLink !== undefined){
            cy.Click('//div[@class="k-widget k-grid"]//table//a')
            
            // Verify Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS Role Detail')
        }

        // Error Handling
        if(roleNameLink === undefined){
            throw new Error("SMCMSRoleListing.clickRoleNameLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New SMCMS Role
     *****************************************************/
     createNew(){
        cy.Click(elems_SMCMSRoleListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS Role Detail')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete SMCMS Role Item
     *****************************************************/
     delete(){
        cy.Click(elems_SMCMSRoleListing.BTN_DELETE)
      
    }
    /*****************************************************
     * Method: ClickYesInDeletePopUp
     * Description: Click Yes button in delete popup
     *****************************************************/
     ClickYesInDeletePopUp(){
        
        cy.Click(elems_SMCMSRoleListing.POPUP_YES)
    }
}

export default  SMCMSRoleListing

