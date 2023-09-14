import elems_MembershipMasters from "../../../Elements/FS-002 Reports/FS-014-Membership/MembershipMaster";

class Reports_MembershipMasters {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Bad Address Members Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyBadAddressListing(expectedPg){
    cy.visit('/report?reportId=ReportMembership.BadAddressMembers')
    cy.wait(2000)
    cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)

    // cy.Click(elems_MembershipMasters.BTN_GENERATE)
    // cy.wait(5000)
    //cy.ValidateElementText('//div[@data-id="table1_1"]')
    //cy.Click(elems_MembershipMasters.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Documentary Proof Operational Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyDocumentaryProofOperationalListing(expectedPg){
        cy.visit('/report?reportId=ReportMembership.DocumentaryProofOperational')
        cy.wait(2000)
        cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_MembershipMasters.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MembershipMasters.BTN_EXPORT)
        }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Documentary Proof Verified Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyDocumentaryProofVerifiedListing(expectedPg, docuProof, startDate, endDate){
        cy.visit('/report?reportId=ReportMembership.DocumentaryProofVerified')
        cy.wait(2000)
        cy.ValidateElementText(elems_MembershipMasters.LBL_PAGE, expectedPg)

        // cy.SelectDropDownItem(elems_MembershipMasters.DRP_DOCUMENT, docuProof)
        // cy.EnterDate(elems_MembershipMasters.VAL_STARTDATE, startDate)
        // cy.EnterDate(elems_MembershipMasters.VAL_ENDDATE, endDate)
    
        // cy.Click(elems_MembershipMasters.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MembershipMasters.BTN_EXPORT)
        }
        

}

export default Reports_MembershipMasters