import elems_SMCMSUserDetail from '../../../Elements/Admin/FS001_Admin-SystemLogin/SMCMSUserDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker'

class SMCMSUserDetail{


 /********************************* 
 * @param {String} PageTitle 
 **********************************/
VerifyPageTitle(PageTitle)
{
    cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, PageTitle);
}      
  
 /********************************* 
 * @param {String} Remarks 
 **********************************/

 UpdateRemarks(Remarks)
 {
    if (Remarks !== undefined) {
        cy.xpath(elems_SMCMSUserDetail.TXTAREA_REMARK).clear()
        cy.EnterText(elems_SMCMSUserDetail.TXTAREA_REMARK,Remarks)
    }
    if( Remarks === undefined 
        ){
            throw new Error("SMCMS.Details.Update Remarks Error!!./n\
                            Please provide argument.")
        }
 }  
 /********************************* 
 * @param {String} Position  
 **********************************/
 AddPosition(Position)
 {
    if (Position !== undefined) {
        cy.Click(elems_SMCMSUserDetail.BTN_ADDPOSITION)
        cy.wait(5000)
        cy.xpath('//input[@name="name"]').last().type(Position)

        cy.xpath('//button[@form="formPositionDialog"]').click()

        cy.SelectTableItem('//div[@class="k-window-content k-dialog-content"]//table',
        'Name',Position)
        cy.Click(elems_Picker.BTN_SELECT)

    }

    if( Position === undefined)
    {
        throw new Error("SMCMS.Details.Update Details Error!!./n\
                        Please provide argument.")
    }

 }

 /********************************* 
 * @param {String} Name
 **********************************/
 RemovePosition(Name)
 {
    if (Name !== undefined) {
        cy.EnterText(elems_SMCMSUserDetail.TXT_POSITION,Name)
        cy.Click(elems_SMCMSUserDetail.BTN_SEARCH)
        cy.wait(2000)
        cy.SelectTableItem('//h3[text()="Positions"]/parent::div//table','Name',Name)
        cy.Click(elems_SMCMSUserDetail.BTN_REMOVEPOSITION)    
    }

    if( Name === undefined)
    {
        throw new Error("SMCMS.Details.Update Details Error!!./n\
                        Please provide argument.")
    }
}
/************************
 * Function: Save
 * This function save SMCMS User detail form
 ******************************************/
 Save(){

    cy.Click(elems_SMCMSUserDetail.BTN_SAVE)
 }
/************************
 * Function: Cancel
 * This function Cancel SMCMS User detail form
 ******************************************/
 Cancel(){

    cy.Click(elems_SMCMSUserDetail.BTN_CANCEL)
 }

/*****************************************************
 * Method: VerifyNotificationMsg
 * Description: This function verify Notification Message
 * @param {string} Msg
 *****************************************************/
    VerifyNotificationMsg(Msg){

    cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
    cy.wait(2000)
}

 
}

export default SMCMSUserDetail
