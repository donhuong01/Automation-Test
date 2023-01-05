import elems_SMCMSUserListing from '../../../Elements/Admin/FS001_Admin-SystemLogin/SMCMSUserListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class SMCMSUserListing{
/******************************
 * Method: FilloutFilters
 * Description: To fill out fields for searching
 * @param LoginEmail
 * @param PushNotification
 * @param Status 
 *****************************/

    FilloutFilters({LoginEmail,Position,Status}){
        if(LoginEmail !== undefined){
            cy.EnterText(elems_SMCMSUserListing.TXT_LOGINEMAIL, LoginEmail)
        }
        if(Position !== undefined){
            cy.SelectDropDownItem(elems_SMCMSUserListing.DRP_POSITION, Position)
        }
        if(Status !== undefined){
            cy.SelectDropDownItem(elems_SMCMSUserListing.DRP_STATUS, Status)
            cy.wait(2000)
        }
        if(LoginEmail === undefined 
            && Position === undefined
            && Status  === undefined)
        {
            throw new Error('SMCMSUserListing. Filters Error!!./n\
            Please provide at least one argument')
        }

    }

/******************************
 * Method: SearchFilters
 * Description: To display relavant search
*******************************/
    SearchFiters(){
        cy.Click(elems_SMCMSUserListing.BTN_SEARCHFILTERS)
    }

/******************************
 * Method: loginEmailLink
 * Description: To verify table link
*******************************/
    loginEmailLink(clickLoginEmail){
        // cy.ClickTableLink(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
        //     'Login Email',clickLoginEmail.LoginEmail,
        //     'Status', clickLoginEmail.Status)
        cy.wait(3000)
        cy.xpath('//h2[text()="SMCMS User Listing"]/ancestor::div//table//a').first().click()
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'SMCMS User Detail')
    }
/******************************
 * Method: EnableEmail
 * Description: To Enable email login
*******************************/
    EnableEmail(enableemail){
        cy.SelectTableItem(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
            'Login Email', enableemail.LoginEmail,
            'Status', enableemail.Status)
    }
/******************************
 * Method:DisabledEmail
 * Description: To Disable email login
*******************************/
    DisabledEmail(disabledemail){
        cy.SelectTableItem(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
            'Login Email', disabledemail.LoginEmail,
            'Status', disabledemail.Status)
        cy.Click(elems_SMCMSUserListing.BTN_DISABLE)
        // cy.VerifyTableEntry(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
        //     'Status', disabledemail.Status,
        //     'Login Email',disabledemail.LoginEmail)
     }
/******************************
 * Method:EnabledEmail
 * Description: To Enable email login
*******************************/
    EnabledEmail(enabledemail){
        cy.SelectTableItem(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
            'Login Email',enabledemail.LoginEmail,
            'Status', enabledemail.Status)
        cy.Click(elems_SMCMSUserListing.BTN_ENABLE)
        // cy.VerifyTableEntry(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
        //     'Status', enabledemail.Status,
        //     'Login Email',enabledemail.LoginEmail)
    }
/******************************
 * Method:VerifyUserStatus
 * Description: Verify user status Enable/Disabled
*******************************/
    VerifyUserStatus(email, Status){
    
        // cy.EnterText(elems_SMCMSUserListing.TXT_LOGINEMAIL, email)
        // cy.Click(elems_SMCMSUserListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_SMCMSUserListing.TBL_SMCMSUSERLISTING,
            'Status', Status,
            'Login Email', email)
    }

}
export default SMCMSUserListing