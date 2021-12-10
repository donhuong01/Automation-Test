import Const from "../constants/constants-com.js"

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
        return cy.task('GetDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.CHROME + testScenario 
        })
    }
    else if(Cypress.isBrowser('edge')){
        return cy.task('GetDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.EDGE + testScenario  
        })
    }
    else if(Cypress.isBrowser('firefox')){
        return cy.task('GetDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.FIREFOX + testScenario   
        })
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
        cy.task('UpdateDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.CHROME + testScenario, 
            objectReference: objReference, newData:newData
        })
    }
    else if(Cypress.isBrowser('edge')){
        cy.task('UpdateDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.EDGE + testScenario, 
            objectReference: objReference, 
            newData: newData
        })
    }
    else if(Cypress.isBrowser('firefox')){
        cy.task('UpdateDbCollectionData', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.FIREFOX + testScenario, 
            objectReference: objReference, 
            newData: newData
        })    
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
        return cy.task('GetDbCollectionObject', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.CHROME + testScenario, 
            objectLabel: objectLabel 
        })
    }
    else if(Cypress.isBrowser('edge')){
        return cy.task('GetDbCollectionObject', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.EDGE + testScenario, 
            objectLabel: objectLabel 
        })
    }
    else if(Cypress.isBrowser('firefox')){
        return cy.task('GetDbCollectionObject', { 
            url: Cypress.env('DB_HOST'), 
            database: Cypress.env('DB_UI'), 
            collection: Const.DB_COLLECTION_PREFIX.FIREFOX + testScenario, 
            objectLabel: objectLabel 
        })    
    }
    else {
        cy.log('**CURRENT BROWSER USED IS NOT PART OF THE REQUIREMENTS!!! PLEASE CHECK EXECUTION BROWSER CONFIGURATIONS.**')
    }
})