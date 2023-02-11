/*****************************************************
 * Page Function: Sample Script to Test Member Type Detail Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import MemberTypeDetail from "../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/MemberTypeDetail.js"
import data from '../../../../fixtures/data.js'

describe('[TS05] Member Type Detail Form', function () {

    // Page Definitions
    const MemTypeDtl = new MemberTypeDetail()

    it('[TC01] Test Member Type Detail Form', function () {

        cy.visit('/membership/memberTypeDetails')
        
        // Fill out form
        MemTypeDtl.filloutMemberTypeDetail({
            // UPDATE DATA.JS FILE FOR MEMBER CATEGORY BEFORE RUNNING SCRIPT
            MemberCategory : data.MemberTypeDetail.MemberCategory,
            // DependentType : data.MemberTypeDetail.DependentType, // Displayed when MemberCategory === DEPENDENT
            // ParentType : data.MemberTypeDetail.ParentType, // Displayed when MemberCategory === DEPENDENT
            Code : data.MemberTypeDetail.Code,
            Description : data.MemberTypeDetail.Description,
            MembershipType : data.MemberTypeDetail.MembershipType,
            ServiceStatus : data.MemberTypeDetail.ServiceStatus, // Displayed when MemberCategory === PRINCIPAL & FREE NSF
            Rank : data.MemberTypeDetail.Rank, // Displayed when MemberCategory === PRINCIPAL & FREE NSF
            MinYears : data.MemberTypeDetail.MinYears,
            MaxYears : data.MemberTypeDetail.MaxYears,
            MaxCapYears : data.MemberTypeDetail.MaxCapYears,
            Remark : data.MemberTypeDetail.Remark,
            Status : data.MemberTypeDetail.Status
        })

        // Save Form
        MemTypeDtl.save()

        // Cancel Form
        cy.visit('/membership/memberTypeDetails')
        MemTypeDtl.cancel(data.MemberTypeDetail.ExpectedPage)
    })
})
