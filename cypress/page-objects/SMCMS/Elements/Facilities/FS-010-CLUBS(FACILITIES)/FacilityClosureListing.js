class elems_FacilityClosureListing{

    static PCK_FACILITYNAME = '//label[@for="pckFacility"]//following-sibling::div//button'
    static PCK_FACILITYTYPENAME = '//label[@for="pckFacilityTypeName"]//following-sibling::div//button'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TBL_FACILITYCLOSURE ='//h2[text()="Facility Closure"]/following::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
}
export default elems_FacilityClosureListing