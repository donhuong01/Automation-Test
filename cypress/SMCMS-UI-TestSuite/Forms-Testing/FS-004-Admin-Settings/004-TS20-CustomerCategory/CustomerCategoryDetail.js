/*****************************************************
 * Page Function: Sample Script to Test  Customer Category Detail form
 *
 * @author: rsampang
 *****************************************************/

//Import Pages
import CustomerCategoryDetail from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category/CustomerCategoryDetail'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS19] Customer Category Type Management', () => {
    //Page definition
    const CustomerCatDetail = new CustomerCategoryDetail()
    const CustomerCategoryNumber = data.CustomerCategoryDetail.CustomerCategoryNumber
    const Name = data.CustomerCategoryDetail.Name
    const BelongsUnder = data.CustomerCategoryDetail.BelongsUnder
    const CustomerCategoryType = data.CustomerCategoryDetail.CustomerCategoryType
    const D365ID = data.CustomerCategoryDetail.D365ID

    it('[TC01] Create New Customer Category Detail ', () => {

        // Visit Customer Category detail form
        cy.visit('/admin/customerCategoryDetail')
        cy.wait(3000)
        CustomerCatDetail.VerifyPageTitle()
        CustomerCatDetail.filloutCustomerCategoryDetail(CustomerCategoryNumber, Name, BelongsUnder, CustomerCategoryType, D365ID)
        CustomerCatDetail.Save()

    })
    it('[TC02] Cancel Customer Category Detail ', () => {

        // Visit Customer Cate Detail form
        cy.visit('/admin/customerCategoryDetail')
        cy.wait(3000)
        CustomerCatDetail.filloutCustomerCategoryDetail(CustomerCategoryNumber, Name, BelongsUnder, CustomerCategoryType, D365ID)
        CustomerCatDetail.Cancel()

    })


})