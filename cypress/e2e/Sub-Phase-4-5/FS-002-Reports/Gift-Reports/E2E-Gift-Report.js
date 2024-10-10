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

        it('Checking functionallity and Verification on Gift Redemption Letter Email', function(){
            Gifts_Reports.verifyGiftRedemptionLetterEmail
            {
                data.GIFT_REDEMPTION_LETTER_EMAIL.EXPECTEDPG
            }
        })
        
        it('Checking functionallity and Verification on Gift Redemption Letter Mobile', function(){
            Gifts_Reports.verifyGiftRedemptionLetterMobile
            {
                data.GIFT_REDEMPTION_LETTER_MOBILE.EXPECTEDPG
            }
        })

        it('Checking functionallity and Verification on Inventory Transaction', function(){
            Gifts_Reports.verifyInventoryTransaction
            {
                data.INVENTORY_TRANSACTION.EXPECTEDPG
            }
        })

        it('Checking functionallity and Verification on Pending Collection', function(){
            Gifts_Reports.verifyPendingCollection
            {
                data.INVENTORY_TRANSACTION.EXPECTEDPG
            }
        })
        
    })

}

export default Gifts_Report