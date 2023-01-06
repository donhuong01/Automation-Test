import elems_MassUpdateForMemberDataListing from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MassUpdateForMemberDataListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class MassUpdateForMemberDataListing {

    /*****************************************************
     * Method: clickBatchIdLink
     * Description: Selects a Batch ID Item
     *
     * @param {string} batchId Batch ID item link in Table
     *****************************************************/
     clickBatchIdLink(batchId){

        // Select Reason Code Table Link Item
        if(batchId !== undefined){
            cy.ClickTableLinkItem(
                elems_MassUpdateForMemberDataListing.TBL_MASSUPDTFORMEMDATALIST, 
                'Batch ID', batchId
            )

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Mass Update for Member Data Detail')
        }

        // Error Handling
        if(batchId === undefined){
            throw new Error("MassUpdateForMemberDataListing.clickBatchIdLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: verifyMassUpdForMemDataList
     * Description: Verfies Mass Update For Member Data Listing Table
     *
     * @param {string} massUpdForMemData Mass Update For Member Data Listing Array
     *****************************************************/
     verifyMassUpdForMemDataList(massUpdForMemData){

        massUpdForMemData.forEach( data => {
            cy.VerifyTableEntry(
                elems_MassUpdateForMemberDataListing.TBL_MASSUPDTFORMEMDATALIST,
                'Status', data.status,
                'Batch ID', data.batchId
            )
        })
    }

    /*****************************************************
     * Method: selectBatchId
     * Description: Selects Mass Update For Member Data Listing Item
     *
     * @param {string} batchIdItem Batch ID Item
     *****************************************************/
     selectBatchId(batchIdItem){

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_MassUpdateForMemberDataListing.TBL_MASSUPDTFORMEMDATALIST,
            'Batch ID', batchIdItem
        )
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New Mass Update For Member Data Item
     *****************************************************/
     createNew(){
        cy.Click(elems_MassUpdateForMemberDataListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Mass Update for Member Data Detail')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete Mass Update For Member Data Item
     *****************************************************/
     delete(){
        cy.Click(elems_MassUpdateForMemberDataListing.BTN)

        // Delete Confirmation Popup
        cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, 'Delete Confirmation')
        cy.Click(elems_Alerts.BTN_YES)
    }
}

export default MassUpdateForMemberDataListing