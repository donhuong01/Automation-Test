import Reports_Gifts from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-031-Gift-Reports/Gift-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Gifts-Reports-data"

const Gifts_Reports = new Reports_Gifts ()

const Gifts_Report = () => {

    describe("Gift Reports Verification",function(){

        it('Checking functionallity and Verification on Collection Settlement', function(){
            Gifts_Reports.verifyCollectionSettlement
            {
                data.COLLECTION_SETTLEMENT.EXPECTEDPG
            }
        })

        it('Checking functionallity and Verification on Counter Collection Settlement', function(){
            Gifts_Reports.verifyCounterCollectionSettlement
            {
                data.COUNTER_COLLECTION_SETTLEMENT.EXPECTEDPG
            }
        })
    })

}

export default Gifts_Report