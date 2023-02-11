/*****************************************************
 * Page Function: Sample Script to Test Membership Charge Rate Listing Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import MembershipChargeRateListing from '../../../../page-objects/SMCMS/PageActions/FS-029-Membership-Charge-Rate/MembershipChargeRateListing'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-029-Member-Charge-Rate/029-data'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('Membership Charge Rate Listing Form', function () {

    // Page Definitions
    const MemChargeRateList = new MembershipChargeRateListing()

    const name = data.MembershipChargeRateListing.filters.name
    const cardType = data.MembershipChargeRateListing.filters.cardType
    const Description = data.MembershipChargeRateListing.filters.Description

    it('[TC01]Filter value by Name and card Type', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(3000)

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')

        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType(name, cardType)

        // Verify Charge Rate Name in the listing form
        MemChargeRateList.VerifyChargeRateInListingForm('Name', name)

        // Verify Charge Rate card type in the listing form
        MemChargeRateList.VerifyChargeRateInListingForm('Card Type', cardType)


    })
    it('[TC02] Verify Membership Charge Rate Listing Filters', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(10000)

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')

        //Filter by Name and CardType
        // Filter Listing
        MemChargeRateList.filterChargeRateList({
            name : name,
            cardType : cardType
        })

        // Verify Listing
        MemChargeRateList.verifyMemChargeRateList(name, Description)
    })

    it('[TC03] Access Charge Rate Item', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(10000)


        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType(name, cardType)

        // Click Name Link
        MemChargeRateList.clickNameLink(name)
        
        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Details')

        // Click Cancel button
        MemChargeRateList.Cancel()

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Listing')
        

        // Create New Item
        MemChargeRateList.createNew()

        // Verify Page title
        MemChargeRateList.VerifyPageTitle('Membership Charge Rate Details')
    })

    it('[TC04] Verify Membership Charge Rate Listing Form Table Entries and delete entry', function () {

        // Navigate to Form
        cy.visit('/membership/chargeRateList').wait(10000)

        
        //Filter by Name and CardType
        MemChargeRateList.FilterByNameAndCardType(name, cardType)

        // Verify Listing
        // MemChargeRateList.verifyMemChargeRateList(data.MembershipChargeRateListing.memChargeRateList)

        // Select Charge Rate Item
        MemChargeRateList.selectChargeRate(name)

        // ITEM MUST BE SELECTED BEFORE DELETE BUTTON IS ENABLED
        // Delete Item 
        MemChargeRateList.delete()

        //Click on yes
        // MemChargeRateList.deletePopupYes()
    })
})