class elems_IGMembershipRegistrationListingReceiptDate {
    static PCK_IGMAIN = '//label[text()="Interest Group Main"]//following-sibling::div//button'
    static PCK_IG = '//label[text()="Interest Group"]//following-sibling::div//button'
    static TXT_STARTDATE = '//input[@id="interestGroupMembershipReceiptStartDate"]'
    static TXT_ENDDATE = '//input[@id="interestGroupMembershipReceiptEndDate"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static TXT_NAME = '//input[@name="name"]'
    static LBL_PAGETITLE = '//h2'
}

export default elems_IGMembershipRegistrationListingReceiptDate