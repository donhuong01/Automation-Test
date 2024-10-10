import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_CustomerCategoryTypeDetails from '../../../Elements/Admin/FS004_Admin-Settings/CustomerCategoryTypeDetails'
import elems_Picker from '../../../Elements/Common/Picker'

class CustomerCategoryTypeDetail {
    /*****************************************************
        * Method: Creat New
        * Description: Create New Customer Category Type
    *****************************************************/

    verifyFormTitle() {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Category Type Detail')
    }
    /*****************************************************
        * Method: FillOut form
        * Description: Fill out the customer Category Type Detail Form
        *
        * @param {String} Name
        * @param {String} BelongsUnder
    *****************************************************/

    fillOutForm(Name, BelongsUnder) {
        cy.xpath(elems_CustomerCategoryTypeDetails.TXT_NAME, { timeout: 10000 }).clear()
        cy.EnterText(elems_CustomerCategoryTypeDetails.TXT_NAME, Name)
        cy.Click(elems_CustomerCategoryTypeDetails.PCK_BELONGSUNDER)
        cy.SelectTableItem(
            elems_CustomerCategoryTypeDetails.TBL_SELECT_CUSTOMER_CAT_TYPE, 'Customer Category Type', BelongsUnder
        )
        cy.Click(elems_Picker.BTN_SELECT)
    }

    /**************************************************
    * Method: Save Form
    * Description: This function Click on Save button
    ***************************************************/
    saveForm() {

        cy.Click(elems_CustomerCategoryTypeDetails.BTN_SAVE, 'Customer Category Type Listing')

    }


    /**************************************************
    * Method: Cancel Form
    * Description: This function Click on Cancel button
    ***************************************************/
    cancelForm() {

        cy.Click(elems_CustomerCategoryTypeDetails.BTN_CANCEL, 'Customer Category Type Listing')

    }


    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
    VerifyNotificationMsg(Msg) {

        cy.wait(2000)
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)

    }




}
export default CustomerCategoryTypeDetail

