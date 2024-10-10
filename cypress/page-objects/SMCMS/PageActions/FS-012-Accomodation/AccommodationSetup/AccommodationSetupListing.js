import elems_AccommodationSetupListing from "../../../Elements/FS-012-Accomodation/AccommodationSetupListing"

class AccommodationSetupListing {

    /*****************************************************
     * Method: CreateNew
     * Description: This function Click on Create New button
     *****************************************************/
    CreateNew() {
        cy.Click(elems_AccommodationSetupListing.BTN_CREATENEW)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: BookReserveButton
     * Description: This function Click on BookReserve Button
     *****************************************************/
    BookReserveButton() {
        cy.Click(elems_AccommodationSetupListing.BTN_BOOKRESERVE)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: CloseButton
     * Description: This function Click on Close button
     *****************************************************/
    CloseButton() {
        cy.Click(elems_AccommodationSetupListing.BTN_CLOSE)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: FilterWithAccommodationName
     * Description: This function Filter accommodation setup listing table 
     * @param {string} AccommodationName
     *****************************************************/
    FilterWithAccommodationName(AccommodationName) {
        cy.EnterText(elems_AccommodationSetupListing.TXT_ACCOMMODATIONNAME, AccommodationName)
        cy.Click(elems_AccommodationSetupListing.BTN_SEARCHFILTER)
        cy.wait(2000)
    }
    /*****************************************************
     * Method: VerifyItemStatus
     * Description: This function Verify item status and record status
     * @param {string} Status
     * @param {string} RecordStatus
     *****************************************************/
    VerifyItemStatus(Status, RecordStatus) {
        cy.VerifyTableEntry(elems_AccommodationSetupListing.TBL_ACCOMMODATIONSETUPLISTING, 'Status', Status)
        cy.VerifyTableEntry(elems_AccommodationSetupListing.TBL_ACCOMMODATIONSETUPLISTING, 'Record Status', RecordStatus)
    }
    /*****************************************************
     * Method: ClickAccommodationNoLink
     * Description: This function Click on Accommodation Number link 
     *****************************************************/
    ClickAccommodationNoLink() {
        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {
            const AccoNo = txt.text()
            cy.ClickTableLinkItem(elems_AccommodationSetupListing.TBL_ACCOMMODATIONSETUPLISTING, 'Accommodation No.', AccoNo)
            cy.wait(3000)
        })
    }


}
export default new AccommodationSetupListing