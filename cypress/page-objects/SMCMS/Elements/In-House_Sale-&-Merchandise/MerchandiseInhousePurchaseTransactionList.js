class elems_InHouseSaleMerchandiseTransactionListing {

        static RAD_INHOUSESALEITEM = '//label[text()="In-House Sale Item"]/preceding-sibling::input'
        static RAD_MERCHANDISEITEM = '//label[text()="Merchandise Item"]/preceding-sibling::input'
        static TXT_RECIEPTNUMBER = '//input[@id="txtReceiptNumber"]'
        static PCK_MEMBERID = '//label[text()="Member ID"]/following-sibling::div//button'
        static TXT_MEMBERID = '//label[text()="Member ID"]/following-sibling::input[@name="memberId"]'
        static DATE_TRANSACTIONDATEFROM = '//input[@id="stpTransactionDateFrom"]'
        static DATE_TRANSACTIONDATETO = '//input[@id="stpTransactionDateTo"]'
        static BTN_SEARCHFILTERS = '(//button[text()="Search Filters"])[1]'
        static TBL_PURCHASETRANSACTIONLIST = '//h2[text()="Merchandise Purchase Transaction Listing"]/ancestor::div//table'

        static InHouseSalePurchase = {

                BTN_CANCEL: '//button[text()="Cancel"]',
                LBL_PURCHASENUMBER: '//label[@for="lblPurchaseNumber"]',
                LBL_CUSTOMERMEMBERID: '//label[@for="lblMemberID"]',
                LBL_CUSTOMERCATEGORY: '//label[@for="lblCustomerCategory"]',
                LBL_SALEITEMNAME: '//label[@for="lblItemName"]',
                LBL_TRANSACTIONTYPE: '//label[@for="lblTransactionType"]',
                LBL_QUANTITYOFSETS: '//label[@for="txtInHouseQuantityOfSets"]',
        }

}

export default elems_InHouseSaleMerchandiseTransactionListing