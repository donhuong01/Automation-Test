import CodeSetMasterDetail from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Set Master/CodeSetMasterDetail.js'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data.js'

describe('[TS02] Code Set Master Detail form',function(){

  // Page Definition
  const CodeSetMstDtl = new CodeSetMasterDetail()

  it('[TC01] Create New Code Set Item', ()=> {

    //Go to Code Set Master Detail
    cy.visit('/admin/codeSetMasterDetails')

    // Fill out form
    CodeSetMstDtl.fillOutCodeSetMasterDetail({
      Name : data.CodeSetMasterDetail.name, 
      AbbreviationCode : data.CodeSetMasterDetail.abbreviationCode, 
      BelongsUnder : data.CodeSetMasterDetail.belongsUnder, 
      CodeType : data.CodeSetMasterDetail.codeType, 
      EffectiveStartDate : data.CodeSetMasterDetail.effectiveStartDate, 
      EffectiveEndDate : data.CodeSetMasterDetail.effectiveEndDate
    })

    // Click Save button
    //CodeSetMstDtl.save()
  })

  it('[TC02] Populate Code Set Master Detail Form and Cancel', ()=> {

    //Go to Code Set Master Detail
    cy.visit('/admin/codeSetMasterDetails')

    // Fill out form
    CodeSetMstDtl.fillOutCodeSetMasterDetail({
      Name : data.CodeSetMasterDetail.name, 
      AbbreviationCode : data.CodeSetMasterDetail.abbreviationCode, 
      BelongsUnder : data.CodeSetMasterDetail.belongsUnder, 
      CodeType : data.CodeSetMasterDetail.codeType, 
      EffectiveStartDate : data.CodeSetMasterDetail.effectiveStartDate, 
      EffectiveEndDate : data.CodeSetMasterDetail.effectiveEndDate
    })

    // Click Save button
    CodeSetMstDtl.cancel()
  })
})