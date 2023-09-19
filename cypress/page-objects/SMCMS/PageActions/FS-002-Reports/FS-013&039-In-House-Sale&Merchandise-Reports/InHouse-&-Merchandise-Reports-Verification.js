import elems_MerchandiseRevenueSale from "../../../Elements/FS-002 Reports/FS-013&039-In-House-Sale&Merchandise/MerchandiseRevenueSale"
import elems_InHouseRevenueSale from "../../../Elements/FS-002 Reports/FS-013&039-In-House-Sale&Merchandise/InHouseRevenueSale"

class Reports_InHouseMerchandise {
     
    /*****************************************************
        * Method: Checking functionallity and Verification on 
                Counter Receipt Collection Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyCounterReceiptCollection(expectedPg, inHouseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.CounterReceiptCollection')
        // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
        cy.wait(2000)
        cy.ValidateElementText(elems_InHouseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_InHouseRevenueSale.PCK_INHOUSEITEM, inHouseItem)
        // cy.SelectDropDownItem(elems_InHouseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_InHouseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_InHouseRevenueSale.BTN_EXPORT)
    }
    
    
    /*****************************************************
        * Method: Checking functionallity and Verification on 
                In-House Revenue Sale Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyInHouseRevenueSale(expectedPg, inHouseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.InhouseRevenueSale')
        // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
        cy.wait(2000)
        cy.ValidateElementText(elems_InHouseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_InHouseRevenueSale.PCK_INHOUSEITEM, inHouseItem)
        // cy.SelectDropDownItem(elems_InHouseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_InHouseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_InHouseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
                In-House Revenue Sale Email Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyInHouseRevenueSaleEmail(expectedPg, inHouseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.InhouseRevenueSaleEmail')
        cy.wait(2000)
        cy.ValidateElementText(elems_InHouseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_InHouseRevenueSale.PCK_INHOUSEITEM, inHouseItem)
        // cy.SelectDropDownItem(elems_InHouseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_InHouseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_InHouseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
                In-House Revenue Sale Mobile Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyInHouseRevenueSaleMobile(expectedPg, inHouseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.InhouseRevenueSaleMobile')
        cy.wait(2000)
        cy.ValidateElementText(elems_InHouseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_InHouseRevenueSale.PCK_INHOUSEITEM, inHouseItem)
        // cy.SelectDropDownItem(elems_InHouseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_InHouseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_InHouseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_InHouseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
                Merchandise Revenue Sale Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyMerchandiseRevenueSale(expectedPg, merchandiseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.MerchandiseRevenueSale')
        cy.wait(2000)
        cy.ValidateElementText(elems_MerchandiseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_MerchandiseRevenueSale.PCK_MERCHANDISE, merchandiseItem)
        // cy.SelectDropDownItem(elems_MerchandiseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_MerchandiseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MerchandiseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
                Merchandise Revenue Sale By Period Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyMerchandiseRevenueSaleByPeriod(expectedPg){
        cy.visit('/report?reportId=ReportSale.MerchandiseRevenueSaleByPeriod')
        cy.wait(2000)
        cy.ValidateElementText(elems_MerchandiseRevenueSale.LBL_PAGE, expectedPg)

        // cy.Click(elems_MerchandiseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MerchandiseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
            Merchandise Revenue Sale By Total Payment Collected Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyMerchandiseRevenueSaleByTotalPaymentCollected(expectedPg, merchandiseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.MerchandiseRevenueSaleByTotalPaymentCollected')
        cy.wait(2000)
        cy.ValidateElementText(elems_MerchandiseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_MerchandiseRevenueSale.PCK_MERCHANDISE, merchandiseItem)
        // cy.SelectDropDownItem(elems_MerchandiseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_MerchandiseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MerchandiseRevenueSale.BTN_EXPORT)
    }

    /*****************************************************
        * Method: Checking functionallity and Verification on 
                Merchandise Revenue Sale Item Listing
        * Description: This function verifies the page
    *****************************************************/
    verifyMerchandiseRevenueSaleItem(expectedPg, merchandiseItem, receipt, dateFrom, dateTo){
        cy.visit('/report?reportId=ReportSale.MerchandiseRevenueSaleItem')
        cy.wait(2000)
        cy.ValidateElementText(elems_MerchandiseRevenueSale.LBL_PAGE, expectedPg)

        // cy.SelectPickerItem(elems_MerchandiseRevenueSale.PCK_MERCHANDISE, merchandiseItem)
        // cy.SelectDropDownItem(elems_MerchandiseRevenueSale.DRP_RECEIPT, receipt)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATEFROM, dateFrom)
        // cy.EnterDate(elems_MerchandiseRevenueSale.TXT_DATETO, dateTo)
    
        // cy.Click(elems_MerchandiseRevenueSale.BTN_GENERATE)
        // cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_MerchandiseRevenueSale.BTN_EXPORT)
    }

}

export default Reports_InHouseMerchandise