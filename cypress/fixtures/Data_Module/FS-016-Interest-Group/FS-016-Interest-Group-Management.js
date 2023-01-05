const Data = {

    IGMembershipListing: {
        IGMian: 'Badminton Social Group',
        InterestGroup: 'CORTEX',
        IGMembershipID: 'G1000000011',
        SAFRAMembershipID: 'A30000487',
        Status: 'Active',
        CustomerName: 'Chris Ng',
        ExpiryDateFrom: '18-Nov-2022',
        ExpiryDateTo: '17-Dec-2022',
        InitialJoinDate: '18-Nov-2022',
        ExpiryDate: '17-Dec-2022',
        MembershipStatusReason: 'Renewal'

    },
    IGMembershipRegistration: {
        PrincipalName: '',
        PrincipalEmail: '',
        CustomerNRICFull: '',
        CustomerNRIC: '',


    },
    IGMembershipRenewal: {

    },
    IGMembershipTermination: {

        ChargeType: '',
        Amount: 20,
        Reason: 'waive',
        CreditType: 'Credit',
        AmountType: 'Full Amount',
        CreditReason: 'Credit',
        CalculatePayment: 'CHECK',
        Maintenace: 'Terminate',
        TerminatedBy: 'Customer',
        TerminationDate: '30-Nov-2022',
        TerminationReason: 'Termination',
        CustomerName: 'Auto-User9973792',
        Status: 'InActive',
        MemID: 'A30001188'




    },
    IGMembershipWaiver: {

        ChargeType: '',
        Amount: 20,
        Reason: 'waive',
        CreditType: 'Credit',
        AmountType: 'Full Amount',
        CreditReason: 'Credit',
        CalculatePayment: 'CHECK',
        Maintenace: 'Terminate',
        TerminatedBy: 'Customer',
        TerminationDate: '30-Nov-2022',
        TerminationReason: 'Termination',


    },
    IGMmebershipReinstatement: {
        TermStartDate: '06-Dec-2022',
        MembershipTerm: '3'
    },

    IGMembershipDeactivation: {
        IGName: 'Auto-Test',
        DeactivationDate: '07-Dec-2022',
        DReason: 'Deactivate',
        Status: 'Deactivated'
    },
    BatchIGRegistration: {
        BatchName: 'Auto-Sample-Batch' + Math.floor(Math.random() * 100),
        BatchType: 'Interest Group',
        InterestGroup: 'BITEZ',
        EffectiveDate: '12-Dec-2022',
        IGLocation: 'All Locations',
        IndemityWaiver: 'CHECK',
        AgreeTC: 'CHECK',
        MemberId: 'A30001142',
        DateOfBirth: '31-Dec-1979'

    }


}
export default Data