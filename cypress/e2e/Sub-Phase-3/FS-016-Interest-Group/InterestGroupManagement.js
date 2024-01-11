import InterestGroupDetail from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupDetail'
import InterestGroupListing from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupListing'

import login from '../../../fixtures/login'
import data from '../../../fixtures/Data_Module/FS-016-Interest-Group/016-Interest-Group-Main-Mangement'


// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

const { IGName, Code, IGMain, SubCatType, PublishDate, EndDate, MemType, MinAGeReq, MaxAGeReq, IsAgeReq,
    UpdMinAGeReq, UpdMaxAGeReq, IsIGReq, IsAllowUser, IsAllowFloating, termLength, termLengthType,
    onlineDisplayTerm, minRegTerm,
    minRenewalTerm, minRangeForBypassTerm, maxRangeForBypassTerm, AccessMode, CustomerCate, location,
    ChargeName, CalculationType, TransactionType, AmountType, ProductName, AttributeName, AttributeCode,
    DisplayOrder, ColumnCaption, ControlType, Tooltip, Active, ControlSpan, Validation,
    Description, SpecialRemarks, ContactPersonInformation, IndemnityText, TermsandConditionsText } = data.IGDetail

const InterestGroupManagement = () =>{

describe('[TS02] FS-016 Interest Group Management', function () {


    it('[TC01] Creating New Interest Group and click cancel button', function () {

        cy.intercept('POST', 'https://api.uat-smcms.safra.sg/v2/adminapi/interest-group/interest-groups/membership-tag').as('ID')

        cy.visit('/membership/interestGroupListing')
        cy.wait(2000)

        //click on create new button
        InterestGroupListing.CreateNew()

        //Fillout IG Information form
        InterestGroupDetail.InterestGroupDetailInformation(IGName, Code, IGMain, SubCatType,
            PublishDate, EndDate, MemType)

        //Fillout Registration
        InterestGroupDetail.FilloutRegistration(MinAGeReq, MaxAGeReq, IsAgeReq,
            IsIGReq, IsAllowUser, IsAllowFloating)

        //Fillout Membership Term
        InterestGroupDetail.FilloutMembershipTerm(termLength, termLengthType, onlineDisplayTerm, minRegTerm,
            minRenewalTerm, minRangeForBypassTerm, minRangeForBypassTerm, maxRangeForBypassTerm)

        // Fillout Access Mode List
        InterestGroupDetail.FilloutAccessModeList(AccessMode)

        // Fillout Customer Category Access Mode 
        InterestGroupDetail.CustomerCategoryAccessModeList(CustomerCate)

        // Add Location
        InterestGroupDetail.AddLocation(location)


        //Click save as draft button
        InterestGroupDetail.SaveAsDraft()

        //Click the Interest Group Name Link of the newly created item
        InterestGroupDetail.ClickNewlyCteatedItem(IGName)

        //varify other tabs
        InterestGroupDetail.VarifyAdditionalTabsDisplayed('Charge Rate')

        //Click on Charge Rate Tab
        InterestGroupDetail.ClickChargeRateTab()

        //fillout charge type
        InterestGroupDetail.FilloutCargeType(ChargeName, TransactionType, CalculationType, AmountType)

        //Add customer category charge list
        InterestGroupDetail.ChargeRateCustomerCategory(CustomerCate)

        // Fillout Product Mater Information
        InterestGroupDetail.ProductMasterInformation(ProductName)



        //Click on Other Information Tab
        InterestGroupDetail.OtherInformationTab()

        //Fillout Information Fields
        InterestGroupDetail.FilloutInformationFields(Description, SpecialRemarks, ContactPersonInformation)

        // Idenmity Waiver
        InterestGroupDetail.IndenmityWaiver(IndemnityText)

        //Term and Condition
        InterestGroupDetail.TermsandConditions(TermsandConditionsText)

        // Click on Membership tags and additional info
        InterestGroupDetail.ClickMembershipTagTab()

        // fillout Membership Tags
        InterestGroupDetail.FilloutMembershipTags(AttributeName, AttributeCode)

        // fillout Additional Fields
        InterestGroupDetail.AdditionalFields(DisplayOrder, ColumnCaption, ControlType, Tooltip, Active, ControlSpan, Validation)

        InterestGroupDetail.SaveAsDraft()

        InterestGroupDetail.Cancel()

        InterestGroupDetail.VarifyTableItemStatus(IGName, 'Draft')

        //Click the Interest Group Name Link of the newly created item
        InterestGroupDetail.ClickNewlyCteatedItem(IGName)

        //Fillout Registration
        InterestGroupDetail.FilloutRegistration(UpdMinAGeReq, UpdMaxAGeReq, IsAgeReq,
            IsIGReq, IsAllowUser, IsAllowFloating)
        //Fillout Membership Term
        InterestGroupDetail.FilloutMembershipTerm(termLength, termLengthType, onlineDisplayTerm, minRegTerm,
            minRenewalTerm, minRangeForBypassTerm, minRangeForBypassTerm, maxRangeForBypassTerm)

        cy.intercept('POST', 'https://api.uat-smcms.safra.sg/v2/adminapi/interest-group/interest-groups/membership-tag').as('ID')

        // Click Submit Button
        InterestGroupDetail.Submit()

        //Varify Notification Msg
        //InterestGroupDetail.VarifyNotificationMsg('Record has been saved successfully.')


        InterestGroupDetail.VarifyTableItemStatus(IGName, 'Pending Approval')

        //Wait for Approval Email
        cy.wait(5000) 
        
        cy.wait('@ID')
        cy.get('@ID').then(xhr => {

            const Id = xhr.response.body.value
            console.log(Id)

            cy.visit(`/admin/pendingTaskDetails?id=${Id}`).as('MemID')
            cy.wait(2000)
            
            
        })

        

    })



})

}
export default InterestGroupManagement