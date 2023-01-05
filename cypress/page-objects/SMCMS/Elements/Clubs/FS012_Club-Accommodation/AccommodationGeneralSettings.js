class elems_SettingsGeneralDetail {

    static SafraPoints = {
        CHK_ACCOMBOOKINGEARNSAFRAPTS : '//input[@id="chkAccomodationBooking"]',
        CHK_ACCOMRESERVATIONEARNSAFRAPTS : '//input[@id="chkAccommodationReservation"]'
    }

    static AttachedMediaSettings = {
        TBL_ATTACHEDMEDIASETTINGS : '//h3[text()="Attached Media Settings"]/parent::div//table',
        NUM_NUMOFPHOTOSTOUPLOAD : '//input[@id="lblNumberOfPhotosToUpload"]',
        NUM_MAXFILESIZE_KB : '//input[@id="numMaxFilesize"]',
        AllowedFormats : {
            LSTBOX_ALLOWEDFORMATS : '//div[text()="Allowed Formats"]//div[@class="k-listbox k-listbox-toolbar-right"]',
            BTN_RIGHTARROW : '//span[@class="k-icon k-i-arrow-60-right"]',
            BTN_LEFTARROW : '//span[@class="k-icon k-i-arrow-60-left"]',
            BTN_DOUBLERIGHT : '//span[@class="k-icon k-i-arrow-double-60-right"]',
            BTN_DOUBLELEFT : '//span[@class="k-icon k-i-arrow-double-60-left"]'
        }
    }

    static GracePrdForBookingCancellation = {
        NUM_CANCELISNOTALLOWEDINMONTHS : '//input[@id="numCancellationAllowedMonths"]',
        NUM_CANCELISNOTALLOWEDINDAYS : '//input[@id="numCancellationAllowedDays"]'
    }

    static AutoCancelInPendingPayment = {
        NUM_ACCOMTRANSACTCANCELLEDAFTERDAYS : '//input[@id="numAccommodationCancelledAfterDays"]'
    }

    static EmailReminderSettings = {
        NUM_ACCOMBOOKINGNOTIFBEFORESTARTDATE : '//input[@id="numAccommodationBookingNotification"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_SettingsGeneralDetail