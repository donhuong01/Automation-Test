import CustomerCategoryTypeListing from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Customer Category Type/CustomerCategoryTypeListing'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/'


describe('[TS19] Customer Category Type Listing', function () {

    const customerCategory = new CustomerCategoryTypeListing
    const CustomerCategory = data.CustomerCategoryTypeDetail.Name


    it('[TC01] Customer Category Type Listing Form Create New Customer Category', function () {
        cy.visit('/admin/customerCategoryTypeListing')
        cy.wait(2000)
        //Verify page title 
        customerCategory.verifyPageTitle('Customer Category Type Listing')

        //Search and select Customer Category
        customerCategory.SearchAndSelectCustomerCategory(CustomerCategory)

        //Click on Create New button
        customerCategory.CreateNew()

        //Verify page title 
        customerCategory.verifyPageTitle('Customer Category Type Detail')

    })

    it('[TC02] Customer Category Type Listing Form Delete Customer Category click cancel button in popup', function () {
        cy.visit('/admin/customerCategoryTypeListing')
        cy.wait(2000)
        //Verify page title 
        customerCategory.verifyPageTitle('Customer Category Type Listing')

        //Search and select Customer Category
        customerCategory.SearchAndSelectCustomerCategory(CustomerCategory)

        //Click on Delete button
        customerCategory.Delete()

        //Click on Cancel in Confirmation Popup
        customerCategory.CancelConfirmationPopup()

    })

    it('[TC03] Customer Category Type Listing Form Delete Customer Category click delete button in popup', function () {
        cy.visit('/admin/customerCategoryTypeListing')
        cy.wait(2000)
        //Verify page title 
        customerCategory.verifyPageTitle('Customer Category Type Listing')

        //Search and select Customer Category
        customerCategory.SearchAndSelectCustomerCategory(CustomerCategory)

        //Click on Delete Button
        customerCategory.Delete()

        //Click on Delete in Confirmation Popup
        customerCategory.DeleteConfirmationPopup()

        //Verify Delete Success Notification
        customerCategory.VerifySuccessNotification()


    })


})