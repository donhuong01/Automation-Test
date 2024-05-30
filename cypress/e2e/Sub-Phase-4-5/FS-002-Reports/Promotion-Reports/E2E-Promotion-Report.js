import Promotion_Reports from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-042-Promotion Reports/Promotions-Reports-Verification"
import data from "../../../../fixtures/Data_Module/FS-002-Reports/Promotion-Reports-data"

const Promotions_Report = new Promotion_Reports ()

const Promotion_Report = () => {

describe("Promotion Access Checking",function(){

    it('Checking Access on Bundle Promotion', function(){
        Promotions_Report.verifyBundlePromotion
        (
            data.BUNDLE_PROMOTION.EXPECTEDPG
        )
    })

    it('Checking Access on Bundle Promotion Detail', function(){
        Promotions_Report.verifyBundlePromotionDetail
        (
            data.BUNDLE_PROMOTION_DETAIl.EXPECTEDPG,

        )
    })


})


}

export default Promotion_Report