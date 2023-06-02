import Reports_IG from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-002-Interest-Group-Reports/IG-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/IG-Reports-data"

const IG_Reports = new Reports_IG()

const IG_Report = () => {

describe("IG Reports Verification",function(){

    it('Checking functionallity and Verification on IG Main Listing', function(){
        IG_Reports.verifyIGMainReports
        ({
            expectedPg: data.EXPECTEDPG_IGMAIN, 
            iGMain: data.IGMAIN, 
            iGMainNumber: data.IGMAINNUMBER
        })
    })

    it('Checking functionallity and Verification on IG Deactivation Listing', function(){
        IG_Reports.verifyIGDeactivationReports
        ({
            expectedPg: data.EXPECTEDPG_DEACTIVATION, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            DeactDate: data.DEACTIVATEDATE
        })
    })

    it('Checking functionallity and Verification on IG Deferment Summary', function(){
        IG_Reports.verifyIGDefermentSummary
        ({
            expectedPg: data.EXPECTEDPG_DEFERMENT_SUMMARY,     
        })
    })

    it('Checking functionallity and Verification on IG Renewal Listing', function(){
        IG_Reports.verifyIGRenewalListing
        ({
            expectedPg: data.EXPECTEDPG_RENEWAL, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            renewalFrom: data.RENEWAL_FROM,
            renewalTo: data.RENEWAL_TO
        })
    })

    it('Checking functionallity and Verification on IG Membership Listing', function(){
        IG_Reports.verifyIGmemberListing
        ({
            expectedPg: data.EXPECTEDPG_MEMBERLISTING, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            initialJoin: data.INITIAL_DATE,
            expiryDate: data.EXPIRY_DATE
        })
    })

    it('Checking functionallity and Verification on IG Membership Listing Address', function(){
        IG_Reports.verifyIGmemberListingAddress
        ({
            expectedPg: data.EXPECTEDPG_MEMBERLISTING_ADDRESS, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            initialJoin: data.INITIAL_DATE,
            expiryDate: data.EXPIRY_DATE
        })
    })

    it('Checking functionallity and Verification on IG Membership Listing Email', function(){
        IG_Reports.verifyIGmemberListingEmail
        ({
            expectedPg: data.EXPECTEDPG_MEMBERLISTING_EMAIL, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            initialJoin: data.INITIAL_DATE,
            expiryDate: data.EXPIRY_DATE
        })
    })

    it('Checking functionallity and Verification on IG Membership Registration', function(){
        IG_Reports.verifyIGmemberRegistration
        ({
            expectedPg: data.EXPECTEDPG_REGISTRATION, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            initialJoin: data.INITIAL_DATE,
            expiryDate: data.EXPIRY_DATE
        })
    })

    it('Checking functionallity and Verification on IG Deferment Summary', function(){
        IG_Reports.verifyIGTerminationSummary
        ({
            expectedPg: data.EXPECTEDPG_TERMINATION_SUMMARY     
        })
    })

    it('Checking functionallity and Verification on IG Termination Listing', function(){
        IG_Reports.verifyIGWaiverListing
        ({
            expectedPg: data.EXPECTEDPG_WAIVER, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            termstartDate: data.TERM_START_DATE,
            termendDate: data.TERM_END_DATE
        })
    })
    
    it('Checking functionallity and Verification on IG Renewal Summary', function(){
        IG_Reports.verifyIGRenewalConfirmation
        ({
            expectedPg: data.EXPECTEDPG_RENEWAL_SUMMARY     
        })
    })

    it('Checking functionallity and Verification on Registration or Renewal', function(){
        IG_Reports.verifyIGRegistrationorRenewal
        ({
            expectedPg: data.EXPECTEDPG_REGISTRATIONORRENEWAL, 
            iGMain: data.IGMAIN, 
            iG: data.IG,
            initialJoin: data.INITIAL_DATE,
            expiryFrom: data.EXPIRY_FROM,
            expiryTo: data.EXPIRY_TO
        })    
        })





   
        
})

}

export default IG_Report