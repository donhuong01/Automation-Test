import elems_PageHeader from '../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_MemberListing from '../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import { nricGenerator } from '../../support/nricGenerator'

describe("Interest Group Membership Registration", () => {
    it("Login and registration", () => {
        const username = Cypress.env('aad_username')
        const password = Cypress.env('aad_password')
        const memberId = Cypress.env('member_id')
        const timeout = parseInt(Cypress.env('timeout'))

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

        // checkin Interest Group
        cy.wait(timeout)
        cy.get("[class*='Tiles_tiles-container__'] > :nth-child(8)").click({ force: true });

        // checkin Membership Registration
        cy.wait(timeout)
        cy.get('.Tiles_tiles-container__QRTvj > :nth-child(2)').click({ force: true });

        // checkin Normal IG Main
        cy.wait(timeout)
        cy.get('.Tiles_tiles-container__6OStU > :nth-child(2)').click({ force: true });

        // checkin IG Sub - Term
        cy.wait(timeout)
        cy.get('.Tiles_tiles-container__6OStU > :nth-child(2)').click({ force: true });

        // checkin SAFRA Mt Faber
        cy.wait(timeout)
        cy.get('.Tiles_tile__-86Z3').click({ force: true });

        //select Membership Term
        cy.wait(timeout);
        cy.get('#membershipTerm').should('be.visible');
        cy.get('.k-spinner-increase').click();
        cy.wait(500);
        cy.get('#membershipTerm').should('have.value', '1');

        //Shopping Cart
        cy.get('#addToCart > .k-button-text').click({force: true});

        cy.wait(timeout);
        cy.get('#drpPaymentMode > .k-button > .k-icon').click({force: true})
        cy.get("li[id*='option-']").contains("CASH").click({force: true});

        cy.get(':nth-child(3) > .float-end > .k-button')
        .contains("Apply Payment")
        .click({force: true});

        cy.wait(timeout)
        cy.get('.ToolBarContainer_container__d6yTc > .row > :nth-child(1) > :nth-child(1)').click({force: true});

        cy.contains("Cart has been checked out successfully.").should('be.visible')

        //Check Receipt
        cy.visit('/membership/customerCheckin')
        cy.get("[class*='Tiles_tiles-container_'] > :nth-child(6)").click({force: true}); // receipt button
        cy.get("[class*='Tiles_tiles-container_'] > :nth-child(3)").click({force: true}); // receipt history button
        
        cy.get('[aria-rowindex="2"] > :nth-child(2) > .link-title').click({force: true});
    })
})