import login from "../../cypress/fixtures/login";
import elems_PageHeader from "../page-objects/SMCMS/Elements/Common/PageHeader";

beforeEach(() => {

    // Set local storage for QA Enviroment
     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const TBL_Locator = '//h2[text()="Facility Group Booking Listing Form"]/parent::div/following-sibling::div//table'
const TargetColumn = "Main Facility"
const TargetColumnValue = "Group Ballot 2023"
const ReferenceCol = "NRIC"
const ReferenceColVal = "	280D"



describe('[TS01] FS-013&39 In-House Sales and Merchandise Item Management', function () {


    it('[TC01] To be able to test creating and updating a Merchandise Item.', function () {

        cy.visit('/facilities/groupBookingList')
        cy.wait(5000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Facility Group Booking Listing Form")
        cy.FilloutNRICAndNamr('//input[@id="txtCustomerNRIC"]',
                              "280D", '//input[@id="txtCustomerName"]', 'Customer-27631')

        cy.VerifyTableEntry(TBL_Locator, TargetColumn, TargetColumnValue)

        cy.VerifyTableEntry(TBL_Locator, TargetColumn, "Facility 2023")

        cy.VerifyTableEntry(TBL_Locator, "Member ID", "A300002738")

        cy.VerifyTableEntry(TBL_Locator, "Member Name", "Customer-27631")

        cy.VerifyTableEntry(TBL_Locator, "Status", "Pending Payment")

        cy.ClickTableLinkItem(TBL_Locator, "Booking No", "F-FGB-20230418-000109")

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Facility Group Booking Detail")

        cy.Click('//button[text()="Cancel"]')

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Facility Group Booking Listing Form")

     
    })
    


});