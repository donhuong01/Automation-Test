const E2EData = {

   // FS-014 MEMBERSHIP REGISTRATION AND RENEWAL
   
   NRIC_FOR_MEMBERSHIP_REGISTRATION : 'S9601846J',
   ACTIVE_MEMBERID_FOR_WITHDRAWAL_OF_CONSENT : "A300002757",
   MEMBER_REGISTRATION_WITH_SPOUSE_AND_CHILD : {
       PRINCIPAL_NRIC : 'S5737293A',
       CHILD_NRIC : 'S6742002J',
       SPOUSE_NRIC : 'S8451627I'
   },
   NRIC_FOR_MEMBERSHIP_REGISTRATION_AND_RENEWAL : 'S6396375E',
   NRIC_FOR_LIFE_MEMBERSHIP_REGISTRATION : 'S1145871H',
   
   BATCH_REGISTRATION : {
   
       //Member ID and Last 4 digits of NRIC
       MEMBERID_FOR_EXISTING_MEMBER : "A300002768",
       LAST4DIGITSNRIC_FOR_EXISTING_MEMBER : "787I",
   
       //Member Name, DOB, Last 4 digist of NRIC and Full NRIC  
       MEMBER_NAME_FOR_NON_MEMBER : "SFS User 15875",
       DOB_FOR_NON_MEMBER : "24-Jan-1980",
       LAST4DIGITSNRIC_FOR_NON_MEMBER : "020I",
       FULLNRIC_FOR_NON_MEMBER : "S0213208G",
   
       //Full NRIC for New Principal 
       NRIC_FOR_NEW_PRINCIPAL : 'S0553067I',
   
       //NRIC for Dependent and Pricipal Member ID
       NRIC_FOR_ADDING_NEW_DEPENDENT : 'S3792372I',
       PRINCIPALID_FOR_NEW_DEPENDENT : "A300000001",
   
   },
   
   // FS-027 MEMBERSHIP MAINTENANCE ACTIVITIES
   SFS_ACTIVE_MEMBERID_FOR_DECEASED : "A300001417",
   SFS_BATCH_TERMINATION_IDS : {
      MEMBERID1 : "A300000236",
      MEMBERID2 : "A300000272",
      MEMBERID3 : "A300000346",
   
   }, 
   SFS_BATCH_DEFERMENT_REQUEST : {
      MEMBERNAME1 : 'SFS User 15936',
      MEMBERID1 : 'A300000679',
      MEMBERNAME2 : 'SFS User 4064',
      MEMBERID2 : 'A300000681'
   },
   SFS_ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION : "A300000545",
   SFS_TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER : {
      NRIC1:'S6543582I',
      NRIC2:'S7768411E',
   
   },
   SFS_NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST : 'S3121664H',
   SFS_NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT : "S1330543I",
   SFS_NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT : "S2623639H",
   
   
   // FS-028 MEMBERSHIP MAINTENANCE ACTIVITIES
   ACTIVE_MEMBERID_FOR_DECEASED : "A300002757",
   BATCH_TERMINATION_IDS : {
   
      MEMBERID1 : "A300000272",
      MEMBERID2 : "A300000267",
      MEMBERID3 : "A300000179",
   
   },
   BATCH_DEFERMENT_REQUEST : {
   
      MEMBERNAME1 : 'Robert Wong',
      MEMBERID1 : 'A300000506',
      MEMBERNAME2 : 'John Tay',
      MEMBERID2 : 'A300000507'
   
   },
   
   ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION : "A300000013",
   
   TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER : {
      NRIC1:'S1918194D',
      NRIC2:'S9629335F',
   
   },
   NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST : 'S3695850B',
   NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT : "S3992373D",
   NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT : "S3217366G",
   
   
   
   // FS-015 E1 GYM MEMBERSHIP
   
   ENTER_MEMBERID_AND_NAME_E1GYM_REG_WITH_EXISTING_MEMBET : {
   
      MEMBERID:'A300002032',
      MEMBERNAME:'Test 1'
   
   },
   
   ENTER_MEMBERID_NAME_AND_E1GYMID_FOR_RENEWAL :{
   
      MEMBERID:'A300000278',
      MEMBERNAME:'TestUser07252022',
      E1GYM_MEMBERSHIP_ID:'G1000000082'
   
   },
   
   
   MEMBERID_FOR_CANCELLATION_BEFORE_PAYMENT : 'A300001482',
   MEMBERID_FOR_E1GYM_CONVERSION : 'A300000022',
   E1_GYMID_FOR_E1GYM_DEFERMENT : 'G1000000082',
   ACTIVE_MEMBERID_FOR_E1GYM_TERMINATION : 'A300001775',
   INACTIVE_MEMBERID_FOR_E1GYM_REINSTATMENT : 'A300001775',
   ACTIVE_MEMBERID_FOR_E1GYM_WAIVER : 'A300002056',
   MEMBERID_FOR_E1GYM_REVERSAL : 'A300001046',
   
   E1GYMMembershipDataManagement : {
      MEMBERID : 'A300001798',
      E1_GYM_MEMBERSHIPID : 'G1000000017',
   },
   
   
   // FS - 016 INTEREST GROUP REGISTRATION AND RENEWAL
   
   MEMBERID_FOR_IG_REGISTRATION : 'S2102786C',
   MEMBERID_FOR_IG_RENEWAL : 'A300001781',
   BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_DEFUALT_IG : 'A300000511',
   BATCH_MEMBER_REGISTRATION_WITH_EXISTING_MEMBER_USING_NON_DEFUALT_IG : 'A300001194',
   
   IG_DEACTIAVATION : '',
   MEMBER_NAME_FOR_IG_CONVERSION : 'Testuser007',
   MEMBER_NAME_FOR_IG_DEFERMENT : 'MemBR 1',
   MEMBERID_AND_NAME_FOR_IG_TERMINATION : {
   
       MEMBERID : 'A300001811',
       MEMBERNAME: 'Tong Hui'
   },
   MEMBERID_FOR_IG_REINSTATEMENT : {
      
       MEMBERID : 'A300001811',
       MEMBERNAME: 'Tong Hui'
   },
   MEMBER_NAME_FOR_IG_REVERSAL : 'Auto-User4345',
   MEMBER_NAME_FOR_IG_WAIVER : 'Auto-User7632',
   
   
   // FS - 036 SRP 
   
   MEMBERID_FOR_SAFRA_POINTS_ADJUSTMENT : 'A300001410',
   MEMBERID_FOR_SAFRA_POINTS_TRANSACTION : 'A300001410',
   SRP_REDEMPTION_COLLECTION : 'A300001410',
   SRP_REDEMPTION_MANAGEMENT : 'A300001410',
   
   
   //FS - 013 & 039  In-House Sale and Merchandise

   MEMBERID_FOR_MERCHANDISE_PUECHASE : 'A300001467', 
   MEMBERID_FOR_INHOUSE_PUECHASE : 'A300001452',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_ADJUSTMENT : 'A300001443',
   MEMBERID_FOR_INHOUSE_TRANSACTION_ADJUSTMENT : 'A300001093',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_CONCELLATION : 'A300001446',
   MEMBERID_FOR_INHOUSE_TRANSACTION_CONCELLATION : 'A300000288',

   MEMBERID_FOR_MERCHANDISE_TRANSACTION_REFUND : 'A300000396',
   MEMBERID_FOR_INHOUSE_TRANSACTION_REFUND : 'A300000288',

   

   // FS - 040 Card Management

   MEMBERID_VOLUNTERR_CARD_MANAGEMENT : 'A300000835',
   MEMBER_NAME_VOLUNTERR_CARD_MANAGEMENT : 'TestUser884B',
   LAST4DIGITNRIC_VOLUNTERR_CARD_MANAGEMENT : '884B',
   CARD_TYPE_VOLUNTERR_CARD_MANAGEMENT : 'SAFRA DBS Credit Card',


   MEMBERID_SAFRA_CARD_MANAGEMENT : 'A300000830',
   MEMBER_NAME_SAFRA_CARD_MANAGEMENT : 'TesterMeminfo',
   LAST4DIGITNRIC_SAFRA_CARD_MANAGEMENT : '253F',
   CARD_TYPE_SAFRA_CARD_MANAGEMENT : 'SAFRA DBS Credit Card',


   MEMBERID_VIP_CARD_MANAGEMENT : 'A300000836',
   MEMBER_NAME_VIP_CARD_MANAGEMENT : 'TestUser512H',
   LAST4DIGITNRIC_VIP_CARD_MANAGEMENT : '512H',
   CARD_TYPE_VIP_CARD_MANAGEMENT : 'SAFRA DBS Credit Card',

   }   
   
   export default E2EData 