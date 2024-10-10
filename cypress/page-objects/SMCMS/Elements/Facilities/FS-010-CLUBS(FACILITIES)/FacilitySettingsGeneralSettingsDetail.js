class elems_FacilitySettingsGeneralSettingsDetail{

    static TXT_FACILITYBOOKINGREMINDER = '//input[@id="txtFacilityBookingReminder"]'
    
    static CHK_FACIILTYBOOKINGEARN = '//input[@id="chkfacilityBookingEarnSAFRAPoints"]'
    static CHK_FACIILTYGROUPBOOKINGEARN = '//input[@id="chkfacilityGroupBookingEarnSAFRAPoints"]'
    static CHK_FACIILTYRESERVATIONEARN = '//input[@id="chkfacilityReservationEarnSAFRAPoints"]'

    static NUM_NUMBEROFPHOTOGRAPHSTOUPLOAD = '//input[@id="lblnumberOfPhotographsToUpload"]'
    static NUM_MAXIMUMFILESIZE = '//input[@id="numMaxFilesize"]'
    
    static BOX_FORMARTALLOWEDSELECTION = '//h6[text()="Formats Allowed Selection"]//following-sibling::div//div[@data-role="selectable"]'
    static BOX_FORMARTALLOWEDSELECTED = '//h6[text()="Formats Allowed Selected"]//following-sibling::div//div[@data-role="selectable"]'
    
    static NUM_CANCELLATIONISNOTALLOWEDINMONTHS = '//input[@id="numCancellationAllowedMonths"]'
    static NUM_CANCELLATIONISNOTALLOWEDINDAYS = '//input[@id="numCancellationAllowedDays"]'
    static NUM_DATABACKUPANDCLEANINGDAYS = '//input[@id="numAutoBackupAndClear"]'

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'


}
export default elems_FacilitySettingsGeneralSettingsDetail