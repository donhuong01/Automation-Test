import elems_SourceChannelListing from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/SourceChannelListing'
import sourceChannelListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Source Channel/SourceChannelListing'
import SourceChannelDetail from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Source Channel/SourceChannelDetail'
// import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-Uat-data'


const SourceChannel = ()=> {

describe ('[TS11] Source Channel Management', ()=>{
    
    // Page Definition
     const SrcChaDetail  = new SourceChannelDetail()
     const SrcChaListing = new sourceChannelListing()

     const Name = data.sourceChannelDetail.fillOutSourceChannelDetail.name + Math.floor(Math.random() * 1000 )
     const Type = data.sourceChannelDetail.fillOutSourceChannelDetail.type
     
     it('[TC01]Create new and save Source Channel item', () =>{
         cy.visit('/membership/sourceChannelList') //Go To Listing form
         cy.wait(7000)
         SrcChaListing.CreateNew()  
         SrcChaDetail.fillOutSourceChannelDetail({
             name: Name,
             type: Type,
             group: data.sourceChannelDetail.fillOutSourceChannelDetail.group,
             operatingUnitNumber: data.sourceChannelDetail.fillOutSourceChannelDetail.operatingUnitNumber,
             clubHouseStoreId:data.sourceChannelDetail.fillOutSourceChannelDetail.clubHouseStoreId,
             headquarter: data.sourceChannelDetail.fillOutSourceChannelDetail.headquarter,
             warehouse: data.sourceChannelDetail.fillOutSourceChannelDetail.warehouse,
             site: data.sourceChannelDetail.fillOutSourceChannelDetail.site,
             address: data.sourceChannelDetail.fillOutSourceChannelDetail.address,
             website: data.sourceChannelDetail.fillOutSourceChannelDetail.website,
             facebook: data.sourceChannelDetail.fillOutSourceChannelDetail.facebook,
             mobileApp: data.sourceChannelDetail.fillOutSourceChannelDetail.mobileApp,
             telephone: data.sourceChannelDetail.fillOutSourceChannelDetail.telephone,
             numberSequence: data.sourceChannelDetail.fillOutSourceChannelDetail.numberSequence,
             location: data.sourceChannelDetail.fillOutSourceChannelDetail.location,
             description: data.sourceChannelDetail.fillOutSourceChannelDetail.description,
             roadshowCode: data.sourceChannelDetail.fillOutSourceChannelDetail.roadshowCode,
             status: data.sourceChannelDetail.fillOutSourceChannelDetail.status
         })
 
         // Add Payment Method
         SrcChaDetail.addEligiblePaymentMethod('TT')
 
 
         // Verify Eligible Payment Method List
         SrcChaDetail.verifyEligiblePaymentMethodList('TT')
 
         // Remove Payment Method
         SrcChaDetail.removePaymentMethod({
             paymentMethod: 'TT'
         })
         
        // Add User
        // SrcChaDetail.addUser(data.sourceChannelDetail.addUser)
        //  // Verify User List
        // SrcChaDetail.verifyUserList(data.sourceChannelDetail.userList.emailAddress)
 
        //  // Remove User
        // SrcChaDetail.removeUser(data.sourceChannelDetail.removeUser)
        
        SrcChaDetail.save()
     })
 
     it('[TC02] Verify newly created item in the listing form and Delete', ()=>{
         cy.visit('/membership/sourceChannelList') //Go To Listing form
         cy.wait(7000)
         SrcChaListing.filterSourceChannelListing(Name, Type)
         cy.wait(5000)
         SrcChaListing.verifysourcechannelisting(Name, Type)
         
          //Click On Delete Button
          SrcChaListing.Delete(Name, Type)
           //Click on 'No' Delete Confirmation Popup
          //SrcChaListing.DeleteConfirmationYes()
     })
 })

}

 export default SourceChannel
