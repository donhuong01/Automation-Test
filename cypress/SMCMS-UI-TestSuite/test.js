import login from "../fixtures/login";
beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})



describe('[TS01] FS-013&39 In-House Sales and Merchandise Item Management', function () {


    it('[TC01] To be able to test creating and updating a Merchandise Item.', function () {

        cy.visit('/membership/customerCheckin')
        cy.wait(3000)
        cy.EnterText('//input[@id="txtMemberId"]', 'A300002288')
        cy.Click('//button[text()="Check In"]')
        cy.wait(8000)
        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseDetail')
        cy.wait(8000)
        cy.Click('//label[@aria-label="Merchandise Item"]')
        cy.Click('//label[@for="pckItemName"]//following-sibling::div//button')

     
    })

});