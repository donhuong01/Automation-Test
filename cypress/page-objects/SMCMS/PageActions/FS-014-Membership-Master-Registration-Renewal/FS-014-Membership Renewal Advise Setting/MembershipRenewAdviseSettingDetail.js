import elems_MembershipRenewalAdviceSettingDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipRenewalAdviceSettingDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class MembershipRenewAdviseSettingDetail{
    /*****************************************************
    * Method: verify PageTitle
    * Description: Verify Membership Renewal Advise Setting Detail Form
    * @param {string} ExpectedPg 
     *****************************************************/
   verifyPageTitle(ExpectedPg)
   {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
   }

   /*****************************************************
    * Method: Fill Out Form data
    * Description: Fill Out data in Membership Renewal Advise Setting Detail Form
    * 
    * @param {string} Name Member Name
    * @param {string} Description Test Description 
    * @param {string} MemberCategory Member Category 
    * @param {string} Gender Mermber Gender 
    * @param {string} MemberTypeCode Member Type Code[AS]
    * @param {string} MemberStatusReason Member status Reason 
    * @param {string} ExpiryDateFrom Expiry date from 
    * @param {string} ExpiryDateTo Expiry date to
    * @param {string} DateofBirthFrom Date of Birth From
    * @param {string} DateofBirthTo Date of Birth To
    * @param {string} MemberCardType Member Code type
    * @param {string} PostalCode Postal Code
    * @param {string} ZoneId Zone ID
    * @param {string} AutoDeduction Auto Deduction 
    * @param {string} MaritalStatus Member Marital Status
    * @param {string} ExcludeBadAddress Exclude Bad Address
    * @param {string} ExcludeTerminatedInAdvance Exclude Termination in Advance 
    * @param {string} ExcludeRegistrationInAdvance Exclude Registration in Advance
    * 
     *****************************************************/


   fillOutForm(Name,Description,MemberCategory,Gender,MemberTypeCode,MemberStatusReason,
               ExpiryDateFrom,ExpiryDateTo,DateofBirthFrom,DateofBirthTo,MemberCardType,
               PostalCode,ZoneId,AutoDeduction,MaritalStatus,ExcludeBadAddress,ExcludeTerminatedInAdvance,
               ExcludeRegistrationInAdvance)
    {
        //Validate Member Name
        if (Name !== undefined)
        {
            cy.xpath(elems_MembershipRenewalAdviceSettingDetail.TXT_NAME).clear()
            cy.EnterText(elems_MembershipRenewalAdviceSettingDetail.TXT_NAME,Name)
        }
        //Validate Description 
        if (Description !== undefined)
        {
            cy.xpath(elems_MembershipRenewalAdviceSettingDetail.TXTAREA_DESCRIPTION).clear()
            cy.EnterText(elems_MembershipRenewalAdviceSettingDetail.TXTAREA_DESCRIPTION,Description)
        }
        //Validate Member Catagory
        if (MemberCategory !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_MEMBERCATEGORY,MemberCategory)
        }
        //Validate Gander 
        if (Gender !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_GENDER,Gender)
        }
        //Validate Member Type Code
        if (MemberTypeCode !== undefined)
        {
            // cy.xpath(elems_MembershipRenewalAdviceSettingDetail.LST_MEMBERTYPECODE).clear()
            // cy.EnterText(elems_MembershipRenewalAdviceSettingDetail.LST_MEMBERTYPECODE,MemberTypeCode)
            cy.SelectPickerItem(elems_MembershipRenewalAdviceSettingDetail.PCK_MEMBERTYPECODE, MemberTypeCode)
        }
        //Validate Member Card Type 
        if (MemberStatusReason !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_MEMBERSTATUSREASON,MemberStatusReason)
        } 
        //Validate Expiry date from 
        if (ExpiryDateFrom !== undefined)
        {
            cy.EnterDate(elems_MembershipRenewalAdviceSettingDetail.PCK_EXPIRYDATEFROM,ExpiryDateFrom)
        }
        
        //Validate expiry date to 
        if (ExpiryDateTo !== undefined)
        {
            cy.EnterDate(elems_MembershipRenewalAdviceSettingDetail.PCK_EXPIRYDATETO,ExpiryDateTo)
        }
        
        //Validate Date of birth from 
        if (DateofBirthFrom !== undefined)
        {
            cy.EnterDate(elems_MembershipRenewalAdviceSettingDetail.PCK_DATEOFBIRTHFROM,DateofBirthFrom)
        }
        
        //Validate Date of Birth to
        if (DateofBirthTo !== undefined)
        {
            cy.EnterDate(elems_MembershipRenewalAdviceSettingDetail.PCK_DATEOFBIRTHTO,DateofBirthTo)
        }

        //Validate Member Card Type 
        if (MemberCardType !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_MEMBERCARDTYPE,MemberCardType)
        }
        
        //Validate Postal code
        if (PostalCode !== undefined)
        {
            cy.xpath(elems_MembershipRenewalAdviceSettingDetail.TXT_POSTALCODE).clear()
            cy.EnterText(elems_MembershipRenewalAdviceSettingDetail.TXT_POSTALCODE,PostalCode)
        }
        
        //Validate Zone ID
        if (ZoneId !== undefined)
        {
            cy.xpath(elems_MembershipRenewalAdviceSettingDetail.TXT_ZONEID).clear()
            cy.EnterText(elems_MembershipRenewalAdviceSettingDetail.TXT_ZONEID,ZoneId)
        }
        
        //Validate Auto Deduction 
        if (AutoDeduction !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_AUTODEDUCT,AutoDeduction)
        }
        
        //Validate Marital Status
        if (MaritalStatus !== undefined)
        {
            cy.SelectDropDownItem(elems_MembershipRenewalAdviceSettingDetail.DRP_MARITALSTATUS,MaritalStatus)
        }
        
        //Validate Check box 
        if (ExcludeBadAddress !== undefined)
        {
            cy.TickCheckBox(elems_MembershipRenewalAdviceSettingDetail.CHK_EXCLUDEBADADDRESSFLAG,ExcludeBadAddress)
        }
         //Validate Check box 
        if (ExcludeTerminatedInAdvance !== undefined)
        {
            cy.TickCheckBox(elems_MembershipRenewalAdviceSettingDetail.CHK_EXCLUDETERMINATEDINADVANCED,ExcludeTerminatedInAdvance)
        }
         //Validate Check box 
        if (ExcludeBadAddress !== undefined)
        {
            cy.TickCheckBox(elems_MembershipRenewalAdviceSettingDetail.CHK_EXCLUDEREGISTRATIONINADVANCE,ExcludeRegistrationInAdvance)
        }
        // Error Handling
        if( Name === undefined && 
            Description === undefined && 
            MemberCategory === undefined && 
            Gender === undefined && 
            MemberTypeCode === undefined && 
            ExpiryDateFrom === undefined && 
            ExpiryDateTo === undefined && 
            DateofBirthFrom === undefined &&
            DateofBirthTo === undefined && 
            MemberCardType === undefined && 
            PostalCode === undefined && 
            ZoneId === undefined && 
            AutoDeduction === undefined && 
            MaritalStatus === undefined &&
            ExcludeBadAddress === undefined &&
            ExcludeTerminatedInAdvance === undefined &&
            ExcludeRegistrationInAdvance === undefined)
        {
            throw new Error("MembershipSuspensionRequest.verifySuspensionRequest Error!!./n\
                            Please provide at least one argument.")
        }
        }
        
    /*****************************************************
    * Method: Save
    * Description: Click on save button in Membership Renewal Advise Setting Detail Form
    *****************************************************/
        
        saveForm()
        {
            cy.Click(elems_MembershipRenewalAdviceSettingDetail.BTN_SAVE,'Membership Renewal Advice Setting Listing')
        }

        /*****************************************************
    * Method: Create New
    * Description: This function click on create new button
    *****************************************************/
        
        CreateNew()
        {
            cy.Click(elems_MembershipRenewalAdviceSettingDetail.BTN_CREATENEW)
            cy.wait(3000)
        }
    
    /*****************************************************
    * Method: Cancel
    * Description: Click on cancel button in Membership Renewal Advise Setting Detail Form
    *****************************************************/    

        cancelForm()
        {
            cy.Click(elems_MembershipRenewalAdviceSettingDetail.BTN_CANCEL,'Membership Renewal Advice Setting Listing')
        }                

    /*****************************************************
    * Method: ClickonNewlyCreatedItem
    * Description: This function click on newly created item
    * @param {string} item
    *****************************************************/    

        ClickonItem(item)
        {
            cy.wait(4000)
            cy.ClickTableLinkItem(elems_MembershipRenewalAdviceSettingDetail.TBL_MEMBERSHIPRENEWALADICE,
                'Name', item)
        }                
    }

export default MembershipRenewAdviseSettingDetail