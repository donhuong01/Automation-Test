import login from "../../../fixtures/login"
import BatchIGRegistration from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Batch-IG-Registration'
import data from '../../../fixtures/Data_Module/FS-016-Interest-Group/BatchIGMemRegWithExistingMemUsing(defaultIG)'
import IGMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'
import MembershipTenureSelection from "../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection"
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

const MembershiptenureSelection = new MembershipTenureSelection()
const common = new Common()

const { BatchName, BatchType, InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation } = data[1]



const BatchMemRegWithExistingMemUsingDefaultIG = (MemberId) => {

describe('FS-016 Batch Interest Group Membership Registration', function () {

    it('Creating a Batch Membership Registration with Existing Membership using Default IG', function () {

        common.Checkin(MemberId)

        cy.visit('/membership/batchMembershipRegistrationList')
        cy.wait(6000)

        BatchIGRegistration.CreateNew()
        cy.wait(5000)

        BatchIGRegistration.FilloutBatchFields(BatchName, BatchType)

        BatchIGRegistration.FilloutAdditionalFields(InterestGroup, EffectiveDate, IGMembershipTerm, InterestGroupLocation)

        BatchIGRegistration.Save()

        cy.wait(6000)

        BatchIGRegistration.FilterWithBatchName(BatchName)

        BatchIGRegistration.VerifyBatchIGStatus("Open")

        BatchIGRegistration.ClickOnTableLink()

        BatchIGRegistration.AddMemRegToMemListingDefIG()

        IGMembershipRegistration.AgreeWithTermCondition()

        IGMembershipRegistration.AgreewithIndemnityWaiver()

        MembershiptenureSelection.addToCart()

        BatchIGRegistration.fillOutandApplyPayment('CASH')

        BatchIGRegistration.ValidateRegistration()
        cy.wait(6000)

        BatchIGRegistration.FilterWithBatchName(BatchName)

        BatchIGRegistration.VerifyBatchIGStatus("Validated")

        BatchIGRegistration.ClickOnTableLink()

        BatchIGRegistration.PostRegistration()

        BatchIGRegistration.VerifyBatchIGStatus("Posted")

        cy.LogoutOfSmcms()

    })

})
}

export default BatchMemRegWithExistingMemUsingDefaultIG