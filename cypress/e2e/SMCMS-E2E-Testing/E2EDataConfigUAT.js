const E2EData = {

   // FS-014 MEMBERSHIP REGISTRATION AND RENEWAL

   NRIC_FOR_MEMBERSHIP_REGISTRATION : 'S5749452B',
   ACTIVE_MEMBERID_FOR_WITHDRAWAL_OF_CONSENT : "A300005638",
   MEMBER_REGISTRATION_WITH_SPOUSE_AND_CHILD : {
       PRINCIPAL_NRIC : 'S1305572F',
       CHILD_NRIC : 'S1305572F',
       SPOUSE_NRIC : 'S1462588G'
   },
   NRIC_FOR_MEMBERSHIP_REGISTRATION_AND_RENEWAL: 'S7319523C',
   NRIC_FOR_LIFE_MEMBERSHIP_REGISTRATION: 'S7382845G',

   BATCH_REGISTRATION: {

      //Member ID and Last 4 digits of NRIC
      MEMBERID_FOR_EXISTING_MEMBER: "A300003850",
      LAST4DIGITSNRIC_FOR_EXISTING_MEMBER: "924A",

      //Member Name, DOB, Last 4 digist of NRIC and Full NRIC
      MEMBER_NAME_FOR_NON_MEMBER: "Auto test627Aw",
      DOB_FOR_NON_MEMBER: "28-Feb-1982",
      LAST4DIGITSNRIC_FOR_NON_MEMBER: "955I",
      FULLNRIC_FOR_NON_MEMBER: "S4447955I",

      //Full NRIC for New Principal
      NRIC_FOR_NEW_PRINCIPAL: 'S0224251F',

      //NRIC for Dependent and Pricipal Member ID
      NRIC_FOR_ADDING_NEW_DEPENDENT: 'S3246361D',
      PRINCIPALID_FOR_NEW_DEPENDENT: '',

   },

   // FS-027 MEMBERSHIP MAINTENANCE ACTIVITIES
   SFS_ACTIVE_MEMBERID_FOR_DECEASED: "A300000387",
   SFS_BATCH_TERMINATION_IDS: {
      MEMBERID1: "A300003002",
      MEMBERID2: "A300002988",
      MEMBERID3: "A300002999",

   },
   SFS_BATCH_DEFERMENT_REQUEST: {
      MEMBERNAME1: 'Test Payment1',
      MEMBERID1: 'A300003002',
      MEMBERNAME2: 'Auto-User2302431032',
      MEMBERID2: 'A300002999'
   },
   SFS_ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION: "A300000464",
   SFS_TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER: {
      NRIC1: 'S5956839F',
      NRIC2: 'S3852401A',

   },
   SFS_NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST: 'S1078184A',
   SFS_NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT: "S3108323J",
   SFS_NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT: "S3894611J",


   // FS-028 MEMBERSHIP MAINTENANCE ACTIVITIES
   ACTIVE_MEMBERID_FOR_DECEASED: "A300000485",
   BATCH_TERMINATION_IDS: {

      MEMBERID1: "A30000397",
      MEMBERID2: "A30000367",
      MEMBERID3: "A30000284",

   },
   BATCH_DEFERMENT_REQUEST: {

      MEMBERNAME1: '989D',
      MEMBERID1: 'A300000096',
      MEMBERNAME2: 'safra3rduploadreminder',
      MEMBERID2: 'A300000235'

   },

   ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION: "A300000081",

   TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER: {
      NRIC1: 'S3782989G',
      NRIC2: 'S6382863G',

   },
   NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST: 'S8436305G',
   NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT: "S5063736J",
   NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT: "S9519482F",



   // FS-015 E1 GYM MEMBERSHIP

   ENTER_MEMBERID_AND_NAME_E1GYM_REG_WITH_EXISTING_MEMBET: {

      MEMBERID: 'A300005668',
      MEMBERNAME: 'Auto-User5145912684'

   },

   ENTER_MEMBERID_NAME_AND_E1GYMID_FOR_RENEWAL: {

      MEMBERID: 'A300001795',
      MEMBERNAME: 'Peter Pan',
      E1GYM_MEMBERSHIP_ID: 'G1000000030'

   },


   MEMBERID_FOR_CANCELLATION_BEFORE_PAYMENT: 'A300001482',
   MEMBERID_FOR_E1GYM_CONVERSION: 'A300001844',
   E1_GYMID_FOR_E1GYM_DEFERMENT: 'G1000000030',
   ACTIVE_MEMBERID_FOR_E1GYM_TERMINATION: 'A300001795',
   INACTIVE_MEMBERID_FOR_E1GYM_REINSTATMENT: 'A300001795',
   ACTIVE_MEMBERID_FOR_E1GYM_WAIVER: 'A300001795',
   MEMBERID_FOR_E1GYM_REVERSAL: 'A300002662',

   E1GYMMembershipDataManagement: {
      MEMBERID: 'G1000000017',
      E1_GYM_MEMBERSHIPID: 'A300001798',
   },


   // FS - 016 INTEREST GROUP REGISTRATION AND RENEWAL

   MEMBERID_FOR_IG_REGISTRATION : 'S5114784G',
   MEMBERID_FOR_IG_RENEWAL : 'S9079696H',
   BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_DEFUALT_IG : 'A300001793',
   BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_NON_DEFUALT_IG : 'A300002963',

   IG_DEACTIAVATION : '',
   MEMBER_NAME_FOR_IG_CONVERSION : 'Juan Dela Cruz',
   MEMBER_NAME_FOR_IG_DEFERMENT : 'Test User 23',
   MEMBERID_AND_NAME_FOR_IG_TERMINATION : {

       MEMBERID : 'A300003267',
       MEMBERNAME: 'Test User 22'
   },
   MEMBERID_FOR_IG_REINSTATEMENT : {

       MEMBERID : 'A300001147',
       MEMBERNAME: 'Richie Run'
   },
   MEMBER_NAME_FOR_IG_REVERSAL: 'Test User 59760',
   MEMBER_NAME_FOR_IG_WAIVER: 'Test User NaN',


   // FS - 036 SRP

   MEMBERID_FOR_SAFRA_POINTS_ADJUSTMENT: 'A300000191',
   MEMBERID_FOR_SAFRA_POINTS_TRANSACTION: 'A300000191',
   SRP_REDEMPTION_COLLECTION: 'A300000191',
   SRP_REDEMPTION_MANAGEMENT: 'A300003842',
   MEMBERID_FOR_SRP_PROMOTION_MANAGEMENT: 'A300000191', // QA; A300000191  UAT; A300001638
   MEMBERTYPE_FOR_SRP_PROMOTION_MANAGEMENT: 'AS',


   //FS - 013 & 039 In-House Sale and Merchandise

   MEMBERID_FOR_MERCHANDISE_PUECHASE: 'A300002823',
   MEMBERID_FOR_INHOUSE_PUECHASE: 'A300001452',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_ADJUSTMENT: 'A300001443',
   MEMBERID_FOR_INHOUSE_TRANSACTION_ADJUSTMENT: 'A300001093',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_CONCELLATION: 'A300001826',
   MEMBERID_FOR_INHOUSE_TRANSACTION_CONCELLATION: 'A300000288',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_REFUND: 'A300000396',
   MEMBERID_FOR_INHOUSE_TRANSACTION_REFUND: 'A300000288',


   // FS - 040 Card Management

   MEMBERID_VOLUNTERR_CARD_MANAGEMENT: 'A300006568',
   MEMBER_NAME_VOLUNTERR_CARD_MANAGEMENT: 'Auto-User1785384726',
   LAST4DIGITNRIC_VOLUNTERR_CARD_MANAGEMENT: '460E',
   CARD_TYPE_VOLUNTERR_CARD_MANAGEMENT: 'SAFRA DBS Debit Card',


   MEMBERID_SAFRA_CARD_MANAGEMENT: 'A300004103',
   MEMBER_NAME_SAFRA_CARD_MANAGEMENT: 'Auto-User8747631753',
   LAST4DIGITNRIC_SAFRA_CARD_MANAGEMENT: '821C',
   CARD_TYPE_SAFRA_CARD_MANAGEMENT: 'SAFRA Classic Card',


   MEMBERID_VIP_CARD_MANAGEMENT: 'A300006568',
   MEMBER_NAME_VIP_CARD_MANAGEMENT: 'Auto-User1785384726',
   LAST4DIGITNRIC_VIP_CARD_MANAGEMENT: '460E',
   CARD_TYPE_VIP_CARD_MANAGEMENT: 'SAFRA DBS Debit Card',



   // FS -010 FACILITY
   CALENDAR_NAME: '2023 Calendar.',
   PERIODOFCALENDAR: 'School Term I',
   OPERATING_PERIOD_NAME: 'JR - BBQ Sch Day',


   // FS-031 Gift Redemption Management
   GRM_INSERTION_AND_COLLECTION: {

      MEMBERID: "A300000387",
      GIFT_NAME: "$1 MCDONALD’S GIFT CERTIFICATE",
      GIFT_QUANTITY: "1"
   },

   GRM_INSERTION_AND_CANCELLETION: {

      MEMBERID: "A300000387",
      GIFT_NAME: "$1 MCDONALD’S GIFT CERTIFICATE",
      GIFT_QUANTITY: "1"
   },

   GRM_INSERTION_AND_EXCHANGE: {

      MEMBERID: "A300000387",
      GIFT_NAME: "$1 MCDONALD’S GIFT CERTIFICATE",
      GIFT_QUANTITY: "1"
   },


   // FS-012 AccomMmdation
   ACCOMMODATION_BOOKING_MANAGEMENT: {

      SAFRA_MEMBERID: "A300002294",
      GEUSTID: "A300000547"
   },

   ACCOMMODATION_RESERVATION_MANAGEMENT: {

      SAFRA_MEMBERID: "A300002294"
   },

   // FS-042 Promotio

   MEMBERID_FOR_E1_RENEWAL_PROMOTION: {
      MEMBER_ID: "A300005574" //UAT - A300006964 //QA - A300005574
   },

   MEMBERID_FOR_FACILITY_PROMOTION: {
      MEMBER_ID: "A300005574"
   },

   MEMBERID_FOR_INHOUSE_MERCHANDISE_PROMOTION: {
      MEMBERID: "A300005574" //QA - A300005574 // UAT - A300005574
   },

   MEMBERID_FOR_INTERESTG_PROMOTION: {
      MEMBERID: "A300005574"
   },

   FULLNRIC_FOR_MEMBERSHIP_PROMOTION: {
      FULLNRIC: "S8266084D"
   },

   FACILITY_GROUP_BOOKING: {
      SAFRA_MEMBER: "A300000160",
      SAFRA_RELATED_MEMBER: "A300000160",
      SAFRA_GUEST: "	A300000451"
   }

}





export default E2EData