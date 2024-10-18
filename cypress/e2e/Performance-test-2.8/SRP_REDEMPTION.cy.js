import elems_PageHeader from '../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_MemberListing from '../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import { nricGenerator } from '../../support/nricGenerator'

describe("Make a srp redemption", ()=>{
	beforeEach(() => {
		const username = Cypress.env('aad_username')
	    const password = Cypress.env('aad_password')
	    const memberId = Cypress.env('member_id')
	    const nric = nricGenerator('T', '20')
	    const timeout = parseInt(Cypress.env('timeout'))
	    const childNric = nricGenerator('T', '10')
	    cy.visit('/membership/customerCheckin')
    	cy.LoginMicrosoftAccount(username, password)
	})

	it("Login membership that is not found", ()=>{
		const memberIdNotFound = Cypress.env('member_id_not_found')
    	cy.get("#txtMemberId").type(memberIdNotFound)
    	cy.contains('span[class="k-button-text"]', 'Check In').click()
    	cy.contains("No customer record found.").should('be.visible')

	})

	it("Login success and membership that has not enough points", ()=>{
		const memberIdNotEnoughPoints = Cypress.env('member_id_not_enough_points')
    	cy.get("#txtMemberId").type(memberIdNotEnoughPoints)
    	cy.contains('span[class="k-button-text"]', 'Check In').click()

    	cy.contains('span[class="k-button-text"]', 'Continue').click()
    	cy.get('.k-appbar-section').first().click();

    	cy.get("li > span").contains("SRP").trigger("mouseover")

    	cy.get("li > span").contains("Redemption").trigger("mouseover")
    	cy.visit("/membership/srp/redemptionListing")

    	// cy.get("li > span").contains("SRP Redemption").click()

    	cy.get('span[class="k-button-text"').contains("Redeem").first().click()

    	cy.contains('span[class="k-button-text"]', 'Add to Cart').click()
    	cy.contains("does not have enough points to redeem this item").should('be.visible')
	})

	it("Login success and apply payment successful", ()=>{
		const memberIdSuccess = Cypress.env('member_id_srp_success')
    	cy.get("#txtMemberId").type(memberIdSuccess)
    	cy.contains('span[class="k-button-text"]', 'Check In').click()

    	cy.contains('span[class="k-button-text"]', 'Continue').click()
    	cy.get('.k-appbar-section').first().click();

    	cy.get("li > span").contains("SRP").trigger("mouseover")

    	cy.get("li > span").contains("Redemption").trigger("mouseover")
    	cy.visit("/membership/srp/redemptionListing")

    	cy.get("#itemCode").type("SRP-2000003")
    	cy.contains("span[class='k-button-text']", "Search Filters").click()

    	cy.get('span[class="k-button-text"').contains("Redeem").first().click()

    	cy.contains('span[class="k-button-text"]', 'Add to Cart').click()
    	cy.get('#drpPaymentMode > button').click()
    	cy.get(".k-animation-container > div").contains("SRP").click()

    	cy.get("#txtNumberOfPoints").type("50")
    	cy.contains("span.k-button-text", "Apply Payment").click()
    	cy.wait(2000)
    	cy.contains("Apply payment successful").should('be.visible')

    	cy.contains("span.k-button-text", "Pay Now").click()
    	cy.contains("Cart has been checked out successfully.").should('be.visible')
	})
})


