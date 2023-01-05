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
    Last4NRICNO:'634A',
    MemberID:'A30000008',
    MemberName:'Test User 124',
    AppointmentTypeID:'ACC_YS_CHAIR',
    Type:'Terminated',
    StartDate:'15-Nov-2013',
    EndDate:'03-May-2022',
},

// VIP Appointment Term Registration Detail
VIPAppointmentTermRegDetail: {

    MemberID:'A30000009',
    Name:'Test User 125',
    NRIC:'774Z',
    AppointmentID:'BOG-002',
    Type:'VIP 1',
    StartDate:'08-Feb-2023',
    EndDate:'09-Oct-2024',

    //Updated data
    UpdatedMemberID:'A30000010',
    UpdatedName:'Test User 001',
    UpdatedNRIC:'297G',
    UpdatedAppointmentID:'BOG-001',
    UpdatedType:'VIP 1',
    UpdatedStartDate:'16-Nov-2022',
    UpdatedEndDate:'18-May-2023',

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