import elems_PageHeader from '../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_MemberListing from '../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

describe("Activity/Event Registration", () => {
  it("Activity/Event Registration", () => {
    const username = Cypress.env('aad_username')
    const password = Cypress.env('aad_password')
    const memberId = Cypress.env('member_id')
    const timeout = parseInt(Cypress.env('timeout'))
    const childName = "Leon";
    const scheduleName = "Registration for Fun Zone";
    const eventName = "AE-2404-00003";

    //Select Channel
    cy.visit('/membership/customerCheckin')
    cy.LoginMicrosoftAccount(username, password)

    // checkin
    cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Customer Check-In")
    cy.EnterText(elems_MemberListing.TXT_MEMBERID, memberId)

    // checkin button
    cy.get("[class*='ToolBarContainer_container_'] > .k-button").click({ force: true });

    // navigate then click continue button
    cy.wait(timeout)
    cy.get('.secondary-button').click({ force: true })

    // visit calender
    cy.visit('/eventcalender')

    // 
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    // double click event
    cy.get('div.k-event').contains(eventName)
      .then(($element) => {
        const event = new MouseEvent('dblclick', {
          bubbles: true,
          cancelable: true,
          view: window
        });

        // Dispatch the event
        $element[0].dispatchEvent(event);
      });


    cy.get('@windowOpen').should('be.called').then((stub) => {
      const newTabUrl = stub.args[0][0];
      cy.visit(newTabUrl);
      cy.wait(timeout)
    });


    // Continue testing the new page in the same tab
    cy.url().should('include', 'eventregister?activityandeventid');

    // click Add Schedule
    cy.get('button.link-button').contains('Add Schedule').should('exist').click();

    // Select the checkbox
    cy.get('tr.k-table-row td[aria-colindex="2"]').contains(scheduleName).should('exist').click();

    // Submit schedule selected
    cy.get('div.k-dialog-wrapper > div.k-window.k-dialog > div.k-dialog-actions.k-actions-end > button').first().contains('Select').should('exist').click()

    // enter child name
    cy.get('input[name^="additionalRegistrationFieldValue"]').type(childName);

    // select slots
    cy.get('select[name^="additionalRegistrationFieldValue"]').first().parent().click();
    cy.get('ul.k-list-ul li.k-list-item').first().click();

    // Register
    cy.get('button[type="submit"]').contains('Register').should('exist').click();
    cy.wait(timeout)

    // Check that the URL ends with /payment/shoppingCart
    cy.url().should('include', '/payment/shoppingCart');

    // select payment mode
    cy.get('select[name="paymentMode"]').first().parent().click();
    cy.get('ul.k-list-ul li.k-list-item').contains('CASH').click()
    
    // apply payment
    cy.get('button[type="submit"]').contains('Apply Payment').should('exist').click();
    cy.wait(timeout)

    // pay now
    cy.get('button[type="submit"]').contains('Pay Now').should('exist').click();
    cy.wait(timeout)

    // Check that the URL ends with /membership/customerLandingPage
    cy.url().should('include', '/membership/customerLandingPage');

    cy.contains("Apply payment successful").should('be.visible');
  })
})