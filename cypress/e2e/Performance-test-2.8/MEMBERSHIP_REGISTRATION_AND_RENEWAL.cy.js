import { nricGenerator } from '../../support/nricGenerator'

describe("Membership registration and renewal", ()=>{
  it("Login and registration", ()=>{
    const username = Cypress.env('aad_username')
    const password = Cypress.env('aad_password')
    const memberId = Cypress.env('member_id')
    const nric = nricGenerator('T', '20')
    const timeout = parseInt(Cypress.env('timeout'))
    const childNric = nricGenerator('T', '10')
    const number6Digits = Math.floor(100000 + Math.random() * 900000).toString()
    const handPhone = "88"+ number6Digits;
    const email = memberId + "@safra.sg"
    const postalCode = number6Digits

    //Select Channel
    cy.visit('/membership/customerCheckin')
    cy.LoginMicrosoftAccount(username, password)

    // checkin
    cy.get("#txtMemberId").type(memberId)

    // checkin button
    cy.get("[class*='ToolBarContainer_container_'] > .k-button").click({ force: true });

    // navigate then click continue button
    cy.wait(timeout)
    cy.get('#txtEmail')
      .invoke('val')
      .then(text => {
        if(text=='') {
          cy.get('#txtEmail').type(email)
        }
      })

    cy.get('#txtHandphone')
      .invoke('val')
      .then(text => {
        if(text=='') {
          cy.get('#txtHandphone').type(handPhone)
        }
      })

    cy.get('#txtPostalCode')
      .invoke('val')
      .then(text => {
        if(text=='') {
          cy.get('#txtPostalCode').type(postalCode)
        }
      })
    cy.get('.secondary-button').click({force: true})

    // click safra member
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(7)").click({force: true}) // safra button
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(2)").click({force: true}) // membership registration

    // type registration form
    cy.get('#txtNric').then(($val)=>{ 
      if($val.is(':enabled')){
        cy.get($val).clear().type(nric)

        cy.get($val).click({force: true})
        cy.get("li[id*='option-']")
          .contains("SAF NSMan")
          .click({force: true});

        cy.get($val).click({force: true})
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
        cy.contains('span.k-input-value-text', 'Select an option')
          .click()
        cy.get("li[id*='option-']")
          .contains("10 Years")
          .click({force: true})

        cy.get('#btnAddToCart').click({force: true})

        // ShoppingCart
        cy.get('span#drpPaymentMode').click({force: true})
        cy.get("li[id*='option-']")
        .contains("CSO-CASH")
        .click({force: true});

        cy.get('span.k-button-text')
          .contains("Apply Payment")
          .click({force: true})

        cy.wait(timeout)
        cy.get("[class*='ToolBarContainer_container_'] > .row > :nth-child(1) > :nth-child(1)")
          .click({force: true})
      }
    })

    /* ADD DEPENDENT FOR USER */
    cy.visit('/membership/customerCheckin')
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(7)").click({force: true}) // safra button
    cy.get("[class*='Tiles_tiles-container_'] > :nth-child(2)").click({force: true}) // membership registration


    cy.get('#btnAddDependent').click({force: true})
    cy.wait(timeout)

    cy.get('span#drpDependentType').click({force: true})
    cy.get("li[id*='option-']")
    .contains("Child")
    .click({force: true});
    
    cy.get('#txtNric').clear().type(childNric)
    cy.get('#txtNricName').clear().type("Child 1")

    cy.get('#dtpDateOfBirth').click().then(($val) => {
      cy.get($val).type("2012")
      cy.get($val).type('{leftArrow}')
      cy.get($val).type("Apr")
      cy.get($val).type('{leftArrow}')
      cy.get($val).type("12")
    })

    cy.get('span#drpGender').click({force: true})
    cy.get("li[id*='option-']")
    .contains("Male")
    .click({force: true});
  
    cy.get('span#drpNationality').click({force: true})
    cy.get("li[id*='option-']")
    .contains("Singaporean/PR")
    .click({force: true});

    cy.get('span#drpMaritalStatus').click({force: true})
    cy.get("li[id*='option-']")
    .contains("N/A")
    .click({force: true});

    cy.get('.secondary-button').click({force: true})
    cy.wait(timeout)
    cy.get('.secondary-button').click({force: true})

    cy.contains('span.k-input-value-text', 'Select an option')
      .click()
    cy.get("li[id*='option-']")
      .contains("Add to SFS")
      .click({force: false})
    
    cy.get('#btnAddToCart').click()

    cy.wait(timeout)
    cy.get('span#drpPaymentMode').click({force: true})
    cy.get("li[id*='option-']")
      .contains("CSO-CASH")
      .click({force: true});

    cy.get('span.k-button-text')
      .contains("Apply Payment")
      .click({force: true})

    cy.wait(timeout)
    cy.get("[class*='ToolBarContainer_container_'] > .row > :nth-child(1) > :nth-child(1)")
      .click({force: true})

    cy.contains("Cart has been checked out successfully.").should('be.visible')
  })
})