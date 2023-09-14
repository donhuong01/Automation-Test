class elems_FacilityReports{
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static LBL_PAGE = '//h2'

    static PCK_FACILITYTYPE = '//label[text()="Facility Type"]//following-sibling::div//button'
    static PCK_FACILITY = '//label[text()="Facility"]//following-sibling::div//button'
    static TXT_NRIC = '//input[@id="txtNRIC"]'
    static TXT_STARTDATE = '//input[@id="dtpStartDate"]'
    static TXT_ENDDATE = '//input[@id="dtpEndDate"]'

}

export default elems_FacilityReports