import elems_OnlineAccountAccessDetail from '../../../Elements/Admin/FS001_Admin-SystemLogin/OnlineAccountAccessDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
import elems_Picker from '../../../Elements/Common/Picker'

class OnlineAccountAccessDetail{

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: To verify the tile of Online Account Access Detail
     * @param {String} PageTitle
    *****************************************************/
    VerifyPageTitle(PageTitle)
    { 
     cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, PageTitle)
        
    }
    /*****************************************************
     * Method: FillOutFormRemarks
     * Description: To Fillout form remarks field
     * @param {String} Remarks
    *****************************************************/
    FillOutFormRemarks(Remarks) 
    {
        cy.xpath(elems_OnlineAccountAccessDetail.TXTAREA_REMARK).clear()
        cy.EnterText(elems_OnlineAccountAccessDetail.TXTAREA_REMARK,Remarks)
    }

    /*****************************************************
     * Method: AddFunction
     * Description: To Add Function
     * @param {String} Function
    *****************************************************/
     AddFunction(Function) 
     {
         cy.SelectPickerFilter(elems_OnlineAccountAccessDetail.Functions.BTN_ADD_FUNCTION,
            elems_OnlineAccountAccessDetail.AddFunctionPopUp.LBL_FUNCTIONAME_TEXTFIELD, Function,
            elems_OnlineAccountAccessDetail.AddFunctionPopUp.BTN_SEARCH)

     }

     /*****************************************************
     * Method: RemoveFunction
     * Description: To Remove Function
     * @param {String} Function
    *****************************************************/
      RemoveFunction(Function) 
      {
         cy.EnterText(elems_OnlineAccountAccessDetail.Functions.TXT_FUNCTIONNAME,Function) 
         cy.Click(elems_OnlineAccountAccessDetail.Functions.BTN_SEARCH_FILTER)
 
         cy.SelectTableItem(elems_OnlineAccountAccessDetail.Functions.TBL_FUNCTIONS,
          'Function Name', Function)
         cy.Click(elems_OnlineAccountAccessDetail.Functions.BTN_REMOVE_FUNCTION)
         cy.wait(2000)
         cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE,"Item(s) removed")   


      }

    /*****************************************************
     * Method: Save
     * Description: To Save the form
    *****************************************************/
    save() 
    {
        cy.Click(elems_OnlineAccountAccessDetail.BTN_SAVE,"Online Account Access Listing")
    }
    
    /*****************************************************
     * Method: Cancel
     * Description: To cancel the form
    *****************************************************/
    cancel() 
     {
       cy.Click(elems_OnlineAccountAccessDetail.BTN_CANCEL,"Online Account Access Listing")
     }

    /*****************************************************
     * Method: VerifyNotification
     * Description: To cancel the form
    *****************************************************/
    VerifySaveNotification()
    {
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION,'Record has been saved successfully.')
    }
    

}
export default OnlineAccountAccessDetail