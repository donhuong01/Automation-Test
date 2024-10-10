import elems_PageHeader from '../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_MemberListing from '../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import { nricGenerator } from '../../support/nricGenerator'

describe("Membership registration and renewal", ()=>{
  it("Login and registration", ()=>{
    const username = Cypress.env('aad_username')
    const password = Cypress.env('aad_password')
    const memberId = Cypress.env('member_id')
    const nric = nricGenerator('T', '20')
    const timeout = parseInt(Cypress.env('timeout'))

    //Select Channel
    cy.visit('/membership/customerCheckin')
    cy.LoginMicrosoftAccount(username, password)

    // checkin
    cy.wait(timeout)
    cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Customer Check-In")
    cy.EnterText(elems_MemberListing.TXT_MEMBERID, memberId)

    // checkin button
    cy.get("[class*='ToolBarContainer_container_'] > .k-button").click({ force: true });

    // navigate then click continue button
    cy.wait(timeout)
    cy.get('.secondary-button').click({force: true})

    // click safra member
    cy.wait(timeout)
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(7)").click({force: true}) // safra button
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(2)").click({force: true}) // membership registration

    // type registration form
    cy.get('#txtNric').clear().type(nric) // NRIC
    
    cy.get('span#drpNsStatus').click({force: true})
    cy.get("li[id*='option-']")
      .contains("SAF NSMan")
      .click({force: true});

    cy.get('span#drpNsRank').click({force: true})
    cy.get("li[id*='option-']")
      .contains("Officer")
      .click({force: true});

    cy.get('span#drpNationality').click({force: true})
    cy.get("li[id*='option-']")
      .contains("Singaporean/PR")
      .click({force: true});
    
    cy.get('span#drpMaritalStatus').click({force: true})
    cy.get("li[id*='option-']")
      .contains("Married")
      .click({force: true});
    
    cy.get('.secondary-button').click({force: true})

    // Membership tenure selection
    cy.wait(timeout)
    cy.contains('span.k-input-value-text', 'Select an option')
      .click({force: true})
    cy.get("li[id*='option-']")
    .contains("10 Years")
    .click({force: true});

    cy.get('#btnAddToCart').click({force: true})

    // ShoppingCart
    cy.wait(timeout)
    cy.get('span#drpPaymentMode').click({force: true})
    cy.get("li[id*='option-']")
      .contains("CSO-CASH")
      .click({force: true});
    
    cy.get('span.k-button-text')
      .contains("Apply Payment")
      .click({force: true})
  })
})