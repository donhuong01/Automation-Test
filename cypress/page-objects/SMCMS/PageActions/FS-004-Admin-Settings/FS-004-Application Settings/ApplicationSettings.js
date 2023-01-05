import elems_ApplicationSettings from '../../../Elements/Admin/FS004_Admin-Settings/ApplicationSettings'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker'

class ApplicationSettings {

    /*****************************************************
     * Method: fillOutApplicationSettings
     * Description: Fills-out Application Settings Form
     *
     * @param {string} minimumPasswordLength Minimum Password Length
     * @param {string} enforceSpecialChar Enforce Special Character
     * @param {string} enforceCapitalAndSmallChar Enforce Capital and Small Character
     * @param {string} enforceNumber Enforce Number
     * @param {string} enforcePasswordHistory Enforce Password History
     * @param {string} minimumPasswordAge Minimum Password Age
     * @param {string} maximumPasswordAge Maximum Password Age
     * @param {string} numOfInactiveDaysBeforeLockOut Number of inactive days before locking out
     * @param {string} maximumFailedLoginAttempts Maximum Failed Login Attempts
     *****************************************************/
    fillOutApplicationSettings({ minimumPasswordLength, enforceSpecialChar, enforceCapitalAndSmallChar, enforceNumber, enforcePasswordHistory, minimumPasswordAge, maximumPasswordAge, numOfInactiveDaysBeforeLockOut, maximumFailedLoginAttempts }) {

        // Enter Minimum Password Length
        if (minimumPasswordLength !== undefined) {
            cy.xpath(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MINIMUMPASSWORDLENGTH).clear()
            cy.EnterText(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MINIMUMPASSWORDLENGTH, minimumPasswordLength)
        }

        // Set Enforce Special Character Checkbox
        if (enforceSpecialChar !== undefined) {
            cy.TickCheckBox(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.CHK_ENFORCESPECIALCHARACTER, enforceSpecialChar)
        }

        // Set Enforce Capital and Small Character Checkbox
        if (enforceCapitalAndSmallChar !== undefined) {
            cy.Click(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.CHK_ENFORCECAPITALANDSMALLCHAR)
            cy.TickCheckBox(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.CHK_ENFORCECAPITALANDSMALLCHAR, enforceCapitalAndSmallChar)
        }

        // Set Enforce Number Checkbox
        if (enforceNumber !== undefined) {
            cy.Click(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.CHK_ENFORCENUMBER)
            cy.TickCheckBox(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.CHK_ENFORCENUMBER, enforceNumber)
        }

        // Enter Enforce Password History
        if (enforcePasswordHistory !== undefined) {
            cy.xpath(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_ENFORCEPASSWORDHISTORY).clear()
            cy.EnterText(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_ENFORCEPASSWORDHISTORY, enforcePasswordHistory)
        }

        // Enter Minimum Password Age
        if (minimumPasswordAge !== undefined) {
            cy.xpath(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MINPASSWORDAGE).clear()
            cy.EnterText(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MINPASSWORDAGE, minimumPasswordAge)
        }

        // Enter Maximum Password Age
        if (maximumPasswordAge !== undefined) {
            cy.xpath(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MAXPASSWORDAGE).clear()
            cy.EnterText(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_MAXPASSWORDAGE, maximumPasswordAge)
        }

        // Enter Number of inactive days before locking out
        if (numOfInactiveDaysBeforeLockOut !== undefined) {
            cy.xpath(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_NUMOFINACTIVEDAYS).clear()
            cy.EnterText(elems_ApplicationSettings.PasswordPolicyForOnlineAccount.TXT_NUMOFINACTIVEDAYS, numOfInactiveDaysBeforeLockOut)
        }

        // Enter Maximum Failed Login Attempts
        if (maximumFailedLoginAttempts !== undefined) {
            cy.xpath(elems_ApplicationSettings.LoginPolicy.TXT_MAXFAILLOGINATTEMPTS).clear()
            cy.EnterText(elems_ApplicationSettings.LoginPolicy.TXT_MAXFAILLOGINATTEMPTS, maximumFailedLoginAttempts)
        }

        // Error Handling
        if (minimumPasswordLength === undefined
            && enforceSpecialChar === undefined
            && enforceCapitalAndSmallChar === undefined
            && enforceNumber === undefined
            && enforcePasswordHistory === undefined
            && minimumPasswordAge === undefined
            && maximumPasswordAge === undefined
            && numOfInactiveDaysBeforeLockOut === undefined
            && maximumFailedLoginAttempts === undefined
        ) {
            throw new Error("ApplicationSettings.fillOutApplicationSettings Error!!.\
                                Please provide at least one argument.")
        }
    }


    /*****************************************************
     * Method: fillOutContentClauses
     * Description: Fills-out Application Settings Form - Content Clauses Section
     *
     * @param {string} marketingConsent Marketing Consent
     * @param {string} communicationConsent Communication Consent
     * @param {string} marketingConsentStyleProperty Marketing Consent - Style Property
     * @param {string} marketingConsentStyleValue Marketing Consent - Style Value
     * @param {string} commConsentStyleProperty Communication Consent - Style Property
     * @param {string} commConsentStyleValue Communication Consent - Style Value
     *****************************************************/
    fillOutContentClauses({ marketingConsent, marketingConsentStyleProperty, marketingConsentStyleValue, communicationConsent, commConsentStyleProperty, commConsentStyleValue }) {

        // Input Marketing Consent
        if (marketingConsent !== undefined) {

            // Clear field
            cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div/p').clear()

            // Edit text format
            if (marketingConsentStyleProperty !== undefined && marketingConsentStyleValue !== undefined) {

                // For Toolbar Buttons
                if (marketingConsentStyleProperty.toUpperCase() !== 'BUTTON') {
                    cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT, marketingConsentStyleProperty, marketingConsentStyleValue)
                }

                // For Dropdown Text Formatting
                else if (marketingConsentStyleProperty.toUpperCase() === 'BUTTON') {
                    cy.StyleRichTextButtons(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT, marketingConsentStyleProperty, marketingConsentStyleValue)
                }
            }

            // Enter Marketing Consent
            cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div/p').type(marketingConsent)
        }

        // Input Communication Consent
        if (communicationConsent !== undefined) {

            // Clear field
            cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div/p').clear()

            // Edit text format
            if (commConsentStyleProperty !== undefined && commConsentStyleValue !== undefined) {

                // For Toolbar Buttons
                if (commConsentStyleProperty.toUpperCase() !== 'BUTTON') {
                    cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT, commConsentStyleProperty, commConsentStyleValue)
                }

                // For Dropdown Text Formatting
                else if (commConsentStyleProperty.toUpperCase() === 'BUTTON') {
                    cy.StyleRichTextButtons(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT, commConsentStyleProperty, commConsentStyleValue)
                }
            }

            // Enter Communication Consent
            cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div/p').type(communicationConsent)
        }

        // Error Handling
        if (marketingConsent === undefined
            && communicationConsent === undefined
        ) {
            throw new Error("ApplicationSettings.fillOutContentClauses Error!!.\
                                Please provide at least one argument.")
        }
    }


    fillOutContentClausesMarketingCosent(marketingConsent, CommunicationConsentStyleProperty, CommunicationConsentStyleValue, CommunicationConsentFontProperty, CommunicationConsentFontValue) {

        cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div').clear()

        if (CommunicationConsentStyleProperty !== undefined && CommunicationConsentStyleValue !== undefined) {


            cy.StyleRichTextButtons(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT, CommunicationConsentStyleProperty, CommunicationConsentStyleValue)

        }

        //Select Font Property
        cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT, CommunicationConsentFontProperty, CommunicationConsentFontValue)

        cy.wait(2000)
        // Enter Marketing Consent Text
        cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div').type(marketingConsent)

    }

    fillOutContentClausesCommubicationCosent(CommunicationConsent, marketingConsentStyleProperty, marketingConsentStyleValue, marketingConsentFontProperty, marketingConsentFontValue) {

        cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div').clear()

        if (marketingConsentStyleProperty !== undefined && marketingConsentStyleValue !== undefined) {


            cy.StyleRichTextButtons(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT, marketingConsentStyleProperty, marketingConsentStyleValue)

        }

        //Select Font Property
        cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT, marketingConsentFontProperty, marketingConsentFontValue)

        cy.wait(2000)
        // Enter Marketing Consent Text
        cy.xpath(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT + '//iframe').its('0.contentDocument.body').then(cy.wrap).xpath('/html/body/div').type(CommunicationConsent)

    }



    /*****************************************************
     * Method: BackToOrignalState
     * Description: Back to orignal state
     *****************************************************/
    BackToOrignalState() {

        cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_MARKETINGCONSENT, 'Marketing Consent', '4 (14pt)')
        cy.StyleRichText(elems_ApplicationSettings.ContentClauses.RICHTXT_COMMUNICATIONCONSENT, 'Communication Consent', '4 (14pt)')
    }
    /*****************************************************
     * Method: save
     * Description: Save Application Settings
     *****************************************************/
    save() {
        cy.Click(elems_ApplicationSettings.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Application Settings')
    }

    /*****************************************************
     * Method: cancel
     * Description: Cancel Application Settings
     * 
     * @param {string} expectedPage Expected Page
     *****************************************************/
    cancel(expectedPage) {
        cy.Click(elems_ApplicationSettings.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }

    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
    VerifyNotificationMsg(Msg) {

        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
        cy.wait(2000)
    }
}

export default ApplicationSettings