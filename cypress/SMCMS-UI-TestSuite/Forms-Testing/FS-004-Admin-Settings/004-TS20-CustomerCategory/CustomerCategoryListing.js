import CustomerCategoryListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category/CustomerCategoryListing'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS19] Customer Catergory Listing Form', function () {

    // const CustomerCategoryName = data.CustomerCategoryname
    const customercatlisting = new CustomerCategoryListingForm()

    it('[TC01] Fillout the search filters and search', function () {

        //Visit Customer Category Listing Form
        cy.visit('/admin/customerCategoryListing')

        customercatlisting.FillOutFilters({
            CustomerCategoryName: data.CustomerCategoryListing.CustomerCategoryName,
            // CustomerCategoryNumber: data.CustomerCategoryListing.CustomerCategoryNumber,
            // CustomerCategoryType: data.CustomerCategoryListing.CustomerCategoryType

        })
        cy.wait(3000)
        // customercatlisting.ClickDelete()
        // customercatlisting.ClickCancelInDeleteConfirmationPopup()

    })

    it('[TC02] Select and item and click Delete button', function () {

        //Visit Customer Category Listing Form
        cy.visit('/admin/customerCategoryListing')

        customercatlisting.ClickDelete(data.CustomerCategoryListing.CustomerCategoryName, data.CustomerCategoryListing.D365ID)
        customercatlisting.ClickDeleteInDeleteConfirmationPopup()
        // customercatlisting.ClickDeleteInDeleteConfirmationPopup()

    })

})