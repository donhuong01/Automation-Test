/*****************************************************
 * Page Function: Run/Test Application Settings Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import ApplicationSettings from '../../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Application Settings/ApplicationSettings'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS19] Application Settings Management', function () {

    // Page Definitions
    const AppSettings = new ApplicationSettings()

    it('[TC01] Update Application Settings', function () {

        // Visist Application setting form
        cy.visit('/admin/applicationSettings').wait(5000)
        
        //Fill Out Application Settings
        AppSettings.fillOutApplicationSettings({
            minimumPasswordLength : data.ApplicationSettings.minimumPasswordLength,
            enforceSpecialChar : data.ApplicationSettings.enforceSpecialChar,
            enforceCapitalAndSmallChar : data.ApplicationSettings.enforceCapitalAndSmallChar,
            enforceNumber : data.ApplicationSettings.enforceNumber,
            enforcePasswordHistory : data.ApplicationSettings.enforcePasswordHistory,
            minimumPasswordAge : data.ApplicationSettings.minimumPasswordAge,
            maximumPasswordAge : data.ApplicationSettings.maximumPasswordAge,
            numOfInactiveDaysBeforeLockOut : data.ApplicationSettings.numOfInactiveDaysBeforeLockOut,
            maximumFailedLoginAttempts : data.ApplicationSettings.maximumFailedLoginAttempts
        })
        
        // Fill Out Content Clauses Fields
        AppSettings.fillOutContentClauses({
            marketingConsent : data.ApplicationSettings.ContentClauses.marketingConsent, 
            marketingConsentStyleProperty : data.ApplicationSettings.ContentClauses.marketingConsentStyleProperty, 
            marketingConsentStyleValue : data.ApplicationSettings.ContentClauses.marketingConsentStyleValue, 
            
            communicationConsent : data.ApplicationSettings.ContentClauses.communicationConsent, 
            commConsentStyleProperty : data.ApplicationSettings.ContentClauses.commConsentStyleProperty, 
            commConsentStyleValue : data.ApplicationSettings.ContentClauses.commConsentStyleValue
        })

        // Save Changes
        //AppSettings.save()
    })

    it('[TC02] Update Application Settings and Cancel', function () {

        // Visit Application seting form 
        cy.visit('/admin/applicationSettings')
        
        //Fill Out Application Settings
        AppSettings.fillOutApplicationSettings({
            minimumPasswordLength : data.ApplicationSettings.minimumPasswordLength,
            enforceSpecialChar : data.ApplicationSettings.enforceSpecialChar,
            enforceCapitalAndSmallChar : data.ApplicationSettings.enforceCapitalAndSmallChar,
            enforceNumber : data.ApplicationSettings.enforceNumber,
            enforcePasswordHistory : data.ApplicationSettings.enforcePasswordHistory,
            minimumPasswordAge : data.ApplicationSettings.minimumPasswordAge,
            maximumPasswordAge : data.ApplicationSettings.maximumPasswordAge,
            numOfInactiveDaysBeforeLockOut : data.ApplicationSettings.numOfInactiveDaysBeforeLockOut,
            maximumFailedLoginAttempts : data.ApplicationSettings.maximumFailedLoginAttempts
        })
        
        // Fill Out Content Clauses Fields
        AppSettings.fillOutContentClauses({
            marketingConsent : data.ApplicationSettings.ContentClauses.marketingConsent, 
            marketingConsentStyleProperty : data.ApplicationSettings.ContentClauses.marketingConsentStyleProperty, 
            marketingConsentStyleValue : data.ApplicationSettings.ContentClauses.marketingConsentStyleValue, 
            
            communicationConsent : data.ApplicationSettings.ContentClauses.communicationConsent, 
            commConsentStyleProperty : data.ApplicationSettings.ContentClauses.commConsentStyleProperty, 
            commConsentStyleValue : data.ApplicationSettings.ContentClauses.commConsentStyleValue
        })

        // Cancel Changes
        AppSettings.cancel(data.ApplicationSettings.expectedPage)
    })
})