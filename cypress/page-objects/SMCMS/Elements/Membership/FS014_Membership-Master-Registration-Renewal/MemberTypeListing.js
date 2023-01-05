class elems_MemberTypeListing{
    
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static DRP_MEMBERCATEGORY = '//span[@id="drpMemberCategory"]'
    static DRP_DEPENDENTTYPE = '//span[@id="drpDependentType"]'
    static TXT_CODE = '//input[@id="txtCode"]'
    static TXT_MEMBERSHIPTYPE = '//input[@id="txtMembershipType"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_MEMBERTYPELIST = '//h2[text()="Member Type Listing"]/ancestor::div//table'

}
export default  elems_MemberTypeListing