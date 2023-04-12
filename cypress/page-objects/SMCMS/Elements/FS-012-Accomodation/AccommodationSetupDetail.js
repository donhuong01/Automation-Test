class elems_AccommodationSetupDetail {
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static DetailTab = {

        TAB_DETAIL: '//li//button[text()="Details"]',
        TXT_ACCOMMODATIONNAME: '//input[@id="txtAccommodationName"]',
        DATE_ACTIVATIONDATE: '//input[@id="pckActivationDate"]',
        PCK_ACCOMMODATIONTYPE: '//label[text()="Accommodation Type"]/following-sibling::div//button',
        TXT_ACCOMMODATIONTYPE: '//input[@name="name"]',

        TXT_MAXIMUMACCUPANCY: '//input[@id="txtMaximumOccupancy"]',
        BTN_UPLOADPHOTO: '//h3[text()="Photos"]/following-sibling::button[text()="Upload"]',

        TBL_CALENDARS: '//h3[text()="Calendars"]/following-sibling::div//table',
        TBL_OPERATINGPERIODS: '//h3[text()="Operating Periods"]/following-sibling::div//table',

        TIME_CHECKINTIME: '//input[@id="txtCheckInTime"]',
        TIME_CHECKOUTTIME: '//input[@id="txtCheckOutTime"]',

    }
    static ProductMappingTab = {
        TAB_PRODUCTMAPPING: '//li//button[text()="Product Mapping"]',
        PCK_BOOKINGFEEPRODUCT: '//label[text()="Booking Fee Product"]/following-sibling::div//button',
        PCK_RESERVATIONFEEPRODUCT: '//label[text()="Reservation Fee Product"]/following-sibling::div//button',
        TXT_PRODUCTNAME: '//input[@name="productName"]',
        TXT_PRODUCTNO: '//input[@name="productNumber"]',
    }
    static ChargeRateTab = {
        TAB_CHARGERATE: '//li//button[text()="Charge Rate"]',
        TXT_CHARGERATE: '//input[@id="txtChargeRateName"]',
        BTN_ADD: '//h3[text()="Charge Rate"]/following-sibling::button[text()="Add"]',
        BTN_DELETE: '//h3[text()="Charge Rate"]/following-sibling::button[text()="Delete"]',
        BTN_SEARCHFILTERS: '//button[@form="frmChargeRate"]',
        TBL_CHARGERATE: '//h3[text()="Charge Rate"]/parent::div//table',

        BTN_SAVE: '//button[@form="formAccommodationChargeRateDetail"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        BTN_ADDCHANGETYPE: '//button[text()="Add Charge Type"]',
        
        TXT_CHARGERATENAME: '(//div[@class="k-grid-container"]//td)[3]',
        DRP_TRANSACTIONTYPE: '(//div[@class="k-grid-container"]//td)[4]',
        DRP_CALCULATETYPE: '(//div[@class="k-grid-container"]//td)[5]',
        DRP_AMOUNTTYPE: '(//div[@class="k-grid-container"]//td)[6]',
        DATE_STARTDATE: '//input[@id="dtpStartDate"]',
        PCK_LOCATION: '//label[text()="Location"]//following-sibling::div//button',
        DATE_ENDDATE: '//input[@id="dtpEndDate"]',
        BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
        TXT_CHARGENAME: '//h3[text()="Charge Type List"]/..//table//input',
        DRP_TRANSACTIONTYPE: '(//h3[text()="Charge Type List"]/..//table//span[@class="k-widget k-dropdown"])[1]',
        DRP_CALCULATIONTYPE: '(//h3[text()="Charge Type List"]/..//table//span[@class="k-widget k-dropdown"])[2]',
        DRP_AMOUNTTYPE: '(//h3[text()="Charge Type List"]/..//table//span[@class="k-widget k-dropdown"])[3]',


        BTN_ADDCUSTOMERCATEGORY: '//button[text()="Add Customer Category"]',
        TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
        TXT_NONPEAK: '(//h3[text()="Customer Category"]/..//table//input)[1]',
        TXT_PEAK: '(//h3[text()="Customer Category"]/..//table//input)[2]',
        TXT_SUPERPEAK: '(//h3[text()="Customer Category"]/..//table//input)[3]',
        TXT_SUPERHOLIDAY: '(//h3[text()="Customer Category"]/..//table//input)[4]',

    }


    static AdditionalInformationTab = {
        TAB_ADDITIONALINFO: '//li//button[text()="Additional Information"]',
        TXT_DESCRIPTION: '//textarea[@id="txtDescription"]',
        TXT_SPECIALREMARKS: '//textarea[@id="txtSpecialRemarks"]',
        TXT_CONTACTPERSONINFORMATION: '//textarea[@id="txtContactPersonInformation"]',
        CHK_ENABLEINDEMNITYWAIVER: '//input[@id="chkEnableIndemnityWaiver"]',
        TXT_INDEMNITYTEXT: '//textarea[@id="txtIdemnityWaiver"]',
        CHK_ENABLETERMCONDITION: '//input[@id="chkEnableTermsAndConditions"]',
        TXT_TERMCONDITIONTEXT: '//textarea[@id="txtTermsAndConditionsText"]',
    }


}
export default elems_AccommodationSetupDetail