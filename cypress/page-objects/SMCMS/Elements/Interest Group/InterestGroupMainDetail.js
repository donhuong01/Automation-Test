class elems_InterestGroupMainDetail {

  static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
  static BTN_SUBMIT = '//button[text()="Submit"]'
  static BTN_CANCEL = '//button[text()="Cancel"]'
  static BTN_VIEWINTERESTGROUP = '//button[text()="View Interest Group"]'

  static TabInterestGroup = {
    TAB_IGGROUP: '//button[text()="Interest Group"]',
    LBL_IGMAIN: '//label[text()="Interest Group Main"]/following-sibling::div',
    TXT_NAME: '//input[@id="txtName"]',
    TXT_CODE: '//input[@id="txtCode"]',
    RADIO_NORMAL: '//label[text()="Normal"]/preceding-sibling::input',
    RADIO_KIDSAMAZE: '//label[text()="Kids Amaze"]/preceding-sibling::input',
    RADIO_ENERGYONE: '//label[text()="Energy One"]/preceding-sibling::input',
    TXT_MAINCATEGTYPE: '//input[@id="txtMainCategoryType"]',

    PCK_IGCATEGGROUP: '//label[text()="Interest Group Category Group"]/following-sibling::div//button',
    TXT_IGGROUPCATEGGROUP: '//input[@id="txtCodeName"]',//'//label[text()="Interest Group Category Group"]/following-sibling::input',
    TBL_IGGROUPCATEGGROUP: '//div[@class="k-window-content k-dialog-content"]//table',
    BTN_SELECT: '//button[text()="Select"]',
    BTN_CANCEL: '//button[text()="Select"]//following-sibling::button',
    BTN_SEARCHFILTER: '//button[text()="Search Filters"]',

    PCK_FABSGROUP: '//label[text()="FABS Group"]/following-sibling::div//button',
    PCK_CLUBCLASSIFICATION: '//label[text()="Club Classification"]/following-sibling::div//button',
    PCK_LIFESTYLEGROUP: '//label[text()="Lifestyle Group"]/following-sibling::div//button',
    PCK_SMCCLASSIFICATION: '//label[text()="SMC Classification"]/following-sibling::div//button',
    PCK_OWNER: '//label[text()="Owner"]/following-sibling::div//button',
    TXT_LOGINEMAIL: '//label[text()="Login Email"]/following-sibling::input',
    TXT_OWNERNAME: '//label[text()="Name"]/following-sibling::input',
    TBL_SELECTUSER: '//div[text()="Select User"]/../following-sibling::div//table',

    TXT_CODESETNAME: '//input[@id="txtCodeName"]',
    TXT_ABBREVIATIONCODE: '//input[@id="txtAbbreviation"]',
    TXT_CODETYPE: '//input[@id="txtCodeType"]',
    TBL_PICKER: '//form[@id="formFiltersCodeSet"]/parent::div/following-sibling::div/table',


    DRP_APPROVALOPTION: '//span[@id="drpApprovalOption"]',
    PCK_APPROVER: '//label[text()="Approver"]/following-sibling::div//button',
  }

  static Location = {
    BTN_ADD: '//h3[text()="Location"]/following-sibling::button[text()="Add"]',
    BTN_REMOVE: '//h3[text()="Location"]/following-sibling::button[text()="Remove"]',
    TXT_LOCATIONNAME: '//input[@id="txtLocationName"]',
    TBL_SELECTLOCATION: '//form[@id="formLocationDialog"]/parent::div/parent::div//table',
    BTN_SEARCHFILTER: '//button[@form="formLocationDialog"]',
    BTN_SELECT: '//button[text()="Select"]',
    BTN_CANCEL: '//button[text()="Select"]/following-sibling::button',
    TBL_LOCATION: '//h3[text()="Location"]/following-sibling::div//table'
  }

  static TabChargeRate = {
    TAB_CHARGERATE: '//button[text()="Charge Rate"]',

    BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
    BTN_DELETECHARGERATELIST: '(//h3[text()="Charge Rate List"]/parent::div//table//tbody//tr//td)[1]',
    TXT_CHARGENAME: '//h3[text()="Charge Type List"]/parent::div//table//tr//td//input',
    TXT_CHARGERATEAMMOUNT: '//h3[text()="Charge Rate List"]/parent::div//table//tr//td//input',
    DRP_TRANSACTIONTYPE: '(//h3[text()="Charge Type List"]/parent::div//table//tr//td//span[@class="k-widget k-dropdown"])[1]',
    DRP_CALCULATIONTYPE: '(//h3[text()="Charge Type List"]/parent::div//table//tr//td//span[@class="k-widget k-dropdown"])[2]',
    DRP_AMOUNTTYPE: '(//h3[text()="Charge Type List"]/parent::div//table//tr//td//span[@class="k-widget k-dropdown"])[3]',

    BTN_ADDCUSTOMERCATEG: '//button[text()="Add Customer Category"]',
    TBL_CHARGERATELIST: '(//h3[text()="Charge Rate List"]/parent::div//table)[2]',
    TXT_REGISTRATIONFEE: '(//h3[text()="Charge Rate List"]/parent::div//table//td//input)[1]',
    TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
    BTN_DELETECUSTOMERCATEG: '(//h3[text()="Charge Rate List"]/parent::div//table//td)[1]',
    BTN_SEARCHFILTERS: '//button[@form="formCustomerCategoryDialog" and @type="submit"]',
    BTN_SELECT: '//button[text()="Select"]',

    PCK_REGITEMCODE: '//label[text()="Registration Admin Item Code"]/following-sibling::div//button',
    PCK_RENEWALITEMCODE: '//label[text()="Renewal Admin Item Code"]/following-sibling::div//button',
    PCK_DEFERITEMCODE: '//label[text()="Deferment Admin Item Code"]/following-sibling::div//button',
    PCK_REINSTATEMENTITEMCODE: '//label[text()="Reinstatement Admin Item Code"]/following-sibling::div//button',
    PCK_TERMINATEITEMCODE: '//label[text()="Termination Admin Item Code"]/following-sibling::div//button',
    PCK_WAIVERITEMCODE: '//label[text()="Waiver Admin Item Code"]/following-sibling::div//button',
    PCK_REVERSALITEMCODE: '//label[text()="Reversal Admin Item Code"]/following-sibling::div//button',
    TBL_SELECTPRODUCTCODE: '//div[text()="Select Product Code"]/../..//div[@class="k-widget k-grid"]//table',
    TXT_PRODUCTNUMBER: '//input[@name="productNumber"]',
    TXT_PRODUCTNAME: '//input[@name="productName"]',
    TXT_SEARCHNAME: '//input[@name="searchName"]',
    TXT_PRODUCTTYPE: '//input[@name="productType"]',
    DRP_ITEMMODELGROUP: '//label[text()="Item Model Group"]/following-sibling::span',
    DRP_ITEMGROUP: '//label[text()="Item Group"]/following-sibling::span',
    DRP_STORAGEDIMENTION: '//label[text()="Storage Dimension Group"]/following-sibling::span',
    DRP_TRACKINGDIMENTION: '//label[text()="Tracking Dimension Group"]/following-sibling::span',
    DRP_SALESCATEGORY: '//label[text()="Sales Category"]/following-sibling::span',
    DRP_PROCUREMENTCATEG: '//label[text()="Procurement Category"]/following-sibling::span',
  }



}

export default elems_InterestGroupMainDetail