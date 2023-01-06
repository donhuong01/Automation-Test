import elems_SourceChannelListing from "../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/SourceChannelListing.js"
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts'

class SrcChannelListing{

    /*****************************************************
        * Method: verifySourceChannelListingPageTitle
        * Description: verify Page title of Source Channel Listing
        *****************************************************/
   
     verifySourceChannelListingPageTitle(){
       cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Source Channel Listing')
       }
   
    /*****************************************************
        * Method: verifysourcechannelisting
        * Description: Verfies Source Channel Listing table
        * @param {string} Name name array
        * @param {string} Type Type array
        *****************************************************/
     verifysourcechannelisting(Name,Type)
       {
          
               cy.VerifyTableEntry(
                   elems_SourceChannelListing.TBL_SOURCECHANNELLISTING,
                   'Type', Type,
                   'Name', Name
               )
       }
   
    /*****************************************************
        * Method: filterSourceChannelListing
        * Description: Verify the filter functionality
        *****************************************************/
     filterSourceChannelListing(Name, Type){
           //fill out name
           if(Name !== undefined){
               // cy.xpath(elems_SourceChannelListing.TXT_NAME).clear()
               cy.EnterText(elems_SourceChannelListing.TXT_NAME, Name)
            }
            //fillout type
            if(Type !== undefined){
               cy.SelectDropDownItem(elems_SourceChannelListing.DRP_TYPE, Type)
            }
             // Error Handling
             if( Name === undefined 
               &&Type === undefined
           
           ){
               throw new Error("SourceChannelListing.Fillout Error!!./n\
                               Please provide at least one argument.")
           }
           cy.Click(elems_SourceChannelListing.BTN_SEARCHFILTERS)
       }  
       
       
       
        /*****************************************************
        * Method: SearchFilters
        * Description: Saving Member Status Code Detail
        *****************************************************/
       SearchFilters(){
           cy.Click(elems_SourceChannelListing.BTN_SEARCHFILTERS)
       }
           /*****************************************************
        * Method: CreateNew
        * Description:Create New Source Channel item
        *****************************************************/
       CreateNew(){
           cy.Click(elems_SourceChannelListing.BTN_CREATENEW);
           cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Source Channel Detail')
        }
   
       /*****************************************************
        * Method: Delete
        * Description:Delete New Source Channel item
        *****************************************************/
        Delete(Name,Type){
           cy.SelectTableItem( elems_SourceChannelListing.TBL_SOURCECHANNELLISTING,
            'Type', Type,
            'Name', Name
        )
           cy.Click(elems_SourceChannelListing.BTN_DELETE)
        }
   
       /*****************************************************
        * Method: DeleteConfoirmationYes
        * Description: Click on Yes in Delete Confirmation popup
        *****************************************************/
           DeleteConfirmationYes(){
           cy.Click(elems_Alerts.BTN_YES)
           cy.VerifyElementText(elems_Alerts.DELETE_NOTIFICATION,'Record has been deleted successfully.')
        }
            /*****************************************************
        * Method: DeleteConfirmationNo
        * Description:Click on No in Delete Confirmation popup
        *****************************************************/
           DeleteConfirmationNo(){
           cy.Click(elems_Alerts.BTN_NO)
        }
               
   
   }
   export default SrcChannelListing
//Put page action code for Source Channel listing 