import SRP_Reports from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-036-SRP/SRP-Reports-Verificaton";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/SRp-Reports-data";

const SRP_Reported = new SRP_Reports ()

const SRP_Report = () => {

describe("SRP Verification",function(){

    it('Checking functionallity and Verification on Collected Redeemed Stock Listing', function(){
        SRP_Reported.verifyCollectedRedeemedStock
        (
            data.COLLECTED_REDEEMED.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Earning And Redeeming Listing', function(){
        SRP_Reported.verifyEarningAndRedeeming
        (
            data.EARNING_REDEEMING.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Earning Monthly Listing', function(){
        SRP_Reported.verifyEarningMonthly
        (
            data.EARNING_MONTHLY.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Member Total Points Detail Email Listing', function(){
        SRP_Reported.verifyMemberTotalPointsDetailEmail
        (
            data.MEMBER_TOTAL_POINTS.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Redeeming Monthly With Number Listing', function(){
        SRP_Reported.verifyRedeemingMonthlyWithNumber
        (
            data.REEDEMING_MONTHLY.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Uncollected Redeemed Stock Listing', function(){
        SRP_Reported.verifyUncollectedRedeemedStock
        (
            data.UNCOLLECTED_REDEEMED.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Vendor Wise Contributions And Redemptions Detail Listing', function(){
        SRP_Reported.verifyVendorWiseDetail
        (
            data.VENDOR_WISE_DETAIL.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Vendor Wise Contributions And Redemptions Detail By Issued Date', function(){
        SRP_Reported.verifyVendorWiseDetailByIssued
        (
            data.VENDOR_WISE_DETAIL_BY_ISSUED.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Member SRP Spending And Redemption Listing', function(){
        SRP_Reported.verifyMemberSRP
        (
            data.MEMBER_SRP.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Member SRP Spending And Redemption Address Listing', function(){
        SRP_Reported.verifyMemberSRPAddress
        (
            data.MEMBER_SRP_ADDRESS.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Member SRP Spending And Redemption Email Listing', function(){
        SRP_Reported.verifyMemberSRPEmail
        (
            data.MEMBER_SRP_EMAIL.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Member SRP Spending And Redemption Mobile Listing', function(){
        SRP_Reported.verifyMemberSRPMobile
        (
            data.MEMBER_SRP_MOBILE.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Points Adjustment Listing', function(){
        SRP_Reported.verifyPointsAdjustment
        (
            data.POINTS_ADJUSTMENT.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Point Distribution Listing', function(){
        SRP_Reported.verifyPointDistribution
        (
            data.POINTS_DISTRIBUTION.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Receipt Refund Listing', function(){
        SRP_Reported.verifyReceiptRefund
        (
            data.RECEIPT_REFUND.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Reinstatement Listing', function(){
        SRP_Reported.verifyReinstatement
        (
            data.REINSTATEMENT.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Uncollected Expiry Redeemed Stock', function(){
        SRP_Reported.verifyUncollectedExpiryListing
        (
            data.UNCOLLECTED_EXPIRY.EXPECTEDPG
        )
    })



})


}

export default SRP_Report