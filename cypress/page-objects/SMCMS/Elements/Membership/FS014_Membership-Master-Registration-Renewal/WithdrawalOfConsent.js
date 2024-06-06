class elems_WithdrawalOfConsent {

    static PersonalInformation = {
        CHK_NATIONALITY : '//input[@id="checkNtionality"]',
        CHK_FULLNAME : '//input[@id="checkFullName"]',
        CHK_GENDER : '//input[@id="checkGender"]',
        CHK_MARITALSTATUS : '//input[@id="checkMaritalStatus"]',
        CHK_DATEOFBIRTH : '//input[@id="checkDateOfBirth"]',
        CHK_PROFILEPICTURE : '//input[@id="checkProfilePicture"]'
    }

    static ContactInformation = {
        CHK_HANDPHONE : '//input[@id="checkHandphone"]',
        CHK_HOMENUMBER : '//input[@id="checkHomeNumber"]',
        CHK_EMERGENCYCONTACT : '//input[@id="checkEmergencyContact"]',
        CHK_EMAILADDRESS : '//input[@id="checkEmailAddress"]'
    }

    static AddressInformation = {
        CHK_HOMEADDRESS : '//input[@id="checkHomeAddress"]',
        CHK_MAILINGADDRESS : '//input[@id="checkMailingAddress"]'
    }

    static BTN_WITHDRAW = '//span[text()="Withdraw"]'
    static BTN_PURGEMEMBERDATA = '//span[text()="Purge Member Data"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
}

export default elems_WithdrawalOfConsent