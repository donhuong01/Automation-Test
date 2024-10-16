import elems_PageHeader from '../../page-objects/SMCMS/Elements/Common/PageHeader'
import elems_MemberListing from '../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

describe("Membership Renewal", ()=>{
	it ("Renew membership successfully", ()=>{
		const timeout = parseInt(Cypress.env('timeout'))
		const memberId = Cypress.env('member_id')
		const username = Cypress.env('aad_username')
    	const password = Cypress.env('aad_password')

		cy.visit('/membership/customerCheckin')
    	cy.LoginMicrosoftAccount(username, password)

    	cy.get("#txtMemberId").type(memberId)
    	cy.contains('span[class="k-button-text"]', 'Check In').click({force: true})
    	cy.contains('span[class="k-button-text"]', 'Continue').click({force: true})
    	cy.get('.k-appbar-section').first().click();

    	cy.get(".Tiles_tile__OtDuX > p").contains("SAFRA Member").click({force: true})
    	cy.get(".Tiles_tile__OtDuX > p").contains("Membership Renewal").click({force: true})

    	cy.get(".k-dropdownlist").first().find("button").click({force: true})
    	cy.get(".k-animation-container > div").contains("1 Year").click()

    	//close sidebar
    	cy.get("button[title='cancelButton']").find("svg").click({force: true})
        
        // click first checkbox of 2nd table
        cy.get("table").eq(1).find("input[type='checkbox']").first().check()
    	cy.get(".k-dropdownlist").eq(1).find("button").click({force: true})
    	cy.get(".k-animation-container > div").contains("1 Year").click()

    	cy.contains("span.k-button-text", "Add to Cart").click()
    	cy.get('#drpPaymentMode > button').click()
    	cy.get(".k-animation-container > div").contains("CSO-CASH").click()

    	cy.contains("span.k-button-text", "Apply Payment").click()
    	cy.wait(2000)
    	cy.contains("Apply payment successful").should('be.visible')

    	cy.contains("span.k-button-text", "Pay Now").click()
    	cy.contains("Cart has been checked out successfully.").should('be.visible')

	})

})