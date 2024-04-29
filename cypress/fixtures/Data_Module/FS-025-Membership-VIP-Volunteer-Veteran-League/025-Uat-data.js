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
    AppointmentCode: 'MGR-001',
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
    Last4NRICNO:'449F', //UAT - 703I //QA -695G
    MemberID:'A300006422',//UAT - A300002856, //QA - A300005574
    MemberName:'Test User 588H', // UAT - TestuserQA92 //QA - Test User 695G
    AppointmentTypeID:'ACC_YS_CHAIR',
    Type:'Terminated',
    StartDate:'15-Nov-2013',
    EndDate:'03-May-2023',
},

// VIP Appointment Term Registration Detail
VIPAppointmentTermRegDetail: {

    MemberID:'A300006494',
    Name:'	Test User 460D',//'Test User 1',
    NRIC:'460D',//'451C',
    AppointmentID:'HM-001',//'BOG-002',
    Type:'HM',//'VIP 1',
    StartDate:'08-Feb-2024',
    EndDate:'09-Oct-2024',

    //Updated data
    UpdatedMemberID:'A300006508',
    UpdatedName:'Test User 397Z',
    UpdatedNRIC:'397Z',
    UpdatedAppointmentID:'DC-001',
    UpdatedType:'VIP 1',
    UpdatedStartDate:'16-Nov-2024',
    UpdatedEndDate:'18-Dec-2024',
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