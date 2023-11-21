/*****************************************************
 * Page Function: End to End script
 *
 * @author: rsampang
 *****************************************************/

//Import Pages
import CustomerCategoryDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category/CustomerCategoryDetail'
import CustomerCategoryListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category/CustomerCategoryListing'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

const CustomerCategory = () => {

    describe('[TS20] Customer Category Management', () => {
        //Page definition
        const CustomerCatDetail = new CustomerCategoryDetail()
        const CustomerCatListing = new CustomerCategoryListing()

        // const CustomerCategoryNumber = data.CustomerCategoryDetail.CustomerCategoryNumber
        const Name = data.CustomerCategoryDetail.Name
        const BelongsUnder = data.CustomerCategoryDetail.BelongsUnder
        const CustomerCategoryType = data.CustomerCategoryDetail.CustomerCategoryType
        const D365ID = data.CustomerCategoryDetail.D365ID

        it('[TC01] Create New Customer Category ', () => {
            cy.visit('/admin/customerCategoryListing', { timeout: 15000 })
            CustomerCatListing.VerifyPageTitle()
            CustomerCatListing.CreateNew()
            CustomerCatDetail.VerifyPageTitle()
            CustomerCatDetail.filloutCustomerCategoryDetail(Name, BelongsUnder, CustomerCategoryType, D365ID)
            CustomerCatDetail.Save()
            cy.wait(5000)
            CustomerCatListing.FillOutFilters(Name)

        })

        it('[TC02] Update and save Customer Category Detail form  ', () => {
            cy.visit('/admin/customerCategoryListing')
            cy.wait(5000)
            CustomerCatListing.FillOutFilters(Name)

            CustomerCatListing.UpdatingItem(Name, data.CustomerCategoryListing.D365ID)
            // cy.wait(5000)
            CustomerCatDetail.UpdateCustomerCategoryDetail({
                Name: data.UpdateDetail.Name,
                BelongsUnder: data.UpdateDetail.BelongsUnder,
                CustomerCategoryType: data.UpdateDetail.CustomerCategoryType,
                D365ID: data.UpdateDetail.D365ID
            })
            CustomerCatDetail.Save()

        })
        it('[TC03] Deleting newly created Customer Category  ', () => {
            cy.visit('/admin/customerCategoryListing')
            cy.wait(5000)
            CustomerCatListing.FilterAndClickItem(data.UpdateDetail.Name)
            //CustomerCatListing.ClickDelete(data.DeleteListing.CustomerCategoryName, data.DeleteListing.D365ID)
            // CustomerCatListing.ClickDeleteInDeleteConfirmationPopup()
            // CustomerCatListing.ValidateDeletedItem(Name, D365ID)

            // CustomerCatListing.ClickDelete(data.CustomerCategoryListing.CustomerCategoryName,data.CustomerCategoryListing.D365ID)
            // CustomerCatListing.ClickDeleteInDeleteConfirmationPopup()
            // // CustomerCatListing.FillOutFilters({
            //     CustomerCategoryName: data.CustomerCategoryListing.CustomerCategoryName
            // })
            // CustomerCatListing.FillOutFilters({
            //     CustomerCategoryName: data.CustomerCategoryListing.CustomerCategoryName
            // })
            // CustomerCatListing.ClickDelete({
            //     CustomerCategoryName: data.CustomerCategoryListing.CustomerCategoryName
            // })
            // CustomerCatListing.ClickDeleteInDeleteConfirmationPopup()


        })

    })

}
export default CustomerCategory