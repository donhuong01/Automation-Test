const data={
    CustomerCategoryDetail:{
    CustomerCategoryNumber: 'CTC-2010-00001',
    Name: 'IG A2',
    BelongsUnder: 'Adventurers',
    CustomerCategoryType: 'Root Category',
    D365ID: '67890123-2222-2222-2345-678901234567'
    },
    UpdateDetail:{
   
    Name: 'IG A2',
    BelongsUnder: 'Adventurers',
    CustomerCategoryType: 'Root Category',
    D365ID: '67890123-2222-2222-2345-678901234567'

    },

    CustomerCategoryListing:{
        CustomerCategoryName: 'IG A2',
        D365ID:'67890123-2222-2222-2345-678901234567',
        CustomerCategoryType: '',
        CustomerCategoryNumber: ''
    },
    
    DeleteListing:{
        CustomerCategoryName: 'IG A2',
        D365ID:'67890123-2222-2222-2345-678901234567',

    },

    //Customer Category Type 
    CustomerCategoryTypeDetail:{
     
        Name:'Code Type2',
        BelongUnder:'Sub Category',
        UpdatedName:'Code Type2',
        UpdatedBelongsUnder:'Root Category'
        
    },

        CodeTypeListing:{
            codeType:"TestAutomate"
        },
        
        CodeTypeDetail:{
            Name: 'TestAutomate',
            belongUnder:'ActivityEventCategoryGroup'
        },


    // Application Settings
    ApplicationSettings : {

        minimumPasswordLength : '10',
        enforceSpecialChar : 'check',
        enforceCapitalAndSmallChar : 'check',
        enforceNumber : 'check',
        enforcePasswordHistory : '5',
        minimumPasswordAge : '4',
        maximumPasswordAge : '7',
        numOfInactiveDaysBeforeLockOut : '25',
        maximumFailedLoginAttempts : '5',

        ContentClauses : {
            marketingConsent : 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 
            marketingConsentStyleProperty : 'Marketing Consent', 
            marketingConsentStyleValue : 'Underline',
            marketingCosentFontStyle : 'Font Size', 
            marketingCosentFontValue : '4 (14pt)',
           
            CommunicationConsent : 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,', 
            CommunicationConsentStyleProperty : 'Communication Consent',
            CommunicationConsentStyleValue : 'Bold',
            CommunicationConsentFontStyle : 'Font Size', 
            CommunicationConsentFontValue : '4 (14pt)',
            

        },

        expectedPage : 'Customer Check-In'
    },

    //Notification Message Template
    
    NotifMsgListData : {
        Filters : {
            templateCode : 'MEM_RESIGN',
        },
    
        templateCodes : [
            {
                templateCode : 'MEM_RESIGN_APPROVAL',
                templateName : 'Resignation Approval Email Notification',
                subject : 'Resignation Request has been submitted (ID:[[id]])',
                content : 'Dear Approvers,\r\n                        <br />\r\n                        Resignation Request has been submitted. Click here to take the approval action.\r\n                        <br />\r\n                        System Generated Email',
                status : 'Active'
            },
        ],
    
        templateCodeLink : 'MEM_RESIGN_APPROVED'
    },
     
     NotifMsgTempDetailsdata :
        {
            // APPROVAL TEMPLATE
            NotifMsgTempDetails: {
                targetNotificationMessageTemplateItem: "APPROVAL_TASK",
                templateName: "Deferment Approval Email Notificationn",
                templateCode: "MEM_DEFERMENT_APPROVAL1",
                remarks: "This has been updated in 2022",
                subject: "Deferment Request has been submitted (ID:[[id]])",
                status: "Active",
                content: `Dear Approvers,        
    
                Deferment Request has been submitted. Click here to take the approval action.
                        
                System Generated Email`
            }
        },

     // Code Set Master Listing
     CodeSetMasterListing : {
        codeSetName : 'Testing 123',
        abbreviationCode :'SAD',
        codeType : 'AccessMode',
        codeSetLink : 'Testing 123',
        codeSetButton : 'FABS Category',
        codeSetItem : 'Trial Sample',
        CodeSetMasterList : [
            {
                CodeSetName : 'Sample',
                AbbreviationCode : 'SAD',
                CodeType : 'AccessMode'
            }
        ]
    },
    
    // Code Set Master Detail
    CodeSetMasterDetail : {
        name:"Testing 123",
        abbreviationCode:"SAD",
        belongsUnder:".1 Year",
        codeType:"AccessMode",
        effectiveStartDate:"12-Feb-2022",
        effectiveEndDate:"06-May-2022"
    },

    // Announcement/Portal Notification Detail
    AnnouncementPortalNotificationDetail : {
        
        title : 'SMCMS',
        publishDate : '18-May-2022', 
        publishTime: '03:57:27',
        status : 'Enabled',
        expiryDate : '18-July-2022', 
        expiryTime : '04:57:27',
        remark : 'Announcement 2022',
        allow3rdParty : 'check',

        ContentField : {
            content : 'Lorem ipsum dolor sit amet',
            styleProperty : 'Button',
            styleValue : 'Bold'
        }
    },

    // Update data for Announcement/Portal Notification Detail
    UpdateAnnouncementPortalNotificationDetail : {
        
        title : 'Updated Notification',
        publishDate : '02-May-2008', 
        publishTime: '06:00:56',
        status : 'Enabled',
        expiryDate : '08-July-2019', 
        expiryTime : '12:05:12',
        remark : 'Updated Announcement 2022',
        allow3rdParty : 'check',

        ContentField : {
            content : 'Updated Lorem ipsum dolor sit amet',
            styleProperty : 'Button',
            styleValue : 'Bold'
        }
    },

    // Announcement Portal Notification Listing
    AnnouncementPortalNotificationListing : {
        Filters : {
            title : 'Notif 2022', 
            publishDate : '18-05-2022', 
            expiryDate : '18-07-2022',
            status : 'Enabled'
        },

        announcePortalNotifList : [
            {
                title : 'Notif 2022', 
                publishDate : '18-05-2022', 
                expiryDate : '18-07-2022',
                status : 'Enabled'
            }
        ],

        titleLink : 'Notif 2022',
        titleItem : '2020 Sample'
    }
   
}
export default data




 