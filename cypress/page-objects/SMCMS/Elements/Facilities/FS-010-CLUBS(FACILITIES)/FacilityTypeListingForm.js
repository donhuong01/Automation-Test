class elems_FacilityTypeListingForm{

    static TXT_FACILITYTYPELISTING = '//input[@id="txtFaciltyTypeName"]'
    static TXT_FACILITYTYPENAME = '//input[@id="txtName"]'
    static DRP_LIFESTYLEGROUP = '//span[@id="drpLifestyleGroup"]'
    static TXT_CURRENTCALENDERNAME = '//input[@id="txtCurrentCalendarName"]'
    static DRP_TYPEOFTIME = '//span[@id="drpTypeOfTiming"]'

    static TXT_MINUNIT = '//input[@id="txtMinUnit"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static DRP_RECORDSTATUS= '//span[@id="drpCalendarRecordStatus"]'
    
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static TBL_FACILITYTYPELISTING = '//h2[text()="Facility Type Listing"]//ancestor::div//table'

}
export default elems_FacilityTypeListingForm