import CodeTypeDetail from '../../../../page-objects/SMCMS/PageActions/FS-004-Admin-Settings/FS-004-Code Type/CodeTypeDetails'
import data from '../../../../fixtures/Data_Module/FS-004-Admin-Settings/004-data'

describe('[TS03] Page Action Code Type Detail form',function(){


    it('[TC01] Verify title,contents and save Code Type Details form ', () => {

        //visit code type detail form
        cy.visit('/admin/codeTypeDetails')
        //Verify page title
        CodeTypeDetail.verifyPageTitle('Code Type Detail')

        //Fill out name field in code type details form
        CodeTypeDetail.FillOutNameField(data.CodeTypeDetail.Name)

        //Fill out the code type details form and click cancel button 
        CodeTypeDetail.CancelBelongUnder(data.CodeTypeDetail.belongUnder)

        //Fill out the code type details form and select code type
        CodeTypeDetail.SearchBelongUnder(data.CodeTypeDetail.belongUnder)

        //Save the code type details form
        CodeTypeDetail.Save() 

    })
    it('[TC02] Verify title,contents and cancel Code Type Details form ', () => {

        //visit code type detail form
        cy.visit('/admin/codeTypeDetails')
        //Verify page title
        CodeTypeDetail.verifyPageTitle('Code Type Detail')

        //Fill out name field in code type details form
        CodeTypeDetail.FillOutNameField(data.CodeTypeDetail.Name)

        //Fill out the code type details form and click cancel button 
        CodeTypeDetail.CancelBelongUnder(data.CodeTypeDetail.belongUnder)

        //Fill out the code type details form and select code type
        CodeTypeDetail.SearchBelongUnder(data.CodeTypeDetail.belongUnder)

        //Cancel the code type details form
        CodeTypeDetail.Cancel() 

    })

})