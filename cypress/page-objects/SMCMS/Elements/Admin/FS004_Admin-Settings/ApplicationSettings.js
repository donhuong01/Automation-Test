class elems_ApplicationSettings {

    static PasswordPolicyForOnlineAccount = {
        TXT_MINIMUMLENGTH : '//input[@id="txtMinimumLength"]',
        CHK_ENFORCESPECIALCHARACTER : '//input[@id="checkEnforceSpecialCharacter"]',
        TXT_ENFORCEPASSWORDHISTORY : '//input[@id="txtEnforcePasswordHistory"]',
        TXT_MINPASSWORDAGE : '//input[@id="txtMinPasswordAge"]',
        TXT_MAXPASSWORDAGE : '//input[@id="txtMaxPasswordAge"]',
        TXT_NUMOFINACTIVEDAYS : '//input[@id="txtNumberOfInactiveDays"]'
    }

    static LoginPolicy = {
        TXT_MAXFAILLOGINATTEMPTS : '//input[@id="txtMaximumFailedLoginAttempts"]'
    }

    static ContentClauses = {
        TXTAREA_MARKETINGCONSENT = '//textarea[@id="areaMarketingConsent"]',
        TXTAREA_COMMUNICATIONCONSENT = '//textarea[@id="areaCommunicationConsent"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_ApplicationSettings