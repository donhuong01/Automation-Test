import SRP_ModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_ModuleSetting'
import login from '../../../fixtures/login'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    cy.visit('/membership/srp/moduleSetting')
    cy.wait(1000)
})

const { GrandDraw, AwardSAFRAPointsNewMember, AwardSAFRAPointsPerSGD, DeductSAFRAPointsPerSGD, EnableMember, SendRedemptionLetter, SendReminderEmail } = data.SRP_Module_Setting


describe('[TS01] FS-036 SRP Module Setting', function () {

    it('[TC01] Updating SAFRA Points Expiration Setting', function () {


        SRP_ModuleSetting.ExpirationSetting(GrandDraw)

        SRP_ModuleSetting.Save()

    })
    it('[TC02] Updating SAFRA Points Awarding Setting', function () {

        SRP_ModuleSetting.AwardSAFRAPointPerSGD(AwardSAFRAPointsPerSGD)

        SRP_ModuleSetting.Save()

    })
    it('[TC03] Updating SAFRA Points Deduction Setting', function () {

        SRP_ModuleSetting.DeductSAFRAPointPerSGD(DeductSAFRAPointsPerSGD)

        SRP_ModuleSetting.Save()

    })
    it('[TC04] Updating Member Referral Setting', function () {

        SRP_ModuleSetting.MemberReferralSetting(EnableMember, AwardSAFRAPointsNewMember)

        SRP_ModuleSetting.Save()

    })
    it('[TC05] Updating SRP Redemption Letter Setting', function () {

        SRP_ModuleSetting.SRPRedemptionLetterSetting(SendRedemptionLetter, SendReminderEmail)

        SRP_ModuleSetting.Save()

    })

})