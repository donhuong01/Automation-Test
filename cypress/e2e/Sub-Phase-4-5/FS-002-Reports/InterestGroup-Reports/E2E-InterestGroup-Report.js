import Reports_IG from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-002-Interest-Group-Reports/IG-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/IG-Reports-data"

const IG_Reports = new Reports_IG()

const IG_Report = () => {

describe("IG Reports Verification",function(){

    it('Checking functionallity and Verification on IG Main Listing', function(){
        IG_Reports.verifyIGMainReports
        (
           data.EXPECTEDPG_IGMAIN, 
           data.IGMAIN, 
           data.IGMAINNUMBER
        )
    })

    it('Checking functionallity and Verification on IG Deactivation Listing', function(){
        IG_Reports.verifyIGDeactivationReports
        (
            data.EXPECTEDPG_DEACTIVATION, 
            data.IGMAIN, 
            data.IG,
            data.DEACTIVATEDATE
        )
    })

    it('Checking functionallity and Verification on IG Deferment Summary', function(){
        IG_Reports.verifyIGDefermentSummary
        (
            data.EXPECTEDPG_DEFERMENT_SUMMARY,     
        )
    })

    it('Checking functionallity and Verification on IG Renewal Listing', function(){
        IG_Reports.verifyIGRenewalListing
        (
            data.EXPECTEDPG_RENEWAL, 
            data.IGMAIN, 
            data.IG,
            data.RENEWAL_FROM,
            data.RENEWAL_TO
        )
    })

    it('Checking functionallity and Verification on IG Membership Listing', function(){
        IG_Reports.verifyIGmemberListing
        (
            data.EXPECTEDPG_MEMBERLISTING, 
            data.IGMAIN, 
            data.IG,
            data.INITIAL_DATE,
            data.EXPIRY_DATE
        )
    })

    it('Checking functionallity and Verification on IG Membership Listing Address', function(){
        IG_Reports.verifyIGmemberListingAddress
        (
            data.EXPECTEDPG_MEMBERLISTING_ADDRESS, 
            data.IGMAIN, 
            data.IG,
            data.INITIAL_DATE,
            data.EXPIRY_DATE
        )
    })

    it('Checking functionallity and Verification on IG Membership Listing Email', function(){
        IG_Reports.verifyIGmemberListingEmail
        (
            data.EXPECTEDPG_MEMBERLISTING_EMAIL, 
            data.IGMAIN, 
            data.IG,
            data.INITIAL_DATE,
            data.EXPIRY_DATE
        )
    })

    it('Checking functionallity and Verification on IG Membership Registration', function(){
        IG_Reports.verifyIGmemberRegistration
        (
            data.EXPECTEDPG_REGISTRATION, 
            data.IGMAIN, 
            data.IG,
            data.INITIAL_DATE,
            data.EXPIRY_DATE
        )
    })

    it('Checking functionallity and Verification on IG Deferment Summary', function(){
        IG_Reports.verifyIGTerminationSummary
        (
            data.EXPECTEDPG_DEFERMENT_SUMMARY     
        )
    })

    it('Checking functionallity and Verification on IG Termination Listing', function(){
        IG_Reports.verifyIGWaiverListing
        (
            data.EXPECTEDPG_WAIVER, 
            data.IGMAIN, 
            data.IG,
            data.TERM_START_DATE,
            data.TERM_END_DATE
        )
    })
    
    it('Checking functionallity and Verification on IG Renewal Summary', function(){
        IG_Reports.verifyIGRenewalConfirmation
        (
            data.EXPECTEDPG_RENEWAL_SUMMARY     
        )
    })

    it('Checking functionallity and Verification on Registration or Renewal', function(){
        IG_Reports.verifyIGRegistrationorRenewal
        (
            data.EXPECTEDPG_REGISTRATIONORRENEWAL, 
            data.IGMAIN, 
            data.IG,
            data.INITIAL_DATE,
            data.EXPIRY_FROM,
            data.EXPIRY_TO
        )    
        })





   
        
})

}

export default IG_Report