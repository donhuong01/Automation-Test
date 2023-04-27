/*****************************************************
 * Page Function: Run/Test Application Settings Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import ApplicationSettings from '../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Application Settings/ApplicationSettings'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

const ApplicationSetting = () => {

describe('[TS19] Application Settings Management', function () {

    // Page Definitions
    const AppSettings = new ApplicationSettings()

    it('[TC01] Update Application Settings and Cancel', function () {

        cy.visit('/admin/applicationSettings')
        cy.wait(5000)
        
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
    
        // Fill Out Content Clauses Marketing Cosent Fields
        AppSettings.fillOutContentClausesMarketingCosent(
                    
            data.ApplicationSettings.ContentClauses.marketingConsent, 

            data.ApplicationSettings.ContentClauses.marketingConsentStyleProperty,
            data.ApplicationSettings.ContentClauses.marketingConsentStyleValue, 

            data.ApplicationSettings.ContentClauses.marketingCosentFontStyle, 
            data.ApplicationSettings.ContentClauses.marketingCosentFontValue, 

        )

        // Fill Out Content Clauses Marketing Cosent Fields
        AppSettings.fillOutContentClausesCommubicationCosent(
            
            data.ApplicationSettings.ContentClauses.CommunicationConsent, 

            data.ApplicationSettings.ContentClauses.CommunicationConsentStyleProperty,
            data.ApplicationSettings.ContentClauses.CommunicationConsentStyleValue, 

            data.ApplicationSettings.ContentClauses.CommunicationConsentFontStyle, 
            data.ApplicationSettings.ContentClauses.CommunicationConsentFontValue, 

        )
        
        // Cancel Changes
        AppSettings.cancel(data.ApplicationSettings.expectedPage)
    })

    it('[TC02] Update Application Settings and save', function () {

        cy.visit('/admin/applicationSettings').wait(2000)
        
        // //Fill Out Application Settings
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
        
        // Fill Out Content Clauses Marketing Cosent Fields
        AppSettings.fillOutContentClausesMarketingCosent(
            
            data.ApplicationSettings.ContentClauses.marketingConsent, 

            data.ApplicationSettings.ContentClauses.marketingConsentStyleProperty,
            data.ApplicationSettings.ContentClauses.marketingConsentStyleValue, 

            data.ApplicationSettings.ContentClauses.marketingCosentFontStyle, 
            data.ApplicationSettings.ContentClauses.marketingCosentFontValue, 

        )

        // Fill Out Content Clauses Marketing Cosent Fields
        AppSettings.fillOutContentClausesCommubicationCosent(
            
            data.ApplicationSettings.ContentClauses.CommunicationConsent, 

            data.ApplicationSettings.ContentClauses.CommunicationConsentStyleProperty,
            data.ApplicationSettings.ContentClauses.CommunicationConsentStyleValue, 

            data.ApplicationSettings.ContentClauses.CommunicationConsentFontStyle, 
            data.ApplicationSettings.ContentClauses.CommunicationConsentFontValue, 

        )

        //Select Font Size
        
        // AppSettings.BackToOrignalState()

        // Save Changes
        AppSettings.save()
        
        //Verify Success Message
        AppSettings.VerifyNotificationMsg('Record has been saved successfully.')
    })


})

}

export default ApplicationSetting