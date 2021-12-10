import elems_AzureAccess from '../../Elements/Common/AzureAccess.js'

class AzureAccess {
    login(data){

        cy.DisplayDataDescription(data)
        cy.GoToWebPage(Cypress.env('QA_ENVIRONMENT'))

        cy.get('body').then($body => {
            if ($body.find(elems_AzureAccess.TXT_EMAIL_CSS).length > 0) {   
                cy.EnterText(elems_AzureAccess.TXT_EMAIL, data.userCred.email)
                cy.Click(elems_AzureAccess.BTN_NEXT)
                cy.EnterText(elems_AzureAccess.TXT_PASSWORD, data.userCred.pass)
                cy.Click(elems_AzureAccess.BTN_SIGNIN)
                cy.Click(elems_AzureAccess.BTN_CONF_NO)
            }
        });
    }
}

export default AzureAccess