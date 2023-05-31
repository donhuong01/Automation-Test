const Data = {

    IGMembershipListing: {
        IGMian: 'Badminton Social Group',
        InterestGroup: 'BITEZ',
        IGMembershipID: 'G1000000225',
        SAFRAMembershipID: 'A300001194',
        Status: 'Active',
        CustomerName: 'Rowen Ming',
        ExpiryDateFrom: '18-Nov-2022',
        ExpiryDateTo: '17-Dec-2022',
        InitialJoinDate: '05-Jan-2023',
        ExpiryDate: '05-Jan-2026',
        MembershipStatusReason: 'New'

    },
    IGMembershipRegistration: {
        CustomerNRICFull: 'S6797328C',
        NRICLast4Digit: '328C',
        IGMainSelectionBox: "QA Test IG Main 1",
        IGSelection: "IG Detail Test 1",
        IGLocationSelection: "All Locations",
        MembershipTenure: "5",
        EffectiveDate: "26-May-2023",
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
        TerminationDate: '31-May-2023',  //Must be the last day of the current month
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
        TermStartDate: '25-May-2023',
        MembershipTerm: '3',
        MemID: 'A300001854',  // Must be InActive ( Terminated )
        CustomerName: 'Test User 8310150',
        Status: 'InActive'
    },

    IGMembershipDeactivation: {
        IGName: 'SAFRA BITEZ331',
        DeactivationDate: '26-May-2023',
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