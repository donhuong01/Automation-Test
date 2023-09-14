import elems_MemberCard from "../../../Elements/FS-002 Reports/FS-030-Identity/MemberCard"

class SRP_Reports {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Collected Redeemed Stock Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyCollectedRedeemedStock(expectedPg){
    cy.visit('/report?reportId=ReportSRP.CollectedRedeemedStock')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

     /*****************************************************
     * Method: Checking functionallity and Verification on 
               Earning And Redeeming Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyEarningAndRedeeming(expectedPg){
    cy.visit('/report?reportId=ReportSRP.EarningAndRedeeming')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Earning Monthly Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyEarningMonthly(expectedPg){
    cy.visit('/report?reportId=ReportSRP.EarningMonthly')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Member Total Points Detail Email Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyMemberTotalPointsDetailEmail(expectedPg){
    cy.visit('/report?reportId=ReportSRP.MemberTotalPointsDetailEmail')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Redeeming Monthly With Number Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyRedeemingMonthlyWithNumber(expectedPg){
    cy.visit('/report?reportId=ReportSRP.RedeemingMonthlyWithNumberOfItem')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Uncollected Redeemed Stock Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyUncollectedRedeemedStock(expectedPg){
    cy.visit('/report?reportId=ReportSRP.UncollectedRedeemedStock')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*****************************************************************
     * Method: Checking functionallity and Verification on 
            Vendor Wise Contributions And Redemptions Detail Listing
     * Description: This function verifies the page
    ******************************************************************/
    verifyVendorWiseDetail(expectedPg){
    cy.visit('/report?reportId=ReportSRP.VendorWiseContributionsAndRedemptionsDetail')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /**********************************************************************
     * Method: Checking functionallity and Verification on 
            Vendor Wise Contributions And Redemptions Detail By Issued Date
     * Description: This function verifies the page
    ************************************************************************/
    verifyVendorWiseDetailByIssued(expectedPg){
        cy.visit('/report?reportId=ReportSRP.VendorWiseContributionsAndRedemptionsDetailByIssuedDate')
        cy.wait(2000)
        cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
    
        // cy.Click(elems_MemberCard.BTN_GENERATE)
            cy.wait(2000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.Click(elems_MemberCard.BTN_EXPORT)
        }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               Member SRP Spending And Redemption Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyMemberSRP(expectedPg){
    cy.visit('/report?reportId=ReportSRP.MemberSRPSpendingAndRedemption')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*************************************************************
     * Method: Checking functionallity and Verification on 
               Member SRP Spending And Redemption Address Listing
     * Description: This function verifies the page
    *************************************************************/
    verifyMemberSRPAddress(expectedPg){
    cy.visit('/report?reportId=ReportSRP.MemberSRPSpendingAndRedemptionAddress')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*************************************************************
     * Method: Checking functionallity and Verification on 
               Member SRP Spending And Redemption Email Listing
     * Description: This function verifies the page
    *************************************************************/
    verifyMemberSRPEmail(expectedPg){
    cy.visit('/report?reportId=ReportSRP.MemberSRPSpendingAndRedemptionEmail')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

    /*************************************************************
     * Method: Checking functionallity and Verification on 
               Member SRP Spending And Redemption Mobile Listing
     * Description: This function verifies the page
    *************************************************************/
    verifyMemberSRPMobile(expectedPg){
    cy.visit('/report?reportId=ReportSRP.MemberSRPSpendingAndRedemptionMobile')
    cy.wait(2000)
    cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)

    // cy.Click(elems_MemberCard.BTN_GENERATE)
        cy.wait(2000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MemberCard.BTN_EXPORT)
    }

}

export default SRP_Reports