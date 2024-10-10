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

        static ReceiptDetail = {

                LBL_RECEIPTNO : '//label[@for="lblReceiptNo"]',
                LBL_MEMBERNAME : '//label[@for="lblMemberName"]',
                LBL_EARNSAFRAPOINTS : '//label[@for="lblTotalAwardedPoint"]',
                LBL_MEMBERID : '//label[@for="lblMemberId"]',
                LBL_SAFRAJURONG : '//label[@for="lblSourceChannel"]',
                LBL_RECEIPTDATE : '//label[@for="lblReceiptDate"]',
                LBL_STATUS : '//label[@for="lblStatus"]',
                
                BTN_REFUND : '//button[text()="Refund"]',
                BTN_ADJUST : '//button[text()="Adjust"]',
                BTN_CLOSE : '//button[text()="Close"]',
                BTN_CANCEL : '//button[text()="Cancel"]',
        }

        static InHouseSaleMerchandiseTransactionAdjustmentDetailRequest = {

                DRP_REASONCODE : '//span[@id="drpReasonCode"]',
                BTN_SUBMIT : '//button[text()="Submit"]',
                LBL_MEMBERID : '//label[@for="lblMemberID"]',
                BTN_CANCEL : '//button[text()="Cancel"]',
                TBL_MerchandiseTransactionCancellationItem : '(//h3[text()="Merchandise Transaction Adjustment Item List"]/ancestor::div//table//td//input)[1])',
                TBL_MerchandiseTransactionAdjustmentItemListStatus : '(//h3[text()="Merchandise Transaction Adjustment Item List"]/ancestor::div//table)[1]'
        }

        static TBL_MerchandiseTransactionAdjustmentItemList = '(//h3[text()="Merchandise Transaction Cancellation Item List"]/ancestor::div//table//td//input)[1]'


       static InHouseSaleMerchandiseTransactionRefundDetailRequest = {

                DRP_REASONCODE : '//span[@id="drpReasonCode"]',
                DRP_REFUNDPAYMENTTYPE : '//span[@id="drpRefundPaymentType"]',
                TXT_PAYEENAME : '//input[@id="txtPayeeName"]',
                TXT_MOBILENUMBER : '//input[@id="txtMobileNumber"]',
                TBL_MerchandiseTransactionRefundItemList : '(//h3[text()="Merchandise Transaction Refund Item List"]/ancestor::div//table//td//input)[1]'

        }

}

export default elems_InHouseSaleMerchandiseTransactionListing