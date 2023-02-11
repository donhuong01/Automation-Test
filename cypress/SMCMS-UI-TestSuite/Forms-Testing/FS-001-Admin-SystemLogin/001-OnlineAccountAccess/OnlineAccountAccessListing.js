/*****************************************************
 * FS#: FS-001
 * Test Scenario:Online Account Access Detail Form
 *
 * @author: mfaisal
 *****************************************************/
// Import Pages
import OnlineAccountAccessListing from '../../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-OnlineAccountAccess/OnlineAccountAccessListing'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data'
const OnlineAccountAccessLst = new OnlineAccountAccessListing()

describe('[FS001] Online Account Access Listing form', function () {


    it('[TC01] Verify Title and item in the listing form', function () {

        cy.visit('/admin/onlineAccountAccessList');
        cy.wait(5000)

        OnlineAccountAccessLst.VerifyPageTitle()
        //OnlineAccountAccessLst.VerifyUpdatedDate() //Data needs to be changed each time the item is updated
        OnlineAccountAccessLst.VerifyTableLink(data.OnlineAccountAccessListing.MmebershipType)
})
})