const data = {

    SAMFRAPostionDetails: {
        positionName: "Position testing ",
        Role: "System Administrator",
        Location: 'SAFRA Punggol',
        Remark: "Remark TextAera",
        targetUserEmail: 'ekyaw@synergyonline.com',
        targetUserName: 'Eric Kyaw'
    },

    UpdatedSAMFRAPostionDetails: {
        positionName: "Events Customer ",
        Role: "Facility Viewer",
        Location: 'SAFRA Punggol',
        Remark: "Update",
        targetUserEmail: 'htran@synergyonline.com',
        targetUserName: 'Hung Tran'
    },

    //Position Listing
    positionList: {
        positionName: 'Position testing ',
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

            addFunction: 'ActivityAndEvent.ACTIVITY & EVENT.APPROVAL',



            removeFunction:
            {
                functionName: 'ActivityAndEvent.ACTIVITY & EVENT.APPROVAL'
            },

            functionsList: 'ActivityAndEvent.ACTIVITY & EVENT.APPROVAL',

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
        FunctionName: 'ActivityAndEvent.ACTIVITY & EVENT.ADHOC_CANCEL',
    },

    //Online Access Listing
    OnlineAccountAccessListing: {
        MmebershipType: 'test online roles'
    },

    // SMCMS User Listing
    clickLoginEmail: {
        LoginEmail: 'fshahzada@synergyonline.com', //'EKyaw@synergyonline.com',
        Position: 'Accommodation Viewer',
        PositionList: 'Accommodation Viewer',
        Status: 'Active',
        StatusDisabled: 'Disabled',
        LastLoginDate: '03/07/2022 01:33:38'
    },
    enabledemail: {
        LoginEmail: 'fshahzada@synergyonline.com',//'htran@synergyonline.com',
        Status: 'Active'
    },
    disabledemail: {
        LoginEmail: 'fshahzada@synergyonline.com',//'htran@synergyonline.com',
        Status: 'Disabled'

    },

    //SMCMS Uer Detail

    SMCMSUserDetail: {
        updatedRemark: 'Updated',
        PositionDetail: 'Accommodation Viewer',
    }
    
}

export default data