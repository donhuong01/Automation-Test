class elems_FacilityBookingDetails{

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static PCK_LOCATION = '//label[@for="pckLocation"]//parent::div//button'
    static PCK_FACILITYTYPE = '//label[@for="pckFacilityType"]//parent::div//button'
    static TXT_NAME = '//input[@name="name"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_ADDTOCART = '//button[text()="Add to Cart"]'
    
    static LBL_FACILITYTYPE = '//label[@for="lblFacilityType"]'
    static LBL_LOCATION = '//label[@for="lblLocation"]'

    static TBL_SLOT = '//button[text()="Select"]'
    static BTN_ADDWAIVER = '//button[text()="Add Waiver Off"]'
    static DRP_CHARGETYPE = '//span[@id="drpChargeType"]'
    static TXT_AMOUNT = '//input[@id="txtAmount"]'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[text()="Confirm"]'




}
export default elems_FacilityBookingDetails