import Reports_InHouseMerchandise from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-013&039-In-House-Sale&Merchandise-Reports/InHouse-&-Merchandise-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/InHouse-Merchandise-Reports-data"

const InHouseMerchandise_Reports = new Reports_InHouseMerchandise ()

const InHouseMerchandise_Report = () => {

    describe("InHouse and Merchandise Reports Verification",function(){

        it('Checking functionality and Verification on Counter Receipt Collection Listing', function(){
            InHouseMerchandise_Reports.verifyCounterReceiptCollection
            (
                data.COUNTER_RECEIPT.EXPECTEDPG,

            )
        })

        it('Checking functionality and Verification on In-House Revenue Sale Listing', function(){
            InHouseMerchandise_Reports.verifyInHouseRevenueSale
            (
                data.INHOUSE_REVENUE_SALE.EXPECTEDPG,
                data.INHOUSE_REVENUE_SALE.INHOUSE_ITEM,
                data.INHOUSE_REVENUE_SALE.RECEIPT_STATUS,
                data.INHOUSE_REVENUE_SALE.TRANSACT_DATE_FROM,
                data.INHOUSE_REVENUE_SALE.TRANSACT_DATE_TO

            )
        })

        it('Checking functionality and Verification on In-House Revenue Sale Email Listing', function(){
            InHouseMerchandise_Reports.verifyInHouseRevenueSaleEmail
            (
                data.INHOUSE_REVENUE_SALE_EMAIL.EXPECTEDPG,
                data.INHOUSE_REVENUE_SALE_EMAIL.INHOUSE_ITEM,
                data.INHOUSE_REVENUE_SALE_EMAIL.RECEIPT_STATUS,
                data.INHOUSE_REVENUE_SALE_EMAIL.TRANSACT_DATE_FROM,
                data.INHOUSE_REVENUE_SALE_EMAIL.TRANSACT_DATE_TO

            )
        })

        it('Checking functionality and Verification on In-House Revenue Sale Mobile Listing', function(){
            InHouseMerchandise_Reports.verifyInHouseRevenueSaleMobile
            (
                data.INHOUSE_REVENUE_SALE_MOBILE.EXPECTEDPG,
                data.INHOUSE_REVENUE_SALE_MOBILE.INHOUSE_ITEM,
                data.INHOUSE_REVENUE_SALE_MOBILE.RECEIPT_STATUS,
                data.INHOUSE_REVENUE_SALE_MOBILE.TRANSACT_DATE_FROM,
                data.INHOUSE_REVENUE_SALE_MOBILE.TRANSACT_DATE_TO

            )
        })

        it('Checking functionality and Verification on Merchanduse Revenue Sale Listing', function(){
            InHouseMerchandise_Reports.verifyMerchandiseRevenueSale
            (
                data.MERCHANDISE_REVENUE_SALE.EXPECTEDPG,
                data.MERCHANDISE_REVENUE_SALE.MERCHANDISE_ITEM,
                data.MERCHANDISE_REVENUE_SALE.RECEIPT_STATUS,
                data.MERCHANDISE_REVENUE_SALE.TRANSACT_DATE_FROM,
                data.MERCHANDISE_REVENUE_SALE.TRANSACT_DATE_TO

            )
        })

        it('Checking functionality and Verification on Merchanduse Revenue Sale By Period Listing Listing', function(){
            InHouseMerchandise_Reports.verifyMerchandiseRevenueSaleByPeriod
            (
                data.MERCHANDISE_REVENUE_SALE_BY_PERIOD.EXPECTEDPG,

            )
        })

        it('Checking functionality and Verification on Merchanduse Revenue Sale By Total Payment Collected Listing', function(){
            InHouseMerchandise_Reports.verifyMerchandiseRevenueSaleByTotalPaymentCollected
            (
                data.MERCHANDISE_REVENUE_SALE_BY_TOTAL.EXPECTEDPG,
                data.MERCHANDISE_REVENUE_SALE_BY_TOTAL.MERCHANDISE_ITEM,
                data.MERCHANDISE_REVENUE_SALE_BY_TOTAL.RECEIPT_STATUS,
                data.MERCHANDISE_REVENUE_SALE_BY_TOTAL.TRANSACT_DATE_FROM,
                data.MERCHANDISE_REVENUE_SALE_BY_TOTAL.TRANSACT_DATE_TO

            )
        })

        it('Checking functionality and Verification on Merchanduse Revenue Sale Item Listing', function(){
            InHouseMerchandise_Reports.verifyMerchandiseRevenueSaleItem
            (
                data.MERCHANDISE_REVENUE_SALE_ITEM.EXPECTEDPG,
                data.MERCHANDISE_REVENUE_SALE_ITEM.MERCHANDISE_ITEM,
                data.MERCHANDISE_REVENUE_SALE_ITEM.RECEIPT_STATUS,
                data.MERCHANDISE_REVENUE_SALE_ITEM.TRANSACT_DATE_FROM,
                data.MERCHANDISE_REVENUE_SALE_ITEM.TRANSACT_DATE_TO

            )
        })
    })

}

export default InHouseMerchandise_Report