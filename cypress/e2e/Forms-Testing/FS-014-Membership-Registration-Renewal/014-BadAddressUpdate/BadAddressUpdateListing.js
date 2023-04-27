/*****************************************************
 * Page Function: Sample Script to Test Bad Address Update Listing Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import BadAddressUpdateListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Bad Address Update/BadAddressUpdateListing'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import login from '../../../../fixtures/login'

// beforeEach(() => {

//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
// })

describe('Bad Address Update Listing Form', function () {

    // Page Definitions
    const BadAddUpdList = new BadAddressUpdateListing()

    it('Creating a Bad Address Update', function () {

            // Navigate to Form
            cy.visit('/membership/badAddressUpdateList')
       
            // // Verify Listing
             BadAddUpdList.verifyBadAddressUpdateList('Validation Failed', 'BA-BR-1000038')

            // Click item link
            BadAddUpdList.clickBatchIdLink(data.BadAddressUpdateListing.batchId)
            cy.visit('/membership/badAddressUpdateList') // Return to form

            // Tick item checkbox
            BadAddUpdList.selectBatchId(data.BadAddressUpdateListing.batchIdItem)
            
            // ITEM MUST BE SELECTED BEFORE DELETE BUTTON IS ENABLED
            // Delete Item 
            //BadAddUpdList.delete()

            // Create New item
            BadAddUpdList.createNew()
        })

})
