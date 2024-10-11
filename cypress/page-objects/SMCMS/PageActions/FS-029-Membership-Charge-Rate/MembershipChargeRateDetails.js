import elems_Picker from '../../Elements/Common/Picker'
import Table from '../../../../support/libraries/lib_table'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_MembershipChargeRateDetails from '../../Elements/Membership/FS029_Membership-Payment-Refund/MembershipChargeRateDetails'

class MembershipChargeRateDetail{

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: Verify the tile of the form
     
    *****************************************************/
    VerifyPageTitle()
    { 
     cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,'Membership Charge Rate Details')
        
    }


    /*****************************************************
    * Method: Fill Out Genral Info Membership Charge Rate Detail
    * Description: This Function Fills-out General info of Membership Charge Rate Detail Form 
    * 
    *  @param {string} Name Name
    *  @param {string} CardType SAFRA Card Type
    *  @param {string} Description Description
    *  @param {string} NumberofPeriod Number of Period 
    *  @param {string} DisplayInFrontEnd Display in FrontEnd(Checkbox)
    *  @param {string} SFSItem SFS Item
    *  @param {string} Status Status  
    *****************************************************/ 

    filloutGeneralInfo(Name,CardType,Description,NumberofPeriod,DisplayInFrontEnd,SFSItem,Status)
    {
        if(Name !== undefined)
        {
         cy.EnterText(elems_MembershipChargeRateDetails.GeneralInformation.TXT_NAME,Name)
        }
       if(CardType !== undefined)
        {
         cy.SelectDropDownItem(elems_MembershipChargeRateDetails.GeneralInformation.DRP_CARDTYPE,CardType)
        }
        if(Description !== undefined)
        {
         cy.EnterText(elems_MembershipChargeRateDetails.GeneralInformation.TXTAREA_DESCRIPTION,Description)   
        }
        if(NumberofPeriod !== undefined)
        {
         cy.IncreaseFieldValue(elems_MembershipChargeRateDetails.GeneralInformation.TXT_NOOFPERIOD,NumberofPeriod)
        }
        if(DisplayInFrontEnd !== undefined)
        {
         cy.TickCheckBox(elems_MembershipChargeRateDetails.GeneralInformation.CHK_DISPLAYINFRONTEND,DisplayInFrontEnd)
        }
        if(SFSItem !== undefined)
        {
         cy.SelectDropDownItem(elems_MembershipChargeRateDetails.GeneralInformation.DRP_SFSITEM,SFSItem)
        }
        if(Status !== undefined)
        {
          cy.wait(2000)
        //  cy.SelectDropDownItem(elems_MembershipChargeRateDetails.GeneralInformation.DRP_STATUS,Status)
          cy.xpath('//span[@id="drpStatus"]//span[@class="k-input"]').click({force:true})
          cy.xpath(`//li[text()="${Status}"]`).click({force:true})
      }

          // Error Handling
          if(Name === undefined 
            && CardType === undefined
            && Description === undefined
            && NumberofPeriod === undefined
            && DisplayInFrontEnd === undefined
            && SFSItem === undefined
            && Status === undefined)
        {
            throw new Error("Membership Charge Rate Details Error!!./n\
                            Please provide at least one argument.")
        }

    }

     /*****************************************************
    * Method: Add Charge Type List in  Membership Charge Rate Detail
    * Description: This Function adds Charge Type List to Membership Charge Rate Detail Form 
    * 
    *  @param {string} ChargeTypeName Charge Type Name
    *  @param {string} TransectionType Transection Type
    *  @param {string} CalculationType Calculation Type
    *  @param {string} AmountType Amount Type

    *****************************************************/ 

      fillOutChargeTypeList(ChargeTypeName, TransectionType, CalculationType, AmountType)
    {
      //  cy.wait(5000)
        cy.Click(elems_MembershipChargeRateDetails.ChargeTypeList.BTN_ADDCHARGETYPE)
        cy.wait(5000)

       if(ChargeTypeName !== undefined)
          {
           cy.EnterText(
          '//h3[text()="Charge Type List"]/parent::div//table//input[@class="k-textbox"]', ChargeTypeName)
          }
        if(TransectionType !== undefined)
          {
            cy.SelectMenuInTable(
            '//h3[@class="card-title" and contains(.,"Charge Type List")]//following-sibling::div//table[@class="k-grid-table"]',
            '1','4',TransectionType)
          }
        if(CalculationType !== undefined)
          {
            cy.SelectMenuInTable(
              '//h3[@class="card-title" and contains(.,"Charge Type List")]//following-sibling::div//table[@class="k-grid-table"]',
              '1','5', CalculationType)
          }
        if(AmountType !== undefined)
         {
            cy.SelectMenuInTable(
            '//h3[@class="card-title" and contains(.,"Charge Type List")]//following-sibling::div//table[@class="k-grid-table"]',
            '1','6', AmountType)
         }
         // Error Handling
         if(ChargeTypeName === undefined 
          && TransectionType === undefined
          && CalculationType === undefined
          && AmountType === undefined)
      {
          throw new Error("Membership Charge Rate Details Error!!./n\
                          Please provide at least one argument.")
      }

      }

    /*****************************************************
    * Method: Add Charge Rate List in  Membership Charge Rate Detail
    * Description: This Function adds Charge Type List to Membership Charge Rate Detail Form 
    * 
    *  @param {string} CustomerCategoryName Select Customer Category
    // *****************************************************/ 
     fillOutChargeRateList(CustomerCategoryName)
     {
      
      
      cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY)
      cy.wait(10000)
      cy.EnterText(elems_MembershipChargeRateDetails.ChargeRateList.TXT_CUSTOMERCATEGORYNAME, CustomerCategoryName)
      cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_SEARCHFILTERS)
      cy.Click('(//div[@role="dialog"]//table//td)[1]')
      cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_SELECT)

      // cy.SelectPickerDifferentItemsSeachBTN(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY,
      //   elems_MembershipChargeRateDetails.ChargeRateList.TXT_CUSTOMERCATEGORYNAME, 
      //     CustomerCategoryName,
      //     '//button[text()="Search Filters"]'
      //     )
      // cy.EnterText(elems_MembershipChargeRateDetails.ChargeRateList.TXT_CUSTOMERCATEGORYNAME, 
      //   CustomerCategoryName)

      // //Click Search Filters Button
      // cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_SEARCHFILTERS)
      // /// Select Customer Category 
      // new Table().selectTableItem(elems_MembershipChargeRateDetails.ChargeRateList.TXT_CUSTOMERCATEGORYNAME, 'FIRST')
      // cy.SelectTableItem(elems_MembershipChargeRateDetails.ChargeRateList.TBL_CHARGERATELIST,
      //   'Customer Category Name', CustomerCategoryName)
      //  cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY) 
        //  cy.wait(10000)
        //  if(CustomerCategoryName !== undefined)
        //  {
        //   //cy.SelectPickerDifferentItems(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY,"PASS SELECTOR FOR NAME FIELD",CustomerCategoryName)
        //   cy.Click(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY)
        //   cy.SelectTableItem('//button[text()="Search Filters"]//../../../../../../div[@class="form-filter"]//following-sibling::div//table','Adventurers','Adventurers')

        //  }
        //  if(CustomerCategoryName === undefined)
        //   {
        //     throw new Error("Membership Charge Rate Details Error!!./n\
        //                     Please provide at least one argument.")
        //   }
         
      }
    
    /*****************************************************
    * Method: Product Master Information in  Membership Charge Rate Detail
    * Description: This Function adds Product Master Information to Membership Charge Rate Detail Form 
    * 
    *  @param {string} ProductNumber Product Number
    *  @param {string} ProductName Product Name
    *  @param {string} SearchName Search Name
    *  @param {string} ProductType Product Type
    *  @param {string} ItemModelGrp Item Model Group
    *  @param {string} ItemGrp Item Group
    *  @param {string} StorageDimGrp Storage Dimension Group
    *  @param {string} TrackingDimGrp Tracking Dimension Group
    *  @param {string} SalesCat Sales Category
    *  @param {string} ProcurementCat Procurement Category
    // *****************************************************/ 
     filterProductMasterInfo(ProductNumber,ProductName,SearchName,ItemModelGrp,ItemGrp,StorageDimGrp,TrackingDimGrp,SalesCat,ProcurementCat)
     {
         cy.Click(elems_MembershipChargeRateDetails.ProductMasterInformation.PCK_ITEMCODE) 
         cy.wait(2000)
         cy.EnterText('//input[@name="productNumber"]', ProductNumber)
         cy.EnterText('//input[@name="productName"]', ProductName)
         cy.EnterText('//input[@name="searchName"]', SearchName)

        //  if(ProductNumber !== undefined)
        //  {
        //   cy.EnterText('//input[@name="productNumber"]', ProductNumber)
        //  }
        //  if(ProductName !== undefined)
        //  {
        //   cy.EnterText('//input[@name="productName"]', ProductName)
        //  }
        //  if(SearchName !== undefined)
        //  {
        //   cy.EnterText('//input[@name="searchName"]', SearchName)
        //  }
        // //  if(ProductType !== undefined)
        // //  {
        // //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Product type")]//span[@class="k-widget k-dropdown"]').click()
        // //   cy.xpath(`//li[text()="${ProductType}"]`).click()
        // // }
        //  if(ItemModelGrp !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Item Model Group")]//span[@class="k-widget k-dropdown"]',ItemModelGrp)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Item Model Group")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${ItemModelGrp}"]`).click()
        
        
        // }
        //  if(ItemGrp !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Item Group")]//span[@class="k-widget k-dropdown"]',ItemGrp)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Item Group")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${ItemGrp}"]`).click() 
        
        
        // }
        //  if(StorageDimGrp !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Storage Dimension Group")]//span[@class="k-widget k-dropdown"]',StorageDimGrp)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Storage Dimension Group")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${StorageDimGrp}"]`).click()
        
        
        // }
        //  if(TrackingDimGrp !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Tracking Dimension Group")]//span[@class="k-widget k-dropdown"]',TrackingDimGrp)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Tracking Dimension Group")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${TrackingDimGrp}"]`).click()
        
        
        // }
        //  if(SalesCat !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Sales Category")]//span[@class="k-widget k-dropdown"]',SalesCat)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Sales Category")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${SalesCat}"]`).click()
        
        
        // }
        //  if(ProcurementCat !== undefined)
        //  {
        //   //cy.SelectDropDownItem('//div[@class="col-sm-3" and contains(.,"Procurement Category")]//span[@class="k-widget k-dropdown"]',ProcurementCat)
        //   cy.xpath('//div[@class="col-sm-3" and contains(.,"Procurement Category")]//span[@class="k-widget k-dropdown"]').click()
        //   cy.xpath(`//li[text()="${ProcurementCat}"]`).click()
        
        
        
        // }

        //  if(ProductNumber === undefined 
        //   && ProductName === undefined
        //   && SearchName === undefined
        //   && ItemModelGrp === undefined
        //   && StorageDimGrp === undefined
        //   && TrackingDimGrp === undefined
        //   && SalesCat === undefined
        //   && ProcurementCat === undefined)
        //   {
        //     throw new Error("Membership Charge Rate Details Error!!./n\
        //                     Please provide at least one argument.")
        //   }
        //   cy.Click('//button[@class="k-button search-button"]')
        //   // cy.SelectTableItem()
        //   cy.Click('//button[text()="Select"]//following-sibling::button')
         
      }
    /*****************************************************
    * Method: fiterProductMasterInfoAndSelectPCode
    * Description: This Function adds Product Master Information to Membership Charge Rate Detail Form and selects the Product Code from the table
    * 
    *  @param {string} ProductNumber Product Number
    *  @param {string} ProductName Product Name
    *  @param {string} SearchName Search Name
    // *****************************************************/ 
     filterProductMasterInfoAndSelectPCode(ProductNumber,ProductName,SearchName)
     {
         cy.Click(elems_MembershipChargeRateDetails.ProductMasterInformation.PCK_ITEMCODE) 
         cy.wait(100)
         if(ProductNumber !== undefined)
         {
          cy.EnterText('//input[@name="productNumber"]',ProductNumber)
         }
         if(ProductName !== undefined)
         {
          cy.EnterText('//input[@name="productName"]',ProductName)
         }
         if(SearchName !== undefined)
         {
          cy.EnterText('//input[@name="searchName"]',SearchName)
         }
         
          cy.Click('//button[@class="k-button search-button"]')
          cy.SelectTableItem('//div[@role="dialog"]//table',
          'Product No.', ProductNumber)
          cy.Click('//button[text()="Select"]')
         
      }

     /*****************************************************
    * Method: Add Access Mode
    * Description: This function adds Access Mode to the Detail Form
    * @param {string} AccessMode Access Mode
    * *****************************************************/
      AddAccessMode(AccessMode)
      {
         cy.SelectPickerDifferentItemsSeachBTN(elems_MembershipChargeRateDetails.AccessModeList.BTN_ADDACCESSMODE,
          elems_MembershipChargeRateDetails.AccessModeList.TXT_ACCESSMODENAME,
          AccessMode,
          '//button[text()="Search Filters"]')
      }

    /*****************************************************
    * Method: AddCustomerCategoryAccessMode
    * Description: This function Customer Category Access Mode List to the Detail Form
    * @param {string} CustomerCategoryName Add Customer Category Access Mode List
    * *****************************************************/
       AddCustomerCategoryAccessMode(CustomerCategoryName)
       {
  
         cy.SelectPickerDifferentItemsSeachBTN(elems_MembershipChargeRateDetails.ChargeRateList.BTN_ADDCUSTOMERCATEGORY,
          elems_MembershipChargeRateDetails.ChargeRateList.TXT_CUSTOMERCATEGORYNAME,
          CustomerCategoryName,
          '//button[text()="Search Filters"]'
          )
         
      

       }
 

    /*****************************************************
    * Method: Save
    * Description: Save the form
    * *****************************************************/
     Save()
    {
       cy.Click(elems_MembershipChargeRateDetails.BTN_SAVE,'Membership Charge Rate Listing')
    }
  /*****************************************************
    * Method: Cancel
    * Description: Save all fill-out fields
    * *****************************************************/
    Cancel()
    {
       cy.Click(elems_MembershipChargeRateDetails.BTN_CANCEL,'Membership Charge Rate Listing')
    }

      /*****************************************************
     * Method: VerifySuccessNotificationMSG
     * Description: This function verify that record is saved successfully
     * @param {string} MSG Delete Notification Message
     *****************************************************/
         VerifySuccessNotificationMSG(MSG){

          cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, MSG)
      }
}
export default MembershipChargeRateDetail