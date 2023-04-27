/*****************************************************
 * FS#: FS-001
 * Test Scenario:Online Account Access Detail Form
 *
 * @author: fshahzada
 *****************************************************/
// Import Pages
import OnlineAccountAccessListing from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-OnlineAccountAccess/OnlineAccountAccessListing'
import OnlineAccountAccessDetail from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-OnlineAccountAccess/OnlineAccountAccessDetail'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data'

const OnlineAccountAccessDtl = new OnlineAccountAccessDetail()
const OnlineAccountAccessLst = new OnlineAccountAccessListing()

const OnlineAccountAccess = () => {

describe('[TS01] Online Account Access Management', function () {


    it('[TC01] Updating an Online Account Access and checking filter functionality', function () {

        cy.visit('/admin/onlineAccountAccessList');
        cy.wait(5000)

        OnlineAccountAccessDtl.VerifyPageTitle('Online Account Access Listing')
        //OnlineAccountAccessLst.VerifyUpdatedDate() //Data needs to be changed each time the item is updated
        OnlineAccountAccessLst.VerifyTableLink(data.OnlineAccountAccessListing.MmebershipType)
        OnlineAccountAccessDtl.FillOutFormRemarks(data.OnlineAccountAccessDetail.Remarks)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.RemoveFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.save()
        OnlineAccountAccessDtl.VerifySaveNotification()
    })

    it('[TC02] Updating an Online Account Access and cancelling', function () {

        cy.visit('/admin/onlineAccountAccessList');
        cy.wait(5000)

        OnlineAccountAccessDtl.VerifyPageTitle('Online Account Access Listing')
        OnlineAccountAccessLst.VerifyTableLink(data.OnlineAccountAccessListing.MmebershipType)
        OnlineAccountAccessDtl.FillOutFormRemarks(data.OnlineAccountAccessDetail.Remarks)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.RemoveFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.cancel()

})

})

}

export default OnlineAccountAccess