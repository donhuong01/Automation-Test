import elems_SettingsCalendarListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/Settings-CalendarListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'
class FacilitySettingsCalendarListingForm {

     /*****************************************************
     * Method: Verify Form Title 
     * Description: This function Verifies the Form Title 
     *****************************************************/
    VerifyFormTitle(){
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,'Settings - Calendar')
     }


     /*****************************************************
     * Method: Create New button functionality     
     * Description: This function Verifies the Create new button functionality 
     *****************************************************/
     CreateNew()
     {
        cy.Click(elems_SettingsCalendarListing.BTN_CREATENEW,'Calendar Detail') 

     }

     /*****************************************************
     * Method: FillOutSettingCalendarForm    
     * Description: This function Fill Out Setting Calendar Form 
     * 
     * @param {string} CalendarName
     * @param {string} Status
     * @param {string} RecordStatus
     *****************************************************/
    FillOutSettingCalendarForm(CalendarName, Status, RecordStatus){
        cy.xpath(elems_SettingsCalendarListing.TXT_CALENDARNAME).clear()
        cy.EnterText(elems_SettingsCalendarListing.TXT_CALENDARNAME, CalendarName)
        cy.SelectDropDownItem(elems_SettingsCalendarListing.DRP_STATUS, Status)
        cy.SelectDropDownItem(elems_SettingsCalendarListing.DRP_RECORDSTATUS, RecordStatus)
        cy.Click(elems_SettingsCalendarListing.BTN_SEARCHFILTERS)
    }

     /*****************************************************
     * Method: ClickOnTableItem    
     * Description: This function click on table item 
     * 
     * @param {string} CalendarName
     * @param {string} RecordStatus
     *****************************************************/
    ClickOnTableItem(CalendarName, RecordStatus){
        cy.ClickTableLink(
            elems_SettingsCalendarListing.TBL_LIST + "//a",
            'Calendar Name', CalendarName,
            'Record Status', RecordStatus
            )
    }

     /*****************************************************
     * Method: VerifyTableEntry    
     * Description: This function click on table item 
     * 
     * @param {string} CalendarName
     * @param {string} RecordStatus
     *****************************************************/
    VerifyTableEntry(CalendarName, RecordStatus){
        cy.VerifyTableEntry(
            elems_SettingsCalendarListing.TBL_LIST,
            'Calendar Name', CalendarName,
            'Record Status', RecordStatus
            )
    }
     /*****************************************************
     * Method: Delete button functionality     
     * Description: This function Verifies the delete button functionality 
     * @param {string} CalendarName
     * @param {string} Status
     *****************************************************/

     DeleteItem(CalendarName,Status)
     {
        cy.SelectTableItem(
            elems_SettingsCalendarListing.TBL_LIST,
            'Calendar Name', CalendarName,
            'Status', Status
            )
        cy.Click(elems_SettingsCalendarListing.BTN_DELETE)

     }
     
    /*****************************************************
     * Method: Delete Confirmation button functionality     
     * Description: This function Verifies the delete confirmation "Yes" button functionality 
     *****************************************************/
     DeleteItemYes()
     {
         cy.Click(elems_Alerts.BTN_YES)

     }

     /*****************************************************
     * Method: Delete Confirmation button functionality     
     * Description: This function Verifies the delete confirmation "Yes" button functionality 
     *****************************************************/
    DeleteItemNo()
    {
        cy.Click(elems_Alerts.BTN_NO)

    }

}

export default new FacilitySettingsCalendarListingForm