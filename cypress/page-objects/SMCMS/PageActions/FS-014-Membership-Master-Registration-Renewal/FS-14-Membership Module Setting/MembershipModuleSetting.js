import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MembershipModuleSetting from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipModuleSetting'
import elems_Picker from '../../../Elements/Common/Picker'

class MembershipModuleSetting {

    /*****************************************************
     * Method: fillOutDocumentaryProofSettingForm
     * Description: Fills Out Documentary Proof Setting Section of the Form
     *
     * @param {string} MaximumAllowedFile 
     * @param {string} AutoDeleteCheckBox 
     * @param {string} FirstNotification
     * @param {string} SecondNotification
     * @param {string} ThirdNotification
     * @param {string} FinalNotification
     * @param {string} TerminationAfterApplicationDate
     * @param {string} DocumentaryProofUpload
    *****************************************************/
     fillOutDocumentaryProofSetting({MaximumAllowedFile, AutoDeleteCheckBox, FirstNotification, 
                                    SecondNotification, ThirdNotification, FinalNotification, 
                                     TerminationAfterApplicationDate, DocumentaryProofUpload})
        {

        if(MaximumAllowedFile !== undefined)
        {
            cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_MAXIMUMALLOWEDFILESIZE).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_MAXIMUMALLOWEDFILESIZE, MaximumAllowedFile)
        }

        if(AutoDeleteCheckBox !== undefined)
        {
            cy.TickCheckBox(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.CHK_DELETEDOCUMENTS, AutoDeleteCheckBox)
        }

        if(FirstNotification !== undefined)
        {
            // cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_1STNOTIFICATIONAFTER).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_1STNOTIFICATIONAFTER, FirstNotification)
        }

        if(SecondNotification !== undefined)
        {
            // cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_2NDNOTIFICATIONAFTER).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_2NDNOTIFICATIONAFTER, SecondNotification)

        }

        if(ThirdNotification !== undefined)
        {
            // cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_3RDNOTIFICATIONAFTER).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_3RDNOTIFICATIONAFTER, ThirdNotification)

        }

        if(FinalNotification !== undefined)
        {
            // cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_FINALNOTIFICATIONAFTER).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_FINALNOTIFICATIONAFTER, FinalNotification)

        }

        if(TerminationAfterApplicationDate !== undefined)
        {
            cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_TERMINATIONAFTER).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_TERMINATIONAFTER, TerminationAfterApplicationDate)

        }

        if(DocumentaryProofUpload !== undefined)
        {
            cy.xpath(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_DOCUMENTARYPUSL).clear()
            cy.EnterText(elems_MembershipModuleSetting.DOCUMENTARYPROOFSETTING.TXT_DOCUMENTARYPUSL, DocumentaryProofUpload)  

        }

        // Error Handling
        if( MaximumAllowedFile === undefined && 
            AutoDeleteCheckBox === undefined && 
            FirstNotification === undefined && 
            SecondNotification === undefined && 
            ThirdNotification === undefined && 
            FinalNotification === undefined &&
            TerminationAfterApplicationDate === undefined && 
            DocumentaryProofUpload === undefined)
        {
            throw new Error("MembershipModuleSetting.fillOutDocumentaryProofSetting Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutRenewalAdvice
     * Description:Fill Out Renewal Advice Section of the Form
     *
     * @param {string} EnableRenewalAdvice 
     * @param {int} MonthsBeforeSendingRenewal 
     * @param {string} ERenewalPrefixUrl
    *****************************************************/
     fillOutRenewalAdvice({EnableRenewalAdvice, MonthsBeforeSendingRenewal, ERenewalPrefixUrl}){
    
        if(EnableRenewalAdvice !== undefined)
        {
            cy.TickCheckBox(elems_MembershipModuleSetting.RENEWAL.CHK_ENABLEERENWALADVICE, EnableRenewalAdvice)
        }

        if(MonthsBeforeSendingRenewal !== undefined)
        {
            cy.xpath(elems_MembershipModuleSetting.RENEWAL.TXT_NUMBEROFMONTHSBEFORE).clear()
            cy.EnterText(elems_MembershipModuleSetting.RENEWAL.TXT_NUMBEROFMONTHSBEFORE, MonthsBeforeSendingRenewal)  
        }

        if(ERenewalPrefixUrl !== undefined)
        {
            cy.xpath(elems_MembershipModuleSetting.RENEWAL.TXT_ERENWAPREFIX).clear()
            cy.EnterText(elems_MembershipModuleSetting.RENEWAL.TXT_ERENWAPREFIX, ERenewalPrefixUrl)  
        }

        // Error Handling
        if( EnableRenewalAdvice === undefined && 
            MonthsBeforeSendingRenewal === undefined && 
            ERenewalPrefixUrl === undefined )
        {
            throw new Error("MembershipModuleSetting.fillOutRenewalAdvice Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: fillOutSfsSetting
     * Description:Fill Out SAFRA Family Scheme (SFS) Setting Section of the Form
     *
     * @param {string} SfsActivation 
     * @param {string} AdminFeeChargeItem 
     * @param {string} NameFilter
     * @param {string} DescriptionFilter
     * @param {string} CardTypeFilter
     * @param {string} StatusFilter
    *****************************************************/
     fillOutSfsSetting({SfsActivation, AdminFeeChargeItem, NameFilter, DescriptionFilter, CardTypeFilter, StatusFilter}){
    
        if(SfsActivation !== undefined)
        {
            cy.TickCheckBox(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.CHK_SFSACTIVATION, SfsActivation)
        }

        if(AdminFeeChargeItem !== undefined)
        {
            cy.Click(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCK_ADMINISTRATIONFEECHARGEITEM).wait(5000)

            // Name Filter
            if(NameFilter !== undefined){
                cy.xpath(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TXT_NAME).clear()
                cy.EnterText(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TXT_NAME, NameFilter)
            }

            // Description Filter
            if(DescriptionFilter !== undefined){
                cy.xpath(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TXT_DESCRIPTION).clear()
                cy.EnterText(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TXT_DESCRIPTION, DescriptionFilter)
            }

            // Card Type Filter
            if(CardTypeFilter !== undefined){
                cy.SelectDropDownItem(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.DRP_CARDTYPE, CardTypeFilter)
            }

            // Status Filter
            if(StatusFilter !== undefined){
                cy.SelectDropDownItem(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TXT_STATUS, StatusFilter)
            }

            // Search Filters
            cy.Click(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.BTN_SEARCHFILTERS).wait(3000)

            // Tick Item Checkbox and Select
            cy.SelectTableItem(
                elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.PCKPOPUP_ADMINFEECHARGE.TBL_ADMINFEECHARGEPOPUP,
                'Name', AdminFeeChargeItem
            )
    
            cy.Click(elems_Picker.BTN_SELECT)
        }

        // Error Handling
        if( SfsActivation === undefined
            && AdminFeeChargeItem === undefined
        ){
            throw new Error("MembershipModuleSetting.fillOutSfsSetting Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutRefundExcessPayment
     * Description:Fill Out Refund/Excess Payment Section of the Form
     *
     * @param {string} AutoRefundExcessPayment 
     * @param {string} DefaultRefundModeFrontEnd 
     * @param {string} DefaultRefundModeAutoDeduction
    *****************************************************/
     fillOutRefundExcessPayment({AutoRefundExcessPayment, DefaultRefundModeFrontEnd, DefaultRefundModeAutoDeduction}){
    
        if(AutoRefundExcessPayment !== undefined)
        {
            cy.TickCheckBox(elems_MembershipModuleSetting.REFUNEXCESSPAYMENT.CHK_AUTOREFUNDEXCESSPAYMENT, AutoRefundExcessPayment)
        }

        if(DefaultRefundModeFrontEnd !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipModuleSetting.REFUNEXCESSPAYMENT.DRP_DEFAULTREFUNDMODEFE, DefaultRefundModeFrontEnd)  
        }

        if(DefaultRefundModeAutoDeduction !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipModuleSetting.REFUNEXCESSPAYMENT.DRP_DEFAULTREFUNDMODEAD, DefaultRefundModeAutoDeduction)
        }

        if( AutoRefundExcessPayment === undefined && 
            DefaultRefundModeFrontEnd === undefined && 
            DefaultRefundModeAutoDeduction === undefined )
        {
            throw new Error("MembershipModuleSetting.fillOutRefundExcessPayment Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
    * Method: Save
    * Description: Save Membership Module Setting Form
    *****************************************************/
     save(){
        cy.Click(elems_MembershipModuleSetting.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Module Setting')
    }

    /*****************************************************
    * Method: Cancel
    * Description: Cancel Membership Module Setting Form
    *****************************************************/    
     cancel(){
        cy.Click(elems_MembershipModuleSetting.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Check-In')
    } 

    /*****************************************************
    * Method: SFSActivate 
    * Description: Enable SFS 
    * @param {string} Checkbox
    *****************************************************/    
     SFSActivate(Checkbox){
        cy.TickCheckBox(elems_MembershipModuleSetting.SAFRAFAMILYSCHEMESFSSETTING.CHK_SFSACTIVATION, Checkbox)
        cy.Click(elems_MembershipModuleSetting.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Module Setting')
    } 
}

export default MembershipModuleSetting