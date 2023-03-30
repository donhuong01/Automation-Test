import InterestGroupMembershipCoversion from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipCoversion'
import InterestGroupMembershipListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing'
import login from '../../../../fixtures/login'



beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[TS01] FS-016 Interest Group Membership Conversion', function () {

    it('[TC01] Converting Interest Group Membership ', function () {

        cy.visit('/membership/interestGroupMembershipListing')

        InterestGroupMembershipListing.FiterWithCustomerName("John Lee")

        cy.xpath('(//h2[text()="Interest Group Membership Listing"]//ancestor::div//table//tbody//tr//td)[3]').then(IG => {

            const DestinationIG = IG.text()

            InterestGroupMembershipListing.SlectTableLinkItem("John Lee")

            InterestGroupMembershipListing.Maintenance('Convert')

            InterestGroupMembershipCoversion.ConversionInformation(DestinationIG, "Conversion")

            InterestGroupMembershipCoversion.Convert()

            InterestGroupMembershipListing.FiterWithCustomerName("John Lee")

            InterestGroupMembershipListing.SlectTableLinkItem("John Lee")

            InterestGroupMembershipListing.ViewTransactionHistory()

            InterestGroupMembershipListing.VerifyConvertionStatus("Conversion")
        })

    })



    it('[TC03] Cancellation of Interest Group Membership conversion ', function () {

        cy.visit('/membership/interestGroupMembershipListing')

        InterestGroupMembershipListing.FiterWithCustomerName("John Lee")

        InterestGroupMembershipListing.SlectTableLinkItem("John Lee")

        InterestGroupMembershipListing.Maintenance('Convert')

        InterestGroupMembershipCoversion.ConversionInformation("BITEZ", "Conversion")

        InterestGroupMembershipCoversion.Cancel()


    })

})