import elems_PromotionDetail from '../../../Elements/FS-042-Promotion/PromotionDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class PromotionDetail {

    /*****************************************************
      * Method: verify PageTitle
      * Description: Verify Promotion Detail Form
      * @param {string} ExpectedPg 
       *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }

    /*****************************************************
      * Method: Submit
      * Description: This function clicks on Submit
       *****************************************************/
    Submit() {
        cy.Click(elems_PromotionDetail.BTN_SUBMIT)
        cy.wait(5000)

    }

    /*****************************************************
      * Method: SaveAsDraft
      * Description: This function clicks on Save as Draft
       *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_PromotionDetail.BTN_SAVEASDRAFT)
        cy.wait(4000)

    }

    /*****************************************************
      * Method: Cancel
      * Description: This function clicks on Cancel
       *****************************************************/
    Cancel() {
        cy.Click(elems_PromotionDetail.BTN_CANCEL)

    }
    /*****************************************************
      * Method: ClickOnTab
      * Description:
       *****************************************************/
    ClickOnTab(text) {

        cy.Click(`//button[text()="${text}"]`)
        cy.wait(2000)

    }
    /*****************************************************
      * Method: ItemOption
      * Description: Select Item Option
       *****************************************************/
    ItemOption(Item) {

        if (Item === 'All') {

            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_ALL)
        }
        else {
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_SPECIFICITEM)
            cy.wait(1000)

        }

    }


    /*****************************************************
      * Method: FillOuPromotionDetailSection
      * Description: This function clicks on Cancel
      * @param {string} PromotionTitle
      * @param {string} BasicType
      * @param {string} UtilizeLimitPerCustomer
      * @param {string} MaxCap
      * @param {string} ValidityStartDate
      * @param {string} ValidityExpiryDate
      * @param {string} Remark
       *****************************************************/
    FillOuPromotionDetailSection(PromotionTitle, BasicType, PromoCode, UtilizeLimitPerCustomer,
        MaxCap, ValidityStartDate, ValidityExpiryDate, Remark) {

        //Promotion Title    
        cy.EnterText(elems_PromotionDetail.TXT_PROMOTIONTITLE, PromotionTitle)

        //Basic Type
        if (BasicType === "Standard") {
            cy.Click(elems_PromotionDetail.RADIO_STANDARD)
        }
        else {

            cy.Click(elems_PromotionDetail.RADIO_PROMOCODE)
            cy.EnterText(elems_PromotionDetail.TXT_PROMOCODE, PromoCode)
        }

        //Utilization Limit per customer
        cy.EnterText(elems_PromotionDetail.TXT_UTILIZELIMITOERCUSTOMER, UtilizeLimitPerCustomer)

        //MaxCap
        cy.EnterText(elems_PromotionDetail.TXT_MAXCAP, MaxCap)

        //Validity Start Date
        cy.EnterDate(elems_PromotionDetail.DATE_VALIDITYSTARTDATE, ValidityStartDate)

        //Validity Expiry Date
        cy.EnterDate(elems_PromotionDetail.DATE_VALIDITYEXOIRYDATE, ValidityExpiryDate)

        //Remark
        cy.EnterText(elems_PromotionDetail.TXTAERA_REMARK, Remark)

    }

    /*****************************************************
     * Method: PromotionTypeTab
     * Description: This function FillOut Promotion Tab setion
     * @param {string} PromotionType
     * @param {string} StartDate
     * @param {string} EndDate
     * @param {string} StartHour
     * @param {string} EndHour
      *****************************************************/
    PromotionTypeTab(PromotionType, StartDate, EndDate) {

        cy.SelectDropDownItem(elems_PromotionDetail.PromotionType.DRP_PROMOTIONTYPE, PromotionType)

        if (PromotionType === "Paid Period" || PromotionType === "Book Period") {

            cy.EnterDate(elems_PromotionDetail.PromotionType.DATE_PERIODSTARTDATE, StartDate)
            cy.EnterDate(elems_PromotionDetail.PromotionType.DATE_PROMOTIONENDDATE, EndDate)

            cy.TickCheckBox('//input[@id="chkMonday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkTuesday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkWednesday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkThursday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkFriday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkSunday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chkSaturday"]', 'CHECK')
            cy.TickCheckBox('//input[@id="chk24HrsValid"]', 'CHECK')

            // cy.SelectDropDownItem(elems_PromotionDetail.PromotionType.DRP_STARTHOUR, StartHour)
            // cy.SelectDropDownItem(elems_PromotionDetail.PromotionType.DRP_ENDHOUR, EndHour)

        }
        else
            if (PromotionType === "Early Bird") {
                cy.EnterText(elems_PromotionDetail.PromotionType.TXT_LIMITINTOTAL, '5')
            }
            else
                if (PromotionType === "Paid Period Days") {

                    cy.EnterDate('//input[@id="dtpDate"]', '22-Feb-2023')
                    cy.Click('//h3[text()="Promotion Type"]/following-sibling::div//button[text()="Add"]')
                }
                else {
                    cy.log('Birthday Month')
                }

    }
    /*****************************************************
     * Method: BenefitItemTab
     * Description: This function FillOut Benefit Item Tab setion
     * @param {string} ItemCate
     * @param {string} Quantity
     * @param {string} BenefitType
     * @param {string} FixedDollarRate
     * @param {string} BundlePromotion 
      *****************************************************/
    BenefitItemTab(ItemCate, Quantity, BenefitType, FixedDollarRate, BundlePromotion) {

        cy.Click(elems_PromotionDetail.BenefitItem.TAB_BENEFITITEM)
        cy.Click(elems_PromotionDetail.BenefitItem.BTN_ADDBENEFIT)
        cy.wait(2000)
        cy.SelectDropDownItem(elems_PromotionDetail.BenefitItem.DRP_ITEMCATEGORY, ItemCate)
        cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_QUANTITY, Quantity)
        cy.SelectDropDownItem(elems_PromotionDetail.BenefitItem.DRP_BENEFITTYPE, BenefitType)

        if (ItemCate === 'Gift') {
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_SPECIFICITEM)
            cy.SelectPickerWithoutFields(elems_PromotionDetail.BenefitItem.PCK_GIFT, "$1 MCDONALD’S GIFT CERTIFICATE")
        } else {

            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_ALL)
        }
        cy.TickCheckBox(elems_PromotionDetail.BenefitItem.CHK_ISMAINITEM, 'CHECK')

        if (BenefitType === 'Discount') {
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_PERCENTAGE)
            cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_PERCENTAGE, FixedDollarRate)
            cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_PERCENTAGE, FixedDollarRate)

        } else if (BenefitType === 'Fixed Dollar Rate') {
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_FIXEDPRICE)
            for(let i = 0; i < FixedDollarRate; i++){
                cy.Click('(//span[@title="Increase value"])[6]')

            }
            
        } else if (BenefitType === 'Waiver') {
            cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_APPICABLEFREEPERIODINMONTH, 4)
        } else {
            cy.log('////')
        }

        cy.Click(elems_PromotionDetail.BenefitItem.BTN_SAVE)

        if (BundlePromotion === 'Yes') {
            cy.SelectTableItem(elems_PromotionDetail.BenefitItem.TBL_BENIFIT, 'Item Category', ItemCate)
            cy.Click(elems_PromotionDetail.BenefitItem.BTN_ADDBUNDLEBENEFIT)
            cy.wait(2000)
            cy.SelectDropDownItem(elems_PromotionDetail.BenefitItem.DRP_ITEMCATEGORY, ItemCate)
            cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_QUANTITY, Quantity)

            cy.SelectDropDownItem(elems_PromotionDetail.BenefitItem.DRP_BENEFITTYPE, BenefitType)
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_ALL)
            cy.TickCheckBox(elems_PromotionDetail.BenefitItem.CHK_ISMAINITEM, 'CHECK')
            cy.Click(elems_PromotionDetail.BenefitItem.RADIO_FIXEDPRICE)
            cy.EnterText(elems_PromotionDetail.BenefitItem.TXT_FIXEDDOLLAR, FixedDollarRate)
            cy.Click(elems_PromotionDetail.BenefitItem.BTN_SAVE)

        } else {
            cy.log('Benifit Bundle not required')
        }

    }
    /*****************************************************
     * Method: PromotionCriteria
     * Description: This function FillOut Promotion Criteria tab
     * @param {string} AgeRangFrom
     * @param {string} AgeRangTo
     * @param {string} CustomerCateg
     * @param {string} ApplicableMemberID
     * @param {string} ApplicableSourceChannel
      *****************************************************/
    PromotionCriteria(AgeRangFrom, AgeRangTo, CustomerCateg, ApplicableMemberID, ApplicableSourceChannel) {

        cy.EnterText(elems_PromotionDetail.PromotionCriteria.TXT_APPLICABLEAGERANGEFORCUSTOMERFROM, AgeRangFrom)
        cy.EnterText(elems_PromotionDetail.PromotionCriteria.TXT_APPLICABLEAGERANGEFORCUSTOMERTO, AgeRangTo)
        cy.SelectPickerDifferentItemsWait(elems_PromotionDetail.PromotionCriteria.BTN_ADDAPPLICABLECUSCATEG, 7000,
            elems_PromotionDetail.PromotionCriteria.TXT_CUSTOMERCATEGORYNAME, CustomerCateg,
            '//button[@form="formCustomerCategoryDialog"]')
        {
            ApplicableMemberID.length == 2 && cy.SelectPickerDifferentItemsWait(elems_PromotionDetail.PromotionCriteria.BTN_ADDAPPLICBLEMEMBERID, 9000,
                elems_PromotionDetail.PromotionCriteria.TXT_MEMBERID, ApplicableMemberID,
                '//button[@form="formMemberDialog"]')
        }
        cy.SelectPickerDifferentItemsWait(elems_PromotionDetail.PromotionCriteria.BTN_ADDAPPLICABLESOURCECHANNEL, 7000,
            elems_PromotionDetail.PromotionCriteria.TXT_SOURCECHANNELNAME, ApplicableSourceChannel,
            '//button[@form="formSourceChannelDialog"]')
    }

}
export default new PromotionDetail