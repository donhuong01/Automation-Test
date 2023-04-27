/*****************************************************
 * Page Function: Sample Script to Test Batch Membership Registration Detail Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import BatchMembershipRegistrationDetail from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Batch Membership Registration/BatchMembershipRegistrationDetails'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
// import login from '../../../../fixtures/login'


describe('[TS13] Batch Membership Registration Details form', function () {

    // beforeEach(() => {
    //    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // })

    const BatchName = data.BatchMemRegDetail.BatchName
    const BatchType = data.BatchMemRegDetail.BatchType
    const RecTalkSessionID = data.BatchMemRegDetail.RecTalkSessionID
    const MemRegTenure = data.BatchMemRegDetail.MemRegTenure
    const PromationReg= data.BatchMemRegDetail.PromationReg
    const MemRenewalTenure = data.BatchMemRegDetail.MemRenewalTenure
    const PromationRenewal = data.BatchMemRegDetail.PromationRenewal
    const PaymentMode = data.BatchMemRegDetail.PaymentMode

    const MemberId = data.BatchMemRegDetail.InBatchRegistration.MemberID
    const NIRC = data.BatchMemRegDetail.InBatchRegistration.NIRC
    const Last4NIRC = data.BatchMemRegDetail.InBatchRegistration.Last4NRIC
    const DOB = data.BatchMemRegDetail.InBatchRegistration.DateofBirth

    it('[TC01] FillOut Batch Membership Registration Detail Form an click Cancel button', function () {

        cy.visit('/membership/batchMembershipRegistrationDetails')
        cy.wait(15000)

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )

        BatchMembershipRegistrationDetail.Cancel()

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Listing')

    })


    it('[TC02] FillOut Batch Membership Registration Detail Form and click Save button', function () {

        cy.visit('/membership/batchMembershipRegistrationDetails')
        cy.wait(10000)

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )
        BatchMembershipRegistrationDetail.Save()

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Listing')
       

    })

    it('[TC03] FillOut Batch Membership Registration Detail Form and Validate Registration', function () {

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )

        BatchMembershipRegistrationDetail.ValidateRegistration()

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Listing')


    })

    it('[TC04] FillOut Batch Membership Registration Detail Form and Add new Member(principal)', function () {


        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )

        BatchMembershipRegistrationDetail.AddMember()

        BatchMembershipRegistrationDetail.verifyPageTitle('Membership Registration Form - In Batch Registration')
        
        BatchMembershipRegistrationDetail.FillOutFormForNonMember()

        BatchMembershipRegistrationDetail.NewMemberPrincipal()

        BatchMembershipRegistrationDetail.verifyPageTitle('Membership Registration - Principal')


    })

    it('[TC05] FillOut Batch Membership Registration Detail Form and Add New Member(Dependent)', function () {


        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )


        BatchMembershipRegistrationDetail.AddMember()

        BatchMembershipRegistrationDetail.verifyPageTitle('Membership Registration Form - In Batch Registration')
        
        BatchMembershipRegistrationDetail.FillOutFormForExistingMember(MemberId, NIRC)

        BatchMembershipRegistrationDetail.NewMemberDependent()

        BatchMembershipRegistrationDetail.verifyPageTitle('Membership Registration - Dependent')


    })

    it('[TC06] FillOut Batch Membership Registration Detail Form, Add New Member(Dependent) and click Cancel', function () {


        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')
        
        BatchMembershipRegistrationDetail.FillOutBatchMembershipRegistrationDetailForm(

            BatchName, BatchType, RecTalkSessionID, MemRegTenure, PromationReg, MemRenewalTenure, PromationRenewal, PaymentMode
        )

        BatchMembershipRegistrationDetail.ValidateRegistration()
        
        BatchMembershipRegistrationDetail.VerifyValidateRegistrationMsg()

        BatchMembershipRegistrationDetail.AddMember()

        BatchMembershipRegistrationDetail.verifyPageTitle('Membership Registration Form - In Batch Registration')
        
        BatchMembershipRegistrationDetail.FillOutFormForExistingMember(MemberId, NIRC)

        BatchMembershipRegistrationDetail.InBatchRegCancelBtn()

        BatchMembershipRegistrationDetail.verifyPageTitle('Batch Membership Registration Detail Form')


    })
})



