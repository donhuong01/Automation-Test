import login from '../../../fixtures/login'
import ListingOnlineAccount from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingOnlineAccount'
import ListingOnlineAccountAccess from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingOnlineAccountAccess'
import ListingPositionListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingPositionListing'
import ListingSMCMSRoleListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingSMCMSRoleListing'
import ListingSMCMSUserListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingSMCMSUserListing'
import AnnouncementPortalNotificationList from '../FS-004-Admin-Settings/ListingPerformance/AnnouncementPortalNotificationList'
import ApprovalWorkflowList from '../FS-004-Admin-Settings/ListingPerformance/ApprovalWorkflowList'
import BatchJobServicesList from '../FS-004-Admin-Settings/ListingPerformance/BatchJobServicesList'
import CodeSetMasterList from '../FS-004-Admin-Settings/ListingPerformance/CodeSetMasterList'
import CodeTypeList from '../FS-004-Admin-Settings/ListingPerformance/CodeTypeList'
import CustomerCategoryList from '../FS-004-Admin-Settings/ListingPerformance/CustomerCategoryList'
import CustomerCategoryTypeList from '../FS-004-Admin-Settings/ListingPerformance/CustomerCategoryTypeList'
import DocumentTemplateList from '../FS-004-Admin-Settings/ListingPerformance/DocumentTemplateList'
import LoginHistoryList from '../FS-004-Admin-Settings/ListingPerformance/LoginHistoryList'
import NotificationMessageHistoryList from '../FS-004-Admin-Settings/ListingPerformance/NotificationMessageHistoryList'
import NotificationMessageTemplateList from '../FS-004-Admin-Settings/ListingPerformance/NotificationMessageTemplateList'
import PendingTaskList from '../FS-004-Admin-Settings/ListingPerformance/PendingTaskList'
import UserActionsList from '../FS-004-Admin-Settings/ListingPerformance/UserActionsList'

beforeEach(() => {
    //Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('E2E Auto Testing:FS-001 Admin: System Login', () => {
    ListingOnlineAccountAccess();
    ListingPositionListing();
    ListingSMCMSRoleListing();
    ListingSMCMSUserListing();
    ListingOnlineAccount();
})

describe('E2E Auto Testing:FS-004 Admin Setting', () => {
    ApprovalWorkflowList();
    PendingTaskList();
    LoginHistoryList();
    PendingTaskList();
    UserActionsList();
    AnnouncementPortalNotificationList();
    DocumentTemplateList();
    NotificationMessageHistoryList();
    NotificationMessageTemplateList();
    BatchJobServicesList();
    CodeTypeList();
    CodeSetMasterList();
    CustomerCategoryList();
    CustomerCategoryTypeList();
})