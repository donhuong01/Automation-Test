
import elems_SMCMSRoleDetail from '../../../Elements/Admin/FS001_Admin-SystemLogin/SMCMSPositionDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker.js'
class PositionDetailForm {

    /*****************************************************
     * Method: verifyPageTitle
     * Description: Verify page title
     * @param {string} ExpectedPg 
     *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
    }

    /*****************************************************
     * Method: fillOutPositionDetailForm
     * Description: Fills Out the Position Detail Form
     * @param {string} PositionName Position Name 
     * @param {string} Role Role 
     * @param {string} Location Location
     * @param {string} Remark Remark
     *****************************************************/
    fillOutPositionDetailForm(PositionName, Role, Location, Remark) {

        if (PositionName !== undefined) {
            //Position Name
            cy.xpath(elems_SMCMSRoleDetail.TXT_POSITIONNAME).clear()
            cy.EnterText(elems_SMCMSRoleDetail.TXT_POSITIONNAME, PositionName)
        }
        if (Role !== undefined) {
            cy.wait(2000)
            //Role
            cy.SelectDropDownItem(elems_SMCMSRoleDetail.DRP_ROLE, Role)
        }
        if (Location !== undefined) {
            cy.wait(2000)
            cy.SelectDropDownItem(elems_SMCMSRoleDetail.DRP_LOCATION, Location)
        }
        if (Remark !== undefined) {
            cy.wait(2000)
            cy.xpath(elems_SMCMSRoleDetail.TXTAREA_REMARK).clear()
            cy.EnterText(elems_SMCMSRoleDetail.TXTAREA_REMARK, Remark)
        }

    }

    /*****************************************************
     * Method: addUsers
     * Description: Select user from the userlist
     * @param {string} targetUserEmail user email 
     * @param {string} targetUserName user name 
     *****************************************************/
    addUsersAndVerifyTableEntry(targetUserEmail, targetUserName) {


        cy.SelectPickerDifferentItemsWait(
            elems_SMCMSRoleDetail.BTN_ADDUSERS, 30000,
            elems_Picker.TXT_LOGINEMAIL,
            targetUserEmail,
            elems_SMCMSRoleDetail.BTN_SEARCHFILTERS
        )

        //Verify table entry
        // cy.VerifyTableEntry(
        //     elems_SMCMSRoleDetail.TBL_POSITIONDETAIL,
        //     'Login Email', targetUserEmail,
        //     'Name', targetUserName,
        //     'Status','Disabled')

    }

    /*****************************************************
     * Method: searchAndDeleteUser
     * Description: Select user from the userlist and delete the user
     * @param {string} targetUserEmail user email 
     *****************************************************/
    searchAndDeleteUser(targetUserEmail) {


        cy.SelectPickerDifferentItems(
            elems_SMCMSRoleDetail.BTN_ADDPIC,
            elems_Picker.TXT_LOGINEMAIL,
            targetUserEmail,
            'Login Name', targetUserEmail,
        )

        cy.xpath(elems_SMCMSRoleDetail.TXT_USER).type(targetUserEmail)
        cy.Click(elems_SMCMSRoleDetail.BTN_USERSEARCHFILTER)
        cy.wait(2000)

        cy.SelectTableItem(
            elems_SMCMSRoleDetail.TBL_USERS,
            'Login Email', targetUserEmail,
        )

        cy.Click(elems_SMCMSRoleDetail.BTN_REMOVEUSER)

    }
    /*****************************************************
     * Method: searchAndDeleteUser
     * Description: Select user from the userlist and delete the user
     * @param {string} targetUserEmail user email 
     *****************************************************/
    AddPostionPicsAndDeleteUser(targetUserEmail) {


        cy.xpath(elems_SMCMSRoleDetail.TXT_POSITIONPICS).type(targetUserEmail)
        cy.Click(elems_SMCMSRoleDetail.BTN_USERNAMEPOSITIONPICS)
        cy.wait(2000)

        cy.SelectTableItem(
            elems_SMCMSRoleDetail.TBL_POSITIONPICS,
            'Login Email', targetUserEmail,
        )

        cy.Click(elems_SMCMSRoleDetail.BTN_REMOVEPICS)

    }

    /*****************************************************
     * Method: Save
     * Description: THis function clicks on save button
     * @param {string} targetUserEmail user email 
     *****************************************************/
    Save() {
        cy.Click(elems_SMCMSRoleDetail.BTN_SAVE)
    }

    /*****************************************************
     * Method: Cancel
     * Description: THis function clicks on Cancel button
     * @param {string} targetUserEmail user email 
     *****************************************************/
    Cancel() {
        cy.Click(elems_SMCMSRoleDetail.BTN_CANCEL)
    }

    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
    VerifyNotificationMsg(Msg) {

        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
        cy.wait(2000)
    }
}
export default PositionDetailForm

