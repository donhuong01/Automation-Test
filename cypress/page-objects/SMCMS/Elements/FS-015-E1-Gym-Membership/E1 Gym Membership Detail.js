class elems_E1GymMembershipDetail {

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Save"]/following-sibling::button[text()="Cancel"]'
    static VIEWTRANSACTIONHISTORY = '//button[text()="Save"]/following-sibling::button[text()="View Transaction History"]'
    static LBL_MEMBERSHIPID = '//label[@for="lblMembershipID"]'
    static BTN_ADDMEMBERSHIPTAGS = '//h3[text()="Membership Tags"]/following-sibling::div//button[text()="Add"]'
    static BTN_REMOVEMEMBERSHIPTAGS = '//h3[text()="Membership Tags"]/following-sibling::div//button[text()="Remove"]'
    static TBL_MEMBERSHIPTAGS = '//h3[text()="Membership Tags"]/following-sibling::div//table'
    static TXT_ATTRIBUTENAME = '//input[@id="txtAttributeName"]'
    static BTN_SEARCHFILTERMEMTAGS = '//button[@form="formMembershipTags"]'

    static LBL_MEMBERSHIPSTATUSREASON = '//label[@for="lblMembershipStatusReason"]'

}
export default elems_E1GymMembershipDetail