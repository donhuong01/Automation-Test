class elems_SourceChannelDetail {
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_NAME = '//input[@id="txtName"]'
    static DRP_TYPE = '//span[@id="drpType"]'
    static DRP_GROUP = '//span[@id="drpGroup"]'
    static PCK_OPERATINGUNITNUMBER = '//label[@for="pckOperatingUnitNumber"]/parent::div//button'
    static TXT_CLUBHOUSE = '//input[@id="txtClubHouseStoreId"]'
    static DRP_HEADQUARTER = '//span[@id="drpHeadquarter"]'
    static PCK_WAREHOUSE = '//label[@for="pckWarehouse"]/parent::div//button'
    static LBL_SITE = '//label[@for="lblSite"]'
    static TXT_ADDRESS = '//input[@id="txtAddress"]'
    static TXT_WEBSITE = '//input[@id="txtWebsite"]'
    static TXT_FACEBOOK = '//input[@id="txtFacebook"]'
    static TXT_MOBILEAPP = '//input[@id="txtMobileapp"]'
    static TXT_TELEPHONE = '//input[@id="txtTelephone"]'
    static PCK_NUMBERSEQUENCE = '//label[@for="pckNumberSequence"]/parent::div//button'
    static TXT_LOCATION = '//input[@id="txtLocation"]'
    static TXT_DESCRIPTION = '//input[@id="txtDescription"]'
    static TXT_ROADSHOW = '//input[@id="txtRoadShowCode"]'
    static DRP_STATUS = '//span[@id="status"]'
    
    static ELIGIBLEPAYMENTMETHODLIST = {
        PCK_PAYMENTMETHOD : '//label[@for="pckPaymentMethod"]/parent::div//button',
        BTN_ADDPAYMENTMODE : '//button[text()="Add Payment Mode"]',
        TBL_ELIGIBLEPAYMENTMETHODLIST : '//div[text()="Eligible Payment Method List"]/ancestor::div[@class="Card_card__cQxVw "]//table'
    }   
    static USERLIST = {
        PCK_USER : '//label[@for="pckUser"]/parent::div//button',
        BTN_ADDUSER : '//button[text()="Add User"]',
        TBL_USERLIST : '//div[text()="User List"]/ancestor::div[@class="Card_card__cQxVw "]//table'
    }
}
export default elems_SourceChannelDetail