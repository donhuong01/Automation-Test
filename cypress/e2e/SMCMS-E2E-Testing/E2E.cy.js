
//FS - 001 Admin System Login
import OnlineAccountAccess from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-OnlineAccountAccess'
import SMCMSPostion from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSPosition'
import SMCMSRole from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSRole'
import SMCMSUser from '../Sub-Phase-1/FS-001-Admin-SystemLogin/E2E-SMCMSUser'

//FS - 002 Reports
import IG_Report from '../Sub-Phase-4-5/FS-002-Reports/InterestGroup-Reports/E2E-InterestGroup-Report'
import E1_Report from '../Sub-Phase-4-5/FS-002-Reports/EnergyOne-Reports/E2E-EnergyOne-Report'
import Accommodation_Report from '../Sub-Phase-4-5/FS-002-Reports/Accommodation-Reports/E2E-Accommodation-Reports'
import MemberCards_Report from '../Sub-Phase-4-5/FS-002-Reports/Membership(MemberCards)-Reports/E2E-MemberCards-Report'
import Gifts_Report from '../Sub-Phase-4-5/FS-002-Reports/Gift-Reports/E2E-Gift-Report'
import InHouseMerchandise_Report from '../Sub-Phase-4-5/FS-002-Reports/InHouse-and-Merchandise-Reports/E2E-InHouse-and-Merchandise-Report'
import SRP_Report from '../Sub-Phase-4-5/FS-002-Reports/SRP-Reports/E2E-SRP-Reports'
import Reports_Payments from '../Sub-Phase-4-5/FS-002-Reports/Payments-Reports/E2E-Payments-Report'
import AdminSetting_Report from '../Sub-Phase-4-5/FS-002-Reports/AdminSetting-Reports/E2E-AdminSetting-Reports'
import Facility_Report from '../Sub-Phase-4-5/FS-002-Reports/Facility-Reports/E2E-Facility-Report'
import Membership_Report from '../Sub-Phase-4-5/FS-002-Reports/Membership-Reports/E2E-Membership-Reports'
import Promotion_Report from '../Sub-Phase-4-5/FS-002-Reports/Promotion-Reports/E2E-Promotion-Report'

//FS - 004 Admin Settings
import ApplicationSetting from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-ApplicationSettings'
import NotificationMessageTemplate from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-NotficationMessageTemplate'
import AnnouncementPortalNotification from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-AnnoucementPortalNotification'
import CodeSetMaster from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CodeSetMaster'
import CustomerCategoryType from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CustomerCategoryType'
import CustomerCategory from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CustomerCatergory'
import CodeType from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-CodeType'
import DocumentTemplate from '../Sub-Phase-1/FS-004-Admin-Settings/E2E-DocumentTemplate'

//FS - 010 Clubs - Facilities
import FacilitySettingsCalendar from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilitySettingCalendar'
import FacilityGeneralSettingDtl from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilitySettingsGeneralSettings'
import FacilitySettingCalendarSettings from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilitySettingCalendarSetting'
import FacilityOperatingPeriod from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilitySettingOperatingPeriod'
import FacilitySetupDetail from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilitySetupDetail'
import FacilityTypeDetailFormManagement from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityTypeDetailForm'
import FacilityBookingAmendmentManagment from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityBookingAmendment'
import FacilityBookingExtentionManagment from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityBookingExtention'
import FacilityBookingCancellationManagment from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityBookingCancellation'
import FacilityBookingManagement from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityBooking'
import FacilityGroupBooking from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityGroupBooking'
import FacilityGroupBookingBallotListing from '../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Group-Booking-Ballot/FacilityGroupBookingBallotListing'

// FS - 12 Accommodation
import AccommodatiomSettingGeneral from '../Form-Management/FS-012-Accommodation/Accommodation-Settings-General'
import AccommodationSettingOperatingPeriod from '../Form-Management/FS-012-Accommodation/Accommodation-Settings-Operating-Period'
import AccommodationTypeManagement from '../Form-Management/FS-012-Accommodation/Accommodation-Type-Managment'
import AccommodationSetupManagement from '../Form-Management/FS-012-Accommodation/Accommodation-Setup-Management'
import AccommodationClosureManagement from '../Form-Management/FS-012-Accommodation/Accommodation-Closure-Management'
import AccommodatiomBookingManagement from '../Form-Management/FS-012-Accommodation/Accommodation-Booking-Management'
import AccommodatiomReservationManagement from '../Form-Management/FS-012-Accommodation/Accommodation-Reservation-Management'

//FS - 014 Membership Registration & Renewal
import CustomerCheckIn from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-CustomerCheckin'
import MembershipRegistration from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipRegistration'
import MembershipPrincipalRegistration from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipPrincipalRegistration'
import SourceChannel from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-SourceChannel'
import MassUpdateForMemberData from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MassUpdateForMemberData'
import MembershipModuleSettings from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipModuleSetting'
import E2EMemberShipRenewal from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipRenewal'
import BatchMembershipRegistration from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-BatchMembershipRegistration'
import MemberStatusReasonCode from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MemberStatusReasonCode'
import LifeMembershipManagment from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-LifeMembership'
import WithdrawalOfConsent from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-WithdrawalOfConsentForm'
import BadAddressUpdate from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-BadAddressUpdate'
import MemberType from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MemberType'
import MembershipRenewalAdvise from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-MembershipRenewalAdvise'
import SFSMemberRegistion from '../Sub-Phase-2/FS-014-Membership-Registration-Renewal/FS-014/E2E-SFSMemberRegistration'

// FS-15 E1 Gym Membership
import E1GymMembershipCancellationBeforePayment from '../Sub-Phase-3/FS-015-E1-Gym-Membership/CancellationOfE1GymMembershipBeforePayment'
import E1GYMMembershipConversion from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipConversion'
import E1GYMMembershipDeferment from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipDeferment'
import E1GYMMembershipTermination from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipTermination'
import E1GYMMembershipReinstatement from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipReinstatement'
import E1GYMMembershipWaiver from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipWaiver'
import E1GYMMembershipReversal from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipReversal'
import E1GYMMembershipRenewal from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipRenewal'
import E1GYMMembershipRegistrationWithExistingMember from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipRegistrationWithExistingMember'
import E1GYMMembershipRegistrationWithNonMember from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipRegistrationWithNonOrNewMember'
import E1GYMSetupManagement from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1 Gym Setup Management'
import E1GYMMainSetup from '../Sub-Phase-3/FS-015-E1-Gym-Membership/FS-015 E1 GYM Membership And Charge Rate Setup'
import E1GYMMembershipRenewalAdvise from '../Sub-Phase-3/FS-015-E1-Gym-Membership/FS-015 E1 GYM Membership Renewal Advice'
import E1GYMMembershipDataManagement from '../Sub-Phase-3/FS-015-E1-Gym-Membership/FS-015 E1 GYM Membership Data Management'
import E1GYMMembershipModuleSettings from '../Sub-Phase-3/FS-015-E1-Gym-Membership/E1GymMembershipModuleSettings'


// // FS-16 Interest Group
import BatchMemRegWithExistingMemUsingDefaultIG from '../Sub-Phase-3/FS-016-Interest-Group/BatchIGMemRegWithExistingMemUsing(defaultIG)'
import BatchMemRegWithExistingMemUsingNonDefaultIG from '../Sub-Phase-3/FS-016-Interest-Group/BatchIGMemRegWithExistingMemUsing(NondefaultIG)'
import InterestGroupDeactivation from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupDeactivation'
import InterestGroupManagement from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupManagement'
import InterestGroupConversion from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipConversion'
import InterestGroupDeferment from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipDeferment'
import InterestGroupMembershipManagment from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipManagement'
import InterestGroupMembershipRegistration from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipRegistration'
import IGMembershipReinstatement from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipReinstatement'
import InterestGMembershipRenewal from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipRenewal'
import InterestGMembershipReverse from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipReverse'
import InterestGMembershipTermination from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipTermination'
import InterestGMembershipwaiver from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMembershipWaiver'
import InterestGroupMainManagements from '../Sub-Phase-3/FS-016-Interest-Group/InterestGroupMainManagement'

//FS - 025 Membership VIP Volunteer Veteran League
import VolunteerCommittee from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerCommitte'
import VolunteerAppointment from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointment'
import VolunteerAppointmentType from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointmentType'
import VIPAppointmentType from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VIPAppointmentType'
import VolunteerAppointmentTermRegistration from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VolunteerAppointmentTermRegistration'
import VIPAppointmentTermRegistration from '../Sub-Phase-2/FS-025-Membership-VIP-Volunteer-Veteran-League/E2E-VIPAppointmentTermRegistration'


//FS - 027 SFS Membership Admin Main Activaties
import SFSBatchMemDefermentRequest from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-BatchMembershipDefermentRequest'
import SFSMemSuspensionReleaseRequest from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipSuspension'
import SFSMembershipDeceased from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipDeceased'
import SFSBatchMembershipTermination from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-BatchMembershipTermination'
import SFSReinstatementConfirmation from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-ReinstatementConformation'
import SFSBatchMembershipWaiver from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-BatchMembershipWaiverRequest'
import SFSMemDefermentRequest from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipDefermentRequest'
import SFSMembershipResignationManagement from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipResignationRequest'
import SFSMembershipSuspensionReleaseRequest from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipSuspensionReleaseRequest'
import SFSMembershipExpulsionAndReinstatment from '../Sub-Phase-2/FS-027-SFSMembership-Admin-MaintActivities/E2E-MembershipExpulsionAndReinstatement'


//FS - 028 Membership Admin Main Activaties
import BatchMemDefermentRequest from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-BatchMembershipDefermentRequest'
import MemSuspensionReleaseRequest from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipSuspension'
import MembershipDeceased from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipDeceased'
import BatchMembershipTermination from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-BatchMembershipTermination'
import ReinstatementConfirmation from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-ReinstatementConformation'
import BatchMembershipWaiver from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-BatchMembershipWaiverRequest'
import MemDefermentRequest from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipDefermentRequest'
import MembershipResignationManagement from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipResignationRequest'
import MembershipSuspensionReleaseRequest from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipSuspensionReleaseRequest'
import MembershipExpulsionAndReinstatment from '../Sub-Phase-2/FS-028-Membership-Admin-MaintActivities/E2E-MembershipExpulsionAndReinstatement'

//FS - 029 Membership Charge Rate
import MembershipChargeRate from '../Sub-Phase-2/FS-029-Member-Charge-Rate/E2E-Membership-Charge-Rate'

// FS - 031 Gift Redemption
import GiftModuleSettings from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftModuleSetting'
import GiftsManagement from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftManagement'
import GiftRedemptionTransactions from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftRedemptionTransaction'
import GiftRedemptionManagementInsertionAndCollection from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftRedemptionManagementGiftInsertCollect'
import GiftRedemptionManagementInsertionAndCancellation from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftRedemptionManagementGiftInsertCancelletion'
import GiftRedemptionManagementInsertionAndExchange from '../Form-Management/FS-031-Gift-Redemption/FS-031-GiftRedemptionManagementGiftInsertExchange'

//FS - 030 Membership Card Management
import SAFRACardManagement from '../Sub-Phase-2/FS-030-Membership-Card-Management/E2E-SAFRACardMangement'
import VIPCardManagement from '../Sub-Phase-2/FS-030-Membership-Card-Management/E2E-VIPCardMangement'
import VolunteerCardManagement from '../Sub-Phase-2/FS-030-Membership-Card-Management/E2E-VolunteerCardMangement'

// FS-036 SRP
import EDCTerminalManagement from '../Sub-Phase-3/FS-036-SRP/E2E-EDCTerminalManagement'
import SAFRAPointsAdjustment from '../Sub-Phase-3/FS-036-SRP/E2E-SAFRAPointsAdjustment'
import SAFRAPointsTransaction from '../Sub-Phase-3/FS-036-SRP/E2E-SAFRAPointsTransaction'
import SRPModuleSetting from '../Sub-Phase-3/FS-036-SRP/E2E-SRPModuleSetting'
import SRPPromotionManagement from '../Sub-Phase-3/FS-036-SRP/E2E-SRPPromotionManagement'
import SRPRedemptionCatalogueManagement from '../Sub-Phase-3/FS-036-SRP/E2E-SRPRedemptionCatalogueManagement'
import SRPRedemptionCollection from '../Sub-Phase-3/FS-036-SRP/E2E-SRPRedemptionCollection'
import SRPRedemptionManagement from '../Sub-Phase-3/FS-036-SRP/E2E-SRPRedemptionManagement'
import ThirdPartyVendorManagement from '../Sub-Phase-3/FS-036-SRP/E2E-ThirdPartyVendorManagement'

// FS-013 and FS-039 Merchandise and In-HouseSale
import InHouseSaleAndMerchandiseItemManagement from '../Sub-Phase-3/FS-039&FS-013-InHouseSaleAndMerchandise/InHouseSaleAndMerchandiseItemManagement'
import InHouseSaleAndMerchandisePurchase from '../Sub-Phase-3/FS-039&FS-013-InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchase'
import InHouseSaleAndMerchandiseTransactionAdjustment from '../Sub-Phase-3/FS-039&FS-013-InHouseSaleAndMerchandise/InHouseSaleAndMerchandiseTransactionAdjustment'
import InHouseSaleAndMerchandiseTransactionConcellation from '../Sub-Phase-3/FS-039&FS-013-InHouseSaleAndMerchandise/InHouseSaleAndMerchandiseTransactionCancellation'
import InHouseSaleAndMerchandiseTransactionRefund from '../Sub-Phase-3/FS-039&FS-013-InHouseSaleAndMerchandise/InHouseSaleAndMerchandiseTransactionRefund'

//FS - 040 Club Sales
import ReceiptManagement from '../Sub-Phase-2/FS-040-Receipt-Management/E2E-Receipt-Management'

//FS - 042 Promotion
import PromotionforE1Gym from '../Sub-Phase-4-5/FS-042-Promotion/E2E-PrommotionForE1Gym'
import PrommotionForFacilityandFacilityType from '../Sub-Phase-4-5/FS-042-Promotion/E2E-PrommotionForFacilityandFacilityType'
import PromotionforInHouseMerchandise from '../Sub-Phase-4-5/FS-042-Promotion/E2E-PrommotionForInHouseMerchandise'
import PromotionforInterestGroup from '../Sub-Phase-4-5/FS-042-Promotion/E2E-PrommotionForInterestGroup'
import PromoUtilization from '../Sub-Phase-4-5/FS-042-Promotion/E2E-Promotion-Utilization'
import Promotion from '../Sub-Phase-4-5/FS-042-Promotion/E2E-Promotion'
import PromotionforMembership from '../Sub-Phase-4-5/FS-042-Promotion/E2E-PromotionForMembership'


//UAT E2E DATA
import E2EData from '../SMCMS-E2E-Testing/E2EDataConfigUAT'

//QA E2E Data
// import E2EData from '../SMCMS-E2E-Testing/E2EDataConfig'

import login from '../../fixtures/login'
import FacilityGroupBookingBallot from '../Sub-Phase-2/FS-010-Clubs(Facilites)/E2E-FacilityGroupBookingBallot'

//NRIC Generator
import { nricGenerator } from '../../support/nricGenerator'

const CustomerNRICFull = nricGenerator('T', 42)
const CustomerNRICFull2 = nricGenerator('T', 43)
const CustomerNRICFull3 = nricGenerator('T', 43)
const CustomerNRICFull4 = nricGenerator('T', 43)
const DepCustomerNRICFull = nricGenerator('S', 43)
const Dep2CustomerNRICFull = nricGenerator('S', 43)
const Dep3CustomerNRICFull = nricGenerator('S', 43)


beforeEach(() => {

  // Set local storage for QA Enviroment
  // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

  /****************************
   * Requestor Testing - Erik *
   ****************************/
  // Set local storage for UAT Enviroment
  // cy.SaveUserInfoInLocalStorageForUAT(login.R_authenticated_user_uat, login.R_active_location_uat, login.R_safra_client_uat)

  /************************
   * Admin Testing - Hung *
   ************************/
  // Set local storage for UAT Enviroment
   cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

  //Select Channel
  cy.visit('/membership/customerCheckin')
  cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})


// describe('E2E Auto Testing:FS-001 Admin: System Login', () => {

    // OnlineAccountAccess()
    // SMCMSPostion()
    // SMCMSRole()
    // SMCMSUser() //Change User Depending on Environment
// })

//  describe('E2E Auto Testing:FS-002 Reports', () => {

  // Accommodation_Report()
  // AdminSetting_Report()
  // E1_Report()
  // Facility_Report()
  // Gifts_Report()
  // IG_Report()
  // Membership_Report()
  // MemberCards_Report()
  // Reports_Payments()
  // InHouseMerchandise_Report()
  // SRP_Report()
//   Promotion_Report()

//  })


// describe('E2E Auto Testing:FS-004 Admin: Settings', () => {

    // CustomerCategoryType()
    // CustomerCategory()
    // CodeType()
    // CodeSetMaster()
    // DocumentTemplate() // Don't run unless important
    // ApplicationSetting() //Not Required //Changed Font Siz to - 4 (14pt)
    // NotificationMessageTemplate() //Not Required
//     AnnouncementPortalNotification() //Not Required
// })


// This module need minor updates
//  describe('E2E Auto Testing:FS-010 Facility', ()=> {
// FacilityGeneralSettingDtl()
// FacilitySettingsCalendar()
// FacilitySettingCalendarSettings()
// FacilityOperatingPeriod()
// FacilityTypeDetailFormManagement(E2EData.CALENDAR_NAME, E2EData.PERIODOFCALENDAR, E2EData.OPERATING_PERIOD_NAME)
// FacilitySetupDetail(E2EData.FACILITY_TYPE)
// FacilityBookingManagement()
// FacilityBookingAmendmentManagment()
// FacilityBookingExtentionManagment() // Check tomorrow
// FacilityBookingCancellationManagment() // Check tomorrow
// FacilityGroupBooking(E2EData.FACILITY_GROUP_BOOKING.SAFRA_MEMBER, E2EData.FACILITY_GROUP_BOOKING.SAFRA_RELATED_MEMBER,
// E2EData.FACILITY_GROUP_BOOKING.SAFRA_GUEST) //Pass Active Safra Member ID - 1.Safra Member 2. SAFRARelatedMemberships 3. Guest Member
// FacilityGroupBookingBallot("A100000115", "A100007416") // Recheck again tomorrow morning
//   })


// describe('E2E Auto Testing:FS-012 Accommodation', ()=> {

  //  AccommodatiomSettingGeneral()
  //  AccommodationSettingOperatingPeriod()
  //  AccommodationTypeManagement()
  //  AccommodationSetupManagement()
  //  AccommodationClosureManagement() // Need to add accommodation on page action
  //  AccommodatiomBookingManagement(E2EData.ACCOMMODATION_BOOKING_MANAGEMENT.SAFRA_MEMBERID, E2EData.ACCOMMODATION_BOOKING_MANAGEMENT.GEUSTID) //Pass SAFRA MemberID and Guest ID
// })


// describe('E2E Auto Testing:FS-014 Membership', () => {

//  MembershipRegistration(CustomerNRICFull) // Quick Testing on Membership Registration
//  MembershipPrincipalRegistration(CustomerNRICFull,DepCustomerNRICFull, Dep2CustomerNRICFull) // Full Testing on Membership Registration
//  CustomerCheckIn()
//  MemberType() //Needs to do in manual test since it always has duplicate
//  BadAddressUpdate()
//  MembershipRenewalAdvise()
//  WithdrawalOfConsent(E2EData.ACTIVE_MEMBERID_FOR_WITHDRAWAL_OF_CONSENT) //Enter Member ID for Withdrawal Of Consent
//  SourceChannel()
// MemberStatusReasonCode() // Needs to do in manual test since it may affect current data
//  MassUpdateForMemberData() 
// MembershipModuleSettings() // Needs to check settings data before running on UAT
//  SFSMemberRegistion(CustomerNRICFull,DepCustomerNRICFull, Dep2CustomerNRICFull) //Add three NRIC's for Principal, Dependent Child, Dependent Spouse
//  E2EMemberShipRenewal(CustomerNRICFull) //Add NRIC For Principal Registration


// LifeMembershipManagment(CustomerNRICFull) //Add NRIC For Principal Registration
  // BatchMembershipRegistration(

  //   //Pass Info for Existing Member MemberID and LAST4DigitsNRIC
  //   E2EData.BATCH_REGISTRATION.MEMBERID_FOR_EXISTING_MEMBER,
  //   E2EData.BATCH_REGISTRATION.LAST4DIGITSNRIC_FOR_EXISTING_MEMBER,

  //   //Pass informstion for Non-Member Name, DOB, LAST4DigitsNRIC and Full NRIC
  //   E2EData.BATCH_REGISTRATION.MEMBER_NAME_FOR_NON_MEMBER,
  //   E2EData.BATCH_REGISTRATION.DOB_FOR_NON_MEMBER,
  //   E2EData.BATCH_REGISTRATION.LAST4DIGITSNRIC_FOR_NON_MEMBER,
  //   CustomerNRICFull,

  //   //NRIC for New Principal
  //   CustomerNRICFull2, 

  //   //NRIC for New Dependent and Dependent PrincipalID
  //   DepCustomerNRICFull,
  //   E2EData.BATCH_REGISTRATION.PRINCIPALID_FOR_NEW_DEPENDENT)

// })



// describe('E2E Auto Testing:FS-015 Energy One: Gym Membership and Maintenance Activities', ()=> {

// E1GYMMembershipRegistrationWithExistingMember(E2EData.ENTER_MEMBERID_AND_NAME_E1GYM_REG_WITH_EXISTING_MEMBET.MEMBERID,
//    E2EData.ENTER_MEMBERID_AND_NAME_E1GYM_REG_WITH_EXISTING_MEMBET.MEMBERNAME) // Enter MemberID and Member Name

// E1GYMMembershipRenewal(E2EData.ENTER_MEMBERID_NAME_AND_E1GYMID_FOR_RENEWAL.MEMBERID,
//     E2EData.ENTER_MEMBERID_NAME_AND_E1GYMID_FOR_RENEWAL.MEMBERNAME,
//     E2EData.ENTER_MEMBERID_NAME_AND_E1GYMID_FOR_RENEWAL.E1GYM_MEMBERSHIP_ID)

// E1GYMMembershipRegistrationWithNonMember(CustomerNRICFull)
// E1GymMembershipCancellationBeforePayment(E2EData.MEMBERID_FOR_CANCELLATION_BEFORE_PAYMENT)//Provide Active member ID
// E1GYMMembershipConversion(E2EData.MEMBERID_FOR_E1GYM_CONVERSION) // Enter Member ID
// E1GYMMembershipDeferment(E2EData.E1_GYMID_FOR_E1GYM_DEFERMENT) // Enter E1 Gym Membership ID ok //Needs an active
// E1GYMMembershipTermination(E2EData.ACTIVE_MEMBERID_FOR_E1GYM_TERMINATION) //Provide Active member ID //Needs an Active
// E1GYMMembershipReinstatement(E2EData.INACTIVE_MEMBERID_FOR_E1GYM_REINSTATMENT) //Enter Member ID //Theres add to cart
// E1GYMMembershipWaiver(E2EData.ACTIVE_MEMBERID_FOR_E1GYM_WAIVER) //Provide Active member ID
// E1GYMMembershipReversal(E2EData.MEMBERID_FOR_E1GYM_REVERSAL) //Enter Member ID

// E1GYMMainSetup()
// E1GYMSetupManagement() 
// E1GYMMembershipModuleSettings()
  //  E1GYMMembershipRenewalAdvise()
//   E1GYMMembershipDataManagement(E2EData.E1GYMMembershipDataManagement.MEMBERID,
//                              E2EData.E1GYMMembershipDataManagement.E1_GYM_MEMBERSHIPID) //Provide MemberID and E1GymMemberhipID

// })




describe('E2E Auto Testing:FS-016 Interest Group: Registration and Maintenance Activities', ()=> {

// InterestGroupMembershipRegistration()
// InterestGMembershipRenewal(CustomerNRICFull) //Change NRIC each time after runing this code
// BatchMemRegWithExistingMemUsingDefaultIG(E2EData.BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_DEFUALT_IG) //Provide Active member ID //1
// BatchMemRegWithExistingMemUsingNonDefaultIG(E2EData.BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_NON_DEFUALT_IG) //Provide Active member ID //2
// InterestGroupDeactivation(E2EData.IG_DEACTIAVATION) //Change Sample IG 
// InterestGroupConversion(E2EData.MEMBER_NAME_FOR_IG_CONVERSION ) //Please Provide IG Active Member Name
// InterestGroupDeferment(E2EData.MEMBER_NAME_FOR_IG_DEFERMENT) //Please Provide Active Member Name
// InterestGMembershipTermination(E2EData.MEMBERID_AND_NAME_FOR_IG_TERMINATION.MEMBERID, E2EData.MEMBERID_AND_NAME_FOR_IG_TERMINATION.MEMBERNAME) // Provide MemberId and Member Name
// IGMembershipReinstatement(E2EData.MEMBERID_FOR_IG_REINSTATEMENT.MEMBERID, E2EData.MEMBERID_FOR_IG_REINSTATEMENT.MEMBERNAME)
// InterestGMembershipReverse(E2EData.MEMBER_NAME_FOR_IG_REVERSAL) //Provide Member Name
// InterestGMembershipwaiver(E2EData.MEMBER_NAME_FOR_IG_WAIVER)  //Provide Member Name
// InterestGroupManagement()
// InterestGroupMembershipManagment()
InterestGroupMainManagements()
// //IG Renewal Advice

})



//  describe('E2E Auto Testing:FS-025 Membership: VIP Volunteer Veteran League', ()=> {
    // VolunteerCommittee()
    // VolunteerAppointment()
    // VolunteerAppointmentType()
    // VIPAppointmentType()
      // VolunteerAppointmentTermRegistration() 
//       VIPAppointmentTermRegistration() //Update the the Type in Registration
// })



// describe('E2E Auto Testing:FS-027 SFS Membership: Admin Maintenance Activities', () => {

// SFSMembershipDeceased(E2EData.SFS_ACTIVE_MEMBERID_FOR_DECEASED) // Enter MemberID
// SFSBatchMembershipTermination(E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID1, E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID2,
//     E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID3) // Enter 3 Active Member IDs //NOTE: Members inputed should be on the first page on sorting active
// SFSBatchMemDefermentRequest(E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERNAME1, E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERID1,
//     E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERNAME2, E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERID2) //NOTE: Members inputed should be on the first page on sorting new //Update Always 1st day of month
// SFSReinstatementConfirmation(E2EData.SFS_ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION)// Enter  Inactive MemberID
// SFSBatchMembershipWaiver(CustomerNRICFull,DepCustomerNRICFull) // Enter 2 NRIC's for Member Registration
    //  SFSMemDefermentRequest(CustomerNRICFull2)//(E2EData.SFS_NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST) //Change NRIC before runing this function
    // SFSMembershipResignationManagement(CustomerNRICFull3) //Change NRIC before runing this function
    // SFSMembershipExpulsionAndReinstatment(CustomerNRICFull4) //Change NRIC before runing this function

// })



// describe('E2E Auto Testing:FS-028 Membership: Admin Maintenance Activities', ()=> {

// MembershipDeceased(E2EData.ACTIVE_MEMBERID_FOR_DECEASED) //Provide Active member ID
// BatchMembershipTermination(E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID1, E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID2,
// E2EData.SFS_BATCH_TERMINATION_IDS.MEMBERID3) //Provide Active member ID's
// BatchMemDefermentRequest(E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERNAME1, E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERID1,
// E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERNAME2, E2EData.SFS_BATCH_DEFERMENT_REQUEST.MEMBERID2)
// BatchMembershipWaiver(CustomerNRICFull, DepCustomerNRICFull) // Enter 2 NRIC's for Member Registration
// MemDefermentRequest(CustomerNRICFull2) //Change NRIC before runing this function
// MembershipResignationManagement( CustomerNRICFull3) //Change NRIC before runing this function
// MembershipExpulsionAndReinstatment(DepCustomerNRICFull4) //Change NRIC before runing this function
    //Membership Transaction Cancellation
    //Membership Adjustment
// })



// describe('E2E Auto Testing:FS-029 Member: Charge Rate', ()=> {

//    MembershipChargeRate()

// })



//  describe('E2E Auto Testing:FS-030 Membership: Card Management', ()=> {

//     VolunteerCardManagement(E2EData.MEMBERID_VOLUNTERR_CARD_MANAGEMENT, E2EData.MEMBER_NAME_VOLUNTERR_CARD_MANAGEMENT,
//                             E2EData.LAST4DIGITNRIC_VOLUNTERR_CARD_MANAGEMENT, E2EData.CARD_TYPE_VOLUNTERR_CARD_MANAGEMENT) //Enter Active MemberID, Name, Last 4 digist of NRIC and Card Type

//     SAFRACardManagement(E2EData.MEMBERID_SAFRA_CARD_MANAGEMENT, E2EData.MEMBER_NAME_SAFRA_CARD_MANAGEMENT,
//                         E2EData.LAST4DIGITNRIC_SAFRA_CARD_MANAGEMENT, E2EData.CARD_TYPE_SAFRA_CARD_MANAGEMENT) //Enter Active MemberID, Name, Last 4 digist of NRIC and Card Type

//     VIPCardManagement(E2EData.MEMBERID_VIP_CARD_MANAGEMENT, E2EData.MEMBER_NAME_VIP_CARD_MANAGEMENT,
//                       E2EData.LAST4DIGITNRIC_VIP_CARD_MANAGEMENT, E2EData.CARD_TYPE_VIP_CARD_MANAGEMENT) //Enter Active MemberID, Name, Last 4 digist of NRIC and Card Type

//  })




// describe('E2E Auto Testing:FS-031 Gift: Redemption Management', ()=> {

//     GiftModuleSettings()
//     GiftsManagement() // Always update Publishdatefrom data to current day
//     GiftRedemptionTransactions()
//     GiftRedemptionManagementInsertionAndCollection(E2EData.GRM_INSERTION_AND_COLLECTION.MEMBERID,E2EData.GRM_INSERTION_AND_COLLECTION.GIFT_NAME,E2EData.GRM_INSERTION_AND_COLLECTION.GIFT_QUANTITY) //Pass as Params 1.MemberID 2.Gift Name 3.Quantity
//     GiftRedemptionManagementInsertionAndCancellation(E2EData.GRM_INSERTION_AND_CANCELLETION.MEMBERID,E2EData.GRM_INSERTION_AND_CANCELLETION.GIFT_NAME,E2EData.GRM_INSERTION_AND_CANCELLETION.GIFT_QUANTITY) //Pass as Params 1.MemberID 2.Gift Name 3.Quantity
//     GiftRedemptionManagementInsertionAndExchange(E2EData.GRM_INSERTION_AND_EXCHANGE.MEMBERID,E2EData.GRM_INSERTION_AND_EXCHANGE.GIFT_NAME,E2EData.GRM_INSERTION_AND_EXCHANGE.GIFT_QUANTITY) //Pass as Params 1.MemberID 2.Gift Name 3.Quantity

// })

// describe('E2E Auto Testing:FS-036 SRP', () => {

//   //Always Change the ItemCode, ItemDescription, and Category data before runnning

//   SRPModuleSetting() //Check first the settings for UAT testing
//   SAFRAPointsAdjustment(E2EData.MEMBERID_FOR_SAFRA_POINTS_ADJUSTMENT) //Provide Active member ID
//   SAFRAPointsTransaction(E2EData.MEMBERID_FOR_SAFRA_POINTS_TRANSACTION) //Provide Active member ID
//   SRPRedemptionCollection(E2EData.SRP_REDEMPTION_COLLECTION) //Provide Active member ID
//   SRPRedemptionManagement(E2EData.SRP_REDEMPTION_MANAGEMENT) //Provide Active member ID
//   ThirdPartyVendorManagement()
//   EDCTerminalManagement()
//   SRPRedemptionCatalogueManagement()
//   SRPPromotionManagement(E2EData.MEMBERID_FOR_SRP_PROMOTION_MANAGEMENT, E2EData.MEMBERTYPE_FOR_SRP_PROMOTION_MANAGEMENT) //Provide Active member ID

// })


// describe('E2E Auto Testing:FS-013 & 039: In-House Sale and Merchandise', ()=> {

// InHouseSaleAndMerchandiseItemManagement()
// InHouseSaleAndMerchandisePurchase(E2EData.MEMBERID_FOR_MERCHANDISE_PUECHASE, E2EData.MEMBERID_FOR_INHOUSE_PUECHASE) //Enter Machandise and In-House sale Member IDs
// InHouseSaleAndMerchandiseTransactionAdjustment(E2EData.MEMBERID_FOR_MERCHANDISE_TRANSACTION_ADJUSTMENT, E2EData.MEMBERID_FOR_INHOUSE_TRANSACTION_ADJUSTMENT) //Enter Machandise and In-House sale Member IDs
// InHouseSaleAndMerchandiseTransactionConcellation(E2EData.MEMBERID_FOR_MERCHANDISE_TRANSACTION_CONCELLATION, E2EData.MEMBERID_FOR_INHOUSE_TRANSACTION_CONCELLATION)
// InHouseSaleAndMerchandiseTransactionRefund(E2EData.MEMBERID_FOR_MERCHANDISE_TRANSACTION_REFUND, E2EData.MEMBERID_FOR_INHOUSE_TRANSACTION_REFUND)

// })


// describe('E2E Auto Testing:FS-040 Receipt Management', ()=> {

//     ReceiptManagement()

// })


// describe('E2E Auto Testing:FS-042 Promotion', ()=> {

  // PromotionforE1Gym(E2EData.MEMBERID_FOR_E1_RENEWAL_PROMOTION.MEMBER_ID) //Provide Active Member 
  // PrommotionForFacilityandFacilityType(E2EData.MEMBERID_FOR_FACILITY_PROMOTION.MEMBER_ID) //Provide Active Member
  // PromotionforInHouseMerchandise (E2EData.MEMBERID_FOR_INHOUSE_MERCHANDISE_PROMOTION.MEMBERID) //Provide Active Member
  // PromotionforInterestGroup(E2EData.MEMBERID_FOR_INTERESTG_PROMOTION.MEMBERID) //Provide Active Member
  // PromotionforMembership(CustomerNRICFull) 
  // PromoUtilization()
  // Promotion()


  // New Multiple Bundle Promotion
// })





