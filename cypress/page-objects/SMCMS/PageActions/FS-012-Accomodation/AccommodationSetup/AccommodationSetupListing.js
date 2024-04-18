import elems_AccommodationSetupListing from "../../../Elements/FS-012-Accomodation/AccommodationSetupListing"
import elems_FacilityDetailFormDetailTab from "../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityDetailForm"


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

    /*****************************************************
     * Method: FacilityDetailFormAttachmentTab
     * Description: This function FillOut Attachment Tab
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/
    FacilityDetailFormAttachmentTab(UploadFile) {


        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.TAB_ATTACHMENT)

        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_UPLOAD)
        cy.UploadFile('//input[@name="file"]', UploadFile)
        // cy.xpath(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_SELECTFILES)
        //     .attachFile(Cypress.env('FIXTURE_UPLOAD_PATH') + UploadFile, { subjectType: 'drag-n-drop' });
        // cy.xpath(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_SELECTFILES + '/ancestor::div[@class="k-widget k-upload"]//span[@class="k-file-name"]').should('have.text', UploadFile)
        cy.wait(4000)
        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_CLOSE)

        // cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_ADDATTACHMENT)
        // cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_REMOVEATTACHMENT)
    }

    /*****************************************************
     * Method: VerifyUploadedFileInTable
     * Description: This function verify newly uploaded file in the table
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/

    VerifyUploadedFileInTable(UploadFile) {
        cy.VerifyTableEntry(
            elems_FacilityDetailFormDetailTab.ATTACHMENT.TBL_ATTACHMENTS,
            'File Name', UploadFile,

        )
    }

    /*****************************************************
     * Method: RemoveFile
     * Description: This function Remove newly uploaded file in the table
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/
    RemoveFile(UploadFile) {
        cy.SelectTableItem(
            elems_FacilityDetailFormDetailTab.ATTACHMENT.TBL_ATTACHMENTS,
            'File Name', UploadFile
        )

        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_REMOVEATTACHMENT)

    }



}
export default new AccommodationSetupListing