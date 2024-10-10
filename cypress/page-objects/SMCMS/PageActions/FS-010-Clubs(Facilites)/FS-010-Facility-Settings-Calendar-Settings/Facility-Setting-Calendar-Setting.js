import elems_FacilitySettingCalendarSetting from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilitySettingCalendarSetting'
import elems_PageHeader from '../../../Elements/Common/PageHeader' 
class FacilitySettingCalendarSetting{

 /*****************************************************
     * Method: Verify Form Title 
     * Description: This function Verifies the Form Title 
     *****************************************************/
    VerifyFormTitle(){
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,'Calendar Settings')
    }
 /*****************************************************
     * Method: Add Holiday
     * Description: This function is to Add Holiday
     *****************************************************/

    AddHoliday(rowref, colRef, value){

    cy.Click(elems_FacilitySettingCalendarSetting.HolidaysTab.BTN_DELETEICON)

    cy.Click(elems_FacilitySettingCalendarSetting.HolidaysTab.BTN_ADDHOLIDAY)
    cy.EnterTextInTable(elems_FacilitySettingCalendarSetting.HolidaysTab.TBL_HOLIDAYS,
        rowref,colRef,value)
       
    }
  /*****************************************************
     * Method: TickCheckBox
     * Description: This function checked/uncheck checkbox
     *****************************************************/
    TickCheckBox(Rowref,ColRef,value)
    {
        cy.CheckboxInTable(elems_FacilitySettingCalendarSetting.HolidaysTab.TBL_HOLIDAYS,
            Rowref,ColRef,value)
    }
  /*****************************************************
     * Method: TickCheckBoxInAddHoliday
     * Description: This function check/uncheck the checkbox inholiday tab
     *****************************************************/
    SelectDropdownInAddHoliday( Rowref,ColRef,value)
    {
        cy.SelectSingleDropdownInTable(elems_FacilitySettingCalendarSetting.HolidaysTab.TBL_HOLIDAYS,
            Rowref,ColRef,value)
    }

  /*****************************************************
     * Method: TickCheckBoxInPeriods
     * Description: This function check/uncheck the checkbox in periods tab
     *****************************************************/
   SelectDropdownInPeriods( Rowref,ColRef,value)
    {
        cy.SelectSingleDropdownInTable(elems_FacilitySettingCalendarSetting.PeriodsTab.TBL_PERIODS,
            Rowref,ColRef,value)
    }
  /*****************************************************
     * Method: EnterTextInPeriodsTab
     * Description: This function enter text in the table 
     *****************************************************/
    EnterTextInPeriodsTab(rowref,colRef,value)
    {
        
        cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_PERIODS)
        cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_DELETEICON)
        cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_ADDPERIOD)
        cy.EnterTextInTable(elems_FacilitySettingCalendarSetting.PeriodsTab.TBL_PERIODS,
            rowref,colRef,value)
    }
  /*****************************************************
     * Method: Add Period
     * Description: This function is to Add Period
     *****************************************************/

    AddPeriod(Rowref,ColRef,value){

    // cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_DELETEICON)
    //cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_PERIODS)
    // cy.Click(elems_FacilitySettingCalendarSetting.PeriodsTab.BTN_ADDPERIOD)
    cy.CheckboxInTable(elems_FacilitySettingCalendarSetting.PeriodsTab.TBL_PERIODS,
        Rowref,ColRef,value)       
       
    }

    Save(){
      cy.Click(elems_FacilitySettingCalendarSetting.BTN_SAVE)
      
    }
    Cancel(){
    cy.Click(elems_FacilitySettingCalendarSetting.BTN_CANCEL)
    
    }
   
}
export default FacilitySettingCalendarSetting