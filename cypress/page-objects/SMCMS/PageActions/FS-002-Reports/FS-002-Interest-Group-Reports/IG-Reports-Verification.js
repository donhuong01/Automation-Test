import elems_IGMainListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMainListing";
import elems_IGMemberhsipDeactivationLisitng from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMemberhsipDeactivationLisitng";
import elems_IGMembershipDefermentListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMembershipDefermentListing";
import elems_IGMembershipListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMembershipListing";
import elems_IGMembershipRegistrationListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMembershipRegistrationListing";
import elems_IGMembershipTerminationListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMembershipTerminationListing";
import elems_IGMembershipWaiveristing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGMembershipWaiverListing";
import elems_IGRenewalListing from "../../../Elements/FS-002 Reports/FS-016-Interest-Group/IGRenewalListing";

class Reports_IG {

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               IG Main Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyIGMainReports(expectedPg, iGMain, iGMainNumber){

        cy.visit('/report?reportId=ReportIG.InterestGroupMainListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGMainListing.LBL_PAGETITLE, expectedPg)

        cy.EnterText(elems_IGMainListing.TXT_IGMAINNAME, iGMain)
        cy.EnterText(elems_IGMainListing.TXT_IGMAINNUMBER, iGMainNumber)

        cy.Click(elems_IGMainListing.BTN_GENERATE)
        cy.wait(4000)
        ////cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)

    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               IG Deactivation Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyIGDeactivationReports(expectedPg, iGMain, iG, DeactDate){
        
        cy.visit('/report?reportId=ReportIG.MembershipDeactivationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGMemberhsipDeactivationLisitng.LBL_PAGETITLE, expectedPg)

        cy.SelectPickerItem(elems_IGMemberhsipDeactivationLisitng.PCK_IGMAIN, iGMain)
        cy.wait(2000)
        cy.SelectPickerItem(elems_IGMemberhsipDeactivationLisitng.PCK_IG, iG)
        cy.EnterDate(elems_IGMemberhsipDeactivationLisitng.TXT_DEACTIVATIONDATE, DeactDate)

        cy.click(elems_IGMainListing.BTN_GENERATE)
        cy.wait(4000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               IG Deferment Summary
     * Description: This function verifies the page
    *****************************************************/
    verifyIGDefermentSummary(expectedPg){

        cy.visit('/report?reportId=ReportIG.MembershipDefermentSummaryListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGMemberhsipDeactivationLisitng.LBL_PAGETITLE, expectedPg)

        cy.click(elems_IGMainListing.BTN_GENERATE)
        cy.wait(4000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               IG Renewal Listing
     * Description: This function verifies the page
    *****************************************************/
    verifyIGRenewalListing(expectedPg, iGMain, iG, renewalFrom, renewalTo){
        
        cy.visit('/report?reportId=ReportIG.MembershipRenewalListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGRenewalListing.LBL_PAGETITLE, expectedPg)

        cy.SelectPickerItem(elems_IGRenewalListing.PCK_IGMAIN, iGMain)
        cy.wait(2000)
        cy.SelectPickerItem(elems_IGRenewalListing.PCK_IG, iG)
        cy.EnterDate(elems_IGRenewalListing.TXT_RENEWALLISTINGFROM, renewalFrom)
        cy.EnterDate(elems_IGRenewalListing.TXT_RENEWALLISTINGTO, renewalTo)

        cy.click(elems_IGMainListing.BTN_GENERATE)
        cy.wait(4000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)
    }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
                 IG Membership Listing
        * Description: This function verifies the page
        *****************************************************/
        verifyIGmemberListing(expectedPg, iGMain, iG, initialJoin, expiryDate){
        
         cy.visit('/report?reportId=ReportIG.MembershipListing')
                cy.wait(2000)
                cy.ValidateElementText(elems_IGMembershipListing.LBL_PAGETITLE, expectedPg)
        
                cy.SelectPickerItem(elems_IGMembershipListing.PCK_IGMAIN, iGMain)
                cy.wait(2000)
                cy.SelectPickerItem(elems_IGMembershipListing.PCK_IG, iG)
                cy.EnterDate(elems_IGMembershipListing.TXT_INITIAL_JOIN, initialJoin)
                cy.EnterDate(elems_IGMembershipListing.TXT_EXPIRY_DATE, expiryDate)
        
                cy.click(elems_IGMainListing.BTN_GENERATE)
                cy.wait(4000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.click(elems_IGMainListing.BTN_EXPORT)
            }
        

        /*****************************************************
         * Method: Checking functionallity and Verification on 
                 IG Membership Listing Address
        * Description: This function verifies the page
        *****************************************************/
        verifyIGmemberListingAddress(expectedPg, iGMain, iG, initialJoin, expiryDate){
        
            cy.visit('/report?reportId=ReportIG.MembershipListingAddress')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipListing.LBL_PAGETITLE, expectedPg)
                    
            cy.SelectPickerItem(elems_IGMembershipListing.PCK_IGMAIN, iGMain)
            cy.wait(2000)
            cy.SelectPickerItem(elems_IGMembershipListing.PCK_IG, iG)
            cy.EnterDate(elems_IGMembershipListing.TXT_INITIAL_JOIN, initialJoin)
            cy.EnterDate(elems_IGMembershipListing.TXT_EXPIRY_DATE, expiryDate)
                    
            cy.click(elems_IGMainListing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.click(elems_IGMainListing.BTN_EXPORT)
         }


        /*****************************************************
         * Method: Checking functionallity and Verification on 
            IG Membership Listing Email
        * Description: This function verifies the page
        *****************************************************/
        verifyIGmemberListingEmail(expectedPg, iGMain, iG, initialJoin, expiryDate){
        
            cy.visit('/report?reportId=ReportIG.MembershipListingEmail')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipListing.LBL_PAGETITLE, expectedPg)
                        
            cy.SelectPickerItem(elems_IGMembershipListing.PCK_IGMAIN, iGMain)
            cy.wait(2000)
            cy.SelectPickerItem(elems_IGMembershipListing.PCK_IG, iG)
            cy.EnterDate(elems_IGMembershipListing.TXT_INITIAL_JOIN, initialJoin)
            cy.EnterDate(elems_IGMembershipListing.TXT_EXPIRY_DATE, expiryDate)
                        
            cy.click(elems_IGMainListing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
            IG Membership Registration Listing
        * Description: This function verifies the page
        *****************************************************/
        verifyIGmemberRegistration(expectedPg, iGMain, iG, RegisterDateFrom, RegisterDateTo){
        
            cy.visit('/report?reportId=ReportIG.MembershipRegistrationListing')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipRegistrationListing.LBL_PAGETITLE, expectedPg)
                            
            cy.SelectPickerItem(elems_IGMembershipRegistrationListing.PCK_IGMAIN, iGMain)
            cy.wait(2000)
            cy.SelectPickerItem(elems_IGMembershipRegistrationListing.PCK_IG, iG)
            cy.EnterDate(elems_IGMembershipRegistrationListing.TXT_REGISTERDATEFROM, RegisterDateFrom)
            cy.EnterDate(elems_IGMembershipRegistrationListing.TXT_REGISTERDATETO, RegisterDateTo)
                            
            cy.click(elems_IGMembershipRegistrationListing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
                 IG Termination Summary
        * Description: This function verifies the page
        *****************************************************/
        verifyIGTerminationSummary(expectedPg){

            cy.visit('/report?reportId=ReportIG.MembershipTerminationSummaryListing')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipTerminationListing.LBL_PAGETITLE, expectedPg)
        
            cy.click(elems_IGMembershipTerminationListing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
                 IG Termination Listing
        * Description: This function verifies the page
        *****************************************************/
        verifyIGTerminationListing(expectedPg, iGMain, iG, terminateBy, terminateDate){

            cy.visit('/report?reportId=ReportIG.MembershipTerminationListing')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipTerminationListing.LBL_PAGETITLE, expectedPg)
                
            cy.SelectPickerItem(elems_IGMembershipRegistrationListing.PCK_IGMAIN, iGMain)
            cy.wait(2000)
            cy.SelectPickerItem(elems_IGMembershipTerminationListing.PCK_IG, iG)
            cy.SelectDropDownItem(elems_IGMembershipTerminationListing.DRP_TERMINATEDBY, terminateBy)
            cy.EnterDate(elems_IGMembershipTerminationListing.TXT_TERMINATIONDATE, terminateDate)

            cy.click(elems_IGMembershipTerminationListing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
                 IG Waiver Listing
        * Description: This function verifies the page
        *****************************************************/
        verifyIGWaiverListing(expectedPg, iGMain, iG, termstartDate, termendDate){

            cy.visit('/report?reportId=ReportIG.MembershipWaiverListing')
            cy.wait(2000)
            cy.ValidateElementText(elems_IGMembershipWaiveristing.LBL_PAGETITLE, expectedPg)
                        
            cy.SelectPickerItem(elems_IGMembershipWaiveristing.PCK_IGMAIN, iGMain)
            cy.wait(2000)
            cy.SelectPickerItem(elems_IGMembershipWaiveristing.PCK_IG, iG)
            cy.EnterDate(elems_IGMembershipWaiveristing.TXT_MEMBERSHIPTERMSTART, termstartDate)
            cy.EnterDate(elems_IGMembershipWaiveristing.TXT_MEMBERSHIPTERMEND, termendDate)
        
            cy.click(elems_IGMembershipWaiveristing.BTN_GENERATE)
            cy.wait(4000)
            //cy.ValidateElementText('//div[@data-id="table1_1"]')
            //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
        * Method: Checking functionallity and Verification on 
                 IG Renewal Confirmation Summary
        * Description: This function verifies the page
        *****************************************************/
        verifyIGRenewalConfirmation(expectedPg){

        cy.visit('https://qa-smcms.safra.sg/report?reportId=ReportIG.RenewalConfirmation')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGMembershipTerminationListing.LBL_PAGETITLE, expectedPg)
                
        cy.click(elems_IGMembershipTerminationListing.BTN_GENERATE)
        cy.wait(4000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        /*****************************************************
         * Method: Checking functionallity and Verification on 
            IG Membership Listing Email
        * Description: This function verifies the page
        *****************************************************/
        verifyIGRegistrationorRenewal(expectedPg, iGMain, iG, initialJoin, expiryFrom, expiryTo){
        
        cy.visit('https://qa-smcms.safra.sg/report?reportId=ReportIG.MembershipRegistrationOrRenewalListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_IGMembershipListing.LBL_PAGETITLE, expectedPg)
                            
        cy.SelectPickerItem(elems_IGMembershipListing.PCK_IGMAIN, iGMain)
        cy.wait(2000)
        cy.SelectPickerItem(elems_IGMembershipListing.PCK_IG, iG)
        cy.EnterDate(elems_IGMembershipListing.TXT_INITIAL_JOIN, initialJoin)
        cy.EnterDate(elems_IGMembershipListing.TXT_EXPIRY_FROM, expiryFrom)
        cy.EnterDate(elems_IGMembershipListing.TXT_EXPIRY_TO, expiryTo)
                            
        cy.click(elems_IGMainListing.BTN_GENERATE)
        cy.wait(4000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.click(elems_IGMainListing.BTN_EXPORT)
        }

        

}

export default Reports_IG
