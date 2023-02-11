import MembershipSuspensionReleaseRequest from "../../../../page-objects/SMCMS/PageActions/FS-028-Membership-Admin-MaintActivities/FS-028-Membership Admin MaintActivities/MembershipSuspensionReleaseRequest"
import elems_MemberListing from '../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data'

describe('[TS010] Membership Suspension Release Form',function(){

    const MemSusRelease =  MembershipSuspensionReleaseRequest

    it('[TC01] Cancel Creation of Suspension Release Request', function(){

        cy.visit('https://qa-smcms.safra.sg/membership/memberList')  //Visit web page for member listing 

        // cy.NavigateTablePage(elems_MemberListing.TBL_MEMBERLISTING, 'NEXT')  //Table Next page doesnt work
    
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Member ID', data.memberinfo.memberId,
            'Name', data.memberinfo.memberName,
           
            )
        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Release Suspend Early')
        

        const ReleaseDate = data.suspensionForm.ReleaseDate
        const Remarks = data.suspensionForm.Remarks
    
        MemSusRelease.fillOutSuspensionForm(ReleaseDate,Remarks)

        const MemberId = data.memberinfo.memberId
        const NRIC = data.memberinfo.NRIC
        const MemberName = data.memberinfo.memberName
        const SuspensionRequestId = data.suspensionForm.suspensionRequestId
        const StartDate = data.suspensionForm.StartDate
        const EndDate = data.suspensionForm.EndDate
        
        MemSusRelease.VerifySuspensionReleaseRForm(SuspensionRequestId,MemberId,NRIC,MemberName,StartDate,EndDate)

        MemSusRelease.uplaodFile()

        MemSusRelease.verifyFileUploadSuccessMsg()

        MemSusRelease.verifyPageTitle()

        MemSusRelease.Cancel('Member Listing')


        
    })
    it('[TC02] Create Suspension Release Request using Membership MA Staff (Admin Officer)', function(){

        cy.visit('https://qa-smcms.safra.sg/membership/memberList')  //Visit web page for member listing 

        // cy.NavigateTablePage(elems_MemberListing.TBL_MEMBERLISTING, 'NEXT')  //Table Next page doesnt work
    
        cy.SelectTableItem(
            elems_MemberListing.TBL_MEMBERLISTING,
            'Member ID', data.memberinfo.memberId,
            'Name', data.memberinfo.memberName,
           
            )
        
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Release Suspend Early')
        

        const ReleaseDate = data.suspensionForm.ReleaseDate
        const Remarks = data.suspensionForm.Remarks
    
        MemSusRelease.fillOutSuspensionForm(ReleaseDate,Remarks)

        const MemberId = data.memberinfo.memberId
        const NRIC = data.memberinfo.NRIC
        const MemberName = data.memberinfo.memberName
        const SuspensionRequestId = data.suspensionForm.suspensionRequestId
        const StartDate = data.suspensionForm.StartDate
        const EndDate = data.suspensionForm.EndDate
        
        MemSusRelease.VerifySuspensionReleaseRForm(SuspensionRequestId,MemberId,NRIC,MemberName,StartDate,EndDate)

        MemSusRelease.uplaodFile()

        MemSusRelease.verifyFileUploadSuccessMsg()

        MemSusRelease.verifyPageTitle()

        //MemSusRelease.Request()
        
    })



})