import Reports_CustomerMarketing from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-034-Membership-Magazine-Reports/MemMagazine-Reports-Verification"
import Reports_MembershipMasters from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-014-Membership-Registration-Reports/MemRegistration-Reports-Verification"
import Reports_MembershipVIPs from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-025-VIP-Reports/MemVIP-Reports-Verification"
import Reports_MemberCards from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-030-Membership-CardManagement-Reports/CardManagement-Reports-Verification"
import Reports_LuckyDraw from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-032-LuckyDraw-Reports/LuckyDraw-Reports-Verification"
import Reports_NSF from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-026-NSF-Reports/NSF-Reports-Verification"
import Reports_SFS from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-027-SFS-Reports/SFS-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Membership-Reports-data"


const CustomerMarketing_Reports = new Reports_CustomerMarketing()
const MembershipMasters_Reports = new Reports_MembershipMasters()
const MembershipVIPs_Reports = new Reports_MembershipVIPs()
const MemberCards_Reports = new Reports_MemberCards()
const LuckyDraw_Reports = new Reports_LuckyDraw()
const NSF_Reports = new Reports_NSF()
const SFS_Reports = new Reports_SFS()

const Membership_Report = () => {

describe("Membership Reports Verification",function(){

    /******************************************************
    *                     FS 014                          *
    ******************************************************/

    it('Checking functionallity and Verification on Bad Address Members Listing', function(){   
        MembershipMasters_Reports.verifyBadAddressListing
        (
           data.BAD_ADDRESS.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Documentary Proof Operational Listing', function(){
        MembershipMasters_Reports.verifyDocumentaryProofOperationalListing
        (
           data.DOCUMENTARY_PROOF_OPERATIONAL.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Documentary Proof Verified Listing', function(){
        MembershipMasters_Reports.verifyDocumentaryProofVerifiedListing
        (
           data.DOCUMENTARY_PROOF_VERIFIED.EXPECTEDPG,
           data.DOCUMENTARY_PROOF_VERIFIED.DOCU_PROOF,
           data.DOCUMENTARY_PROOF_VERIFIED.START_DATE,
           data.DOCUMENTARY_PROOF_VERIFIED.END_DATE
        )
    })

    it('Checking functionallity and Verification on Membership Transaction', function(){
        MembershipMasters_Reports.verifyMembershipTransaction
        (
           data.MEMBERSHIP_TRANSACTION.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Membership Revenue', function(){
        MembershipMasters_Reports.verifyMembershipRevenue
        (
           data.MEMBERSHIP_REVENUE.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Membership Renewal', function(){
        MembershipMasters_Reports.verifyMembershipRenewal
        (
           data.MEMBERSHIP_RENEWAL.EXPECTEDPG
        )
    })





    /******************************************************
    *                     FS 025                          *
    ******************************************************/

    it('Checking functionallity and Verification on VIP Appointment Term Listing', function(){
        MembershipVIPs_Reports.verifyVIPAppointmentTermListing
        (
           data.VIP_APPOINTMENT.EXPECTEDPG,
           data.VIP_APPOINTMENT.EXPIRYFROM,
           data.VIP_APPOINTMENT.EXPIRYTO
        )
    })

    /******************************************************
    *                     FS 034                          *
    ******************************************************/

    it('Checking functionallity and Verification on Customer Marketing Profile Listing', function(){
        CustomerMarketing_Reports.verifyCustomerMarketingProfile
        (
           data.CUSTOMER_MARKTING.EXPECTEDPG,
           data.CUSTOMER_MARKTING.CONSENT,
           data.CUSTOMER_MARKTING.MEMBERSHIP,
           data.CUSTOMER_MARKTING.CONTACTMODE,
           data.CUSTOMER_MARKTING.MEMBERSTATUS,
           data.CUSTOMER_MARKTING.EMAIL
    
        )
    })

    /******************************************************
    *                     FS 030                          *
    ******************************************************/
    it('Checking functionallity and Verification on DBS Billing Listing', function(){
        MemberCards_Reports.verifyDBSBilling
        {
            data.DBS_BILLING.EXPECTEDPG
        }
    })

    /******************************************************
    *                     FS 032                          *
    ******************************************************/
    it('Checking functionallity and Verification on Lucky Draw Tracking Listing', function(){
        LuckyDraw_Reports.verifyLuckyDrawTracking
        {
            data.LUCKYDRAW_TRACKING.EXPECTEDPG
        }
    })

    it('Checking functionallity and Verification on Lucky Draw Winner Listing', function(){
        LuckyDraw_Reports.verifyLuckyDrawWinner
        {
            data.LUCKYDRAW_WINNER.EXPECTEDPG
        }
    })

    /******************************************************
    *                     FS 026                         *
    ******************************************************/
    it('Checking functionallity and Verification on NSF Reconciliation Listing', function(){
        NSF_Reports.verifyNSFReconciliation
        {
            data.NSF_RECONCILIATION.EXPECTEDPG
        }
    })

    it('Checking functionallity and Verification on NSF Summary Listing', function(){
        NSF_Reports.verifyNSFSummary
        {
            data.NSF_SUMMARY.EXPECTEDPG
        }
    })

    it('Checking functionallity and Verification on Failed Paymaster Deduction Listing', function(){
        NSF_Reports.verifyFailedPaymasterDeduction
        {
            data.FAILED_PAYMASTER.EXPECTEDPG
        }
    })

    /******************************************************
    *                     FS 027                         *
    ******************************************************/

    it('Checking functionallity and Verification on Transaction By Principal Listing', function(){
        SFS_Reports.verifyTransactionByPrinicpal
        {
            data.TRANSACTION_PRINCIPAL.EXPECTEDPG
        }
    })



})

}

export default Membership_Report