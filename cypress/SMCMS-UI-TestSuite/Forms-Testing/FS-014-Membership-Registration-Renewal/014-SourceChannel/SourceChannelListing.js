import data from '../../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import SourceChaListing from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Source Channel/SourceChannelListing'
import elems_SourceChannelListing from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/SourceChannelListing'

describe('[SP1-FS014_TS07] SourceChannelListing]', () => {
    //page definition
    const SrcChannelListing = new SourceChaListing()

    // beforeEach(() => {
    //     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
    //     cy.visit('https://qa-smcms.safra.sg/membership/sourceChannelList')
    // })

    it('[SP1-FS014_TS07_TC01] Verify table listing and Create New functionality', () => {
        cy.visit('/membership/sourceChannelList')
        SrcChannelListing.verifySourceChannelListingPageTitle()
        SrcChannelListing.verifysourcechannelisting(data.Name)
        SrcChannelListing.CreateNew()
        cy.wait(3000)
    })

    it('[SP1-FS014_TS07_TC02] Search Filters Source Channel Listing', () => {
        cy.visit('/membership/sourceChannelList')
        SrcChannelListing.filterSourceChannelListing({
            Name: data.sourcechaListing.Name,
            Type: data.sourcechaListing.Type
        })
        cy.ClickTableLink(elems_SourceChannelListing.TBL_SOURCECHANNELLISTING,
            'Name', data.sourcechaListing.Name,
            'Type', data.sourcechaListing.Type
        )
        cy.wait(3000)
    })


    it('[SP1-FS014_TS07_TC01] Delete Functionality Click on "No" in Delete confirmation Popup', () => {
        cy.visit('/membership/sourceChannelList')
        cy.SelectTableItem(elems_SourceChannelListing.TBL_SOURCECHANNELLISTING,
            'Name', data.sourceDataChannel.sourcechaListing.Name,
            'Type', data.sourceDataChannel.sourcechaListing.Type
        )

        //Click On Delete Button
        SrcChannelListing.Delete()

        //Click on 'No' Delete Confirmation Popup
        SrcChannelListing.DeleteConfirmationNo()

    })

    it('[SP1-FS014_TS07_TC01] Delete Functionality Click on "Yes" in Delete confirmation Popup', () => {

        cy.SelectTableItem(elems_SourceChannelListing.TBL_SOURCECHANNELLISTING,
            'Name', data.sourcechaListing.Name,
            'Type', data.sourcechaListing.Type
        )

        //Click On Delete Button
        SrcChannelListing.Delete()

        //Click on 'No' Delete Confirmation Popup
        SrcChannelListing.DeleteConfoirmationYes()

    })

})