import Reports_IG from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-016-Interest-Group-Reports/IG-Reports-Verification"
import Reports_IG2 from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-016-Interest-Group-Reports/IG-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/IG-Reports-data"

const IG_Reports =  new Reports_IG() // new Reports_IG2() // 

const IG_Report = () => {

describe("IG Reports Verification",function(){

    it('Checking Access on on IG Main Listing', function(){
        IG_Reports.verifyIGMainReports
        (
           data.IG_MAIN.EXPECTEDPG_IGMAIN, 
           data.IG_MAIN.IGMAIN, 
           data.IG_MAIN.IGMAINNUMBER
        )
    })

    it('Checking Access on on IG Deactivation Listing', function(){
        IG_Reports.verifyIGDeactivationReports
        (
            data.IG_DEACTIVATE.EXPECTEDPG_DEACTIVATION, 
            data.IG_DEACTIVATE.IGMAIN, 
            data.IG_DEACTIVATE.IG,
            data.IG_DEACTIVATE.DEACTIVATEDATE
        )
    })

    it('Checking Access on on IG Deferment', function(){
        IG_Reports.verifyIGDefermentReports
        (
            data.IG_DEFERMENT.EXPECTEDPG_DEFERMENT,
            data.IG_DEFERMENT.IGMAIN,
            data.IG_DEFERMENT.IG,
            data.IG_DEFERMENT.DEFERDATE_FROM,
            data.IG_DEFERMENT.DEFERDATE_TO     
        )
    })

    it('Checking Access on on IG Deferment Summary', function(){
        IG_Reports.verifyIGDefermentSummary
        (
            data.IG_DEFER_SUMMARY.EXPECTEDPG_DEFERMENT_SUMMARY,     
        )
    })

    it('Checking Access on on IG Renewal Listing', function(){
        IG_Reports.verifyIGRenewalListing
        (
            data.IG_RENEWAL.EXPECTEDPG_RENEWAL, 
            data.IG_RENEWAL.IGMAIN, 
            data.IG_RENEWAL.IG,
            data.IG_RENEWAL.RENEWAL_FROM,
            data.IG_RENEWAL.RENEWAL_TO
        )
    })

    it('Checking Access on on IG Membership Listing', function(){
        IG_Reports.verifyIGmemberListing
        (
            data.IG_MEM_LIST.EXPECTEDPG_MEMBERLISTING, 
            data.IG_MEM_LIST.IGMAIN, 
            data.IG_MEM_LIST.IG,
            data.IG_MEM_LIST.INITIAL_DATE,
            data.IG_MEM_LIST.EXPIRY_DATE
        )
    })

    it('Checking Access on on IG Membership Listing Address', function(){
        IG_Reports.verifyIGmemberListingAddress
        (
            data.IG_MEM_LIST_ADD.EXPECTEDPG_MEMBERLISTING_ADDRESS, 
            data.IG_MEM_LIST_ADD.IGMAIN, 
            data.IG_MEM_LIST_ADD.IG,
            data.IG_MEM_LIST_ADD.INITIAL_DATE,
            data.IG_MEM_LIST_ADD.EXPIRY_DATE
        )
    })

    it('Checking Access on on IG Membership Listing Email', function(){
        IG_Reports.verifyIGmemberListingEmail
        (
            data.IG_MEM_LIST_EMAIL.EXPECTEDPG_MEMBERLISTING_EMAIL, 
            data.IG_MEM_LIST_EMAIL.IGMAIN, 
            data.IG_MEM_LIST_EMAIL.IG,
            data.IG_MEM_LIST_EMAIL.INITIAL_DATE,
            data.IG_MEM_LIST_EMAIL.EXPIRY_DATE
        )
    })

    it('Checking Access on on IG Membership Listing Mobile', function(){
        IG_Reports.verifyIGmemberListingMobile
        (
            data.IG_MEM_LIST_MOBILE.EXPECTEDPG, 
            data.IG_MEM_LIST_MOBILE.IGMAIN, 
            data.IG_MEM_LIST_MOBILE.IG,
            data.IG_MEM_LIST_MOBILE.INITIAL_DATE,
            data.IG_MEM_LIST_MOBILE.EXPIRY_FROM,
            data.IG_MEM_LIST_MOBILE.EXPIRY_TO
        )
    })

    it('Checking Access on on IG Membership Registration', function(){
        IG_Reports.verifyIGmemberRegistration
        (
            data.IG_REGISTRATION.EXPECTEDPG_REGISTRATION, 
            data.IG_REGISTRATION.IGMAIN, 
            data.IG_REGISTRATION.IG,
            data.IG_REGISTRATION.REG_FROM,
            data.IG_REGISTRATION.REG_TOL
        )
    })

    it('Checking Access on on IG Termination Summary', function(){
        IG_Reports.verifyIGTerminationSummary
        (
            data.IG_TERMI_SUMAMRY.EXPECTEDPG_TERMINATION_SUMMARY     
        )
    })

    it('Checking Access on on IG MOVIEMAX Summary', function(){
        IG_Reports.verifyIGMOVIEMAX 
        (
            data.IG_MOVIEMAX.EXPECTEDPG_MOVIEMAX     
        )
    })

    it('Checking Access on on IG Termination Listing', function(){
        IG_Reports.verifyIGTerminationListing
        (
            data.IG_TERMINATION.EXPECTEDPG_TERMINATION, 
            data.IG_TERMINATION.IGMAIN, 
            data.IG_TERMINATION.IG,
            data.IG_TERMINATION.TERMINATED_BY,
            data.IG_TERMINATION.TERMINATED_DATE
        )
    })

    it('Checking Access on on IG Waiver Listing', function(){
        IG_Reports.verifyIGWaiverListing
        (
            data.IG_WAIVER.EXPECTEDPG_WAIVER, 
            data.IG_WAIVER.IGMAIN, 
            data.IG_WAIVER.IG,
            data.IG_WAIVER.TERM_START_DATE,
            data.IG_WAIVER.TERM_END_DATE
        )
    })
    
    it('Checking Access on on IG Renewal Summary', function(){
        IG_Reports.verifyIGRenewalConfirmation
        (
            data.IG_RENEWAL_CONFIRM.EXPECTEDPG_RENEWAL_SUMMARY     
        )
    })

    it('Checking Access on on Registration or Renewal', function(){
        IG_Reports.verifyIGRegistrationorRenewal
        (
            data.IG_RENEW_REGIS.EXPECTEDPG_REGISTRATIONORRENEWAL, 
            data.IG_RENEW_REGIS.IGMAIN, 
            data.IG_RENEW_REGIS.IG,
            data.IG_RENEW_REGIS.EXPIRY_FROM,
            data.IG_RENEW_REGIS.EXPIRY_TO
        )    
    })

    it('Checking Access on on Registration Listing Receipt Date', function(){
        IG_Reports.verifyIGmemberRegistrationReceiptDate
        (
            data.IG_REG_RECEIPT_DATE.EXPECTEDPG, 
            data.IG_REG_RECEIPT_DATE.IGMAIN, 
            data.IG_REG_RECEIPT_DATE.IG,
            data.IG_REG_RECEIPT_DATE.START_DATE,
            data.IG_REG_RECEIPT_DATE.END_DATE
        )    
    })

    it('Checking Access on on Membership Interest Group Listing', function(){
        IG_Reports.verifyIGmemberInterestGroupListing
        (
            data.IG_MEM_INTEREST_GROUP.EXPECTEDPG, 
            data.IG_MEM_INTEREST_GROUP.IG,
            data.IG_MEM_INTEREST_GROUP.CUSTOM_CATEG, 
            data.IG_MEM_INTEREST_GROUP.BUSINESS_TYPE, 
            data.IG_MEM_INTEREST_GROUP.STATUS, 
            data.IG_MEM_INTEREST_GROUP.PUBLISHING_DATE,
            data.IG_MEM_INTEREST_GROUP.END_DATE
        )    
    })


        
})

}

export default IG_Report