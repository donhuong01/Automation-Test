class elems_IGMembershipListing {

    static BTN_VIEWTRANSACTIONHISTORY = '//button[text()="View Transaction History"]'
    static DRP_MAINTENANCE = '//button[text()="Maintenance"]/following-sibling::button'
    static PCK_IGMAIN = '//label[@for="pckInterestGroupMain"]/following-sibling::div//button'
    static TBL_PCKTABLE = '//div[@class="k-window-content k-dialog-content"]//table'
    static BTN_SELECT = '//button[text()="Select"]'
    static PCK_INTERESTGROUP = '//label[@for="pckInterestGroup"]/following-sibling::div//button'
    static TXT_IGMEMBERSHIPID = '//input[@id="txtInterestGroupMembershipID"]'
    static TXT_SAFRAMEMBERSHIPID = '//input[@id="txtSafraMembershipID"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'
    static DATE_EXPIRYDATEFROM = '//input[@id="dtpExpriyFrom"]'
    static DATE_EXPIRYDATETO = '//input[@id="dtpExpriyTo"]'
    static BTN_SEARCHFILTER = '//button[@form="formFilter"]'
    static TBL_IGGROUPMEMBERLIST = '//h2[text()="Interest Group Membership Listing"]//ancestor::div//table'
    static TBL_LINKIGMEMBERLIST = '(//h2[text()="Interest Group Membership Listing"]//ancestor::div//table//a)[1]'

}

export default elems_IGMembershipListing
