class elems_SourceChannelDetail {
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_NAME = '//input[@id="txtName"]'
    static DRP_TYPE = '//span[@id="drpType"]'
    static DRP_GROUP = '//span[@id="drpGroup"]'
    static TXT_OPERATINGUNITNUMBER = '//input[@name="operatingUnitNumber"]'
    static TXT_CLUBHOUSE = '//input[@id="txtClubHouseStoreId"]'
    static DRP_HEADQUARTER = '//span[@id="drpHeadquarter"]'
    static PCK_WAREHOUSE = '//label[@for="pckWarehouse"]/parent::div//button'
    static LBL_SITE = '//label[@for="lblSite"]'
    static TXT_ADDRESS = '//textarea[@id="txtAddress"]'
    static TXT_WEBSITE = '//input[@id="txtWebsite"]'
    static TXT_FACEBOOK = '//input[@id="txtFacebook"]'
    static TXT_MOBILEAPP = '//input[@id="txtMobileApp"]'
    static TXT_TELEPHONE = '//input[@id="txtTelephone"]'
    static PCK_NUMBERSEQUENCE = '//label[@for="pckNumberSequence"]/parent::div//button'
    static TXT_LOCATION = '//input[@id="txtLocation"]'
    static TXT_DESCRIPTION = '//input[@id="txtDescription"]'
    static TXT_ROADSHOW = '//input[@id="txtRoadShowCode"]'
    static DRP_STATUS = '//span[@id="status"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    
    static ELIGIBLEPAYMENTMETHODLIST = {
        PCK_PAYMENTMETHOD : '//label[@for="pckPaymentMethod"]/parent::div//button',
        BTN_ADDPAYMENTMETHOD : '//button[text()="Add Payment Method"]',
        BTN_REMOVEPAYMENTMETHOD : '//button[text()="Remove Payment Method"]',
        TBL_ELIGIBLEPAYMENTMETHODLIST : '//h3[text()="Eligible Payment Methods"]//following-sibling::div//table'
    }   
    static USERLIST = {
        PCK_USER : '//label[@for="pckUser"]/parent::div//button',
        BTN_ADDUSER : '//button[text()="Add User"]',
        BTN_REMOVEUSER: '//button[text()="Remove User"]',
        TBL_USERLIST : '//h3[text()="Users"]//following-sibling::div//table'
    }
}
export default elems_SourceChannelDetail