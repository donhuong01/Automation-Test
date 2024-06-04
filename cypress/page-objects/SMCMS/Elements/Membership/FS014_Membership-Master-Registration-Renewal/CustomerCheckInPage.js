class elems_CustomerCheckInPage {

    static RBTN_MEMBERID = '//input[@id="radioMemberId"]'
    static RBTN_NRIC = '//input[@id="radioNric"]'
    static RBTN_EMAILADDRESS = '//input[@id="radioEmailAddress"]'
    static RBTN_MOBILENUMBER = '//input[@id="radioMobile"]'
    static RBTN_SCANECARD = '//input[@id="radioScanEcard"]'
    static RBTN_SWIPECARD = '//input[@id="radioSwipeCard"]'
    static TXT_MEMBERID = '//input[@id="txtMemberId"]'
    static DATE_DATEOFBIRTH = '//input[@id="dtpDateOfBirth"]'
    static TXT_LAST4DIGITSNRIC = '//input[@id="pckLastDigits"]'
    static TXT_EMAILADDRESS = '//input[@id="txtEmailAddress"]'
    static TXT_MOBILENUM = '//input[@id="txtMobileNumber"]'
    static TXT_SCANECARD = '//input[@id="txtScanEcard"]'
    static TXT_SWIPECARD = '//input[@id="txtSwipeCard"]'
    static BTN_CHECKIN = '//span[text()="Check In"]'
    static BTN_CREATNEW = '//span[text()="Create Customer"]'
    static TBL_SELECTCUSTOMER = '//div[@class="k-widget k-grid"]//table'
}

export default elems_CustomerCheckInPage