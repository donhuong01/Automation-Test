import SRP_ModuleSetting from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_ModuleSetting'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


// beforeEach(() => {

//     cy.visit('/membership/srp/moduleSetting')
//     cy.wait(1000)
// })

const { GrandDraw, AwardSAFRAPointsNewMember, AwardSAFRAPointsPerSGD, DeductSAFRAPointsPerSGD, EnableMember, SendRedemptionLetter, SendReminderEmail } = data.SRP_Module_Setting

const SRPModuleSetting = () => {

describe('[TS01] FS-036 SRP Module Setting', function () {

    it('[TC01] Updating SAFRA Points Expiration Setting', function () {

        cy.visit('/membership/srp/moduleSetting')
        cy.wait(1000)

        SRP_ModuleSetting.ExpirationSetting(GrandDraw)

        SRP_ModuleSetting.Save()

    })
    it('[TC02] Updating SAFRA Points Awarding Setting', function () {

        cy.visit('/membership/srp/moduleSetting')
        cy.wait(1000)

        SRP_ModuleSetting.AwardSAFRAPointPerSGD(AwardSAFRAPointsPerSGD)

        SRP_ModuleSetting.Save()

    })
    it('[TC03] Updating SAFRA Points Deduction Setting', function () {

        cy.visit('/membership/srp/moduleSetting')
        cy.wait(1000)
        SRP_ModuleSetting.DeductSAFRAPointPerSGD(DeductSAFRAPointsPerSGD)

        SRP_ModuleSetting.Save()

    })
    it('[TC04] Updating Member Referral Setting', function () {

        cy.visit('/membership/srp/moduleSetting')
        cy.wait(1000)
        SRP_ModuleSetting.MemberReferralSetting(EnableMember, AwardSAFRAPointsNewMember)

        SRP_ModuleSetting.Save()

    })
    it('[TC05] Updating SRP Redemption Letter Setting', function () {

        cy.visit('/membership/srp/moduleSetting')
        cy.wait(1000)
        SRP_ModuleSetting.SRPRedemptionLetterSetting(SendRedemptionLetter, SendReminderEmail)

        SRP_ModuleSetting.Save()

    })

})

}

export default SRPModuleSetting