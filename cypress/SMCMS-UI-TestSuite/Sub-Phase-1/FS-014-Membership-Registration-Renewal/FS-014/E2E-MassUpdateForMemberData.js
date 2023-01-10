/*****************************************************
 * Page Function: Test End to End Flow of Mass Update For Member Data Form 
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import MassUpdateForMemberDataListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mass Update For Member Data/MassUpdateForMemberDataListing'
import MassUpdateForMemberDataDetail from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Mass Update For Member Data/MassUpdateForMemberDataDetail'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import elems_Alerts from '../../../../page-objects/SMCMS/Elements/Common/Alerts'
import elems_Picker from '../../../../page-objects/SMCMS/Elements/Common/Picker'
import elems_MassUpdateForMemberDataDetail from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MassUpdateForMemberDataDetail'
import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    cy.intercept('GET', 'https://api.qa-smcms.safra.sg/v2/adminapi/membership/mass-update-member-data-requests')
})

const MassUpdateForMemberData = ()=> {

    describe('[TS15] Mass Update For Member Data', function () {

        // Page Definitions
        const MassUpdForMemDataList = new MassUpdateForMemberDataListing()
        const MassUpdForMemDataDtl = new MassUpdateForMemberDataDetail()

        it('[TC01] Create a Valid Mass Update For Member Data and and Reject Approval workflow', function () {
            
            cy.intercept('POST', 'https://api.qa-smcms.safra.sg/v2/adminapi/membership/mass-update-member-data-requests').as('ID')
            // Navigate to form
            cy.visit('/membership/massUpdateMemberDataList')
            cy.wait(5000)

            // Click Create New button
            MassUpdForMemDataList.createNew()

            // Fill out Detail form
            MassUpdForMemDataDtl.UploadFile(data.MassUpdateForMemberDataDetail.FileName)

            // Click Validate button
            MassUpdForMemDataDtl.Validate()

            // Validate Notification message
            // cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Item validated')

                cy.wait('@ID')
                cy.get('@ID').then(xhr => {

                    const Id = xhr.response.body.value

                    cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`).as('MemID')
                    cy.wait(2000)
                    
                    // Verify file status
                    MassUpdForMemDataDtl.VerifyStatus('Validated')

                    // Click on Submit button
                    MassUpdForMemDataDtl.Submit()

                    cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`)
                    // cy.get('@MemID')
                    cy.wait(2000)

                    //Verify file status "Submitted"
                    MassUpdForMemDataDtl.VerifyStatus('Submitted')

                    cy.xpath(elems_MassUpdateForMemberDataDetail.LBL_BATCHID).then($BID => {
                        const BatchId = $BID.text()

                        MassUpdForMemDataDtl.ApprovalWorkFlow(BatchId, 'MEM_MASSUPDATEFORMEMBERDATA_WF',
                        'Mass Update for Member Data Approval Workflow', 'Reject', 'Testing Remarks')
                        
                        cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`)
                        //Verify file status "Submitted"
                        MassUpdForMemDataDtl.VerifyStatus('Rejected')

                    })

              })
        
        })
        it('[TC02] Create a Valid Mass Update For Member Data and Approve approval workflow', function () {
            
            cy.intercept('POST', 'https://api.qa-smcms.safra.sg/v2/adminapi/membership/mass-update-member-data-requests').as('ID')
            
            // Navigate to form
            cy.visit('/membership/massUpdateMemberDataList')
            cy.wait(8000)

            // Click Create New button
            MassUpdForMemDataList.createNew()

            // Fill out Detail form
            MassUpdForMemDataDtl.UploadFile(data.MassUpdateForMemberDataDetail.FileName)

            // Click Validate button
            MassUpdForMemDataDtl.Validate()

            // Validate Notification message
            // cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Item validated')

                cy.wait('@ID')
                cy.get('@ID').then(xhr => {

                    const Id = xhr.response.body.value

                    cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`).as('MemID')
                    cy.wait(2000)
                    
                    // Verify file status
                    MassUpdForMemDataDtl.VerifyStatus('Validated')

                    // Click on Submit button
                    MassUpdForMemDataDtl.Submit()

                    cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`)
                    // cy.get('@MemID')
                    cy.wait(2000)

                    //Verify file status "Submitted"
                    MassUpdForMemDataDtl.VerifyStatus('Submitted')

                    cy.xpath(elems_MassUpdateForMemberDataDetail.LBL_BATCHID).then($BID => {
                        const BatchId = $BID.text()

                        MassUpdForMemDataDtl.ApprovalWorkFlow(BatchId, 'MEM_MASSUPDATEFORMEMBERDATA_WF',
                        'Mass Update for Member Data Approval Workflow', 'Approve', 'Testing Remarks')
                        
                        cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`)

                        //Verify file status "Submitted"
                        MassUpdForMemDataDtl.VerifyStatus('Uploaded')
                    })

              })
        
        })

        it('[TC03] Create an Invalid Mass Update For Member Data', function () {

            cy.intercept('POST', 'https://api.qa-smcms.safra.sg/v2/adminapi/membership/mass-update-member-data-requests').as('ID')

            // Navigate to form
            cy.visit('/membership/massUpdateMemberDataList')
            cy.wait(8000)

            // Click Create New button
            MassUpdForMemDataList.createNew()

            // Fill out Detail form
            MassUpdForMemDataDtl.UploadFile(data.MassUpdateForMemberDataDetail.InvalidFile)

            // Click Validate button
            MassUpdForMemDataDtl.Validate()

            // Validate Notification message
            cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Error: 400 Bad Request. Please check file.')
       
       
            cy.wait('@ID')
                cy.get('@ID').then(xhr => {

                    const Id = xhr.response.body.value

                    cy.visit(`/membership/massUpdateMemberDataDetails?id=${Id}`).as('MemID')
                    cy.wait(2000)
                    
                    //Verify page title
                    MassUpdForMemDataDtl.verifyPageTitle('Mass Update for Member Data Detail')

                    // Verify file Draft status
                    MassUpdForMemDataDtl.VerifyStatus('Draft')


                })
       
       
        })

        

    })
} 

export default MassUpdateForMemberData