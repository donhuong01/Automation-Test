const data =
//Volunteer Committee Listing
{ 
    VolunteerCommitteeDetails:{
        CommitteeCode: 'AB-CD',
        CommitteeDescription: 'TEST'

    },

//Volunteer Appointment Listing
volunteerAppointmentDetail:
{
    appointmentCode: 'ADVSRATT',
    appointmentDescription: 'TEST'

},

//Volunteer Appointment Type

    
    AppointmentID: 'ACC_YS_ADVSR',
    AppointmentCode: 'CAPTN',
    CommitteeCode: 'BAC_TP',
    Point: 7,
    ClubHouseStore: 'SAFRA HQ',

// VIP Appointment Type

VIPAppointmentTypeDetail:{
    AppointmentID: 'testing',
    Description: 'Test Description',
    Type: 'VIP 2',
    FreeMembership: 'CHECK'

},

//Volunteer Appointment Term Registration Detail

VolAppointmentTermRegistration: {

    AppointmentID:'ACC_YS_CHAIR',
    Last4NRICNO:'695G', //UAT - 703I
    MemberID:'A300005574',//UAT - A300002856,
    MemberName:'Test User 695G', // UAT - TestuserQA92
    AppointmentTypeID:'ACC_YS_CHAIR',
    Type:'Terminated',
    StartDate:'15-Nov-2013',
    EndDate:'03-May-2023',
},

// VIP Appointment Term Registration Detail
VIPAppointmentTermRegDetail: {

    MemberID:'A300005574',
    Name:'Test User 695G',//'Test User 1',
    NRIC:'695G',//'451C',
    AppointmentID:'BOG-002',
    Type:'VIP 1',
    StartDate:'08-Feb-2023',
    EndDate:'09-Oct-2024',

    //Updated data
    UpdatedMemberID:'A300002857',
    UpdatedName:'TestuserQA93',
    UpdatedNRIC:'624G',
    UpdatedAppointmentID:'HM-001',
    UpdatedType:'HM',
    UpdatedStartDate:'16-Nov-2022',
    UpdatedEndDate:'18-May-2024',
},



//VIP Appointment Term Registration Listing
VIPAppointmentTermRegLIsting: {
    AppointmentID:'245343',
    Last4NRICNO:'233A',
    MemberID:'A300000002',
    MemberName:'John Doe',
    Type:'HM10',
    StartDate:'09-Jan-2018',
    EndDate:'09-Mar-2022'
}
   

}

export default data