
import elems_BatchMembershipRegistrationDetail from '../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BatchMembershipRegistrationDetail'
import elems_BatchMembershipRegistrationListing from '../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BatchMembershipRegistrationListing'
import elems_SMCMSShoppingCartAndPayment from '../../../../page-objects/SMCMS/Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment'
import elems_Picker from '../../Elements/Common/Picker'
class BatchIGRegistration {

    /*****************************************************
        * Method: CreateNew
        * Description: This function Click on Create New Button
       *****************************************************/
    CreateNew() {
        cy.Click(elems_BatchMembershipRegistrationListing.BTN_CREATENEW)
        cy.wait(5000)
    }
    /*****************************************************
        * Method: Save
        * Description: This function Click on Save Button
       *****************************************************/
    Save() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_SAVE)
        cy.wait(6000)
    }

    /*****************************************************
        * Method: FilloutBatchFields
        * Description: This function Fillouts Batch Fields
        * @param {string} BatchName
        * @param {string} BatchType
       *****************************************************/
    FilloutBatchFields(BatchName, BatchType) {
        cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_BATCHNAME, BatchName)
        cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_BATCHTYPE, BatchType)
    }
    /*****************************************************
        * Method: FilloutAdditionalFields
        * Description: This function Fillout Additional fields
        * @param {string} IG
        * @param {string} EffectiveDate
        * @param {string} Term
        * @param {string} IGLocation
       *****************************************************/
    FilloutAdditionalFields(IG, EffectiveDate, Term, IGLocation) {
        cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.PCK_IG)
        cy.Click(`//td[text()="${IG}"]//preceding-sibling::td`)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.EnterDate(elems_BatchMembershipRegistrationDetail.BatchInformation.DATE_IGEFFECTIVEDATE, EffectiveDate)
        // cy.xpath(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_IGTERM).clear()
        cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_IGTERM, Term)
        cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.PCK_IGLOCATION)
        cy.wait(3000)
        cy.SelectTableItem('//div[@class="k-window-content k-dialog-content"]//table', 'Location Name', IGLocation)
        cy.Click('//div[@class="k-widget k-window k-dialog"]//button[text()="Select"]')
        // cy.SelectPickerWithoutFields(elems_BatchMembershipRegistrationDetail.BatchInformation.PCK_IGLOCATION, IGLocation)
        cy.wait(2000)

    }
    /*****************************************************
        * Method: FilterWithBatchName
        * Description: This function Filter item in Batch Membership Registration Table
        * @param {string} BatchName
      
       *****************************************************/
    FilterWithBatchName(BatchName) {
        cy.EnterText(elems_BatchMembershipRegistrationListing.TXT_BATCHNAME, BatchName)
        cy.Click(elems_BatchMembershipRegistrationListing.BTN_SEARCHFILTERS)
    }
    /*****************************************************
        * Method: VerifyBatchIGStatus
        * Description: This function Verify Batch IG Status
        * @param {string} BatchName
      
       *****************************************************/
    VerifyBatchIGStatus(Status) {
        cy.wait(7000)
        cy.VerifyTableEntry(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING, "Status", Status)

    }
    /*****************************************************
        * Method: SelectItemInTable
        * Description: This function Select Table Item
        * @param {string} BatchName
       *****************************************************/
    SelectItemInTable(BatchName) {
        cy.SelectTableItem(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
        * Method: ClickOnTableLink
        * Description: This function Click on Table Link
       *****************************************************/
    ClickOnTableLink() {
        cy.xpath('(//h2[text()="Batch Membership Registration Listing"]/ancestor::div//table//a)[1]').click({ force: true })
        cy.wait(8000)
    }
    /*****************************************************
        * Method: AddMemRegToMemListingDefIG
        * Description: This function Click on Add Member Registration Listing (Default IG) button
       *****************************************************/
    AddMemRegToMemListingDefIG() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.BTN_IGREGDEFAULTIG)
        cy.wait(6000)

    }
    /*****************************************************
        * Method: AddIGRegistration
        * Description: This function Click on Add IG Registration button
       *****************************************************/
    AddIGRegistration() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.BTN_ADDIGREGISTRATION)
        cy.wait(5000)

    }
    /*****************************************************
        * Method: PostRegistration
        * Description: This function Click on Post Registration
       *****************************************************/
    PostRegistration() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_POSTREGISTRATION)
        cy.wait(2000)

    }
    /*****************************************************
        * Method: ValidateRegistration
        * Description: This function Click on Validate Registration Button
       *****************************************************/
    ValidateRegistration() {

        cy.xpath(elems_BatchMembershipRegistrationDetail.BTN_VALIDATEREGISTRATION).click({ force: true })
        cy.wait(6000)

    }
    /*****************************************************
        * Method: Delete
        * Description: This function Click on Validate Registration Button
       *****************************************************/
    Delete() {

        cy.Click(elems_BatchMembershipRegistrationListing.BTN_DELETE)
        cy.wait(3000)
        cy.Click('//button[text()="Yes"]')

    }

    /*****************************************************
     * Method: Fill out Payment Mode Amount and Apply PAyment
     * Description: Fill out Payment Mode
     * @param {string} PaymentMode Payment Mode
     *****************************************************/
    fillOutandApplyPayment(PaymentMode) {


        cy.SelectDropDownItem(elems_SMCMSShoppingCartAndPayment.Payments.DRP_PAYMENTMODE, PaymentMode)

        // cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.LBL_REMAININGBALANCE).then($balance => {

        //     const blnc = $balance.text().trim()

        //     console.log(blnc)
        //     cy.xpath(elems_SMCMSShoppingCartAndPayment.Payments.TXT_AMOUNT).type(blnc)

        // })
        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_APPLYPAYMENT)
        cy.wait(3000)

        cy.Click(elems_SMCMSShoppingCartAndPayment.Payments.BTN_COMPLETE)
        cy.wait(3000)


    }

}
export default new BatchIGRegistration