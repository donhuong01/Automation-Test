import CodeSetMasterListing from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Set Master/CodeSetMasterListing.js'
import CodeSetMasterDetail from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Set Master/CodeSetMasterDetail.js'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-Uat-data.js'

const CodeSetMaster = ()=> {

    describe('[TS02] Code Set Master Management',function(){

        // Page Definitions
        const CodeSetMstList = new CodeSetMasterListing()
        const CodeSetMstDtl = new CodeSetMasterDetail()

        const Name =  data.CodeSetMasterDetail.name
        const AbbreviationCode =  data.CodeSetMasterDetail.abbreviationCode
        const BelongsUnder =  data.CodeSetMasterDetail.belongsUnder
        const CodeType =  data.CodeSetMasterDetail.codeType
        const EffectiveStartDate =  '23-Feb-2021'
        const EffectiveEndDate =  '01-Jun-2022'


        it('[TC01] Create New Code Set Item', ()=> {

            // Naviagte to form
            cy.visit('/admin/codeSetMasterList')
            cy.wait(15000)

            // Click Create New button
            CodeSetMstList.createNew()

            // Populate Detail form
            CodeSetMstDtl.fillOutCodeSetMasterDetail(Name, AbbreviationCode, BelongsUnder, CodeType,
                EffectiveStartDate, EffectiveEndDate)

            // Click Save button
            CodeSetMstDtl.save()
        })


        it('[TC02] Verify Listing Filters and Items', ()=> {

            // Naviagte to form
            cy.visit('/admin/codeSetMasterList')
            cy.wait(15000)

            // Filter listing
            CodeSetMstList.filterCodeSetMasterList(
                Name,
                data.CodeSetMasterListing.abbreviationCode,
                data.CodeSetMasterListing.codeType,
            )

            // Verify listing
            CodeSetMstList.verifyCodeSetMasterList(data.CodeSetMasterListing.abbreviationCode, Name)
        })

        it('[TC03] Update and Delete Code Set Item', ()=> {

            // Naviagte to form
            cy.visit('/admin/codeSetMasterList')
            cy.wait(20000)

            // Filter listing
            CodeSetMstList.filterCodeSetMasterList(
                Name,
                data.CodeSetMasterListing.abbreviationCode,
                data.CodeSetMasterListing.codeType,
            )

            // Click Create New button
            CodeSetMstList.clickCodeSetLink(Name)

            // Populate Detail form
            CodeSetMstDtl.fillOutCodeSetMasterDetail(
                data.CodeSetMasterListing.UpdatedCodeSetName, 
                data.CodeSetMasterDetail.abbreviationCode, 
                data.CodeSetMasterDetail.belongsUnder, 
                data.CodeSetMasterDetail.codeType, 
                data.CodeSetMasterDetail.effectiveStartDate,
                data.CodeSetMasterDetail.effectiveEndDate
            )

            // Click Save button
            CodeSetMstDtl.save()
            cy.wait(15000)

            // Filter listing
            CodeSetMstList.filterCodeSetMasterList(
                data.CodeSetMasterListing.UpdatedCodeSetName,
                // data.CodeSetMasterListing.abbreviationCode,
                // data.CodeSetMasterListing.codeType,
            )
            cy.wait(1000)
            // Select item to delete
            CodeSetMstList.selectCodeSetItem(data.CodeSetMasterListing.codeSetName)
            // CodeSetMstList.selectCodeSetItem('.123')

            // Click Delete button - MUST TICK ITEM CHECKBOX BEFORE DELETING
            CodeSetMstList.delete()
        })
    })
}

export default CodeSetMaster