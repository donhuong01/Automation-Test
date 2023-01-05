class elems_FacilityTypeSetupDetailForm {

    static DETAILSTAB = {

        TXT_FACILITYTYPENAME: '//input[@id="facilityTypeName"]',
        BTN_ADDLOCATION: '//button[text()="Remove"]//preceding-sibling::button',
        BTN_REMOVELOCATION: '//button[text()="Remove" and @type="button"]',
        TXT_LOCATIONNAMEPOPUP: '//input[@id="txtLocationName"]',
        TBL_LOCATION: '//h3[text()="Location"]//following-sibling::div//table',

        BTN_SEARCHFILTERSCAT: '//button[@class="k-button search-button" and @type="button"]',
        BTN_SEARCHFILTERSCATEGORY: '//button[@form="formFiltersCodeSet"]',
        BTN_SEARCHFILTERSLOCATION: '//button[@form="formLocationDialog"]',
        
        BTN_SEARCHFILTERSCUSTOMERCATEGORY: '//button[@form="formCustomerCategoryDialog"]',
        BTN_SEARCHFILTERSACCESSMODE: '//button[@form="formAccessModeDialog"]',
        BTN_SEARCHFILTERSCUSTOMERCATEGORYSIALOG: '//button[@form="formCustomerCategoryDialog"]',

        PCK_CATEGORY: '//label[@for="pckCategory"]/parent::div//button',
        TXT_FACILITYCATEGORY: '//input[@name="name"]',
        PCK_LIFESTYLEGROUP: '//label[@for="pckLifestyleGroup"]/parent::div//button',
        TXT_LIFESTYLEGROOUP: '//input[@name="name"]',
        PCK_FABSGROUP: '//label[@for="pckFabsGroup"]/parent::div//button',
        TXT_FABGROUP: '//input[@name="name"]',
        PCK_CLUBCLASSIFICATION: '//label[@for="pckClubClassification"]/parent::div//button',
        TXT_CLUBCLASSIFICATION: '//input[@name="name"]',
        PCK_SMCCLASSIFICATION: '//label[@for="pckSMC classification"]/parent::div//button',
        TXT_SMCCLASSIFICATION: '//input[@name="name"]',
        DRP_TYPEOFINVOICINGFORBOOKING: '//span[@aria-labelledby="drpTypeOfInvoicingForBooking_label"]',

        CHK_ADDITIONALNRICNORMALBOOKING: '//input[@id="chkNricRequiredNormalBooking"]',
        NUM_NUMOFADDITIONALNRIC: '//input[@id="normalNumberofAdditionalNRIC"]',
        CHK_CUSTOMCATEGORY: '//input[@id="normalRequireCustomerCategory"]',
        TXT_CUSTOMCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
        TBL_CUTOMCATEGORY: '//h3[text()="Customer Category"]//following-sibling::div//table',
        CHK_ADDITIONALNRICGROUPNRIC: '//input[@id="chkNricRequiredGroupBooking"]',
        NUM_NUMOFNRICBOOKINGGROUOP: '//input[@id="normalRequireCustomerCategory"]',
        CHK_CUSTOMCATEGORYGB: '//input[@id="groupRequireCustomerCategory"]',
        BTN_ADDCUSTOMERCATEGORYGB: '//h3[text()=" Customer Category"]//following-sibling::button[@class="k-button link-button"]',
        TBL_AddCUSTOMERCATEGORY: '//h3[text()="Customer Category"]//following-sibling::div//table',

        BTN_EDITACCESSMODES: '//button[text()="Edit Access Modes"]',
        BTN_ADDACCESSMODE: '//button[text()="Add Access Mode"]',
        TXT_ACCESSMODE: '//input[@id="txtAccessModeName"]',
        BTN_EDITCUSTOMERCATEGORIES: '//button[text()="Edit Customer Categories"]',
        TXT_CUSTOMERCATEGORYPOPUP: '//input[@id="txtCustomerCategoryName"]',
       
        // HORIZON
        BTN_ADDHORIZON: '//button[text()="Add Horizon"]',
        DRP_ACCESSMODE:'(//table//span[@class="k-widget k-dropdown"]//span[@class="k-dropdown-wrap"])[1]',
        DRP_CUSTOMERCATEGORY:'(//table//span[@class="k-widget k-dropdown"]//span[@class="k-dropdown-wrap"])[2]',
        CHK_ENABLEHORIZONE:'//h3[text()="Horizon"]/following-sibling::div//table//input[@type="checkbox"]',
        TXT_HORIZONHOURBEFORE:'//h3[text()="Horizon"]/following-sibling::div//table//input[@name="minHourBookingInAdvance"]',
        TXT_HORIZONATCURRENTDAYS:'//h3[text()="Horizon"]/following-sibling::div//table//input[@name="bookingMustBeDoneAtMostDaysBefore"]',
        TXT_HORIZONOFCURRENTDAYS:'(//h3[text()="Horizon"]/following-sibling::div//table//span[@class="k-numeric-wrap"]//input)[3]',
        TXT_HORIZONATTIME:'//h3[text()="Horizon"]/following-sibling::div//table//span[@class="k-dateinput-wrap"]//input',

        CHK_BOOKINGQUOTE: '//input[@id="chkIsBookingQuotaEnabled"]',
        BTN_ADDQUOTA: '//button[text()="Add Quota"]',
        DRP_TYPEOFTIMING: '//span[@id="drpTypeOfTiming"]',
        TXT_SLOTLENGTH: '//input[@id="txtOneSlotLengthInMinutes"]',

        // Booking Timing Restrict
        NUM_NONPEAKMINSLOT: '//td[text()="Non Peak"]//following-sibling::td[1]',
        NUM_NONPEAKMAXSLOT: '//td[text()="Non Peak"]//following-sibling::td[2]',
        CHK_NONPEAKENABLE: '//td[text()="Non Peak"]//following-sibling::td[3]//input',

        NUM_SUPERPEAKMINSLOT: '//td[text()="Super Peak"]//following-sibling::td[1]',
        NUM_SUPERPEAKMAXSLOT: '//td[text()="Super Peak"]//following-sibling::td[2]',
        CHK_SUPERPEAKENABLE: '//td[text()="Super Peak"]//following-sibling::td[3]//input',

        NUM_GENERALMINSLOT: '//td[text()="General"]//following-sibling::td[1]',
        NUM_GENERALMAXSLOT: '//td[text()="General"]//following-sibling::td[2]',
        NUM_GENERALENABLE: '//td[text()="General"]//following-sibling::td[3]//input',

        //Reservation
        CHK_ALLOWRESERVATION: '//input[@id="chkAllowReservation"]',
        NUM_DATETOHOLDRESERVATION: '//input[@id="daysToHoldReservation"]',
        NUM_NEWRESERVATIONMAX: '//input[@id="newReservationMaxDays"]',
        NUM_NEWRESERVATIONMIN: '//input[@id="newReservationMinDays"]',
        NUM_ONERESERVATIONISALLOWED: '//input[@id="txtMaxBookingSlotsEachReservation"]',
        NUM_NOOFRESERVATION: '//input[@id="txtMaxNumOfreservationEachCustomer"]',

        //EXTENSION
        CHK_ALLOWEXTENSION: '//input[@id="chkIsAllowedForBookingExtension"]',
        NUM_NEWEXTENSIONMAXAFTERBOOKING: '//input[@id="txtMaxMinuteAfterBookingEndTime"]',
        NUM_NEWEXTENSIONMAXBEFOREBOOKING: '//input[@id="txtMaxMinuteBeforeBookingStartTime"]',
        NUM_MAXSLOTFOREACHBOOKING: '//input[@id="txtMaxBookingSlotsEachExtension"]',


    }

    static PRODUCTMAPPINGTAB = {

        TAB_PORDUCTMAPPING: '//button[text()="Product Mapping"]',
        PCK_BOOKINGADMINFEE: '//label[@for="pckBookingAdminFeeProduct"]//following-sibling::div//button',
        PCK_CANCELLATIONADMINFEE: '//label[@for="pckCancellationAdminFeeProduct"]//following-sibling::div//button',
        PCK_ADMENDENTADMINFEE: '//label[@for="pckAmendentAdminFeeProduct"]//following-sibling::div//button',
        PCK_EXTENTIONADMINFEE: '//label[@for="pckExtensionAdminFeeProduct"]//following-sibling::div//button',
        PCK_RESERVATIONADINFEE: '//label[@for="pckReservationAdminFeeProduct"]//following-sibling::div//button',
        TXT_PRODUCTNAME: '//input[@name="productName"]',
        BTN_SELECT: '//button[text()="Select"]',
        BTN_SEARCHFILTER: '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]',
        BTN_CANCEL: '//div[@class="k-dialog-buttongroup k-actions k-hstack k-justify-content-end"]//button[text()="Cancel"]'
    }
    static CHARGERATE = {

        TAB_CHARGERATE: '//button[text()="Charge Rate"]',
        BTN_ADD : '//h3[text()="Charge Rate"]/following-sibling::button[text()="Add"]',
        BTN_DELETE : '//h3[text()="Charge Rate"]/following-sibling::button[text()="Delete"]',
        TXT_CHARGERATE:'//input[@id="txtChargeRateName"]',
        BTN_SEARCHFILTER : '//button[@form="frmChargeRate"]',
        TBL_CHARGERATE:'//form[@id="formChargeRateTab"]//table',
        TXT_CHARGERATENAME:'//input[@id="txtChargeRateName"]',
        DATE_STARTDATE : '//input[@id="dtpStartDate"]',
        PCK_LOCATION: '//label[@for="location"]//following-sibling::div//button',
        TXT_LOCATION:'//label[text()="Location Name"]/following-sibling::input',
        BTN_FILTERLOCATION:'//div[@class="k-widget k-window k-dialog"]//button[text()="Search Filters"]',
        DATE_ENDDATE : '//input[@id="dtpEndDate"]',
        BTN_ADDCHARGETYPE: '//button[@class="k-button" and contains(.,"Add Charge Type")]',
        TXT_CHARGENAME:'//h3[text()="Charge Type List"]//following-sibling::div//table//input',
        DRP_TRANSACTIONTYPE:'(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
        DRP_CALCULATIONTYPE:'(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[2]',
        DRP_AMOUNTTYPE:'(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[3]',
        ICON_DELETE:'(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
        TXT_CUSTOMERCATEGORYNAME:'//input[@id="txtCustomerCategoryName"]',
        BTN_ADDCUSTOMERCATEGORY : '//button[text()="Add Customer Category"]',
        BTN_FILTERCATEGORY:'//button[@form="formCustomerCategoryDialog"]',
        TBL_CUSTOMERCATEGORY:'(//h3[text()="Customer Category"]//following-sibling::div//table)[2]',
        TXT_CUSTOMERCATEGORY:'(//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input',
        ICON_DELETECUSTOMERCATEGORY:'((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//td)[1]'

        
    }


    static OPERATINGPERIOD = {

        TAB_OPERATINGPERIOD: '//button[text()="Operating Period"]',
        BTN_REMOVECALENDAR: '//button[text()="Remove Calendar"]',
        BTN_GOTOLASTPAGE: '//h3[text()=" Periods of Calendar "]/following-sibling::div//a[@title="Go to the last page"]',
        BTN_ADDCALENDAR: '//button[text()="Add Calendar"]',
        TXT_CALENDARNAME: '//input[@id="txtCalendarName"]',
        BTN_SEARCHFILTER: '//button[@form="formCalendarDialog"]',
        BTN_SEARCHFILTERS: '//button[@form="formOperatingPeriodDialog"]',
        TBL_CALENDAR: '//form[@id="formOperatingPeriodTab" and contains(.,"Calendars")]//button//following-sibling::div//table',
        TBL_PERIODSCALENDAR: '//h3[text()=" Periods of Calendar "]//following-sibling::div//table',
        TBL_PERIODSCALENDARLINK: '//h3[text()=" Periods of Calendar "]//following-sibling::div//table//a[text()="2022"]',
        TXT_OPERATINGPERIODNAME: '//input[@id="txtOperatingPeriodName"]'
    }



    static BTN_REMOVECUSTOMCATEGORY = '//h3[text()="Customer Category"]//following-sibling::button[@class="k-button danger-button"]'
    static BTN_ADDCUSTOMERCATEGORY = '//h3[@class="card-title" and contains(.,"Customer Category")]//following::button[text()="Remove"]//preceding-sibling::button'
    static BTN_ADDCUSTOMERCATEGORYBOOKING = '//div[@class="k-widget k-grid"]//button[text()="Add Customer Category"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'



}
export default elems_FacilityTypeSetupDetailForm