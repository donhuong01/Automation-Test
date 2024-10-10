class elems_AccommodationTypeDetail {

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_ACCOMODATIONTYPENUMBER = '//label[@for="txtAccommodationTypeNumber"]'
    static TXT_ACCOMODATIONTYPENAME = '//input[@id="txtAccommodationTypeName"]'
    static PCK_LIFESTYLEGROUP = '//label[@for="pckLifestyleGroup"]//following-sibling::div//button'
    static PCK_FABSGROUP = '//label[@for="pckFabsGroup"]//following-sibling::div//button'
    static PCK_CLUBCLASSIFICATION = '//label[@for="pckClubClassification"]//following-sibling::div//button'
    static PCK_SMCCLASSIFICATION = '//label[@for="pckSMCClassification"]//following-sibling::div//button'
    static TXT_CODESETNAME = '//input[@id="txtCodeName"]'
    static TXT_ABBREVIATION = '//input[@id="txtAbbreviation"]'
    static TXT_CODETYPE = '//input[@id="txtCodeType"]'
    static BTN_PICKERSEARCHFILTER = '(//button[text()="Search Filters"])[2]'

    static BTN_EDITACCESSMODES = '//button[text()="Edit Access Modes"]'
    static BTN_EDITCUSTOMERCATEGORIES = '//button[text()="Edit Customer Categories"]'
    static BTN_ADDACCESSMODE = '//button[text()="Add Access Mode"]'
    static TXT_ACCESSMODE = '//input[@id="txtAccessModeName"]'
    static BTN_ADDCUSTOMERCATEGORY = '//button[text()="Add Customer Category"]'
    static TXT_CUSTOMERCATEGORYNAME = '//input[@id="txtCustomerCategoryName"]'


    static HORIZONE = {

        BTN_ADDHORIZON: '//button[text()="Add Horizon"]',
        DRP_ACCESSMODE: '(//h3[text()="Horizon"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
        DRP_CUSTOMERCATEGORY: '(//h3[text()="Horizon"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[2]',
        TXT_NEWBOOKINGSTARTDATE: '//h3[text()="Horizon"]/following-sibling::div//table//input[@name="newBookingStartDate"]',
        CHK_ENABLEHORIZONE: '(//h3[text()="Horizon"]/following-sibling::div//table//input[@type="checkbox"])[1]',
        TXT_BUTWITHINMONT: '//h3[text()="Horizon"]/following-sibling::div//table//input[@name="withinMonths"]',
        TXT_BUTWITHINDAYS: '//h3[text()="Horizon"]/following-sibling::div//table//input[@name="withinDays"]',
        TXT_CUSTALLOWTOVIEWACCOMMOAVAILMONTH: '//h3[text()="Horizon"]/following-sibling::div//table//input[@name="allowToViewAccommodationWithinMonth"]',
        TXT_CUSTALLOWTOVIEWACCOMMOAVAILDAYS: '//h3[text()="Horizon"]/following-sibling::div//table//input[@name="allowToViewAccommodationWithinDay"]',

    }

    static QUOTA = {

        BTN_ADDQUOTA: '//button[text()="Add Quota"]',

        DRP_CUSTOMERCATEGORY: '(//h3[text()="Quota"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',

        DRP_PEAKQOUTAFOR: '(//h3[text()="Quota"]/following-sibling::div//table//label[text()="Quota For"]//following-sibling::span[@class="k-widget k-dropdown"])[1]',

        CHK_PEAKENABLEQUOTA: '(//h3[text()="Quota"]/following-sibling::div//table//input[@type="checkbox"])[1]',

        TXT_PEAKMAXIMUMSLOTHOUR: '(//h3[text()="Quota"]/following-sibling::div//table//input[@class="k-input k-formatted-value"])[1]',

        DRP_NONPEAKQOUTAFOR: '(//h3[text()="Quota"]/following-sibling::div//table//label[text()="Quota For"]//following-sibling::span[@class="k-widget k-dropdown"])[2]',

        CHK_NONPEAKENABLEQOUTA: '(//h3[text()="Quota"]/following-sibling::div//table//input[@type="checkbox"])[2]',

        TXT_NONPEAKMAXIMUMSLOTHOUR: '(//h3[text()="Quota"]/following-sibling::div//table//input[@class="k-input k-formatted-value"])[2]'

    }
    static CHK_ENABLESLOTNUMBER = '//input[@id="chkEnableSlotRestriction"]'
    static TXT_MAXNOOFACCOMODATION = '//input[@id="txtCustomerBookAtMost"]'
    static TXT_ARESERVATIONCANBEHOLD = '//input[@id="txtMaxDaysToHoldReservation"]'
    static CHK_ALLOWRESERVATION = '//input[@id="chkAllowReservation"]'
    static CHK_SENDNOTIFICATIONWHENRESERVATIONEXPIRED = '//input[@id="chkSendNotification"]'
    static DRP_PERMITTEMPLTECODE = '//span[@id="drpPermitTemplateCode"]'
    static DRP_AUTHORISATION = '//span[@id="drpAuthorisationPermitTemplateCode"]'

    static TBL_SETTINGSOPERATINGPERIODDETAILS = '//div[@class="page-title"]//following-sibling::div//table[@class="k-grid-table"]'

    //Operating Period tAB
    static TAB_OPERATINGPERIOD = '//li//button[text()="Operating Period"]'
    static BTN_ADDCALENDAR = '//button[text()="Add Calendar"]'
    static BTN_APPLYTOALLCALENDARPERIOD = '//button[text()="Apply to all Calendar Period"]'
    static BTN_REMOVECALENDAR = '//button[text()="Remove Calendar"]'
    static TXT_CALENDARNAME = '//input[@id="txtCalendarName"]'
    static TXT_OPERATINGPERIODNAME = '//input[@id="txtOperatingPeriodName"]'
    static TBL_CALENDARS = '//h3[text()="Calendars"]//following-sibling::div//table'
    static TBL_PERIODSOFCALENDARS = '//h3[text()=" Periods of Calendar "]//following-sibling::div//table'
    static LINK_PERIODNAME = '(//h3[text()=" Periods of Calendar "]//following-sibling::div//table//a)[1]'

    //Charge Rate Tab
    static CHARGERATE = {

        TAB_CHARGERATE: '//li//button[text()="Charge Rate"]',
        BTN_ADD: '//button[text()="Add"]',
        BTN_DELETE: '//button[text()="Delete"]',
        TXT_CHARGERATENAME: '//input[@id="txtChargeRateName"]',
        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
        TBL_CHARGERATE: '//form[@id="formChargeRateTab"]',
        BTN_ADDCHANGETYPE: '//button[text()="Add Charge Type"]',
        TXT_CHARGENAME: '//h3[text()="Charge Type List"]/following-sibling::div//table//input',
        TXT_CHARGERATE: '(//div[@class="k-grid-container"]//td)[3]',
        DRP_TRANSACTIONTYPE: '(//h3[text()="Charge Type List"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
        DRP_CALCULATIONTYPE: '(//h3[text()="Charge Type List"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[2]',
        DRP_AMOUNTTYPE: '(//h3[text()="Charge Type List"]/following-sibling::div//table//span[@class="k-widget k-dropdown"])[3]',
        TXT_CHARGERATENAME: '//input[@id="txtChargeRateName"]',
        DATE_STARTDATE: '//input[@id="dtpStartDate"]',
        PCK_LOCATION: '//label[@for="location"]//following-sibling::div//button',
        DATE_ENDDATE: '//input[@id="dtpEndDate"]',
        BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
        TBL_CHARGETYPELIST: '(//h3[text()="Charge Type List"]//following-sibling::div//table//td)',
        BTN_ADDCUSTOMERCATEGORY: '//button[text()="Add Customer Category"]',
        TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
        TBL_CUSTOMERCATEGORYNAME: '(//h3[text()="Customer Category"]//following-sibling::div//table//td)',
    }

    //Product Mapping
    static TAB_PRODUCTMAPPING = '//li//button[text()="Product Mapping"]'
    static PCK_BOOKINGADMINFEEPRODUCT = '//label[@for="pckBookingAdminFeeProduct"]//following-sibling::div//button'
    static PCK_RESERVETIONADMINFEE = '//label[@for="pckReservationAdminFeeProduct"]//following-sibling::div//button'
    static PCK_CANCELLATIONADMINFEEPRODUCT = '//label[@for="pckCancellationAdminFeeProduct"]//following-sibling::div//button'
    static TXT_PRODUCTNUMBER = '//input[@name="productNumber"]'
    static TXT_PRODUCTNAME = '//input[@name="productName"]'
    static TXT_SEARCHNAME = '//input[@name="searchName"]'
    static BTN_SEARCHFILTERS = '(//button[text()="Search Filters"])[2]'
    static BTN_SELET = '//button[text()="Select"]'


}
export default elems_AccommodationTypeDetail