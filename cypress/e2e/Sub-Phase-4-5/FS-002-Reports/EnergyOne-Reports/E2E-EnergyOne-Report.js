import Reports_E1 from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-015-Energy-One-Reports/E1-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/E1-Reports-data";

const E1_Reports = new Reports_E1 ()

const E1_Report = () => {

describe("E1 Reports Verification",function(){

    it('Checking functionallity and Verification on E1 Membership Listing Address', function(){
        E1_Reports.verifyE1MembershipListingAddress
        (
            data.MEM_LISTING_ADDRESS.EXPECTEDPG,
            data.MEM_LISTING_ADDRESS.E1MAIN,
            data.MEM_LISTING_ADDRESS.E1,
            data.MEM_LISTING_ADDRESS.INITIAL_JOIN_DATE,
            data.MEM_LISTING_ADDRESS.EXPIRY_DATE_FROM,
            data.MEM_LISTING_ADDRESS.EXPIRY_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Listing', function(){
        E1_Reports.verifyE1MembershipListing
        (
            data.MEM_LISTING.EXPECTEDPG,
            data.MEM_LISTING.E1MAIN,
            data.MEM_LISTING.E1,
            data.MEM_LISTING.INITIAL_JOIN_DATE,
            data.MEM_LISTING.EXPIRY_DATE_FROM,
            data.MEM_LISTING.EXPIRY_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Listing Email', function(){
        E1_Reports.verifyE1MembershipListingEmail
        (
            data.MEM_LISTING_EMAIL.EXPECTEDPG,
            data.MEM_LISTING_EMAIL.E1MAIN,
            data.MEM_LISTING_EMAIL.E1,
            data.MEM_LISTING_EMAIL.INITIAL_JOIN_DATE,
            data.MEM_LISTING_EMAIL.EXPIRY_DATE_FROM,
            data.MEM_LISTING_EMAIL.EXPIRY_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Listing Mobile', function(){
        E1_Reports.verifyE1MembershipListingMobile
        (
            data.MEM_LISTING_MOBILE.EXPECTEDPG,
            data.MEM_LISTING_MOBILE.E1MAIN,
            data.MEM_LISTING_MOBILE.E1,
            data.MEM_LISTING_MOBILE.REGISTRATION_DATE_FROM,
            data.MEM_LISTING_MOBILE.REGISTRATION_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Paying Listing', function(){
        E1_Reports.verifyE1MembershipPayingListing
        (
            data.PAYING_LISTING.EXPECTEDPG,
            data.PAYING_LISTING.E1MAIN,
            data.PAYING_LISTING.E1,
            data.PAYING_LISTING.START_DATE,
            data.PAYING_LISTING.END_DATE
        )
    })

    it('Checking functionallity and Verification on E1 Membership Paying Listing Email', function(){
        E1_Reports.verifyE1MembershipPayingListingEmail
        (
            data.PAYING_LISTING_EMAIL.EXPECTEDPG,
            data.PAYING_LISTING_EMAIL.E1MAIN,
            data.PAYING_LISTING_EMAIL.E1,
            data.PAYING_LISTING_EMAIL.START_DATE,
            data.PAYING_LISTING_EMAIL.END_DATE
        )
    })

    it('Checking functionallity and Verification on E1 Membership Paying Listing Mobile', function(){
        E1_Reports.verifyE1MembershipPayingListingMobile
        (
            data.PAYING_LISTING_MOBILE.EXPECTEDPG,
            data.PAYING_LISTING_MOBILE.E1MAIN,
            data.PAYING_LISTING_MOBILE.E1,
            data.PAYING_LISTING_MOBILE.START_DATE,
            data.PAYING_LISTING_MOBILE.END_DATE
        )
    })

    it('Checking functionallity and Verification on E1 Membership Registration Listing', function(){
        E1_Reports.verifyE1MembershipRegistrationListing
        (
            data.REGISTRATION_LISTING.EXPECTEDPG,
            data.REGISTRATION_LISTING.E1MAIN,
            data.REGISTRATION_LISTING.E1,
            data.REGISTRATION_LISTING.REGISTRATION_DATE_FROM,
            data.REGISTRATION_LISTING.REGISTRATION_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Registration Mobile Listing', function(){
        E1_Reports.verifyE1MembershipRegistrationListingMobile
        (
            data.REGISTRATION_LISTING_MOBILE.EXPECTEDPG,
            data.REGISTRATION_LISTING_MOBILE.E1MAIN,
            data.REGISTRATION_LISTING_MOBILE.E1,
            data.REGISTRATION_LISTING_MOBILE.REGISTRATION_DATE_FROM,
            data.REGISTRATION_LISTING_MOBILE.REGISTRATION_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Reinstatement Listing', function(){
        E1_Reports.verifyE1MembershipReinstatementListing
        (
            data.REINSTATEMENT_LISTING.EXPECTEDPG,
            data.REINSTATEMENT_LISTING.E1MAIN,
            data.REINSTATEMENT_LISTING.E1,
            data.REINSTATEMENT_LISTING.REINSTATEMENT_FROM_MONTH,
            data.REINSTATEMENT_LISTING.REINSTATEMENT_TO_MONTH
        )
    })

    it('Checking functionallity and Verification on E1 Membership Renewal Listing', function(){
        E1_Reports.verifyE1MembershipRenewalListing
        (
            data.RENEWAL_LISTING.EXPECTEDPG,
            data.RENEWAL_LISTING.E1MAIN,
            data.RENEWAL_LISTING.E1,
            data.RENEWAL_LISTING.RENEWAL_DATE_FROM,
            data.RENEWAL_LISTING.RENEWAL_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Renewal Listing Mobile', function(){
        E1_Reports.verifyE1MembershipRenewalListingMobile
        (
            data.RENEWAL_LISTING_MOBILE.EXPECTEDPG,
            data.RENEWAL_LISTING_MOBILE.E1MAIN,
            data.RENEWAL_LISTING_MOBILE.E1,
            data.RENEWAL_LISTING_MOBILE.RENEWAL_LISTING_DATE_FROM,
            data.RENEWAL_LISTING_MOBILE.RENEWAL_LISTING_DATE_TO
        )
    })

    it('Checking functionallity and Verification on E1 Membership Termination Listing ', function(){
        E1_Reports.verifyE1MembershipTerminationListing
        (
            data.TERMINATION_LISTING.EXPECTEDPG,
            data.TERMINATION_LISTING.E1MAIN,
            data.TERMINATION_LISTING.E1,
            data.TERMINATION_LISTING.TERMINATION_DATE_FROM,
            data.TERMINATION_LISTING.TERMINATION_DATE_TO
        )
    })

})

}

export default E1_Report