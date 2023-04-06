class elems_IGMembershipRegistration {

    static BTN_SUBMIT = '//button[@id="submit"]'
    static BTN_ADDTOCART = '//button[@id="addToCart"]'
    static BTN_CANCEL = '//button[@id="submit"]/following-sibling::button'
    static PCK_CUSTOMERCATEGORY = '//label[@for="pckCustomerCategory"]/following-sibling::div//button'
    static LBL_SAFRAMEMBERID = '//label[@for="pckSAFRAMemberId"]'
    static LBL_CUSTOMERNAME = '//label[@for="lblCustomerName"]'
    static PCK_PREFERDCLUBHOUSE = '//label[@for="preferredClubhouse"]/following-sibling::div//button'
    static DRP_MEMBERSHIPTERM = '//input[@id="membershipTerm"]'
    static TXT_MEMBERSHIPTERM = '//input[@id="membershipTerm"]'
    static DATE_MEMBEREFFECTIVEDATE = '//input[@id="membershipEffectiveDate"]'
    static BTN_DOWNLOADTERMCONDITION = '//button[text()="Download Terms and Conditions"]'
    static CHK_AGRETERMCONDITION = '//input[@id="chkAgreeWithTerms"]'
    static BTN_DOWNLOADIDENTITYWIAVER = '//button[text()="Download Indemnity Waiver"]'
    static CHK_AGREIDENTITYWIAVER = '//input[@id="chkAgreewithIndemnity"]' 
    static TXT_CUSTOMERCATEGNAME = '//input[@id="txtCustomerName"]'
    static BTN_SEARCHFILTER = '//button[@form="formFilter"]'
    static DATE_DEFENDMONTH = '//input[@id="dtpDefermentEndMonth"]'
    static TXT_DEFERMENTREASON = '//textarea[@id="areaDefermentReason"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'
    static CHK_CALCULATDETAIL = '//input[@id="checkCalcualtePayment"]'


    static BTN_ADDWIAVER = '//button[text()="Add Waiver Off"]'
    static TBL_WIAVER = '(//button[text()="Add Waiver Off"]/parent::div/parent::div/following-sibling::div//table)[2]'
    static DRP_CHARGETYPE = '//span[@id="drpChargeType"]'
    static TXT_AMOUNT = '//input[@id="txtAmount"]'
    static TXT_REASON = '//textarea[@id="txtReason"]'
    static BTN_CONFIRM = '//button[text()="Confirm"]'
    static BTN_CANCEL = '//button[text()="Confirm"]/following-sibling::button'

}

export default elems_IGMembershipRegistration
