// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import loc from './locators'
import Chance from 'chance'

const email = chance.email()


Cypress.Commands.add('login', () => {
    cy.get(loc.LOGIN.EMAIL).type('teste12345@teste.com')
    cy.get(loc.LOGIN.SENHA).type('12345')
    cy.get(loc.LOGIN.ENVIAR).click()
})

Cypress.Commands.add('create_account', () => {
    cy.contains(loc.CREATE.ENTRAR).click()
    cy.get(loc.CREATE.EMAIL).type(email)
    cy.get(loc.CREATE.BOTAO_ENTRAR).click()
    cy.get(loc.CREATE.GENERO).click()
    cy.get(loc.CREATE.NOME_CLIENTE).type('Teste')
    cy.get(loc.CREATE.SOBRENOME_CLIENTE).type('Teste')
    cy.get(loc.CREATE.SENHA).type('12345')
    cy.get(loc.CREATE.NOME).type('Teste')
    cy.get(loc.CREATE.SOBRENOME).type('Teste')
    cy.get(loc.CREATE.EMPRESA).type('Company Teste')
    cy.get(loc.CREATE.ENDERECO).type('Rua 1, Casa 1')
    cy.get(loc.CREATE.CIDADE).type('Fortaleza')
    cy.get(loc.CREATE.ESTADO).select('California')
    cy.get(loc.CREATE.CEP).type('00000')
    cy.get(loc.CREATE.CELULAR).type('888888888')
    cy.get(loc.CREATE.ENVIAR).click()
    cy.contains(loc.CREATE.MINHA_CONTA).should('be.visible')
})

Cypress.Commands.add('search_product', () => {
    cy.get(loc.SEARCH.PRODUTO).type('Faded Short Sleeve')
    cy.get(loc.SEARCH.BUSCAR).click()
    cy.contains(loc.SEARCH.PRODUTO_COMPLETO).should('be.visible')
    cy.contains(loc.SEARCH.PRECO).should('be.visible')
})

Cypress.Commands.add('add_to_cart', () => {
    cy.get(loc.ADD.PRODUTO).type('Blouse')
    cy.get(loc.ADD.BUSCAR).click()
    cy.contains(loc.ADD.ADD_CARRINHO).click()
    cy.contains(loc.ADD.IR_CHECKOUT).click()
    cy.get(loc.ADD.CONTINUAR).click()
   
})

Cypress.Commands.add('finish_payment', () => {
    cy.get(loc.FINISH.CONTINUAR).click()
    cy.get(loc.FINISH.TERMOS).check()
    cy.get(loc.FINISH.CONTINUAR_COMPRA).click()
    cy.get(loc.FINISH.TRANSFERENCIA).click()
    cy.get(loc.FINISH.BOTAO_ENVIAR)
    .find('span')
    .contains('I confirm my order')
    .click()
    cy.contains(loc.FINISH.CONFIRMACAO).should('be.visible')
})   

Cypress.Commands.add('check_orders', () => {
    cy.contains(loc.ORDERS.ORDER).click()
    cy.contains(loc.ORDERS.PEDIDO1).should('be.visible')
    cy.contains(loc.ORDERS.PEDIDO2).should('be.visible')
    cy.contains(loc.ORDERS.PEDIDO3).should('be.visible')
    cy.contains(loc.ORDERS.PEDIDO4).should('be.visible')
    cy.contains(loc.ORDERS.DATA).should('be.visible')
    cy.contains(loc.ORDERS.PRECO).should('be.visible')
    cy.contains(loc.ORDERS.STATUS).should('be.visible')

})    
