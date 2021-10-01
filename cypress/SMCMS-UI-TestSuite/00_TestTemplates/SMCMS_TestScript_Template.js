/*****************************************************
 * FS#: FS-014
 * Module: MEMBERSHIP (MASTER, REGISTRATION AND RENEWAL)
 * Test Objective: Be able to fill-out Membership
 *                 status reason code form
 *
 * @author: hstone
 *****************************************************/
// Import Forms
import MemberStatusReasonCodeDetail from '../../page-objects/SMCMS/membership/FS014_Master-Registration-Renewal/MemberStatusReasonCodeDetail.js'

describe('SMCMS Valid Login Functionality Test', function () {

    before('Fetch Test Data', function () {
        // Gets all Objects in a DB Collection. One Collection is one DataSet
        cy.GetTestDataSet('FS014-MemberStatusReasonCodeDetail-FillOut')

        // Gets a specific Object in a DB Collection. One object is Test Data 
        // cy.GetTestDataObject('Module00-TS001', 'Label00').as('sampleData')
    })

    it('Member Status Reason Code Detail Form Fill-out', function () {
        cy.fixture('testdata').then( testdata => {
            testdata.forEach( data => {

                cy.GoToWebPage('QA_ENVIRONMENT')

                cy.EnterText(MemberStatusReasonCodeDetail.TXT_REASONCODE, data.reasonCode)
                cy.EnterText(MemberStatusReasonCodeDetail.TXTAREA_REMARKS, data.remarks)
                // cy.SelectDropDownItem(MemberStatusReasonCodeDetail.DRP_MEMBERSTATUS, data.memberStatus)

                cy.UpdateTestData('Module00-TS001', 'Label00', {
                    updateUsingLabel1: "UpdateTest01", 
                    updateUsingLabel2: "UpdateTest01"
                })

                cy.UpdateTestData('FS014-MemberStatusReasonCodeDetail-FillOut', data._id, {
                    updateUsingObjId1: "UpdateTest01", 
                    updateUsingObjId2: "UpdateTest01"
                })

            })

        })
    })
})