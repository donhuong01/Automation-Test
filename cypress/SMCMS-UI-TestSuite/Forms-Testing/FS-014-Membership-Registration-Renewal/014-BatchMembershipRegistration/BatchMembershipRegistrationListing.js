/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Registration Listing Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationListing'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

describe('[TS13] Batch Membership Registration Listing form', function () {

 

    it('[TC01] Batch Membership Registration Listing form Filter by Batch ID ', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')
        
        BatchMembershipRegistrationListing.FilterByBatchID('0cd4aaaa-5f58-4018-2c2b-08da21d6382c')
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        BatchMembershipRegistrationListing.VerifyTableValue('Batch ID', '0cd4aaaa-5f58-4018-2c2b-08da21d6382c')

    })

    it('[TC02] Batch Membership Registration Listing form Filter by Batch Type', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')
        
        BatchMembershipRegistrationListing.FilterByBatchType('Membership')
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        BatchMembershipRegistrationListing.VerifyTableValue('Batch Type', 'Membership')

    })

    it('[TC03] Batch Membership Registration Listing form Filter by Batch ID and Batch Type ', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')

        BatchMembershipRegistrationListing.FilterByBatchID('28c462fe-040f-4b5d-2c29-08da21d6382c')
        BatchMembershipRegistrationListing.FilterByBatchType('Interest Group')
        BatchMembershipRegistrationListing.ClickSeacrhFilters()

        BatchMembershipRegistrationListing.VerifyTableValue('Batch ID', '28c462fe-040f-4b5d-2c29-08da21d6382c')
        BatchMembershipRegistrationListing.VerifyTableValue('Batch Type', 'Interest Group')

    })

    it('[TC04] Batch Membership Registration Listing form Click Create New ', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')
        
        BatchMembershipRegistrationListing.createNew('Batch Membership Registration Listing')
        cy.wait(5000)

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Detail Form')


    })
    it('[TC05] Batch Membership Registration Listing form Delete Record ', function () {

        cy.visit('/membership/batchMembershipRegistrationList')

        BatchMembershipRegistrationListing.verifyPageTitle('Batch Membership Registration Listing')

        // BatchMembershipRegistrationListing.FilterByBatchID('28c462fe-040f-4b5d-2c29-08da21d6382c')
        // BatchMembershipRegistrationListing.ClickSeacrhFilters()

        BatchMembershipRegistrationListing.DeleteTableEntry()

        BatchMembershipRegistrationListing.delete()

       
    })
})