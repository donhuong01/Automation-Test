import elems_SourceChannelDetail from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/SourceChannelDetail.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker.js'



class SrcChannelDetail {
    /*****************************************************
     * Method: fillOutSourceChannelDetail
     * Description: Fills-out Source Channel Detail Form
     *
     * @param {string} name Name
     * @param {string} type Type
     * @param {string} group Group
     * @param {string} operatingUnitNumber Operating Unit Number
     * @param {string} clubHouseStoreId Club House/Store ID
     * @param {string} headquarter Headquarter
     * @param {string} warehouse Warehouse
     * @param {string} site Site
     * @param {string} address Address
     * @param {string} website Website
     * @param {string} facebook Facebook
     * @param {string} mobileApp Mobile App
     * @param {string} telephone Telephone
     * @param {string} numberSequence Number Sequence
     * @param {string} location Location
     * @param {string} description Description
     * @param {string} roadshowCode Roadshow Code
     * @param {string} status Status
     *****************************************************/
     fillOutSourceChannelDetail({name, type, group, operatingUnitNumber, clubHouseStoreId, headquarter, warehouse, site, address, website, facebook, mobileApp, telephone, numberSequence, location, description,roadshowCode, status}){

        // Enter Name
        if(name !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_NAME).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_NAME, name)
            
        }

        // Select Type
        if(type !== undefined){
            cy.SelectDropDownItem(elems_SourceChannelDetail.DRP_TYPE, type)
            
        }

        // Select Group
        if(group !== undefined){
            cy.SelectDropDownItem(elems_SourceChannelDetail.DRP_GROUP, group)
            
        }

        // Choose Operating Unit Number
        if(operatingUnitNumber !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_OPERATINGUNITNUMBER).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_OPERATINGUNITNUMBER, operatingUnitNumber)
            
        }

        // Enter Club House/Store ID
        if(clubHouseStoreId !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_CLUBHOUSE).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_CLUBHOUSE, clubHouseStoreId)
            
        }

        // Select Headquarter
        if(headquarter !== undefined){
            cy.SelectDropDownItem(elems_SourceChannelDetail.DRP_HEADQUARTER, headquarter)
            
        }

        // Choose Warehouse
        if(warehouse !== undefined){
            // cy.SelectPickerDifferentItemsWait(elems_SourceChannelDetail.PCK_WAREHOUSE, 7000,
            //     '(//input[@name="name"])[2]', warehouse, elems_SourceChannelDetail.BTN_SEARCHFILTER)
                cy.xpath(elems_SourceChannelDetail.PCK_WAREHOUSE).click({force:true})
                cy.wait(5000)
                cy.EnterText('(//input[@name="name"])[2]', warehouse)
                cy.Click(elems_SourceChannelDetail.BTN_SEARCHFILTER)
                cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Warehouse', warehouse)
                cy.Click(elems_Picker.BTN_SELECT)
            
        }

        // Validate Site
        if(site !== undefined){
            cy.ValidateElementText(elems_SourceChannelDetail.LBL_SITE, site)
        }

        // Enter Address
        if(address !== undefined){
            cy.EnterText(elems_SourceChannelDetail.TXT_ADDRESS, address)
            
        }

        // Enter Website
        if(website !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_WEBSITE).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_WEBSITE, website)
            
        }

        // Enter Facebook
        if(facebook !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_FACEBOOK).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_FACEBOOK, facebook)
            
        }

        // Enter Mobile App
        if(mobileApp !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_MOBILEAPP).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_MOBILEAPP, mobileApp)
            
        }

        // Enter Telephone
        if(telephone !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_TELEPHONE).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_TELEPHONE, telephone)
            
        }

        // Choose Number Sequence
        if(numberSequence !== undefined){
            
            cy.SelectPickerItem(elems_SourceChannelDetail.PCK_NUMBERSEQUENCE, numberSequence)
            
        }

        // Enter Location
        if(location !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_LOCATION).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_LOCATION, location)
            
        }

        // Enter Description
        if(description !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_DESCRIPTION).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_DESCRIPTION, description)
            
        }

        // Enter Roadshow Code
        if(roadshowCode !== undefined){
            cy.xpath(elems_SourceChannelDetail.TXT_ROADSHOW).clear()
            cy.EnterText(elems_SourceChannelDetail.TXT_ROADSHOW, roadshowCode)
            
        }

        // Select Status
        if(status !== undefined){
            cy.SelectDropDownItem(elems_SourceChannelDetail.DRP_STATUS, status)
        }

        if( name === undefined
            && type === undefined
            && group === undefined
            && operatingUnitNumber === undefined
            && clubHouseStoreId === undefined
            && headquarter === undefined
            && warehouse === undefined
            && site === undefined
            && address === undefined
            && website === undefined
            && facebook === undefined
            && mobileApp === undefined
            && telephone === undefined
            && numberSequence === undefined
            && location === undefined
            && description === undefined
            && roadshowCode === undefined
            && status === undefined
        ){
            throw new Error("SourceChannelDetail.fillOutSourceChannelDetail Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: addEligiblePaymentMethod
     * Description: Adds Item in the Eligible Payment Method List
     *
     * @param {string} paymentMethod Payment Method
     *****************************************************/
     addEligiblePaymentMethod(paymentMethod){
        //cy.Click(elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.BTN_ADDPAYMENTMETHOD)
        cy.wait(3000)
        // Choose Payment Method
        if(paymentMethod !== undefined){
            cy.SelectPickerItem(elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.BTN_ADDPAYMENTMETHOD, paymentMethod)//div[text()="Select Payment Method"]//ancestor::div//following-sibling::div[@class="k-window-content k-dialog-content"]//div//table','TT')
            cy.SelectPickerItem(elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.BTN_ADDPAYMENTMETHOD, paymentMethod)
            // Add Payment Method
           
        }

        // Error Handling
        if(paymentMethod === undefined){
            throw new Error("SourceChannelDetail.addEligiblePaymentMethod Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: verifyEligiblePaymentMethodList
     * Description: Verifies the Eligible Payment Method List
     *
     * @param {string} Cash Payment Method Array
     *****************************************************/
     verifyEligiblePaymentMethodList(Cash){
        //paymentMethodList.forEach( data => {
            cy.VerifyTableEntry(
                elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.TBL_ELIGIBLEPAYMENTMETHODLIST,
                'Payment Method', Cash
                )
       // })
    }

    /*****************************************************
     * Method: removePaymentMethod
     * Description: Removes an Item in the Eligible Payment Method List
     *
     * @param {string} paymentMethod Payment Method
     *****************************************************/
     removePaymentMethod(paymentMethod){

        // Remove Payment Method
        if(paymentMethod !== undefined){
            cy.SelectTableItem(
                elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.TBL_ELIGIBLEPAYMENTMETHODLIST,
                'Payment Method', 'TT')
           
            cy.Click(elems_SourceChannelDetail.ELIGIBLEPAYMENTMETHODLIST.BTN_REMOVEPAYMENTMETHOD)
            
           
        }

        // Error Handling
        if(paymentMethod === undefined){
            throw new Error("SourceChannelDetail.removePaymentMethod Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: addUser
     * Description: Adds User in the User List
     *
     * @param {string} user User
     *****************************************************/
     addUser(user){

        // Choose User
        if(user !== undefined){
            cy.SelectPickerItem(elems_SourceChannelDetail.USERLIST.BTN_ADDUSER, user)
        }

        // Error Handling
        if(user === undefined){
            throw new Error("SourceChannelDetail.addUser Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: verifyUserList
     * Description: Verifies the User List
     *@param {string} emailAddress Array of Users
     * 
     *****************************************************/
     verifyUserList(emailAddress){
            cy.VerifyTableEntry(
                elems_SourceChannelDetail.USERLIST.TBL_USERLIST,
                'Login Email', emailAddress 
            )
        }

    /*****************************************************
     * Method: removeUser
     * Description: Removes an Item in the User List
     *
     * 
     * @param {string} emailAddress Email Address
     *****************************************************/
     removeUser(emailAddress){

        // Remove User
        if(emailAddress !== undefined){
            cy.SelectTableItem(
                elems_SourceChannelDetail.USERLIST.TBL_USERLIST,
                'Login Email', emailAddress
            )
            cy.Click(elems_SourceChannelDetail.USERLIST.BTN_REMOVEUSER)
        }

        // Error Handling
        if(emailAddress === undefined){
            throw new Error("SourceChannelDetail.addUser Error!!./n\
                            Please provide at least one argument.")
        }
    }

    /*****************************************************
     * Method: save
     * Description: Source Channel Detail Save
     *****************************************************/
     save(){
        cy.Click(elems_SourceChannelDetail.BTN_SAVE)
        cy.wait(5000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Source Channel Listing')
    }

    /*****************************************************
     * Method: cancel
     * Description: Source Channel Detail Cancellation
     *****************************************************/
     cancel(expectedPage){
        cy.Click(elems_SourceChannelDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }
}

export default SrcChannelDetail