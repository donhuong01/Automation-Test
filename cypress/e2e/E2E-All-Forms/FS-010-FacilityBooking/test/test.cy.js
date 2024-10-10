import login from '../../../../fixtures/login'
import elems_PageHeader from '../../../../page-objects/SMCMS/Elements/Common/PageHeader'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    //cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    cy.visit('/membership/customerCheckin')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA Jurong')
})

describe(`Facility Booking Change Facility Type`, () => {

    it('Checkin registered member for booking', function () {
        cy.visit('/membership/customerCheckin')
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, "Customer Check-In")
        cy.EnterText("//input[@id='txtMemberId']", "A300003994")
        cy.xpath("//button[normalize-space()='Check In']", { timeout: 30000 }).click()
        cy.xpath("//div[@class='k-loading-image']", { timeout: 30000 }).should("be.visible")
        cy.xpath("//div[@class='k-loading-image']", { timeout: 30000 }).should("not.exist")

        cy.visit('/facilities/bookingListing', { timeout: 30000 })
        cy.xpath("//button[normalize-space()='Create New']", { timeout: 30000 }).click()
        cy.SelectPickerItem(`//label[text()="Facility Type"]/following-sibling::div//button`, "KimFacilityType")
        cy.xpath(`//label[text()="Location"]/following-sibling::div//button`).click()
        cy.xpath(`//td[normalize-space()="SAFRA Jurong"]/preceding-sibling::td/input[@type="checkbox"]`).click()
        cy.xpath(`//button[normalize-space()="Select"]`, { timeout: 30000 }).click()
        cy.xpath(`//div[normalize-space()="Facilities"]`, { timeout: 30000 }).should('be.visible')
        cy.xpath(`//td[normalize-space()="KimTestFacility2"]/preceding-sibling::td`, { timeout: 30000 }).click()
        cy.xpath(`//button[normalize-space()='Select']`).click()

    })

})