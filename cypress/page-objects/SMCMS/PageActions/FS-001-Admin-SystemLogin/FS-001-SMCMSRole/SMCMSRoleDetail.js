import elems_SMCMSRoleDetail from '../../../Elements/Admin/FS001_Admin-SystemLogin/SMCMSRoleDetail'
import elems_PageHeader from '../../../../SMCMS/Elements/Common/PageHeader'
import elems_Picker from '../../../../SMCMS/Elements/Common/Picker.js'

class SMCMSRoleDetail {

    /*****************************************************
     * Method: fillOutSmcmsRoleDetail
     * Description: Fills-out SMCMS Role Detail Form
     *
     * @param {string} roleName Role Name
     * @param {string} remark Remark
    *****************************************************/
     fillOutSmcmsRoleDetail({roleName, remark}){

        // Enter Role Name
        if(roleName !== undefined){
            cy.xpath(elems_SMCMSRoleDetail.TXT_ROLENAME).clear()
            cy.EnterText(elems_SMCMSRoleDetail.TXT_ROLENAME, roleName)
        }
        
        // Enter Remark
        if(remark !== undefined){
            cy.xpath(elems_SMCMSRoleDetail.TXTAREA_REMARK).clear()
            cy.EnterText(elems_SMCMSRoleDetail.TXTAREA_REMARK, remark)
        }

        // Error Handling
        if( roleName === undefined 
            && remark === undefined
        ){
            throw new Error("SMCMSRoleDetail.fillOutSmcmsRoleDetail Error!!.\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: fillOutFunctionsFilter
     * Description: Fills-out SMCMS Role Detail Form - Functions Listing Filters
     *
     * @param {string} functionName Function Name
    *****************************************************/
     fillOutFunctionsFilter(functionName){
        
        // Enter Function Name
        if(functionName !== undefined){
            cy.EnterText(elems_SMCMSRoleDetail.Functions.TXT_FUNCTIONNAME, functionName)
        }

        // Error Handling
        if(functionName === undefined){
            cy.xpath(elems_SMCMSRoleDetail.Functions.TXT_FUNCTIONNAME).clear()
        }

        cy.Click(elems_SMCMSRoleDetail.Functions.BTN_SEARCH)
    }

    /*****************************************************
     * Method: addFunction
     * Description: Adds Item to Functions Listing
     *
     * @param {string} addFunctionName Function Name Array/Item
    *****************************************************/
     addFunction(addFunctionName){

        // Click Add Function button
        cy.Click(elems_SMCMSRoleDetail.Functions.BTN_ADDFUNCTION)
        cy.wait(3000)
        

                // Enter Filter
                cy.xpath(elems_Picker.TXT_ITEM).clear()
                cy.EnterText(elems_Picker.TXT_ITEM, addFunctionName)
                cy.Click(elems_SMCMSRoleDetail.BTN_SEARCHFILTER)
                
                // Select Item in Listing
                cy.SelectTableItem(
                    elems_Picker.TBL_PICKERITEMS,
                    'Function Name', addFunctionName
                )                
            

            // Add Items to Listing
            cy.Click(elems_Picker.BTN_SELECT)
    
        
    }

    /*****************************************************
     * Method: removeFunction
     * Description: Remove Item from Functions Listing
     *
     * @param {string} removeFunctionName Function Name Item/Array
    *****************************************************/
     removeFunction(removeFunctionName){

        // Select Item/s from listing
                cy.SelectTableItem(
                    elems_SMCMSRoleDetail.Functions.TBL_FUNCTIONS,
                    'Function Name', removeFunctionName
                )
        
        // Click Remove Function button
        cy.Click(elems_SMCMSRoleDetail.Functions.BTN_REMOVEFUNCTION)
    }
    
    /*****************************************************
     * Method: verifyFunctionsList
     * Description: Verifies Functions Listing
     *
     * @param {string} functionsList Functions Listing Array
    *****************************************************/
     verifyFunctionsList(functionsList){
            cy.VerifyTableEntry(
                elems_SMCMSRoleDetail.Functions.TBL_FUNCTIONS,
                'Function Name', functionsList,
                
            )
        
    }

    /*****************************************************
     * Method: fillOutReportsFilter
     * Description: Fills-out SMCMS Role Detail Form - Reports Listing Filters
     *
     * @param {string} reportName Report Name
    *****************************************************/
     fillOutReportsFilter(reportName){
        
        // Enter Report Name
        if(reportName !== undefined){
            cy.EnterText(elems_SMCMSRoleDetail.Reports.TXT_REPORTNAME, reportName)
        }

        // Error Handling
        if(reportName === undefined){
            cy.xpath(elems_SMCMSRoleDetail.Reports.TXT_REPORTNAME).clear()
        }

        cy.Click(elems_SMCMSRoleDetail.Reports.BTN_SEARCH)
    }

    /*****************************************************
     * Method: addReport
     * Description: Adds Item to Reports Listing
     *
     * @param {string} addReportName Report Name Array/Item
    *****************************************************/
     addReport(addReportName){

        // Click Add Report button
        cy.Click(elems_SMCMSRoleDetail.Reports.BTN_ADDREPORT)
        
        // Add Report Name
  
           

                // Enter Filter
                cy.xpath(elems_Picker.TXT_ITEM).clear()
                cy.EnterText(elems_Picker.TXT_ITEM, addReportName)
                cy.Click(elems_SMCMSRoleDetail.BTN_SEARCHFILTER)
                

                // Select Item in Listing
                cy.SelectTableItem(
                    elems_Picker.TBL_PICKERITEMS,
                    'Report Name', addReportName
                )                
            

            // Add Item/s to Listing
            cy.Click(elems_Picker.BTN_SELECT)
    
        
    }

    /*****************************************************
     * Method: removeReport
     * Description: Remove Item from Reports Listing
     *
     * @param {string} removeReportName Report Name Array/Item
    *****************************************************/
     removeReport(removeReportName){

        // Select Item/s from listing
        if(removeReportName !== undefined){
           
                cy.SelectTableItem(
                    elems_SMCMSRoleDetail.Reports.TBL_REPORTS,
                    'Report Name', removeReportName
                )
            
        }
        
        // Click Remove Report button
        cy.Click(elems_SMCMSRoleDetail.Reports.BTN_REMOVEREPORT)
    }
    
    /*****************************************************
     * Method: verifyReports
     * Description: Verifies Reports Listing
     *
     * @param {string} reportsList Reports Listing Array
    *****************************************************/
     verifyReports(reportsList){

            cy.VerifyTableEntry(
                elems_SMCMSRoleDetail.Reports.TBL_REPORTS,
                'Report Name', reportsList,
                
            )
        
    }

    /*****************************************************
     * Method: save
     * Description: Save Form
    *****************************************************/
     save(){
        cy.Click(elems_SMCMSRoleDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS Role Listing')
    }

    /*****************************************************
     * Method: cancel
     * Description: Cancel Form
    *****************************************************/
     cancel(){
        cy.Click(elems_SMCMSRoleDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS Role Listing')
    }
}

export default SMCMSRoleDetail