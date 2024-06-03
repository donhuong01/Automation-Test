// import elems_InHouseSaleAndMerchandiseItemChargeSetup from '../../Elements/In-House_Sale-&-Merchandise/InHouseSale&MerchandiseItemChargeSetup'
import elems_InHouseSaleAndMerchandiseItemChargeSetup from '../../Elements/In-House_Sale-&-Merchandise/InHouseSaleItemChargeSetup'


class InHouseSaleAndMerchandiseItemChargeSetup {

    /*****************************************************
       * Method: SubmitForApproval
       * Description: This function click on Submit For Approval button
       ***************************************************/
    SubmitForApproval() {

        cy.Click(elems_InHouseSaleAndMerchandiseItemChargeSetup.BTN_SUBMITFORAPPROVAL)
        cy.wait(8000)

    }
    /*****************************************************
       * Method: SaveAsDraft
       * Description: This function click on Save as draft button
       ***************************************************/
    SaveAsDraft() {

        cy.Click(elems_InHouseSaleAndMerchandiseItemChargeSetup.BTN_SAVEASDRAFT)

    }
    /*****************************************************
       * Method: Cancel
       * Description: This function click on Cancel button
       ***************************************************/
    Cancel() {

        cy.Click(elems_InHouseSaleAndMerchandiseItemChargeSetup.BTN_CANCEL)

    }
    /*****************************************************
       * Method: GeneralInformation
       * Description: This function Fillout General Information fields
       ***************************************************/
    GeneralInformation(Type, ItemName, LocationName, LifeStyle, FabsGroup, ClubClassification, SMCClassification) {
        if (Type === 'InHouse') {
            cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_INHOUSESALEITEMNAME, ItemName)
            cy.SelectPickerItem(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_LOCATION, LocationName)
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_LIFEGROUP, '//input[@id="txtCodeName"]', LifeStyle,
                '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_FABSGROUP, '//input[@id="txtCodeName"]', FabsGroup,
                '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_CLUBCLASSIFICATION, '//input[@id="txtCodeName"]', ClubClassification,
                '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_SMCCLASSIFICATION, '//input[@id="txtCodeName"]', SMCClassification,
                '//button[text()="Search Filters"]')
        } else {
            cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_INHOUSESALEITEMNAME, ItemName)
            cy.SelectPickerItem(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_LOCATION, LocationName)
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_LIFEGROUP, '//input[@id="txtCodeName"]', LifeStyle, '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_FABSGROUP, '//input[@id="txtCodeName"]', FabsGroup, '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_CLUBCLASSIFICATION, '//input[@id="txtCodeName"]', ClubClassification, '//button[text()="Search Filters"]')
            cy.SelectPickerDifferentItemsSeachBTN(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_SMCCLASSIFICATION, '//input[@id="txtCodeName"]', SMCClassification, '//button[text()="Search Filters"]')
            cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_UNITSPERSET, 3)
            cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_PERCHASELIMITPERMEMBER, 4), '//input[@id="txtCodeName"]'
        }

    }

    /*****************************************************
       * Method: ChargeRate
       * Description: This function Fillout Charge Rate 
       ***************************************************/
    ChargeRate(ChargeName, TransactionType, CalculationType, AmountType) {

        cy.Click(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHARGERATE.BTN_ADDCHARGETYPE)
        cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHARGERATE.TXT_CHARGENAME, ChargeName)
        cy.SelectDropDownItem(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHARGERATE.TXT_TRANSACTIONTYPE, TransactionType)
        cy.SelectDropDownItem(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHARGERATE.TXT_CALCULATIONTYPE, CalculationType)
        cy.SelectDropDownItem(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHARGERATE.TXT_AMOUNTTYPE, AmountType)

    }
    /*****************************************************
       * Method: CustomerCategory
       * Description: This function Fillout Charge Rate 
       ***************************************************/
    CustomerCategory(CategoryName) {

        cy.SelectPickerDifferentItemsWait(elems_InHouseSaleAndMerchandiseItemChargeSetup.CUSTOMERCATEGORY.BTN_CUSTOMERCATEGORY, 3000,
            elems_InHouseSaleAndMerchandiseItemChargeSetup.CUSTOMERCATEGORY.TXT_CUSTOMERCATEGORYNAME, CategoryName,
            elems_InHouseSaleAndMerchandiseItemChargeSetup.CUSTOMERCATEGORY.BTN_SEARCHFILTERS)

        cy.EnterText('(//h3[text()="Customer Category"]/following-sibling::div//table//input)[1]', '7')
        cy.EnterText('(//h3[text()="Customer Category"]/following-sibling::div//table//input)[2]', '5')
        cy.EnterText('(//h3[text()="Customer Category"]/following-sibling::div//table//input)[3]', '10')

    }

    /*****************************************************
       * Method: ProductMasterInformation
       * Description: This function Fillout Product Master Form
       ***************************************************/
    ProductMasterInformation(ProductNumber, Remarks, EarnSAFRAPoints) {
        cy.TickCheckBox(elems_InHouseSaleAndMerchandiseItemChargeSetup.CHK_EARNSAFRAPOPINTS, EarnSAFRAPoints)
        cy.SelectPickerDifferentItemsWait(elems_InHouseSaleAndMerchandiseItemChargeSetup.PCK_PRODUCT, 3000,
            elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_PRODUCTNUMBER, ProductNumber,
            elems_InHouseSaleAndMerchandiseItemChargeSetup.BTN_SEARCHFILTERS)
        cy.EnterText(elems_InHouseSaleAndMerchandiseItemChargeSetup.TXT_REMARKS, Remarks)
    }
}
export default new InHouseSaleAndMerchandiseItemChargeSetup