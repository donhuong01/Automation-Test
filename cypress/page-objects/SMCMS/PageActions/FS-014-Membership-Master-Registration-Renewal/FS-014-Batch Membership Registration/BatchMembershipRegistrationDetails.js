import elems_BatchMembershipRegistrationDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BatchMembershipRegistrationDetail'
import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_MemberRegistrationPrincipal from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipRegPrincipal(Batch)'
class BatchMembershipRegistrationDetail {


    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} expectedPg

    *****************************************************/

    verifyPageTitle(expectedPg) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

    }


    /*****************************************************
         * Method: FillOutBatchMembershipRegistrationDetailForm
         * Description: This function FillOut Membership Registration detail Form
         * @param {string} BatchName
         * @param {string} BatchType
         * @param {string} RecTalkSessionID
         * @param {string} MemRegTenure
         * @param {string} PromationReg
         * @param {string} MemRenewalTenure
         * @param {string} PromationTenure
         * @param {string} PaymentMode
    *****************************************************/
    FillOutBatchMembershipRegistrationDetailForm(
        BatchName, BatchType, MemRegTenure,
        PromationReg, MemRenewalTenure, PromationTenure, PaymentMode
    ) {
        cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_BATCHNAME, BatchName)
        if (BatchType === "Membership") {
            cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_BATCHTYPE, BatchType)
            // cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_RECTALKSESSIONID, RecTalkSessionID)
            cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_MEMSHIPREGTENURE, MemRegTenure)
            // cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_PROMOTIONREGISTRATION, PromationReg)
            cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_MEMSHIPRENEWALTENURE, MemRenewalTenure)
            // cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_PROMOTION_RENEWAL, PromationTenure)
            cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_PAYMENTMODE, PaymentMode)
        }
        if (BatchType === "Interest Group") {

        }
    }

    /*****************************************************
         * Method: FillOutBatchMembershipRegistrationDetailFormBatchTypeIG
         * Description: This function will if we pass batch type "Interst Group"
         * @param {string} BatchName
         * @param {string} BatchType
         * @param {string} InterstGroup
         * @param {string} EffectiveDate
         * @param {string} MembershipTerm
         * @param {string} IGLocation
    *****************************************************/
    // FillOutBatchMembershipRegistrationDetailFormBatchTypeIG(
    //     BatchName, BatchType, 
    // )

    // if (BatchType === "Interest Group") {

    //     cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_BATCHTYPE, BatchType)
    //     cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.PCK_IG)
    //     //IG Functionality not completed yet
    //     cy.Click("//button[text()='Select']")
    //     cy.EnterDate(elems_BatchMembershipRegistrationDetail.BatchInformation.DATE_IGEFFECTIVE, EffectiveDate)
    //     cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_IGMEMBERSHIPTERM, MembershipTerm)

    //     cy.SelectPickerFilter(elems_BatchMembershipRegistrationDetail.BatchInformation.IGLocation,
    //         elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_NAME,
    //         IGLocation, elems_BatchMembershipRegistrationDetail.BatchInformation.BTN_SEARCHFILTERS)
    // }
    // if (BatchType === "NSF Membership") {

    //     cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.BatchInformation.DRP_BATCHTYPE, BatchType)
    //     cy.Click(elems_BatchMembershipRegistrationDetail.BatchInformation.PCK_IG)
    //     //IG Functionality not completed yet
    //     cy.Click("//button[text()='Select']")
    //     cy.EnterDate(elems_BatchMembershipRegistrationDetail.BatchInformation.DATE_IGEFFECTIVE, EffectiveDate)
    //     cy.EnterText(elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_IGMEMBERSHIPTERM, MembershipTerm)

    //     cy.SelectPickerFilter(elems_BatchMembershipRegistrationDetail.BatchInformation.IGLocation,
    //         elems_BatchMembershipRegistrationDetail.BatchInformation.TXT_NAME,
    //         IGLocation, elems_BatchMembershipRegistrationDetail.BatchInformation.BTN_SEARCHFILTERS)
    // }


    // }

    /*****************************************************
         * Method: Save
         * Description: This function Click Save button
    *****************************************************/
    Save() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_SAVE)
        cy.wait(5000)
    }

    /*****************************************************
         * Method: Cancel
         * Description: This function click on Cancel buttony
    *****************************************************/
    Cancel() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_CANCEL)
    }
    /*****************************************************
         * Method: ValidateRegistration
         * Description: This function click validate registration button
    *****************************************************/
    ValidateRegistration() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_VALIDATEREGISTRATION)
    }
    /*****************************************************
         * Method: Cancel
         * Description: This function click on Cancel button
    *****************************************************/
    PostRegistration() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_POSTREGISTRATION)
    }
    /*****************************************************
         * Method: Cancel
         * Description: This function click on Cancel button
    *****************************************************/
    VerifyValidateRegistrationMsg() {
        cy.xpath('//div[@class="notification__message"]').then(msg => {

            const NotifcationMsg = msg.text()

            if (NotifcationMsg === 'Failed to validate') {
                expect(NotifcationMsg).to.equal('Failed to validate')
            }
            else {
                cy.log('Successfully Validate Registration')
            }
        })
    }

    /*****************************************************
     * Method: AddMember
     * Description: This function Add new Member 
    *****************************************************/
    AddMember() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MembershipRegistrationAndRenewalListing.BTN_ADDMEMBER)
        cy.wait(5000)
    }

    /*****************************************************
     * Method: NewMemberPrincipal
     * Description: This function click on New Member Principal button
    *****************************************************/
    NewMemberPrincipal() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERPRINCIPAL)
    }

    /*****************************************************
     * Method: NewMemberDpendent
     * Description: This function click on New Member Dependent
    *****************************************************/
    NewMemberDependent() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERDEPENDENT)
    }

    /*****************************************************
     * Method: FillOutFormForExistingMember
     * Description: This function fill out form for existing Member
     * @param {string} MemberId
     * @param {string} NIRC
    *****************************************************/
    FillOutFormForExistingMember(MemberId, NIRC) {
        cy.TickRadioButton(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.CHK_EXISTINGMEMBER)
        cy.EnterText(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.TXT_MEMBERID, MemberId)
        cy.EnterText(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.TXT_NRIC, NIRC)
    }
    /*****************************************************
     * Method: FillOutFormForNonMember
     * Description: This function fill out form for Non Member
     * @param {string} NRIC
     * @param {string} DOB
    *****************************************************/
    FillOutFormForNonMember(NRIC, DOB) {
        cy.TickRadioButton(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.CHK_NONMEMBER)
        cy.TickRadioButton('//label[@for="radioNRIC"]')
        cy.EnterText(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.TXT_LAST4NRIC, NRIC)
        cy.EnterDate(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.DATE_DOB, DOB)
    }

    /*****************************************************
     * Method: InBatchRegistration
     * Description: This function click on cancel button in Membership Registration Form - In Batch Registration
    *****************************************************/
    InBatchRegCancelBtn() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_CANCEL)
    }
    /*****************************************************
     * Method: Next
     * Description: This function click on Next Button
    *****************************************************/
    Next() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_NEXT)
        cy.wait(20000)
    }
    /*****************************************************
     * Method: ClickNewMemberPrincipal
     * Description: This function Click New Member Principal
    *****************************************************/
    ClickNewMemberPrincipal() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERPRINCIPAL)
        cy.wait(5000)
    }
    /*****************************************************
     * Method: ClickNewMemberDependent
     * Description: This function Click New Member Principal
    *****************************************************/
    ClickNewMemberDependent() {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERDEPENDENT)
        cy.wait(5000)
    }
    /*****************************************************
     * Method: SaveAndNext
     * Description: This function click on Save and Next Button
    *****************************************************/
    SaveAndNext() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_SAVEANDNEXT)
        cy.wait(20000)
    }
    /*****************************************************
     * Method: SaveAndNext
     * Description: This function click on Save and Next Button
    *****************************************************/
    SaveAndNextTenure() {
        cy.Click(elems_BatchMembershipRegistrationDetail.BTN_SAVEANDNEXTTENURE)
        cy.wait(20000)
    }
    /*****************************************************
     * Method: AddApplicationDate
     * Description: This function Application date
     * @param {string} ApplicationDate
    *****************************************************/
    AddApplicationDate(ApplicationDate) {

        cy.SelectDate(elems_BatchMembershipRegistrationDetail.DATE_APPLICATIONDATE, ApplicationDate)


    }


    /*****************************************************
     * Method: DateOfBirth
     * Description: This function enter date of birth
     * @param {string} DOB
    *****************************************************/
    DateOfBirth(DOB) {

        cy.EnterDate(elems_BatchMembershipRegistrationDetail.DATE_APPLICATIONDATE, DOB)

    }
    /*****************************************************
     * Method: VerifyNewMemberPrincipal
     * Description: This function enter date of birth
     * @param {string} CustomerNRICFull
    *****************************************************/
    VerifyNewMemberPrincipal(CustomerNRICFull) {

        cy.VerifyTableEntry(elems_BatchMembershipRegistrationDetail.MembershipRegistrationAndRenewalListing.TBL_MEMSHIPREGANDRENEWALLIST, 'NRIC', CustomerNRICFull)

    }

    /*****************************************************
     * Method: SelectMemberCategory
     * Description: This function Select Member Category in Membership Registration Form - In Batch Registration popup
     * @param {string} MemberCategory
    *****************************************************/
    SelectMemberCategory(MemberCategory) {

        if (MemberCategory === "Principal") {
            //cy.Click(elems_BatchMembershipRegistrationDetail.SELECTMEMBERCATEPOPUP.RADIO_PRINCIPAL)
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERPRINCIPAL)
            //cy.Click(elems_BatchMembershipRegistrationDetail.SELECTMEMBERCATEPOPUP.BTN_SELECT)

        } else {
            //cy.Click(elems_BatchMembershipRegistrationDetail.SELECTMEMBERCATEPOPUP.RADIO_DEPENDENT)
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_NEWMEMBERDEPENDENT)
            //cy.Click(elems_BatchMembershipRegistrationDetail.SELECTMEMBERCATEPOPUP.BTN_SELECT)

        }


    }
    /*****************************************************
     * Method: FilloutPersonalInformation
     * Description: verify Personal Infromation
     *@param {string} MemberCategory Member Category
     * @param {string} NameOnNRIC Name on NRIC
     * @param {string} NameOnCard Name on Card
     * @param {string} Nric NRIC
     * @param {string} Gender Gender
     * @param {string} DATE_DATEOFBIRTH Date of Birth
     * @param {string} NSStatus  NS Status
     * @param {string} NSRank  NSRank
     * @param {string} MemberType  MemberType
     * @param {string} Nationality  Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType CardType
     * @param {string} InterestinDBSCard InterestinDBSCard
     * @param {string} ProfilePicture ProfilePicture
     *****************************************************/
    FilloutPersonalInformation({ MemberCategory, NameOnNRIC, NameOnCard, Nric, Gender, DateofBirth, Age, NSStatus, NSRank, MemberType, Nationality, MaritalStatus, CardType, InterestinDBSCard, ProfilePicture
    }) {
        // Verify Member Catergory
        if (MemberCategory !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERCATEGORY, MemberCategory)
        }
        // Verify Name on NRIC
        if (NameOnNRIC !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC, NameOnNRIC)
        }
        // Verify Name onCArd
        if (NameOnCard !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD, NameOnCard)
        }
        // Verify NRIC
        if (Nric !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC, Nric)
        }
        // Verify Gender
        if (Gender !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_GENDER, Gender)
        }
        // VerifyDate of Birth
        if (DateofBirth !== undefined) {
            cy.EnterDate('//input[@id="dtpDateOfBirth"]', DateofBirth)

        }
        // Verify Age
        if (Age !== undefined) {
            //  cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_AGE, Age)
        }
        // Verify NS Status
        if (NSStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, NSStatus)
        }
        // Verify NSRank
        if (NSRank !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, NSRank)
        }
        // Verify Member Type
        if (MemberType !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)
        }
        // Verify Nationality
        if (Nationality !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NATIONALITY, Nationality)
        }
        // Verify Marital Status
        if (MaritalStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_MARITALSTATUS, MaritalStatus)
        }
        // Verify Card Tyoe
        if (CardType !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_CARDTYPE, CardType)
        }
        // Verify Interest in DBS Card
        if (InterestinDBSCard !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_INTERESTINDBSCARD, InterestinDBSCard)
        }
        // Verify in Profile Picture
        if (ProfilePicture !== undefined) {
            cy.UploadFile(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.UPL_SELECTFILES, ProfilePicture)
        }

        // Error Handling
        if (NameOnNRIC === undefined
            && NameOnCard === undefined
            && Nric === undefined
            && Gender === undefined
            && DateofBirth === undefined
            && NSStatus === undefined
            && NSRank === undefined
            && Nationality === undefined
            && MaritalStatus === undefined
            && InterestinDBSCard === undefined
            && ProfilePicture === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.PersonalInformation Error!!./n\
                             Please provide at least one argument.")
        }

    }

    DependentType = (dependentType) => {
        cy.SelectDropDownItem(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.DRP_DEPENDENTTYPE, dependentType)
    }


    PrincipalId = (PrincipalName, RegistationType) => {
        cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.PCK_PRINCIPALID)
        cy.wait(2000)
        if (RegistationType === 'IndividualRegistration') {
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.RADIO_INDIVIDUALREGISTRATION)
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.LNK_GOTOLASTPAGE)
            cy.wait(3000)
            // cy.xpath(`//td[text()=${PrincipalID}]/..//input`).click({ force: true })
            cy.SelectTableItem(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.TBL_MEMBERID, 'Member Name', PrincipalName)
            cy.wait(1000)
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_SELECT)

        }
        else {
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.RADIO_BATCHREGISTRATION)
            cy.wait(1000)
            cy.SelectTableItem(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.TBL_MEMBERID, 'Member Name', PrincipalName)
            cy.wait(1000)
            cy.Click(elems_BatchMembershipRegistrationDetail.MemRegInBatchRegistration.BTN_SELECT)

        }
    }


    /*****************************************************
     * Method: verifyPersonalInformation
     * Description: verify Personal Infromation
     *@param {string} MemberCategory Member Category
     * @param {string} NameOnNRIC Name on NRIC
     * @param {string} NameOnCard Name on Card
     * @param {string} Nric NRIC
     * @param {string} Gender Gender
     * @param {string} DATE_DATEOFBIRTH Date of Birth
     * @param {string} NSStatus  NS Status
     * @param {string} NSRank  NSRank
     * @param {string} MemberType  MemberType
     * @param {string} Nationality  Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType CardType
     * @param {string} InterestinDBSCard InterestinDBSCard
     * @param {string} ProfilePicture ProfilePicture
     *****************************************************/
     verifyPersonalInformation({ MemberCategory, NameOnNRIC, NameOnCard, Nric, Gender, 
        DateofBirth, NSStatus, NSRank, Nationality, MaritalStatus, 
        CardType, InterestinDBSCard, ProfilePicture
    }) {
        // Verify Member Catergory
        if (MemberCategory !== undefined && MemberCategory === 'Principal') {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERCATEGORY, MemberCategory)
        }

        // Verify Member Catergory
        if (MemberCategory !== undefined && MemberCategory !== 'Principal') {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERCATEGORY, "Dependent")
        }

        // Verify Name on NRIC
        if (NameOnNRIC !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC, NameOnNRIC)
        }
        // Verify Name onCArd
        if (NameOnCard !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD, NameOnCard)
        }
        // Verify NRIC
        if (Nric !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC, Nric)
        }
        // Verify Gender
        if (Gender !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_GENDER, Gender)
        }
        // VerifyDate of Birth
        if (DateofBirth !== undefined) {
             cy.EnterDateSuspension(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DATE_DATEOFBIRTH, DateofBirth)
        }

        // Verify NS Status
        if (NSStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, NSStatus)
        }
        // Verify NSRank
        if (NSRank !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, NSRank)
        }
        // Verify Nationality
        if (Nationality !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NATIONALITY, Nationality)
        }
        // Verify Marital Status
        if (MaritalStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_MARITALSTATUS, MaritalStatus)
        }
        // Verify Card Tyoe
        if (CardType !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_CARDTYPE, CardType)
        }
        // Verify Interest in DBS Card
        if (InterestinDBSCard !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_INTERESTINDBSCARD, InterestinDBSCard)
        }
        // Verify in Profile Picture
        if (ProfilePicture !== undefined) {
            cy.UploadFile(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.UPL_SELECTFILES, ProfilePicture)
        }

        // Error Handling
        if (NameOnNRIC === undefined
            && NameOnCard === undefined
            && Nric === undefined
            && Gender === undefined
            && DateofBirth === undefined
            && NSStatus === undefined
            && NSRank === undefined
            && Nationality === undefined
            && MaritalStatus === undefined
            && InterestinDBSCard === undefined
            && ProfilePicture === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.PersonalInformation Error!!./n\
                             Please provide at least one argument.")
        }

    }

}

export default new BatchMembershipRegistrationDetail

