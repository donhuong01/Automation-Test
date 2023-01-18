class elems_FacilityDetailFormDetailTab {

  static DETAILSTAB = {

    TXT_FACILITYNAME: '//input[@id="txtFacilityName"]',
    DATE_ACTIVATIONDATE: '//input[@id="pckActivationDate"]',
    BTN_SELECTFILES: '//div[@id="uplTemplateDocument"]//input',
    BTN_UPLOAD: '//h3[text()="Photos"]/following-sibling::button[text()="Upload"]',
    BTN_CLOSE: '//button[text()="Close"]',
    BTN_FACILITYTYPE: '//label[@for="pckFacilityType"]//following-sibling::div//button',
    TXT_FACILITYTYPEPOPUP: '//input[@name="name"]',
    BTN_LOCATION: '//label[@for="pckLocation"]//following-sibling::div//button',
    TXT_LOCATIONPOPUP: '//input[@name="name"]',
    TBL_FORMATALLOWEDSELECTION: '//h6[text()="Formats Allowed Selection"]//following-sibling::div',
    TBL_FORMATALLOWEDSELECTED: '//h6[text()="Formats Allowed Selected"]//following-sibling::div',
    BTN_TRANSFERTO: '//a[@data-command="transferTo"]',
    BTN_TRANSFERFROM: '//a[@data-command="transferAllFrom"]',
    BTN_TRANSFERALLTO: '//a[@title="Transfer All To" and @aria-label="Transfer All To"]',
    BTN_TRANSFER: '//a[@title="Transfer All From"and @aria-label="Transfer All From"]',
    TBL_OPERATINGPERIODS: '//h3[text()="Operating Periods"]//following-sibling::div',
    CHK_HASRESOURCE: '//input[@id="chkHaveResources"]',
    DRP_IMAGERCATEGORY: '//h3[text()="Photos"]/following-sibling::div//tbody//span[@class="k-widget k-dropdown"]'

  }
  static ASSOCIATEDRESOURCES = {

    CHK_HASRESOURCES: '//input[@id="chkHaveResources"]',
    BTN_CREATERESOURCE: '//button[text()="Create Resource"]',
    BTN_CREATEBUNDLERESOURCE: '//button[text()="Create Bundle Resource"]',
    BTN_ADDEXISTINGRESOURCE: '//button[text()="Add Existing Resource"]',
    BTN_REMOVERESOURCE: '//button[text()="Remove Resource"]',
    TBL_ASSOCIATESRESOURCES: '//h3[text()="Associated Resources"]/following-sibling::div//table',
    TXT_RESOURCENAME: '//input[@id="txtResourceName"]',
    BTN_SEARCHFILTERS: '//button[@form="formResourceDialog"]',
    CHK_RESOURCETYPE: '//label[text()="Inventory Item"]/preceding-sibling::input',
    CHK_ADDITIONALBOOKABLE: '//label[text()="Additional Bookable"]/preceding-sibling::input',
    CHK_EARNSAFRAPOINTS: '//input[@id="chkEarnSafraPoints"]',
    BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
    TXT_CHARGENAME: '//input[@name="scheduleChargeRate.1.chargeName"]',
    DRP_TRANSACTIONTYPE: '(//input[@name="scheduleChargeRate.1.chargeName"]/parent::td/following-sibling::td)[1]',
    DRP_CALCULATIONTYPE: '(//input[@name="scheduleChargeRate.1.chargeName"]/parent::td/following-sibling::td)[2]',
    DRP_AMOUNTTYPE: '(//input[@name="scheduleChargeRate.1.chargeName"]/parent::td/following-sibling::td)[3]',
    TBL_RESOURCE: '//form[@id="formResourceDialog"]/parent::div/following-sibling::div//table',
    BTN_SELECT: '//button[text()="Select"]',
    TXT_AVAILABLENUMBER: '//h3[text()="Associated Resources"]//following-sibling::div//span[@class="k-numeric-wrap"]//input',
    TXT_MAXQUANTITYAVAILABLE: '//input[@id="txtMaxQuantityAvailable"]',
    BTN_ADDCUSTOMERCATEGORY: '//button[text()="Delete"]/preceding-sibling::button[text()="Add Customer Category"]',
    TXT_CUSTOMERCATEGNAME: '//input[@id="txtCustomerCategoryName"]',
    BTN_SEARCHFILTER: '//button[@form="formCustomerCategoryDialog"]',
    PCK_PRODUCTITEMID: '//label[text()="Product Item ID"]/following-sibling::div//button',
    TXT_PRODUCTNO: '//input[@name="productNumber"]',
    BTN_SEARCHPRODUCTITEM: '//form[@id="frmChargeRate"]//button[@class="k-button search-button"]'

  }


  static GROUPBOOKINGTAB = {

    TAB_GROUPBOOKING: '//button[@data-rr-ui-event-key="groupBooking"]',
    CHK_ENABLEGROUPBOOKING: '//input[@id="chkEnableGroupBooking"]',
    NUM_GROUPBOOKINGISALLOWED: '//input[@id="txtNumberOfDaysAllowedGroupBookingEachMonth"]',
    NUM_GROUPBOOKINGISCONSOLIDATED: '//input[@id="txtDayConsolidateForBalloting"]',
    TXT_BALLOTTYPE: '//span[@id="drpBallotType"]',
    TXT_BALLOTBEFORE: '//input[@id="txtBallotBeforeDay"]',
    BTN_ADDBOOKINGACCESSMODE: '//button[@class="k-button" and contains(.,"Add Booking Access Mode")]',
    TXT_ACCESSMODE: '//input[@id="txtAccessModeName"]',
    BTN_ACCESSMODESEARCHFILTER: '//button[@form="formAccessModeDialog"]',

    BTN_ADDBOOKINGACCESSMODE: '//button[@class="k-button" and contains(.,"Add Booking Access Mode")]',
    TXT_ACCESSMODE: '//input[@id="txtAccessModeName"]',
    BTN_SEARCHFILTERBTNACCESSMODE: '//button[@form="formAccessModeDialog"]',
    BTN_ADDCUSTOMERCATEGORY: '//button[@class="k-button" and contains(.,"Add Customer Category")]',
    BTN_SEARCHFILTERCUSTOMERCATE: '//button[@form="formCustomerCategoryDialog"]',
    TXT_CUSTOMERNAMEPOPUP: '//input[@id="txtCustomerCategoryName"]',
    BTN_CUSTOMERCATESEARCHFILTER: '//button[@form="formCustomerCategoryDialog"]',
    CHK_WEDNESDAY: '//input[@id="chkWednesday"]',
    CHK_FRIDAY: '//input[@id="chkFriday"]',
    DRP_BALLOTTYPE: '//span[@id="drpBallotType"]',
    TXT_BALLOTBEFORE: '//input[@id="txtBallotBeforeDay"]',

  }

  static CHARGERATE = {

    TAB_CHARGERATE: '//button[text()="Charge Rate"]',
    BTN_ADD: '//button[text()="Add"]',
    BTN_DELETE: '//h3[text()="Charge Rate"]/parent::div//button[text()="Delete"]',
    TXT_CHARGERATENAME: '//input[@id="txtChargeRateName"]',
    BTN_SEARCHFILTERS: '//button[@class="k-button search-button" and contains(.,"Search Filters")]',
    TBL_CHARGERATE: '//h3[text()="Charge Rate"]/parent::div//div[@class="k-grid-header-wrap"]//table',

    DATE_STARTDATE: '//input[@id="dtpStartDate"]',
    PCK_LOCATION: '//label[@for="location"]//following-sibling::div//button',
    DATE_ENDDATE: '//input[@id="dtpEndDate"]',
    BTN_ADDCHARGETYPE: '//button[@class="k-button" and contains(.,"Add Charge Type")]',
    TXT_CHARGENAME: '//h3[text()="Charge Type List"]//following-sibling::div//table//input',
    DRP_TRANSACTIONTYPE: '(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
    DRP_CALCULATIONTYPE: '(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[2]',
    DRP_AMOUNTTYPE: '(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[3]',
    ICON_DELETE: '(//h3[text()="Charge Type List"]//following-sibling::div//table//span[@class="k-widget k-dropdown"])[1]',
    TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
    BTN_ADDCUSTOMERCATEGORY: '//button[text()="Add Customer Category"]',
    BTN_FILTERCATEGORY: '//button[@form="formCustomerCategoryDialog"]',
    TBL_CUSTOMERCATEGORY: '(//h3[text()="Customer Category"]//following-sibling::div//table)[2]',
    TXT_CUSTOMERCATEGORY: '(//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input',
    ICON_DELETECUSTOMERCATEGORY: '((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//td)[1]',
    TXT_NONPEAK: '((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input)[1]',
    TXT_PEAK: '((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input)[2]',
    TXT_SUPERPEAK: '((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input)[3]',
    TXT_SUPERHOLIDAY: '((//h3[text()="Customer Category"]//following-sibling::div//table)[2]//input)[4]',
  }

  static PRODUCTMAPPING = {

    TAB_PRODUCTMAPPING: '//button[@data-rr-ui-event-key="productMapping" and @type="button"]',
    BTN_BOOKINGFEEPRODUCT: '//label[@for="pckBookingItem"]//following-sibling::div//button',
    TXT_BOOKINGADMINITEM: '//input[@name="bookingAdminItem"]',

    TXT_PRODCUTNUMBER: '//input[@name="productNumber"]',
    TXT_PRODCUTNAME: '//input[@name="productName"]',
    TXT_SEARCHNAME: '//input[@name="searchName"]',
    DRP_ITEMMODELGROUP: '//select[@name="itemModelGroup"]',
    DRP_ITEMGROUP: '//select[@name="itemGroup"]',
    DRP_STORAGEDIMENSIONGROUP: '//select[@name="storageDimensionGroup"]',
    DRP_TRACKINGDIMENSIONGROUP: '//select[@name="trackingDimensionGroup"]',
    DRP_SALESCATEGORY: '//select[@name="salesCategory"]',
    DRP_PROCUREMENTcATEGORY: '//select[@name="procurementCategory"]',
    BTN_SEARCHFILTERS: '//div[@class="field-search-col col"]//button',

    TBL_SELECTPRODUCTCODE: '//div//preceding-sibling::div[@class="k-window-content k-dialog-content"]//table',

    BTN_SELECT: '//button[text()="Select"]',
    BTN_CANCEL: '//button[text()="Cancel"]',


  }

  static ADDITIONALINFORMATION = {

    TAB_ADDITIONALINFO: '//button[@data-rr-ui-event-key="additionalInformation"]',
    TXTAERA_DESCRIPTION: '//textarea[@id="txtDescription"]',
    TXTAERA_SPECAILREMARKS: '//textarea[@id="txtSpecialRemarks"]',
    TXTAERA_CONTACTPERSONINFORMATION: '//textarea[@id="txtContactPersonInformation"]',
    CHK_ENABLEINDEITYWAIVER: '//input[@id="chkEnableIndemnityWaiver"]',
    TXTAERA_INDEMNITYTEXT: '//textarea[@id="txtIdemnityWaiver"]',
    CHK_ENABLETERMANDCONDITIONS: '//input[@id="chkEnableTermsAndConditions"]',
    TXTAREA_TERMANDCONDITIONTEXT: '//textarea[@id="txtTermsAndConditionsText"]'
  }

  static ATTACHMENT = {

    TAB_ATTACHMENT: '//button[@data-rr-ui-event-key="attachments"]',
    BTN_UPLOAD: '//h3[text()="Attachments"]/following-sibling::div//button[text()="Upload"]',
    BTN_REMOVEATTACHMENT: '//h3[text()="Attachments"]/following-sibling::div//button[text()="Remove"]',
    BTN_SELECTFILES: '//div[@id="uplTemplateDocument"]',
    TBL_ATTACHMENTS: '//h3[text()="Attachments"]//following-sibling::div',
    BTN_CLOSE: '//button[text()="Close"]'

  }


  static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
  static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
  static BTN_CANCEL = '//button[@class="k-button" and contains(.,"Cancel")]'
  static BTN_SAVE = '//button[text()="Save"]'
  static TBL_FACILITYLISTING = '//h2[text()="Facilities Listing"]/parent::div/following-sibling::div//table'

}
export default elems_FacilityDetailFormDetailTab