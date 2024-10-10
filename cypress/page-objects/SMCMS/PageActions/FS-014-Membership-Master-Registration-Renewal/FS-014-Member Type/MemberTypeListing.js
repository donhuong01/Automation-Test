import elems_MemberTypeListing from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberTypeListing'

class MemberTypeListingForm{

    /*****************************************************
         * Method: Member category dropdown
         * Description:Select member category from dropdown
         * @param {string} category
         * @param {string} Code

    *****************************************************/

    selectMemberCategory(category, Code){
        cy.SelectDropDownItem(elems_MemberTypeListing.DRP_MEMBERCATEGORY, category)
        cy.Click(elems_MemberTypeListing.BTN_SEARCHFILTERS, 'Member Type Listing')
        cy.VerifyTableEntry(
            elems_MemberTypeListing.TBL_MEMBERTYPELIST,
            'Member Category', category,
             'Code', Code
            )
    }

    /*****************************************************
         * Method: Member Type
         * Description:Select Member Type from dropdown
         * @param {string} MemberType
         * @param {string} code
    *****************************************************/

    selectMemberType(MemberType, code){
        
        cy.EnterText(elems_MemberTypeListing.TXT_MEMBERSHIPTYPE, MemberType)
        cy.Click(elems_MemberTypeListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(
            elems_MemberTypeListing.TBL_MEMBERTYPELIST,
            'Membership Type', MemberType, 
            'Code', code
             
            )
    
    }

    /*****************************************************
         * Method: EnterTextCode
         * Description:Search using the code 
         * @param {string} code
         * @param {string} categoryValue

    *****************************************************/
   
    EnterTextCode(code,categoryValue){
        cy.xpath(elems_MemberTypeListing.TXT_CODE).clear()
        cy.EnterText(elems_MemberTypeListing.TXT_CODE, code)
        cy.Click(elems_MemberTypeListing.BTN_SEARCHFILTERS, 'Member Type Listing')
        cy.VerifyTableEntry(
            elems_MemberTypeListing.TBL_MEMBERTYPELIST,
            'Code', code,
             'Member Category', categoryValue
            )
    
    }
    /*****************************************************
         * Method: Membership Type
         * Description:Search value by Membership type
         * @param {string} membershipType
         * @param {string} categoryValue

    *****************************************************/

     EnterMembershipType(membershipType,categoryValue){
        cy.xpath(elems_MemberTypeListing.TXT_MEMBERSHIPTYPE).clear()
        cy.EnterText(elems_MemberTypeListing.TXT_MEMBERSHIPTYPE, membershipType)
        cy.Click(elems_MemberTypeListing.BTN_SEARCHFILTERS, 'Member Type Listing')
        cy.VerifyTableEntry(
            elems_MemberTypeListing.TBL_MEMBERTYPELIST,
            'Membership Type', membershipType,
             'Member Category', categoryValue
            )
    
    }

    /*****************************************************
         * Method: Membership Type
         * Description:Search value by Membership type
         * @param {string} membershipType
         * @param {string} dependentType
         * @param {string} categoryValue
         * @param {string} categoryValue

     *****************************************************/

     filterByMemberCategoryAndDependentType(category, dependentType){
          cy.SelectDropDownItem(elems_MemberTypeListing.DRP_MEMBERCATEGORY, category)
          cy.SelectDropDownItem(elems_MemberTypeListing.DRP_DEPENDENTTYPE, dependentType)
          cy.Click(elems_MemberTypeListing.BTN_SEARCHFILTERS, 'Member Type Listing')
          cy.VerifyTableEntry(
               elems_MemberTypeListing.TBL_MEMBERTYPELIST,
               'Member Category', category,
               'Dependent Type', dependentType
               )
     }

     /*****************************************************
      * Method: Create New
      * Description:This function will redirect to Member details page
      *****************************************************/

          createNew(){
               cy.Click(elems_MemberTypeListing.BTN_CREATENEW, 'Member Type Detail')
          
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

export default new MemberTypeListingForm