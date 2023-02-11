/*****************************************************
 * FS#: FS-001
 * Test Scenario:Online Account Access Detail Form
 *
 * @author: mfaisal 
 *****************************************************/
// Import Pages
import OnlineAccountAccessDetail from '../../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-OnlineAccountAccess/OnlineAccountAccessDetail'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data.js'
import login from '../../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const OnlineAccountAccessDtl = new OnlineAccountAccessDetail()

describe('[FS-001] Online Account Access Detail form', function () {


    it('[TC01] FillOut Online Account Access Detail form and Cancel', function () {

        cy.visit('/admin/onlineAccountAccessDetails?id=5923d6f5-07e8-44fe-9fec-01afdce92070');
        cy.wait(5000)

        OnlineAccountAccessDtl.VerifyPageTitle(data.OnlineAccountAccessDetail.pageTitle)
        OnlineAccountAccessDtl.FillOutFormRemarks(data.OnlineAccountAccessDetail.Remarks)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.RemoveFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.cancel()

    })
    it('[TC02] FillOut Online Account Access Detail form and Save', function () {

        cy.visit('/admin/onlineAccountAccessDetails?id=5923d6f5-07e8-44fe-9fec-01afdce92070');
        cy.wait(5000)
        OnlineAccountAccessDtl.VerifyPageTitle(data.OnlineAccountAccessDetail.pageTitle)
        OnlineAccountAccessDtl.FillOutFormRemarks(data.OnlineAccountAccessDetail.Remarks)
        OnlineAccountAccessDtl.AddFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.RemoveFunction(data.OnlineAccountAccessDetail.FunctionName)
        OnlineAccountAccessDtl.save()
        OnlineAccountAccessDtl.VerifySaveNotification('Item have been saved successfully.')

    })

})