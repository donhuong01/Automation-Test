import elems_BadAddressUpdateListing from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BadAddressUpdateListing.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'

class BadAddressUpdateListing {

    /*****************************************************
     * Method: clickBatchIdLink
     * Description: Selects a Batch ID Item
     *
     * @param {string} batchId Batch ID item link in Table
     *****************************************************/
     clickBatchIdLink(batchId){

        // Select Reason Code Table Link Item
        if(batchId !== undefined){
            cy.ClickTableLink(
                elems_BadAddressUpdateListing.TBL_BADADDRESSUPDATELISTING, 
                'Batch ID', batchId
            )

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Bad Address Update Detail')
        }

        // Error Handling
        if(batchId === undefined){
            throw new Error("BadAddressUpdateListing.clickBatchIdLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: verifyBadAddressUpdateList
     * Description: Verfies Bad Address Update Listing Table
     *
     * @param {string} Status 
     * @param {string} MemberId 
     *****************************************************/
     verifyBadAddressUpdateList(Status, BatchId){

        //badAddressUpdateList.forEach( data => {
            cy.VerifyTableEntry(
                elems_BadAddressUpdateListing.TBL_BADADDRESSUPDATELISTING,
                'Batch ID', BatchId,
                'Status', Status,

            )
       // })
    }

    /*****************************************************
     * Method: selectBatchId
     * Description: Selects Bad Address Update Listing Item
     * @param {string} batchIdItem Batch ID Item
     *****************************************************/
     selectBatchId(batchIdItem){

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_BadAddressUpdateListing.TBL_BADADDRESSUPDATELISTING,
            'Batch ID', batchIdItem
        )
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New Bad Address Update
     *****************************************************/
     createNew(){
        cy.Click(elems_BadAddressUpdateListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Bad Address Update Detail')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete Bad Address Update Item
     *****************************************************/
     delete(){
        cy.Click(elems_BadAddressUpdateListing.BTN_DELETE)
    }

    /*****************************************************
     * Method: ClickAndUpdateBadAddress
     * Description: This function click and update bad address
     * @param {string} BatchID
     * @param {string} Status
     *****************************************************/
    ClickAndUpdateBadAddress(){

        cy.xpath(elems_BadAddressUpdateListing.TBL_BADADDRESSUPDATELISTING).first().click()
    }
}

export default BadAddressUpdateListing