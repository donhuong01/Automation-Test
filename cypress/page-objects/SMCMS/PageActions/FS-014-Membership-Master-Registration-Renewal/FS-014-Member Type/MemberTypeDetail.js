import elems_MemberTypeDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberTypeDetail.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker.js'

class MemberTypeDetail {

    /*****************************************************
     * Method: filloutMemberTypeDetail
     * Description: Fills-out Member Type Detail Form
     *
     * @param {string} MemberCategory Member Category
     * @param {string} DependentType Dependent Type
     * @param {string} ParentType Parent Type
     * @param {string} Code Code
     * @param {string} Description Description
     * @param {string} MembershipType Membership Type
     * @param {string} ServiceStatus Service Status
     * @param {string} Rank Rank
     * @param {string} MinYears Min Years
     * @param {string} MaxYears Max Years
     * @param {string} MaxCapYears Max Cap Years
     * @param {string} Status Status
     * @param {string} Remark Remark
    *****************************************************/
    filloutMemberTypeDetail(MemberCategory, Code, Description, MembershipType, ServiceStatus, Rank, MinYears, MaxYears, MaxCapYears, Remark, Status){
        
        // Select Member Category
        if(MemberCategory !== undefined){
            cy.SelectDropDownItem(elems_MemberTypeDetail.DRP_MEMBERCATEGORY, MemberCategory)
        }
        // Enter Code
        if(Code !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_CODE).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_CODE, Code)
        }

        // Enter Description
        if(Description !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_AREADESCRIPTION).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_AREADESCRIPTION, Description)
        }

        // Enter Membership Type
        if(MembershipType !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_MEMBERSHIPTYPE).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_MEMBERSHIPTYPE, MembershipType)
        }

        // Select Service Status
        if(ServiceStatus !== undefined){
            cy.SelectDropDownItem(elems_MemberTypeDetail.DRP_SERVICESTATUS, ServiceStatus)
        }

        // Select Rank
        if(Rank !== undefined){
            cy.SelectDropDownItem(elems_MemberTypeDetail.DRP_RANK, Rank)
        }

        // Enter Min Years
        if(MinYears !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_MINYEARS).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_MINYEARS, MinYears)
        }

        // Enter Max Years
        if(MaxYears !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_MAXYEARS).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_MAXYEARS, MaxYears)
        }

        // Enter Max Cap Years
        if(MaxCapYears !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_MAXCAPYEARS).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_MAXCAPYEARS, MaxCapYears)
        }

        // Enter Remark
        if(Remark !== undefined){
            cy.xpath(elems_MemberTypeDetail.TXT_AREAREMARK).clear()
            cy.EnterText(elems_MemberTypeDetail.TXT_AREAREMARK, Remark)
        }
        
        // Select Status
        if(Status !== undefined){
            cy.xpath(elems_MemberTypeDetail.DRP_STATUS)
            cy.SelectDropDownItem(elems_MemberTypeDetail.DRP_STATUS, Status)
        }
        
        // Error Handling
        if( MemberCategory === undefined 
            && DependentType === undefined
            && ParentType === undefined 
            && Code === undefined 
            && Description === undefined 
            && MembershipType === undefined 
            && ServiceStatus === undefined
            && Rank === undefined 
            && MinYears === undefined 
            && MaxYears === undefined 
            && MaxCapYears === undefined 
            && Remark === undefined 
            && Status === undefined 
        ){
            throw new Error("MemberTypeDetail.filloutMemberTypeDetail Error!!./n\
                            Please provide at least one argument.")
        }
    }
    
    /*****************************************************
     * Method: save
     * Description: Save Member Type Detail Form
     *****************************************************/
     save(){
        cy.Click(elems_MemberTypeDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Member Type Listing')
    }
        
    /*****************************************************
     * Method: cancel
     * Description: Cancel Member Type Detail
     *****************************************************/
     cancel(expectedPage){
        cy.Click(elems_MemberTypeDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }

    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
         VerifyNotificationMsg(Msg){

            cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
            cy.wait(2000)
        }
         
}

export default new MemberTypeDetail