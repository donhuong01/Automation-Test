import Reports_CustomerMarketing from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-034-Membership-Magazine-Reports/MemMagazine-Reports-Verification"
import Reports_MembershipMasters from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-014-Membership-Registration-Reports/MemRegistration-Reports-Verification"
import Reports_MembershipVIPs from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-025-VIP-Reports/MemVIP-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Membership-Reports-data"

const CustomerMarketing_Reports = new Reports_CustomerMarketing()
const MembershipMasters_Reports = new Reports_MembershipMasters()
const MembershipVIPs_Reports = new Reports_MembershipVIPs()

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

    it('Checking functionallity and Verification on Bad Address Members Listing', function(){
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

        
})

}

export default Membership_Report