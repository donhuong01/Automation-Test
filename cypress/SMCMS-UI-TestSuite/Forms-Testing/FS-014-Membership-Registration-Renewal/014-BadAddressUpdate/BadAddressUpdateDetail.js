/*****************************************************
 * Page Function: Sample Script to Test Bad Address Update Detail Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import BadAddressUpdateDetail from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Bad Address Update/BadAddressUpdateDetail'
import BadAddressUpdateListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Bad Address Update/BadAddressUpdateListing'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import login from '../../../../fixtures/login'

// beforeEach(() => {

//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
// })


describe('[SP1-FS014] Bad Address Update Detail Form', function () {

    // Page Definitions
    const BadAddressDtl = new BadAddressUpdateDetail()
    const BadAddressList = new BadAddressUpdateListing()

    it('Updating and Deleting a Bad Address Update', function () {


            // Navigate to form
            cy.visit('/membership/badAddressUpdateList')

            BadAddressList.createNew()
            // Fill Out Form
            BadAddressDtl.filloutBadAddressUpdateDetail({
                batchId : data.BadAddressUpdateDetail.batchId,
                uploadFile : data.BadAddressUpdateDetail.uploadFile,
                status : data.BadAddressUpdateDetail.status
            })

            // Validate Form
            BadAddressDtl.validate()

            cy.wait(5000)

            // Upload Form
            //BadAddressDtl.upload()

            // Cancel Form
            //BadAddressDtl.cancel('Bad Address Update Detail')
      
    })
})
