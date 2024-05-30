import Reports_Gifts from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-031-Gift-Reports/Gift-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Gifts-Reports-data"

const Gifts_Reports = new Reports_Gifts ()

const Gifts_Report = () => {

    describe("Gift Reports Verification",function(){

        it('Checking Access on on Collection Settlement', function(){
            Gifts_Reports.verifyCollectionSettlement
            {
                data.COLLECTION_SETTLEMENT.EXPECTEDPG
            }
        })

        it('Checking Access on on Counter Collection Settlement', function(){
            Gifts_Reports.verifyCounterCollectionSettlement
            {
                data.COUNTER_COLLECTION_SETTLEMENT.EXPECTEDPG
            }
        })

        it('Checking Access on on Gift Redemption Letter Email', function(){
            Gifts_Reports.verifyGiftRedemptionLetterEmail
            {
                data.GIFT_REDEMPTION_LETTER_EMAIL.EXPECTEDPG
            }
        })
        
        it('Checking Access on on Gift Redemption Letter Mobile', function(){
            Gifts_Reports.verifyGiftRedemptionLetterMobile
            {
                data.GIFT_REDEMPTION_LETTER_MOBILE.EXPECTEDPG
            }
        })

        it('Checking Access on on Inventory Transaction', function(){
            Gifts_Reports.verifyInventoryTransaction
            {
                data.INVENTORY_TRANSACTION.EXPECTEDPG
            }
        })

        it('Checking Access on on Pending Collection', function(){
            Gifts_Reports.verifyPendingCollection
            {
                data.INVENTORY_TRANSACTION.EXPECTEDPG
            }
        })

        it('Checking Access on on Gift Collection', function(){
            Gifts_Reports.verifyGiftCollection
            {
                data.GIFT_COLLECTION.EXPECTEDPG
            }
        })

        it('Checking Access on on Gift Redemption Letter', function(){
            Gifts_Reports.verifyGiftRedemptionLetter
            {
                data.GIFT_REDEMPTION_LETTER.EXPECTEDPG
            }
        })

        it('Checking Access on on Gift Redemption Letter Address', function(){
            Gifts_Reports.verifyGiftRedemptionLetterAddress
            {
                data.GIFT_REDEMPTION_LETTER_ADDRESS.EXPECTEDPG
            }
        })

        it('Checking Access on on Transactions With Gift', function(){
            Gifts_Reports.verifyTransactionsWithGift
            {
                data.TRANSACTIONS_WITH_GIFT.EXPECTEDPG
            }
        })
        
    })

}

export default Gifts_Report