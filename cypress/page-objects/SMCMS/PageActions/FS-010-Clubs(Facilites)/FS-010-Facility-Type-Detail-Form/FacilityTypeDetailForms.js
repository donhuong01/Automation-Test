import elems_FacilityTypeSetupDetailForm from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityTypeSetupDetailForm'
import elems_Picker from '../../../Elements/Common/Picker'
import elems_Header from '../../../Elements/Common/PageHeader'
import elems_FacilityTypeListingForm from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityTypeListingForm'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
//Remove Location
//Type of Invoicing for Booking Drop Down
//Booking Section Remove Access Mode Type
class FacilityTypeDetailForm {

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function Verify Page Title
     * Author fshahzada
     * @param {string} Title
     *****************************************************/
     VerifyPageTitle(Title) {

       cy.ValidateElementText(elems_Header.LBL_PAGETITLE,Title)

    }


    /*****************************************************
     * Method: FacilityTypeInformation
     * Description: This function fillOut Facility type Information
     * Author fshahzada
     * @param {string} FacilityTypInfo
     *****************************************************/
     FacilityTypeInformation(FacilityTypInfo) {

        cy.xpath(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_FACILITYTYPENAME).clear()
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_FACILITYTYPENAME, FacilityTypInfo)

    }
    /*****************************************************
     * Method: FacilityAndLocationSection
     * Description: This function fillOut Facility type detail Form
     * Author fshahzada
     * @param {string} LocationName
     *****************************************************/
    AddLocationSection(LocationName) {

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDLOCATION,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_LOCATIONNAMEPOPUP,
            LocationName,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSLOCATION,
        )
    }

    /*****************************************************
     * Method: RemoveLocation
     * Description: This function remove location value
     * Author fshahzada
     * @param {string} RemoveLocation
     *****************************************************/
    RemoveLocation(RemoveLocation) {

        cy.SelectTableItem(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TBL_LOCATION,
            'Location Name', RemoveLocation,
        )
        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_REMOVELOCATION)
    }

    /*****************************************************
     * Method: FillOutCategorySection
     * Description: This function fillOut Facility type detail Form(Category section)
     * Author fshahzada
     * @param {string} FacilityCategory
     * @param {string} LifeStyleGroup
     * @param {string} FabGroup
     * @param {string} ClubClassification
     * @param {string} SMCClassification
     * @param {string} TypeOfInvoivingBooking
     *****************************************************/
    FillOutCategorySection(FacilityCategory, LifeStyleGroup, FabGroup, ClubClassification, 
                           SMCClassification, TypeOfInvoivingBooking) {

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.PCK_CATEGORY,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_FACILITYCATEGORY,
            FacilityCategory,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCAT,

        )

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.PCK_LIFESTYLEGROUP,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_LIFESTYLEGROOUP,
            LifeStyleGroup,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCATEGORY,

        )

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.PCK_FABSGROUP,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_FABGROUP,
            FabGroup,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCATEGORY,

        )

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.PCK_CLUBCLASSIFICATION,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_CLUBCLASSIFICATION,
            ClubClassification,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCATEGORY,

        )

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.PCK_SMCCLASSIFICATION,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_SMCCLASSIFICATION,
            SMCClassification,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCATEGORY,

        )

        // cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_TYPEOFINVOICINGFORBOOKING, TypeOfInvoivingBooking)

    }

    /*****************************************************
     * Method: BookingRestrictions
     * Description: This function fillOut Facility type detail Form(Booking Restrictions section)
     * @param {string} NormalBooking
     * @param {string} GroupBooking
     * @param {string} GroupCustomerCategory
     * @param {string} NormalCustomerCategory
     * @param {string} NumOfAdditionalNRIC
     * @param {string} CustomerCategory
     * @param {string} NumOfNRICBookingGroup
     * Author fshahzada
     *****************************************************/

    BookingRestrictions(NormalBooking, GroupBooking, GroupCustomerCategory, NormalCustomerCategory,
        CustomerCategory, NumOfAdditionalNRIC, NumOfNRICBookingGroup) {
        // const NormalBooking = 'check'
        // const GroupBooking = 'check'
        // const GroupCustomerCategory = 'check'
        // const NormalCustomerCategory = 'check'

        if (NormalBooking === 'check') {

            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ADDITIONALNRICNORMALBOOKING, 'check')
            cy.xpath(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NUMOFADDITIONALNRIC).clear()
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NUMOFADDITIONALNRIC, NumOfAdditionalNRIC)

            if (NormalCustomerCategory === 'check') {
                cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_CUSTOMCATEGORY, 'check')
                cy.SelectPickerDifferentItemsSeachBTN(
                    elems_FacilityTypeSetupDetailForm.BTN_ADDCUSTOMERCATEGORY,
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_CUSTOMCATEGORYNAME,
                    CustomerCategory,
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCUSTOMERCATEGORY,
                )
                cy.SelectTableItem(
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.TBL_AddCUSTOMERCATEGORY,
                    'Customer Category', CustomerCategory,
                )
                cy.Click(elems_FacilityTypeSetupDetailForm.BTN_REMOVECUSTOMCATEGORY)
            }
        }

        if (GroupBooking === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ADDITIONALNRICGROUPNRIC, 'check')
            cy.xpath(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NUMOFNRICBOOKINGGROUOP).type(NumOfNRICBookingGroup)

            if (GroupCustomerCategory === 'check') {
                cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_CUSTOMCATEGORYGB, 'check')
                cy.SelectPickerDifferentItemsSeachBTN(
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDCUSTOMERCATEGORYGB,
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_CUSTOMCATEGORYNAME,
                    CustomerCategory,
                    elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCUSTOMERCATEGORY,

                )

                // cy.SelectTableItem(
                //     elems_FacilityTypeSetupDetailForm.DETAILSTAB.TBL_AddCUSTOMERCATEGORY,
                //     'Customer Category', CustomerCategory,
                // )
                // cy.Click(elems_FacilityTypeSetupDetailForm.BTN_REMOVECUSTOMCATEGORY)
               

            }

        }
    }

    /*****************************************************
     * Method: BookingSection
     * Description: This function fillOut Facility type detail Form(Booking section)
     * @param {string} BookingQuote
     * @param {string} AccessMode
     * @param {string} CustomerCategoryDialog
     * @param {string} TypeOfTiming
     * @param {string} SlotLength
     * Author fshahzada
     *****************************************************/
    BookingSection(BookingQuote, AccessMode, CustomerCategoryDialog, TypeOfTiming, SlotLength, OneCustomerCan) {


        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITACCESSMODES)
        cy.wait(3000)

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDACCESSMODE,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_ACCESSMODE,
            AccessMode,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSACCESSMODE,

        )


        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITCUSTOMERCATEGORIES)
        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.BTN_ADDCUSTOMERCATEGORYBOOKING,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_CUSTOMERCATEGORYPOPUP,
            CustomerCategoryDialog,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCUSTOMERCATEGORYSIALOG,

        )


        if (BookingQuote === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_BOOKINGQUOTE, 'check')
            cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDQUOTA)
        }

        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_TYPEOFTIMING, TypeOfTiming)
        cy.IncreaseFieldValue(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_SLOTLENGTH, SlotLength)
        cy.IncreaseFieldValue(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_ONE_CUSTOMER_CAN, OneCustomerCan)

    }


    /*****************************************************
     * Method: UpdateBookingSection
     * Description: Update This function fillOut Facility type detail Form(Booking section)
     * @param {string} BookingQuote
     * @param {string} AccessMode
     * @param {string} CustomerCategoryDialog
     * @param {string} TypeOfTiming
     * @param {string} SlotLength
     * Author fshahzada
     *****************************************************/
    UpdateBookingSection( AccessMode, CustomerCategoryDialog) {


        //cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITACCESSMODES)
        // cy.Click('(//*[local-name()="svg"])[17]')
        cy.wait(3000)

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDACCESSMODE,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_ACCESSMODE,
            AccessMode,
            elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSACCESSMODE,

        )

        // cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITCUSTOMERCATEGORIES)
        // cy.Click('(//*[local-name()="svg"])[18]')
        // cy.SelectPickerDifferentItemsSeachBTN(
        //     elems_FacilityTypeSetupDetailForm.BTN_ADDCUSTOMERCATEGORYBOOKING,
        //     elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_CUSTOMERCATEGORYPOPUP,
        //     CustomerCategoryDialog,
        //     elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_SEARCHFILTERSCUSTOMERCATEGORYSIALOG,

        // )
    }


    /*****************************************************
     * Method: AddHorizon
     * Description: This function fillOut Facility type detail Form(Horizon section)
     * @param {string} AccessMode
     * @param {string} CustomerCategory
     * Author fshahzada
     *****************************************************/
    AddHorizon(AccessMode, CustomerCategory){
         cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDHORIZON)
         cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_ACCESSMODE,AccessMode)
         cy.wait(1000)
         cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_CUSTOMERCATEGORY,CustomerCategory)
         cy.wait(1000)
         cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ENABLEHORIZONE,'check')
         cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONHOURBEFORE,'2')
         cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONATCURRENTDAYS,'3')
         cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONATTIME,'01:00 AM')
         cy.wait(1000)
    }

    /*****************************************************
     * Method: AddAccessMode
     * Description: This function fillOut Facility type detail Form(Horizon section)
     * @param {string} AccessMode
     * @param {string} CustomerCategory
     * Author fshahzada
     *****************************************************/
    AddAccessMode(AccessMode, CustomerCategory, Hours, Days, DaysAndTime){
        cy.Click('(//*[local-name()="svg"])[20]')
        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_ADDHORIZON)
        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_ACCESSMODE,AccessMode)
        cy.wait(1000)
        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.DETAILSTAB.DRP_CUSTOMERCATEGORY,CustomerCategory)
        cy.wait(1000)
        cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ENABLEHORIZONE,'check')
        if (Hours === "Yes"){
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONHOURBEFORE,'2')
        }
        if(Days === "Yes"){
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONATCURRENTDAYS,'3')
        }
        if(DaysAndTime === "Yes"){
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.TXT_HORIZONATTIME,'01:00 AM')
        }
        cy.wait(1000)
   }




    /*****************************************************
     * Method: BookingTimingRestriction
     * Description: This function fillOut Facility type detail Form(Booking Timing Restrict Section)
     * Author fshahzada
     *****************************************************/
    BookingTimingRestriction() {

        const NonPeak = 'check'
        const SuperPeak = 'check'
        const General = 'check'

        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NONPEAKMINSLOT, "5")
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NONPEAKMAXSLOT, "15")
        if (NonPeak === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_NONPEAKENABLE, 'check')
        }

        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_PEAKMINSLOT, "5")
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_PEAKMAXSLOT, "15")
        if (NonPeak === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_PEAKENABLE, 'check')
        }

        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_SUPERPEAKMINSLOT, "5")
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_SUPERPEAKMAXSLOT, "15")
        if (SuperPeak === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_SUPERPEAKENABLE, 'check')
        }
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_SUPERPEAKMINSLOT, "5")
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_SUPERPEAKMAXSLOT, "15")
        if (SuperPeak === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_SUPERPEAKHOLIDAYENABLE, 'check')
        }

        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_GENERALMINSLOT, "5")
        cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_GENERALMAXSLOT, "15")
        if (General === 'check') {
            cy.TickCheckBox(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_GENERALENABLE, 'check')
        }

    }

    /*****************************************************
     * Method: Reservation
     * Description: This function fillOut Facility type detail Form(Reservation Section)
     * Author fshahzada
     *****************************************************/
    Reservation() {
        const AllowReservation = 'check'

        if (AllowReservation === 'check') {
            cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ALLOWRESERVATION)
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_DATETOHOLDRESERVATION, "30")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NEWRESERVATIONMAX, "30")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NEWRESERVATIONMIN, "5")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_ONERESERVATIONISALLOWED, "5")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NOOFRESERVATION, "5")

        }
    }

    /*****************************************************
     * Method: Extension
     * Description: This function fillOut Facility type detail Form(Extension Section)
     * Author fshahzada
     *****************************************************/
    Extension() {
        const AllowExtension = 'check'
        if (AllowExtension === 'check') {
            cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.CHK_ALLOWEXTENSION)
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NEWEXTENSIONMAXAFTERBOOKING, "30")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_NEWEXTENSIONMAXBEFOREBOOKING, "10")
            cy.EnterText(elems_FacilityTypeSetupDetailForm.DETAILSTAB.NUM_MAXSLOTFOREACHBOOKING, "10")

        }
    }

    /*****************************************************
     * Method: Save
     * Description: This function Click on Save Button
     * Author fshahzada
     *****************************************************/
    Save() {
        cy.Click(elems_FacilityTypeSetupDetailForm.BTN_SAVE)
        cy.wait(2000)
    }
    /*****************************************************
     * Method: SaveAsDraft
     * Description: This function Click on SaveAsDraft Button
     * Author fshahzada
     *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_FacilityTypeSetupDetailForm.BTN_SAVEASDRAFT)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: Cancel
     * Description: This function click on Cancel button
     * Author fshahzada
     *****************************************************/
    Cancel() {
        cy.Click(elems_FacilityTypeSetupDetailForm.BTN_CANCEL)
    }

    /*****************************************************
     * Method: NotificationMsg
     * Description: This function click on Cancel button
     * @param {string} Msg
     * Author fshahzada
     *****************************************************/
    NotificationMsg(Msg) {
        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
    }


    /*****************************************************
     * Method: ClickTableItem
     * Description: This function click on table link
     * @param {string} item
     * Author fshahzada
     *****************************************************/
     ClickTableItem(item) {
        cy.ClickTableLinkItem(elems_FacilityTypeListingForm.TBL_FACILITYTYPELISTING,"Facility Type Name",item)
    }

    /*****************************************************
     * Method: VerifyFacility
     * Description: This function click on table link
     * @param {string} FacilityName
     * @param {string} Status
     * Author fshahzada
     *****************************************************/
     VerifyFacility(FacilityName , Status) {

        cy.EnterText(elems_FacilityTypeListingForm.TXT_FACILITYTYPENAME,FacilityName)
        cy.wait(1000)
        cy.Click(elems_FacilityTypeListingForm.BTN_SEARCHFILTERS)
        cy.wait(1000)
        cy.VerifyTableEntry(elems_FacilityTypeListingForm.TBL_FACILITYTYPELISTING,"Facility Type Name",FacilityName)
        cy.VerifyTableEntry(elems_FacilityTypeListingForm.TBL_FACILITYTYPELISTING,"Status", Status)
    }


    /*****************************************************
     * Method: OperatingPeriodTab
     * Description: This function Click Operating Period Tab
     * Author fshahzada
     *****************************************************/
     OperatingPeriodTab() {
        cy.Click(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TAB_OPERATINGPERIOD)
        cy.wait(1000)
    }
    /*****************************************************
     * Method: ChargeRateTabe
     * Description: This function click Charge Rate Tabe
     * Author fshahzada
     *****************************************************/
     ChargeRateTabe() {
        cy.Click(elems_FacilityTypeSetupDetailForm.CHARGERATE.TAB_CHARGERATE)
        cy.wait(1000)
    }
    /*****************************************************
     * Method: ProductMappingTab
     * Description: This function Click Product Mapping Tab
     * Author fshahzada
     *****************************************************/
     ProductMappingTab() {
        cy.Click(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TAB_PORDUCTMAPPING)
        cy.wait(1000)
    }

    /*****************************************************
     * Method: AddCalendar
     * Description: This function Add Calendar
     * @param {string} calenderName
     * Author fshahzada
     *****************************************************/
     AddCalendar(calenderName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_ADDCALENDAR,
            elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TXT_CALENDARNAME,calenderName,
            elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_SEARCHFILTER)
    }

    /*****************************************************
     * Method: RemoveCalendar
     * Description: This function Remove Calendar
     * @param {string} calenderName
     * Author fshahzada
     *****************************************************/
     RemoveCalendar(calenderName) {
       cy.SelectTableItem(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TBL_CALENDAR,'Calendar Name',calenderName)
       cy.Click(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_REMOVECALENDAR)
    }

    /*****************************************************
     * Method: PeriodsOfCalendar
     * Description: This function Add Calendar
     * @param {string} PeriodName
     * Author fshahzada
     *****************************************************/
     PeriodsOfCalendar(PeriodName) {
        cy.Click(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_GOTOLASTPAGE)
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TBL_PERIODSCALENDARLINK,
            elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TXT_OPERATINGPERIODNAME,PeriodName,
            elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: SelectPeriodsOfCalendar
     * Description: This function Add Calendar
     * @param {string} PeriodName
     * @param {string} PeriodOfCalendar
     * Author fshahzada
     *****************************************************/
     SelectPeriodsOfCalendar(PeriodOfCalendar, PeriodName) {
        cy.Click(`//h3[text()=" Periods of Calendar "]//following-sibling::div//table//a[text()='${PeriodOfCalendar}']`)
        cy.wait(8000)
        cy.EnterText(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.TXT_OPERATINGPERIODNAME, PeriodName)
        cy.Click(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_SEARCHFILTERS)
        cy.wait(3000)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Operating Period Name', PeriodName)

        cy.Click(elems_FacilityTypeSetupDetailForm.OPERATINGPERIOD.BTN_APPLYTOALLCALENDARPERIOD)
        cy.wait(3000)

    }

    /*****************************************************
     * Method: SelectOperatingPeriod
     * Description: This function Apply to all calendar Period
     * @param {string} PeriodName
     * Author fshahzada
     *****************************************************/
     SelectOperatingPeriod(PeriodName) {
        cy.Click('//a[text()="Period 1"]')
        cy.EnterText('//input[@id="txtOperatingPeriodName"]', PeriodName)
        cy.Click('(//button[text()="Search Filters"])[2]')
        cy.Click('//button[text()="Apply to all Calendar Period"]')


        
    }

    /*****************************************************
     * Method: AddChargeRate
     * Description: This function Add Charge Rate
     * Author fshahzada
     *****************************************************/
     AddChargeRateButton() {
        cy.Click(elems_FacilityTypeSetupDetailForm.CHARGERATE.BTN_ADD)
        cy.wait(5000)
    }

    /*****************************************************
     * Method: FilloutChargeRateInfo
     * Description: This function Fillout Charge Rate Info
     * @param {string} ChargeRateName
     * @param {string} StartDate
     * @param {string} Location
     * @param {string} EndDate
     * Author fshahzada
     *****************************************************/
     FilloutChargeRateInfo(ChargeRateName, StartDate, Location, EndDate) {
        cy.EnterText(elems_FacilityTypeSetupDetailForm.CHARGERATE.TXT_CHARGERATENAME,ChargeRateName)
        cy.EnterDate(elems_FacilityTypeSetupDetailForm.CHARGERATE.DATE_STARTDATE,StartDate)
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.CHARGERATE.PCK_LOCATION,
            elems_FacilityTypeSetupDetailForm.CHARGERATE.TXT_LOCATION,Location,
            elems_FacilityTypeSetupDetailForm.CHARGERATE.BTN_FILTERLOCATION)
        cy.EnterDate(elems_FacilityTypeSetupDetailForm.CHARGERATE.DATE_ENDDATE,EndDate)
    }

    /*****************************************************
     * Method: FilloutChargeTypeList
     * Description: This function Fillout Charge Type List
     * @param {string} ChargeTypeName
     * @param {string} Transaction
     * @param {string} Calculation
     * @param {string} Amount
     * Author fshahzada
     *****************************************************/
     FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount) {
        cy.Click(elems_FacilityTypeSetupDetailForm.CHARGERATE.BTN_ADDCHARGETYPE)
        cy.EnterText(elems_FacilityTypeSetupDetailForm.CHARGERATE.TXT_CHARGENAME,ChargeTypeName)
        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.CHARGERATE.DRP_TRANSACTIONTYPE,Transaction)
        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.CHARGERATE.DRP_CALCULATIONTYPE,Calculation)
        cy.SelectDropDownItem(elems_FacilityTypeSetupDetailForm.CHARGERATE.DRP_AMOUNTTYPE,Amount)
        cy.wait(2000)
    }

    
    /*****************************************************
     * Method: AddCustomerCategory
     * Description: This function Add Customer Category
     * @param {string} CategoryName
     * @param {string} CategoryNumber
     * Author fshahzada
     *****************************************************/
     AddCustomerCategory(CategoryName, CategoryNumber) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.CHARGERATE.BTN_ADDCUSTOMERCATEGORY,
            elems_FacilityTypeSetupDetailForm.CHARGERATE.TXT_CUSTOMERCATEGORYNAME,CategoryName,
            elems_FacilityTypeSetupDetailForm.CHARGERATE.BTN_FILTERCATEGORY)
            cy.wait(2000)
            cy.EnterText(elems_FacilityTypeSetupDetailForm.CHARGERATE.TXT_CUSTOMERCATEGORY,CategoryNumber)
    }

    /*****************************************************
     * Method: BookingAdminFeeProduct
     * Description: This function add Booking Admin Fee Product
     * @param {string} ProductName
     * Author fshahzada
     *****************************************************/
     BookingAdminFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.PCK_BOOKINGADMINFEE,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TXT_PRODUCTNAME,ProductName,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.BTN_SEARCHFILTER)
            cy.wait(2000)
    }
    /*****************************************************
     * Method: CancellationAdminFeeProduct
     * Description: This function Add Cancellation Admin Fee Product
     * @param {string} ProductName
     * Author fshahzada
     *****************************************************/
     CancellationAdminFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.PCK_CANCELLATIONADMINFEE,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TXT_PRODUCTNAME,ProductName,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.BTN_SEARCHFILTER)
            cy.wait(2000)
    }
    /*****************************************************
     * Method: AmendmentAdminFeeProduct
     * Description: This function Add Cancellation Admin Fee Product
     * @param {string} ProductName
     * Author fshahzada
     *****************************************************/
     AmendmentAdminFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.PCK_ADMENDENTADMINFEE,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TXT_PRODUCTNAME,ProductName,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.BTN_SEARCHFILTER)
            cy.wait(2000)
    }
    /*****************************************************
     * Method: ExtentionAdminFeeProduct
     * Description: This function Add Extention Admin Fee Product
     * @param {string} ProductName
     * Author fshahzada
     *****************************************************/
     ExtentionAdminFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.PCK_EXTENTIONADMINFEE,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TXT_PRODUCTNAME,ProductName,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.BTN_SEARCHFILTER)
            cy.wait(2000)
    }
    /*****************************************************
     * Method: ReservationAdminFeeProduct
     * Description: This function Add Reservation Admin Fee Product
     * @param {string} ProductName
     * Author fshahzada
     *****************************************************/
     ReservationAdminFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.PCK_RESERVATIONADINFEE,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.TXT_PRODUCTNAME,ProductName,
            elems_FacilityTypeSetupDetailForm.PRODUCTMAPPINGTAB.BTN_SEARCHFILTER)
            cy.wait(2000)
    }

    /*****************************************************
     * Method: SubmitForApproval
     * Description: This function click submit for approval button
     * Author fshahzada
     *****************************************************/
     SubmitForApproval() {
        cy.xpath('//button[text()="Submit for Approval"]').click()
            cy.wait(2000)
    }
    /*****************************************************
     * Method: BookingCheckboxes
     * Description: This function will checked all the checkboxes
     * Author fshahzada
     *****************************************************/
     BookingCheckboxes() {
        const BookingTable = '(//h3[text()="Booking"]//following-sibling::div//table//td)'
        const AddCustomerCategory = '(//td[text()="All Customer Category"]//following-sibling::td//input)'

        cy.Click(AddCustomerCategory +'[1]')
        cy.Click(AddCustomerCategory +'[2]')
        cy.Click(AddCustomerCategory +'[3]')
        cy.Click(AddCustomerCategory +'[4]')


        
    }
    /*****************************************************
     * Method: ApprovalWorkFlow
     * Description: ApprovalWorkFlow
     * Author fshahzada
     *****************************************************/
     ApprovalWorkFlow(TaskID, WorkflowName, ApprovalOutcome, Remarks) {
        
        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkflowName)
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(10000)
        cy.Click('(//h2[text()="Pending Task Listing"]/ancestor::div//table//a)[1]')

        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, ApprovalOutcome)
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remarks)

        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)

        
    }


    /*****************************************************
     * Method: ClearSaveData
     * Description: Clear Inputted Data
     * Author: rdacpano
     *****************************************************/
    ClearSaveData() {
        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITACCESSMODES)
        cy.wait(3000)
        cy.Click('(//*[local-name()="svg"])[17]')
        // cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITACCESSMODES)
        cy.Click(elems_FacilityTypeSetupDetailForm.DETAILSTAB.BTN_EDITCUSTOMERCATEGORIES)
        cy.wait(3000)
        cy.Click('(//*[local-name()="svg"])[17]')

        
    }



}

export default new FacilityTypeDetailForm