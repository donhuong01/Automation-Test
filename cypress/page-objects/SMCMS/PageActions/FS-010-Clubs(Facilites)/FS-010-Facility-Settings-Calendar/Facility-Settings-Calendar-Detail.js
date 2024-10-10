import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_SettingsCalendarDetail from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/Settings-CalendarDetail'
import elems_SettingsCalendarListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/Settings-CalendarListing'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'

class FacilitySettingsCalendarDetailForm {
    /*****************************************************
     * Method: EnterCalendarName
     * Description: This function enter text in calendar name field
     * @param {string} CalenderName
     *****************************************************/
    EnterCalendarName(CalenderName) {

        cy.EnterText(elems_SettingsCalendarDetail.TXT_CALENDARNAME, CalenderName)

    }

    /*****************************************************
     * Method: startDate
     * Description: This function enter start date
     * @param {string} DD
     * @param {string} MM
     * @param {string} YY
     *****************************************************/
    StartDate(DD, MM, YY) {
        cy.EnterDate(elems_SettingsCalendarDetail.DATE_STARTDATE, DD, MM, YY)
    }
    /*****************************************************
     * Method: EndDate
     * Description: This function enter end date
     * @param {string} DD
     * @param {string} MM
     * @param {string} YY
     *****************************************************/
    EndDate(DD, MM, YY) {
        cy.EnterDate(elems_SettingsCalendarDetail.DATE_ENDDATE, DD, MM, YY)
    }

    /*****************************************************
     * Method: AddHolidayDates
     * Description: This function add new Holiday Dates
     * @param {string} HolidayName1
     * @param {string} DD
     * @param {string} MM
     * @param {string} YY
     * ********************/
    AddHolidayDates(HolidayName1, DD, MM, YY) {

        // cy.wait(5000)
        cy.xpath(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_ADDHOLIDAY, { timeout: 20000 }).should('be.visible').click();
        cy.EnterText(elems_SettingsCalendarDetail.NewHolidayPopUp.TXT_NAME, HolidayName1)
        // cy.wait(3000)
        // cy.SelectDate(elems_SettingsCalendarDetail.NewHolidayPopUp.DATE_DATE, HolidayDate1)
        cy.EnterDate(elems_SettingsCalendarDetail.NewHolidayPopUp.DATE_DATE, DD, MM, YY)
        cy.Click(elems_SettingsCalendarDetail.NewHolidayPopUp.BTN_ADD)

    }
    /*****************************************************
     * Method: CopySelectedHoildayToCurrentYear
     * Description: This function Copy Selected Hoilday To Current Year
     * @param {string} HolidayName1
     * @param {string} HolidayName2
     *****************************************************/
    CopySelectedHoildayToCurrentYear(HolidayName1, HolidayName2) {

        cy.EnterText(elems_SettingsCalendarDetail.HolidayDatesTAB.TXT_DESCRIPTION, HolidayName1)
        cy.SelectTableItem(elems_SettingsCalendarDetail.HolidayDatesTAB.TBL_HOLIDAYDATES,

            'Holiday Name', HolidayName1)

        cy.Click(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_COPYSELECTEDHOLIDAYSTOCURRENTYEAR)
        // cy.wait(5000)
    }

    /*****************************************************
     * Method: CopySelectedHolidaysToNextYear
     * Description: This function Copy Selected Holidays To Next Year
     * @param {string} HolidayName
     *****************************************************/
    CopySelectedHolidaysToNextYear(HolidayName) {

        cy.xpath(elems_SettingsCalendarDetail.HolidayDatesTAB.TXT_DESCRIPTION).clear()
        cy.EnterText(elems_SettingsCalendarDetail.HolidayDatesTAB.TXT_DESCRIPTION, HolidayName)
        cy.Click(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_SEARCHFILTERS)
        cy.SelectTableItem(elems_SettingsCalendarDetail.HolidayDatesTAB.TBL_HOLIDAYDATES,

            'Holiday Name', HolidayName)

        cy.Click(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_COPYSELECTEDHOLIDAYSTONEXTYEAR)
        // cy.wait(5000)
    }

    /*****************************************************
     * Method: DeleteSelectedDates
     * Description: This function Deletes Selected Dates
     * @param {string} HolidayName
     *****************************************************/
    DeleteSelectedDates(HolidayName) {

        cy.SelectTableItem(elems_SettingsCalendarDetail.HolidayDatesTAB.TBL_HOLIDAYDATES,

            'Holiday Name', HolidayName)

        cy.Click(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_DELETE)

    }

    /*****************************************************
     * Method: ClickPeriodsTab
     * Description: This function click on Periods Tab
     *****************************************************/
    ClickPeriodsTab() {

        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.TAB_Periods)

    }

    /*****************************************************
         * Method: AddPeriods
         * Description: This function add new Periods
         * @param {string} PeriodName1
         * @param {string} StartDate1
         * @param {string} EndDate1
         * @param {string} PeriodName2
         * @param {string} StartDate2
         * @param {string} EndDate2
         *****************************************************/
    AddPeriods(PeriodName1, StartDate1, EndDate1) {

        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_ADDPERIOD)
        cy.EnterText(elems_SettingsCalendarDetail.PeriodPopUp.TXT_NAME, PeriodName1)

        cy.EnterDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_STARTDATE, StartDate1)
        cy.EnterDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_ENDDATE, EndDate1)

        // cy.SelectDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_STARTDATE, StartDate1)
        // cy.wait(5000)
        // cy.SelectDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_ENDDATE, EndDate1)
        // cy.Click(elems_SettingsCalendarDetail.PeriodPopUp.BTN_ADDANDNEW)

        // cy.EnterText(elems_SettingsCalendarDetail.PeriodPopUp.TXT_NAME, PeriodName2)
        // cy.SelectDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_STARTDATE, StartDate2)
        // cy.wait(10000)
        // cy.SelectDate(elems_SettingsCalendarDetail.PeriodPopUp.DATE_ENDDATE, EndDate2)
        cy.xpath(elems_SettingsCalendarDetail.PeriodPopUp.BTN_ADD, { timeout: 10000 }).click()
        // cy.Click(elems_SettingsCalendarDetail.PeriodPopUp.BTN_ADD)

    }
    /*****************************************************
     * Method: CopySelectedPeriodToCurrentYear
     * Description: This function Copy Selected Period To Current Year
     * @param {string} PeriodName1
     * @param {string} PeriodName2
     *****************************************************/
    CopySelectedPeriodToCurrentYear(PeriodName1, PeriodName2) {

        cy.xpath(elems_SettingsCalendarDetail.PeriodsTAB.TXT_DESCRIPTION).clear()
        cy.EnterText(elems_SettingsCalendarDetail.PeriodsTAB.TXT_DESCRIPTION, PeriodName1)
        cy.SelectTableItem(elems_SettingsCalendarDetail.PeriodsTAB.TBL_PERIODS,

            'Period Name', PeriodName1)

        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_COPYSELECTEDPERIODTOCURRENTYEAR)
        // cy.wait(5000)
    }

    /*****************************************************
     * Method: CopySelectedPeriodToNextYear
     * Description: This function Copy Selected Period To Next Year
     * @param {string} PeriodName2
     *****************************************************/
    CopySelectedPeriodToNextYear(PeriodName2) {

        cy.xpath(elems_SettingsCalendarDetail.PeriodsTAB.TXT_DESCRIPTION).clear()
        cy.EnterText(elems_SettingsCalendarDetail.PeriodsTAB.TXT_DESCRIPTION, PeriodName2)
        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_SEARCHFILTERS)
        cy.SelectTableItem(elems_SettingsCalendarDetail.PeriodsTAB.TBL_PERIODS,

            'Period Name', PeriodName2)

        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_COPYSELECTEDPERIODTONEXTYEAR)
        // cy.wait(5000)
    }
    /*****************************************************
     * Method: AddHolidayFromSettingToCurrentYear
     * Description: This function add holiday from settings to current year
     * @param {string} HolidayName
     *****************************************************/
    AddHolidayFromSettingToCurrentYear(HolidayName) {

        cy.Click(elems_SettingsCalendarDetail.HolidayDatesTAB.BTN_ADDHOLIDAYFROMSETTINGSTOCURRENTYEAR)
        cy.SelectTableItem(elems_SettingsCalendarDetail.NewHolidayPopUp.TBL_HOLIDAYSETTINGLIST,

            'Hoilday Name', HolidayName)

        // cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_COPYSELECTEDPERIODTONEXTYEAR)
        // cy.wait(5000)
    }

    /*****************************************************
     * Method: DeleteSelectedPeriod
     * Description: This function Deletes Selected Period
     * @param {string} PeriodName
     *****************************************************/
    DeleteSelectedPeriod(PeriodName) {

        cy.SelectTableItem(elems_SettingsCalendarDetail.PeriodsTAB.TBL_PERIODS,

            'Period Name', PeriodName)

        cy.Click(elems_SettingsCalendarDetail.PeriodsTAB.BTN_DELETE)

    }
    /*****************************************************
     * Method: VerifyNotificationMessage
     * Description: This function verifies Notification Message
     * @param {string} NotificationMSG
     *****************************************************/
    VerifyNotificationMessage(NotificationMSG) {

        cy.wait(4000)
        cy.VerifyElementText(elems_SettingsCalendarDetail.MSG_NOTIFICATION, NotificationMSG)
    }

    /*****************************************************
     * Method: SubmitForApproval
     * Description: This function click on Submit for Approval button
     *****************************************************/
    SubmitForApproval() {
        cy.Click(elems_SettingsCalendarDetail.BTN_SUBMITFORAPPROVAL)
    }
    /*****************************************************
     * Method: SaveAsDraft
     * Description: This function click on Save as Draft button
     *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_SettingsCalendarDetail.BTN_SAVEASDRAFT)
    }
    /*****************************************************
     * Method: Cancel
     * Description: This function click on Cancel button
     *****************************************************/
    Cancel() {
        cy.Click(elems_SettingsCalendarDetail.BTN_CANCEL)
    }

    /*****************************************************
     * Method: VerifyTableEntry
     * Description: This function click on Cancel button
     * @param {string} CalendarName
     * @param {string} Status
     *****************************************************/
    VerifyTableEntry(CalendarName, Status) {

        cy.VerifyTableEntry(
            elems_SettingsCalendarListing.TBL_LIST,

            'Status', Status,
            'Calendar Name', CalendarName,
        )
        cy.VerifyTableEntry(
            elems_SettingsCalendarListing.TBL_LIST,

            'Calendar Name', CalendarName,
            'Status', Status,

        )
    }

    /*****************************************************
     * Method: FacilityCalendarWorkFlow
     * Description: This function perform Facility Calendar Approval Workflow
     * @param {string} TaskID
     * @param {string} WorkFlowName
     *****************************************************/
    FacilityCalendarWorkFlow(TaskID, WorkFlowName, ApprovalOutCome, Remark) {

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Pending Task Listing")
        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkFlowName)
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(5000)
        cy.Click('(//h2[text()="Pending Task Listing"]/ancestor::div//table//a)[1]')
        cy.wait(5000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Pending Task Detail")
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, ApprovalOutCome)
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
    }

}

export default new FacilitySettingsCalendarDetailForm