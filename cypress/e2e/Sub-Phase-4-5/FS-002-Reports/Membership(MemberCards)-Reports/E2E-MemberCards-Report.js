import Reports_MemberCards from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-030-Membership-CardManagement-Reports/CardManagement-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/MemberCards-Reports-data"

const MemberCards_Reports = new Reports_MemberCards ()

const Accommodation_Report = () => {

describe("E1 Accommodation Verification",function(){

    it('Checking functionallity and Verification on Identity User Matrix Listing', function(){
        MemberCards_Reports.verifyIdentifyUserMatrix
        (
            data.IDENTITY_USER_MATRIX.EXPECTEDPG
        )
    })

    it('Checking functionallity and Verification on Identity User Matrix Listing', function(){
        MemberCards_Reports.verifyMemberCard
        (
            data.MEMBER_CARD.EXPECTEDPG,
            data.MEMBER_CARD.LASTUSED_FROM,
            data.MEMBER_CARD.LASTUSED_TO
        )
    })

})


}

export default Accommodation_Report