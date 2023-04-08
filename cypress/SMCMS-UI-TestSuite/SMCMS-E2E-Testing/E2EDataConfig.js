const E2EData = {

   // FS-014 MEMBERSHIP REGISTRATION AND RENEWAL
   
   NRIC_FOR_MEMBERSHIP_REGISTRATION : 'S6863996D',
   ACTIVE_MEMBERID_FOR_WITHDRAWAL_OF_CONSENT : "A300002652",
   MEMBER_REGISTRATION_WITH_SPOUSE_AND_CHILD : {
       PRINCIPAL_NRIC : 'S8915996B',
       CHILD_NRIC : 'S5665934Z',
       SPOUSE_NRIC : 'S5059523D'
   },
   NRIC_FOR_MEMBERSHIP_REGISTRATION_AND_RENEWAL : 'S8472816J',
   NRIC_FOR_LIFE_MEMBERSHIP_REGISTRATION : 'S8503877Z',
   
   BATCH_REGISTRATION : {
   
       //Member ID and Last 4 digits of NRIC
       MEMBERID_FOR_EXISTING_MEMBER : "A300000639",
       LAST4DIGITSNRIC_FOR_EXISTING_MEMBER : "871J",
   
       //Member Name, DOB, Last 4 digist of NRIC and Full NRIC  
       MEMBER_NAME_FOR_NON_MEMBER : "Auto test627A",
       DOB_FOR_NON_MEMBER : "28-Feb-1982",
       LAST4DIGITSNRIC_FOR_NON_MEMBER : "627A",
       FULLNRIC_FOR_NON_MEMBER : "S1076648F",
   
       //Full NRIC for New Principal 
       NRIC_FOR_NEW_PRINCIPAL : 'S6250814J',
   
       //NRIC for Dependent and Pricipal Member ID
       NRIC_FOR_ADDING_NEW_DEPENDENT : 'S6880247D',
       PRINCIPALID_FOR_NEW_DEPENDENT : "A300002677",
   
   },
   
   // FS-027 MEMBERSHIP MAINTENANCE ACTIVITIES
   SFS_ACTIVE_MEMBERID_FOR_DECEASED : "A300002496",
   SFS_BATCH_TERMINATION_IDS : {
      MEMBERID1 : "A300000293",
      MEMBERID2 : "A300000235",
      MEMBERID3 : "A300002643",
   
   }, 
   SFS_BATCH_DEFERMENT_REQUEST : {
      MEMBERNAME1 : 'Auto-User9214469684',
      MEMBERID1 : 'A300002652',
      MEMBERNAME2 : 'Auto test912D',
      MEMBERID2 : 'A300002657'
   },
   SFS_ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION : "A300000672",
   SFS_TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER : {
      NRIC1:'S4836900F',
      NRIC2:'S9803091C',
   
   },
   SFS_NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST : 'S2803181E',
   SFS_NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT : "S7584205H",
   SFS_NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT : "S8333382J",
   
   
   // FS-028 MEMBERSHIP MAINTENANCE ACTIVITIES
   ACTIVE_MEMBERID_FOR_DECEASED : "A300002496",
   BATCH_TERMINATION_IDS : {
   
      MEMBERID1 : "A30000397",
      MEMBERID2 : "A30000367",
      MEMBERID3 : "A30000284",
   
   },
   BATCH_DEFERMENT_REQUEST : {
   
      MEMBERNAME1 : '989D',
      MEMBERID1 : 'A300000096',
      MEMBERNAME2 : 'safra3rduploadreminder',
      MEMBERID2 : 'A300000235'
   
   },
   
   ACTIVE_MEMBERID_FOR_REINSTATEMENT_CONFIRMATION : "A300000672",
   
   TWO_NRICS_FOR_BATCH_MEMBERSHIP_WAIVER : {
      NRIC1:'S4706999H',
      NRIC2:'S1868907C',
   
   },
   NRIC_FOR_MEMBERSHIP_DEFERMENT_REQUEST : 'S6223646I',
   NRIC_FOR_MEMBERSHIP_RESIGNATION_MANAGEMENT : "S2650418Z",
   NRIC_FOR_MEMBERSHIP_EXPULSION_AND_REINSTATEMENT : "S1282797J",
   
   
   
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
   
   
   // FS = 036 SRP 
   
   MEMBERID_FOR_SAFRA_POINTS_ADJUSTMENT : 'A300001410',
   MEMBERID_FOR_SAFRA_POINTS_TRANSACTION : 'A300001410',
   SRP_REDEMPTION_COLLECTION : 'A300001410',
   SRP_REDEMPTION_MANAGEMENT : 'A300001410',
   
   
   
   }   
   
   export default E2EData 