import elems_BatchMembershipWaiverRequest from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/BatchMembershipWaiverRequest'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class BatchMembershipWaiverRequest{

/*****************************************************
     * Method: Fill Out Waiver Request Form
     * Description:Fill Out Member Request Form
     *
     * @param {string} StartMonth
     * @param {string} WaiverPeriod
     * @param {string} ReasonCode
     * @param {string} Remarks

*****************************************************/

    fillOutWaiverForm(StartMonth,WaiverPeriod,ReasonCode,Remarks)
    {
        cy.EnterDate(elems_BatchMembershipWaiverRequest.DATE_STARTDATE, StartMonth)
        cy.EnterText(elems_BatchMembershipWaiverRequest.NUM_WAIVERPERIODS, WaiverPeriod)
        cy.xpath(elems_BatchMembershipWaiverRequest.DRP_REASONCODE).click()
        cy.xpath(elems_BatchMembershipWaiverRequest.DRP_REASONCODE).invoke('attr', 'aria-owns')  
        .then(value =>{
        cy.xpath('//ul[@id="' + value + '"]/li[text()="' + ReasonCode + '"]').click();   
        })
        cy.EnterText(elems_BatchMembershipWaiverRequest.TXTAREA_REMARK,Remarks)   

    }

/*****************************************************
     * Method: Verify Waiver Request form
     * Description: Verify Waiver Request form
     * @param {string} Name1
     * @param {string} NRIC1
     * @param {string} Name2
     * @param {string} NRIC2

*****************************************************/
VerifyWaiverForm(Name1, NRIC1, Name2, NRIC2)
    {

        cy.VerifyTableEntryWaiver(
            elems_BatchMembershipWaiverRequest.MemberListing.TBL_MEMBERLISTING,
            'Member Name', Name1,
            'Last 4 NRIC/IC No.', NRIC1
            )
        cy.VerifyTableEntryWaiver(
            elems_BatchMembershipWaiverRequest.MemberListing.TBL_MEMBERLISTING,
            'Member Name', Name2,
            'Last 4 NRIC/IC No.', NRIC2
            )   

    }
/*****************************************************
     * Method: Verify Waiver Request form
     * Description: Verify Waiver Request form
     * @param {string} ReasonCode
     * @param {string} NRIC

*****************************************************/
VerifyMemberInListing(MemberName)
    {

        cy.VerifyTableEntry(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Name', MemberName,
            'Reason Code', "New"
            )
        // cy.VerifyTableEntryWaiver(
        //     elems_BatchMembershipWaiverRequest.MemberListing.TBL_MEMBERLISTING,
        //     'Member Name', MemberListing.Name2,
        //     'Member ID',MemberListing.MemberId2
        //     )   

    }
/*****************************************************
    * Method: Cancel Waiver Request form
    * Description: Cancel Waiver Request form
    * @param {string} Expectedpg
*****************************************************/
Cancel(ExpectedPg)
{
    cy.Click(elems_BatchMembershipWaiverRequest.BTN_CANCEL,ExpectedPg)
}
/*****************************************************
    * Method: ClickOnRightEndArrowInMemListing
    * Description: This function click on right end arrow in member listing form
*****************************************************/
ClickOnRightEndArrowInMemListing()
{
    cy.xpath('//span[@class="k-icon k-i-arrow-end-right"]').Click('//span[@class="k-icon k-i-arrow-end-right"]')
    cy.wait(3000)
}

/*****************************************************
    * Method: Request Waiver Request form
    * Description: Cancel Waiver Request form
*****************************************************/

Request()
{
    cy.Click(elems_BatchMembershipWaiverRequest.BTN_REQUEST)
}
/*****************************************************
    * Method: FilterbyNameAndNRIC
    * Description: This function filter value by NRIC and Name
    * @param {string} Name
    * @param {string} NRIC
*****************************************************/

FilterbyName(Name)
{
    cy.EnterText(elems_MemberListing.TXT_NAME, Name)
    // cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
    cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
}

/***************************************************
 * Method: SelectTableLinkItem
 * Description: Select the declared table item Name
 ***************************************************/

SelectTableLinkItem(CustomerName) 
{
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Name', CustomerName)
}







}
export default new BatchMembershipWaiverRequest