/*****************************************************
 * Page Function: End to End Flow to Test Bad Address Update Listing Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/
// Import Pages
import BadAddressUpdateDetail from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Bad Address Update/BadAddressUpdateDetail'
import BadAddressUpdateListing from'../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Bad Address Update/BadAddressUpdateListing'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'



const BadAddressUpdate = ()=> {

describe('[TS16] Bad Address Update', function () {

    // Page Definitions
    const BadAddressDtl = new BadAddressUpdateDetail()
    const BadAddUpdList = new BadAddressUpdateListing()

    it('[TC01] Creating a bad address update', function () {

            // Navigate to form
            cy.visit('/membership/badAddressUpdateList')
            cy.wait(3000)

            BadAddUpdList.createNew()

            // Fill Out Form
            BadAddressDtl.filloutBadAddressUpdateDetail({
                batchId : data.BadAddressUpdateDetail.batchId,
                uploadFile : data.BadAddressUpdateDetail.uploadFile,
                status : data.BadAddressUpdateDetail.status
            })

            // Validate Form
            BadAddressDtl.validate()

            cy.wait(5000)
            
            // Upload Form
            // BadAddressDtl.upload()

            // Cancel Form
            //BadAddressDtl.cancel('Bad Address Update Detail')

            cy.intercept('POST', '/smcms/v2/adminapi/membership/bad-address-update-requests/', (req) => {
                console.log(req.body)
              })

      
    })
     
    
    //  it('[TC02] Validate a newly created item in the bad Address Update List', function () {
 
    //          // Navigate to Form
    //          cy.visit('/membership/badAddressUpdateList')
        
    //          // // Verify Listing
    //           BadAddUpdList.verifyBadAddressUpdateList('Validation Failed', 'BA-BR-1000038')
 
    //          // Click item link
    //          BadAddUpdList.clickBatchIdLink(data.BadAddressUpdateListing.batchId)
    //          cy.visit('/membership/badAddressUpdateList') // Return to form
 
    //          // Tick item checkbox
    //          BadAddUpdList.selectBatchId(data.BadAddressUpdateListing.batchIdItem)
             
    //          // ITEM MUST BE SELECTED BEFORE DELETE BUTTON IS ENABLED
    //          // Delete Item 
    //          //BadAddUpdList.delete()
 
    //      })

     it('[TC02] Click and update bad address update listing', function () {
 
             // Navigate to Form
             cy.visit('/membership/badAddressUpdateList')
             cy.wait(3000)

             cy.Click('//span[@class="k-icon k-svg-icon k-svg-i-caret-alt-to-right k-button-icon"]')
             cy.wait(5000)
        
             //click on item
             BadAddUpdList.ClickAndUpdateBadAddress()

             //Upload file
             BadAddressDtl.filloutBadAddressUpdateDetail({

                uploadFile : 'bad-address-test.xlsx',
                
            })

            // Validate Form
            BadAddressDtl.validate()

            cy.Click('//span[@class="k-icon k-svg-icon k-svg-i-caret-alt-to-right k-button-icon"]')
            cy.wait(5000)

            // Verify Listing
            BadAddUpdList.verifyBadAddressUpdateList('Validation Failed')
            
         })
})

}

export default BadAddressUpdate