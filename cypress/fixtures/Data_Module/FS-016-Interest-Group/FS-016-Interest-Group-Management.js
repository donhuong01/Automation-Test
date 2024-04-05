const Data = {

    IGMembershipListing: {
        IGMian: 'IG Main QA Testing 1',
        InterestGroup: 'Test IG Details',
        IGMembershipID: 'G1000000503',
        SAFRAMembershipID: 'A300006812',
        Status: 'InActive',
        CustomerName: 'Test User 649E',
        ExpiryDateFrom: '02-Jan-2024',
        ExpiryDateTo: '17-Mar-2024',
        InitialJoinDate: '02-Feb-2024',
        ExpiryDate: '17-Feb-2024',
        MembershipStatusReason: 'Term Expired'

    },
    IGMembershipRegistration: {
        CustomerNRICFull: 'S6797328C',
        NRICLast4Digit: '328C',
        IGMainSelectionBox: "IG Main QA Testing 1",
        IGSelection: "Test IG Details",
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
        TerminationDate: '30-Jun-2023',  //Must be the last day of the current month
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
        DeactivationDate: '04-Apr-2024',
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