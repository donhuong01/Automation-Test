class elems_OnlineAccountListing {
    
    static TXT_LOGINNAME = '//input[@id="txtLoginName"]'
    static TXT_LOGINEMAIL = '//input[@id="txtLoginEmail"]'
    static TXT_FULLNAME = '//input[@id="txtFullName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_ACCOUNTLISTING = '//h2[text()="Online Account Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_ENABLE = '//button[text()="Enable"]'
    static BTN_DISABLE = '//button[text()="Disable"]'
    static BTN_UNLOCK = '//button[text()="Unlock"]'
    static BTN_SENDRESETPWDEMAIL = '//button[text()="Send Reset Password Email"]'
    static BTN_SENDUNLOCKEMAIL = '//button[text()="Send Unlock Email"]'
    static BTN_CLEARACTIVATIONKEY = '//button[text()="Clear Activation Key"]'
}

export default elems_OnlineAccountListing 