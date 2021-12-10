// Cypress Common Custom Commands Library
/// <reference types="cypress-xpath" />
import Login from '../page-objects/SMCMS/Elements/Admin/FS001_Admin-SystemLogin/Login.js'
import PageHeader from '../page-objects/SMCMS/Elements/Common/PageHeader.js'

/*****************************************************
 * Command: LoginToSmcms
 * Description: Logs In to SMCMS
 *
 * @param {string} user Username
 * @param {string} pass Password
 *****************************************************/
Cypress.Commands.add('LoginToSmcms', (user, pass) => {
    cy.log('------ LoginToSmcms : ' + user + ' ------')
    cy.visit(Cypress.env('QA_ENVIRONMENT') + '/login')
    cy.EnterText(Login.TXT_MEMBERID, user)
    cy.EnterText(Login.TXT_PWD, pass)
    cy.Click(Login.BTN_LOGIN)
})

/*****************************************************
 * Command: LogoutOfSmcms
 * Description: Logs Out of SMCMS
 *
 * @param {string} user Username
 * @param {string} pass Password
 *****************************************************/
 Cypress.Commands.add('LogoutOfSmcms', () => {
    cy.log('------ LogoutOfSmcms ------')
    cy.xpath(PageHeader.DRP_USERLINKS).invoke('show')
    cy.Click(PageHeader.LNK_LOGOUTMEMBER)
})