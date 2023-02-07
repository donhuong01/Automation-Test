import elems_SRPModuleSetting from '../../Elements/FS-036-SRP/SRPModuleSetting'

class SRP_ModuleSetting {

    /*****************************************************
     * Method: Save 
     * Description: This function click on save button
     *****************************************************/
    Save() {

        cy.Click(elems_SRPModuleSetting.BTN_SAVE)

    }

    /*****************************************************
     * Method: Cancel 
     * Description: This function click on cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_SRPModuleSetting.BTN_CANCEL)

    }
    /*****************************************************
     * Method: ExpirationSetting 
     * Description:
     *****************************************************/
    ExpirationSetting(GrandDraw) {

        cy.xpath(elems_SRPModuleSetting.TXT_GRANDDRAWCHANCEPEREXPIREDPOINTS).clear()
        cy.EnterText(elems_SRPModuleSetting.TXT_GRANDDRAWCHANCEPEREXPIREDPOINTS, GrandDraw)

    }
    /*****************************************************
     * Method: AwardSAFRAPointPerSGD 
     * Description:
     *****************************************************/
    AwardSAFRAPointPerSGD(Value) {

        cy.xpath(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTSPERSGD1).clear()
        cy.EnterText(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTSPERSGD1, Value)

    }
    /*****************************************************
     * Method: DeductSAFRAPointPerSGD 
     * Description:
     *****************************************************/
    DeductSAFRAPointPerSGD(Value) {

        cy.xpath(elems_SRPModuleSetting.TXT_DEDUCTSAFRAPOINTSPERSGD1).clear()
        cy.EnterText(elems_SRPModuleSetting.TXT_DEDUCTSAFRAPOINTSPERSGD1, Value)

    }
    /*****************************************************
     * Method: MemberReferralSetting 
     * Description:
     *****************************************************/
    MemberReferralSetting(EnableMember, AwardSAFRAPointsNewMember) {

        cy.TickCheckBox(elems_SRPModuleSetting.CHK_ENABLEMEMBER, EnableMember)
        cy.xpath(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTWHENANEWMEMBERISREGISTERED).clear()
        cy.EnterText(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTWHENANEWMEMBERISREGISTERED, AwardSAFRAPointsNewMember)

    }
    /*****************************************************
     * Method: SRPRedemptionLetterSetting 
     * Description:
     *****************************************************/
    SRPRedemptionLetterSetting(SendRedemptionLetter, SendReminderEmail) {

        cy.TickCheckBox(elems_SRPModuleSetting.CHK_SENDREDEMPTIONLETTERVIAEMAIL, SendRedemptionLetter)
        cy.xpath(elems_SRPModuleSetting.TXT_SENDREMINDEREMAIL).clear()
        cy.EnterText(elems_SRPModuleSetting.TXT_SENDREMINDEREMAIL, SendReminderEmail)

    }
    /*****************************************************
     * Method: SAFRAPointsExpirationSetting 
     * Description: This function fill out SAFRA Points Expiration Setting fields
     * @param {string} GrandDraw
     *****************************************************/
    SAFRAPointsExpirationSetting(GrandDraw, AwardSAFRAPointsPerSGD, DeductSAFRAPoints, EnableMember,
        AwardSAFRAPointsNewMember, SendRedemptionLetter, SendReminderEmail) {

        cy.EnterText(elems_SRPModuleSetting.TXT_GRANDDRAWCHANCEPEREXPIREDPOINTS, GrandDraw)
        cy.EnterText(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTSPERSGD1, AwardSAFRAPointsPerSGD)
        cy.EnterText(elems_SRPModuleSetting.TXT_DEDUCTSAFRAPOINTSPERSGD1, DeductSAFRAPoints)
        cy.TickCheckBox(elems_SRPModuleSetting.CHK_ENABLEMEMBER, EnableMember)
        cy.EnterText(elems_SRPModuleSetting.TXT_AWARDSAFRAPOINTWHENANEWMEMBERISREGISTERED, AwardSAFRAPointsNewMember)
        cy.TickCheckBox(elems_SRPModuleSetting.CHK_SENDREDEMPTIONLETTERVIAEMAIL, SendRedemptionLetter)
        cy.EnterText(elems_SRPModuleSetting.TXT_SENDREMINDEREMAIL, SendReminderEmail)

    }
}
export default new SRP_ModuleSetting