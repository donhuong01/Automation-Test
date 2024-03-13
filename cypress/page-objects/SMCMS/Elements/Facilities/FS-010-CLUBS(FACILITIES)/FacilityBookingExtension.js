class elems_FacilityBookingExtension {

  static FACILITYBOOKINGEXTENSIONLISTING = {

    TXT_EXTESNTION: '//input[@id="txtExtensionNumber"]',
    TXT_EXTESNTIONSTARTFROM: '//input[@id="dtpStartDateFrom"]',
    TXT_EXTESNTIONSTARTDATETO: '//input[@id="dtpStartDateTo"]',
    TXT_EXTESNTIONENDDATEFROM: '//input[@id="dtpEndDateFrom"]',
    TXT_EXTESNTIONENDDATETO: '//input[@id="dtpEndDateTo"]',
    TXT_BOOKINGNO: '//input[@id="txtBookingNumber"]',
    PCK_MAINFACILITY: '//input[@id="//label[@for="pckFacility"]//following-sibling::div//button"]',
    DRP_TRANSACTIONTYPE: '//span[@id="drpTransactionType"]',

    TXT_EXTESNTION: '//input[@id="txtCustomerNRIC"]',
    TXT_CUSTOMERNAME: '//input[@id="txtCustomerName"]',
    DRP_CUSTOMERCATEGORY: '//span[@id="drpCustomerCategory"]',
    TXT_RECEIPTNO: '//input[@id="txtReceiptNumber"]',
    DRP_BOOKINGSTATUS: '//span[@id="drpBookingStatus"]',
    DRP_STATUS: '//span[@id="drpStatus"]',
    CHK_INCLUDEGB: '//input[@id="chkIncludeGroupBookingRecordsInResult"]',
    TBL_EXTENTIONLISTING: '//h2[text()="Facility Booking Extension Listing"]/parent::div/following-sibling::div//table',
    BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
    BTN_CREATENEW: '//button[text()="Create New"]'
  }


  static FACILITYBOOKINGEXTENSIONDETAIL = {
    BTN_SUBMIT: '//button[@form="formBookingExtension"]',
    BTN_CANCEL: '//button[text()="Cancel"]',
    PCK_FACILITYBOOKING: '//h3[text()="Extension Information"]/following-sibling::div//input/following-sibling::button',
    TXT_BOOKINGNO: '//input[@name="bookingNumber"]',
    TXT_CUSTOMERNAME: '//input[@name="customerName"]',
    LBL_CUSTOMERCATEGORY: '//label[@for="lblCustomerCategory"]',
    TBL_RESOURCES: '//h3[text()="Resources"]/following-sibling::div//table',
    BTN_FILTERBOOKING: '//input[@name="customerName"]/parent::div/parent::div/parent::div/following-sibling::div//button[text()="Search Filters"]',
    BTN_ADDWAIVEROFF: '//button[text()="Add Waiver Off"]',
    DRP_CHARGETYPE: '//span[@id="drpChargeType"]',
    TXT_AMOUNT: '//input[@id="txtAmount"]',
    TXT_REASON: '//textarea[@id="txtReason"]',
    BTN_CONFIRM: '//button[@form="formAddWaiverOff"]',
    LBL_CUSTOMERNAEM: '//label[@for="lblCustomerName"]',
    LBL_TYPEOFINVOICING: '//label[@for="lblTypeOfInvoicingForBooking"]',
    LBL_FACILITYCHARGERATE: '//label[@for="lblFacilityChargeRate"]',
    LBL_FACILITYTYPECHARGERATE: '//label[@for="lblFacilityTypeChargeRate"]',



  }

}
export default elems_FacilityBookingExtension