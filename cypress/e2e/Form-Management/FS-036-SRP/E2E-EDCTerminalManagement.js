import EDCTerminalListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/EDC_TerminalListing'
import EDCTerminalDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/EDC_TerminalDetail'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


const { Name, Placement, SourceChannel, ThirdPartyVendoreID, ItemGSTGroup, FabsGroup, ClubClassification, SMCClassification } = data.EDC_Terminal_Management

const EDCTerminalManagement = () => {

describe('[TS09] FS-036 EDC Terminal Management', function () {

    it('[TC01] Creating New and Updating EDC Terminal', function () {

        cy.visit('/membership/srp/edcTerminalListing')
        cy.wait(3000)

        //Click on Create New button
        EDCTerminalListing.CreateNew()

        // EDC Terminal Detail form
        EDCTerminalDetail.FilloutFields(Name, Placement, SourceChannel, ThirdPartyVendoreID,
            ItemGSTGroup, FabsGroup, ClubClassification, SMCClassification)

        //Click on Save Button
        EDCTerminalDetail.Save()

        //Filter by Name and Store
        EDCTerminalListing.FiltersByNameAndStore(Name, SourceChannel)

        //Select Table entry
        EDCTerminalListing.SelectItem(Name)

        //Delete table entry
        EDCTerminalListing.Delete()

    })


})

}

export default EDCTerminalManagement