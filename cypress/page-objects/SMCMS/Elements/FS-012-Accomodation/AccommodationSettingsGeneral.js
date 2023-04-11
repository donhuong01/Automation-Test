class elems_AccommodationSettingsGeneral {

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static CHK_ACCBOOKINGEARNSAFRAPOINTS = '//input[@id="chkAccomodationBooking"]'
    static CHK_ACCORESERVATIONEARNSAFRAPOINTS = '//input[@id="chkAccommodationReservation"]'
    static TXT_NUMBEROFPHOTOGRAPHSTOUPLOAD = '//input[@id="lblNumberOfPhotosToUpload"]'
    static TXT_MAXFILESIZE = '//input[@id="numMaxFilesize"]'
    static TXT_CANCELLATIONISNOTALLOWDINMONTH = '//input[@id="numCancellationAllowedMonths"]'
    static TXT_CANCELLATIONISNOTALLOWDINDAY = '//input[@id="numCancellationAllowedDays"]'
    static TXT_ACCOTRANSACTIONISGOINGTOBECANCELLED = '//input[@id="numAccommodationCancelledAfterDays"]'
    static TXT_ACCOBOOKINGNOTIFICATIONBEFORESTARTDATE = '//input[@id="numAccommodationBookingNotification"]'
    static TBL_SETTINGSOPERATINGPERIODDETAILS = '//div[@class="page-title"]//following-sibling::div//table[@class="k-grid-table"]'
}
export default elems_AccommodationSettingsGeneral