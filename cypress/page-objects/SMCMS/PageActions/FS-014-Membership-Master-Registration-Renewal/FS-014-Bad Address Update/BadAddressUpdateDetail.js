import elems_BadAddressUpdateDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BadAddressUpdateDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class BadAddressUpdateDetail {

    /*****************************************************
     * Method: filloutBadAddressUpdateDetail
     * Description: Fills-out Bad Address Update Detail Form
     *
     * @param {string} batchId Batch ID
     * @param {string} uploadFile Upload File 
     * @param {string} status Status
     *****************************************************/
     filloutBadAddressUpdateDetail({batchId, uploadFile, status}){
        
        // Verify Batch ID
        if(batchId !== undefined){
            cy.ValidateElementText(elems_BadAddressUpdateDetail.LBL_BATCHID, batchId)
        }

        // Upload File Function
        if(uploadFile !== undefined){
            cy.UploadFile(elems_BadAddressUpdateDetail.File.UPL_FILE, uploadFile)
            cy.wait(3000)
        }

        // Verify Status
        if(status !== undefined){
            cy.ValidateElementText(elems_BadAddressUpdateDetail.LBL_STATUS, status)
        }

        // Error Handling
        if( batchId === undefined
            && uploadFile === undefined
            && status === undefined
        ){
                throw new Error("BadAddressUpdateDetail.filloutBadAddressUpdateDetail Error!!.\
                                Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: validate
     * Description: Validates Bad Address Update Detail Form
     *****************************************************/
     validate(){
        cy.Click(elems_BadAddressUpdateDetail.BTN_VALIDATE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Bad Address Update Detail')
    }

    /*****************************************************
     * Method: upload
     * Description: Saves Bad Address Update Detail Form
     *****************************************************/
     upload(){
        cy.Click(elems_BadAddressUpdateDetail.BTN_UPLOAD)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Bad Address Update Listing')
    }

    /*****************************************************
     * Method: cancel
     * Description: Cancel Bad Address Update Detail Form
     *****************************************************/
     cancel(){
        cy.Click(elems_BadAddressUpdateDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Bad Address Update Listing')
    }
}

export default BadAddressUpdateDetail