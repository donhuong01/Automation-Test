import elems_E1MembershipListingRegistrationMobileReport from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipListingRegistrationMobileReport";
import elems_E1MembershipListingReport from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipListing";
import elems_E1MembershipPayingListingReport from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipPayingListing";
import elems_E1MembershipRegistrationListingReport from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipRegistrationListing";
import elems_E1MembershipReinstatementListingReport from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipReinstatementListing";
import elems_E1MembershipRenewalListing from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipRenewalListing";
import elems_E1MembershipTerminationListing from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipTerminationListing";
import elems_E1MembershipRenewalListingMobile from "../../../Elements/FS-002 Reports/FS-015-Energy-One/E1MembershipRenewalListingMobile";

class Reports_E1 {
    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Listing Address
     * Description: This function verifies the page
    *****************************************************/
   verifyE1MembershipListingAddress(expectedPg, e1Main, e1, initialJoin, expiryDateFrom, expiryDateTo ){
    cy.visit('/membership/customerCheckin')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')

    cy.wait(2000)

        cy.visit('/report?reportId=ReportE1.MembershipListingAddress')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipListingReport.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONE, e1)

        // cy.EnterDate(elems_E1MembershipListingReport.TXT_INITIAL_JOIN, initialJoin)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_FROM, expiryDateFrom)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_TO, expiryDateTo)

        // cy.Click(elems_E1MembershipListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipListingReport.BTN_EXPORT)
   }

   /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipListing(expectedPg, e1Main, e1, initialJoin, expiryDateFrom, expiryDateTo ){
        cy.visit('/report?reportId=ReportE1.MembershipListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_INITIAL_JOIN, initialJoin)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_FROM, expiryDateFrom)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_TO, expiryDateTo)
        
        // cy.Click(elems_E1MembershipListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Listing Email
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipListingEmail(expectedPg, e1Main, e1, initialJoin, expiryDateFrom, expiryDateTo ){
        cy.visit('/report?reportId=ReportE1.MembershipListingEmail')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_INITIAL_JOIN, initialJoin)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_FROM, expiryDateFrom)
        // cy.EnterDate(elems_E1MembershipListingReport.TXT_EXPIRY_DATE_TO, expiryDateTo)
        
        // cy.Click(elems_E1MembershipListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Listing Mobile
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipListingMobile(expectedPg, e1Main, e1, registrationDateFrom, registrationDateTo ){
        cy.visit('/report?reportId=ReportE1.MembershipRegistrationListingMobile')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipListingRegistrationMobileReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipListingRegistrationMobileReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipListingRegistrationMobileReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipListingRegistrationMobileReport.TXT_REGISTRATIONDATEFROM, registrationDateFrom)
        // cy.EnterDate(elems_E1MembershipListingRegistrationMobileReport.TXT_REGISTRATIONDATETO, registrationDateTo)
        
        // cy.Click(elems_E1MembershipListingRegistrationMobileReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipListingRegistrationMobileReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Registration Listing Mobile
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipRegistrationListingMobile(expectedPg, e1Main, e1, registrationDateFrom, registrationDateTo ){
        cy.visit('/report?reportId=ReportE1.MembershipRegistrationListingMobile')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipListingRegistrationMobileReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipListingRegistrationMobileReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipListingRegistrationMobileReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipListingRegistrationMobileReport.TXT_REGISTRATIONDATEFROM, registrationDateFrom)
        // cy.EnterDate(elems_E1MembershipListingRegistrationMobileReport.TXT_REGISTRATIONDATETO, registrationDateTo)
        
        // cy.Click(elems_E1MembershipListingRegistrationMobileReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipListingRegistrationMobileReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Paying Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipPayingListing(expectedPg, e1Main, e1, startDate, endDate ){
        cy.visit('/report?reportId=ReportE1.MembershipPayingListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipPayingListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_ENDDATE, endDate)
        
        // cy.Click(elems_E1MembershipPayingListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipPayingListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Paying Listing Email
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipPayingListingEmail(expectedPg, e1Main, e1, startDate, endDate ){
        cy.visit('/report?reportId=ReportE1.MembershipPayingListingEmail')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipPayingListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_ENDDATE, endDate)
        
        // cy.Click(elems_E1MembershipPayingListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipPayingListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Paying Listing Email
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipPayingListingEmail(expectedPg, e1Main, e1, startDate, endDate ){
        cy.visit('/report?reportId=ReportE1.MembershipPayingListingEmail')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipPayingListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_ENDDATE, endDate)
        
        // cy.Click(elems_E1MembershipPayingListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipPayingListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Paying Listing Mobile
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipPayingListingMobile(expectedPg, e1Main, e1, startDate, endDate ){
        cy.visit('/report?reportId=ReportE1.MembershipPayingListingMobile')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipPayingListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipPayingListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_STARTDATE, startDate)
        // cy.EnterDate(elems_E1MembershipPayingListingReport.TXT_ENDDATE, endDate)
        
        // cy.Click(elems_E1MembershipPayingListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipPayingListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Registration Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipRegistrationListing(expectedPg, e1Main, e1, registrationDateFrom, registrationDateTo ){
        cy.visit('/report?reportId=ReportE1.MembershipRegistrationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipRegistrationListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipRegistrationListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipRegistrationListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipRegistrationListingReport.TXT_REGISTRATIONDATEFROM, registrationDateFrom)
        // cy.EnterDate(elems_E1MembershipRegistrationListingReport.TXT_REGISTRATIONDATETO, registrationDateTo)
        
        // cy.Click(elems_E1MembershipRegistrationListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipRegistrationListingReport.BTN_EXPORT)
    }

   /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Reinstatement Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipReinstatementListing(expectedPg, e1Main, e1, reinstatementfrom, reinstatementto ){
        cy.visit('/report?reportId=ReportE1.MembershipReinstatementListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipReinstatementListingReport.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipReinstatementListingReport.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipReinstatementListingReport.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipReinstatementListingReport.TXT_REINSTATEMENTFROMMONTH, reinstatementfrom)
        // cy.EnterDate(elems_E1MembershipReinstatementListingReport.TXT_REINSTATEMENTTOMONTH, reinstatementto)
        
        // cy.Click(elems_E1MembershipReinstatementListingReport.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipReinstatementListingReport.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Renewal Listing
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipRenewalListing(expectedPg, e1Main, e1, renewalDatefrom, renewalDateto ){
        cy.visit('/report?reportId=ReportE1.MembershipRenewalListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipRenewalListing.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipRenewalListing.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipRenewalListing.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipRenewalListing.TXT_RENEWALDATEFROM, renewalDatefrom)
        // cy.EnterDate(elems_E1MembershipRenewalListing.TXT_RENEWALDATETO, renewalDateto)
        
        // cy.Click(elems_E1MembershipRenewalListing.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipRenewalListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Renewal Listing Mobile
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipRenewalListingMobile(expectedPg, e1Main, e1, renewalListingDatefrom, renewalListingDateto ){
        cy.visit('/report?reportId=ReportE1.MembershipRenewalListingMobile')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipRenewalListingMobile.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipRenewalListingMobile.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipRenewalListingMobile.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipRenewalListingMobile.TXT_RENEWALLISTINGDATEFROM, renewalListingDatefrom)
        // cy.EnterDate(elems_E1MembershipRenewalListingMobile.TXT_RENEWALLISTINGDATETO, renewalListingDateto)
        
        // cy.Click(elems_E1MembershipRenewalListingMobile.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipRenewalListingMobile.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Termination Listing 
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipTerminationListing(expectedPg, e1Main, e1, terminationDatefrom, terminationDateto ){
        cy.visit('/report?reportId=ReportE1.MembershipTerminationListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipTerminationListing.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipTerminationListing.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipTerminationListing.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipTerminationListing.TXT_TERMINATIONDATEFROM, terminationDatefrom)
        // cy.EnterDate(elems_E1MembershipTerminationListing.TXT_TERMINATIONDATETO, terminationDateto)
        
        // cy.Click(elems_E1MembershipTerminationListing.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipTerminationListing.BTN_EXPORT)
    }

    /*****************************************************
     * Method: Checking functionallity and Verification on 
               E1 Membership Deferment Listing 
     * Description: This function verifies the page
    *****************************************************/
        verifyE1MembershipDefermentListing(expectedPg, e1Main, e1, terminationDatefrom, terminationDateto ){
        cy.visit('/report?reportId=ReportE1.MembershipDefermentListing')
        cy.wait(2000)
        cy.ValidateElementText(elems_E1MembershipTerminationListing.LBL_PAGE, expectedPg)
        
        // cy.SelectPickerItem(elems_E1MembershipTerminationListing.PCK_ENERGYONEMAIN, e1Main)
        // cy.wait(2000)
        // cy.SelectPickerItem(elems_E1MembershipTerminationListing.PCK_ENERGYONE, e1)
        
        // cy.EnterDate(elems_E1MembershipTerminationListing.TXT_TERMINATIONDATEFROM, terminationDatefrom)
        // cy.EnterDate(elems_E1MembershipTerminationListing.TXT_TERMINATIONDATETO, terminationDateto)
        
        // cy.Click(elems_E1MembershipTerminationListing.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_E1MembershipTerminationListing.BTN_EXPORT)
    }






        




}

export default Reports_E1