class elems_GiftCollection {
    static BTN_COLLECT = '//button[text()="Collect"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
    static COLLECTIONINFORMATION = {
        LBL_CLUBLOCATION : '//label[@for="lblClubLocation"]',
        LBL_STAFFNAME : '//label[@for="lblStaffName"]',
        LBL_COLLECTIONDATE : '//label[@for="collection-date"]'
    }   
    static TBL_GIFTCOLLECTION = '//h2[text()="Gift Collection Form"]/ancestor::div//table'
       
}
export default elems_GiftCollection