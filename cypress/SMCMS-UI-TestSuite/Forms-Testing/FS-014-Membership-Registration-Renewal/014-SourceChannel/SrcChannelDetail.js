/*****************************************************
 * Page Function: Sample Script to Test Source Channel Detail Form Page Actions
 *
 * @author: jricohermoso
 *****************************************************/
// Import Pages
import SourceChannelDetail from "../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/SourceChaDetail.js"
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data.js'

// const srcChannelDtl = ()=> {
describe('[SP1-FS014_TS11] Source Channel Detail Form', function () {

    // Page Definitions
    const SrcChaDetail = new SourceChannelDetail()
    const Cash = 'TT'
    const CreditCard = data.sourceDataChannel.verifyPaymentMethodList.paymentMethodCreditCard

    it.only('[SP1-FS014_TS11_TC01] Edit Source Channel Detail Form ', function () {

        cy.visit('/membership/sourceChannelDetails')
        cy.wait(3000)

        // Fill-Out Source Channel Detail Form
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
        SrcChaDetail.removePaymentMethod({
            paymentMethod: 'TT'
        })
        // SrcChaDetail.save()

        // Verify Deleted Item in Eligible Payment Method List
        //SrcChannelDetail.verifyEligiblePaymentMethodList(data.sourceDataChannel.verifyPaymentMethodList)
        
        // Add User
        // SrcChaDetail.addUser(data.sourceDataChannel.addUser)



        // Verify User List
        // SrcChaDetail.verifyUserList(data.sourceDataChannel.userList.emailAddress, data.sourceDataChannel.userList.username)

        // Remove User
        // SrcChaDetail.removeUser(data.sourceDataChannel.userList.removeUser)
    })
})
