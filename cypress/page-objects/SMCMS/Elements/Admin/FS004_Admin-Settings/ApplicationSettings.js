class elems_ApplicationSettings {

    static PasswordPolicyForOnlineAccount = {
        TXT_MINIMUMPASSWORDLENGTH : '//input[@id="txtMinimumPasswordLength"]',
        CHK_ENFORCESPECIALCHARACTER : '//input[@id="checkEnforceSpecialCharacter"]',
        CHK_ENFORCECAPITALANDSMALLCHAR : '//input[@id="checkEnforceCapitalAndSmallCharacter"]',
        CHK_ENFORCENUMBER : '//input[@id="checkEnforceNumber"]',
        TXT_ENFORCEPASSWORDHISTORY : '//input[@id="txtEnforcePasswordHistory"]',
        TXT_MINPASSWORDAGE : '//input[@id="txtMinimumPasswordAge"]',
        TXT_MAXPASSWORDAGE : '//input[@id="txtMaximumPasswordAge"]',
        TXT_NUMOFINACTIVEDAYS : '//input[@id="txtinactiveDaysBeforeAccountLock"]'
    }

    static LoginPolicy = {
        TXT_MAXFAILLOGINATTEMPTS : '//input[@id="txtMaximumFailedLoginAttempt"]'
    }

    static ContentClauses = {
        RICHTXT_MARKETINGCONSENT : '//label[text()="Marketing Consent"]/parent::div//span[@class="k-textbox-container"]',
        RICHTXT_COMMUNICATIONCONSENT : '//label[text()="Communication Consent"]/parent::div//span[@class="k-textbox-container"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_ApplicationSettings