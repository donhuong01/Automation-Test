import login from "../../../../fixtures/login"
import BatchIGRegistration from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Batch-IG-Registration'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/BatchIGMemRegWithExistingMemUsing(defaultIG)'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('FS-016 Batch Interest Group Membership Registration', function () {

    const { BatchName, BatchType, InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation } = data[0]

    it('Search Functionality and Deleting Interest Group Member', function () {

        cy.visit('/membership/batchMembershipRegistrationList').wait(6000)

        BatchIGRegistration.CreateNew()

        BatchIGRegistration.FilloutBatchFields(BatchName, BatchType)

        BatchIGRegistration.FilloutAdditionalFields(InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation)

        BatchIGRegistration.Save()

        BatchIGRegistration.FilterWithBatchName(BatchName)

        BatchIGRegistration.VerifyBatchIGStatus("Open")

        BatchIGRegistration.SelectItemInTable(BatchName)

        BatchIGRegistration.Delete()

    })

})