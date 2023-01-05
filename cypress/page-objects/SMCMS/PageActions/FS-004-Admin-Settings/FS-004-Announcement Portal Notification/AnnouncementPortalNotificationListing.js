import elems_AnnouncementPortalNotificationListing from '../../../Elements/Admin/FS004_Admin-Settings/AnnouncementPortalNotificationListing.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class AnnouncementPortalNotificationListing {

    /*****************************************************
     * Method: fillOutFilters
     * Description: Fills Out Filter Fields
     *
     * @param {string} title Title
     * @param {string} publishDate Publish Date - Day
     * @param {string} expiryDate Expiry Date - Day

     *****************************************************/
     fillOutFilters(title, publishDate, expiryDate){

        // Enter Title
        if(title !== undefined){
            cy.xpath(elems_AnnouncementPortalNotificationListing.TXT_TITLE).clear()
            cy.EnterText(elems_AnnouncementPortalNotificationListing.TXT_TITLE, title)
        }

        // Set Publish Date
        if(publishDate !== undefined){
            cy.EnterDate(elems_AnnouncementPortalNotificationListing.DATE_PUBLISHDATE, publishDate)
        }

        // Set Expiry Date
        if(expiryDate !== undefined){
            cy.EnterDate(elems_AnnouncementPortalNotificationListing.DATE_EXPIRYDATE, expiryDate)
        }

        // // Select Status - MISSING IN FS - might remove later
        // if(status !== undefined){
        //     cy.SelectDropDownItem(elems_AnnouncementPortalNotificationListing.DRP_STATUS, status)
        // }

        // Click the Search Filters button
        cy.Click(elems_AnnouncementPortalNotificationListing.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: verifyAnnouncePortalNotifList
     * Description: Verfies Announcement Portal Notification Listing Table
     *
     * @param {string} announcePortalNotifList Announcement Portal Notification Listing Array
     *****************************************************/
     verifyAnnouncePortalNotifList(announcePortalNotifList){

        announcePortalNotifList.forEach( data => {
            cy.VerifyTableEntry(
                elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST,
                'Publish Date', data.publishDate,
                'Title', data.title
            )

            cy.VerifyTableEntry(
                elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST,
                'Expiry Date', data.expiryDate,
                'Title', data.title
            )

            cy.VerifyTableEntry(
                elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST,
                'Status', data.status,
                'Title', data.title
            )
        })
    }

    /*****************************************************
     * Method: clickTitleLink
     * Description: Selects a Title Item
     *
     * @param {string} titleLink Title item link in Table
     *****************************************************/
     clickTitleLink(titleLink){

        // Click Table Link Item
        if(titleLink !== undefined){
            cy.ClickTableLinkItem(
                elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST, 
                'Title', titleLink
            )

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Announcement Portal Notification Details')
        }

        // Error Handling
        if(titleLink === undefined){
            throw new Error("AnnouncementPortalNotificationListing.clickTitleLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: selectItem
     * Description: Selects Announcement Portal Notification Listing Item
     *
     * @param {string} titleItem Title Item
     *****************************************************/
     selectItem(titleItem){

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST,
            'Title', titleItem
        )
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New Announcement Portal Notification Item
     *****************************************************/
     createNew(){
        cy.Click(elems_AnnouncementPortalNotificationListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Announcement Portal Notification Details')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete Announcement Portal Notification Item
     *****************************************************/
     delete(){
        cy.Click(elems_AnnouncementPortalNotificationListing.BTN_DELETE)

        // Verify Confirmation Popup
        // cy.ValidateElementText(elems_Alerts.LBL_POPUPCONTENT, 'Would you like to delete the records?')
        cy.Click(elems_Alerts.BTN_YES)
    }

    /*****************************************************
     * Method: VerifyTableData
     * Description: This function verify table data
     * @param {string} data table data
     *****************************************************/
         VerifyTableData(data){

            // Ticks Checkbox beside item
            cy.VerifyTableEntry(
                elems_AnnouncementPortalNotificationListing.TBL_ANNOUNCEMNTPORTALNOTIFLIST,
                'Title', data
            )
        }
}

export default AnnouncementPortalNotificationListing