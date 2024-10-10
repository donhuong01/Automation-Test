class elems_MemberTypeDetail {
    
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static DRP_MEMBERCATEGORY = '//span[@id="drpMemberCategory"]'
    static DRP_DEPENDENTTYPE = '//span[@id="drpDependentType"]'
    static DRP_PARENTTYPE = '//input[@id="txtParentType"]'
    static TXT_CODE = '//input[@id="txtCode"]'
    static TXT_CODEERROR = '//div[@id="txtCode_error"]'
    static TXT_AREADESCRIPTION = '//textarea[@id="txtDescription"]'
    static TXT_AREADESCRIPTIONERROR= '//div[@id="txtDescription_error"]'
    static TXT_MEMBERSHIPTYPE= '//input[@id="txtMembershipType"]'
    static TXT_MEMBERSHIPTYPEERROR= '//div[@id="txtMembershipType_error"]'
    static DRP_SERVICESTATUS = '//span[@id="drpServiceStatus"]'
    static DRP_RANK = '//span[@id="rank"]'
    static DRP_STATUS = '//span[@id="status"]'
    static TXT_MINYEARS = '//input[@id="txtMinYears"]'
    static TXT_MINYEARSERROR = '//div[@id="txtMinYears_error"]'
    static TXT_MAXYEARS = '//input[@id="txtMaxYears"]'
    static TXT_MAXEARSERROR = '//div[@id="txtMaxYears_error"]'
    static TXT_MAXCAPYEARS = '//input[@id="txtMaxCapYears"]'
    static TXT_MAXCAPYEARSERROR = '//div[@id="txtMaxCapYears_error"]'
    static TXT_AREAREMARK = '//textarea[@id="remark"]'

}
export default elems_MemberTypeDetail