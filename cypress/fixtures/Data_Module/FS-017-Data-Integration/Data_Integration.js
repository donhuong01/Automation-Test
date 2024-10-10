const data = {

    IBG_Deduction: {

        MemberId: 'A300002267',
        MembershipExpiryPerd: '60',
        BatchName: 'Auto_di' + Math.floor(Math.random() * 100),
        DormantMemberPrd: '50',
        DocumentDate: '31-Jan-2023',
        BatchType: 'Principal',
        SFSType: 'SFS Member',
    },
    ICT_Deduction: {

        MemberId: 'A300002267',
        MembershipExpiryPerd: '60',
        BatchName: 'Auto_di' + Math.floor(Math.random() * 100),
        DormantMemberPrd: '50',
        DocumentDate: '31-Jan-2023',
    },
    SAF_DXO_Deduction: {

        MemberId: 'A300002267',
        MembershipExpiryPerd: '60',
        BatchName: 'SAF/DXO' + Math.floor(Math.random() * 100),
        DormantMemberPrd: '60',
        DocumentDate: '01-Feb-2023',
        SAFDXOType: 'SAF/DXO Out'
    },
    PAYM_Deduction: {

        MemberId: 'A300002267',
        BatchName: 'PAYM' + Math.floor(Math.random() * 100),
        DocumentDate: '01-Feb-2023',

    },
    CC_Batch: {
        MemberId: 'A300002267',
        BatchName: 'CC Batch' + Math.floor(Math.random() * 100),
        DocumentDate: '01-Feb-2023',
        BatchRegId: 'Batch June 2022'
    },
    NFS_Update: {
        MemberId: 'A300002267',
        BatchName: 'NSF _ di' + Math.floor(Math.random() * 100),
        DocumentDate: '01-Feb-2023',
        FileName: ''
    }
}
export default data