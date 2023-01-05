class elems_FacilityGroupBookingDetail{

    static TABS_FACILITYGROUPBOOKINGDETAIL = '//ul[@role="tablist"]'
    static DETAILSTAB = {
        LBL_BOOKINGNUMBER : '//label[@for="lblBookingNumber"]',
        LBL_MAINFACILITYFORGROUPBOOKING : '//label[@for="lblBookingNumber"]',
        BTN_SELECTFACILTIESFORBOOKING: '//button[text()="Select Facilit(ies) for Booking"]',
        TXT_START: '//label[text()="Start"]//parent::span//input',
        TXT_END: '//label[text()="End"]//parent::span//input',
        BTN_SEARCHFILTERS : '//button[text()="Search Filters"]',
        BTN_SHOWFULLDAY: '//span[@class="k-scheduler-navigation"]',
        LBL_CUSTOMERCATEGORY: '//label[@for="lblCustomerCategory"]',
        BTN_EDITCUSTOMER: '//button[text()="Edit Customer"]',
    }
        static RESOURCES={
            CHK_RESOURCES: '//input[@id="checkShowAssociatedResources"]',
            BTN_ADDRESOURCES: '//button[text()="Add Resource"]',
            BTN_REMOVERESOURCES: '//button[text()="Remove Resource"]',
            TBL_RESOURCES: '//h3[text()="Resources"]//parent::div//table'
        }
    static FACILITYBOOKINGSTAB ={
        TBL_FACILITYBOOKINGS: '//h3[text()=" Facility Bookings"]//following-sibling::div//table',
        CHK_AGREEWITHTERMSANDCONDITIONS: '//input[@id="chkAgreeWithTermsAndConditions"]',
        CHK_AGREEWITHINDEMNITYWAIVER: '//input[@id="chkAgreeWithIndemnityWaiver"]'
    }   
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}
export default elems_FacilityGroupBookingDetail