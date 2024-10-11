import Report_AdminSetting from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-001-Admin-Settings/AdminSetting-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/AdminSetting-Reports-data"


const Reports_AdminSetting  = new Report_AdminSetting ()

const AdminSetting_Report = () => {

    describe("Admin Settings Verification",function(){

        it('Checking functionallity and Verification on Collected Redeemed Stock Listing', function(){
            Reports_AdminSetting.verifyNotificationLogListing
            (
                data.NOTIF_LOG.EXPECTEDPG
            )
        })

    })


}

export default AdminSetting_Report