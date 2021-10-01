// Cypress Custom Commands Library

/*****************************************************
 * Command: GoToWebPage
 * Description: Navigates to web page defined at the 
 * Cypres 'env'
 *
 * @author: asadol
 * @param {string} pageName Web Page Name
 *****************************************************/
Cypress.Commands.add('GoToWebPage', (pageName) => {
    cy.log('------ Go To WebPage : ' + pageName + ' ------')
    cy.visit(Cypress.env(pageName))
})

/*****************************************************
 * Command: Click
 * Description: Clicks an element
 *
 * @author: asadol
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.get(locator).click()
})

/*****************************************************
 * Command: EnterText
 * Description: Enters text on an Element
 *
 * @author: asadol
 * @param {string} locator Element Locator
 * @param {string} text Text to be entered
 *****************************************************/
Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.get(locator).type(text)
})

/*****************************************************
 * Command: SelectDropDownItem
 * Description: Selects a List(Dropdown) Item
 *
 * @author: asadol
 * @param {string} locator Element Locator
 * @param {string} item Item Value in text
 *****************************************************/
Cypress.Commands.add('SelectDropDownItem', (locator, item) => {
    cy.log('------ Select Drop Down Item : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.get(locator).select(item)
})

/*****************************************************
 * Command: TickRadioButton
 * Description: Ticks a radio button
 *
 * @author: asadol
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('TickRadioButton', (locator) => {
    cy.log('------ Tick Radio Button : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.get(locator).should('not.be.checked').click()
})

/*****************************************************
 * Command: TickCheckBox
 * Description: Checks of Unchecks a check box
 *
 * @author: asadol
 * @param {string} locator Element Locator
 * @param {binary} value Value: true=Checked
 *                              false=Unchecked
 *****************************************************/
Cypress.Commands.add('TickCheckBox', (locator, value) => {
    cy.log('------ Checks/Unchecks a Checkbox : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    if(value == true){
        cy.get(locator).should('not.be.checked').click()
    }
    if(value == false){
        cy.get(locator).should('be.checked').click()
    }    
})

/*****************************************************
 * Command: ValidateElementText
 * Description: Validate element text value by supplying
 * an expected text value
 *
 * @author: asadol
 * @param {string} locator Element Locator
 * @param {binary} expectedText Expected Text Value
 *****************************************************/
Cypress.Commands.add('ValidateElementText', (locator, expectedText) => {
    cy.log('------ Validate Element Text : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.get(locator).contains(expectedText)
})

/*****************************************************
 * Command: VerifyTableEntry
 * Description: Verifies a Table Entry using 1 pair of 
 * column and row reference.
 *
 * @author: hstone
 * @param {string} locator Element Locator
 * @param {string} expectedValueColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference Column Name of the Row Reference Value
 * @param {string} rowReference Row Reference Value
 *****************************************************/
Cypress.Commands.add('VerifyTableEntry', (locator, targetColumn, expectedValue, columnReference, rowReference) => {
    cy.log('------ Verify Table Entry : ' + locator + ' ------')
    cy.get(locator).scrollIntoView()
    cy.contains(locator + ' > tbody > tr > th', targetColumn).invoke('index').then((targetColumnIndex) => {
        cy.contains(locator + ' > tbody > tr > th', columnReference).invoke('index').then((columnReferenceIndex) => {
            cy.get(locator + ' > tbody > tr > td:nth-child(' + (columnReferenceIndex + 1) + ')').then(($columnElements) => {
                let rowReferenceIndex = Cypress._.map($columnElements, 'innerText').indexOf(rowReference)
                cy.get(locator + ' > tbody > tr:nth-child(' + (rowReferenceIndex + 2) + ') > td:nth-child(' + (targetColumnIndex + 1) + ')').contains(expectedValue)
            })
        })
    })
})

/*****************************************************
 * Command: GetTestDataSet
 * Description: Gets Test Data for the specified Scenario 
 *
 * @author: hstone
 * @param {string} testScenario Scenario Name (Collection Name)
 * @returns {JSON} Query Result in JSON
 *****************************************************/
Cypress.Commands.add('GetTestDataSet', (testScenario) => {

    if(Cypress.isBrowser('chrome')){
        return cy.task('GetDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_CHROME'), collection:testScenario })
    }
    else if(Cypress.isBrowser('edge')){
        return cy.task('GetDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_EDGE'), collection:testScenario })
    }
    else if(Cypress.isBrowser('firefox')){
        return cy.task('GetDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_FIREFOX'), collection:testScenario })
    }
    else {
        cy.log('**CURRENT BROWSER USED IS NOT PART OF THE REQUIREMENTS!!! PLEASE CHECK EXECUTION BROWSER CONFIGURATIONS.**')
    }
})

/*****************************************************
 * Command: UpdateTestData
 * Description: Gets Test Data for the specified Scenario 
 *
 * @author: hstone
 * @param {string} testScenario Scenario Name (Collection Name)
 * @param {string} objectId Target Collection Object ID
 * @param {JSON} newData New Test Data Object
 *****************************************************/
Cypress.Commands.add('UpdateTestData', (testScenario, objReference, newData) => {

    if(Cypress.isBrowser('chrome')){
        cy.task('UpdateDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_CHROME'), collection:testScenario, objectReference:objReference, newData:newData})
    }
    else if(Cypress.isBrowser('edge')){
        cy.task('UpdateDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_EDGE'), collection:testScenario, objectReference:objReference, newData:newData})
    }
    else if(Cypress.isBrowser('firefox')){
        cy.task('UpdateDbCollectionData', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_FIREFOX'), collection:testScenario, objectReference:objReference, newData:newData})    
    }
    else {
        cy.log('**CURRENT BROWSER USED IS NOT PART OF THE REQUIREMENTS!!! PLEASE CHECK EXECUTION BROWSER CONFIGURATIONS.**')
    }
})

/*****************************************************
 * Command: GetTestDataObject
 * Description: Gets Test Data for the specified Scenario 
 *
 * @author: hstone
 * @param {string} testScenario Scenario Name (Collection Name)
 * @param {string} objectLabel Target Object Label to query
 *****************************************************/
 Cypress.Commands.add('GetTestDataObject', (testScenario, objectLabel) => {

    if(Cypress.isBrowser('chrome')){
        cy.task('GetDbCollectionObject', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_CHROME'), collection:testScenario, objectLabel:objectLabel })
    }
    else if(Cypress.isBrowser('edge')){
        cy.task('GetDbCollectionObject', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_EDGE'), collection:testScenario, objectLabel:objectLabel })
    }
    else if(Cypress.isBrowser('firefox')){
        cy.task('GetDbCollectionObject', { url:Cypress.env('DB_HOST'), database:Cypress.env('DB_UI_FIREFOX'), collection:testScenario, objectLabel:objectLabel })    
    }
    else {
        cy.log('**CURRENT BROWSER USED IS NOT PART OF THE REQUIREMENTS!!! PLEASE CHECK EXECUTION BROWSER CONFIGURATIONS.**')
    }
})