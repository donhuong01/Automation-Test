const data = {

    SAMFRAPostionDetails: {
        positionName: "Position testing",
        Role: "System Administrator",
        Location: 'SAFRA Jurong',
        Remark: "Remark",
        targetUserEmail: 'htran@synergyonline.com',
        targetUserName: 'Hung Tran'
    },

    UpdatedSAMFRAPostionDetails: {
        positionName: "Position ",
        Role: "Energy One Viewer",
        Location: 'SAFRA Punggol',
        Remark: "Update",
        targetUserEmail: 'htran@synergyonline.co',
        targetUserName: 'Hung Tran'
    },

    //Position Listing
    positionList: {
        positionName: 'Position testing',
        lastDate: '14-Jul-2022 06:33 AM'

    },

    // ADDING MULTIPLE FUNCTIONS AND REPORTS + REMOVING MULTIPLE FUINCTIONS AND REPORTS
    SMCMSRoleDetail: {

        roleName: 'Role ' + Math.floor(Math.random() * 10000),
        remark: 'Trial',

        UpdateRoleName: 'Courses Staff Assistant',
        UpdateRemark: 'New Item',

        Functions: {
            filter: 'VIEW',

            addFunction: 'Accommodation.AccommodationBookingCancellations.View',



            removeFunction:
            {
                functionName: 'Accommodation.AccommodationBookingCancellations.View'
            },

            functionsList: 'Accommodation.AccommodationBookingCancellations.View',

        },

        Reports: {
            filter: 'Print',

            addReport: 'ReportAccommodation.AccommodationBookingListing.View',

            removeReport: 'ReportAccommodation.AccommodationBookingListing.View',

            reportsList: 'ReportAccommodation.AccommodationBookingListing.View'

        }
    },


    // MEMBERSHIP as Role Filter
    SmcmsRoleListing: {

        Filter: {
            role: 'Sample Role'
        },

        roleNames: 'Membership Customer Service Officer',




        roleNameItem: 'Membership Customer Service Officer',
        roleNameLink: 'Membership Maintenance Approvers'
    },

    //Online Access Detail
    OnlineAccountAccessDetail: {
        Remarks: 'Test Remarks',
        FunctionName: 'Accommodation.AccommodationBookingCancellations.View',
        pageTitle: 'Online Account Access Detail'
    },

    //Online Access Listing
    OnlineAccountAccessListing: {
        MmebershipType: 'test online roles'
    }

}

export default data