import elems_CustomerCheckInPage from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker'
class CustomerCheckInPage {
    /*****************************************************
     * Method: checkIn
     * Description: Check-In at Customer Check-In Page
     *
     * @param {string} type Check-In Types: MEMBERID, NRIC, EMAIL
     *                                      MOBILENUMBER, SCANECARD, SWIPECARD
     * @param {string} value1 Field Value needed for check-in type
     * @param {string} value2 2nd Field value needed dependent on check-in type
     *****************************************************/
    checkIn({ type, value1, value2, expectedPage }) {

        // Checkin using Member ID
        if (type === 'MEMBERID' && value1 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_MEMBERID)
            cy.EnterText(elems_CustomerCheckInPage.TXT_MEMBERID, value1)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Checkin using NRIC
        else if (type === 'NRIC' && value1 !== undefined && value2 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, value2)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, value1)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Checkin using Email Address
        else if (type === 'EMAIL' && value1 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_EMAILADDRESS)
            cy.EnterText(elems_CustomerCheckInPage.TXT_EMAILADDRESS, value1)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Checkin using Mobile Number
        else if (type === 'MOBILENUMBER' && value1 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_MOBILENUMBER)
            cy.EnterText(elems_CustomerCheckInPage.TXT_MOBILENUM, value1)
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            // cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Checkin using Scan eCard
        else if (type === 'SCANECARD' && value1 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_SCANECARD)
            cy.EnterText(elems_CustomerCheckInPage.TXT_SCANECARD, value1)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Checkin using Swipe Card
        else if (type === 'SWIPECARD' && value1 !== undefined) {
            cy.TickRadioButton(elems_CustomerCheckInPage.RBTN_SWIPECARD)
            cy.EnterText(elems_CustomerCheckInPage.TXT_SWIPECARD, value1)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
        }

        // Error Handling
        else {
            throw 'CustomerCheckInPage.checkIn error on type argument./n\
                            Accepted type values: MEMBERID, NRIC, EMAIL, MOBILENUMBER, SCANECARD, SWIPECARD'
        }

    }

    SelectMemberID(Memberid) {
        cy.SelectTableItem(elems_CustomerCheckInPage.TBL_SELECTCUSTOMER, 'Member ID', Memberid)
    }

}

export default CustomerCheckInPage