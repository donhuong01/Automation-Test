import CodeSetMasterListing from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Set Master/CodeSetMasterListing.js'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data.js'

describe('[TS02] Code Set Master Listing form', function () {

  // Page Definition
  const CodeSetMasList = new CodeSetMasterListing()

  it('[TC01] Filter and Verify Code Set Master Listing', () => {

    //Go to Code Set Master Listing page
    cy.visit('/admin/codeSetMasterList')
    cy.wait(15000)

    // Click dropdown button from listing item
    CodeSetMasList.clickCodeSetDropdown(data.CodeSetMasterListing.codeSetButton)

    //Filter listing
    CodeSetMasList.filterCodeSetMasterList({
      CodeSetName: data.CodeSetMasterListing.codeSetName,
      AbbreviationCode: data.CodeSetMasterListing.abbreviationCode,
      //CodeType : data.CodeSetMasterListing.codeType,
    })
    cy.wait(15000)

    // Verify Listing
    CodeSetMasList.verifyCodeSetMasterList(data.CodeSetMasterListing.CodeSetMasterList)
  })

  it('[TC02] Access existing item from Listing', () => {

    //Go to Code Set Master Listing page
    cy.visit('/admin/codeSetMasterList')
    cy.wait(15000)

    // Click Code Set item link
    CodeSetMasList.clickCodeSetLink(data.CodeSetMasterListing.codeSetLink)
  })

  it('[TC03] Verify Create New button functionality', () => {

    //Go to Code Set Master Listing page
    cy.visit('/admin/codeSetMasterList')

    // Click Create New button
    CodeSetMasList.createNew()
  })

  it('[TC04] Verify Delete button functionality', () => {

    //Go to Code Set Master Listing page
    cy.visit('/admin/codeSetMasterList')
    cy.wait(15000)

    // Select Item to delete
    CodeSetMasList.selectCodeSetItem(data.CodeSetMasterListing.codeSetItem)

    // Click Delete button
    // MUST TICK AN ITEM'S CHECKBOX FIRST TO DELETE ITEM
    //CodeSetMasterListing.delete()
  })

})