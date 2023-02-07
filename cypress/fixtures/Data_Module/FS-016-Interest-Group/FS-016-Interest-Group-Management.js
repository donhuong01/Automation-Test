const Data = {

    IGMembershipListing: {
        IGMian: 'Badminton Social Group',
        InterestGroup: 'BITEZ',
        IGMembershipID: 'G1000000004',
        SAFRAMembershipID: 'A300001793',
        Status: 'Active',
        CustomerName: 'DBS1028',
        ExpiryDateFrom: '18-Nov-2022',
        ExpiryDateTo: '17-Dec-2022',
        InitialJoinDate: '28-Oct-2022',
        ExpiryDate: '27-Jan-2025',
        MembershipStatusReason: 'New'

    },
    IGMembershipRegistration: {
        IGMainSelectionBox: "MOVIEMAX",
        IGSelection: "MOVIEMAX",
        IGLocationSelection: "SAFRA Jurong",
        MembershipTenure: "5",
        EffectiveDate: "30-Nov-2023",
        AgreeWithTermAndCondition: "CHECK",
        AgreeWithIndemnityWaiver: "CHECK",


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
        TerminationDate: '28-Feb-2023',  //Must be the last day of the current month
        TerminationReason: 'Termination',
        CustomerName: 'Test User 46',
        Status: 'InActive',
        MemID: 'A300000431'




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
        MembershipTerm: '3',
        MemID: 'A300001854',  // Must be InActive ( Terminated )
        CustomerName: 'Test User 8310150',
        Status: 'InActive'
    },

    IGMembershipDeactivation: {
        IGName: 'QA Testing',
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