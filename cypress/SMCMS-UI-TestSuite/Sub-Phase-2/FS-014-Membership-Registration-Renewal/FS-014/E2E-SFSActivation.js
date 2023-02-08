/*****************************************************
 * Page Function: Sample Script to Test SFS Member Registration Principal
 *
 * @author: mfaisal
 *****************************************************/

// Import Pages
import MembershipModuleSetting from '../../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-14-Membership Module Setting/MembershipModuleSetting'


    //Page definition
    const MemModuleSettings = new MembershipModuleSetting()
const SFSActivation = () => {

describe('[TS07] SFS Activation', function (){

        
    it('[TC01] Customer Creation and SFS Principal Registration with Child and Spouse', function () {
    
        //Enable SFS
        cy.visit('/membership/moduleSettings')
        cy.wait(5000)
        
        MemModuleSettings.SFSActivate('CHECK')
        cy.wait(5000)    
    
})
})
}

export default SFSActivation
