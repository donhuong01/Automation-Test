/*****************************************************
 * FS#: FS-XXX
 * Module: <Module Title>
 * Test Objective: <Enter Test Objective Here>
 *
 * @author: hstone
 *****************************************************/
// Import Forms
import elems_Login from '../../page-objects/SMCMS/Elements/Admin/FS001_Admin-SystemLogin/Login.js'
import elems_CustomerCreation from '../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCreation.js'
import elems_AnnouncementPortalNotificationDetail from '../../page-objects/SMCMS/Elements/Admin/FS004_Admin-Settings/AnnouncementPortalNotificationDetail.js'
import elems_DataRetentionSettings from '../../page-objects/SMCMS/Elements/Admin/FS004_Admin-Settings/DataRetentionSettings.js'
import elems_CodeSetMasterDetail from '../../page-objects/SMCMS/Elements/Admin/FS004_Admin-Settings/CodeSetMasterDetail.js'
import elems_SMCMSRoleDetail from '../../page-objects/SMCMS/Elements/Admin/FS001_Admin-SystemLogin/SMCMSRoleDetail.js'

describe('Command Usage Templates', function () {
    
    // Test Case Routine
    it('GetTestDataSet/UpdateTestData Usage', function () {

        // Gets all Objects in a DB Collection. One Collection is one DataSet
        cy.GetTestDataSet('Module00-TS001').then( ts001_01 => { 

            // Test Data Set Loop
            ts001_01.forEach( data => {

                // Test Scripts Here
                cy.DisplayDataDescription(data)
                cy.visit(Cypress.env('QA_ENVIRONMENT') + '/login')
                
                cy.EnterText(elems_Login.TXT_MEMBERID, data.memberId)
                cy.EnterText(elems_Login.TXT_PWD, data.password)

                // Updating Test Data for this test case
                cy.UpdateTestData('Module00-TS001', data._id, {
                    updateUsingObjId1: "testupdate", 
                    updateUsingObjId2: "testupdate"
                })

                // Updating Test Data for other test case
                cy.UpdateTestData('Module00-TS001', 'Label00', {
                    updateUsingLabel1: "testupdate", 
                    updateUsingLabel2: "testupdate"
                })
            })
        })
    })

    it('GetTestDataObject/UpdateTestData Usage', function () {
        
        // Gets a specific Object in a DB Collection. One object is Test Data 
        cy.GetTestDataObject('Module00-TS001', 'Label00').then( data => {

            // Test Scripts Here
            cy.DisplayDataDescription(data)
            cy.visit(Cypress.env('QA_ENVIRONMENT') + '/login')
            
            cy.EnterText(elems_Login.TXT_MEMBERID, data.memberId)
            cy.EnterText(elems_Login.TXT_PWD, data.password)

            // Updating Test Data for this test case
            cy.UpdateTestData('Module00-TS001', data._id, {
                updateUsingObjId1: "UpdateTest01", 
                updateUsingObjId2: "UpdateTest01"
            })

            // Updating Test Data for other test case
            cy.UpdateTestData('Module00-TS001', 'Label00', {
                updateUsingObjId1: "UpdateTest01", 
                updateUsingObjId2: "UpdateTest01"
            })

        })
    
    })

    it('Get Element Text Usage', function () {

        cy.visit(Cypress.env('QA_ENVIRONMENT') + '/login')
        cy.EnterText(elems_Login.TXT_MEMBERID, 'TEST')
        cy.GetElementText(elems_Login.TXT_MEMBERID).then(elementTextValue => {
            // Enter Test Scripts Here
            cy.log('Element Text: ' + elementTextValue)
        })
    })

    it('Sample System Generated Test Data', function () {
        cy.GetTestDataObject('Module00-TS001', 'Label00').then( ts001_02 => {
            
            let sysGenDataLabels = {
                SYS : 0,
                NAME: 1
            }

            let prefixes = ['SYS', 'NAME']
            cy.GenerateTextTestData(prefixes).then( SystemGenData => {
                // Test Scripts Here
                cy.log(SystemGenData[sysGenDataLabels.SYS])
                cy.log(SystemGenData[sysGenDataLabels.NAME])
                cy.log(SystemGenData)


                // Updating Test Data for other test case
                cy.UpdateTestData('Module00-TS001', 'Label00', {
                    updateUsingObjId1: SystemGenData[sysGenDataLabels.SYS], 
                    updateUsingObjId2: SystemGenData[sysGenDataLabels.NAME]
                })
            })
            
        })
    })

    it('Verify Element Text Usage', function () {

        cy.visit(Cypress.env('QA_ENVIRONMENT') + '/customercreation')
        cy.EnterText(elems_CustomerCreation.RegistrantInformation.TXT_NAME, 'TEST NAME')
        cy.VerifyElementText(elems_CustomerCreation.RegistrantInformation.TXT_NAME,'TEST NAME')

        cy.VerifyElementText(elems_CustomerCreation.RegistrantInformation.LBL_NRIC,'XXXXX345E')
        
        cy.SelectDropDownItem(elems_CustomerCreation.RegistrantInformation.DRP_GENDER, 'Male')
        cy.VerifyElementText(elems_CustomerCreation.RegistrantInformation.DRP_GENDER,'Male')
    })

    it('Login/Logout Sample Usage', function () {
        cy.LoginToSmcms('USER', 'PASS')
        cy.visit(Cypress.env('QA_ENVIRONMENT') + '/customercreation')
        cy.LogoutOfSmcms()
    })

    it('Select Date Sample Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/customercreation')
        cy.SelectDate(elems_CustomerCreation.RegistrantInformation.DATE_DATEOFBIRTH, '02-Dec-1993')
    })

    it('Verify Form Displayed Sample Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/customercreation')
        cy.VerifyFormDisplayed('Customer Creation')
    })

    it('Sample Date/Time Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/announcementportalnotificationdetailform')
        cy.SelectDateTime(elems_AnnouncementPortalNotificationDetail.DATE_PUBLISHDATE, '07-Dec-2015 01:05:01')
    })

    it('Sample VerifyFieldError Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/customercreation')
        cy.Click(elems_CustomerCreation.RegistrantInformation.TXT_NAME)
        cy.Click(elems_CustomerCreation.RegistrantInformation.DATE_DATEOFBIRTH)
        cy.Click(elems_CustomerCreation.RegistrantInformation.DRP_GENDER)
        cy.Click(elems_CustomerCreation.AddressInformation.MailingAddress.TXT_POSTALCODE)
        cy.VerifyFieldError(elems_CustomerCreation.RegistrantInformation.TXT_NAME, 'Error: This field is required.')
        cy.VerifyFieldError(elems_CustomerCreation.RegistrantInformation.DATE_DATEOFBIRTH, 'Error: This field is required.')
        cy.VerifyFieldError(elems_CustomerCreation.RegistrantInformation.DRP_GENDER, 'Error: This field is required.')
    })

    it('Sample Input Field Up/Down Button Control Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/dataRetentionSettings')

        cy.IncreaseFieldValue(elems_DataRetentionSettings.NUM_BCKGRNDSRVCELOGSRETNTIONPRD, 5)

        // Pausing just to see value change, no need for actual test script
        cy.wait(3000) 
        
        cy.DecreaseFieldValue(elems_DataRetentionSettings.NUM_BCKGRNDSRVCELOGSRETNTIONPRD, 20)
    })

    it('Select Button Dropdown Item Sample Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/memberlisting')
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MEMBERSHIP, 'Cards')
    })

    it('Select Picker Item Sample Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/admin/codeSetMasterDetails')
        cy.SelectPickerItem(elems_CodeSetMasterDetail.PCK_CODETYPE, 'Registration Term Group')
    })

    it('Tick Table Checkbox Sample Usage', function () {
        cy.visit('https://qa1-smcms-fe.azurewebsites.net/admin/smcmsRoleDetails')
        cy.TickTableCheckbox(elems_SMCMSRoleDetail.Functions.TBL_FUNCTIONS, 'CHECK', 'Function Name', 'membership.members', 'View')
        cy.TickTableCheckbox(elems_SMCMSRoleDetail.Functions.TBL_FUNCTIONS, 'UNCHECK', 'Function Name', 'membership.members', 'View')
    })
})