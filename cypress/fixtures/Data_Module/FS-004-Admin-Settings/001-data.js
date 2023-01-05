const data = {

    SAMFRAPostionDetails: {
        positionName: "Position testing",
        Role: "System Administrator",
        Location: 'SAFRA Jurong',
        Remark: "Remark",
        targetUserEmail: 'fshahzada@synergyonline.com',
        targetUserName: 'Fawad Shahzada'
    },

    UpdatedSAMFRAPostionDetails: {
        positionName: "Events Customer",
        Role: "Energy One Viewer",
        Location: 'SAFRA Punggol',
        Remark: "Update",
        targetUserEmail: 'fshahzada@synergyonline.com',
        targetUserName: 'Fawad Shahzada'
    },

    //Position Listing
    positionList: {
        positionName: 'Position testing',
        lastDate: '14-Jul-2022 06:33 AM'

    },

    // ADDING MULTIPLE FUNCTIONS AND REPORTS + REMOVING MULTIPLE FUINCTIONS AND REPORTS
    SMCMSRoleDetail: {

        roleName: 'Sample Role' + Math.floor(Math.random() * 1000),
        remark: 'Trial',

        UpdateRoleName: 'Courses Staff Assistant',
        UpdateRemark: 'New Item',

        Functions: {
            filter: 'VIEW',

            addFunction: 'Accommodation.Accommodation.AccommodationBookingCancellations.Create',



            removeFunction:
            {
                functionName: 'Accommodation.Accommodation.AccommodationBookingCancellations.Create'
            },

            functionsList: 'Accommodation.Accommodation.AccommodationBookingCancellations.Create',

        },

        Reports: {
            filter: 'Print',

            addReport: 'Membership.MembershipListingReport.Export',

            removeReport: 'Membership.MembershipListingReport.Export',

            reportsList: 'Membership.MembershipListingReport.Export'

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
        FunctionName: 'Accommodation.Accommodation.AccommodationBookings.Create',
        pageTitle: 'Online Account Access Detail'
    },

    //Online Access Listing
    OnlineAccountAccessListing: {
        MmebershipType: 'test online roles'
    }

}

export default data