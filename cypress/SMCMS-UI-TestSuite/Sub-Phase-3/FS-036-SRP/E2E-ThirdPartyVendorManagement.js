import ThirdPartyVendoreListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/ThirdPartyVendoreListing'
import ThirdPartyVendoreDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/ThirdPartyVendoreDetail'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'

const { VendorID, Name, MerchandiseID, Status, ContactNO, UpdatedContactNO, UpdatedMerchandiseID, UpdatedVendorID, UpdatedName, UpdatedStatus } = data.Third_Party_Vendore_Management

const ThirdPartyVendorManagement = () => {

describe('[TS07] FS-036 Third Party Vendor Management', function () {

    it('[TC01] Creating New and Updating Third Party Vendor', function () {


        // Visit Third Party Vendor Listing
        cy.visit('/membership/srp/thirdPartyVendorListing')
        cy.wait(5000)

        //Click on Create new button
        ThirdPartyVendoreListing.CreateNew()

        // Fill Out Third Party Vendor Detail
        ThirdPartyVendoreDetail.FilloutThirdPartyVendorDetail(VendorID, Name, MerchandiseID, Status, ContactNO)

        //Click on Save button
        ThirdPartyVendoreDetail.Save()

        // Filter by VendorID, Name, Status
        ThirdPartyVendoreListing.Filters(VendorID, Name, Status)

        //Click on newly created item in the listing form
        ThirdPartyVendoreListing.ClickVendoreIDLink(VendorID)

        //Update the fields
        ThirdPartyVendoreDetail.UpdateThirdPartyVendorDetail(UpdatedVendorID, UpdatedName,
            UpdatedMerchandiseID, UpdatedStatus, UpdatedContactNO)

        // Click on Save button
        ThirdPartyVendoreDetail.Save()

        //Verify updated item
        ThirdPartyVendoreListing.Filters(UpdatedVendorID, UpdatedName, UpdatedStatus)




    })
    it('[TC02] Deleting Third Party Vendor item', function () {


        // Visit Third Party Vendor Listing
        cy.visit('/membership/srp/thirdPartyVendorListing')
        cy.wait(3000)

        //Verify updated item
        ThirdPartyVendoreListing.Filters(UpdatedVendorID, UpdatedName, UpdatedStatus)

        //Select Table item
        ThirdPartyVendoreListing.SelectItem(UpdatedVendorID)

        //
        ThirdPartyVendoreListing.Delete()

        ThirdPartyVendoreListing.DeletePopupYes()





    })


})

}

export default ThirdPartyVendorManagement