/*****************************************************
 * Page Function: Sample Script to Test Customer Category Type Detail
 * @author: mfaisal
 *****************************************************/

 //Import Pages
 import CustomerCategoryTypeDetail from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category Type/CustomerCategoryTypeDetail'
 import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS19] Customer Category Type Detail ', () =>{

//Page definition
const CustomCatTypeDetail = new CustomerCategoryTypeDetail()

const Name = data.CustomerCategoryTypeDetail.Name
const BelongsUnder = data.CustomerCategoryTypeDetail.BelongUnder

it('[TC01] Verify form title', () =>{
    cy.visit('/admin/customerCategoryTypeDetail')
    cy.wait(5000)
    CustomCatTypeDetail.verifyFormTitle()
     })

it('[TC02] Fill out the form and save', () =>{
    cy.visit('/admin/customerCategoryTypeDetail')
    cy.wait(5000)
    CustomCatTypeDetail.fillOutForm(Name,BelongsUnder)
    CustomCatTypeDetail.saveForm()
    })        

it('[TC03] Fill out the form and cancel', () =>{
    cy.visit('/admin/customerCategoryTypeDetail')
    cy.wait(5000)
    CustomCatTypeDetail.fillOutForm(Name,BelongsUnder)
    CustomCatTypeDetail.cancelForm()
    }) 

 })