class elems_FacilityGroupBookingListing{

    TXT_BOOKINNO = '//input[@id="txtBookingNumber"]'
    BTN_CREATENEW = '//button[text()="Create New"]'
    PCK_FACILITY = '//label[text()="Facility"]//following-sibling::div//button'
    TXT_FACILITY = '//input[@name="name"]'
    BTN_FACILITYSEARCHFILTER = '(//button[text()="Search Filters"])[1]'

    TXT_CUSTOMERNRIC = '//input[@id="txtCustomerNRIC"]'
    TXT_CUSTOMERNAME = '//input[@id="txtCustomerName"]'

    PCK_CUSTOMERNAME = '//label[text()="Customer Category"]//following-sibling::div//button'
    TXT_CUSTOMERCATEGORYNAME = '//input[@id="txtCustomerCategoryName"]'
    TXT_CUSTOMERCATEGORYNUMBER = '//input[@id="txtCustomerCategoryNumber"]'
    TXT_CUSTOMERCATEGORYTYPE = '//input[@id="txtCustomerCategoryType"]'
    BTN_CUSTOMERCATESEARCHFILTER = '(//button[text()="Search Filters"])[2]'
    BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
     TBL_FACILTYGROUPBOOKINGLIST = '//h2[text()="Facility Group Booking Listing Form"]/parent::div/following-sibling::div//table'

    

}

export default new elems_FacilityGroupBookingListing