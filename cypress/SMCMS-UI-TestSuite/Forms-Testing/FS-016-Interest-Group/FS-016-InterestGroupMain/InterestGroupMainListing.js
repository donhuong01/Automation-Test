import InterestGroupMainListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainListing'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/016-Interest-Group-Main-Mangement'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const BusinessType = "Normal"
const Name = "Badminton Social Group"
const Status = "Approved"


describe('[TS02] FS-016 Interest Group Main Listing', function () {


    it('[TC01] Verify the functionality of Create New button', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        // Verify Page title
        InterestGroupMainListing.VerifyPageTitle('Interest Group Main Listing')

        //click on create new button
        InterestGroupMainListing.CreateNew()

        // Verify Page title
        InterestGroupMainListing.VerifyPageTitle('Interest Group Main Detail Form')


    })

    it('[TC02] Filters values by Business Type', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        // Verify Page title
        InterestGroupMainListing.VerifyPageTitle('Interest Group Main Listing')

        // Filter item by business type
        InterestGroupMainListing.FilterValueByBusinessType(Name, BusinessType, Status)



    })
    it('[TC03] Filters values by Status', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        // Verify Page title
        InterestGroupMainListing.VerifyPageTitle('Interest Group Main Listing')

        // Filter item by status
        InterestGroupMainListing.FilterValueByStatus(Name, BusinessType, Status)



    })
    it('[TC04] Filters Iem by Busniess Type and Delete Item', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        // Verify Page title
        InterestGroupMainListing.VerifyPageTitle('Interest Group Main Listing')

        // Filter item by business type
        InterestGroupMainListing.FilterValueByBusinessType(Name, BusinessType, Status)

        // Select Table entry 
        InterestGroupMainListing.SelectTableEntry(Name)

        // Click Delete button
        InterestGroupMainListing.Delete()



    })

})