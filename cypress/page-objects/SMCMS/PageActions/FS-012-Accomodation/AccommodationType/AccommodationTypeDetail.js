import elems_AccommodationTypeDetail from '../../../Elements/FS-012-Accomodation/AccommodationTypeDetail'
import elems_AccommodationTypeListing from '../../../Elements/FS-012-Accomodation/AccommodationTypeListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker'

class AccommodationTypeDetail {

    /*****************************************************
      * Method: verify PageTitle
      * Description: Verify Accommodation Type Detail Form
      * @param {string} ExpectedPg 
       *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }
    /*****************************************************
      * Method: Save
      * Description: click on save button
       *****************************************************/
    Save() {
        cy.Click(elems_AccommodationTypeDetail.BTN_SAVE)
        cy.wait(2000)

    }
    /*****************************************************
      * Method: SaveAsDraft
      * Description: click on save button
       *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_AccommodationTypeDetail.BTN_SAVEASDRAFT)
        cy.wait(2000)

    }
    /*****************************************************
      * Method: SubmitForApproval
      * Description: click on save button
       *****************************************************/
    SubmitForApproval() {
        cy.Click(elems_AccommodationTypeDetail.BTN_SUBMITFORAPPROVAL)
        cy.wait(2000)

    }

    //Detail Tab
    //Accommodation Type Information

    /*****************************************************
      * Method: AccoTypeInfo
      * Description: This function enter Accommodation Type name
      * @param {string} AccTypeName 
       *****************************************************/
    AccoTypeInfo(AccTypeName) {
        cy.EnterText(elems_AccommodationTypeDetail.TXT_ACCOMODATIONTYPENAME, AccTypeName)

    }
    //Category
    /*****************************************************
      * Method: FillOutCategoryInfo
      * Description: This function Fill Out Category Information
      * @param {string} LifeStyleGroup  
      * @param {string} FABSGroup 
      * @param {string} ClubClassification 
      * @param {string} SMCClassification 
       *****************************************************/
    FillOutCategoryInfo(LifeStyleGroup, FABSGroup, ClubClassification, SMCClassification) {

        if (LifeStyleGroup != undefined) {
            //Lifestyle Group
            cy.SelectPickerFilter(elems_AccommodationTypeDetail.PCK_LIFESTYLEGROUP,
                elems_AccommodationTypeDetail.TXT_CODESETNAME, LifeStyleGroup,
                elems_AccommodationTypeDetail.BTN_PICKERSEARCHFILTER)
        }

        if (FABSGroup != undefined) {
            // FABS Group
            cy.SelectPickerFilter(elems_AccommodationTypeDetail.PCK_FABSGROUP,
                elems_AccommodationTypeDetail.TXT_CODESETNAME, FABSGroup,
                elems_AccommodationTypeDetail.BTN_PICKERSEARCHFILTER)
        }

        if (ClubClassification != undefined) {
            // Club Classification
            cy.SelectPickerFilter(elems_AccommodationTypeDetail.PCK_CLUBCLASSIFICATION,
                elems_AccommodationTypeDetail.TXT_CODESETNAME, ClubClassification,
                elems_AccommodationTypeDetail.BTN_PICKERSEARCHFILTER)
        }
        if (SMCClassification != undefined) {
            // SMC Classification
            cy.SelectPickerFilter(elems_AccommodationTypeDetail.PCK_SMCCLASSIFICATION,
                elems_AccommodationTypeDetail.TXT_CODESETNAME, SMCClassification,
                elems_AccommodationTypeDetail.BTN_PICKERSEARCHFILTER)
        }

    }
    /*****************************************************
     * Method: EditAccessModes
     * Description: This function click on Edit Access Modes button
     *****************************************************/
    ClickEditAccessModes() {
        cy.Click(elems_AccommodationTypeDetail.BTN_EDITACCESSMODES)
        cy.wait(3000)

    }
    /*****************************************************
     * Method: EditCustomerCategories
     * Description: This function click on Edit Customer Categories button
     *****************************************************/
    ClickEditCustomerCategory() {
        cy.Click(elems_AccommodationTypeDetail.BTN_EDITCUSTOMERCATEGORIES)
        cy.wait(3000)

    }
    /*****************************************************
     * Method: FilloutHorizon
     * Description: This function Fillout Horizone Section
     *****************************************************/
    FilloutHorizon(AccessMode, CustomerCateg, EnableHorizone, NewBookingStartDate,
        ButWithinMonth, ButWithinDays, CustomerAllowdMonth, CustomerAllowdDays) {

        cy.Click(elems_AccommodationTypeDetail.HORIZONE.BTN_ADDHORIZON)
        cy.wait(3000)
        cy.SelectDropDownItem(elems_AccommodationTypeDetail.HORIZONE.DRP_ACCESSMODE, AccessMode)
        cy.SelectDropDownItem(elems_AccommodationTypeDetail.HORIZONE.DRP_CUSTOMERCATEGORY, CustomerCateg)
        cy.TickCheckBox(elems_AccommodationTypeDetail.HORIZONE.CHK_ENABLEHORIZONE, EnableHorizone)
        cy.EnterText(elems_AccommodationTypeDetail.HORIZONE.TXT_NEWBOOKINGSTARTDATE, NewBookingStartDate)
        cy.EnterText(elems_AccommodationTypeDetail.HORIZONE.TXT_BUTWITHINMONT, ButWithinMonth)
        cy.EnterText(elems_AccommodationTypeDetail.HORIZONE.TXT_BUTWITHINDAYS, ButWithinDays)
        cy.EnterText(elems_AccommodationTypeDetail.HORIZONE.TXT_CUSTALLOWTOVIEWACCOMMOAVAILMONTH, CustomerAllowdMonth)
        cy.EnterText(elems_AccommodationTypeDetail.HORIZONE.TXT_CUSTALLOWTOVIEWACCOMMOAVAILDAYS, CustomerAllowdDays)

    }
    /*****************************************************
     * Method: FilloutQuota
     * Description: This function Fillout Quota Section
     *****************************************************/
    FilloutQuota(CustomerCateg, PeakEnableQouta, PeakQoutaFor, PeakMaximumSlotHour, NonPeakEnableQouta, NonPeakQoutaFor, NonPeakMaximumSlotHour) {

        cy.Click(elems_AccommodationTypeDetail.QUOTA.BTN_ADDQUOTA)
        cy.wait(3000)
        cy.SelectDropDownItem(elems_AccommodationTypeDetail.QUOTA.DRP_CUSTOMERCATEGORY, CustomerCateg)

        cy.TickCheckBox(elems_AccommodationTypeDetail.QUOTA.CHK_NONPEAKENABLEQOUTA, NonPeakEnableQouta)
        cy.SelectDropDownItem('(//h3[text()="Quota"]/parent::div//table//td//span[@class="k-widget k-dropdown"])[3]', NonPeakQoutaFor)
        cy.EnterText(elems_AccommodationTypeDetail.QUOTA.TXT_NONPEAKMAXIMUMSLOTHOUR, NonPeakMaximumSlotHour)


    }
    /*****************************************************
     * Method: ClickAddAccessMode
     * Description: This function click on Add Access Mode button
     * @param {string} AccessMode
     *****************************************************/
    ClickAddAccessMode(AccessMode) {

        cy.SelectPickerFilter(elems_AccommodationTypeDetail.BTN_ADDACCESSMODE,
            elems_AccommodationTypeDetail.TXT_ACCESSMODE, AccessMode,
            '//button[@form="formAccessModeDialog"]')

    }
    /*****************************************************
     * Method: AddCustomerCateg
     * Description: 
     * @param {string} CustomerCateName
     *****************************************************/
    ClickAddCustomerCateg(CustomerCateName) {
        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.BTN_ADDCUSTOMERCATEGORY, 6000,
            elems_AccommodationTypeDetail.TXT_CUSTOMERCATEGORYNAME, CustomerCateName,
            '//button[@form="formCustomerCategoryDialog"]')
    }

    // Slot Configuration
    /*****************************************************
     * Method: FillOutSlotConfiguration
     * Description: This function fillout Slot Configuration section
     * @param {string} EnableSlotNo
     * @param {string} MaxNoOFAccommodation
     * @param {string} AllowReservation
     * @param {string} SendNotification
     *****************************************************/
    FillOutSlotConfiguration(EnableSlotNo, MaxNoOFAccommodation, AllowReservation, SendNotification) {

        cy.TickCheckBox(elems_AccommodationTypeDetail.CHK_ENABLESLOTNUMBER, EnableSlotNo)
        cy.Click(elems_AccommodationTypeDetail.TXT_MAXNOOFACCOMODATION, MaxNoOFAccommodation)
        cy.TickCheckBox(elems_AccommodationTypeDetail.CHK_ALLOWRESERVATION, AllowReservation)
        cy.TickCheckBox(elems_AccommodationTypeDetail.CHK_SENDNOTIFICATIONWHENRESERVATIONEXPIRED, SendNotification)

    }

    // Documents
    /*****************************************************
     * Method: FillOutSlotDocuments
     * Description: This function fillout Documents section
     * @param {string} PermitTemplateCode
     * @param {string} AuthorisationPermit
     *****************************************************/
    FillOutSlotDocuments(PermitTemplateCode, AuthorisationPermit) {

        cy.SelectDropDownItem(elems_AccommodationTypeDetail.DRP_PERMITTEMPLTECODE, PermitTemplateCode)
        cy.SelectDropDownItem(elems_AccommodationTypeDetail.DRP_AUTHORISATION, AuthorisationPermit)

    }

    // Operating Period Tab
    /*****************************************************
     * Method: ClickOnOperatinPeriodTab
     * Description: This function click on Operating Period Tab
     *****************************************************/
    ClickOnOperatinPeriodTab() {

        cy.Click(elems_AccommodationTypeDetail.TAB_OPERATINGPERIOD)
        cy.wait(3000)

    }
    /*****************************************************
     * Method: AddCalendar
     * Description: This function Add Calendar
     *****************************************************/
    AddCalendar(CalendarName) {

        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.BTN_ADDCALENDAR, 8000,
            elems_AccommodationTypeDetail.TXT_CALENDARNAME, CalendarName,
            '//button[@form="formCalendarDialog"]')

       


    }
    /*****************************************************
     * Method: AddPeriodOfCalendar
     * Description: This function Add Period to the Calendar
     * OperatingPeriodName
     *****************************************************/
    AddPeriodOfCalendar(OperatingPeriodName) {

        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.LINK_PERIODNAME,5000,
            elems_AccommodationTypeDetail.TXT_OPERATINGPERIODNAME, OperatingPeriodName,
            '//button[@form="formOperatingPeriodDialog"]')

        cy.Click(elems_AccommodationTypeDetail.LINK_PERIODNAME)
        cy.wait(5000)
        cy.EnterText(elems_AccommodationTypeDetail.TXT_OPERATINGPERIODNAME, OperatingPeriodName)
        cy.Click('//button[@form="formOperatingPeriodDialog"]')
        cy.wait(2000)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Operating Period Name', OperatingPeriodName)
        

        cy.Click(elems_AccommodationTypeDetail.BTN_APPLYTOALLCALENDARPERIOD)

    }


    //CHARGERATE TAB
    /*****************************************************
     * Method: ChargeRateTab
     * Description: This function Click on Charge Rate Tab
     *****************************************************/
    ChargeRateTab() {

        cy.Click(elems_AccommodationTypeDetail.CHARGERATE.TAB_CHARGERATE)

    }
    /*****************************************************
     * Method: AddChargeRate
     * Description: This function 
     *****************************************************/
    AddChargeRate() {

        cy.Click(elems_AccommodationTypeDetail.CHARGERATE.BTN_ADD)
        cy.wait(7000)

    }
    /*****************************************************
     * Method: FilloutChargeRateInformation
     * Description: This function 
     *****************************************************/
    FilloutChargeRateInformation(ChargeRateName, /*StartDate,*/ location, /*EndDate*/) {

        cy.EnterText(elems_AccommodationTypeDetail.CHARGERATE.TXT_CHARGERATENAME, ChargeRateName)
        //cy.EnterDate(elems_AccommodationTypeDetail.CHARGERATE.DATE_STARTDATE, StartDate)
        cy.SelectPickerItem(elems_AccommodationTypeDetail.CHARGERATE.PCK_LOCATION, location)
        //cy.EnterDate(elems_AccommodationTypeDetail.CHARGERATE.DATE_ENDDATE, EndDate)

    }
    // /*****************************************************
    //  * Method: ChargeTypeList
    //  * Description: This function 
    //  *****************************************************/
    // ChargeTypeList(ChargeName, TransactionType, CalculationType, AmountType) {

    //     cy.EnterText(elems_AccommodationTypeDetail.CHARGERATE.TXT_CHARGENAME, ChargeName)
    //     cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_TRANSACTIONTYPE, TransactionType)
    //     cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_CALCULATIONTYPE, CalculationType)
    //     cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_AMOUNTTYPE, AmountType)

    // }

    /*****************************************************
     * Method: ChargeTypeList
     * Description: This function Fill Out Charge Type List
     * @param {string} ChargeName
     * @param {string} TransactionType
     * @param {string} CalculationType
     * @param {string} AmountType
     *****************************************************/
        ChargeTypeList(ChargeName, TransactionType, CalculationType, AmountType) {
            cy.Click(elems_AccommodationTypeDetail.CHARGERATE.BTN_ADDCHANGETYPE)
            cy.EnterText(elems_AccommodationTypeDetail.CHARGERATE.TXT_CHARGERATE, ChargeName)
            cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_TRANSACTIONTYPE, TransactionType)
            cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_CALCULATIONTYPE, CalculationType)
            cy.SelectDropDownItem(elems_AccommodationTypeDetail.CHARGERATE.DRP_AMOUNTTYPE, AmountType)
        }
    /*****************************************************
     * Method: AddCustomerCategory
     * Description: This function 
     *****************************************************/
    AddCustomerCategory(CustomerCateg) {

        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.CHARGERATE.BTN_ADDCUSTOMERCATEGORY, 5000,
            elems_AccommodationTypeDetail.CHARGERATE.TXT_CUSTOMERCATEGORYNAME, CustomerCateg,
            '//button[@form="formCustomerCategoryDialog"]')
    }

    //Product Mapping Tab

    /*****************************************************
     * Method: AddCustomerCategory
     * Description: This function 
     *****************************************************/
    AddCustomerCategory(CustomerCateg) {

        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.CHARGERATE.BTN_ADDCUSTOMERCATEGORY, 5000,
            elems_AccommodationTypeDetail.CHARGERATE.TXT_CUSTOMERCATEGORYNAME, CustomerCateg,
            '//button[@form="formCustomerCategoryDialog"]')
        cy.EnterText('//h3[text()="Customer Category"]/following-sibling::div//table//input', 25)
    }


    // Producting Mapping Tab

    /*****************************************************
     * Method: ClickProductMappingTab
     * Description: This function 
     *****************************************************/
    ClickProductMappingTab() {

        cy.Click(elems_AccommodationTypeDetail.TAB_PRODUCTMAPPING)
    }
    /*****************************************************
         * Method: ProductMappingTab
         * Description: This function 
         *****************************************************/
    ProductMappingTab(BookingAdminFeeProduct, ReservationAdminFeeProduct, CancellationAdminFeeProduct) {

        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.PCK_BOOKINGADMINFEEPRODUCT, 5000,
            elems_AccommodationTypeDetail.TXT_PRODUCTNAME, BookingAdminFeeProduct,
            '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.PCK_RESERVETIONADMINFEE, 5000,
            elems_AccommodationTypeDetail.TXT_PRODUCTNAME, ReservationAdminFeeProduct,
            '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
        cy.SelectPickerDifferentItemsWait(elems_AccommodationTypeDetail.PCK_CANCELLATIONADMINFEEPRODUCT, 5000,
            elems_AccommodationTypeDetail.TXT_PRODUCTNAME, CancellationAdminFeeProduct,
            '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
    }

}
export default new AccommodationTypeDetail