class elems_E1GymMembershipListing {

   static BTN_VIEWTRANSACTIONHISTORY = '//button[text()="View Transaction History"]'
   static DRP_MAINTENANCE = '//button[text()="Maintenance"]/following-sibling::button'
   static PCK_E1GYMMEMBERSHIPMAIN = '//label[text()="E1 Gym Membership Main"]/following-sibling::div//button'
   static PCK_E1GYMMEMBERSHIP = '//label[text()="E1 Gym Membership"]/following-sibling::div//button'
   static TXT_E1GYMMEMBERSHIPID = '//input[@id="txtInterestGroupMembershipID"]'
   static TXT_SAFRAMEMBERSHIPID = '//input[@id="txtSafraMembershipID"]'
   static DRP_STATUS = '//span[@id="drpStatus"]'
   static TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'
   static TXT_EXPIRYDATEFROM = '//input[@id="dtpExpriyFrom"]'
   static TXT_EXPIRYDATETO = '//input[@id="dtpExpriyTo"]'
   static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
   static TBL_E1GYMMEMBERSHIPLISTING = '//div[@class="k-widget k-grid"]//table'
   static BTN_CANCEL = '//div[@class="page-title"]/following-sibling::div//button[text()="Cancel"]'
   static TBL_TRANSACTIONHISTORY = '//h2[text()="E1 Gym Membership Transaction History"]/parent::div/following-sibling::div//table'

}
export default elems_E1GymMembershipListing