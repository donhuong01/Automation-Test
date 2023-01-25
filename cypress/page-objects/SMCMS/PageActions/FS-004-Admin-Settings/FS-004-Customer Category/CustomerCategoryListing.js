import elems_CustomerCategoryListing from '../../../Elements/Admin/FS004_Admin-Settings/CustomerCategoryListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
class CustomerCategoryListingForm {

    /*****************************************************
     * Method: Form Title Verification
     * Description: This function Verifies the Form Title
     *
     *****************************************************/
     VerifyPageTitle()
     {
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE,"Customer Category Listing")

     }

    /*****************************************************
     * Method: Filters Functionality
     * Description: This function Verifies the fiter functionality 
     * @param {string} CustomerCategoryName catergory name
     * @param {string} CustomerCategoryNumber customer caterogy number
     * @param {string} CustomerCatergoryType customer category type  
     *****************************************************/
    
    FillOutFilters(CustomerCategoryName,CustomerCategoryNumber,CustomerCategoryType,D365ID)
    {
        if(CustomerCategoryName !== undefined){
            cy.xpath(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNAME).clear()
            cy.EnterText(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNAME, CustomerCategoryName)
        }
        if(CustomerCategoryNumber !==undefined){
            cy.xpath(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNUMBER).clear()
        cy.EnterText(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNUMBER, CustomerCategoryNumber)
        }
        if(CustomerCategoryType !==undefined){
            cy.xpath(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYTYPE).clear()
        cy.EnterText(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYTYPE, CustomerCategoryType)
        }
    //    if(CustomerCategoryName === undefined
    //     && CustomerCategoryNumber ===undefined
    //     && CustomerCategoryType === undefined
    //     && D365ID)
    //     {
    //         throw new Error("SourceChannelListing.Fillout Error!!./n\
    //                         Please provide at least one argument.")
    //     }
    cy.Click(elems_CustomerCategoryListing.BTN_SEARCH)
    cy.wait(7000)
    }
    FilterAndClickItem(CustomerCategoryName){
        cy.xpath(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNAME).clear()
        cy.EnterText(elems_CustomerCategoryListing.TXT_CUSTOMERCATEGORYNAME, CustomerCategoryName)
        cy.Click(elems_CustomerCategoryListing.BTN_SEARCH)
        cy.wait(7000)
        cy.Click(`//table[@role="presentation"]//a[text()="${CustomerCategoryName}"]//parent::td//preceding-sibling::td`)
    }

    /*****************************************************
     * Method:  ClickDelete
     * Description: This function Click on Delete Button
     *****************************************************/
    ClickDelete(CustomerCategoryName,D365ID){
            // cy.SelectTableItem(
            // elems_CustomerCategoryListing.TBL_CUSTOMERCATEGORYLISTING, 
            // 'Customer Category Name', CustomerCategoryName,
            // 'D365 ID', D365ID)
             cy.Click(elems_CustomerCategoryListing.BTN_DELETE)
            // }
    
            // ClickDeleteInDeleteConfirmationPopup()
        // {
            cy.Click(elems_Alerts.BTN_DELETEPOPUP)
        }
    
    /*****************************************************
     * Method: CreateNew
     * Description: This function click on Create New Button
     *****************************************************/
    CreateNew(){
        cy.Click(elems_CustomerCategoryListing.BTN_CREATENEW)
    }

    /*****************************************************
     * Method: ClickCancelInDeleteConfirmationPopup
     * Description: This function click on Cancel button in delete confirmation Popup
     *****************************************************/
    ClickCancelInDeleteConfirmationPopup()
    {
        cy.Click(elems_Alerts.BTN_Cancel)
    }

    /*****************************************************
     * Method: ClickDeleteInDeleteConfirmationPopup
     * Description: This function click on Delete button in delete confirmation Popup
     *****************************************************/
    ClickDeleteInDeleteConfirmationPopup()
    {
        cy.Click(elems_Alerts.BTN_DELETEPOPUP)
    }

    /*****************************************************
     * Method: Validate deleted item in the list
     * Description: This function Verifies the deleted item in the list
     * 
     * @param {string} CategoryName 
     * @param {string} D365ID  
     *****************************************************/
    ValidateDeletedItem(CategoryName,D365ID)
    {
        if(cy.SelectTableItem(
            elems_CustomerCategoryListing.TBL_CUSTOMERCATEGORYLISTING, 
            'Customer Category Name', CategoryName,
            'D365 ID', D365ID))
         {
            cy.log("ERROR DELETING THE ITEM")
         }  
         else
         {
            cy.log("ITEM IS DELETED")
            cy.VerifyElementText(elems_Alerts.DELETE_NOTIFICATION,'Record has been deleted successfully.')
         }
        

    }
    /*****************************************************
     * Method: UpdatingItem
     * Description: This function is to update data
     * 
     * @param {string} CustomerCategoryName
     * @param {string} D365ID  
     *****************************************************/

    UpdatingItem(CustomerCategoryName, D365ID){

        // cy.ClickTableLink(
        //     elems_CustomerCategoryListing.TBL_CUSTOMERCATEGORYLISTING , 
        //     'Customer Category Name', CustomerCategoryName,
        //     'D365 ID', D365ID)
        
        cy.Click(`//table[@role="presentation"]//a[text()="${CustomerCategoryName}"]`)
         }

}

export default CustomerCategoryListingForm