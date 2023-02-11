import MemberInformation from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/MemberInformation'
import CustomerCheckInPage from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Customer CheckIn/CustomerCheckInPage'
import login from '../../../../../fixtures/login'
import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'



//Customer Checkin 

describe('CustomerCheckin', function () {

    const checkin = new CustomerCheckInPage()
    const memberinfo = new MemberInformation()
    const checkin_expectedPg = data.checkin_expectedPg

    beforeEach(function () {

        // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

        cy.visit('/membership/customerCheckin')
        cy.wait(5000) // Wait 5 secs

    })

    it('Checkin with Member ID', function () {

        // Go to website
        const type = data.checkin_memberID.type
        const value1 = data.checkin_memberID.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg

        checkin.checkIn({ type, value1, value2, expectedPage })
        cy.wait(5000)
        //Click cancel
        memberinfo.cancel(checkin_expectedPg)
    })

    it('Checkin with NRIC', function () {

        //Checkin with NRIC
        const type = data.checkin_NRIC.type
        const value1 = data.checkin_NRIC.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg

        checkin.checkIn({ type, value1, value2, expectedPage })
        //Click cancel
        cy.wait(5000)
        memberinfo.cancel(checkin_expectedPg)
    })

    //checkin with Email Address
    it('Checkin with email', function () {

        const type = data.checkin_email.type
        const value1 = data.checkin_email.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg

        checkin.checkIn({ type, value1, value2, expectedPage })
        cy.wait(5000)
        //Click cancel
        memberinfo.cancel(checkin_expectedPg)

    })

    //checkin with Mobile number
    it('Checkin with mobile number', function () {

        const type = data.checkin_mobile.type
        const value1 = data.checkin_mobile.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg
        const MemberID = data.checkin_mobile.value2

        checkin.checkIn({ type, value1, value2 })
        cy.wait(5000)

        checkin.SelectMemberID(MemberID)

        //Click cancel
        memberinfo.cancel(checkin_expectedPg)
    })
    //checkin with Scan e-card
    it('Checkin with Scan e-card', function () {

        const type = data.checkin_scancard.type
        const value1 = data.checkin_scancard.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg

        checkin.checkIn({ type, value1, value2, expectedPage })
        cy.wait(5000)

        //Click cancel
        memberinfo.cancel(checkin_expectedPg)
    })
    //checkin with Swipe card
    it('Checkin with Swipe card', function () {

        const type = data.checkin_swipecard.type
        const value1 = data.checkin_swipecard.value1
        const value2 = data.checkin_NRIC.value2
        const expectedPage = data.meminfo_expectedPg

        checkin.checkIn({ type, value1, value2, expectedPage })
        cy.wait(5000)

        //Click cancel
        memberinfo.cancel(checkin_expectedPg)
    })

})
