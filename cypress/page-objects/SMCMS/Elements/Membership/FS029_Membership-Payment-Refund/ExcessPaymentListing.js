class elems_ExcessPaymentListing {
    
    static BTN_REQUESTFORTHEREFUND = '//button[text()="Request for the Refund"]'
    static BTN_MEMBERID = '//label[@for="pckMemberId"]/parent::div//button'
    static BTN_SEARCHFILTERS = '//div[text()="Search Filters"]/parent::button'
    static TBL_EXCESSPAYMENTLISTING = '//h2[text()="Excess Payment Listing"]/ancestor::div//table'
    
}
export default elems_ExcessPaymentListing