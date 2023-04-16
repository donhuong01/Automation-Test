import elems_GiftModuleSetting from '../../Elements/FS-031 Gift/GiftModuleSetting'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_Picker from '../../Elements/Common/Picker'
class GiftModuleSetting {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

    /*****************************************************
     * Method: FilloutGiftModuleSetting 
     * Description: This function will fill out Gift Mofule setting form
     * @param {string} GiftRedpLetterPeriod
     * @param {string} SendGift pass Yes/No
     * @param {string} SendReminderBefore
     *****************************************************/
    FilloutGiftModuleSetting(GiftRedpLetterPeriod, SendGift, SendReminderBefore) {

        cy.xpath(elems_GiftModuleSetting.TXT_GIFTREDEMPTIONLETTER).clear()
        cy.EnterText(elems_GiftModuleSetting.TXT_GIFTREDEMPTIONLETTER, GiftRedpLetterPeriod)

        if (SendGift === "Yes")
        {
            cy.Click(elems_GiftModuleSetting.CHK_SENDGIFTREDEMPTIONLETR)
        }

        cy.xpath(elems_GiftModuleSetting.TXT_SENDREMINDERLETTER).clear()
        cy.EnterText(elems_GiftModuleSetting.TXT_SENDREMINDERLETTER, SendReminderBefore)
        

    }
    

    /*****************************************************
     * Method: AddSourceChannel 
     * Description: This function will add source channel
     *  @param {string} SourceChannel
     *****************************************************/
    AddSourceChannel(SourceChannel) {

        cy.SelectPickerItem(elems_GiftModuleSetting.BTN_ADDSOURCECHANNEL, SourceChannel)

    }
    /*****************************************************
     * Method: Save
     * Description: This function Click on Save button
     *****************************************************/
    Save() {

        cy.Click(elems_GiftModuleSetting.BTN_SAVE)

    }
    /*****************************************************
     * Method: Cancel 
     * Description: This function Click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_GiftModuleSetting.BTN_CANCEL)

    }

    /*****************************************************
     * Method: VerifyNotificationMessage 
     * Description: This function will verify notification msg
     *****************************************************/
    VerifyNotificationMessage(msg) {

        cy.VerifyElementText(elems_Picker.MSG_NOTIFICATION, msg)

    }
}
export default new GiftModuleSetting