import InterestGroupMainManagement from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMainManagement'

import login from '../../../fixtures/login'
import data from '../../../fixtures/Data_Module/FS-016-Interest-Group/016-Interest-Group-Main-Mangement'

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const {IGName, Code, MainCategory, IGCategoryGroup, FABSGroup, ClubClassification, LifeStyleGroup,
      SMCClassification, OwnerEmail, LocationName, ApproverOption, ApproverEmail, Status, Name,
      ChargeName, TransactionType, CalculationType, AmmountType,CustomerCategoryName, RegItemCode, RenewalItemCode,
      DefermentItemCode, ReinstatementItemCode,
      TerminationItemCode, WaiverItemCode, ReversalItemCode} = data

const InterestGroupMainManagements = () => { 

describe('[TS02] FS-016 Interest Group Main Management', function () {

    
    it('[TC01] Creating New Interest Group Main', function () {

        cy.intercept('PUT', 'https://api.uat-smcms.safra.sg/v2/adminapi/interest-group/interest-group-mains/charge-rate').as('ID')
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
        InterestGroupMainManagement.SaveAsDraft()

        //Filter listing using status and verify table item status
        InterestGroupMainManagement.FilterWithStatus(Status)

        //click on newly created item
        InterestGroupMainManagement.ClickIGTableLink(IGName)

        //Click charge rate tab
        InterestGroupMainManagement.ClickChargeRateTab()

        //Click add charge type
        InterestGroupMainManagement.ClickAddChargeType()

        //Fillout field for charge type list
        InterestGroupMainManagement.FilloutChargeTypeFields(ChargeName, TransactionType, CalculationType, AmmountType)

        //click on add customer category and select cud stomer category
        InterestGroupMainManagement.AddCustomerCategory(CustomerCategoryName)

        //Fillout product info
        InterestGroupMainManagement.FilloutProductInformation(RegItemCode, RenewalItemCode, DefermentItemCode, ReinstatementItemCode,
            TerminationItemCode, WaiverItemCode, ReversalItemCode)

        //click on save as draft
        // InterestGroupMainManagement.SaveAsDraft()

        //click on submit button
        InterestGroupMainManagement.Submit()

        //Aprroval work flow

        // cy.visit('/membership/interestGroupMainListing')

        //filter item and varify status
        InterestGroupMainManagement.FilterWithStatus("Pending Approval")

        //click the item that was approved
        // InterestGroupMainManagement.ClickIGTableLink(IGName)


        

        // Click Submit Button
        // InterestGroupMainManagement.Submit()

        //Varify Notification Msg
        // InterestGroupMainManagement.VarifyNotificationMsg('Record has been saved successfully.')


        // InterestGroupDetail.VarifyTableItemStatus(IGName, 'Pending Approval')

        //Wait for Approval Email
        cy.wait(5000) 
        
        cy.wait('@ID')
        cy.get('@ID').then(xhr => {

            const Id = xhr.response.body.value.id
            console.log(Id)
            cy.log(Id)

            cy.visit(`/admin/pendingTaskDetails?id=${Id}`).as('MemID')
            cy.wait(2000)

        })
            




        //Click view interest group button
        // InterestGroupMainManagement.ViewInterestGroup()

        // //click create new button
        // InterestGroupMainManagement.CreateNew()

        // //verify interest group main number
        // // InterestGroupMainManagement.VerifyIGMainNumber(IGMainNumber)

        // //Fill Out Interest Group Main Information
        // InterestGroupMainManagement.FilloutIGMainInformation(IGName, Code, MainCategory, IGCategoryGroup, FABSGroup,
        //     ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail)

        // //Add location 
        // InterestGroupMainManagement.AddLocation(LocationName)

        // //Remove Location 
        // InterestGroupMainManagement.RemoveLocation()

        // //Add Location Again
        // InterestGroupMainManagement.AddLocation(LocationName)

        // //FillOut Approver Option Field
        // InterestGroupMainManagement.AddApproverOption(ApproverOption, ApproverEmail)

        // //Click save as draft button
        // InterestGroupMainManagement.SaveAsDraft()

        // //Filter listing using status and verify table item status
        // InterestGroupMainManagement.FilterWithStatus(Status)

        // //click on newly created item
        // InterestGroupMainManagement.ClickIGTableLink(Name)

        // //Click charge rate tab
        // InterestGroupMainManagement.ClickChargeRateTab()

        // //Click add charge type
        // InterestGroupMainManagement.ClickAddChargeType()

        // //Fillout field for charge type list
        // InterestGroupMainManagement.FilloutChargeTypeFields(ChargeName, TransactionType, CalculationType, AmmountType)

        // //click on add customer category and select customer category
        // InterestGroupMainManagement.AddCustomerCategory(CustomerCategoryName)

        // //Fillout product info
        // InterestGroupMainManagement.FilloutProductInformation(RegItemCode, RenewalItemCode, DefermentItemCode, ReinstatementItemCode,
        //     TerminationItemCode, WaiverItemCode, ReversalItemCode)

        // //click on save as draft
        // InterestGroupMainManagement.SaveAsDraft()

        // //click on submit button
        // InterestGroupMainManagement.Submit()

        // //Wait for the item to be rejected by the approver

        // cy.visit('/membership/interestGroupMainListing')

        // //filter item and varify status
        // InterestGroupMainManagement.FilterWithStatus(Status)



        // //click on cr eate new button
        // InterestGroupMainManagement.CreateNew()

        // //verify interest group main number
        // // InterestGroupMainManagement.VerifyIGMainNumber(IGMainNumber)

        // //Fill Out Interest Group Main Information
        // InterestGroupMainManagement.FilloutIGMainInformation(IGName, Code, MainCategory, IGCategoryGroup, FABSGroup,
        //     ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail)

        // //Add location 
        // InterestGroupMainManagement.AddLocation(LocationName)

        // //Remove Location 
        // InterestGroupMainManagement.RemoveLocation()

        // //Add Location Again
        // InterestGroupMainManagement.AddLocation(LocationName)

        // //FillOut Approver Option Field
        // InterestGroupMainManagement.AddApproverOption(ApproverOption, ApproverEmail)

        // //Click save as draft button
        // InterestGroupMainManagement.SaveAsDraft()

        // //Filter listing using status and verify table item status
        // InterestGroupMainManagement.FilterWithStatus(Status)

        // //click on newly created item
        // InterestGroupMainManagement.ClickIGTableLink(Name)

        // //Click charge rate tab
        // InterestGroupMainManagement.ClickChargeRateTab()

        // //Click add charge type
        // InterestGroupMainManagement.ClickAddChargeType()

        // //Fillout field for charge type list
        // InterestGroupMainManagement.FilloutChargeTypeFields(ChargeName, TransactionType, CalculationType, AmmountType)

        // //click on add customer category and select customer category
        // InterestGroupMainManagement.AddCustomerCategory(CustomerCategoryName)

        // //Fillout product info
        // InterestGroupMainManagement.FilloutProductInformation(RegItemCode, RenewalItemCode, DefermentItemCode, ReinstatementItemCode,
        //     TerminationItemCode, WaiverItemCode, ReversalItemCode)

        // //click on save as draft
        // InterestGroupMainManagement.SaveAsDraft()

        // //click on submit button
        // InterestGroupMainManagement.Submit()


        // //Wait for the item to be queried by requestor's  PIC  approver or Specific approver

        // cy.visit('/membership/interestGroupMainListing')

        // //filter item and varify status
        // InterestGroupMainManagement.FilterWithStatus(Status)





    })

})

}

export default InterestGroupMainManagements