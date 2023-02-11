import MemberTypeDetail from "../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member-Type/MemberTypeDetail"
import MemberTypeListingForm from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member-Type/MemberTypeListing'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import login from '../../../../fixtures/login'

beforeEach(() => {

//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
})

describe('[SP1-FS014_TS05] Member Type Management', function (){

    // Page Definitions
    const MemTypeDtl = MemberTypeDetail
    const MemTypeLst = MemberTypeListingForm
    const MemberCategory = data.MemberTypeDetail.MemberCategory
    const Code =  data.MemberTypeDetail.Code
    const Description = data.MemberTypeDetail.Description
    const MembershipType = data.MemberTypeDetail.MembershipType
    const ServiceStatus = data.MemberTypeDetail.ServiceStatus
    const Rank = data.MemberTypeDetail.Rank
    const MinYears = data.MemberTypeDetail.MinYears
    const MaxYears = data.MemberTypeDetail.MaxYears
    const MaxCapYears = data.MemberTypeDetail.MaxCapYears
    const Remark = data.MemberTypeDetail.Remark
    const Status = data.MemberTypeDetail.Status


    it('[SP1-FS014_TS05_TC01] Create New Member Type', function (){

            cy.visit('/membership/memberTypeList')
            cy.wait(5000)
    
            MemberTypeListingForm.createNew()

            //Fill Out Member Detail form
            MemTypeDtl.filloutMemberTypeDetail(MemberCategory,Code, Description, MembershipType, ServiceStatus, Rank, MinYears, MaxYears, MaxCapYears, Remark, Status)
            //Save Form
            //MemTypeDtl.save()
        })

    it('[SP1-FS014_TS05_TC01] Validate newly created Member Type in the List', function (){

            cy.visit('/membership/memberTypeList')
            cy.wait(5000)
            MemTypeLst.selectMemberType(MembershipType,Code)
    })        
    
})
