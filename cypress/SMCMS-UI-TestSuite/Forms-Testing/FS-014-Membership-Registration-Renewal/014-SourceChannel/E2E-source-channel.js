import SrcChannelDetail from '../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/SourceChaDetail'
import SrcChannelListing from '../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/SourceChaListing'


import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data.js'
// const SourceChannel = ()=>{

    describe ('[TS11] Source Channel Management', ()=>{
    
   // Page Definition
    const SrcChaDetail  = new SrcChannelDetail()
    const SrcChaListing = new SrcChannelListing()
    
    it('[TC01]Create new Source Channel item', () =>{
        cy.visit('/membership/sourceChannelList') //Go To Listing form
        SrcChaListing.CreateNew()  
        SrcChaDetail.fillOutSourceChannelDetail({
            name: data.sourceDataChannel.fillOutSourceChannelDetail.name,
            type: data.sourceDataChannel.fillOutSourceChannelDetail.type,
            group: data.sourceDataChannel.fillOutSourceChannelDetail.group,
            operatingUnitNumber: data.sourceDataChannel.fillOutSourceChannelDetail.operatingUnitNumber,
            clubHouseStoreId: data.sourceDataChannel.fillOutSourceChannelDetail.clubHouseStoreId,
            headquarter: data.sourceDataChannel.fillOutSourceChannelDetail.headquarter,
            warehouse: data.sourceDataChannel.fillOutSourceChannelDetail.warehouse,
            site: data.sourceDataChannel.fillOutSourceChannelDetail.site,
            address: data.sourceDataChannel.fillOutSourceChannelDetail.address,
            website: data.sourceDataChannel.fillOutSourceChannelDetail.website,
            facebook: data.sourceDataChannel.fillOutSourceChannelDetail.facebook,
            mobileApp: data.sourceDataChannel.fillOutSourceChannelDetail.mobileApp,
            telephone: data.sourceDataChannel.fillOutSourceChannelDetail.telephone,
            numberSequence: data.sourceDataChannel.fillOutSourceChannelDetail.numberSequence,
            location: data.sourceDataChannel.fillOutSourceChannelDetail.location,
            description: data.sourceDataChannel.fillOutSourceChannelDetail.description,
            roadshowCode: data.sourceDataChannel.fillOutSourceChannelDetail.roadshowCode,
            status: data.sourceDataChannel.fillOutSourceChannelDetail.status
        })

        // Add Payment Method
        SrcChaDetail.addEligiblePaymentMethod('TT')


        // Verify Eligible Payment Method List
        SrcChaDetail.verifyEligiblePaymentMethodList('TT')

        // Remove Payment Method
        // SrcChaDetail.removePaymentMethod({
        //     paymentMethod: 'TT'
        // })

        // Verify Deleted Item in Eligible Payment Method List
        // SrcChaDetail.verifyEligiblePaymentMethodList(data.sourceDataChannel.verifyPaymentMethodList)
        
       // Add User
       SrcChaDetail.addUser(data.sourceDataChannel.addUser)
        // Verify User List
       SrcChaDetail.verifyUserList(data.sourceDataChannel.userList.emailAddress, data.sourceDataChannel.userList.username)

        // Remove User
       //SrcChaDetail.removeUser(data.sourceDataChannel.userList.removeUser)
       SrcChaDetail.save()
       SrcChaListing.filterSourceChannelListing(data.sourcechaListing.Name,data.sourcechaListing.Type)
       cy.wait(2000)
    })

    it('[TC02] Verify newly created item in the listing form and Deleting', ()=>{
        cy.visit('/membership/sourceChannelList') //Go To Listing form
        SrcChaListing.verifysourcechannelisting(data.sourcechaListing.Name,data.sourcechaListing.Type)
 
         //Click On Delete Button
         SrcChaListing.Delete(data.sourcechaListing.Name,data.sourcechaListing.Type)
          //Click on 'No' Delete Confirmation Popup
         SrcChaListing.DeleteConfirmationYes()
    })
})