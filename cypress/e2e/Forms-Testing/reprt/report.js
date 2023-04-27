import MembershipModuleSetting from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'

describe('Sample test for the page actions', function () {

    const MemModuleSetting = new MembershipModuleSetting()

    it('Update Membership Module Setting Form', function () {

        cy.visit('/membership/moduleSettings').wait(5000)  //Visit web page for membership module Settings 

        // Fill Out Documentary Proof Setting Section
        MemModuleSetting.fillOutDocumentaryProofSetting({
            MaxAllowedFileSize: data.MembershipModuleSetting.DocumentaryProofSetting.MaximumAllowedFile,
            AutoDeleteCheckBox: data.MembershipModuleSetting.DocumentaryProofSetting.AutoDeleteCheckBox,
            FirstNotification: data.MembershipModuleSetting.DocumentaryProofSetting.FirstNotification,
            SecondNotification: data.MembershipModuleSetting.DocumentaryProofSetting.SecondNotification,
            ThirdNotification: data.MembershipModuleSetting.DocumentaryProofSetting.ThirdNotification,
            FinalNotification: data.MembershipModuleSetting.DocumentaryProofSetting.FinalNotification,
            TerminationAfterApplicationDate: data.MembershipModuleSetting.DocumentaryProofSetting.TerminationAfterApplicationDate,
            DocumentaryProofUpload: data.MembershipModuleSetting.DocumentaryProofSetting.DocumentaryProofUpload
        })

        // Fill Out Renewal Advice Section
        MemModuleSetting.fillOutRenewalAdvice({
            EnableRenewalAdvice: data.MembershipModuleSetting.RenewalAdvice.EnableRenewalAdvice,
            MonthsBeforeSendingRenewal: data.MembershipModuleSetting.RenewalAdvice.MonthsBeforeSendingRenewal,
            ERenewalPrefixUrl: data.MembershipModuleSetting.RenewalAdvice.ERenewalPrefixUrl
        })

        // Fill Out SAFRA Family Scheme (SFS) Setting Section
        MemModuleSetting.fillOutSfsSetting({
            SfsActivation: data.MembershipModuleSetting.SfsSetting.SfsActivation,
            AdminFeeChargeItem: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItem,
            NameFilter: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.NameFilter,

            // COMMENTED OUT DUE TO KNOWN ISSUE
            DescriptionFilter: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.DescriptionFilter,
            CardTypeFilter: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.CardTypeFilter,
            StatusFilter: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.StatusFilter
        })

        // Fill Out Refund/Excess Payment Section
        MemModuleSetting.fillOutRefundExcessPayment({
            AutoRefundExcessPayment: data.MembershipModuleSetting.RefundExcessPayment.AutoRefundExcessPayment,
            DefaultRefundModeFrontEnd: data.MembershipModuleSetting.RefundExcessPayment.DefaultRefundModeFrontEnd,
            DefaultRefundModeAutoDeduction: data.MembershipModuleSetting.RefundExcessPayment.DefaultRefundModeAutoDeduction
        })

        // Save form
        MemModuleSetting.save()
    })

    it('Update Membership Module Setting Form and Cancel', function () {

        cy.visit('/membership/moduleSettings')  //Visit web page for membership module Settings 

        // Fill Out Documentary Proof Setting Section
        MemModuleSetting.fillOutDocumentaryProofSetting({
            MaxAllowedFileSize: data.MembershipModuleSetting.DocumentaryProofSetting.MaximumAllowedFile,
            AutoDeleteCheckBox: data.MembershipModuleSetting.DocumentaryProofSetting.AutoDeleteCheckBox,
            FirstNotification: data.MembershipModuleSetting.DocumentaryProofSetting.FirstNotification,
            SecondNotification: data.MembershipModuleSetting.DocumentaryProofSetting.SecondNotification,
            ThirdNotification: data.MembershipModuleSetting.DocumentaryProofSetting.ThirdNotification,
            FinalNotification: data.MembershipModuleSetting.DocumentaryProofSetting.FinalNotification,
            TerminationAfterApplicationDate: data.MembershipModuleSetting.DocumentaryProofSetting.TerminationAfterApplicationDate,
            DocumentaryProofUpload: data.MembershipModuleSetting.DocumentaryProofSetting.DocumentaryProofUpload
        })

        // Fill Out Renewal Advice Section
        MemModuleSetting.fillOutRenewalAdvice({
            EnableRenewalAdvice: data.MembershipModuleSetting.RenewalAdvice.EnableRenewalAdvice,
            MonthsBeforeSendingRenewal: data.MembershipModuleSetting.RenewalAdvice.MonthsBeforeSendingRenewal,
            ERenewalPrefixUrl: data.MembershipModuleSetting.RenewalAdvice.ERenewalPrefixUrl
        })

        // Fill Out SAFRA Family Scheme (SFS) Setting Section
        MemModuleSetting.fillOutSfsSetting({
            SfsActivation: data.MembershipModuleSetting.SfsSetting.SfsActivation,
            AdminFeeChargeItem: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItem,
            NameFilter: data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.NameFilter,

            // COMMENTED OUT DUE TO KNOWN ISSUE
            // DescriptionFilter : data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.DescriptionFilter, 
            // CardTypeFilter : data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.CardTypeFilter, 
            // StatusFilter : data.MembershipModuleSetting.SfsSetting.AdminFeeChargeItemFilters.StatusFilter
        })

        // Fill Out Refund/Excess Payment Section
        MemModuleSetting.fillOutRefundExcessPayment({
            AutoRefundExcessPayment: data.MembershipModuleSetting.RefundExcessPayment.AutoRefundExcessPayment,
            DefaultRefundModeFrontEnd: data.MembershipModuleSetting.RefundExcessPayment.DefaultRefundModeFrontEnd,
            DefaultRefundModeAutoDeduction: data.MembershipModuleSetting.RefundExcessPayment.DefaultRefundModeAutoDeduction
        })

        // Click Cancel button
        MemModuleSetting.cancel()
    })
})