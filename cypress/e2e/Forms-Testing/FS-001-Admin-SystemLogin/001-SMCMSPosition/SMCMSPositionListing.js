import PositionListing from '../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSPosition/SMCMSPositionListing'
import elems_SMCMSPoitionDetail from '../../../../page-objects/SMCMS/Elements/Admin/FS001_Admin-SystemLogin/SMCMSPositionDetail'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data'

describe('[TS01] SMCMS Position Listing Form', function () {

    //Page definiton
    const posList = new PositionListing()
    const Name = data.positionList.positionName
    const lastDate = data.positionList.lastDate

 beforeEach(() => {

        cy.visit('/admin/smcmsPositionList') //visit the form
        cy.wait(5000) //wait for 5 secs

    })   

    it('[TC01] Verify the form title and create new button functionality', function () {

        //verify page title
        posList.verifyPageTitle()

        //Verify create new button functionality
        posList.createNew()

        //Click cancel button
        cy.Click(elems_SMCMSPoitionDetail.BTN_CANCEL, 'SMCMS Position Listing')
    }),

        it('[TC02] Verify the form filters functionality', function () {
            //Verify Search filter functionality
            posList.VerifySearchFilter(Name)
        }),

        it('[TC03] Verify the form delete Confirmation PopUp  Cancel button', function () {

            //Delete from the form 
            posList.Delete(Name)
            posList.DeleteConfirmCancel()

        }),
        it('[TC04] Verify the form delete Confirmation PopUp NO button', function () {

            //Delete from the form 
            posList.Delete(Name, lastDate)
            posList.DeleteConfirmNo()
        }),
        it('[TC05] Verify the form delete Confirmation PopUp  YES button', function () {

            //Delete from the form 
            posList.Delete(Name, lastDate)

            posList.DeleteConfirmYes()

        })
})
