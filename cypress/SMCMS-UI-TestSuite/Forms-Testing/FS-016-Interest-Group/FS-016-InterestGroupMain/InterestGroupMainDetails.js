import InterestGroupMainManagement from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainManagement'
import InterestGroupMainListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainListing'

import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/016-Interest-Group-Main-Mangement'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const {IGName, Code, MainCategory, IGCategoryGroup, FABSGroup, ClubClassification, LifeStyleGroup,
      SMCClassification, OwnerEmail, LocationName, ApproverOption, ApproverEmail, Status, Name,
      ChargeName, TransactionType, CalculationType, AmmountType,CustomerCategoryName, RegItemCode, RenewalItemCode,
      DefermentItemCode, ReinstatementItemCode,
      TerminationItemCode, WaiverItemCode, ReversalItemCode} = data


describe('[TS02] FS-016 Interest Group Main Management', function () {


    it('[TC01] Creating New Interest Group Main and click cancel button', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        //click on create new button
        InterestGroupMainManagement.CreateNew()

        //verify interest group main number
        // InterestGroupMainManagement.VerifyIGMainNumber(IGMainNumber)

        //Fill Out Interest Group Main Information
        InterestGroupMainManagement.FilloutIGMainInformation(IGName, Code, MainCategory, IGCategoryGroup, FABSGroup,
            ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail)

        //Add location 
        InterestGroupMainManagement.AddLocation(LocationName)

        //Remove Location 
        // InterestGroupMainManagement.RemoveLocation()

        // //Add Location Again
        // InterestGroupMainManagement.AddLocation(LocationName)

        //FillOut Approver Option Field
        InterestGroupMainManagement.AddApproverOption(ApproverOption, ApproverEmail)

        //Click save as draft button
        InterestGroupMainManagement.Cancel()


    })

    it('[TC02] Creating New Interest Group Main and click on Save as Draft', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        //click on create new button
        InterestGroupMainManagement.CreateNew()

        //verify interest group main number
        // InterestGroupMainManagement.VerifyIGMainNumber(IGMainNumber)

        //Fill Out Interest Group Main Information
        InterestGroupMainManagement.FilloutIGMainInformation(IGName, Code, MainCategory, IGCategoryGroup, FABSGroup,
            ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail)

        //Add location 
        InterestGroupMainManagement.AddLocation(LocationName)


        //FillOut Approver Option Field
        InterestGroupMainManagement.AddApproverOption(ApproverOption, ApproverEmail)

        //Click save as draft button
        InterestGroupMainManagement.SaveAsDraft()

        //Filter listing using status and verify table item status
        InterestGroupMainManagement.FilterWithStatus(Status)

        // Select Table entry 
        InterestGroupMainListing.SelectTableEntry(IGName)



    })
    it('[TC03] Verify and delete newly created item', function () {

        cy.visit('/membership/interestGroupMainListing')
        cy.wait(2000)

        //Filter listing using status and verify table item status
        InterestGroupMainManagement.FilterWithStatus(Status)

        //Verify table entries
        InterestGroupMainListing.VerifyTableEntries(IGName, Status)

        // Select Table entry 
        InterestGroupMainListing.SelectTableEntry(IGName)

        // Click Delete button
        InterestGroupMainListing.Delete()

        // Click on Yes in delete confirmation popup
        InterestGroupMainListing.ClickYesInDeleteConfirmationPopUp('Record has been deleted successfully.')


    })

})