/*****************************************************
 * Page Function: Sample Script to Test Customer Category Type Detail
 * @author: mfaisal
 *****************************************************/

 //Import Pages
 import CustomerCategoryTypeDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category Type/CustomerCategoryTypeDetail'
 import CustomerCategoryTypeListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category Type/CustomerCategoryTypeListing'
 import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

 const CustomerCategoryType = ()=> {
    
describe('[TS19] Customer Category Type Management', () =>{

//Page definition
const CustomCatTypeDetail = new CustomerCategoryTypeDetail()
const CustomCatTypeListing = new CustomerCategoryTypeListing()
// afterEach(() => {

   
//     // Set local storage for UAT Enviroment
//     cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    
// })

const Name = data.CustomerCategoryTypeDetail.Name
const BelongsUnder = data.CustomerCategoryTypeDetail.BelongUnder
const UpdatedName = data.CustomerCategoryTypeDetail.UpdatedName
const UpdatedBelongsUnder = data.CustomerCategoryTypeDetail.UpdatedBelongsUnder


it('[TC01] Click on Create New button and Fill Out Detail Form and Save', () =>{
    cy.visit('/admin/customerCategoryTypeListing')
    cy.wait(5000)
    CustomCatTypeListing.verifyPageTitle('Customer Category Type Listing')
    CustomCatTypeListing.CreateNew()
    CustomCatTypeDetail.verifyFormTitle()
    CustomCatTypeDetail.fillOutForm(Name,BelongsUnder)
    CustomCatTypeDetail.saveForm()
    cy.wait(2000)
    CustomCatTypeDetail.VerifyNotificationMsg('Record has been saved successfully.')
    })        

it('[TC02] Verify if the newly created item is availble in the Listing Form', () =>{
    cy.visit('/admin/customerCategoryTypeListing')
     cy.wait(5000)
    CustomCatTypeListing.SearchAndSelectCustomerCategory(Name)
    }) 

it('[TC03] Update the newly created item and save', () =>{
    cy.visit('/admin/customerCategoryTypeListing')
     cy.wait(5000)
    CustomCatTypeListing.ClickTableItem(Name)

    CustomCatTypeDetail.fillOutForm(UpdatedName,UpdatedBelongsUnder)
    CustomCatTypeDetail.saveForm()
    // cy.wait(5000)
    CustomCatTypeDetail.VerifyNotificationMsg('Record has been saved successfully.')
    })

it('[TC04] Verify if the updated item is available in the Listing Form', () =>{
    cy.visit('/admin/customerCategoryTypeListing')
    // cy.wait(5000)
    CustomCatTypeListing.SearchAndSelectCustomerCategory(UpdatedName)
    })

it('[TC05] Delete the updated Item', () =>{
    cy.visit('/admin/customerCategoryTypeListing')
    // cy.wait(5000)
    // CustomCatTypeListing.SearchAndSelectCustomerCategory(UpdatedName)
    // CustomCatTypeListing.Delete()
    // CustomCatTypeListing.DeleteConfirmationPopup()
    // CustomCatTypeListing.VerifySuccessNotification()
    CustomCatTypeListing.SearchAndSelectCustomerCategory(UpdatedName)
    // CustomCatTypeListing.Delete()
    // CustomCatTypeListing.DeleteConfirmationPopup()

    // CustomCatTypeDetail.VerifyNotificationMsg('Record has been deleted successfully.')
    })
 })
 }
 export default CustomerCategoryType