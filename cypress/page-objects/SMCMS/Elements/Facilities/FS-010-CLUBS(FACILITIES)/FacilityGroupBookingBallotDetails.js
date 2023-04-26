class elems_FacilityGroupBookingBallotDetails{

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static PCK_FACILITY = '//label[@for="pckFacility"]//following-sibling::div//button'
    static TXT_FACILITY = '//label[@for="pckFacility"]//following-sibling::div//button'
    static BTN_CLEAR = '//button[text()="Clear"]'
    static TBL_FGBBALLOTDETAILS = '//div[@class="k-widget k-grid"]//following-sibling::div[@class="k-grid-container"]//table'

    static SELECTFACILITY ={
        BTN_SELECT :'//button[text()="Select"]',
        BTN_CANCEL :'//button[text()="Cancel"]',
        BTN_SEARCHFILTERS: '//button[text()="Search Filters"]',
        TXT_FACILITY :'//input[@name="facilityName"]'
    }    

}
export default elems_FacilityGroupBookingBallotDetails 