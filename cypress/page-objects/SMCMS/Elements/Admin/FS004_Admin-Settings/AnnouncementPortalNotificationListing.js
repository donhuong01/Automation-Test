class elems_AnnouncementPortalNotificationListing {

    static TXT_TITLE = '//input[@id="txtTitle"]'
    static DATE_PUBLISHDATE = '//input[@id="dtpPublishDate"]'
    static DATE_EXPIRYDATE = '//input[@id="dtpExpiryDate"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_ANNOUNCEMNTPORTALNOTIFLIST = '//h2[text()="Announcement Portal Notification Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
}

export default elems_AnnouncementPortalNotificationListing