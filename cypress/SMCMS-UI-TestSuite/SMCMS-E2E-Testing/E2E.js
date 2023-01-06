
//FS - 001
import OnlineAccountAccess from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-OnlineAccountAccess'
import SMCMSPostion from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSPosition'
import SMCMSRole from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSRole'
import SMCMSUser from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSUser'

//FS - 004
import ApplicationSetting from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-ApplicationSettings'
import NotificationMessageTemplate from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-NotficationMessageTemplate'
import AnnouncementPortalNotification from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-AnnoucementPortalNotification'
import CodeSetMaster from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CodeSetMaster'
import CustomerCategoryType from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CustomerCategoryType'
import CustomerCategory from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CustomerCatergory'
import CodeType from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CodeType'
import DocumentTemplate from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-DocumentTemplate'

//FS - 014
import CustomerCheckIn from  '../Sub-Phase-1/FS-014-Membership-Registration-Renewal/FS-014/E2E-CustomerCheckin'
import MembershipRegistration from '../Sub-Phase-1/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipRegistration'
// import SourceChannel from '../E2E-Scripts/FS-014/E2E-SourceChannel'
// import MassUpdateForMemberData from '../E2E-Scripts/FS-014/E2E-MassUpdateForMemberData'
// import MembershipModuleSettings from '../E2E-Scripts/FS-014/E2E-MembershipModuleSetting'
// import E2EMemberShipRenewal from '../E2E-Scripts/FS-014/E2E-MembershipRenewal'
// import BatchMembershipRegistration from '../E2E-Scripts/FS-014/E2E-BatchMembershipRegistration' 
// // import MemberStatusReasonCode from '../E2E-Scripts/FS-014/E2E-MemberStatusReasonCode'
// import LifeMembershipManagment from '../E2E-Scripts/FS-014/E2E-LifeMembership'
// import WithdrawalOfConsent from '../E2E-Scripts/FS-014/E2E-WithdrawalOfConsentForm'
import BadAddressUpdate from '../Sub-Phase-1/FS-014-Membership-Registration-Renewal/FS-014/E2E-BadAddressUpdate'
import MemberType from '../Sub-Phase-1/FS-014-Membership-Registration-Renewal/FS-014/E2E-MemberType'
// import MembershipRenewalAdvise from '../E2E-Scripts/FS-014/E2E-MembershipRenewalAdvise'

//FS - 025
import VolunteerCommittee from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerCommitte'
import VolunteerAppointment from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointment'
import VolunteerAppointmentType from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointmentType'
import VIPAppointmentType from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VIPAppointmentType'
import VolunteerAppointmentTermRegistration from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointmentTermRegistration'
import VIPAppointmentTermRegistration from '../Sub-Phase-1/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VIPAppointmentTermRegistration'



// import FacilitySettingsCalendar from '../E2E-Scripts/FS-010/E2E-FacilitySettingCalendar'
// import FacilitySettingCalendarSettings from '../E2E-Scripts/FS-010/E2E-FacilitySettingCalendarSetting'
// import FacilityGeneralSettingDtl from '../E2E-Scripts/FS-010/E2E-FacilitySettingsGeneralSettings'
// // import MembershipRegistrantion from '../E2E-MembershipRegistration'
// // import MemshipTenureSelection from '../E2E-MemberTenureSelection'
// // import CusLandingPage from '../E2E-CustomerLandingPage' 

// import FacilityOperatingPeriod from '../E2E-Scripts/FS-010/E2E-FacilitySettingOperatingPeriod'




// import MembershipChargeRate from '../E2E-Scripts/FS-029/E2E-Membership-Charge-Rate'
import login from '../../fixtures/login'
// import SFSMemberRegistion from '../E2E-Scripts/FS-014/E2E-SFSMemberRegistration'

// import FacilitySetupDetail from '../E2E-Scripts/FS-010/E2E-FacilitySetupDetail'
// import BatchMemDefermentRequest from '../E2E-Scripts/FS-028/E2E-BatchMembershipDefermentRequest'
// import MemSuspentionReleaseRequest from '../E2E-Scripts/FS-028/E2E-MembershipSuspentionReleaseRequest'
// import MembershipDeceased from '../E2E-Scripts/FS-028/E2E-MembershipDeceased.js'
// import BatchMembershipTermination from '../E2E-Scripts/FS-028/E2E-BatchMembershipTermination'
// import ReinstatementConfirmation from '../E2E-Scripts/FS-028/E2E-ReinstatementConformation'
// import BatchMembershipWaiver from '../E2E-Scripts/FS-028/E2E-BatchMembershipWaiverRequest'
// import ReceiptManagement from '../E2E-Scripts/FS-040/E2E-Receipt-Management'
// import MemDefermentRequest from '../E2E-Scripts/FS-028/E2E-MembershipDefermentRequest'
// import SAFRACardManagement from '../E2E-Scripts/FS-030/E2E-SAFRACardMangement'
// import VIPCardManagement from '../E2E-Scripts/FS-030/E2E-VIPCardMangement'
// import VolunteerCardManagement from '../E2E-Scripts/FS-030/E2E-VolunteerCardMangement'
// import MembershipResignationManagement from '../E2E-Scripts/FS-028/E2E-MembershipResignationRequest'
// import MembershipExpulsionAndReinstatment from '../E2E-Scripts/FS-028/E2E-MembershipExpulsionAndReinstatement'
// import FacilityTypeDetailFormManagement from '../E2E-Scripts/FS-010/E2E-FacilityTypeDetailForm'
// import MembershipSspentionReleaseRequest from '../E2E-Scripts/FS-028/E2E-MembershipSuspention'
// import FacilityBookingAmendmentManagment from '../E2E-Scripts/FS-010/E2E-FacilityBookingAmendment'
// import FacilityBookingExtentionManagment from '../E2E-Scripts/FS-010/E2E-FacilityBookingExtention'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})
 
// describe('E2E Auto Testing:FS-001', () => {

//     OnlineAccountAccess() 
//     SMCMSPostion()
//     SMCMSRole()
//     SMCMSUser() 
// })
// describe('E2E Auto Testing:FS-004', () => {

    // CustomerCategoryType()
    // CustomerCategory()
    // CodeType()
    // CodeSetMaster()
    // DocumentTemplate()
    // ApplicationSetting() //Not Required
//     NotificationMessageTemplate() //Not Required
//     AnnouncementPortalNotification() //Not Required
// })
// describe('E2E Auto Testing:FS-010', ()=> {
    // FacilityGeneralSettingDtl()
    // FacilitySettingsCalendar()
    // FacilitySettingCalendarSettings()
    // FacilityOperatingPeriod()
    // FacilitySetupDetail() 
    // FacilityTypeDetailFormManagement()
    // FacilityBookingAmendmentManagment()
    // FacilityBookingExtentionManagment()

// })

describe('E2E Auto Testing:FS-014', ()=> {

    //    MembershipRegistration("S9706300A") // Enter FulL NRIC
    //    CustomerCheckIn()
    // MemberType()
       BadAddressUpdate()//
//     MembershipRenewalAdvise()
//     WithdrawalOfConsent()
//     SourceChannel() //
//     //////MemberStatusReasonCode()
//     BatchMembershipRegistration()
//     MassUpdateForMemberData()
//     MembershipModuleSettings()
//     SFSMemberRegistion()
//     E2EMemberShipRenewal()
//     LifeMembershipManagment()

})

//  describe('E2E Auto Testing:FS-025', ()=> {
    // VolunteerCommittee()
    // VolunteerAppointment()
    // VolunteerAppointmentType()
    // VIPAppointmentType()
    // VolunteerAppointmentTermRegistration()
    // VIPAppointmentTermRegistration()
// })

// describe('E2E Auto Testing:FS-028', ()=> {
//     MembershipDeceased()
//     BatchMembershipTermination()
//     BatchMemDefermentRequest()
//     MembershipSspentionReleaseRequest() /n
//     ReinstatementConfirmation()
//     BatchMembershipWaiver()
//     MemDefermentRequest()
//     MembershipResignationRequest()
//     MembershipExpulsionAndReinstatment()
// })

// describe('E2E Auto Testing:FS-029', ()=> {

//     MembershipChargeRate()

// })
// describe('E2E Auto Testing:FS-030', ()=> {
    
//     VolunteerCardManagement()
//     SAFRACardManagement()
//     VIPCardManagement()

// })

// describe('E2E Auto Testing:FS-040', ()=> {

//     ReceiptManagement()

// })



