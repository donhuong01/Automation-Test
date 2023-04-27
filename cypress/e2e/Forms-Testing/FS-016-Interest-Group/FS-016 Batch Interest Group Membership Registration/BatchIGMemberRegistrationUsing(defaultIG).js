import login from "../../../../fixtures/login"
import BatchIGRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Batch-IG-Registration'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/BatchIGMemRegWithExistingMemUsing(defaultIG)'
import IGMembershipRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('FS-016 Batch Interest Group Membership Registration', function () {

    data.forEach(item => {

        const { MemberId, BatchName, BatchType, InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation } = item

        it('Creating a Batch Membership Registration using Default IG', function () {

            common.Checkin(MemberId)

            cy.visit('/membership/batchMembershipRegistrationList').wait(6000)

            BatchIGRegistration.CreateNew()

            BatchIGRegistration.FilloutBatchFields(BatchName, BatchType)

            BatchIGRegistration.FilloutAdditionalFields(InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation)

            BatchIGRegistration.Save()

            BatchIGRegistration.FilterWithBatchName(BatchName)

            BatchIGRegistration.VerifyBatchIGStatus("Open")

            BatchIGRegistration.ClickOnTableLink()

            BatchIGRegistration.AddMemRegToMemListingDefIG()

            IGMembershipRegistration.AgreeWithTermCondition()

            // IGMembershipRegistration.AgreewithIndemnityWaiver()

            common.AddToCart()

            common.fillOutandApplyPaymentWithCompleteButton('CASH')

            BatchIGRegistration.ValidateRegistration()

            BatchIGRegistration.FilterWithBatchName(BatchName)

            BatchIGRegistration.VerifyBatchIGStatus("Validated")

            BatchIGRegistration.ClickOnTableLink()

            BatchIGRegistration.PostRegistration()

            BatchIGRegistration.VerifyBatchIGStatus("Posted")

            cy.LogoutOfSmcms()

        })

    })
})