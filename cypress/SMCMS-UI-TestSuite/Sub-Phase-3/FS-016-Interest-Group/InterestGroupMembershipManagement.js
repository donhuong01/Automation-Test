import InterestGroupListing from "../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupMembershipListing";

import login from '../../../fixtures/login'
import Data from '../../../fixtures/Data_Module/FS-016-Interest-Group/FS-016-Interest-Group-Management'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)


//     cy.visit('/membership/interestGroupMembershipListing')

// })

const InterestGroupMembershipManagment = () => {

const { IGMian, InterestGroup, IGMembershipID, SAFRAMembershipID, Status, CustomerName, ExpiryDateFrom, ExpiryDateTo, InitialJoinDate, ExpiryDate, MembershipStatusReason } = Data.IGMembershipListing

describe('FS-016 Interest Group Membership Management', function () {

    it('Checking Interest Group Member listing filters functionality', function () {

        cy.visit('/membership/interestGroupMembershipListing')

        InterestGroupListing.CheckFilterFunctionality(IGMian, InterestGroup, IGMembershipID, SAFRAMembershipID, Status, CustomerName, ExpiryDateFrom, ExpiryDateTo)
    })

    it('Accessing Interest Group detail on Interest Group Member listing.', function () {

        cy.visit('/membership/interestGroupMembershipListing')

        InterestGroupListing.CheckFilterFunctionality(IGMian, InterestGroup, IGMembershipID, SAFRAMembershipID, Status, CustomerName, ExpiryDateFrom, ExpiryDateTo)

        InterestGroupListing.ClickIGID()

        InterestGroupListing.VerifyIGMembershipId(IGMembershipID)

        InterestGroupListing.VerifyInterestGroupLbl(IGMian, InterestGroup)

        InterestGroupListing.VerifyCustomerLabels(SAFRAMembershipID, CustomerName)

        InterestGroupListing.VerifMembershipLabels(InitialJoinDate, ExpiryDate, Status, MembershipStatusReason)

    })

    it('Accessing Interest Group Transaction History', function () {

        cy.visit('/membership/interestGroupMembershipListing')
        
        InterestGroupListing.CheckFilterFunctionality(IGMian, InterestGroup, IGMembershipID, SAFRAMembershipID, Status, CustomerName, ExpiryDateFrom, ExpiryDateTo)

        InterestGroupListing.SlectTableLinkItem(CustomerName)

        InterestGroupListing.ViewTransactionHistory()

        InterestGroupListing.Cancel()
    })
})

}

export default InterestGroupMembershipManagment