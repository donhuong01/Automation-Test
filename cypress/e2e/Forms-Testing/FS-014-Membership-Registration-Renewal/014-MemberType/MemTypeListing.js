import data from '../../../fixtures/data'
import MemberTypeListingForm from '../../../page-objects/SMCMS/PageActions/Membership/FS014_Membership-Master-Registration-Renewal/MemberTypeListing'


describe('[TS05] Page Action Member Type Listing Form',function(){


    //Member Category
    const MemberCatergoryAll = data.memberinfo.memberCategory.All
    const MemberCatergoryPrincipal = data.memberinfo.memberCategory.Principal
    const MemberCatergoryDependent = data.memberinfo.memberCategory.Dependent
    const MemberCatergoryFreeNSF = data.memberinfo.memberCategory.FreeNSF

    //Defendent Type
     const DependentType = data.memberinfo.dependentType.All
     const DependentSpouse = data.memberinfo.dependentType.Spouse
     const DependentChild = data.memberinfo.dependentType.Child

    //Member Code
    const MemberCodeAS = data.memberinfo.memberCode.AS
    const MemberCodeAT = data.memberinfo.memberCode.AT
    const MemberCodeAV = data.memberinfo.memberCode.AV
    const MemberCodeLF = data.memberinfo.memberCode.LF
    const MemberCodeOF = data.memberinfo.memberCode.OF
    const MemberCodeOD = data.memberinfo.memberCode.OD
    const MemberCodeJH = data.memberinfo.memberCode.JH
    const MemberCodeJL = data.memberinfo.memberCode.JL
    const MemberCodeJV = data.memberinfo.memberCode.JV
    const MemberCodeSH = data.memberinfo.memberCode.SH
    const MemberCodeSV = data.memberinfo.memberCode.SV
    const MemberCodeSL = data.memberinfo.memberCode.SL

    //Membership type
 
    const MembershipTypeAssocaite = data.memberinfo.membershipType.ASSOCIATE
    const MembershipTypeAssocaiteSafvc = data.memberinfo.membershipType.ASSOCIATE_SAFVC
    const MembershipTypeLife = data.memberinfo.membershipType.LIFE
    const MembershipTypeVeteran = data.memberinfo.membershipType.VETERAN
    const MembershipTypeNsp = data.memberinfo.membershipType.NSF
    const MembershipTypeOrdinaryA = data.memberinfo.membershipType.ORDINARY_A
    const MembershipTypeOrdinaryB = data.memberinfo.membershipType.ORDINARY_B
    const MembershipTypeVeteranAssocaite = data.memberinfo.membershipType.VETERAN_ASSOCIATE
    const MembershipTypeVeteranC2d = data.memberinfo.membershipType.VETERAN_C2D

        
    it('Filter by member Category', function(){

        cy.visit('/membership/memberTypeList') //Visit web page for member listing 

        cy.wait(5000)

        MemberTypeListingForm.selectMemberCategory(MemberCatergoryPrincipal, MemberCodeAS)


    })

    it('Select Dependent Type', function(){

        cy.visit('/membership/memberTypeList') //Visit web page for member listing 
        
        cy.wait(5000)

        MemberTypeListingForm.selectDefendentType(DependentSpouse, MemberCodeSH)
   

    })

    it('Filter by Text Code ', function(){

        cy.visit('/membership/memberTypeList') //Visit web page for member listing 
        
        cy.wait(5000)

        MemberTypeListingForm.EnterTextCode(MemberCodeAS,MemberCatergoryPrincipal)
   

    })
    it('Filter by membership type', function(){

        cy.visit('/membership/memberTypeList') //Visit web page for member listing 
        
        cy.wait(5000)

        MemberTypeListingForm.EnterMembershipType(MembershipTypeAssocaite,MemberCatergoryPrincipal)

    })
    it('Filter by Member Category and Dependent type', function(){

        cy.visit('/membership/memberTypeList') //Visit web page for member listing 
        
        cy.wait(5000)

        MemberTypeListingForm.filterByMemberCategoryAndDependentType(MemberCatergoryDependent, DependentSpouse)
    })
    it('Create New',function(){

        cy.visit('/membership/memberTypeList')

        cy.wait(5000)

        MemberTypeListingForm.createNew()

    })
  

})