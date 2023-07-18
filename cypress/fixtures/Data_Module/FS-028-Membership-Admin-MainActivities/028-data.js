const data = {
    checkin: {
        type: '',
        value: '',
        value_2: '',
    },
    memberinfo: {

    },
    Deferment: {
        Name1: 'XXXXX',
        Name2: 'XXXXX',
        MemberId1: 'A300000437',
        MemberId2: 'A300000613',
        NRIC1: '320A',
        NRIC2: '346I',
        ReasonCode: 'OTHERS',
        Remarks: 'Deferment Please',
        DefermentPeriod: '1',
        StartMonth: '01-Aug-2023',
        EndDate: '01-Sep-2023'

    },
    DefermentMemberListing: {
        Name1: 'Test User 961',
        Name2: 'SP Test User 940',
        MemberId1: 'A300000379',
        MemberId2: 'A300000380',
        NRIC1: '961F',
        NRIC2: '940J',
    },

    memberinfo: {
        memberId: "A300000436",
        memberName: "XXXXX",
        NRIC: "563A"

    },
    suspensionForm: {
        suspensionRequestId: "M-SUS-100000010",
        StartDate: "1-Oct-2022",
        EndDate: "01-Nov-2022",
        Remarks: "Suspension Release Request",
        ReleaseDate: "02-Feb-2022",
        ReasonCode: 'SUSPENSE',
        WorkflowName: "Membership Suspension Approval Workflow",
        ApprovalOutcome: "Approve",
        TaskName: 'Approval',
        EarlyReleaseDate: '01-Nov-2022',
        RWorkflowName: 'Membership Suspension Release Approval Workflow'

    },

    // Membership Deceased Confirmation Popup
    MembershipDeceased: {

        MemberListing: {
            memberId: 'A30000012',
            maintenanceOperation: 'Decease',
            confirmationCheckbox: 'yes'
        },

        title: 'Membership Deceased Confirmation',
        content: 'Are you sure you want to "Deceased" the member?',
    },

    //Batch membership Termination
    MemberListing: {
        member1: 'A30000012',
        member2: 'A30000014',
        member3: 'A30000019'
    },

    BatchMemberTerminateConfirm: {
        title: 'Membership Termination Confirmation',
        content: 'Are you sure you want to terminate the selected members?'
    },

    // Member Reinstatement
    memberinfo: {
        member: 'A300000467'
    },
    MemberReinstateConfirm: {
        title: 'Membership Reinstatement Confirmation',
        content: 'Are you sure you want to reinstate the member?'
    },

    // membership waiver form
    Waiver: {
        Name1: 'Test User 46',
        Name2: 'Customer 975A',
        MemberId1: 'A300000431',
        MemberId2: 'A300000337',
        NRIC1: '624E',
        NRIC2: '666C',
        ReasonCode: 'Others',
        Remarks: 'Waiver Please',
        WaiverPeriod: '2',
        StartMonth: '1-Jan-2023',
        EndDate: '01-Mar-2023'

    },
    MemberListing: {
        Name1: 'Test User 46',
        Name2: 'Customer 975A',
        MemberId1: 'A300000431',
        MemberId2: 'A300000337',
        NRIC1: '611J',
        NRIC2: '	975A'
    },
    // Membership Resignation Request
    MemberResignationRequest: {
        ResignType: "Immediate Resign",
        ReasonCode: "NOT USING FACILITIES",
        Remark: "Test Resign",
        Status: "New",
        TaskName: "MEM_RESIGNATION_WF",
        WorkflowName: "Membership Resignation Approval Workflow",
        ApprovalOutcome: "Approve"

    }

}



export default data 